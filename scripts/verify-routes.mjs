#!/usr/bin/env node
/* G1: All 7 required routes render HTTP 200 with real content */
const routes = ["", "/about", "/programs", "/units", "/partners", "/admissions", "/contact", "/privacy"];
const base = "http://localhost:3000";
let ok = true;
(async () => {
  for (const r of routes) {
    try {
      const res = await fetch(base + r);
      const text = await res.text();
      const hasContent = text.includes("Ongenga Technical College") && text.length > 5000;
      if (res.status !== 200 || !hasContent) {
        console.error(`FAIL ${r || "/"} status=${res.status} len=${text.length}`);
        ok = false;
      } else {
        console.log(`ok ${r || "/"} (${text.length} bytes)`);
      }
    } catch (e) {
      console.error(`FAIL ${r}: ${e.message}`);
      ok = false;
    }
  }
  const nf = await fetch(base + "/this-page-should-not-exist");
  if (nf.status !== 404) { console.error(`FAIL 404 route returned ${nf.status}`); ok = false; }
  else console.log("ok 404 route");
  console.log(ok ? "route verification passed" : "ROUTE VERIFICATION FAILED");
  process.exit(ok ? 0 : 1);
})();
