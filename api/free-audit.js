/**
 * POST /api/free-audit
 * Server-side Free Audit lead capture → HubSpot CRM (EU1).
 * Requires HUBSPOT_ACCESS_TOKEN (private app token). Never exposed to the client.
 */

const HUBSPOT_BASE = "https://api-eu1.hubapi.com";
const MAX_BODY_BYTES = 8 * 1024;
const FETCH_TIMEOUT_MS = 12000;
const RATE_WINDOW_MS = 60 * 1000;
const RATE_MAX = 8;

/** Best-effort per-instance limiter (not distributed). */
const rateBuckets = new Map();

function json(res, status, body) {
  res.statusCode = status;
  res.setHeader("Content-Type", "application/json; charset=utf-8");
  res.setHeader("Cache-Control", "no-store");
  res.end(JSON.stringify(body));
}

function normalizeEmail(raw) {
  if (typeof raw !== "string") return "";
  return raw.trim().toLowerCase();
}

function isValidEmail(email) {
  if (!email || email.length > 254) return false;
  // Sensible structure check — not RFC-perfect, intentionally not overly strict.
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function normalizeWebsite(raw) {
  if (typeof raw !== "string") return "";
  let v = raw.trim();
  if (!v || v.length > 500) return "";
  if (!/^[a-zA-Z][a-zA-Z0-9+.-]*:\/\//.test(v)) v = "https://" + v;
  try {
    const u = new URL(v);
    if (u.protocol !== "http:" && u.protocol !== "https:") return "";
    if (!u.hostname || u.hostname.indexOf(".") === -1) return "";
    if (/\s/.test(u.hostname)) return "";
    // Prefer origin + pathname without trailing slash noise
    let href = u.origin + (u.pathname === "/" ? "" : u.pathname);
    if (u.search) href += u.search;
    return href;
  } catch {
    return "";
  }
}

function clientIp(req) {
  const xf = req.headers["x-forwarded-for"];
  if (typeof xf === "string" && xf.trim()) return xf.split(",")[0].trim();
  return req.socket?.remoteAddress || "unknown";
}

function rateLimited(ip) {
  const now = Date.now();
  let bucket = rateBuckets.get(ip);
  if (!bucket || now - bucket.start > RATE_WINDOW_MS) {
    bucket = { start: now, count: 0 };
    rateBuckets.set(ip, bucket);
  }
  bucket.count += 1;
  // Opportunistic cleanup
  if (rateBuckets.size > 2000) {
    for (const [k, b] of rateBuckets) {
      if (now - b.start > RATE_WINDOW_MS) rateBuckets.delete(k);
    }
  }
  return bucket.count > RATE_MAX;
}

function isAllowedOrigin(req) {
  const origin = req.headers.origin;
  const referer = req.headers.referer || req.headers.referrer;
  const candidates = [origin, referer].filter((v) => typeof v === "string" && v);
  if (!candidates.length) {
    // Same-origin navigations / some clients omit Origin; allow and rely on other checks.
    return true;
  }
  for (const c of candidates) {
    try {
      const u = new URL(c);
      const host = u.hostname.toLowerCase();
      if (
        host === "answeredlabs.com" ||
        host === "www.answeredlabs.com" ||
        host === "localhost" ||
        host === "127.0.0.1" ||
        host.endsWith(".vercel.app")
      ) {
        return true;
      }
    } catch {
      /* ignore */
    }
  }
  return false;
}

function parseJsonText(raw) {
  if (!raw) return {};
  try {
    return JSON.parse(raw);
  } catch {
    throw Object.assign(new Error("invalid_json"), { code: "invalid_json" });
  }
}

/**
 * Vercel Node helpers pre-parse JSON onto req.body.
 * Local/dev servers still deliver a raw stream — support both.
 */
function readBody(req) {
  // Prefer Vercel's already-parsed body when present.
  if (Object.prototype.hasOwnProperty.call(req, "body") && req.body !== undefined) {
    if (req.body === null) return Promise.resolve({});
    if (typeof req.body === "object" && !Buffer.isBuffer(req.body)) {
      return Promise.resolve(req.body);
    }
    if (typeof req.body === "string") {
      try {
        return Promise.resolve(parseJsonText(req.body));
      } catch (e) {
        return Promise.reject(e);
      }
    }
    if (Buffer.isBuffer(req.body)) {
      try {
        return Promise.resolve(parseJsonText(req.body.toString("utf8")));
      } catch (e) {
        return Promise.reject(e);
      }
    }
  }

  return new Promise((resolve, reject) => {
    const chunks = [];
    let size = 0;
    let settled = false;
    function fail(err) {
      if (settled) return;
      settled = true;
      reject(err);
    }
    function ok(value) {
      if (settled) return;
      settled = true;
      resolve(value);
    }
    req.on("data", (chunk) => {
      size += chunk.length;
      if (size > MAX_BODY_BYTES) {
        fail(Object.assign(new Error("body_too_large"), { code: "body_too_large" }));
        try {
          req.destroy();
        } catch {
          /* ignore */
        }
        return;
      }
      chunks.push(chunk);
    });
    req.on("end", () => {
      try {
        ok(parseJsonText(Buffer.concat(chunks).toString("utf8")));
      } catch (e) {
        fail(e);
      }
    });
    req.on("error", fail);
  });
}

async function hubspotFetch(path, { method, token, body }) {
  const ctrl = new AbortController();
  const timer = setTimeout(() => ctrl.abort(), FETCH_TIMEOUT_MS);
  try {
    const res = await fetch(HUBSPOT_BASE + path, {
      method,
      headers: {
        Authorization: "Bearer " + token,
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: body ? JSON.stringify(body) : undefined,
      signal: ctrl.signal,
    });
    const text = await res.text();
    let data = null;
    if (text) {
      try {
        data = JSON.parse(text);
      } catch {
        data = { raw: text.slice(0, 200) };
      }
    }
    return { ok: res.ok, status: res.status, data };
  } finally {
    clearTimeout(timer);
  }
}

async function findContactByEmail(token, email) {
  const result = await hubspotFetch("/crm/v3/objects/contacts/search", {
    method: "POST",
    token,
    body: {
      filterGroups: [
        {
          filters: [
            {
              propertyName: "email",
              operator: "EQ",
              value: email,
            },
          ],
        },
      ],
      properties: ["email", "website"],
      limit: 1,
    },
  });
  if (!result.ok) {
    const err = new Error("hubspot_search_failed");
    err.hubspotStatus = result.status;
    err.hubspotData = result.data;
    throw err;
  }
  const results = result.data && Array.isArray(result.data.results) ? result.data.results : [];
  return results[0] || null;
}

async function createContact(token, email, website) {
  const result = await hubspotFetch("/crm/v3/objects/contacts", {
    method: "POST",
    token,
    body: {
      properties: {
        email,
        website,
      },
    },
  });
  if (result.ok) return { contact: result.data, created: true };

  // Conflict / duplicate — recover by id in message or search, then update
  if (result.status === 409) {
    let existingId = null;
    const msg =
      (result.data && (result.data.message || result.data.error)) || "";
    const m = String(msg).match(/Existing ID:\s*(\d+)/i);
    if (m) existingId = m[1];
    if (!existingId) {
      const existing = await findContactByEmail(token, email);
      if (existing && existing.id) existingId = existing.id;
    }
    if (existingId) {
      const contact = await updateContact(token, existingId, website);
      return { contact, created: false };
    }
  }

  const err = new Error("hubspot_create_failed");
  err.hubspotStatus = result.status;
  err.hubspotData = result.data;
  throw err;
}

async function updateContact(token, id, website) {
  const result = await hubspotFetch("/crm/v3/objects/contacts/" + encodeURIComponent(id), {
    method: "PATCH",
    token,
    body: {
      properties: {
        website,
      },
    },
  });
  if (!result.ok) {
    const err = new Error("hubspot_update_failed");
    err.hubspotStatus = result.status;
    err.hubspotData = result.data;
    throw err;
  }
  return result.data;
}

async function createFreeAuditNote(token, contactId, email, website) {
  // Association type 202 = note → contact (HubSpot-defined)
  const result = await hubspotFetch("/crm/v3/objects/notes", {
    method: "POST",
    token,
    body: {
      properties: {
        hs_timestamp: String(Date.now()),
        hs_note_body:
          "Free Audit request via answeredlabs.com\nEmail: " +
          email +
          "\nWebsite: " +
          website +
          "\nSource: Free Audit form",
      },
      associations: [
        {
          to: { id: String(contactId) },
          types: [
            {
              associationCategory: "HUBSPOT_DEFINED",
              associationTypeId: 202,
            },
          ],
        },
      ],
    },
  });
  if (!result.ok) {
    // Contact upsert already succeeded — log and continue
    console.warn("[free-audit] note create failed", result.status);
  }
}

async function upsertHubSpotContact(token, email, website) {
  const existing = await findContactByEmail(token, email);
  if (existing && existing.id) {
    const contact = await updateContact(token, existing.id, website);
    await createFreeAuditNote(token, existing.id, email, website);
    return { id: existing.id, created: false, contact };
  }
  const { contact, created } = await createContact(token, email, website);
  const id = contact && contact.id;
  if (id) await createFreeAuditNote(token, id, email, website);
  return { id, created, contact };
}

module.exports = async function handler(req, res) {
  // CORS for same-site + local/preview testing
  const origin = typeof req.headers.origin === "string" ? req.headers.origin : "";
  if (origin && isAllowedOrigin(req)) {
    res.setHeader("Access-Control-Allow-Origin", origin);
    res.setHeader("Vary", "Origin");
    res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  }

  if (req.method === "OPTIONS") {
    res.statusCode = 204;
    res.end();
    return;
  }

  if (req.method !== "POST") {
    json(res, 405, { ok: false, error: "method_not_allowed" });
    return;
  }

  const ct = String(req.headers["content-type"] || "");
  if (ct && ct.indexOf("application/json") === -1) {
    json(res, 415, { ok: false, error: "unsupported_media_type" });
    return;
  }

  if (!isAllowedOrigin(req)) {
    json(res, 403, { ok: false, error: "forbidden" });
    return;
  }

  const ip = clientIp(req);
  if (rateLimited(ip)) {
    json(res, 429, { ok: false, error: "rate_limited" });
    return;
  }

  let body;
  try {
    body = await readBody(req);
  } catch (e) {
    if (e && e.code === "body_too_large") {
      json(res, 413, { ok: false, error: "payload_too_large" });
      return;
    }
    json(res, 400, { ok: false, error: "invalid_json" });
    return;
  }

  // Honeypot — bots often fill hidden fields
  if (body && typeof body.company_name === "string" && body.company_name.trim()) {
    json(res, 200, { ok: true });
    return;
  }

  const email = normalizeEmail(body && body.email);
  const website = normalizeWebsite(body && body.website);

  if (!email) {
    json(res, 400, { ok: false, error: "email_required" });
    return;
  }
  if (!isValidEmail(email)) {
    json(res, 400, { ok: false, error: "email_invalid" });
    return;
  }
  if (!website) {
    json(res, 400, { ok: false, error: "website_invalid" });
    return;
  }

  const token = process.env.HUBSPOT_ACCESS_TOKEN;
  if (!token || !String(token).trim()) {
    console.error("[free-audit] HUBSPOT_ACCESS_TOKEN is not configured");
    json(res, 503, { ok: false, error: "service_unavailable" });
    return;
  }

  try {
    const result = await upsertHubSpotContact(String(token).trim(), email, website);
    json(res, 200, {
      ok: true,
      created: !!result.created,
    });
  } catch (err) {
    if (err && err.name === "AbortError") {
      console.error("[free-audit] HubSpot request timed out");
      json(res, 504, { ok: false, error: "upstream_timeout" });
      return;
    }
    const status = err && err.hubspotStatus;
    if (status === 401 || status === 403) {
      console.error("[free-audit] HubSpot authentication/authorization failed", status);
      json(res, 502, { ok: false, error: "crm_auth_failed" });
      return;
    }
    if (status >= 400 && status < 500) {
      console.error("[free-audit] HubSpot client error", status);
      json(res, 502, { ok: false, error: "crm_rejected" });
      return;
    }
    if (status >= 500) {
      console.error("[free-audit] HubSpot server error", status);
      json(res, 502, { ok: false, error: "crm_unavailable" });
      return;
    }
    console.error("[free-audit] unexpected error", err && err.message ? err.message : "unknown");
    json(res, 500, { ok: false, error: "server_error" });
  }
};

// Exported for local tests
module.exports._test = {
  normalizeEmail,
  isValidEmail,
  normalizeWebsite,
};
