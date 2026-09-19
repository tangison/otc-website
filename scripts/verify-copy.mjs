#!/usr/bin/env node
/* G5: copy hygiene: no em dashes, no banned AI-slop patterns, no emoji in source */
import fs from "fs";
const files = [];
const walk = (dir) => {
  for (const f of fs.readdirSync(dir, { withFileTypes: true })) {
    if (f.name === "node_modules" || f.name === ".next" || f.name.startsWith(".")) continue;
    const p = dir + "/" + f.name;
    if (f.isDirectory()) walk(p);
    else if (/\.(tsx|ts)$/.test(f.name)) files.push(p);
  }
};
walk("src");
let ok = true;
const bans = [
  { pattern: /—|–/, name: "em/en dash" },
  { pattern: /\p{Extended_Pictographic}/u, name: "emoji" },
];
const slopWords = /\b(elevate|seamless|seamlessly|unleash|next-gen|next generation platform|unlock|empowering you|game-changer|revolutionize)\b/i;
for (const f of files) {
  const src = fs.readFileSync(f, "utf8");
  for (const { pattern, name } of bans) {
    if (pattern.test(src)) { console.error(`FAIL ${name} in ${f}`); ok = false; }
  }
  const m = src.match(slopWords);
  if (m) { console.error(`FAIL AI-slop word "${m[0]}" in ${f}`); ok = false; }
}
console.log(`checked ${files.length} source files`);
console.log(ok ? "copy hygiene verification passed" : "COPY VERIFICATION FAILED");
process.exit(ok ? 0 : 1);
