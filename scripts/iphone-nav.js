#!/usr/bin/env node
/**
 * iPhone navigation regression pass.
 *
 * Exercises the header on a mobile Safari profile across the existing pages
 * and the new Resources pages: open and close at the top and half way down,
 * follow a menu link, go back, reopen, and rotate. After every step the page
 * must still scroll, the header must still be there, and nothing may be left
 * locking the body.
 *
 *   node scripts/iphone-nav.js
 */
const { webkit, devices } = require("playwright");

const BASE = process.env.BASE_URL || "http://127.0.0.1:8081";
const ROUTES = ["/", "/pricing", "/contact", "/book", "/work", "/insights", "/about"];

let failures = 0;
const check = (cond, label) => {
  if (!cond) {
    failures++;
    console.log("    FAIL " + label);
  }
  return cond;
};

async function state(page) {
  return page.evaluate(() => {
    const b = getComputedStyle(document.body);
    const h = getComputedStyle(document.documentElement);
    const header = document.querySelector("header");
    const hr = header && header.getBoundingClientRect();
    const res = document.querySelector(".aeo-res");
    const panel = document.querySelector(".aeo-res-panel");
    return {
      bodyOverflow: b.overflow + "/" + b.overflowY,
      htmlOverflow: h.overflow + "/" + h.overflowY,
      bodyPosition: b.position,
      touchAction: b.touchAction,
      headerVisible: !!header && hr.height > 0 && hr.bottom > 0,
      open: !!res && res.getAttribute("data-open") === "1",
      expanded: document.querySelector(".aeo-res-btn").getAttribute("aria-expanded"),
      panelVisible: !!panel && getComputedStyle(panel).visibility === "visible",
      scrollY: window.pageYOffset,
      scrollable: document.documentElement.scrollHeight > window.innerHeight + 10,
      // Anything appended over the page would show up as a full-viewport
      // fixed layer that is not the header.
      overlays: Array.from(document.body.children).filter((el) => {
        const cs = getComputedStyle(el);
        if (cs.position !== "fixed") return false;
        const r = el.getBoundingClientRect();
        return r.width >= window.innerWidth * 0.9 && r.height >= window.innerHeight * 0.9;
      }).length,
    };
  });
}

// Taps the trigger and waits for the menu to actually be open, so a missed
// tap reports as a clear failure instead of a later timeout.
const isOpen = (page) =>
  page.evaluate(
    () =>
      document.querySelector(".aeo-res").getAttribute("data-open") === "1" &&
      getComputedStyle(document.querySelector(".aeo-res-panel")).visibility === "visible"
  );

async function openMenu(page) {
  // Synthetic taps occasionally arrive twice, and a second tap on the trigger
  // legitimately closes the menu, so confirm it is still open a moment later
  // and tap again if it is not.
  for (let attempt = 0; attempt < 3; attempt++) {
    await page.tap(".aeo-res-btn");
    try {
      await page.waitForFunction(
        () =>
          document.querySelector(".aeo-res").getAttribute("data-open") === "1" &&
          getComputedStyle(document.querySelector(".aeo-res-panel")).visibility === "visible",
        null,
        { timeout: 2000 }
      );
    } catch (e) {
      await page.waitForTimeout(300);
      continue;
    }
    await page.waitForTimeout(350);
    if (await isOpen(page)) return true;
  }
  return false;
}

async function canScroll(page) {
  const attempt = () =>
    page.evaluate(async () => {
      const before = window.pageYOffset;
      window.scrollBy({ top: 220, behavior: "instant" });
      await new Promise((r) => setTimeout(r, 220));
      const moved = window.pageYOffset !== before;
      return moved || document.documentElement.scrollHeight <= window.innerHeight + 10;
    });
  if (await attempt()) return true;
  // A page still settling after a history restore can be short for a moment.
  await page.waitForTimeout(700);
  return attempt();
}

