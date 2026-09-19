#!/usr/bin/env python3
"""Download re-search candidates (all of them, for VLM triage)."""
import json, glob, os
from urllib.request import urlopen, Request

SEARCH = '/home/z/my-project/assets/imgsearch2'
RAW = '/home/z/my-project/assets/raw2'
os.makedirs(RAW, exist_ok=True)

def fetch(url, timeout=60):
    req = Request(url, headers={'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36'})
    with urlopen(req, timeout=timeout) as r:
        return r.read()

for jf in sorted(glob.glob(f'{SEARCH}/*.json')):
    cat = os.path.basename(jf)[:-5]
    raw = open(jf).read()
    start = raw.find('{')
    try:
        d = json.loads(raw[start:])
    except Exception as e:
        print(f'{cat}: PARSE FAIL {e}'); continue
    if not d.get('success') or not d.get('results'):
        print(f'{cat}: no results'); continue
    for i, r in enumerate(d['results']):
        try:
            w = int(r.get('original_width', '0px').replace('px', ''))
            h = int(r.get('original_height', '0px').replace('px', ''))
        except Exception:
            w, h = 0, 0
        if w < 900 or h < 550:
            continue
        try:
            data = fetch(r['original_url'])
            fn = f'{RAW}/{cat}-{i}.jpg'
            with open(fn, 'wb') as f:
                f.write(data)
            print(f'{cat}-{i}: {w}x{h} {r.get("source","")[:24]} ({len(data)/1024:.0f}KB)')
        except Exception as e:
            print(f'{cat}-{i}: DL FAIL {e}')
