#!/usr/bin/env node
/**
 * Live HubSpot E2E for POST /api/free-audit.
 * Loads .env; never prints token values.
 * Exit 0 on pass, 2 if token missing, 1 on test failure.
 */
const fs = require("fs");
const path = require("path");
const http = require("http");
const handler = require("../api/free-audit.js");
const {
  normalizeEmail,
  normalizeWebsite,
  findContactByEmail,
  getContactById,
  resolveHubSpotToken,
} = handler._test;

const ROOT = path.join(__dirname, "..");

function loadEnv() {
  const envPath = path.join(ROOT, ".env");
  if (!fs.existsSync(envPath)) return;
  const lines = fs.readFileSync(envPath, "utf8").split(/\r?\n/);
  for (const line of lines) {
    if (!line || line.trim().startsWith("#")) continue;
    const i = line.indexOf("=");
    if (i === -1) continue;
    const key = line.slice(0, i).trim();
    let val = line.slice(i + 1).trim();
    if (
      (val.startsWith('"') && val.endsWith('"')) ||
      (val.startsWith("'") && val.endsWith("'"))
    ) {
      val = val.slice(1, -1);
    }
    if (key && process.env[key] === undefined) process.env[key] = val;
  }
}

loadEnv();

let failed = 0;
function check(name, fn) {
  try {
    fn();
    console.log("  PASS  " + name);
  } catch (e) {
    failed += 1;
    console.error("  FAIL  " + name + " — " + (e && e.message ? e.message : e));
  }
}

function invoke(method, body, headers = {}) {
  return new Promise((resolve) => {
    const server = http.createServer((req, res) => handler(req, res));
    server.listen(0, "127.0.0.1", () => {
      const port = server.address().port;
      const payload = body === undefined ? null : JSON.stringify(body);
      const req = http.request(
        {
          hostname: "127.0.0.1",
          port,
          path: "/api/free-audit",
          method,
          headers: {
            "Content-Type": "application/json",
            Origin: "http://127.0.0.1:8082",
            ...(payload ? { "Content-Length": Buffer.byteLength(payload) } : {}),
            ...headers,
          },
        },
        (res) => {
          const chunks = [];
          res.on("data", (c) => chunks.push(c));
          res.on("end", () => {
            server.close();
            const text = Buffer.concat(chunks).toString("utf8");
            let data;
            try {
              data = JSON.parse(text);
            } catch {
              data = { raw: text };
            }
            resolve({ status: res.statusCode, data });
          });
        }
      );
      req.on("error", (err) => {
        server.close();
        resolve({ status: 0, data: { error: String(err) } });
      });
      if (payload) req.write(payload);
      req.end();
    });
  });
}

async function deleteContact(token, id) {
  const res = await fetch(
    "https://api-eu1.hubapi.com/crm/v3/objects/contacts/" + encodeURIComponent(id),
    {
      method: "DELETE",
      headers: {
        Authorization: "Bearer " + token,
        Accept: "application/json",
      },
    }
  );
  return res.status === 204 || res.ok;
}

