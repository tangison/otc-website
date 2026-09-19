#!/usr/bin/env bash
# Measure actual transferred bytes per page on first load (viewport = above-fold lazy behavior)
cd /home/z/my-project
agent-browser set viewport 1440 900
for p in "" about programs units partners admissions contact; do
  agent-browser open "http://localhost:3000/$p" > /dev/null 2>&1
  agent-browser wait --load networkidle > /dev/null 2>&1
  total=$(agent-browser eval "
(() => {
  const rows = performance.getEntriesByType('resource');
  const html = performance.getEntriesByType('navigation')[0];
  let sum = html ? (html.transferSize || 0) : 0;
  let n = 0;
  for (const r of rows) { sum += (r.transferSize || 0); n++; }
  return Math.round(sum / 1024) + 'KB across ' + n + ' resources';
})()
" 2>/dev/null | tail -1)
  echo "page /$p initial transfer: $total"
done
