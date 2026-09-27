// Static audit: copy hygiene, metadata budgets, WCAG contrast
import { execSync } from 'child_process';
import { readFileSync, readdirSync, statSync } from 'fs';
import path from 'path';

const ROOT = '/home/z/my-project/src';
let files = [];
(function walk(d) {
  for (const f of readdirSync(d)) {
    const p = path.join(d, f);
    const s = statSync(p);
    if (s.isDirectory()) walk(p);
    else if (/\.(tsx?|ts)$/.test(f)) files.push(p);
  }
})(ROOT);

// ---------- 1. Copy hygiene ----------
const EM_DASH = /\u2014/;
const SLOP = [
  'in today\'s fast-paced', 'unlock your potential', 'seamless solution', 'cutting-edge',
  'unwavering commitment', 'take it to the next level', 'game-changer', 'delve into',
  'elevate your', 'empower your journey', 'roaching', 'revolutioniz', 'harness the power',
  'at the heart of', 'we are passionate', 'world-class experience', 'look no further',
];
const emHits = [], slopHits = [];
for (const f of files) {
  const t = readFileSync(f, 'utf8');
  if (EM_DASH.test(t)) emHits.push(f);
  const low = t.toLowerCase();
  for (const s of SLOP) if (low.includes(s)) slopHits.push(`${f}: ${s}`);
}
console.log('=== COPY HYGIENE ===');
console.log('em dashes:', emHits.length ? emHits : 'NONE');
console.log('slop phrases:', slopHits.length ? slopHits : 'NONE');

// ---------- 2. Metadata lengths ----------
console.log('\n=== METADATA BUDGET (title<=60, desc<=155) ===');
const metas = [
  ['home', 'Ongenga Technical College | TVET Training in Namibia', 'Technical and vocational training in Ongenga, Ohangwena Region, Namibia. Seven NVC trades, short courses, real workshops. Training you can put your hands on.'],
  ['programmes', 'Programmes: NVC Trades and Short Courses', 'Seven full-time NVC trades at Ongenga Technical College: welding, joinery, bricklaying, electrical, auto mechanics and horticulture. Short courses run each intake.'],
  ['about', 'About the College', 'Why Ongenga Technical College was founded in 2019, its vision, mission and values, and how it serves the Ohangwena Region as a centre of vocational excellence.'],
  ['admissions', 'Admissions and How to Apply', 'How to apply to Ongenga Technical College: intake dates, entry requirements, documents to bring and fees. 2+ intakes a year in Ongenga, Ohangwena Region.'],
  ['partners', 'Partners and Employer Pathways', "Ongenga Technical College's training partnership with Bulawayo Polytechnic, Zimbabwe, plus employer pathways, apprenticeships and community programmes for the Ohangwena Region."],
  ['contact', 'Contact and Campus Location', 'Phone +264 81 294 6126 or email Ongenga Technical College. The campus is in Ongenga, Ohangwena Region, Namibia. Send a message and admissions will reply.'],
  ['brand', 'Brand: Colours, Crest and Typography', 'The Ongenga Technical College brand system: crest usage, the palette sampled from the crest artwork, and the typography pairing used across this site.'],
  ['privacy', 'Privacy Policy', 'How Ongenga Technical College handles the personal information you send through this website, aligned with Namibian data practice.'],
  ['terms', 'Terms of Use', 'The terms that apply when you use the Ongenga Technical College website, including programme information accuracy and enquiry handling.'],
];
for (const [p, t, d] of metas) {
  const tOk = t.length <= 60, dOk = d.length <= 155;
  console.log(`${p.padEnd(12)} title ${String(t.length).padStart(2)} ${tOk ? 'OK' : 'OVER'} | desc ${String(d.length).padStart(3)} ${dOk ? 'OK' : 'OVER'}`);
}

// ---------- 3. Contrast ----------
console.log('\n=== WCAG CONTRAST ===');
function lum(hex) {
  const c = hex.replace('#', '');
  const [r, g, b] = [0, 2, 4].map(i => {
    let v = parseInt(c.slice(i, i + 2), 16) / 255;
    return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
  });
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}
function ratio(a, b) {
  const [l1, l2] = [lum(a), lum(b)].sort((x, y) => y - x);
  return (l1 + 0.05) / (l2 + 0.05);
}
const combos = [
  ['body ink on paper', '#0A0800', '#F7F6F1', 4.5],
  ['muted ink on paper', '#55536A', '#F7F6F1', 4.5],
  ['navy headline on paper', '#0E0AAE', '#F7F6F1', 3.0],
  ['gold-deep small text on paper', '#7A620A', '#F7F6F1', 4.5],
  ['gold-deep on white', '#7A620A', '#FFFFFF', 4.5],
  ['white on navy deep', '#FFFFFF', '#0A0868', 4.5],
  ['gold on navy deep (labels)', '#D6AD1B', '#0A0868', 4.5],
  ['white/75 on navy deep', '#C5C4D8', '#0A0868', 4.5],
  ['gold value on navy deep (large)', '#D6AD1B', '#0A0868', 3.0],
  ['white on navy button', '#FFFFFF', '#0E0AAE', 4.5],
  ['ink on gold button', '#0A0800', '#D6AD1B', 4.5],
  ['caption white on chip navy', '#FFFFFF', '#0A0868', 4.5],
];
let pass = 0;
for (const [name, fg, bg, need] of combos) {
  const r = ratio(fg, bg);
  const ok = r >= need;
  if (ok) pass++;
  console.log(`${ok ? 'PASS' : 'FAIL'} ${r.toFixed(2)}:1 (need ${need}) ${name}`);
}
console.log(`\ncontrast: ${pass}/${combos.length} pass`);
