#!/bin/bash
# Verify every client photo is used via at least one variant, and list dead assets.
cd /home/z/my-project
echo "=== Unique photo coverage (base name -> any variant referenced in src) ==="
missing=0
for f in public/images/*.webp; do
  base=$(basename "$f" .webp)          # e.g. agri-build-03-c
  root=$(echo "$base" | sed 's/-[ctb]$//')  # strip variant suffix
  if rg -q "$root" src/ 2>/dev/null; then :; else echo "PHOTO UNCOVERED: $root"; missing=1; fi
done
[ $missing -eq 0 ] && echo "All 51 photos covered."
echo ""
echo "=== Orphan variants (variant exists but its root is never referenced AND variant itself unreferenced) ==="
for f in public/images/*.webp; do
  base=$(basename "$f")
  if ! rg -q "$base" src/ 2>/dev/null; then
    root=$(echo "$base" | sed 's/\.webp$//; s/-[ctb]$//')
    if ! rg -q "$root" src/ 2>/dev/null; then echo "ORPHAN: $base"; fi
  fi
done
echo ""
echo "=== Caption chip count in rendered pages/components ==="
rg -c "caption-chip" src/app src/components --glob '*.tsx' | sort
