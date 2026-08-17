#!/usr/bin/env node
/**
 * Review screenshots for the Resources section.
 *
 * node scripts/shots.js            -> the full review set
 * node scripts/shots.js <name>     -> one shot by name
 */
const { chromium } = require("playwright");
const path = require("path");
const fs = require("fs");

const BASE = process.env.BASE_URL || "http://127.0.0.1:8081";
const OUT = path.join(__dirname, "..", ".shots");

const DESKTOP = { width: 1440, height: 900 };
const MOBILE = { width: 390, height: 844 };

const SHOTS = [
  // --- desktop ---
  { name: "01-resources-dropdown", route: "/work", vp: DESKTOP, openMenu: true, clip: { x: 0, y: 0, width: 1440, height: 460 } },
  { name: "02-work-hero", route: "/work", vp: DESKTOP, clip: { x: 0, y: 0, width: 1440, height: 1500 } },
  { name: "03-work-testimonials", route: "/work", vp: DESKTOP, anchorText: "What clients notice first", height: 900 },
  { name: "04-about-hero", route: "/about", vp: DESKTOP, clip: { x: 0, y: 0, width: 1440, height: 1100 } },
  { name: "05-about-founders", route: "/about", vp: DESKTOP, anchorText: "Two people, so far", height: 1100 },
  { name: "06-research", route: "/research", vp: DESKTOP, clip: { x: 0, y: 0, width: 1440, height: 1650 } },
  { name: "07-insights", route: "/insights", vp: DESKTOP, clip: { x: 0, y: 0, width: 1440, height: 1500 } },
  { name: "08-article", route: "/insights/aeo-vs-seo", vp: DESKTOP, clip: { x: 0, y: 0, width: 1440, height: 1700 } },

  // --- mobile ---
  { name: "09-mobile-resources-nav", route: "/work", vp: MOBILE, openMenu: true, clip: { x: 0, y: 0, width: 390, height: 520 } },
  { name: "10-mobile-work", route: "/work", vp: MOBILE, clip: { x: 0, y: 0, width: 390, height: 1400 } },
  { name: "11-mobile-about", route: "/about", vp: MOBILE, clip: { x: 0, y: 0, width: 390, height: 1200 } },
  { name: "12-mobile-research", route: "/research", vp: MOBILE, clip: { x: 0, y: 0, width: 390, height: 1300 } },
  { name: "13-mobile-insights", route: "/insights", vp: MOBILE, clip: { x: 0, y: 0, width: 390, height: 1300 } },
  { name: "14-mobile-article", route: "/insights/aeo-vs-seo", vp: MOBILE, clip: { x: 0, y: 0, width: 390, height: 1300 } },
];

(async () => {
  fs.mkdirSync(OUT, { recursive: true });
  const only = process.argv[2];
  const list = only ? SHOTS.filter((s) => s.name.includes(only)) : SHOTS;
  const browser = await chromium.launch();

  for (const s of list) {
    const ctx = await browser.newContext({ viewport: s.vp, deviceScaleFactor: 2 });
    const page = await ctx.newPage();
    await page.goto(BASE + s.route, { waitUntil: "networkidle" });
    await page.waitForSelector(".aeo-nav", { timeout: 20000 });
    await page.waitForTimeout(1600);

    // Scroll-reveal is driven by IntersectionObserver, which never fires for
    // regions a full-page capture reaches without the viewport passing over
    // them. Walk the page once so everything has settled into its final state.
    // The site sets scroll-behavior:smooth, so each jump has to be forced to
    // instant or the walk animates, overshoots and misses most sections.
    await page.evaluate(async () => {
      const step = Math.round(window.innerHeight * 0.6);
      for (let y = 0; y < document.documentElement.scrollHeight; y += step) {
        window.scrollTo({ top: y, behavior: "instant" });
        await new Promise((r) => setTimeout(r, 120));
      }
      window.scrollTo({ top: 0, behavior: "instant" });
      await new Promise((r) => setTimeout(r, 300));
    });
    await page.waitForTimeout(600);

    if (s.openMenu) {
      await page.click(".aeo-res-btn");
      await page.waitForTimeout(500);
    }

    let clip = s.clip;
    if (s.anchorText) {
      const y = await page.evaluate((text) => {
        const els = Array.from(document.querySelectorAll("h2, h3"));
        const el = els.find((e) => e.textContent.trim().includes(text));
        if (!el) return null;
        return Math.max(0, el.getBoundingClientRect().top + window.scrollY - 90);
      }, s.anchorText);
      if (y == null) {
        console.log(`  ! anchor not found for ${s.name}: ${s.anchorText}`);
        await ctx.close();
        continue;
      }
      clip = { x: 0, y, width: s.vp.width, height: s.height || 900 };
    }

    const full = await page.evaluate(() => document.documentElement.scrollHeight);
    if (clip) {
      clip.y = Math.max(0, Math.min(clip.y, Math.max(0, full - 200)));
      clip.height = Math.max(200, Math.min(clip.height, full - clip.y));
    }

    // clip is in page coordinates, so it needs fullPage to reach anything
    // below the fold.
    await page.screenshot({ path: path.join(OUT, s.name + ".png"), clip, fullPage: true });
    console.log("  " + s.name + ".png");
    await ctx.close();
  }

  await browser.close();
})();
