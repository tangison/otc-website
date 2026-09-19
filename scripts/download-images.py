#!/usr/bin/env python3
"""Download OTC stock images from search results, pick best per category, optimize to WebP."""
import json, glob, os, subprocess, sys
from io import BytesIO
from urllib.request import urlopen, Request

SEARCH = '/home/z/my-project/assets/imgsearch'
RAW = '/home/z/my-project/assets/raw'
OUT = '/home/z/my-project/public/images'
os.makedirs(RAW, exist_ok=True)
os.makedirs(OUT, exist_ok=True)

def fetch(url, timeout=60):
    req = Request(url, headers={'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36'})
    with urlopen(req, timeout=timeout) as r:
        return r.read()

manifest = {}
for jf in sorted(glob.glob(f'{SEARCH}/*.json')):
    cat = os.path.basename(jf)[:-5]
    try:
        # skip the CLI banner lines before JSON
        raw = open(jf).read()
        start = raw.find('{')
        d = json.loads(raw[start:])
    except Exception as e:
        print(f'{cat}: PARSE FAIL {e}'); continue
    if not d.get('success') or not d.get('results'):
        print(f'{cat}: no results'); continue
    # candidates sorted by width desc
    cands = []
    for i, r in enumerate(d['results']):
        try:
            w = int(r.get('original_width', '0px').replace('px', ''))
            h = int(r.get('original_height', '0px').replace('px', ''))
        except Exception:
            w, h = 0, 0
        cands.append((w, h, i, r['original_url'], r.get('source', '')))
    cands.sort(key=lambda c: -c[0])
    ok = False
    for w, h, i, url, src in cands:
        if w < 900 or h < 550:
            continue
        try:
            data = fetch(url)
            fn = f'{RAW}/{cat}.jpg'
            with open(fn, 'wb') as f:
                f.write(data)
            manifest[cat] = {'file': fn, 'w': w, 'h': h, 'src': src}
            print(f'{cat}: {w}x{h} from {src} ({len(data)/1024:.0f}KB)')
            ok = True
            break
        except Exception as e:
            print(f'  {cat} cand{i}: download fail {e}')
            continue
    if not ok:
        print(f'{cat}: NO VALID CANDIDATE')

json.dump(manifest, open(f'{SEARCH}/manifest.json', 'w'), indent=1)
print(f'\nDownloaded {len(manifest)} categories')
