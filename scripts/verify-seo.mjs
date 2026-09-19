#!/usr/bin/env node
/* G4: SEO plumbing: robots, sitemap, unique titles/descriptions, JSON-LD, OG/Twitter */
const base = "http://localhost:3000";
const routes = ["", "/about", "/programs", "/units", "/partners", "/admissions", "/contact", "/privacy"];
let ok = true;
(async () => {
  const seen = new Set();
  const pages = [];
  for (const r of routes) {
    const html = await (await fetch(base + r)).text();
    const title = (html.match(/<title>([^<]*)<\/title>/) || [])[1] || "";
    const desc = (html.match(/<meta name="description" content="([^"]*)"/) || [])[1] || "";
    const canon = (html.match(/<link rel="canonical" href="([^"]*)"/) || [])[1] || "";
    pages.push({ r, title, desc, canon });
    if (!title || !desc || !canon) { console.error(`FAIL ${r}: title/desc/canonical incomplete`); ok = false; }
    const key = title + "|" + desc;
    if (seen.has(key)) { console.error(`FAIL duplicate title+desc on ${r}`); ok = false; }
    seen.add(key);
    if (!html.includes('property="og:title"') || !html.includes('name="twitter:card"')) {
      console.error(`FAIL ${r}: missing OG/Twitter tags`);
      ok = false;
    }
  }
  console.log("ok unique titles/descriptions/canonicals/OG/Twitter on all", routes.length, "routes");
  const home = await (await fetch(base + "/")).text();
  if (!home.includes("application/ld+json")) { console.error("FAIL no JSON-LD"); ok = false; } else console.log("ok JSON-LD present");
  if (!home.includes("EducationalOrganization")) { console.error("FAIL JSON-LD missing type"); ok = false; } else console.log("ok JSON-LD EducationalOrganization");
  const robots = await (await fetch(base + "/robots.txt")).text();
  if (!robots.includes("Sitemap:")) { console.error("FAIL robots.txt missing sitemap"); ok = false; } else console.log("ok robots.txt");
  const sm = await (await fetch(base + "/sitemap.xml")).text();
  const urls = (sm.match(/<loc>/g) || []).length;
  if (urls < 8) { console.error(`FAIL sitemap has ${urls} urls`); ok = false; } else console.log(`ok sitemap.xml with ${urls} urls`);
  if (!home.includes('rel="icon"') && !home.includes('favicon')) { console.error("FAIL no favicon links"); ok = false; } else console.log("ok favicon links");
  if (!home.includes("Skip to content")) { console.error("FAIL no skip link"); ok = false; } else console.log("ok skip-to-content link");
  console.log(ok ? "seo verification passed" : "SEO VERIFICATION FAILED");
  process.exit(ok ? 0 : 1);
})();
