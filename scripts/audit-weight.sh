#!/usr/bin/env bash
# Per-page transfer measurement in dev: split dev overhead from real site resources
set -u
PAGES=("/" "/programmes" "/about" "/admissions" "/partners" "/contact")
agent-browser set viewport 1440 900 >/dev/null 2>&1
for P in "${PAGES[@]}"; do
  agent-browser open "http://localhost:3000$P" >/dev/null 2>&1
  agent-browser wait --load networkidle >/dev/null 2>&1
  agent-browser scroll down 3000 >/dev/null 2>&1
  sleep 1.5
  echo "--- $P"
  agent-browser eval "
    (() => {
      const res = performance.getEntriesByType('resource');
      let img=0, font=0, js=0, css=0, other=0, devchunk=0;
      for (const r of res) {
        const n = r.name.split('/').pop();
        const size = r.transferSize || 0;
        if (r.initiatorType==='img' || /\.(webp|png|jpg|ico)(\?|$)/.test(r.name)) img += size;
        else if (/\.(woff2?|ttf)(\?|$)/.test(r.name)) font += size;
        else if (r.initiatorType==='script' || /\.js(\?|$)/.test(r.name)) { js += size; if (/_next\/static\/chunks\/(main-app|app\/|polyfills|webpack|react-dev|framework)/.test(r.name) || n.includes('dev') || n.includes('hot')) devchunk += size; }
        else if (/\.css(\?|$)/.test(r.name)) css += size;
        else other += size;
      }
      const html = performance.getEntriesByType('navigation')[0];
      const kb = x => Math.round(x/1024);
      return 'img '+kb(img)+'KB | font '+kb(font)+'KB | js '+kb(js)+'KB (dev-ish '+kb(devchunk)+') | css '+kb(css)+'KB | html '+kb(html.transferSize)+'KB';
    })()
  " 2>/dev/null | tail -1
done