(async () => {
  const browser = await webkit.launch();

  for (const route of ROUTES) {
    console.log("  " + route);
    const ctx = await browser.newContext({ ...devices["iPhone 13"] });
    const page = await ctx.newPage();
    const errors = [];
    page.on("pageerror", (e) => {
      // The Calendly embed on /book cannot load or be reached across origins
      // over plain http locally. It predates this work and does not occur on
      // the live https site.
      if (/calendly|Protocols must match|cross-origin/i.test(e.message)) return;
      if (route === "/book" && /Load failed/i.test(e.message)) return;
      errors.push(e.message);
    });

    await page.goto(BASE + route, { waitUntil: "domcontentloaded" });
    await page.waitForSelector(".aeo-res-btn", { timeout: 20000 });
    await page.waitForTimeout(800);

    // Some existing pages already have full-viewport fixed layers of their
    // own (the homepage starfield), so only a new one matters.
    const baseOverlays = (await state(page)).overlays;

    // 1. open and close at the top
    check(await openMenu(page), route + " menu did not open at top");
    let s = await state(page);
    check(s.open && s.panelVisible, route + " panel not visible at top");
    check(s.overlays === baseOverlays, route + " an overlay was added");
    check(s.bodyOverflow.indexOf("hidden") === -1, route + " body overflow locked");
    check(s.bodyPosition !== "fixed", route + " body pinned");

    // Well clear of the panel, on ordinary page content.
    const vp = page.viewportSize();
    await page.touchscreen.tap(16, vp.height - 60);
    await page.waitForTimeout(350);
    s = await state(page);
    check(!s.open, route + " menu did not close on outside tap");
    check(await canScroll(page), route + " page not scrollable after close");

    // 2. open and close half way down
    await page.evaluate(() => {
      window.scrollTo({ top: Math.round(document.documentElement.scrollHeight / 2), behavior: "instant" });
    });
    await page.waitForTimeout(400);
    check(await openMenu(page), route + " menu did not open mid page");
    s = await state(page);
    check(s.panelVisible, route + " panel not visible mid page");
    check(s.headerVisible, route + " header not visible mid page");
    const mid = s.scrollY;
    check(mid > 100, route + " scroll position lost when opening");

    await page.keyboard.press("Escape");
    await page.waitForTimeout(300);
    s = await state(page);
    check(!s.open, route + " Escape did not close");
    // A couple of pixels of drift comes from the existing scroll-driven
    // sections settling; a lock or a jump would move it much further.
    check(Math.abs(s.scrollY - mid) <= 4, route + ` page jumped on close (${mid} -> ${s.scrollY})`);
    check(await canScroll(page), route + " page not scrollable mid page");

    // 3. follow a menu link, come back, reopen
    await page.evaluate(() => window.scrollTo({ top: 0, behavior: "instant" }));
    await page.waitForTimeout(600);
    check(await openMenu(page), route + " menu did not open before following a link");
    await page.tap(".aeo-res-panel .aeo-res-item:nth-of-type(2)");
    await page.waitForLoadState("domcontentloaded");
    await page.waitForSelector(".aeo-res-btn", { timeout: 20000 });
    await page.waitForTimeout(600);
    check(/\/(research|research\.html)/.test(page.url()), route + " menu link went to " + page.url());

    await page.goBack({ waitUntil: "domcontentloaded" });
    await page.waitForSelector(".aeo-res-btn", { timeout: 20000 });
    await page.waitForTimeout(700);
    s = await state(page);
    check(!s.open, route + " menu restored open after back");
    check(s.headerVisible, route + " header missing after back");
    check(await canScroll(page), route + " page not scrollable after back");

    check(await openMenu(page), route + " menu did not reopen after back");
    s = await state(page);
    check(s.panelVisible, route + " panel not visible after back");

    // 4. rotate with the menu open
    await page.setViewportSize({ width: 844, height: 390 });
    await page.waitForTimeout(500);
    const land = await page.evaluate(() => {
      const p = document.querySelector(".aeo-res-panel").getBoundingClientRect();
      // scrollWidth goes stale in WebKit after a synthetic viewport change,
      // so ask whether the page can actually be pushed sideways.
      window.scrollTo(9999, window.pageYOffset);
      const x = window.pageXOffset;
      window.scrollTo(0, window.pageYOffset);
      return {
        left: p.left,
        right: p.right,
        bottom: p.bottom,
        vw: document.documentElement.clientWidth,
        vh: window.innerHeight,
        over: x,
      };
    });
    check(land.left >= -1 && land.right <= land.vw + 1, route + " panel off screen in landscape");
    check(land.bottom <= land.vh + 1, route + " panel taller than landscape viewport");
    check(land.over === 0, route + " horizontal overflow in landscape");
    await page.keyboard.press("Escape");
    await page.waitForTimeout(300);
    check(await canScroll(page), route + " page not scrollable in landscape");

    check(errors.length === 0, route + " page errors: " + errors.join(" | "));
    await ctx.close();
  }

  await browser.close();
  console.log(failures ? `\n${failures} problem(s)\n` : "\nAll iPhone navigation checks passed\n");
  process.exit(failures ? 1 : 0);
})();
