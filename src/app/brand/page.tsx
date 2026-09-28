import type { Metadata } from "next";
import PageHero from "@/components/site/page-hero";
import LazyGallery from "@/components/site/lazy-gallery";
import { campusCarousel } from "@/lib/site";
import Reveal from "@/components/site/reveal";
import SectionHead from "@/components/site/section-head";

export const metadata: Metadata = {
  title: "Brand: Colours, Crest and Typography",
  description:
    "The Ongenga Technical College brand system: crest usage, the palette sampled from the crest artwork, and the typography pairing used across this site.",
  alternates: { canonical: "/brand" },
  robots: { index: false, follow: false },
};

const palette = [
  { name: "OTC Navy", hex: "#0E0AAE", note: "Shield border, ribbon, wordmark. Primary brand colour.", dark: true },
  { name: "OTC Gold", hex: "#D6AD1B", note: "Crest circle. Accent bar, highlights, key numerals.", dark: false },
  { name: "OTC Red", hex: "#D83221", note: "Ribbon banner. Errors and destructive states only.", dark: false },
  { name: "OTC Green", hex: "#698214", note: "Palm tree. Success states, used sparingly.", dark: false },
  { name: "Ink", hex: "#0A0800", note: "Crossed tools. Body text and display type on light grounds.", dark: true },
  { name: "Paper", hex: "#F7F6F1", note: "Page background: warm, editorial, easy on photographs.", dark: false },
];

export default function BrandPage() {
  return (
    <>
      <PageHero
        image="/images/classrooms-02.webp"
        alt="OTC trainees wearing the college's branded jackets"
        caption="Brand in use: OTC jackets, theory session"
        title="The OTC brand system"
        lede="One crest, one palette sampled from the crest pixels, two typefaces. This page documents the tokens so future work stays consistent."
      />

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-24">
        {/* Crest */}
        <SectionHead
          index="01"
          title="The crest"
          lede="The college crest carries a shield, a palm tree, crossed tools and the college name. It appears in the header, on certificates and on signage."
        />
        <Reveal className="mt-10 grid gap-8 lg:grid-cols-2">
          <div className="flex items-center justify-center border border-border bg-white p-10">
            <img src="/icons/icon-512.png" alt="The OTC crest on the brand navy" width={160} height={160} className="h-40 w-40" />
          </div>
          <div className="flex items-center justify-center border border-border bg-white p-10">
            <img src="/favicon.svg" alt="The OTC crest icon" width={160} height={160} className="h-40 w-40" />
          </div>
        </Reveal>
        <Reveal className="mt-6 border-l-2 border-otc-gold bg-otc-tint/60 px-5 py-4">
          <p className="text-[0.95rem] leading-relaxed text-otc-ink/80">
            Source resolution note: the crest comes from a low-resolution flyer
            screenshot. It is used here at sizes where it reads cleanly. A redrawn vector from the
            original designer would unlock larger, sharper applications, and is on the college's
            asset wish list.
          </p>
        </Reveal>
      </section>

      {/* Palette */}
      <section className="border-y border-border bg-white">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-24">
          <SectionHead
            index="02"
            title="Palette"
            lede="Sampled directly from the crest artwork, not approximated."
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {palette.map((c, i) => (
              <Reveal key={c.hex} delay={(i % 3) * 80}>
                <div className="h-24 w-full" style={{ background: c.hex }} aria-hidden="true" />
                <p className="mt-3 font-display text-lg font-semibold text-otc-navy">{c.name}</p>
                <p className="mt-0.5 font-mono text-sm text-otc-ink/70">{c.hex}</p>
                <p className="mt-1.5 text-sm leading-relaxed text-otc-ink/70">{c.note}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Typography */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-24">
        <SectionHead
          index="03"
          title="Typography"
          lede="Two families, no more. Fraunces carries the display voice; Outfit carries the reading."
        />
        <div className="mt-12 grid gap-10 lg:grid-cols-2">
          <Reveal>
            <div className="border border-border bg-white p-8">
              <p className="text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-otc-gold-deep">
                Display: Fraunces
              </p>
              <p className="font-display mt-4 text-5xl font-semibold tracking-tight text-otc-navy">
                Seven trades.
              </p>
              <p className="font-display text-5xl italic font-medium tracking-tight text-otc-gold-deep">
                One standard.
              </p>
              <p className="mt-6 text-sm leading-relaxed text-otc-ink/70">
                A high-contrast serif for headlines, numerals and moments of ceremony. Weights 400 to
                600, tight tracking, generous size.
              </p>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="border border-border bg-white p-8">
              <p className="text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-otc-gold-deep">
                Body: Outfit
              </p>
              <p className="mt-4 text-xl leading-relaxed text-otc-ink">
                A geometric sans tuned for long reading on screens. Body sizes start at 17px on
                mobile and grow to 18px and up on desktop, per the site review's readability note.
              </p>
              <p className="mt-6 text-sm leading-relaxed text-otc-ink/70">
                Both families load with font-display: swap and self-host through Next.js, so no
                third-party font request ever blocks a page.
              </p>
            </div>
          </Reveal>
        </div>
      </section>
      {/* The crest in the wild: campus photography showing brand assets at work */}
      <section className="border-t border-border bg-white">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-20">
          <SectionHead
            index="04"
            title="The crest in the wild"
            lede="Brand assets at work: signage, banners, branded jackets and the people who carry them. Drag through the campus."
          />
          <Reveal className="mt-12">
            <LazyGallery items={campusCarousel} label="Brand in use across campus photos" />
          </Reveal>
        </div>
      </section>
    </>
  );
}
