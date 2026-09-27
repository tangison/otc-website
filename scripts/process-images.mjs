// OTC image pipeline: real photos -> optimized WebP + favicon suite + OG card
import sharp from 'sharp';
import { mkdirSync, existsSync, readFileSync, writeFileSync } from 'fs';

const SRC = '/home/z/my-project/assets-raw/extracted/OTC_Full_Package';
const PH = `${SRC}/01_Source_Photos`;
const BRAND = `${SRC}/02_Brand_Assets`;
const OUT = '/home/z/my-project/public/images';
mkdirSync(OUT, { recursive: true });

// [sourceFile, outName, maxWidth]
const jobs = [
  // Heroes (1600)
  [`${PH}/02_Workshop_Practicals/02_Workshop_Practicals_03.jpg`, 'hero-electrical', 1600],
  [`${PH}/01_Classrooms_Training/01_Classrooms_Training_04.jpg`, 'hero-classroom', 1600],
  [`${PH}/10_Graduation_Ceremony/10_Graduation_Ceremony_05.jpg`, 'hero-graduation', 1600],
  [`${PH}/11_Campus_Team/11_Campus_Team_03.jpg`, 'hero-campus', 1600],
  [`${PH}/05_Expo_Outdoor_Tent/05_Expo_Outdoor_Tent_01.jpg`, 'hero-expo', 1600],
  [`${PH}/01_Classrooms_Training/01_Classrooms_Training_02.jpg`, 'hero-branded', 1600],
  // Trade cards (1200)
  [`${PH}/02_Workshop_Practicals/02_Workshop_Practicals_04.jpg`, 'trade-electrical', 1200],
  [`${PH}/03_Auto_Mechanics/03_Auto_Mechanics_01.jpg`, 'trade-auto', 1200],
  [`${PH}/02_Workshop_Practicals/02_Workshop_Practicals_02.jpg`, 'trade-joinery', 1200],
  [`${PH}/02_Workshop_Practicals/02_Workshop_Practicals_01.jpg`, 'trade-welding', 1200],
  [`${PH}/08_AgriCampus_Fencing_Construction/08_AgriCampus_Fencing_Construction_04.jpg`, 'trade-bricklaying', 1200],
  [`${PH}/09_AgriCampus_Fencing_Handover/09_AgriCampus_Fencing_Handover_03.jpg`, 'trade-horticulture', 1200],
  // Story / sections (1280)
  [`${PH}/10_Graduation_Ceremony/10_Graduation_Ceremony_04.jpg`, 'story-graduation', 1280],
  [`${PH}/10_Graduation_Ceremony/10_Graduation_Ceremony_07.jpg`, 'story-certificate', 1280],
  [`${PH}/06_Community_Outreach_Demo/06_Community_Outreach_Demo_02.jpg`, 'story-outreach', 1280],
  [`${PH}/11_Campus_Team/11_Campus_Team_01.jpg`, 'story-team', 1280],
  [`${PH}/07_Banner_Signage_Install/07_Banner_Signage_Install_01.jpg`, 'story-signage', 1280],
  [`${PH}/09_AgriCampus_Fencing_Handover/09_AgriCampus_Fencing_Handover_06.jpg`, 'story-agri-handover', 1280],
  [`${PH}/08_AgriCampus_Fencing_Construction/08_AgriCampus_Fencing_Construction_09.jpg`, 'story-agri-build', 1280],
  // Gallery carousel (1280)
  [`${PH}/04_Expo_Indoor_Booth/04_Expo_Indoor_Booth_01.jpg`, 'g-expo-indoor-1', 1280],
  [`${PH}/04_Expo_Indoor_Booth/04_Expo_Indoor_Booth_02.jpg`, 'g-expo-indoor-2', 1280],
  [`${PH}/04_Expo_Indoor_Booth/04_Expo_Indoor_Booth_03.jpg`, 'g-expo-indoor-3', 1280],
  [`${PH}/05_Expo_Outdoor_Tent/05_Expo_Outdoor_Tent_02.jpg`, 'g-expo-outdoor-1', 1280],
  [`${PH}/05_Expo_Outdoor_Tent/05_Expo_Outdoor_Tent_03.jpg`, 'g-expo-outdoor-2', 1280],
  [`${PH}/06_Community_Outreach_Demo/06_Community_Outreach_Demo_01.jpg`, 'g-outreach-1', 1280],
  [`${PH}/06_Community_Outreach_Demo/06_Community_Outreach_Demo_03.jpg`, 'g-outreach-2', 1280],
  [`${PH}/07_Banner_Signage_Install/07_Banner_Signage_Install_02.jpg`, 'g-signage-1', 1280],
  [`${PH}/07_Banner_Signage_Install/07_Banner_Signage_Install_03.jpg`, 'g-signage-2', 1280],
  [`${PH}/08_AgriCampus_Fencing_Construction/08_AgriCampus_Fencing_Construction_02.jpg`, 'g-agri-1', 1280],
  [`${PH}/08_AgriCampus_Fencing_Construction/08_AgriCampus_Fencing_Construction_07.jpg`, 'g-agri-2', 1280],
  [`${PH}/09_AgriCampus_Fencing_Handover/09_AgriCampus_Fencing_Handover_01.jpg`, 'g-handover-1', 1280],
  [`${PH}/09_AgriCampus_Fencing_Handover/09_AgriCampus_Fencing_Handover_04.jpg`, 'g-handover-2', 1280],
  [`${PH}/01_Classrooms_Training/01_Classrooms_Training_03.jpg`, 'g-classroom-1', 1280],
  [`${PH}/01_Classrooms_Training/01_Classrooms_Training_05.jpg`, 'g-classroom-2', 1280],
  [`${PH}/10_Graduation_Ceremony/10_Graduation_Ceremony_02.jpg`, 'g-grad-1', 1280],
  [`${PH}/10_Graduation_Ceremony/10_Graduation_Ceremony_06.jpg`, 'g-grad-2', 1280],
  [`${PH}/11_Campus_Team/11_Campus_Team_02.jpg`, 'g-team-1', 1280],
  [`${PH}/03_Auto_Mechanics/03_Auto_Mechanics_02.jpg`, 'g-auto-1', 1280],
];