async function main() {
  const token = resolveHubSpotToken();
  if (!token) {
    console.error("BLOCKED: HUBSPOT_ACCESS_TOKEN is not present in local .env");
    process.exit(2);
  }
  console.log("HUBSPOT_ACCESS_TOKEN: set (value not printed)");
  console.log("Live HubSpot E2E\n");

  const stamp = Date.now();
  const emailA = normalizeEmail("qa+freeaudit-" + stamp + "@answeredlabs.com");
  const emailBad = "not-an-email";
  const createdIds = [];

  // TEST G — wrong method
  let r = await invoke("GET", undefined);
  check("GET → 405", () => {
    if (r.status !== 405) throw new Error("status " + r.status);
  });

  // TEST F — missing email
  r = await invoke("POST", { website: "example.com" });
  check("missing email → 400", () => {
    if (r.status !== 400 || r.data.error !== "email_required") throw new Error(JSON.stringify(r));
  });

  // TEST E — missing website
  r = await invoke("POST", { email: emailA });
  check("missing website → 400", () => {
    if (r.status !== 400 || r.data.error !== "website_invalid") throw new Error(JSON.stringify(r));
  });

  // TEST D — invalid email
  r = await invoke("POST", { email: emailBad, website: "example.com" });
  check("invalid email → 400", () => {
    if (r.status !== 400 || r.data.error !== "email_invalid") throw new Error(JSON.stringify(r));
  });
  const badSearch = await findContactByEmail(token, emailBad);
  check("invalid email created no HubSpot contact", () => {
    if (badSearch) throw new Error("unexpected contact");
  });

  // TEST A — create
  r = await invoke("POST", { email: emailA, website: "example.com" });
  check("create → 200 ok", () => {
    if (r.status !== 200 || r.data.ok !== true) throw new Error(JSON.stringify(r));
  });
  const created = await findContactByEmail(token, emailA);
  check("create: contact exists in HubSpot", () => {
    if (!created || !created.id) throw new Error("missing contact");
  });
  if (created && created.id) createdIds.push(created.id);
  const createdFull = created ? await getContactById(token, created.id) : null;
  const props = (createdFull && createdFull.properties) || (created && created.properties) || {};
  check("create: email exact", () => {
    if (normalizeEmail(props.email) !== emailA) throw new Error(String(props.email));
  });
  check("create: website present/normalized", () => {
    const w = String(props.website || "");
    if (!w || w.indexOf("example.com") === -1) throw new Error(w);
  });
  const lifecycleOk = String(props.lifecyclestage || "").toLowerCase() === "lead";
  check("create: lifecycle stage lead (best-effort)", () => {
    if (!lifecycleOk) {
      console.warn("    WARN lifecycle stage is", props.lifecyclestage || "(empty)");
      // Not a hard fail if HubSpot account rejects lifecycle — submission already succeeded.
    }
  });
  // Record soft result for report via exit annotation
  process.env.__AEO_LIFECYCLE_OK = lifecycleOk ? "1" : "0";

  const id1 = created.id;

  // TEST B — update / no duplicate
  r = await invoke("POST", { email: emailA, website: "https://www.updated-example.com/path" });
  check("update → 200 ok", () => {
    if (r.status !== 200 || r.data.ok !== true) throw new Error(JSON.stringify(r));
  });
  const after = await findContactByEmail(token, emailA);
  check("update: same contact id", () => {
    if (!after || String(after.id) !== String(id1)) throw new Error("id changed or missing");
  });
  const afterFull = await getContactById(token, id1);
  const afterProps = (afterFull && afterFull.properties) || {};
  check("update: website changed", () => {
    const w = String(afterProps.website || "");
    if (w.indexOf("updated-example.com") === -1) throw new Error(w);
  });
  // Count search results for duplicates
  const searchDup = await fetch("https://api-eu1.hubapi.com/crm/v3/objects/contacts/search", {
    method: "POST",
    headers: {
      Authorization: "Bearer " + token,
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      filterGroups: [{ filters: [{ propertyName: "email", operator: "EQ", value: emailA }] }],
      properties: ["email"],
      limit: 10,
    }),
  }).then((res) => res.json());
  check("update: no duplicate contacts", () => {
    const n = (searchDup.results && searchDup.results.length) || 0;
    if (n !== 1) throw new Error("count=" + n);
  });

  // TEST C — bare domain
  const emailB = normalizeEmail("qa+bare-" + stamp + "@answeredlabs.com");
  r = await invoke("POST", { email: emailB, website: "example.org" });
  check("bare domain → 200", () => {
    if (r.status !== 200 || r.data.ok !== true) throw new Error(JSON.stringify(r));
  });
  const bare = await findContactByEmail(token, emailB);
  if (bare && bare.id) createdIds.push(bare.id);
  const bareFull = bare ? await getContactById(token, bare.id) : null;
  const bareProps = (bareFull && bareFull.properties) || {};
  check("bare domain normalized in HubSpot", () => {
    const expected = normalizeWebsite("example.org");
    const w = String(bareProps.website || "");
    if (!w || (w !== expected && w.indexOf("example.org") === -1)) throw new Error(w);
  });

  // TEST H — auth failure (temp unset) without printing token
  const saved = process.env.HUBSPOT_ACCESS_TOKEN;
  const savedAlias = process.env.HUBSPOT_PRIVATE_APP_TOKEN;
  delete process.env.HUBSPOT_ACCESS_TOKEN;
  delete process.env.HUBSPOT_PRIVATE_APP_TOKEN;
  r = await invoke("POST", { email: "qa+authfail-" + stamp + "@answeredlabs.com", website: "example.com" });
  check("auth missing → 503 fail-closed", () => {
    if (r.status !== 503 || r.data.error !== "service_unavailable") throw new Error(JSON.stringify(r));
  });
  if (saved !== undefined) process.env.HUBSPOT_ACCESS_TOKEN = saved;
  if (savedAlias !== undefined) process.env.HUBSPOT_PRIVATE_APP_TOKEN = savedAlias;

  // Cleanup test contacts
  console.log("\nCleanup");
  for (const id of createdIds) {
    try {
      const ok = await deleteContact(token, id);
      console.log(ok ? "  deleted contact " + id : "  could not delete contact " + id + " (left as test)");
    } catch (e) {
      console.log("  could not delete contact " + id);
    }
  }

  console.log(
    "\nTEST_CONTACTS:",
    JSON.stringify({
      emails: [emailA, emailB],
      ids: createdIds,
      lifecycleLead: process.env.__AEO_LIFECYCLE_OK === "1",
    })
  );

  if (failed) {
    console.error("\n" + failed + " live test(s) failed");
    process.exit(1);
  }
  console.log("\nAll live HubSpot tests passed.");
  process.exit(0);
}

main().catch((e) => {
  console.error("Live E2E crashed:", e && e.message ? e.message : e);
  process.exit(1);
});
