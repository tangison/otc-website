#!/bin/bash
# Batch image search for OTC site imagery (stdout capture)
OUTDIR=/home/z/my-project/assets/imgsearch
mkdir -p $OUTDIR
cd $OUTDIR

declare -A QUERIES=(
  [joinery]="carpenter woodworking workshop crafting furniture Africa"
  [bricklaying]="bricklayer laying bricks on construction site Africa"
  [retail]="retail shop worker organizing stock in store Africa"
  [electrical]="electrician trainee wiring electrical panel workshop"
  [automech]="auto mechanic repairing car engine workshop"
  [horticulture]="African farmer tending vegetable garden rows crops"
  [beekeeping]="beekeeper in protective suit inspecting honey hive frames"
  [mushroom]="oyster mushroom farming growing shelves"
  [poultry]="free range chickens poultry farm Africa"
  [entrepreneur]="young African entrepreneurs working small business market"
  [boxing]="amateur boxer training punching bag gym"
  [hero-trade]="technical vocational training students workshop Africa"
  [campus]="Namibia northern savanna landscape trees"
  [computing]="computer skills training class students Africa"
  [foodprocessing]="food processing drying grains African produce"
  [solar]="solar panel installation technicians Africa"
  [cattle]="cattle herd grazing farm Namibia"
  [students-group]="African students classmates smiling outdoors campus"
  [welding-detail]="welding torch sparks close up dark workshop"
  [tools-wall]="hand tools hanging on workshop wall"
  [plumbing-pipes]="industrial pipes and steel structure factory"
)

for key in "${!QUERIES[@]}"; do
  if [ ! -s "$key.json" ] || ! grep -q '"success": true' "$key.json" 2>/dev/null; then
    echo "Searching: $key"
    z-ai image-search -q "${QUERIES[$key]}" --count 4 --gl us --no-rank > "$key.json" 2>&1
    grep -q '"success": true' "$key.json" && echo "  OK" || echo "  FAILED"
  else
    echo "Skip existing: $key"
  fi
done
echo "DONE"
