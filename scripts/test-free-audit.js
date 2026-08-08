#!/usr/bin/env node
/**
 * Automated validation + handler tests for POST /api/free-audit.
 * Does not require a live HubSpot token for most cases.
 */
const assert = require("assert");
const http = require("http");
const handler = require("../api/free-audit.js");
const { normalizeEmail, isValidEmail, normalizeWebsite } = handler._test;

let failed = 0;
function check(name, fn) {
  try {
    fn();
    console.log("  PASS  " + name);
  } catch (e) {
    failed += 1;
    console.error("  FAIL  " + name + " — " + (e.message || e));
  }
}

console.log("Unit: validation helpers");
check("normalizeEmail trims + lowercases", () => {
  assert.strictEqual(normalizeEmail("  Foo@Example.COM "), "foo@example.com");
});
check("isValidEmail accepts normal addresses", () => {
  assert.strictEqual(isValidEmail("you@yourbusiness.com"), true);
});
check("isValidEmail rejects garbage", () => {
  assert.strictEqual(isValidEmail("not-an-email"), false);
  assert.strictEqual(isValidEmail(""), false);
});
check("normalizeWebsite accepts bare domains", () => {
  assert.strictEqual(normalizeWebsite("example.com"), "https://example.com");
});
check("normalizeWebsite accepts www + https", () => {
  assert.strictEqual(normalizeWebsite("www.example.com"), "https://www.example.com");
  assert.strictEqual(normalizeWebsite("https://example.com/path"), "https://example.com/path");
});
check("normalizeWebsite rejects invalid", () => {
  assert.strictEqual(normalizeWebsite(""), "");
  assert.strictEqual(normalizeWebsite("notaurl"), "");
  assert.strictEqual(normalizeWebsite("http://localhost"), "");
});

function invoke(method, body, headers = {}) {
  return new Promise((resolve) => {
    const server = http.createServer((req, res) => {
      // Attach body stream for handler
      handler(req, res);
    });
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
            Origin: "http://127.0.0.1:8081",
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

async function runHandlerTests() {
  console.log("\nHandler: request validation (no HubSpot token needed for failures)");
  const saved = process.env.HUBSPOT_ACCESS_TOKEN;
  delete process.env.HUBSPOT_ACCESS_TOKEN;

  let r = await invoke("GET", undefined);
  check("rejects GET", () => {
    assert.strictEqual(r.status, 405);
    assert.strictEqual(r.data.error, "method_not_allowed");
  });

  r = await invoke("POST", {});
  check("rejects missing email", () => {
    assert.strictEqual(r.status, 400);
    assert.strictEqual(r.data.error, "email_required");
  });

  r = await invoke("POST", { email: "bad", website: "example.com" });
  check("rejects invalid email", () => {
    assert.strictEqual(r.status, 400);
    assert.strictEqual(r.data.error, "email_invalid");
  });

  r = await invoke("POST", { email: "you@example.com" });
  check("rejects missing website", () => {
    assert.strictEqual(r.status, 400);
    assert.strictEqual(r.data.error, "website_invalid");
  });

  r = await invoke("POST", { email: "you@example.com", website: "notaurl" });
  check("rejects malformed website", () => {
    assert.strictEqual(r.status, 400);
    assert.strictEqual(r.data.error, "website_invalid");
  });

  r = await invoke("POST", "not-json");
  // Content-Length / parse — body as string gets JSON.stringified again in invoke
  // Send raw invalid JSON via custom path:
  await new Promise((resolve) => {
    const server = http.createServer((req, res) => handler(req, res));
    server.listen(0, "127.0.0.1", () => {
      const port = server.address().port;
      const req = http.request(
        {
          hostname: "127.0.0.1",
          port,
          path: "/api/free-audit",
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Origin: "http://127.0.0.1:8081",
            "Content-Length": 11,
          },
        },
        (res) => {
          const chunks = [];
          res.on("data", (c) => chunks.push(c));
          res.on("end", () => {
            server.close();
            const data = JSON.parse(Buffer.concat(chunks).toString("utf8"));
            check("rejects malformed JSON", () => {
              assert.strictEqual(res.statusCode, 400);
              assert.strictEqual(data.error, "invalid_json");
            });
            resolve();
          });
        }
      );
      req.write("not-json{{{");
      req.end();
    });
  });

  r = await invoke("POST", {
    email: "you@example.com",
    website: "example.com",
  });
  check("missing token → 503 service_unavailable", () => {
    assert.strictEqual(r.status, 503);
    assert.strictEqual(r.data.error, "service_unavailable");
    assert.strictEqual(r.data.ok, false);
  });

  r = await invoke(
    "POST",
    { email: "you@example.com", website: "example.com", company_name: "bot" },
    {}
  );
  check("honeypot filled → fake success (no CRM)", () => {
    assert.strictEqual(r.status, 200);
    assert.strictEqual(r.data.ok, true);
  });

  // Simulate Vercel Node helper: JSON already parsed onto req.body (no stream).
  await new Promise((resolve) => {
    const server = http.createServer((req, res) => {
      req.body = { email: "you@example.com", website: "example.com" };
      handler(req, res);
    });
    server.listen(0, "127.0.0.1", () => {
      const port = server.address().port;
      const req = http.request(
        {
          hostname: "127.0.0.1",
          port,
          path: "/api/free-audit",
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Origin: "http://127.0.0.1:8081",
          },
        },
        (res) => {
          const chunks = [];
          res.on("data", (c) => chunks.push(c));
          res.on("end", () => {
            server.close();
            const data = JSON.parse(Buffer.concat(chunks).toString("utf8"));
            check("Vercel pre-parsed req.body is accepted", () => {
              // 503 = missing token (body parsed). 429 = rate limit after prior cases.
              // Must NOT be 400 email_required (would mean body was ignored).
              assert.ok(
                res.statusCode === 503 || res.statusCode === 429,
                "unexpected status " + res.statusCode + " " + JSON.stringify(data)
              );
              assert.notStrictEqual(data.error, "email_required");
            });
            resolve();
          });
        }
      );
      req.end();
    });
  });

  if (saved !== undefined) process.env.HUBSPOT_ACCESS_TOKEN = saved;
}

runHandlerTests().then(() => {
  console.log(failed ? "\n" + failed + " test(s) failed" : "\nAll automated API tests passed.");
  process.exit(failed ? 1 : 0);
});
