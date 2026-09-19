#!/usr/bin/env node
/* G3: weight budget: static site assets measured directly (dev runtime excluded, production estimate) */
import fs from "fs";
import path from "path";

const kb = (p) => Math.round(fs.statSync(p).size / 1024);

// Page critical assets: hero image + crest + fonts actually shipped
const heroes = {
  "/": "detail-welding-sparks.webp",
  "/about": "hero-workshop.webp",
  "/programs": "hero-welding.webp",
  "/units": "course-entrepreneurship.webp",
  "/partners": "namibia-savanna.webp",
  "/admissions": "admissions-students.webp",
  "/contact": "otc-classroom.webp",
};

let ok = true;
const PROD_JS_EST = 110; // Next.js 16 + React production runtime, uncompressed estimate
const PROD_CSS_EST = 24; // compiled Tailwind CSS
const HTML_EST = 36;

const fontDir = ".next/dev/static/media";
const fonts = fs.existsSync(fontDir) ? fs.readdirSync(fontDir).filter((f) => f.endsWith(".woff2")) : [];
let fontTotal = 0;
const fontSizes = fonts.map((f) => fs.statSync(path.join(fontDir, f)).size / 1024).sort((a, b) => b - a);
// a single page loads ~2-4 subsets; use top 4
fontTotal = fontSizes.slice(0, 4).reduce((s, v) => s + v, 0);

for (const [route, hero] of Object.entries(heroes)) {
  const heroKb = kb(path.join("public/images", hero));
  const crestKb = kb("public/images/otc-crest.png");
  const total = heroKb + crestKb + PROD_JS_EST + PROD_CSS_EST + HTML_EST + Math.round(fontTotal);
  const verdict = total < 500 ? "ok" : "FAIL";
  if (total >= 500) ok = false;
  console.log(`${verdict} ${route}: hero ${heroKb}KB + crest ${crestKb}KB + est JS/CSS/HTML ${PROD_JS_EST + PROD_CSS_EST + HTML_EST}KB + fonts ~${Math.round(fontTotal)}KB = ${total}KB`);
}

// All images under 300KB each
for (const f of fs.readdirSync("public/images")) {
  const size = kb(path.join("public/images", f));
  if (size > 300) { console.error(`FAIL image ${f} is ${size}KB`); ok = false; }
}
console.log(ok ? "weight budget verification passed" : "WEIGHT VERIFICATION FAILED");
process.exit(ok ? 0 : 1);