const report = [];
for (const [src, name, w] of jobs) {
  if (!existsSync(src)) { report.push([name, 'MISSING', '0KB']); continue; }
  const img = sharp(src).rotate();
  const meta = await img.metadata();
  const out = `${OUT}/${name}.webp`;
  await img.resize({ width: w, withoutEnlargement: true })
    .webp({ quality: name.startsWith('hero') ? 72 : 68, effort: 4 })
    .toFile(out);
  const kb = Math.round(readFileSync(out).length / 1024);
  report.push([name, `${meta.width}x${meta.height} -> w${w}`, `${kb}KB`]);
}
console.log('=== WEBP REPORT ===');
report.forEach(r => console.log(r[0].padEnd(24), String(r[1]).padEnd(18), r[2]));
const totalKB = report.reduce((a, r) => a + (parseInt(r[2]) || 0), 0);
console.log('TOTAL:', Math.round(totalKB), 'KB across', report.length, 'images');

// ---------- Favicon suite from crest icon ----------
const crest = `${BRAND}/Icon-Only/otc-icon-transparent-256px.png`;
const P = '/home/z/my-project/public';
mkdirSync(`${P}/icons`, { recursive: true });

// apple-touch-icon 180 on navy
await sharp(crest).resize(180, 180).png()
  .composite([{ input: Buffer.from(`<svg width="180" height="180"><rect width="180" height="180" fill="#0E0AAE"/></svg>`), blend: 'dest-over' }])
  .toFile(`${P}/icons/apple-touch-icon.png`);

// icon-192 + icon-512 on navy
for (const s of [192, 512]) {
  await sharp(crest).resize(s, s).png()
    .composite([{ input: Buffer.from(`<svg width="${s}" height="${s}"><rect width="${s}" height="${s}" fill="#0E0AAE"/></svg>`), blend: 'dest-over' }])
    .toFile(`${P}/icons/icon-${s}.png`);
}

// favicon.ico (16+32) packed manually from PNGs
const png32 = await sharp(crest).resize(32, 32).png().toBuffer();
const png16 = await sharp(crest).resize(16, 16).png().toBuffer();
async function buildIco(pngs) {
  const count = pngs.length;
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0); header.writeUInt16LE(1, 2); header.writeUInt16LE(count, 4);
  let offset = 6 + 16 * count;
  const metas = [];
  for (const b of pngs) {
    const m = await sharp(b).metadata();
    metas.push({ m, b });
  }
  const chunks = metas.map(({ m, b }, i) => {
    const e = Buffer.alloc(16);
    e.writeUInt8(m.width === 256 ? 0 : m.width, 0);
    e.writeUInt8(m.height === 256 ? 0 : m.height, 1);
    e.writeUInt16LE(1, 4); e.writeUInt16LE(32, 6);
    e.writeUInt32LE(b.length, 8); e.writeUInt32LE(offset, 12);
    offset += b.length;
    return [e, b];
  });
  return Buffer.concat([header, ...chunks.flat()]);
}
const ico = await buildIco([png16, png32]);
writeFileSync(`${P}/favicon.ico`, ico);
console.log('favicon.ico', ico.length, 'bytes');

// favicon.svg — crest wrapper (PNG embedded, browser-safe)
const b64 = readFileSync(crest).toString('base64');
writeFileSync(`${P}/favicon.svg`,
`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><image width="64" height="64" href="data:image/png;base64,${b64}"/></svg>`);

// ---------- OG card 1200x630 ----------
const crestB64 = readFileSync(crest).toString('base64');
const ogSvg = Buffer.from(`
<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
  <rect width="1200" height="630" fill="#0E0AAE"/>
  <rect x="0" y="0" width="1200" height="8" fill="#D6AD1B"/>
  <circle cx="600" cy="233" r="132" fill="#FFFFFF"/>
  <image href="data:image/png;base64,${crestB64}" x="468" y="101" width="264" height="264"/>
  <text x="600" y="452" text-anchor="middle" font-family="DejaVu Sans" font-weight="bold" font-size="50" fill="#FFFFFF">ONGENGA TECHNICAL COLLEGE</text>
  <text x="600" y="512" text-anchor="middle" font-family="DejaVu Sans" font-size="28" fill="#D6AD1B">Training you can put your hands on</text>
  <text x="600" y="560" text-anchor="middle" font-family="DejaVu Sans" font-size="24" fill="#C7C5F2">Ongenga, Ohangwena Region, Namibia</text>
</svg>`);
await sharp(ogSvg).png().toFile(`${P}/images/og-card.png`);
console.log('OG card written');
console.log('DONE');
