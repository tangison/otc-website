// Final trim: hero sources to 900px q66, header icon to 96px
import sharp from 'sharp';
import { readFileSync, writeFileSync, statSync } from 'fs';

const heroes = ['hero-branded', 'hero-graduation', 'hero-expo', 'hero-classroom'];
for (const n of heroes) {
  const p = `public/images/${n}.webp`;
  const b = statSync(p).size;
  const buf = await sharp(p).resize({ width: 900, withoutEnlargement: true })
    .webp({ quality: 66, effort: 5 })
    .toBuffer();
  writeFileSync(p, buf);
  console.log(n.padEnd(20), Math.round(b / 1024) + 'KB ->', Math.round(buf.length / 1024) + 'KB');
}

// Header icon renders at 40px; 96px source is plenty
const icon = 'public/icons/icon-192.png';
const ib = statSync(icon).size;
const ibuf = await sharp('assets-raw/extracted/OTC_Full_Package/02_Brand_Assets/Icon-Only/otc-icon-transparent-256px.png')
  .resize(96, 96)
  .png({ compressionLevel: 9 })
  .toBuffer();
writeFileSync(icon, ibuf);
console.log('icon-192.png', Math.round(ib / 1024) + 'KB ->', Math.round(ibuf.length / 1024) + 'KB');
console.log('done');
