#!/usr/bin/env python3
"""Process confirmed images + OTC brand assets into optimized WebP + favicon set."""
import os
from PIL import Image, ImageOps

RAW = '/home/z/my-project/assets/raw'
RAW2 = '/home/z/my-project/assets/raw2'
OTC = '/home/z/my-project/assets/otc-package/otc-package/images'
OUT = '/home/z/my-project/public/images'
FAV = '/home/z/my-project/public'
os.makedirs(OUT, exist_ok=True)

# (source_path, out_name, target_width, quality)
JOBS = [
    # Round 1 clean stock
    (f'{RAW}/automech.jpg',        'course-automech',      1400, 74),
    (f'{RAW}/beekeeping.jpg',      'course-beekeeping',    1400, 74),
    (f'{RAW}/boxing.jpg',          'unit-boxing',          1400, 76),
    (f'{RAW}/campus.jpg',          'namibia-quiver',       1920, 70),
    (f'{RAW}/electrical.jpg',      'course-electrical',    1400, 74),
    (f'{RAW}/foodprocessing.jpg',  'course-foodprocess',   1400, 74),
    (f'{RAW}/hero-trade.jpg',      'hero-workshop',        1920, 72),
    (f'{RAW}/horticulture.jpg',    'course-horticulture',  1400, 74),
    (f'{RAW}/mushroom.jpg',        'course-mushroom',      1400, 74),
    (f'{RAW}/poultry.jpg',         'course-poultry',       1400, 74),
    (f'{RAW}/solar.jpg',           'course-solar',         1400, 74),
    (f'{RAW}/tools-wall.jpg',      'detail-tools',         1600, 74),
    # Round 2 clean stock
    (f'{RAW2}/bricklaying2-3.jpg', 'course-bricklaying',   1400, 74),
    (f'{RAW2}/campus2-3.jpg',      'namibia-savanna',      1920, 70),
    (f'{RAW2}/campus2-4.jpg',      'namibia-sunset',       1600, 70),
    (f'{RAW2}/cattle-0.jpg',       'course-animal',        1400, 74),
    (f'{RAW2}/computing-3.jpg',    'course-computing',     1400, 74),
    (f'{RAW2}/entrepreneur-2.jpg', 'unit-edc',             1400, 74),
    (f'{RAW2}/entrepreneur-3.jpg', 'course-agriprocessing',1400, 74),
    (f'{RAW2}/hero-students-0.jpg','course-sewing',        1400, 74),
    (f'{RAW2}/hero-students-1.jpg','campus-building',      1600, 72),
    (f'{RAW2}/hero-students-4.jpg','course-icdl',          1400, 74),
    (f'{RAW2}/joinery-0.jpg',      'course-joinery',       1400, 74),
    (f'{RAW2}/joinery-3.jpg',      'detail-woodshop',      1400, 74),
    # Authentic OTC assets (real photos, kept at higher fidelity)
    (f'{OTC}/otc-student-classroom.png', 'otc-classroom',  1400, 82),
    (f'{OTC}/otc-student-horticulture.png', 'otc-horticulture', 1400, 82),
]

total = 0
for src, name, tw, q in JOBS:
    if not os.path.exists(src):
        print(f'MISSING {src}'); continue
    img = Image.open(src)
    img = ImageOps.exif_transpose(img).convert('RGB')
    if img.width > tw:
        img = img.resize((tw, int(img.height * tw / img.width)), Image.LANCZOS)
    out = f'{OUT}/{name}.webp'
    img.save(out, 'WEBP', quality=q, method=6)
    kb = os.path.getsize(out) / 1024
    total += kb
    print(f'{name}.webp {img.width}x{img.height} {kb:.0f}KB')

# Logo: full + cropped crest for favicon
logo = Image.open(f'{OTC}/otc-logo.png').convert('RGBA')
logo.save(f'{OUT}/otc-logo.png', optimize=True)
# Trim white margins for a tight crest
gray = logo.convert('L')
bbox = gray.point(lambda p: 0 if p > 245 else 255).getbbox()
if bbox:
    pad = 12
    l, t, r, b = bbox
    crest = logo.crop((max(0, l-pad), max(0, t-pad), min(logo.width, r+pad), min(logo.height, b+pad)))
else:
    crest = logo
crest.save(f'{OUT}/otc-crest.png', optimize=True)
print(f'otc-logo.png {logo.width}x{logo.height} {os.path.getsize(f"{OUT}/otc-logo.png")/1024:.0f}KB')
print(f'otc-crest.png {crest.width}x{crest.height} {os.path.getsize(f"{OUT}/otc-crest.png")/1024:.0f}KB')

# Favicon set from cropped crest
square = Image.new('RGBA', (max(crest.size), max(crest.size)), (0, 0, 0, 0))
square.paste(crest, ((max(crest.size)-crest.width)//2, (max(crest.size)-crest.height)//2))
for size in [512, 256, 192, 180, 152, 120, 96, 64, 48, 32, 16]:
    s = square.resize((size, size), Image.LANCZOS)
    s.save(f'{FAV}/favicon-{size}x{size}.png', optimize=True)
square.resize((48, 48), Image.LANCZOS).save(f'{FAV}/favicon.ico', sizes=[(16,16),(32,32),(48,48)])
print('favicon set written')
print(f'TOTAL images: {total/1024:.1f}MB')
