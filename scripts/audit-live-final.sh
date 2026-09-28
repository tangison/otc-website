#!/usr/bin/env bash
# Local production audit: initial-load transfer + fully-scrolled transfer per page
set -u
BASE="https://otc-website-xi.vercel.app"
MEASURE='
    (() => {
      const res = performance.getEntriesByType("resource");
      let total=0;
      for (const r of res) total += (r.transferSize || r.encodedBodySize || 0);
      const nav = performance.getEntriesByType("navigation")[0];
      total += (nav.transferSize||0);
      return Math.round(total/1024);
    })()
'
agent-browser set viewport 1440 900 >/dev/null 2>&1
for P in "/" "/programmes" "/about" "/alumni" "/admissions" "/partners" "/contact" "/brand" "/terms" "/privacy-policy"; do
  agent-browser open "$BASE$P" >/dev/null 2>&1
  agent-browser wait --load networkidle >/dev/null 2>&1
  sleep 0.8
  INIT=$(agent-browser eval "$MEASURE" 2>/dev/null | tail -1 | tr -d '"')
  agent-browser scroll down 4000 >/dev/null 2>&1
  agent-browser scroll down 4000 >/dev/null 2>&1
  agent-browser scroll down 4000 >/dev/null 2>&1
  sleep 1.5
  FULL=$(agent-browser eval "$MEASURE" 2>/dev/null | tail -1 | tr -d '"')
  echo "$P initial=${INIT}KB scrolled=${FULL}KB"
done
