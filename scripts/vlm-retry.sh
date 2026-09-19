#!/bin/bash
# Retry VLM triage with rate-limit delays
OUT=/home/z/my-project/assets/imgsearch2/vlm
mkdir -p $OUT
cd /home/z/my-project/assets/raw2
for f in *.jpg; do
  key="${f%.jpg}"
  # skip if already parsed successfully
  if [ -f "$OUT/$key.txt" ] && grep -q '"content"' "$OUT/$key.txt"; then continue; fi
  for attempt in 1 2 3; do
    z-ai vision -p "Evaluate this photo for a technical college website. Answer 3 short lines only: LINE1 watermark yes/no (stock site watermark or big logo text?). LINE2 subject in 8 words max. LINE3 quality good/bad." -i "/home/z/my-project/assets/raw2/$f" > "$OUT/$key.txt" 2>&1
    if grep -q '"content"' "$OUT/$key.txt"; then echo "$key OK (attempt $attempt)"; break; fi
    sleep 20
  done
  sleep 6
done
echo "ALL DONE"
