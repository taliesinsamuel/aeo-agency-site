#!/usr/bin/env node
/**
 * Local production-shaped server:
 * - static files from repo root (same layout as Vercel)
 * - POST /api/free-audit → HubSpot handler
 * - clean URL rewrites + permanent redirects matching vercel.json
 */
const http = require("http");
const fs = require("fs");
const path = require("path");
const { URL } = require("url");
const handler = require("../api/free-audit.js");

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

// Load .env BEFORE resolving PORT (otherwise PORT=8082 in .env is ignored).
loadEnv();
const PORT = Number(process.env.PORT || 8082);

// Permanent redirects (301) to canonical clean URLs.
const REDIRECTS = [
  ["/contact", "/free-audit"],
  ["/contact/", "/free-audit"],
  ["/contact.html", "/free-audit"],
  ["/pricing.html", "/pricing"],
  ["/book.html", "/book"],
  ["/privacy.html", "/privacy"],
  ["/terms.html", "/terms"],
  ["/index.html", "/"],
  ["/pricing/", "/pricing"],
  ["/free-audit/", "/free-audit"],
  ["/book/", "/book"],
  ["/privacy/", "/privacy"],
  ["/terms/", "/terms"],
  ["/127.0.0.1_8081/dl/pricing.html", "/pricing"],
  ["/127.0.0.1_8081/dl/contact.html", "/free-audit"],
  ["/127.0.0.1_8081/dl/book.html", "/book"],
  ["/127.0.0.1_8081/dl/privacy.html", "/privacy"],
  ["/127.0.0.1_8081/dl/terms.html", "/terms"],
  ["/127.0.0.1_8081/dl/404.html", "/404"],
  ["/127.0.0.1_8081/dl/", "/"],
  ["/127.0.0.1_8081/dl", "/"],
];

const REWRITES = [
  ["/", "/127.0.0.1_8081/dl/"],
  ["/free-audit", "/127.0.0.1_8081/dl/contact.html"],
  ["/pricing", "/127.0.0.1_8081/dl/pricing.html"],
  ["/book", "/127.0.0.1_8081/dl/book.html"],
  ["/privacy", "/127.0.0.1_8081/dl/privacy.html"],
  ["/terms", "/127.0.0.1_8081/dl/terms.html"],
];

const NOT_FOUND = path.join(ROOT, "404.html");
const NOT_FOUND_FALLBACK = path.join(ROOT, "127.0.0.1_8081", "dl", "404.html");

const MIME = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".json": "application/json",
  ".webmanifest": "application/manifest+json; charset=utf-8",
  ".xml": "application/xml; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".gif": "image/gif",
  ".webp": "image/webp",
  ".woff": "font/woff",
  ".woff2": "font/woff2",
  ".ico": "image/x-icon",
  ".map": "application/json",
  ".txt": "text/plain; charset=utf-8",
};

function resolveRedirect(pathname) {
  for (const [from, to] of REDIRECTS) {
    if (pathname === from) return to;
  }
  return null;
}

function resolveUrlPath(pathname) {
  for (const [from, to] of REWRITES) {
    if (pathname === from) return to;
  }
  if (pathname.startsWith("/assets/")) {
    return "/127.0.0.1_8081/dl" + pathname;
  }
  return pathname;
}

function safeJoin(root, urlPath) {
  const decoded = decodeURIComponent(urlPath.split("?")[0]);
  const rel = decoded.replace(/^\/+/, "");
  const full = path.normalize(path.join(root, rel));
  if (!full.startsWith(root)) return null;
  return full;
}

function sendNotFound(res) {
  const target = fs.existsSync(NOT_FOUND)
    ? NOT_FOUND
    : fs.existsSync(NOT_FOUND_FALLBACK)
      ? NOT_FOUND_FALLBACK
      : null;
  if (!target) {
    res.statusCode = 404;
    res.setHeader("Content-Type", "text/plain; charset=utf-8");
    res.end("Not found");
    return;
  }
  res.statusCode = 404;
  res.setHeader("Content-Type", "text/html; charset=utf-8");
  res.setHeader("X-Robots-Tag", "noindex, nofollow");
  fs.createReadStream(target).pipe(res);
}

function sendFile(res, filePath) {
  fs.stat(filePath, (err, st) => {
    if (err || !st) {
      sendNotFound(res);
      return;
    }
    let target = filePath;
    if (st.isDirectory()) {
      const indexHtml = path.join(filePath, "index.html");
      if (fs.existsSync(indexHtml)) target = indexHtml;
      else {
        // Homepage scrape folder: pick the ua=*.html live file.
        try {
          const entries = fs.readdirSync(filePath);
          const html = entries.find((e) => e.endsWith(".html") && e.startsWith("ua="));
          if (html) target = path.join(filePath, html);
          else {
            sendNotFound(res);
            return;
          }
        } catch (e) {
          sendNotFound(res);
          return;
        }
      }
    }
    const ext = path.extname(target).toLowerCase();
    res.statusCode = 200;
    res.setHeader("Content-Type", MIME[ext] || "application/octet-stream");
    if (ext === ".html") {
      res.setHeader("Cache-Control", "public, max-age=0, must-revalidate");
    }
    fs.createReadStream(target).pipe(res);
  });
}

const server = http.createServer((req, res) => {
  const u = new URL(req.url || "/", "http://127.0.0.1");
  if (u.pathname === "/api/free-audit" || u.pathname === "/api/free-audit/") {
    res.setHeader("X-Robots-Tag", "noindex, nofollow");
    handler(req, res);
    return;
  }

  const redirected = resolveRedirect(u.pathname);
  if (redirected) {
    const dest = redirected + (u.search || "");
    res.statusCode = 301;
    res.setHeader("Location", dest);
    res.end();
    return;
  }

  const rewritten = resolveUrlPath(u.pathname);
  const filePath = safeJoin(ROOT, rewritten);
  if (!filePath) {
    res.statusCode = 400;
    res.end("Bad path");
    return;
  }
  sendFile(res, filePath);
});

server.on("error", (err) => {
  console.error(
    "Failed to bind http://127.0.0.1:" + PORT + "/",
    err && err.message ? err.message : err
  );
  process.exit(1);
});

server.listen(PORT, "127.0.0.1", () => {
  console.log("Serving http://127.0.0.1:" + PORT + "/ (static + /api/free-audit)");
  console.log("pid", process.pid);
  const token =
    (process.env.HUBSPOT_ACCESS_TOKEN && process.env.HUBSPOT_ACCESS_TOKEN.trim()) ||
    (process.env.HUBSPOT_PRIVATE_APP_TOKEN && process.env.HUBSPOT_PRIVATE_APP_TOKEN.trim()) ||
    "";
  if (token) {
    console.log("HUBSPOT_ACCESS_TOKEN: set");
  } else {
    console.warn(
      "HUBSPOT_ACCESS_TOKEN: MISSING\n" +
        "  Free Audit submissions will return 503 until you copy .env.example → .env\n" +
        "  and set HUBSPOT_ACCESS_TOKEN (HubSpot private app token)."
    );
  }
});
