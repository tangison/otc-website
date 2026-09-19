#!/usr/bin/env bash
# Overflow check: every page, mobile 390px and desktop 1440px
set -e
cd /home/z/my-project
agent-browser set viewport 390 844
for p in "" about programs units partners admissions contact privacy nope404; do
  agent-browser open "http://localhost:3000/$p" > /dev/null 2>&1
  sleep 0.6
  r=$(agent-browser eval "document.documentElement.scrollWidth <= document.documentElement.clientWidth + 1 ? 'OK' : 'OVERFLOW ' + document.documentElement.scrollWidth" 2>/dev/null | tail -1)
  echo "mobile /$p → $r"
done
agent-browser set viewport 1440 900
for p in "" about programs units partners admissions contact privacy nope404; do
  agent-browser open "http://localhost:3000/$p" > /dev/null 2>&1
  sleep 0.6
  r=$(agent-browser eval "document.documentElement.scrollWidth <= document.documentElement.clientWidth + 1 ? 'OK' : 'OVERFLOW ' + document.documentElement.scrollWidth" 2>/dev/null | tail -1)
  echo "desktop /$p → $r"
done
