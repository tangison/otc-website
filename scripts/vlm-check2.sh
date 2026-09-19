#!/bin/bash
# VLM triage on re-search candidates
OUT=/home/z/my-project/assets/imgsearch2/vlm
mkdir -p $OUT
cd /home/z/my-project/assets/raw2
for f in *.jpg; do
  key="${f%.jpg}"
  if [ -f "$OUT/$key.txt" ]; then continue; fi
  z-ai vision -p "Evaluate this photo for a technical college website. Answer 3 short lines only: LINE1 watermark yes/no (stock site watermark or big logo text?). LINE2 subject in 8 words max. LINE3 quality good/bad." -i "/home/z/my-project/assets/raw2/$f" > "$OUT/$key.txt" 2>&1
done
echo "ALL DONE"
