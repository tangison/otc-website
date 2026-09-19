#!/bin/bash
# Re-search failed categories with different phrasing
OUTDIR=/home/z/my-project/assets/imgsearch2
mkdir -p $OUTDIR
cd $OUTDIR

declare -A QUERIES=(
  [bricklaying]="mason building red brick wall trowel construction worker"
  [joinery]="woodworker sanding wooden furniture carpentry workshop"
  [students-group]="smiling students walking together university campus Africa"
  [welding]="welder wearing helmet arc welding metal sparks workshop"
  [retail]="African shopkeeper standing in small grocery store"
  [computing]="young people learning computers modern training room Africa"
  [entrepreneur]="African woman market stall selling goods entrepreneur"
  [plumbing-pipes]="steel pipes industrial warehouse metal tubes"
  [cattle]="angus cattle herd green pasture farm"
  [welding-detail]="close up welding arc bright sparks steel"
  [hero-students]="vocational students learning workshop tools Africa training center"
  [campus2]="acacia tree savanna sunset Namibia Africa"
)

for key in "${!QUERIES[@]}"; do
  if [ ! -s "$key.json" ] || ! grep -q '"success": true' "$key.json" 2>/dev/null; then
    echo "Searching: $key"
    z-ai image-search -q "${QUERIES[$key]}" --count 5 --gl us --no-rank > "$key.json" 2>&1
    grep -q '"success": true' "$key.json" && echo "  OK" || echo "  FAILED"
  fi
done
echo "DONE"
