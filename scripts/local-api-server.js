#!/usr/bin/env node
/**
 * Local stand-in for Vercel serverless /api/free-audit while ./serve.sh serves static files.
 * Loads .env from repo root if present (HUBSPOT_ACCESS_TOKEN=...).
 */
const http = require("http");
const fs = require("fs");
const path = require("path");
const handler = require("../api/free-audit.js");

const ROOT = path.join(__dirname, "..");
const PORT = Number(process.env.API_PORT || 3001);

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

const server = http.createServer((req, res) => {
  if (req.url === "/api/free-audit" || req.url === "/api/free-audit/") {
    handler(req, res);
    return;
  }
  res.statusCode = 404;
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify({ ok: false, error: "not_found" }));
});

server.listen(PORT, "127.0.0.1", () => {
  console.log("Local API listening on http://127.0.0.1:" + PORT + "/api/free-audit");
  console.log(
    "HUBSPOT_ACCESS_TOKEN:",
    process.env.HUBSPOT_ACCESS_TOKEN ? "set" : "MISSING (set in .env)"
  );
});
