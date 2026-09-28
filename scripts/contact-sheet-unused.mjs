// Contact sheet of the 11 unused photos so they can be placed correctly.
import sharp from "sharp";
import path from "path";

const files = [
  "agri-build-03", "agri-build-04", "agri-build-08", "agri-build-10",
  "agri-handover-01", "agri-handover-02", "agri-handover-04", "agri-handover-07",
  "classrooms-03", "expo-outdoor-03", "graduation-07",
];

const cell = 360;
const cols = 4;
const rows = Math.ceil(files.length / cols);
const labelH = 34;

const composites = [];
for (let i = 0; i < files.length; i++) {
  const f = files[i];
  const p = path.join("public/images", `${f}.webp`);
  const buf = await sharp(p).resize(cell, cell, { fit: "cover" }).toBuffer();
  const x = (i % cols) * cell;
  const y = Math.floor(i / cols) * (cell + labelH);
  composites.push({ input: buf, left: x, top: y + labelH });
  const svg = Buffer.from(
    `<svg width="${cell}" height="${labelH}"><rect width="100%" height="100%" fill="#0a0868"/><text x="8" y="23" font-family="sans-serif" font-size="17" fill="#fff">${i + 1}. ${f}</text></svg>`
  );
  composites.push({ input: svg, left: x, top: y });
}

await sharp({
  create: {
    width: cols * cell,
    height: rows * (cell + labelH),
    channels: 3,
    background: { r: 255, g: 255, b: 255 },
  },
})
  .composite(composites)
  .jpeg({ quality: 82 })
  .toFile("scripts/unused-sheet.jpg");

console.log("done: scripts/unused-sheet.jpg");
