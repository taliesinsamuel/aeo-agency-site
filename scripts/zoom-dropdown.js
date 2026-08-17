#!/usr/bin/env node
// Tight 2x capture of the Resources dropdown for visual review.
const { chromium } = require("playwright");
const BASE = process.env.BASE_URL || "http://127.0.0.1:8081";

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({
    viewport: { width: 1440, height: 900 },
    deviceScaleFactor: 2,
  });
  await page.goto(BASE + "/work", { waitUntil: "networkidle" });
  await page.waitForTimeout(1200);
  await page.click(".aeo-res-btn");
  await page.waitForTimeout(500);
  await page.mouse.move(1200, 700);
  await page.waitForTimeout(400);
  const r = await page.evaluate(() => {
    const p = document.querySelector(".aeo-res-panel").getBoundingClientRect();
    return { x: p.x, y: p.y, width: p.width, height: p.height };
  });
  await page.screenshot({
    path: ".shots/zoom-dropdown.png",
    clip: { x: r.x - 40, y: 0, width: r.width + 80, height: r.y + r.height + 40 },
  });
  await browser.close();
  console.log("ok");
})();
