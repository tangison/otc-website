/* eslint-disable @typescript-eslint/no-require-imports */
/* eslint-disable no-console */
// Generate favicon set + OG image from the OTC crest logo.
const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const ROOT = path.resolve(__dirname, "..");
const PUB = path.join(ROOT, "public");
const SRC_LOGO = path.join(PUB, "images", "otc-logo.png");
const SRC_HORTI = path.join(PUB, "images", "otc-student-horticulture.png");
const SRC_CLASS = path.join(PUB, "images", "otc-student-classroom.png");

async function run() {
  // Favicons from logo (square) — we crop to a centered square first.
  const logoSquare = await sharp(SRC_LOGO)
    .resize({ width: 512, height: 512, fit: "cover", position: "center" })
    .toBuffer();

  await sharp(logoSquare).resize(16, 16).png().toFile(path.join(PUB, "favicon-16x16.png"));
  await sharp(logoSquare).resize(32, 32).png().toFile(path.join(PUB, "favicon-32x32.png"));
  await sharp(logoSquare).resize(180, 180).png().toFile(path.join(PUB, "apple-touch-icon.png"));
  await sharp(logoSquare).resize(192, 192).png().toFile(path.join(PUB, "icon-192.png"));
  await sharp(logoSquare).resize(512, 512).png().toFile(path.join(PUB, "icon-512.png"));
  await sharp(logoSquare).resize(150, 150).png().toFile(path.join(PUB, "mstile-150x150.png"));
  // ICO is not directly supported by sharp; provide 32x32 png as favicon.png as well
  await sharp(logoSquare).resize(32, 32).png().toFile(path.join(PUB, "favicon.png"));

  // WebP versions of the photos for performance
  await sharp(SRC_HORTI).webp({ quality: 78 }).toFile(path.join(PUB, "images", "otc-student-horticulture.webp"));
  await sharp(SRC_CLASS).webp({ quality: 78 }).toFile(path.join(PUB, "images", "otc-student-classroom.webp"));
  await sharp(SRC_LOGO).webp({ quality: 80 }).toFile(path.join(PUB, "images", "otc-logo.webp"));

  // AVIF versions
  await sharp(SRC_HORTI).avif({ quality: 55 }).toFile(path.join(PUB, "images", "otc-student-horticulture.avif"));
  await sharp(SRC_CLASS).avif({ quality: 55 }).toFile(path.join(PUB, "images", "otc-student-classroom.avif"));
  await sharp(SRC_LOGO).avif({ quality: 55 }).toFile(path.join(PUB, "images", "otc-logo.avif"));

  // OG image: 1200x630, navy bg with crest centered + tagline
  const W = 1200, H = 630;
  const logoBuf = await sharp(SRC_LOGO).resize({ width: 320, height: 320, fit: "contain", background: { r: 1, g: 0, b: 127, alpha: 1 } }).toBuffer();
  const svg = `
  <svg width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="navy" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stop-color="#01007F"/>
        <stop offset="1" stop-color="#0200a8"/>
      </linearGradient>
    </defs>
    <rect width="${W}" height="${H}" fill="url(#navy)"/>
    <rect x="0" y="0" width="${W}" height="6" fill="#D9AA1C"/>
    <rect x="0" y="${H - 6}" width="${W}" height="6" fill="#D9AA1C"/>
    <g transform="translate(80, 155)">
      <image href="data:image/png;base64,${logoBuf.toString("base64")}" width="320" height="320"/>
    </g>
    <g transform="translate(480, 200)">
      <text x="0" y="0" fill="#D9AA1C" font-family="Arial, Helvetica, sans-serif" font-size="28" font-weight="700" letter-spacing="6">ONGENGA TECHNICAL COLLEGE</text>
      <text x="0" y="80" fill="#FFFFFF" font-family="Arial, Helvetica, sans-serif" font-size="68" font-weight="800">Nurturing the Masters</text>
      <text x="0" y="158" fill="#FFFFFF" font-family="Arial, Helvetica, sans-serif" font-size="68" font-weight="800">of Value Addition</text>
      <text x="0" y="240" fill="#FFFFFF" font-family="Arial, Helvetica, sans-serif" font-size="22" opacity="0.85">Ohangwena Region, Namibia  ·  Founded October 2019</text>
    </g>
  </svg>`;
  await sharp(Buffer.from(svg)).png().toFile(path.join(PUB, "og-image.png"));

  // Also generate a Twitter card (1200x600) — reuse OG, that's fine for Twitter large_image.

  // Logo SVG favicon (single-color simplified) — we will instead embed the PNG directly.
  console.log("Favicons + OG image generated OK.");
}

run().catch((e) => { console.error(e); process.exit(1); });
