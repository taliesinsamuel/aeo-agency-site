#!/usr/bin/env node
/**
 * Layout lock for the frozen commercial pages.
 *
 * Pixel hashing is useless on these pages: the hero animates, HubSpot renders
 * its form asynchronously and the Calendly iframe settles at a different
 * height on every load, so two captures of identical code never match. This
 * records the geometry of every element below the header instead, which is
 * what "nothing moved" actually means, and diffs those boxes.
 *
 *   node scripts/layout-lock.js capture <name>
 *   node scripts/layout-lock.js compare <a> <b>
 *
 * Always compare a control pair (two captures of the same code) alongside the
 * real pair, so third-party churn can be told apart from a regression.
 */
const { chromium } = require("playwright");
const fs = require("fs");
const path = require("path");

const BASE = process.env.BASE_URL || "http://127.0.0.1:8081";
const OUT = path.join(__dirname, "..", ".layout-lock");

const PAGES = [
  ["home", "/"],
  ["pricing", "/pricing"],
  ["free-audit", "/contact"],
  ["book", "/book"],
];

const VIEWPORTS = [
  ["desktop", 1440, 900],
  ["mobile", 390, 844],
];

async function capture(name) {
  fs.mkdirSync(OUT, { recursive: true });
  const browser = await chromium.launch();
  const snapshot = {};

  for (const [vpName, width, height] of VIEWPORTS) {
    const ctx = await browser.newContext({
      viewport: { width, height },
      deviceScaleFactor: 1,
      reducedMotion: "reduce",
    });
    const page = await ctx.newPage();
    for (const [pageName, route] of PAGES) {
      await page.goto(BASE + route, { waitUntil: "networkidle" });
      // chrome.frag patches the DOM on an interval; let it finish.
      await page.waitForTimeout(2500);
      await page.evaluate(() => window.scrollTo(0, 0));
      await page.waitForTimeout(400);

      snapshot[`${pageName}-${vpName}`] = await page.evaluate(() => {
        const header = document.querySelector("header");
        const headerBottom = header ? header.getBoundingClientRect().bottom : 0;
        const boxes = {};
        // A key built from the child index chain is stable across runs even
        // when class names are shared by dozens of siblings.
        const keyOf = (el) => {
          const parts = [];
          for (let n = el; n && n !== document.body; n = n.parentElement) {
            parts.unshift(Array.prototype.indexOf.call(n.parentElement.children, n));
          }
          return el.tagName.toLowerCase() + "@" + parts.join(".");
        };
        for (const el of document.body.querySelectorAll("*")) {
          const r = el.getBoundingClientRect();
          if (r.width === 0 && r.height === 0) continue;
          if (r.bottom <= headerBottom + 1) continue;
          boxes[keyOf(el)] = [
            Math.round(r.left),
            Math.round(r.top + window.pageYOffset),
            Math.round(r.width),
            Math.round(r.height),
          ];
        }
        return {
          headerHeight: Math.round(headerBottom),
          docHeight: document.documentElement.scrollHeight,
          count: Object.keys(boxes).length,
          boxes,
        };
      });
    }
    await ctx.close();
  }

  await browser.close();
  fs.writeFileSync(path.join(OUT, name + ".json"), JSON.stringify(snapshot));
  for (const k of Object.keys(snapshot)) {
    console.log(`  ${k}  header=${snapshot[k].headerHeight}px  elements=${snapshot[k].count}`);
  }
  console.log(`Captured ${Object.keys(snapshot).length} views into ${name}.json`);
}

function compare(aName, bName) {
  const a = JSON.parse(fs.readFileSync(path.join(OUT, aName + ".json"), "utf8"));
  const b = JSON.parse(fs.readFileSync(path.join(OUT, bName + ".json"), "utf8"));
  console.log(`${aName} -> ${bName}`);
  let total = 0;

  for (const view of Object.keys(b)) {
    if (!a[view]) continue;
    const moved = [];
    for (const key of Object.keys(b[view].boxes)) {
      const x = a[view].boxes[key];
      const y = b[view].boxes[key];
      if (!x) continue;
      if (x[0] !== y[0] || x[1] !== y[1] || x[2] !== y[2] || x[3] !== y[3]) {
        moved.push(`${key} [${x}] -> [${y}]`);
      }
    }
    const onlyA = Object.keys(a[view].boxes).filter((k) => !b[view].boxes[k]).length;
    const onlyB = Object.keys(b[view].boxes).filter((k) => !a[view].boxes[k]).length;
    total += moved.length + onlyA + onlyB;
    const hdr = a[view].headerHeight === b[view].headerHeight
      ? `header ${b[view].headerHeight}px unchanged`
      : `HEADER ${a[view].headerHeight} -> ${b[view].headerHeight}`;
    console.log(
      `  ${view.padEnd(20)} moved=${String(moved.length).padStart(4)}  ` +
        `only-in-${aName}=${onlyA}  only-in-${bName}=${onlyB}  ${hdr}`
    );
    for (const m of moved.slice(0, 5)) console.log("      " + m);
  }
  console.log(total ? `\n${total} geometry difference(s)` : "\nNo geometry differences below the header");
}

const mode = process.argv[2];
if (mode === "capture" && process.argv[3]) capture(process.argv[3]);
else if (mode === "compare" && process.argv[3] && process.argv[4])
  compare(process.argv[3], process.argv[4]);
else {
  console.error("usage: layout-lock.js capture <name> | compare <a> <b>");
  process.exit(1);
}
