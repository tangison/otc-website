// Carousel-class variants: every image that renders inside a carousel gets a
// 900px q72 sibling (-c.webp). Big slots (heroes, features, tiles) keep the
// hi-res originals. This keeps fully-scrolled pages inside the 500KB budget.
import sharp from "sharp";
import { statSync } from "fs";

const OUT = "/home/z/my-project/public/images";
const names = [
  "classrooms-01", "classrooms-04", "classrooms-05", "classrooms-06",
  "graduation-01", "graduation-02", "graduation-03", "graduation-04", "graduation-05", "graduation-06",
  "expo-indoor-01", "expo-indoor-02", "expo-indoor-03", "expo-outdoor-02",
  "outreach-01", "outreach-02", "outreach-03",
  "workshop-02", "workshop-04", "auto-01",
  "signage-01", "signage-02", "signage-03",
  "agri-build-01", "agri-build-02", "agri-build-06", "agri-build-07", "agri-build-09",
  "agri-handover-03", "agri-handover-05", "agri-handover-06",
  "team-01", "team-02", "team-03",
];

async function run() {
  let total = 0;
  for (const n of names) {
    const dest = `${OUT}/${n}-c.webp`;
    await sharp(`${OUT}/${n}.webp`)
      .resize({ width: 900, withoutEnlargement: true })
      .webp({ quality: 72, effort: 4 })
      .toFile(dest);
    const kb = Math.round(statSync(dest).size / 1024);
    total += kb;
    console.log(`${n}-c.webp ${kb}KB`);
  }
  console.log(`--- ${names.length} carousel variants, ${Math.round(total / 1024 * 10) / 10}MB total ---`);
}
run().catch((e) => {
  console.error(e);
  process.exit(1);
});
