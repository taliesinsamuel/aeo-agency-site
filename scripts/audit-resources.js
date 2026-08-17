#!/usr/bin/env node
/**
 * Structural audit of the Resources pages.
 *
 * Per route: metadata, headings, schema, links, console errors.
 * Per route and width: horizontal overflow, elements crossing the viewport
 * edge, and UA default margins that quietly break grid alignment.
 *
 *   node scripts/audit-resources.js
 */
const { chromium } = require("playwright");

const BASE = process.env.BASE_URL || "http://127.0.0.1:8081";

const ROUTES = [
  "/work",
  "/research",
  "/insights",
  "/about",
  "/insights/what-is-answer-engine-optimization",
  "/insights/how-to-improve-visibility-in-chatgpt",
  "/insights/how-ai-recommends-local-businesses",
  "/insights/aeo-vs-seo",
];

const WIDTHS = [320, 360, 375, 390, 393, 414, 430, 768, 820, 1024, 1280, 1440];

let failures = 0;
const fail = (route, msg) => {
  failures++;
  console.log(`  FAIL ${route}: ${msg}`);
};

(async () => {
  const browser = await chromium.launch();

  // ---- per route: document quality -------------------------------------
  console.log("\n== document ==");
  for (const route of ROUTES) {
    const ctx = await browser.newContext({ viewport: { width: 1280, height: 900 } });
    const page = await ctx.newPage();
    const errors = [];
    page.on("console", (m) => m.type() === "error" && errors.push(m.text()));
    page.on("pageerror", (e) => errors.push("pageerror: " + e.message));

    const res = await page.goto(BASE + route, { waitUntil: "networkidle" });
    await page.waitForSelector(".aeo-nav", { timeout: 15000 });
    await page.waitForTimeout(600);

    if (res.status() !== 200) fail(route, `status ${res.status()}`);

    const info = await page.evaluate(() => {
      const meta = (sel, attr) => {
        const el = document.querySelector(sel);
        return el ? el.getAttribute(attr || "content") : null;
      };
      const hs = Array.from(document.querySelectorAll("main h1,main h2,main h3,main h4"));
      let order = true;
      let prev = 0;
      for (const h of hs) {
        const lvl = Number(h.tagName[1]);
        if (prev && lvl > prev + 1) order = false;
        prev = lvl;
      }
      const schema = Array.from(document.querySelectorAll('script[type="application/ld+json"]'))
        .map((s) => {
          try {
            return JSON.parse(s.textContent);
          } catch (e) {
            return { PARSE_ERROR: true };
          }
        });
      const types = [];
      for (const s of schema) {
        const graph = s["@graph"] || [s];
        for (const n of graph) if (n && n["@type"]) types.push(n["@type"]);
        if (s.PARSE_ERROR) types.push("PARSE_ERROR");
      }
      const badHref = Array.from(document.querySelectorAll("a[href]"))
        .map((a) => a.getAttribute("href"))
        .filter((h) => /127\.0\.0\.1|localhost|\.frag/.test(h));
      return {
        title: document.title,
        desc: meta('meta[name="description"]'),
        canonical: meta('link[rel="canonical"]', "href"),
        robots: meta('meta[name="robots"]'),
        ogTitle: meta('meta[property="og:title"]'),
        ogDesc: meta('meta[property="og:description"]'),
        ogUrl: meta('meta[property="og:url"]', "content"),
        ogImage: meta('meta[property="og:image"]'),
        ogType: meta('meta[property="og:type"]'),
        twitter: meta('meta[name="twitter:card"]'),
        h1s: Array.from(document.querySelectorAll("main h1")).map((h) => h.textContent.trim()),
        headingOrder: order,
        schemaTypes: types,
        badHref,
        hasNavResources: !!document.querySelector(".aeo-res-btn"),
        hasFooter: !!document.querySelector(".aeo-foot, footer"),
        // Only rendered text and real references count. chrome.frag carries
        // source comments naming Attio, which never reach the page.
        attio:
          /attio/i.test(document.body.innerText) ||
          Array.from(document.querySelectorAll("[href],[src],[class]")).some((el) =>
            /attio/i.test(
              (el.getAttribute("href") || "") +
                (el.getAttribute("src") || "") +
                (el.getAttribute("class") || "")
            )
          ),
        text: document.querySelector("main").innerText.length,
      };
    });

    if (!info.title || info.title.length < 20) fail(route, `weak title: ${info.title}`);
    if (!info.desc || info.desc.length < 70) fail(route, `weak description`);
    if (!info.canonical || !info.canonical.startsWith("https://answeredlabs.com"))
      fail(route, `canonical: ${info.canonical}`);
    if (info.h1s.length !== 1) fail(route, `${info.h1s.length} h1s`);
    if (!info.headingOrder) fail(route, "heading level skipped");
    if (!info.ogTitle || !info.ogDesc || !info.ogUrl || !info.ogImage || !info.ogType)
      fail(route, "incomplete Open Graph");
    if (!info.twitter) fail(route, "no twitter card");
    if (!info.schemaTypes.length) fail(route, "no schema");
    if (info.schemaTypes.includes("PARSE_ERROR")) fail(route, "invalid JSON-LD");
    if (info.badHref.length) fail(route, `local/dev hrefs: ${info.badHref.join(", ")}`);
    if (!info.hasNavResources) fail(route, "Resources nav missing");
    if (!info.hasFooter) fail(route, "footer missing");
    if (info.attio) fail(route, "Attio remnant in markup");
    if (errors.length) fail(route, `console: ${errors.join(" | ")}`);

    console.log(
      `  ${route}\n     ${info.title}\n     h1="${info.h1s[0]}" words~${Math.round(info.text / 6)} schema=[${info.schemaTypes.join(", ")}]`
    );
    await ctx.close();
  }

  // ---- per route: accessibility ----------------------------------------
  console.log("\n== accessibility ==");
  for (const route of ROUTES) {
    const ctx = await browser.newContext({ viewport: { width: 1280, height: 900 } });
    const page = await ctx.newPage();
    await page.goto(BASE + route, { waitUntil: "domcontentloaded" });
    // The chrome wires itself on an interval, so wait for the marker it sets
    // rather than guessing a delay.
    await page.waitForSelector('.aeo-res[data-aeo-res="1"]', { timeout: 15000 });
    await page.waitForTimeout(300);

    const a11y = await page.evaluate(() => {
      const name = (el) =>
        (el.getAttribute("aria-label") || el.textContent || "").replace(/\s+/g, " ").trim();
      const problems = [];

      if (!document.querySelector("main")) problems.push("no main landmark");
      if (!document.querySelector("header")) problems.push("no header landmark");
      if (!document.querySelector("nav")) problems.push("no nav landmark");
      if (!document.documentElement.getAttribute("lang")) problems.push("no lang on html");

      for (const img of document.querySelectorAll("main img")) {
        if (!img.hasAttribute("alt")) problems.push("img without alt");
      }
      for (const a of document.querySelectorAll("main a")) {
        if (!name(a) && !a.querySelector("img[alt]:not([alt=''])")) problems.push("link with no text");
      }
      for (const b of document.querySelectorAll("button")) {
        if (!name(b)) problems.push("button with no accessible name");
      }
      for (const t of document.querySelectorAll("main table")) {
        if (!t.querySelector("th")) problems.push("table without header cells");
        for (const th of t.querySelectorAll("thead th")) {
          if (!th.getAttribute("scope")) problems.push("th without scope");
        }
      }
      // Decorative glyphs must not be announced.
      for (const i of document.querySelectorAll("main .alr-arrow i, main .alr-qmark")) {
        const host = i.closest("[aria-hidden='true']") || i;
        if (host.getAttribute("aria-hidden") !== "true") problems.push("decorative glyph is announced");
      }
      // Touch targets on the things people actually tap.
      for (const el of document.querySelectorAll(".aeo-res-btn, main .alr-btn, main .alr-xlink")) {
        const r = el.getBoundingClientRect();
        if (r.height > 0 && r.height < 34) problems.push("small target: " + el.className + " " + Math.round(r.height) + "px");
      }
      return Array.from(new Set(problems));
    });

    // Keyboard: the menu must open, move and close from the keyboard alone.
    // Keys go to the element rather than to ambient page focus, which is not
    // reliable once a run has opened and closed several contexts.
    await page.bringToFront();
    await page.locator(".aeo-res-btn").press("ArrowDown");
    await page.waitForTimeout(250);
    const opened = await page.evaluate(() => ({
      open: document.querySelector(".aeo-res").getAttribute("data-open") === "1",
      focused: document.activeElement.className,
      expanded: document.querySelector(".aeo-res-btn").getAttribute("aria-expanded"),
    }));
    const items = page.locator(".aeo-res-panel .aeo-res-item");
    await items.nth(0).press("ArrowDown");
    await page.waitForTimeout(150);
    const moved = await page.evaluate(() => document.activeElement.textContent.trim());
    await items.nth(1).press("Escape");
    await page.waitForTimeout(200);
    const closed = await page.evaluate(() => ({
      open: document.querySelector(".aeo-res").getAttribute("data-open") === "1",
      onTrigger: document.activeElement.classList.contains("aeo-res-btn"),
      expanded: document.querySelector(".aeo-res-btn").getAttribute("aria-expanded"),
    }));

    // A visible focus ring on the first in-page link.
    const ring = await page.evaluate(() => {
      const a = document.querySelector("main a");
      if (!a) return true;
      a.focus();
      const cs = getComputedStyle(a);
      return cs.outlineStyle !== "none" || cs.boxShadow !== "none";
    });

    if (a11y.length) for (const p of a11y) fail(route, p);
    if (!opened.open || opened.expanded !== "true") fail(route, "ArrowDown did not open the menu");
    if (!opened.focused.includes("aeo-res-item")) fail(route, "focus did not enter the menu");
    if (!moved) fail(route, "ArrowDown did not move between items");
    if (closed.open || closed.expanded !== "false") fail(route, "Escape did not close the menu");
    if (!closed.onTrigger) fail(route, "focus not returned to the trigger");
    if (!ring) fail(route, "no visible focus indicator");
    if (!a11y.length) console.log(`  ${route}  landmarks, names, keyboard menu and focus ring all ok`);
    await ctx.close();
  }

  // ---- per route x width: layout ---------------------------------------
  console.log("\n== layout ==");
  for (const route of ROUTES) {
    const marks = [];
    for (const width of WIDTHS) {
      const ctx = await browser.newContext({ viewport: { width, height: 900 } });
      const page = await ctx.newPage();
      await page.goto(BASE + route, { waitUntil: "domcontentloaded" });
      await page.waitForSelector(".aeo-nav", { timeout: 15000 });
      await page.waitForTimeout(500);

      const r = await page.evaluate(() => {
        const de = document.documentElement;
        const over = de.scrollWidth - de.clientWidth;
        const wide = [];
        const uaMargin = [];
        // An element is only genuinely off-canvas if nothing between it and
        // the viewport clips or scrolls sideways. Wide tables live in a
        // horizontally scrollable wrapper on purpose.
        const contained = (el) => {
          for (let p = el.parentElement; p; p = p.parentElement) {
            const ox = getComputedStyle(p).overflowX;
            if (ox === "clip" || ox === "hidden" || ox === "auto" || ox === "scroll") return true;
          }
          return false;
        };
        const els = document.querySelectorAll("main *");
        for (const el of els) {
          const b = el.getBoundingClientRect();
          if (b.width === 0 && b.height === 0) continue;
          const cs = getComputedStyle(el);
          if (b.right > de.clientWidth + 1 || b.left < -1) {
            if (cs.overflowX !== "clip" && cs.overflowX !== "hidden" && !contained(el)) {
              wide.push(
                (el.className || el.tagName) + " " + Math.round(b.left) + ".." + Math.round(b.right)
              );
            }
          }
          // getComputedStyle resolves `auto` margins to used values, so a
          // generic threshold flags every centred block. Only figure and
          // blockquote carry a UA side margin worth catching.
          if (el.tagName === "FIGURE" || el.tagName === "BLOCKQUOTE") {
            const ml = parseFloat(cs.marginLeft);
            const mr = parseFloat(cs.marginRight);
            if (ml >= 20 || mr >= 20)
              uaMargin.push(el.tagName + "." + el.className + ` ${ml}/${mr}`);
          }
        }
        return { over, wide: wide.slice(0, 4), uaMargin: uaMargin.slice(0, 4) };
      });

      if (r.over > 0) marks.push(`${width}: overflow ${r.over}px`);
      if (r.wide.length) marks.push(`${width}: off-canvas ${r.wide.join(" ; ")}`);
      if (r.uaMargin.length) marks.push(`${width}: side margin ${r.uaMargin.join(" ; ")}`);
      await ctx.close();
    }
    if (marks.length) {
      for (const m of marks) fail(route, m);
    } else {
      console.log(`  ${route}  clean at ${WIDTHS.length} widths`);
    }
  }

  await browser.close();
  console.log(failures ? `\n${failures} problem(s)\n` : "\nAll checks passed\n");
  process.exit(failures ? 1 : 0);
})();
