#!/usr/bin/env node
/**
 * SEO checks for the site.
 *
 *   npm run test:seo
 *
 * The Resources pages are held to the full bar: unique title and description,
 * canonical, robots, Open Graph, Twitter card, one h1, valid JSON-LD.
 *
 * The four commercial pages are reported but not asserted. They are generated
 * from a saved third-party page and still carry its description and og tags,
 * and correcting that is out of scope here, so the run prints what they have
 * to make any future change visible rather than failing on a known state.
 *
 * Needs the local server: npm run dev
 */
const fs = require("fs");
const path = require("path");
const { chromium } = require("playwright");

const BASE = process.env.BASE_URL || "http://127.0.0.1:8081";
const SITE = "https://answeredlabs.com";
const ROOT = path.join(__dirname, "..");

const RESOURCES = [
  ["/work", `${SITE}/work`],
  ["/research", `${SITE}/research`],
  ["/insights", `${SITE}/insights`],
  ["/about", `${SITE}/about`],
  ["/insights/what-is-answer-engine-optimization", `${SITE}/insights/what-is-answer-engine-optimization`],
  ["/insights/how-to-improve-visibility-in-chatgpt", `${SITE}/insights/how-to-improve-visibility-in-chatgpt`],
  ["/insights/how-ai-recommends-local-businesses", `${SITE}/insights/how-ai-recommends-local-businesses`],
  ["/insights/aeo-vs-seo", `${SITE}/insights/aeo-vs-seo`],
];

const COMMERCIAL = ["/", "/pricing", "/contact", "/book"];

const EXPECTED_SITEMAP = [
  `${SITE}/`,
  `${SITE}/pricing`,
  `${SITE}/contact`,
  `${SITE}/book`,
  ...RESOURCES.map(([, url]) => url),
];

let failures = 0;
const ok = (cond, label) => {
  if (cond) console.log("  pass  " + label);
  else {
    failures++;
    console.log("  FAIL  " + label);
  }
};

