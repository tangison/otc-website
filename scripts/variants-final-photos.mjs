// Variants for the last 11 unused photos so every client photo lands on the site.
// -c: 900w q72 (carousels/galleries), matching the existing carousel pipeline.
// agri-build-03 also gets a -t tile variant (980w q80) for the Horticulture tile.
import sharp from "sharp";
import { statSync } from "fs";

const OUT = "/home/z/my-project/public/images";
const carousel = [
  "agri-build-03", "agri-build-04", "agri-build-08", "agri-build-10",
  "agri-handover-01", "agri-handover-02", "agri-handover-04", "agri-handover-07",
  "classrooms-03", "expo-outdoor-03", "graduation-07",
];

async function run() {
  let total = 0;
  for (const n of carousel) {
    const dest = `${OUT}/${n}-c.webp`;
    await sharp(`${OUT}/${n}.webp`)
      .resize({ width: 900, withoutEnlargement: true })
      .webp({ quality: 72, effort: 4 })
      .toFile(dest);
    const kb = Math.round(statSync(dest).size / 1024);
    total += kb;
    console.log(`${n}-c.webp ${kb}KB`);
  }
  // Tile variant: the bare AgriCampus grounds become the Horticulture tile image
  const t = `${OUT}/agri-build-03-t.webp`;
  await sharp(`${OUT}/agri-build-03.webp`)
    .resize({ width: 980, withoutEnlargement: true, kernel: "lanczos3" })
    .webp({ quality: 80, effort: 4 })
    .toFile(t);
  console.log(`agri-build-03-t.webp ${Math.round(statSync(t).size / 1024)}KB`);
  console.log(`--- done, ${Math.round(total / 1024 * 10) / 10}MB carousel variants ---`);
}
run().catch((e) => {
  console.error(e);
  process.exit(1);
});
