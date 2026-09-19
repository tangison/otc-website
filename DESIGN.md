# DESIGN.md — OTC visual world (image-led institutional editorial)

## Direction
Academic-editorial craft at the standard of Stanford University's site and Collins' brand work: photography leads, typography is confident, whitespace is generous, text lives behind widgets. Every page opens with a full-bleed or dominant photographic moment.

## Palette
- OTC Navy `#01007F` — primary surfaces, headers, footers, display text on light.
- OTC Gold `#D9AA1C` — single accent: CTAs, active states, key underlines.
- OTC Green `#147C2D` — reserved strictly for agriculture contexts.
- OTC Red `#FB0103` — micro accents only (crest ribbon echoes), never body or fills.
- Paper `#FAFAF7` warm white, Ink `#101014` off-black (never #000000).
- On navy surfaces: white text at 92% opacity, gold accents.

## Typography
- Display: Fraunces (variable serif, 500-640 weight, optical sizing) — institutional warmth, distinct from AI-slop sans defaults.
- Body/UI: Outfit (300-600) — geometric, highly legible.
- Numerals in facts/stats: Outfit tabular. No monospace costume.
- Scale: display clamp(2.5rem, 6vw, 5.5rem) / section titles clamp(1.75rem, 3.5vw, 3rem) / body 1rem-1.125rem, measure 65-70ch max.
- Tracking: display -0.03em, never tighter than -0.04em.

## Layout system
- Asymmetric editorial grids (2fr/1fr, 5/7, 4/8 splits) at variance; strict single column below md.
- Photography fills: full-bleed heroes (min-h-[86dvh]) with navy gradient scrim left-to-right, images at 3:2 or 16:10, aspect-ratio locked to prevent CLS.
- No same-size card rows: program tiles are a masonry-feel mosaic with varied spans; content groupings use border-t and negative space, not boxed cards.
- Section rhythm: 96-140px vertical padding desktop, 64px mobile.

## Progressive disclosure widgets (the "hide text behind widgets" mandate)
- Course details: expandable accordion bodies and Dialog lightboxes with photo + facts + price.
- Programs page: Tabs component switching Full-time/Short courses.
- Admissions: FAQ accordion; intake timeline as horizontal scroll cards.
- Units: Collapsible panels with imagery headers.
- Contact: info in Dialog-openable detail cards where long.

## Motion (restrained, MOTION_INTENSITY 4-5)
- One authored moment per page (hero image slow scale-in 1.2s cubic-bezier(0.16,1,0.3,1), or scroll-linked horizontal strip).
- IntersectionObserver reveal: opacity + 24px translate only, 500ms, stagger 80ms.
- Hover: image scale 1.03 with 700ms ease; buttons translate -1px active.
- prefers-reduced-motion: all reveals and hero motion disabled, states preserved.
- No Framer Motion in server components; motion components are isolated client leaves.

## Banned (craft floor + taste-skill)
Em dashes in copy. Inter font. Gradient text. Eyebrow/kicker labels above headings. Same-size 3-card rows. Glassmorphism decoration. Neon glows. #000000. Emoji. "Elevate/Seamless/Unleash/Next-gen/Unlock". Section numbers. Fake stats. Stock photos captioned as OTC people.

## Component character
- Buttons: pill radius, navy fill / gold fill for primary CTA, 1px gold border ghost on navy.
- Radius scale: 16px images, 12px controls, pill 999px buttons/tags.
- Elevation: single system, `0 24px 48px -20px rgba(1,0,127,0.18)` tinted navy. No border+shadow stacks.
- Focus: 2px gold outline offset 3px, always visible.
- Selection color gold-tinted; scrollbar styled navy on paper.
