#!/usr/bin/env python3
"""Programmatic WCAG contrast check of the palette combos used in the design."""
def lum(hex_color):
    r, g, b = [int(hex_color[i:i+2], 16) / 255 for i in (0, 2, 4)]
    def lin(c):
        return c / 12.92 if c <= 0.04045 else ((c + 0.055) / 1.055) ** 2.4
    return 0.2126 * lin(r) + 0.7152 * lin(g) + 0.0722 * lin(b)

def ratio(fg, bg):
    l1, l2 = lum(fg), lum(bg)
    hi, lo = max(l1, l2), min(l1, l2)
    return (hi + 0.05) / (lo + 0.05)

def blend(fg_hex, alpha, bg_hex):
    fg = [int(fg_hex[i:i+2], 16) for i in (0, 2, 4)]
    bg = [int(bg_hex[i:i+2], 16) for i in (0, 2, 4)]
    return ''.join(f'{round(a * alpha + b * (1 - alpha)):02x}' for a, b in zip(fg, bg))

checks = [
    ("White on navy (hero H1, headings)", "FFFFFF", "01007F", 4.5),
    ("White/85 on navy (hero lead)", blend("FFFFFF", 0.85, "01007F"), "01007F", 4.5),
    ("White/75 on navy (CTA band text)", blend("FFFFFF", 0.75, "01007F"), "01007F", 4.5),
    ("Gold on navy (labels, footer links)", "D9AA1C", "01007F", 4.5),
    ("Navy on gold (primary buttons)", "01007F", "D9AA1C", 4.5),
    ("Ink on paper (body)", "101014", "FAFAF7", 4.5),
    ("Muted fg on paper (secondary text)", "5A5A64", "FAFAF7", 4.5),
    ("Navy on white (headings on white)", "01007F", "FFFFFF", 4.5),
    ("Deep gold on paper (large numerals)", "9A7610", "FAFAF7", 3.0),
    ("Green on paper (green accents)", "147C2D", "FAFAF7", 3.0),
    ("White on otc-green (agri strip labels)", "FFFFFF", "147C2D", 4.5),
]

fails = 0
for name, fg, bg, need in checks:
    r = ratio(fg, bg)
    status = "PASS" if r >= need else "FAIL"
    if r < need:
        fails += 1
    print(f"{status} {name}: {r:.2f}:1 (need {need}:1)")
print("contrast check " + ("passed" if fails == 0 else f"FAILED ({fails})"))
exit(0 if fails == 0 else 1)
