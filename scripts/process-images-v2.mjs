// OTC image pipeline v2: uses ALL 54 usable source photos from the client package.
// Photos are cleaned (sharpen, gentle exposure/saturation lift), resized per role, WebP-encoded.
// Excludes the 18 photos in 99_Excluded_Not_OTC_or_Unclear (not OTC material).
import sharp from "sharp";
import { mkdirSync, cpSync, statSync } from "fs";
import { join } from "path";

const PKG = "/home/z/my-project/otc-assets/package/OTC_Full_Package";
const PH = `${PKG}/01_Source_Photos`;
const BRAND = `${PKG}/02_Brand_Assets`;
const OUT = "/home/z/my-project/public/images";
const ICONS = "/home/z/my-project/public/icons";
mkdirSync(OUT, { recursive: true });
mkdirSync(ICONS, { recursive: true });

// [sourcePath, outName, maxWidth]  — width tier: 1600 hero, 1280 feature, 1100 gallery, 960 tile
const jobs = [
  // Classrooms & training (6)
  ["01_Classrooms_Training/01_Classrooms_Training_01.jpg", "classrooms-01", 1100],
  ["01_Classrooms_Training/01_Classrooms_Training_02.jpg", "classrooms-02", 1600], // OTC jackets, hero
  ["01_Classrooms_Training/01_Classrooms_Training_03.jpg", "classrooms-03", 1100],
  ["01_Classrooms_Training/01_Classrooms_Training_04.jpg", "classrooms-04", 1600], // instructor addressing hall, hero
  ["01_Classrooms_Training/01_Classrooms_Training_05.jpg", "classrooms-05", 1280],
  ["01_Classrooms_Training/01_Classrooms_Training_06.jpg", "classrooms-06", 960],
  // Workshop practicals (4)
  ["02_Workshop_Practicals/02_Workshop_Practicals_01.jpg", "workshop-01", 1280],
  ["02_Workshop_Practicals/02_Workshop_Practicals_02.jpg", "workshop-02", 1100],
  ["02_Workshop_Practicals/02_Workshop_Practicals_03.jpg", "workshop-03", 1600], // multimeter close-up, hero
  ["02_Workshop_Practicals/02_Workshop_Practicals_04.jpg", "workshop-04", 1280],
  // Auto mechanics (2)
  ["03_Auto_Mechanics/03_Auto_Mechanics_01.jpg", "auto-01", 1280],
  ["03_Auto_Mechanics/03_Auto_Mechanics_02.jpg", "auto-02", 1600], // engine bay, hero
  // Expo indoor booth (3)
  ["04_Expo_Indoor_Booth/04_Expo_Indoor_Booth_01.jpg", "expo-indoor-01", 1100],
  ["04_Expo_Indoor_Booth/04_Expo_Indoor_Booth_02.jpg", "expo-indoor-02", 1280],
  ["04_Expo_Indoor_Booth/04_Expo_Indoor_Booth_03.jpg", "expo-indoor-03", 1600], // OTC fascia sign, hero
  // Expo outdoor tent (3)
  ["05_Expo_Outdoor_Tent/05_Expo_Outdoor_Tent_01.jpg", "expo-outdoor-01", 1600], // gazebo wide, hero
  ["05_Expo_Outdoor_Tent/05_Expo_Outdoor_Tent_02.jpg", "expo-outdoor-02", 1280],
  ["05_Expo_Outdoor_Tent/05_Expo_Outdoor_Tent_03.jpg", "expo-outdoor-03", 1100],
  // Community outreach (3)
  ["06_Community_Outreach_Demo/06_Community_Outreach_Demo_01.jpg", "outreach-01", 1280],
  ["06_Community_Outreach_Demo/06_Community_Outreach_Demo_02.jpg", "outreach-02", 1280],
  ["06_Community_Outreach_Demo/06_Community_Outreach_Demo_03.jpg", "outreach-03", 1100],
  // Banner & signage install (3)
  ["07_Banner_Signage_Install/07_Banner_Signage_Install_01.jpg", "signage-01", 1280],
  ["07_Banner_Signage_Install/07_Banner_Signage_Install_02.jpg", "signage-02", 1100],
  ["07_Banner_Signage_Install/07_Banner_Signage_Install_03.jpg", "signage-03", 1280],
  // AgriCampus fencing construction (10)
  ["08_AgriCampus_Fencing_Construction/08_AgriCampus_Fencing_Construction_01.jpg", "agri-build-01", 960],
  ["08_AgriCampus_Fencing_Construction/08_AgriCampus_Fencing_Construction_02.jpg", "agri-build-02", 1100],
  ["08_AgriCampus_Fencing_Construction/08_AgriCampus_Fencing_Construction_03.jpg", "agri-build-03", 960],
  ["08_AgriCampus_Fencing_Construction/08_AgriCampus_Fencing_Construction_04.jpg", "agri-build-04", 1280],
  ["08_AgriCampus_Fencing_Construction/08_AgriCampus_Fencing_Construction_05.jpg", "agri-build-05", 960],
  ["08_AgriCampus_Fencing_Construction/08_AgriCampus_Fencing_Construction_06.jpg", "agri-build-06", 1100],
  ["08_AgriCampus_Fencing_Construction/08_AgriCampus_Fencing_Construction_07.jpg", "agri-build-07", 1280],
  ["08_AgriCampus_Fencing_Construction/08_AgriCampus_Fencing_Construction_08.jpg", "agri-build-08", 960],
  ["08_AgriCampus_Fencing_Construction/08_AgriCampus_Fencing_Construction_09.jpg", "agri-build-09", 1100],
  ["08_AgriCampus_Fencing_Construction/08_AgriCampus_Fencing_Construction_10.jpg", "agri-build-10", 960],
  // AgriCampus fencing handover (7)
  ["09_AgriCampus_Fencing_Handover/09_AgriCampus_Fencing_Handover_01.jpg", "agri-handover-01", 1280],
  ["09_AgriCampus_Fencing_Handover/09_AgriCampus_Fencing_Handover_02.jpg", "agri-handover-02", 960],
  ["09_AgriCampus_Fencing_Handover/09_AgriCampus_Fencing_Handover_03.jpg", "agri-handover-03", 1280],
  ["09_AgriCampus_Fencing_Handover/09_AgriCampus_Fencing_Handover_04.jpg", "agri-handover-04", 1100],
  ["09_AgriCampus_Fencing_Handover/09_AgriCampus_Fencing_Handover_05.jpg", "agri-handover-05", 1280],
  ["09_AgriCampus_Fencing_Handover/09_AgriCampus_Fencing_Handover_06.jpg", "agri-handover-06", 1280],
  ["09_AgriCampus_Fencing_Handover/09_AgriCampus_Fencing_Handover_07.jpg", "agri-handover-07", 1100],
  // Graduation / recognition ceremony (7)
  ["10_Graduation_Ceremony/10_Graduation_Ceremony_01.jpg", "graduation-01", 1280],
  ["10_Graduation_Ceremony/10_Graduation_Ceremony_02.jpg", "graduation-02", 1280],
  ["10_Graduation_Ceremony/10_Graduation_Ceremony_03.jpg", "graduation-03", 1600], // handshake + certificate, hero
  ["10_Graduation_Ceremony/10_Graduation_Ceremony_04.jpg", "graduation-04", 1280],
  ["10_Graduation_Ceremony/10_Graduation_Ceremony_05.jpg", "graduation-05", 1100],
  ["10_Graduation_Ceremony/10_Graduation_Ceremony_06.jpg", "graduation-06", 960],
  ["10_Graduation_Ceremony/10_Graduation_Ceremony_07.jpg", "graduation-07", 960],
  // Campus team (3)
  ["11_Campus_Team/11_Campus_Team_01.jpg", "team-01", 1280],
  ["11_Campus_Team/11_Campus_Team_02.jpg", "team-02", 1280],
  ["11_Campus_Team/11_Campus_Team_03.jpg", "team-03", 1280], // under the OTC campus sign
];

