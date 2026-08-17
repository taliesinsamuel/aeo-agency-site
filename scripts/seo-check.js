#!/usr/bin/env node
/**
 * Lightweight technical SEO regression checks for Answered Labs.
 * Prefer running against the local production-shaped server.
 *
 * Usage:
 *   node scripts/seo-check.js
 *   BASE_URL=http://127.0.0.1:8082 node scripts/seo-check.js
 */
const http = require("http");
const https = require("https");
const { URL } = require("url");

const BASE = (process.env.BASE_URL || "http://127.0.0.1:8082").replace(/\/$/, "");
const ORIGIN = "https://answeredlabs.com";

const PAGES = [
  {
    path: "/",
    title: "Answer Engine Optimization Agency for Local Businesses | Answered Labs",
    description:
      "Answered Labs is an answer engine optimization agency for local businesses, focused on improving visibility across AI search and traditional search.",
    canonical: ORIGIN + "/",
    indexable: true,
  },
  {
    path: "/pricing",
    title: "AEO Pricing & Answer Engine Optimization Plans | Answered Labs",
    description:
      "Explore Answered Labs AEO pricing and plans for AI visibility, site structure, content, authority and SEO.",
    canonical: ORIGIN + "/pricing",
    indexable: true,
  },
  {
    path: "/free-audit",
    title: "Free AEO Audit & AI Visibility Check | Answered Labs",
    description:
      "Request a free AEO and AI visibility audit from Answered Labs and identify opportunities to improve how AI systems understand and recommend your business.",
    canonical: ORIGIN + "/free-audit",
    indexable: true,
  },
  {
    path: "/book",
    title: "Book an AEO Strategy Call | Answered Labs",
    description:
      "Book an AEO strategy call with Answered Labs to discuss AI visibility, answer engine optimization and SEO.",
    canonical: ORIGIN + "/book",
    indexable: true,
  },
  {
    path: "/privacy",
    title: "Privacy Policy | Answered Labs",
    description: "Read the Answered Labs Privacy Policy.",
    canonical: ORIGIN + "/privacy",
    indexable: true,
  },
  {
    path: "/terms",
    title: "Terms of Use | Answered Labs",
    description: "Read the Answered Labs Terms of Use.",
    canonical: ORIGIN + "/terms",
    indexable: true,
  },
];

const RESOURCES_URLS = [
  ORIGIN + "/work",
  ORIGIN + "/research",
  ORIGIN + "/insights",
  ORIGIN + "/about",
  ORIGIN + "/insights/what-is-answer-engine-optimization",
  ORIGIN + "/insights/how-to-improve-visibility-in-chatgpt",
  ORIGIN + "/insights/how-ai-recommends-local-businesses",
  ORIGIN + "/insights/aeo-vs-seo",
];

const REDIRECTS = [
  ["/contact", "/free-audit"],
  ["/contact.html", "/free-audit"],
  ["/pricing.html", "/pricing"],
  ["/book.html", "/book"],
  ["/privacy.html", "/privacy"],
  ["/terms.html", "/terms"],
  ["/index.html", "/"],
];

let failed = 0;
const titles = new Set();

function fetchRaw(url, opts = {}) {
  return new Promise((resolve, reject) => {
    const u = new URL(url);
    const lib = u.protocol === "https:" ? https : http;
    const req = lib.request(
      url,
      { method: opts.method || "GET", headers: opts.headers || {} },
      (res) => {
        const chunks = [];
        res.on("data", (c) => chunks.push(c));
        res.on("end", () => {
          resolve({
            status: res.statusCode || 0,
            headers: res.headers,
            body: Buffer.concat(chunks).toString("utf8"),
          });
        });
      }
    );
    req.on("error", reject);
    req.end();
  });
}

function assert(cond, msg) {
  if (!cond) {
    failed += 1;
    console.error("FAIL:", msg);
  } else {
    console.log("OK  :", msg);
  }
}

function count(re, html) {
  return (html.match(re) || []).length;
}

function metaContent(html, name) {
  const re = new RegExp(
    `<meta[^>]+(?:name|property)=["']${name}["'][^>]+content=["']([^"']*)["']`,
    "i"
  );
  const re2 = new RegExp(
    `<meta[^>]+content=["']([^"']*)["'][^>]+(?:name|property)=["']${name}["']`,
    "i"
  );
  const m = html.match(re) || html.match(re2);
  return m ? m[1] : null;
}

function linkHref(html, rel) {
  const re = new RegExp(
    `<link[^>]+rel=["']${rel}["'][^>]+href=["']([^"']*)["']`,
    "i"
  );
  const re2 = new RegExp(
    `<link[^>]+href=["']([^"']*)["'][^>]+rel=["']${rel}["']`,
    "i"
  );
  const m = html.match(re) || html.match(re2);
  return m ? m[1] : null;
}

function decodeEntities(s) {
  return String(s || "")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'");
}

function titleText(html) {
  const m = html.match(/<title>([\s\S]*?)<\/title>/i);
  return m ? decodeEntities(m[1].trim()) : null;
}

