#!/usr/bin/env node
/**
 * Submit canonical Answered Labs URLs to IndexNow (Bing / supporting engines).
 *
 * Intended for production deploys / content changes, NOT every local build.
 *
 * Usage:
 *   node scripts/submit-indexnow.js
 *   INDEXNOW_DRY_RUN=1 node scripts/submit-indexnow.js
 */
const https = require("https");

const HOST = "answeredlabs.com";
const KEY = "a8f3c2e91b7d4e0f6a5c8b2d9e1f4a70";
const KEY_LOCATION = `https://${HOST}/${KEY}.txt`;
const URL_LIST = [
  `https://${HOST}/`,
  `https://${HOST}/pricing`,
  `https://${HOST}/free-audit`,
  `https://${HOST}/book`,
  `https://${HOST}/privacy`,
  `https://${HOST}/terms`,
];

const payload = JSON.stringify({
  host: HOST,
  key: KEY,
  keyLocation: KEY_LOCATION,
  urlList: URL_LIST,
});

if (process.env.INDEXNOW_DRY_RUN === "1") {
  console.log("IndexNow dry run payload:");
  console.log(payload);
  process.exit(0);
}

const req = https.request(
  {
    hostname: "api.indexnow.org",
    path: "/indexnow",
    method: "POST",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Content-Length": Buffer.byteLength(payload),
    },
  },
  (res) => {
    const chunks = [];
    res.on("data", (c) => chunks.push(c));
    res.on("end", () => {
      const body = Buffer.concat(chunks).toString("utf8");
      console.log("IndexNow status", res.statusCode);
      if (body) console.log(body);
      // 200/202 accepted; 4xx may mean key not yet reachable on production.
      if (res.statusCode && res.statusCode >= 200 && res.statusCode < 300) {
        process.exit(0);
      }
      process.exit(1);
    });
  }
);
req.on("error", (err) => {
  console.error(err);
  process.exit(1);
});
req.write(payload);
req.end();
