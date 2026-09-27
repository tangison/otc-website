#!/usr/bin/env bash
# Browser audit: horizontal overflow + console errors on every route, both widths
set -u
PAGES=("/" "/programmes" "/about" "/admissions" "/partners" "/contact" "/brand" "/privacy-policy" "/terms" "/definitely-missing")
fail=0

for W in "390 844" "1440 900"; do
  set -- $W
  agent-browser set viewport $1 $2 >/dev/null 2>&1
  for P in "${PAGES[@]}"; do
    agent-browser open "http://localhost:3000$P" >/dev/null 2>&1
    agent-browser wait --load networkidle >/dev/null 2>&1
    agent-browser scroll down 2000 >/dev/null 2>&1
    OVERFLOW=$(agent-browser eval "(() => { const d=document.documentElement; const bad=[...document.querySelectorAll('body *')].filter(el=>{const r=el.getBoundingClientRect(); return r.right>d.clientWidth+1 && getComputedStyle(el).position!=='fixed'}).length; return (d.scrollWidth>d.clientWidth+1?'PAGE':'ok')+'|wide:'+bad })()" 2>/dev/null | tail -1)
    ERRS=$(agent-browser errors 2>/dev/null | grep -cE "Error|error" || true)
    echo "w=$1 p=$P => $OVERFLOW errs=$ERRS"
    case "$OVERFLOW" in PAGE*) fail=1;; esac
  done
done
echo "AUDIT RESULT: $([ $fail -eq 0 ] && echo 'NO OVERFLOW, CLEAN' || echo 'FAILURES FOUND')"
