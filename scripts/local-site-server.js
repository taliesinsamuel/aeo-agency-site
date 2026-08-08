#!/usr/bin/env node
/**
 * Local production-shaped server:
 * - static files from repo root (same layout as Vercel)
 * - POST /api/free-audit → HubSpot handler
 * - clean URL rewrites matching vercel.json
 */
const http = require("http");
const fs = require("fs");
const path = require("path");
const { URL } = require("url");
const handler = require("../api/free-audit.js");

const ROOT = path.join(__dirname, "..");
const PORT = Number(process.env.PORT || 8081);

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

const REWRITES = [
  ["/", "/127.0.0.1_8081/dl/"],
  ["/index.html", "/127.0.0.1_8081/dl/"],
  ["/contact.html", "/127.0.0.1_8081/dl/contact.html"],
  ["/pricing.html", "/127.0.0.1_8081/dl/pricing.html"],
  ["/book.html", "/127.0.0.1_8081/dl/book.html"],
  ["/contact", "/127.0.0.1_8081/dl/contact.html"],
  ["/pricing", "/127.0.0.1_8081/dl/pricing.html"],
  ["/book", "/127.0.0.1_8081/dl/book.html"],
];

const MIME = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".json": "application/json",
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

function resolveUrlPath(pathname) {
  for (const [from, to] of REWRITES) {
    if (pathname === from) return to;
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

function sendFile(res, filePath) {
  fs.stat(filePath, (err, st) => {
    if (err) {
      res.statusCode = 404;
      res.end("Not found");
      return;
    }
    let target = filePath;
    if (st.isDirectory()) {
      target = path.join(filePath, "index.html");
      if (!fs.existsSync(target)) {
        // Symlink index in dl/ points at the long ua= filename
        const entries = fs.readdirSync(filePath);
        const html = entries.find((e) => e.endsWith(".html") && e.startsWith("ua="));
        if (html) target = path.join(filePath, html);
        else {
          res.statusCode = 404;
          res.end("Not found");
          return;
        }
      }
    }
    const ext = path.extname(target).toLowerCase();
    res.statusCode = 200;
    res.setHeader("Content-Type", MIME[ext] || "application/octet-stream");
    fs.createReadStream(target).pipe(res);
  });
}

const server = http.createServer((req, res) => {
  const u = new URL(req.url || "/", "http://127.0.0.1");
  if (u.pathname === "/api/free-audit" || u.pathname === "/api/free-audit/") {
    handler(req, res);
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

server.listen(PORT, "127.0.0.1", () => {
  console.log("Serving http://127.0.0.1:" + PORT + "/ (static + /api/free-audit)");
  console.log(
    "HUBSPOT_ACCESS_TOKEN:",
    process.env.HUBSPOT_ACCESS_TOKEN ? "set" : "MISSING — add to .env for live CRM tests"
  );
});