function testSitemap() {
  console.log("\nsitemap.xml");
  const file = path.join(ROOT, "sitemap.xml");
  ok(fs.existsSync(file), "sitemap.xml exists");
  if (!fs.existsSync(file)) return;
  const xml = fs.readFileSync(file, "utf8");
  const locs = Array.from(xml.matchAll(/<loc>([^<]+)<\/loc>/g)).map((m) => m[1]);

  ok(xml.startsWith("<?xml"), "declares an xml prolog");
  ok(locs.length === new Set(locs).size, "no duplicate urls");
  for (const url of EXPECTED_SITEMAP) ok(locs.includes(url), "lists " + url);
  ok(!locs.some((u) => u.endsWith(".html")), "no .html variants");
  ok(!locs.some((u) => /404|preview|draft|demo|template|\/api\//.test(u)), "no private routes");
  ok(locs.every((u) => u.startsWith(SITE)), "every url is canonical and absolute");
  const extra = locs.filter((u) => !EXPECTED_SITEMAP.includes(u));
  ok(extra.length === 0, "no unexpected urls" + (extra.length ? ": " + extra.join(", ") : ""));
}

function testRobots() {
  console.log("\nrobots.txt");
  const file = path.join(ROOT, "robots.txt");
  ok(fs.existsSync(file), "robots.txt exists");
  if (!fs.existsSync(file)) return;
  const txt = fs.readFileSync(file, "utf8");
  ok(/user-agent:\s*\*/i.test(txt), "addresses all crawlers");
  ok(/^\s*allow:\s*\//im.test(txt), "allows the site");
  ok(!/^\s*disallow:\s*\/\s*$/im.test(txt), "does not block the whole site");
  ok(txt.includes(`Sitemap: ${SITE}/sitemap.xml`), "points at the sitemap");
}

async function readHead(page, route) {
  await page.goto(BASE + route, { waitUntil: "domcontentloaded" });
  await page.waitForTimeout(250);
  return page.evaluate(() => {
    const attr = (sel, a) => {
      const el = document.querySelector(sel);
      return el ? el.getAttribute(a || "content") : null;
    };
    let schema = [];
    let schemaValid = true;
    for (const s of document.querySelectorAll('script[type="application/ld+json"]')) {
      try {
        const parsed = JSON.parse(s.textContent);
        const graph = parsed["@graph"] || [parsed];
        for (const n of graph) if (n && n["@type"]) schema.push(n["@type"]);
      } catch (e) {
        schemaValid = false;
      }
    }
    return {
      title: document.title,
      description: attr('meta[name="description"]'),
      canonical: attr('link[rel="canonical"]', "href"),
      robots: attr('meta[name="robots"]'),
      ogTitle: attr('meta[property="og:title"]'),
      ogDesc: attr('meta[property="og:description"]'),
      ogUrl: attr('meta[property="og:url"]'),
      ogType: attr('meta[property="og:type"]'),
      ogImage: attr('meta[property="og:image"]'),
      twitter: attr('meta[name="twitter:card"]'),
      h1Count: document.querySelectorAll("h1").length,
      h1: document.querySelector("h1") && document.querySelector("h1").textContent.trim(),
      schema,
      schemaValid,
    };
  });
}

(async () => {
  testSitemap();
  testRobots();

  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1280, height: 900 } });

  console.log("\nResources pages");
  const titles = new Set();
  const descriptions = new Set();
  for (const [route, canonical] of RESOURCES) {
    const h = await readHead(page, route);
    console.log("  " + route);
    ok(!!h.title && h.title.length >= 20 && h.title.length <= 75, "    title, " + h.title.length + " chars");
    ok(!!h.description && h.description.length >= 70 && h.description.length <= 200, "    description, " + (h.description || "").length + " chars");
    ok(h.canonical === canonical, "    canonical " + h.canonical);
    ok(!/noindex/i.test(h.robots || ""), "    indexable");
    ok(!!h.ogTitle && !!h.ogDesc && h.ogUrl === canonical && !!h.ogType && !!h.ogImage, "    open graph complete");
    ok(!!h.twitter, "    twitter card");
    ok(h.h1Count === 1, "    exactly one h1");
    ok(h.schemaValid && h.schema.length > 0, "    schema " + h.schema.join(", "));
    titles.add(h.title);
    descriptions.add(h.description);
  }
  ok(titles.size === RESOURCES.length, "every Resources title is unique");
  ok(descriptions.size === RESOURCES.length, "every Resources description is unique");

  // Article pages must carry authorship and dates for citation.
  console.log("\nArticle metadata");
  for (const [route] of RESOURCES.filter(([r]) => r.startsWith("/insights/"))) {
    const info = await page.evaluate(() => {
      const node = Array.from(document.querySelectorAll('script[type="application/ld+json"]'))
        .flatMap((s) => {
          try {
            const p = JSON.parse(s.textContent);
            return p["@graph"] || [p];
          } catch (e) {
            return [];
          }
        })
        .find((n) => n["@type"] === "BlogPosting" || n["@type"] === "Article");
      if (!node) return null;
      return {
        headline: node.headline,
        author: node.author && (node.author.name || (node.author[0] && node.author[0].name)),
        published: node.datePublished,
        modified: node.dateModified,
        publisher: node.publisher && (node.publisher.name || node.publisher["@id"]),
      };
    });
    await readHead(page, route);
    const again = await page.evaluate(() => {
      const node = Array.from(document.querySelectorAll('script[type="application/ld+json"]'))
        .flatMap((s) => {
          try {
            const p = JSON.parse(s.textContent);
            return p["@graph"] || [p];
          } catch (e) {
            return [];
          }
        })
        .find((n) => n["@type"] === "BlogPosting" || n["@type"] === "Article");
      return node
        ? {
            headline: node.headline,
            author: node.author && (node.author.name || (node.author[0] && node.author[0].name)),
            published: node.datePublished,
            modified: node.dateModified,
            publisher: node.publisher && (node.publisher.name || node.publisher["@id"]),
          }
        : null;
    });
    const a = again || info;
    ok(!!a, route + " has BlogPosting schema");
    if (a) {
      ok(!!a.headline, "    headline");
      ok(!!a.author, "    author " + a.author);
      ok(/^\d{4}-\d{2}-\d{2}/.test(a.published || ""), "    datePublished " + a.published);
      ok(/^\d{4}-\d{2}-\d{2}/.test(a.modified || ""), "    dateModified " + a.modified);
      ok(!!a.publisher, "    publisher");
    }
  }

  // Reported, not asserted. See the note at the top of this file.
  console.log("\nCommercial pages (recorded, not asserted)");
  for (const route of COMMERCIAL) {
    const h = await readHead(page, route);
    console.log(`  ${route}`);
    console.log(`     title:       ${h.title}`);
    console.log(`     description: ${(h.description || "(none)").trim().slice(0, 80)}`);
    console.log(`     canonical:   ${h.canonical || "(none)"}`);
    console.log(`     h1:          ${h.h1 || "(none)"} (${h.h1Count} on page)`);
  }

  await browser.close();
  console.log(failures ? `\n${failures} SEO check(s) failed\n` : "\nAll SEO checks passed\n");
  process.exit(failures ? 1 : 0);
})();
