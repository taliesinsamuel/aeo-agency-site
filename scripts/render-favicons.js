/**
 * Rasterize the official Answered Labs logo mark into favicon PNGs + ICO.
 * Source geometry matches assets/answered-labs-logo-mark-black.svg.
 */
const fs = require("fs");
const path = require("path");
const { chromium } = require("playwright");

const ROOT = path.resolve(__dirname, "..");
const SVG = fs.readFileSync(path.join(ROOT, "favicon.svg"), "utf8");

function pngIhdrSize(buf) {
  return { w: buf.readUInt32BE(16), h: buf.readUInt32BE(20) };
}

function writeIco(pngPaths, dest) {
  const images = pngPaths.map((p) => fs.readFileSync(p));
  const count = images.length;
  let offset = 6 + 16 * count;
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0);
  header.writeUInt16LE(1, 2);
  header.writeUInt16LE(count, 4);
  const entries = [];
  for (const img of images) {
    const { w, h } = pngIhdrSize(img);
    const entry = Buffer.alloc(16);
    entry.writeUInt8(w >= 256 ? 0 : w, 0);
    entry.writeUInt8(h >= 256 ? 0 : h, 1);
    entry.writeUInt8(0, 2);
    entry.writeUInt8(0, 3);
    entry.writeUInt16LE(1, 4);
    entry.writeUInt16LE(32, 6);
    entry.writeUInt32LE(img.length, 8);
    entry.writeUInt32LE(offset, 12);
    entries.push(entry);
    offset += img.length;
  }
  fs.writeFileSync(dest, Buffer.concat([header, ...entries, ...images]));
}

async function renderPng(page, size, dest, { background }) {
  await page.setViewportSize({ width: size, height: size });
  const html = `<!doctype html><html><head><style>
html,body{margin:0;width:${size}px;height:${size}px;background:${background}}
svg{display:block;width:${size}px;height:${size}px}
</style></head><body>${SVG}</body></html>`;
  await page.setContent(html, { waitUntil: "load" });
  await page.screenshot({
    path: dest,
    omitBackground: background === "transparent",
    animations: "disabled",
  });
}

async function main() {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  const out32 = path.join(ROOT, "favicon-32x32.png");
  const out48 = path.join(ROOT, "favicon-48x48.png");
  const out16 = path.join(ROOT, ".favicon-16x16.png");
  const outApple = path.join(ROOT, "apple-touch-icon.png");

  await renderPng(page, 16, out16, { background: "transparent" });
  await renderPng(page, 32, out32, { background: "transparent" });
  await renderPng(page, 48, out48, { background: "transparent" });
  await renderPng(page, 180, outApple, { background: "#ffffff" });

  const ico = path.join(ROOT, "favicon.ico");
  writeIco([out16, out32, out48], ico);
  fs.unlinkSync(out16);

  const assets = path.join(ROOT, "127.0.0.1_8081/dl/assets");
  fs.copyFileSync(path.join(ROOT, "favicon.svg"), path.join(assets, "favicon.svg"));
  fs.copyFileSync(ico, path.join(assets, "favicon.ico"));

  await browser.close();
  for (const rel of ["favicon-32x32.png", "favicon-48x48.png", "apple-touch-icon.png", "favicon.ico"]) {
    const p = path.join(ROOT, rel);
    const st = fs.statSync(p);
    console.log("wrote", rel, st.size, "bytes");
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