function extractJsonLd(html) {
  const blocks = [];
  const re = /<script[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi;
  let m;
  while ((m = re.exec(html))) {
    blocks.push(m[1].trim());
  }
  return blocks;
}

async function checkPage(page) {
  const res = await fetchRaw(BASE + page.path);
  assert(res.status === 200, `${page.path} status 200 (got ${res.status})`);
  const html = res.body;
  assert(!/localhost|127\.0\.0\.1|:808[0-2]|:3000/i.test(html.match(/<head[\s\S]*?<\/head>/i)?.[0] || ""), `${page.path} head has no localhost`);

  const t = titleText(html);
  assert(t === page.title, `${page.path} title exact`);
  assert(count(/<title>/gi, html) === 1, `${page.path} exactly one title`);
  if (t) {
    assert(!titles.has(t), `${page.path} title unique`);
    titles.add(t);
  }

  const desc = decodeEntities(metaContent(html, "description"));
  assert(desc === page.description, `${page.path} meta description`);
  assert(count(/name=["']description["']/gi, html) === 1, `${page.path} one description`);

  const canon = linkHref(html, "canonical");
  assert(canon === page.canonical, `${page.path} canonical ${page.canonical}`);
  assert(count(/rel=["']canonical["']/gi, html) === 1, `${page.path} one canonical`);

  assert(decodeEntities(metaContent(html, "og:title")) === page.title, `${page.path} og:title`);
  assert(decodeEntities(metaContent(html, "og:description")) === page.description, `${page.path} og:description`);
  assert(metaContent(html, "og:url") === page.canonical, `${page.path} og:url`);
  assert(metaContent(html, "og:image") === ORIGIN + "/og-image.png", `${page.path} og:image`);
  assert(metaContent(html, "og:site_name") === "Answered Labs", `${page.path} og:site_name`);
  assert(metaContent(html, "twitter:card") === "summary_large_image", `${page.path} twitter:card`);
  assert(metaContent(html, "twitter:image") === ORIGIN + "/og-image.png", `${page.path} twitter:image`);

  const robots = metaContent(html, "robots");
  if (page.indexable) {
    assert(!robots || !/noindex/i.test(robots), `${page.path} not noindex`);
  }

  const ldBlocks = extractJsonLd(html);
  assert(ldBlocks.length >= 1, `${page.path} has JSON-LD`);
  for (const block of ldBlocks) {
    let parsed;
    try {
      parsed = JSON.parse(block);
    } catch (e) {
      assert(false, `${page.path} JSON-LD parses`);
      continue;
    }
    assert(true, `${page.path} JSON-LD parses`);
    const text = JSON.stringify(parsed);
    assert(!/localhost|127\.0\.0\.1/i.test(text), `${page.path} JSON-LD no localhost`);
    assert(/answeredlabs\.com/i.test(text), `${page.path} JSON-LD production host`);
  }

  // Internal links should not target .html aliases or localhost.
  const badLinks = [...html.matchAll(/href=["']([^"']+)["']/gi)]
    .map((m) => m[1])
    .filter((h) => /pricing\.html|contact\.html|book\.html|privacy\.html|terms\.html|127\.0\.0\.1|localhost/i.test(h));
  assert(badLinks.length === 0, `${page.path} no legacy/localhost internal hrefs (${badLinks.slice(0, 3)})`);
}

async function checkRedirects() {
  for (const [from, to] of REDIRECTS) {
    const res = await fetchRaw(BASE + from, { method: "GET" });
    const loc = res.headers.location || "";
    assert(
      (res.status === 301 || res.status === 308) && (loc === to || loc.endsWith(to)),
      `${from} → ${to} (status ${res.status}, loc ${loc})`
    );
  }
}

async function checkRobotsSitemap() {
  const robots = await fetchRaw(BASE + "/robots.txt");
  assert(robots.status === 200, "robots.txt 200");
  assert(/Sitemap:\s*https:\/\/answeredlabs\.com\/sitemap\.xml/i.test(robots.body), "robots sitemap ref");
  assert(/Allow:\s*\//i.test(robots.body), "robots Allow /");
  assert(/OAI-SearchBot/i.test(robots.body), "robots mentions OAI-SearchBot");
  assert(/PerplexityBot/i.test(robots.body), "robots mentions PerplexityBot");
  assert(!/Disallow:\s*\/\s*$/m.test(robots.body), "robots not globally disallowing");

  const sm = await fetchRaw(BASE + "/sitemap.xml");
  assert(sm.status === 200, "sitemap.xml 200");
  assert(/<urlset[\s\S]*<\/urlset>/i.test(sm.body), "sitemap valid urlset");
  const locs = [...sm.body.matchAll(/<loc>([^<]+)<\/loc>/gi)].map((m) => m[1]);
  const expected = PAGES.length + RESOURCES_URLS.length;
  assert(locs.length === expected, `sitemap has ${expected} urls`);
  assert(new Set(locs).size === locs.length, "sitemap no duplicate urls");
  for (const page of PAGES) {
    assert(locs.includes(page.canonical), `sitemap includes ${page.canonical}`);
  }
  for (const url of RESOURCES_URLS) {
    assert(locs.includes(url), `sitemap includes ${url}`);
  }
  assert(!locs.some((u) => /localhost|127\.0\.0\.1|\.html|#|\/api\//i.test(u)), "sitemap clean urls");

  const llms = await fetchRaw(BASE + "/llms.txt");
  assert(llms.status === 200, "llms.txt 200");
  assert(/Answered Labs/i.test(llms.body), "llms.txt names Answered Labs");

  const og = await fetchRaw(BASE + "/og-image.png");
  assert(og.status === 200, "og-image.png 200");

  const apple = await fetchRaw(BASE + "/apple-touch-icon.png");
  assert(apple.status === 200, "apple-touch-icon.png 200");

  const assets = await fetchRaw(BASE + "/assets/answered-labs-website-logo-black.svg");
  assert(assets.status === 200, "/assets logo rewrite 200");

  const missing = await fetchRaw(BASE + "/this-page-should-404-seo-check");
  assert(missing.status === 404, "unknown URL returns 404");
}

async function main() {
  console.log("SEO check against", BASE);
  for (const page of PAGES) {
    await checkPage(page);
  }
  await checkRedirects();
  await checkRobotsSitemap();
  if (failed) {
    console.error(`\n${failed} check(s) failed`);
    process.exit(1);
  }
  console.log("\nAll SEO checks passed");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
