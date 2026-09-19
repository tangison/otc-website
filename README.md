# Ongenga Technical College — Website

Production website for Ongenga Technical College (OTC), a Namibian TVET institution in Ohangwena Region.

## Stack
- Next.js 16 (App Router)
- TypeScript 5
- Tailwind CSS 4 + shadcn/ui
- Framer Motion
- Deployed on Vercel

## Pages
- `/` — Home: hero, quick facts, two pathways, horticulture feature, institutional units preview, apply CTA
- `/about` — Vision, mission, founding story, parent company, four values, alignment strip
- `/programs` — Full-time NVC (7 trades) + short courses (9) with fees shown only where confirmed
- `/units` — EDC, OTC Boxing Club, Auxiliary Centre, Sem Hasheela Agricultural Campus (Z-axis cascade)
- `/partners` — Bulawayo Polytechnic, Advanced Design Colleges, CJC Agricultural College
- `/apply` — Intake schedule, 4-step process, form placeholder, Admissions contact
- `/contact` — Phone, email, address, OpenStreetMap embed, enquiry form (mailto)
- `/privacy` — Plain-language privacy policy
- `404` and error boundaries

## Brand
- Primary navy `#01007F` · Accent gold `#D9AA1C`
- Sparing red `#FB0103` and green `#147C2D`
- Typography: Sora (display) + Plus Jakarta Sans (body) + JetBrains Mono (accents)
- Crest logo used as-is (header, favicon, OG image)

## SEO & A11y
- Per-page meta title + description + Open Graph + Twitter card
- JSON-LD `EducationalOrganization` structured data
- robots.txt + sitemap.xml (Next.js metadata routes)
- Web manifest + favicons (16, 32, 180, 192, 512)
- OG image 1200x630
- Skip-to-content link, focus-visible gold ring, semantic landmarks, alt text on all images,
  labeled form fields, keyboard-navigable mobile menu

## Performance
- 3 real OTC photos served as PNG + WebP + AVIF (Sharp pipeline in `scripts/generate-favicons.js`)
- Next.js Image component handles responsive sizes + lazy loading
- Layout shift minimized via explicit aspect ratios
- Below-the-fold images lazy-loaded

## Placeholders left for the client
- Downloadable application form (Admissions page)
- Full-time NVC program fees (Programs page + Admissions page)
- Staff/instructor names and bios (no people page published without confirmation)
- Official Facebook URL confirmation (only Twitter/X and LinkedIn are confirmed real)
- Contact set mismatch between otc.nam.na and ongenga.com (flagged in content-brief.md §1)

## Source
Content facts come from `content-brief.md` (in `assets/otc-package/`). The brief is the single
source of truth; no facts were invented. Gaps flagged in §9 of the brief were marked as
client-placeholders on the site rather than filled with fabricated content.

## Local dev
```bash
bun install
bun run dev   # http://localhost:3000
bun run lint
```
