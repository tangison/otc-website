// Re-encode the heavy gallery/story images at 1000px q62
import sharp from 'sharp';
import { readFileSync } from 'fs';

const heavy = [
  'trade-horticulture', 'story-agri-handover', 'g-handover-1', 'g-signage-1',
  'g-outreach-1', 'g-outreach-2', 'g-agri-1', 'story-outreach', 'hero-campus', 'hero-expo',
];
let before = 0, after = 0;
for (const name of heavy) {
  const p = `/home/z/my-project/public/images/${name}.webp`;
  const b = readFileSync(p).length;
  await sharp(p).resize({ width: 1000, withoutEnlargement: true })
    .webp({ quality: 62, effort: 5 })
    .toBuffer()
    .then(buf => {
      require('fs').writeFileSync(p, buf);
      const a = buf.length;
      before += b; after += a;
      console.log(name.padEnd(22), Math.round(b / 1024) + 'KB ->', Math.round(a / 1024) + 'KB');
    });
}
console.log('TOTAL', Math.round(before / 1024), '->', Math.round(after / 1024), 'KB');