async function run() {
  let total = 0;
  for (const [src, name, width] of jobs) {
    const input = join(PH, src);
    const out = join(OUT, `${name}.webp`);
    await sharp(input)
      .rotate() // respect EXIF
      .resize({ width, withoutEnlargement: true, kernel: "lanczos3" })
      .sharpen({ sigma: 0.7, m1: 0.6, m2: 1.8 }) // gentle structure recovery for WhatsApp compression
      .modulate({ saturation: 1.06, brightness: 1.02 })
      .webp({ quality: 80, effort: 4 })
      .toFile(out);
    const kb = Math.round(statSync(out).size / 1024);
    total += kb;
    console.log(`${name}.webp ${kb}KB`);
  }
  console.log(`--- ${jobs.length} photos, ${Math.round(total / 1024)}MB total ---`);

  // Brand assets: official icon-only crest at exact sizes from the client package
  const iconMap = [
    ["Icon-Only/otc-icon-transparent-32px.png", "icon-32.png"],
    ["Icon-Only/otc-icon-transparent-64px.png", "icon-64.png"],
    ["Icon-Only/otc-icon-transparent-128px.png", "icon-128.png"],
    ["Icon-Only/otc-icon-transparent-192px.png", "icon-192.png"],
    ["Icon-Only/otc-icon-transparent-256px.png", "icon-256.png"],
    ["Icon-Only/otc-icon-transparent-512px.png", "icon-512.png"],
    ["Icon-Only/otc-icon-transparent-1024px.png", "icon-1024.png"],
    ["Logo-Light/otc-logo-transparent-512px.png", "logo-light-512.png"],
    ["Logo-Light/otc-logo-transparent-1024px.png", "logo-light-1024.png"],
    ["Logo-Dark/otc-logo-on-dark-512px.png", "logo-dark-512.png"],
    ["Logo-Dark/otc-logo-on-dark-1024px.png", "logo-dark-1024.png"],
  ];
  for (const [src, dest] of iconMap) {
    try {
      cpSync(join(BRAND, src), join(ICONS, dest));
      console.log(`icon: ${dest}`);
    } catch {
      console.log(`icon MISSING: ${src}`);
    }
  }

  // apple-touch-icon: 180x180 square from the 256 crest on paper background
  await sharp(join(BRAND, "Icon-Only/otc-icon-transparent-256px.png"))
    .resize(180, 180, { fit: "contain", background: { r: 247, g: 246, b: 241, alpha: 1 } })
    .flatten({ background: { r: 247, g: 246, b: 241 } })
    .png()
    .toFile(join(ICONS, "apple-touch-icon.png"));
  console.log("icon: apple-touch-icon.png (180)");

  // OG card 1200x630: navy field, gold rule, crest centred on light panel, wordmark from provided logo
  const crest = await sharp(join(BRAND, "Icon-Only/otc-icon-transparent-512px.png"))
    .resize(360, 360, { fit: "inside" })
    .png()
    .toBuffer();
  const logo = await sharp(join(BRAND, "Logo-Light/otc-logo-transparent-512px.png"))
    .resize(560, 560, { fit: "inside" })
    .png()
    .toBuffer();
  const ogSvg = Buffer.from(
    `<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
      <rect width="1200" height="630" fill="#0e0aae"/>
      <rect x="0" y="0" width="1200" height="10" fill="#d6ad1b"/>
      <rect x="0" y="620" width="1200" height="10" fill="#d6ad1b"/>
      <text x="90" y="200" font-family="Georgia, serif" font-size="64" font-weight="600" fill="#ffffff">Ongenga Technical College</text>
      <text x="92" y="266" font-family="Arial, sans-serif" font-size="30" fill="#d6ad1b" letter-spacing="4">TRAINING YOU CAN PUT YOUR HANDS ON</text>
      <text x="92" y="540" font-family="Arial, sans-serif" font-size="26" fill="#ffffff" opacity="0.85">Ongenga, Ohangwena Region, Namibia</text>
      <text x="92" y="580" font-family="Arial, sans-serif" font-size="26" fill="#ffffff" opacity="0.85">otc.edu.na</text>
    </svg>`
  );
  await sharp(ogSvg)
    .composite([
      { input: logo, top: 330, left: 90 },
    ])
    .png({ quality: 90 })
    .toFile(join(OUT, "og-card.png"));
  console.log("og-card.png rebuilt");
}

run().catch((e) => {
  console.error(e);
  process.exit(1);
});
