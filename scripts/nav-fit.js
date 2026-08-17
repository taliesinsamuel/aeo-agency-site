#!/usr/bin/env node
/**
 * Compares nav geometry with and without the Resources item at the same
 * viewport, by removing the element at runtime. This isolates the cost of
 * the new item from any fit problem that already existed.
 */
const { chromium } = require("playwright");
const BASE = process.env.BASE_URL || "http://127.0.0.1:8081";
const WIDTHS = [320, 360, 375, 390, 414, 430, 560, 700, 760, 768];

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  const measure = () =>
    page.evaluate(() => {
      const nav = document.querySelector(".aeo-nav");
      const book = document.querySelector(".aeo-nav-book");
      const brand = document.querySelector(".aeo-nav-brand");
      const links = document.querySelector(".aeo-nav-links");
      const vw = document.documentElement.clientWidth;
      const rb = book.getBoundingClientRect();
      return {
        vw,
        navW: Math.round(nav.getBoundingClientRect().width),
        navScrollW: nav.scrollWidth,
        brandW: Math.round(brand.getBoundingClientRect().width),
        linksW: Math.round(links.getBoundingClientRect().width),
        bookLeft: Math.round(rb.left),
        bookRight: Math.round(rb.right),
        offRight: Math.round(rb.right) > vw,
      };
    });

  console.log("width | WITH Resources                      | WITHOUT Resources                  | verdict");
  for (const w of WIDTHS) {
    await page.setViewportSize({ width: w, height: 800 });
    await page.goto(BASE + "/pricing", { waitUntil: "domcontentloaded" });
    await page.waitForSelector(".aeo-res-btn", { timeout: 15000 });
    await page.waitForTimeout(800);

    const withRes = await measure();
    await page.evaluate(() => {
      const el = document.querySelector(".aeo-res");
      if (el) el.remove();
    });
    await page.waitForTimeout(150);
    const without = await measure();

    const fmt = (m) =>
      `nav=${String(m.navW).padStart(4)} links=${String(m.linksW).padStart(3)} bookR=${String(
        m.bookRight
      ).padStart(4)}${m.offRight ? " OFF" : "   "}`;

    const verdict =
      withRes.offRight && without.offRight
        ? "pre-existing overflow"
        : withRes.offRight && !without.offRight
        ? "REGRESSION: new item causes overflow"
        : "fits";
    console.log(`${String(w).padStart(5)} | ${fmt(withRes)} | ${fmt(without)} | ${verdict}`);
  }

  await browser.close();
})();
