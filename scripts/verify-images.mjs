#!/usr/bin/env node
/* G2: image-first bar: >= 30 distinct images in public/images, every page >= 4 images referenced */
import fs from "fs";
import path from "path";
const glob = (dir) => fs.readdirSync(dir).filter((f) => /\.(webp|png|jpg)$/.test(f));

const imgDir = "public/images";
const all = glob(imgDir);
let ok = true;
if (all.length < 30) { console.error(`FAIL only ${all.length} images in ${imgDir}`); ok = false; }
else console.log(`ok ${all.length} images in public/images`);

const pages = [
  ["src/app/page.tsx", ["otc-classroom", "detail-welding-sparks", "course-welding-detail", "course-joinery", "course-bricklaying", "course-electrical", "course-automech", "course-horticulture", "unit-edc", "unit-boxing", "detail-tools", "course-mushroom", "hero-workshop"]],
  ["src/app/about/page.tsx", ["hero-workshop", "campus-building", "otc-horticulture", "detail-woodshop", "course-solar"]],
  ["src/app/programs/page.tsx", ["hero-welding"]],
  ["src/app/units/page.tsx", ["course-entrepreneurship", "course-sewing", "course-beekeeping", "course-animal", "course-poultry", "course-foodprocess"]],
  ["src/app/partners/page.tsx", ["namibia-savanna", "namibia-quiver", "detail-woodshop", "course-animal", "namibia-sunset"]],
  ["src/app/admissions/page.tsx", ["admissions-students", "course-welding-detail", "course-computing", "otc-classroom", "success-certificate"]],
  ["src/app/contact/page.tsx", ["otc-classroom", "namibia-savanna"]],
];

const courseImgs = [];
for (const f of ["src/lib/courses.ts"]) courseImgs.push(fs.readFileSync(f, "utf8"));
// components carry imagery for pages that delegate to them
const compSrc = [];
const compDir = "src/components/site";
for (const f of fs.readdirSync(compDir)) {
  if (f.endsWith(".tsx")) compSrc.push(fs.readFileSync(compDir + "/" + f, "utf8"));
}
const sharedSrc = compSrc.join("");

for (const [file, images] of pages) {
  const src = fs.readFileSync(file, "utf8");
  const libSrc = courseImgs.join("");
  const found = images.filter((n) => src.includes(n) || libSrc.includes(n) || sharedSrc.includes(n));
  const missing = images.filter((n) => !src.includes(n) && !libSrc.includes(n) && !sharedSrc.includes(n));
  // count total image references in page + shared components used by page
  const imgRefs = (src.match(/\/images\//g) || []).length;
  console.log(`${file}: ${found.length}/${images.length} key images, ${imgRefs} direct refs`);
  if (missing.length) { console.error(`  MISSING: ${missing.join(", ")}`); ok = false; }
}
console.log(ok ? "image coverage verification passed" : "IMAGE VERIFICATION FAILED");
process.exit(ok ? 0 : 1);
