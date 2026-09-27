#!/usr/bin/env bash
# Production weight audit: real transfer per page at otc-website-xi.vercel.app
set -u
BASE="https://otc-website-xi.vercel.app"
agent-browser set viewport 1440 900 >/dev/null 2>&1
for P in "/" "/programmes" "/about" "/admissions" "/partners" "/contact"; do
  agent-browser open "$BASE$P" >/dev/null 2>&1
  agent-browser wait --load networkidle >/dev/null 2>&1
  agent-browser scroll down 4000 >/dev/null 2>&1
  agent-browser scroll down 4000 >/dev/null 2>&1
  sleep 2
  echo "--- $P"
  agent-browser eval "
    (() => {
      const res = performance.getEntriesByType('resource');
      let img=0, font=0, js=0, css=0, other=0, total=0;
      for (const r of res) {
        const size = r.transferSize || r.encodedBodySize || 0;
        total += size;
        if (r.initiatorType==='img' || /\.(webp|png|jpg|ico)(\?|$)/.test(r.name)) img += size;
        else if (/\.(woff2?|ttf)(\?|$)/.test(r.name)) font += size;
        else if (r.initiatorType==='script' || /\.js(\?|$)/.test(r.name)) js += size;
        else if (/\.css(\?|$)/.test(r.name)) css += size;
        else other += size;
      }
      const nav = performance.getEntriesByType('navigation')[0];
      const html = (nav.transferSize||0);
      total += html;
      const kb = x => Math.round(x/1024);
      return 'TOTAL '+kb(total)+'KB = html '+kb(html)+' + img '+kb(img)+' + font '+kb(font)+' + js '+kb(js)+' + css '+kb(css)+' + other '+kb(other);
    })()
  " 2>/dev/null | tail -1
done
