#!/bin/bash
# VLM quality check on candidate images: watermark, subject match, professional quality
OUT=/home/z/my-project/assets/imgsearch/vlm
mkdir -p $OUT
cd /home/z/my-project/assets/raw
for f in *.jpg; do
  key="${f%.jpg}"
  if [ -f "$OUT/$key.txt" ]; then continue; fi
  z-ai vision -p "Evaluate this photo for use on a technical college website. Answer in exactly 3 short lines: LINE1 watermark yes/no (any visible stock watermark or logo overlay text like alamy/123rf). LINE2 subject: what it shows in 8 words max. LINE3 quality: good/bad (blurry, low-res, amateur, or odd crop?)." -i "/home/z/my-project/assets/raw/$f" > "$OUT/$key.txt" 2>&1
  echo "=== $key: $(tail -5 $OUT/$key.txt | grep -v '^$' | tail -3 | tr '\n' ' | ')"
done
