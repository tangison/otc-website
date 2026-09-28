import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Reveal from "@/components/site/reveal";
import SectionHead from "@/components/site/section-head";
import PageHero from "@/components/site/page-hero";
import LazyGallery from "@/components/site/lazy-gallery";
import { site, alumni, trades, alumniCarousel } from "@/lib/site";

export const metadata: Metadata = {
  title: "Alumni & Graduate Outcomes",
  description:
    "Life after Ongenga Technical College: recognition ceremonies, graduate careers in the trades, and where an NVC qualification can take you in Namibia.",
  alternates: { canonical: "/alumni" },
  keywords: [
    "OTC alumni",
    "Ongenga Technical College graduates",
    "NVC graduate Namibia",
    "technical college outcomes Namibia",
    "artisan careers Namibia",
  ],
};

export default function AlumniPage() {
  return (
    <>
      <PageHero
        image="/images/graduation-03.webp"
        alt="A graduate shaking hands as he receives his OTC certificate at the recognition ceremony"
        caption="Certificate handover, OTC recognition ceremony"
        title="The handshake that starts a career"
        lede="Every OTC story ends the same way: a certificate in hand and a trade to practise. This is life after OTC."
      />

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <Reveal>
            <h2 className="display-2 text-otc-navy">What OTC alumni carry out the gate</h2>
            <p className="mt-6 text-[1rem] leading-relaxed text-otc-ink/80">
              An NVC qualification from Ongenga Technical College is a practical thing. It says you
              can weld a seam that holds, wire a board that passes inspection, lay a wall that stays
              true, or grow a crop that sells. The recognition ceremony in these photos is the
              college's favourite day of the year, because it is the day the training pays off in
              front of the graduate's own family.
            </p>
            <p className="mt-4 text-[1rem] leading-relaxed text-otc-ink/80">
              {alumni.intro}
            </p>
          </Reveal>
          <Reveal delay={120}>
            <div className="border-l-2 border-otc-gold bg-otc-tint/60 px-6 py-6">
              <p className="font-display text-xl font-semibold tracking-tight text-otc-navy">
                Are you OTC alumni?
              </p>
              <p className="mt-3 text-[0.95rem] leading-relaxed text-otc-ink/80">
                {alumni.invite}
              </p>
              <a
                href={`mailto:${site.email}?subject=My%20OTC%20story`}
                className="press mt-5 inline-flex min-h-[44px] items-center rounded-sm bg-otc-navy px-5 text-sm font-semibold text-white transition-colors hover:bg-otc-navy-deep focus-visible-ring"
              >
                Share your story
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Graduation photography, captioned */}
      <section className="border-y border-border bg-white">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-20">
          <SectionHead
            index="01"
            title="Recognition day, in photos"
            lede="Certificates, handshakes and families watching. Drag through the ceremony."
          />
          <Reveal className="mt-12">
            <LazyGallery items={alumniCarousel} label="Graduation, outreach and ceremony photos" />
          </Reveal>
        </div>
      </section>

      {/* Pathways per trade, honest framing: these are the careers the trades lead to */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-20">
        <SectionHead
          index="02"
          title="Where each trade can take you"
          lede="The careers these programmes prepare you for, whether you join an employer or start out on your own. Talk to the college about how graduates are doing."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {trades.map((t, i) => (
            <Reveal key={t.slug} delay={(i % 3) * 90}>
              <article className="h-full border border-border bg-otc-paper p-6 transition-shadow hover:shadow-[0_18px_40px_-24px_rgba(10,8,104,0.35)]">
                <h3 className="font-display text-lg font-semibold tracking-tight text-otc-navy">
                  {t.name}
                </h3>
                <ul className="mt-4 space-y-2 text-[0.9rem] text-otc-ink/80">
                  {t.pathways.map((p) => (
                    <li key={p} className="flex items-start gap-2">
                      <span aria-hidden="true" className="mt-[0.55rem] h-1.5 w-1.5 shrink-0 rounded-full bg-otc-gold" />
                      {p}
                    </li>
                  ))}
                </ul>
                <p className="mt-4 text-[0.78rem] font-semibold uppercase tracking-[0.14em] text-otc-gold-deep">
                  {t.qualification}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Outreach and representation: alumni are ambassadors */}
      <section className="border-t border-border bg-white">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-20">
          <SectionHead
            index="03"
            title="Out in the region"
            lede="OTC people show up where the region meets the college: community demonstrations, expos and campus events."
          />
          <Reveal className="mt-12">
            <div className="grid gap-4 sm:grid-cols-3">
              {[
                { src: "/images/expo-indoor-01-c.webp", alt: "Visitors being welcomed at the OTC exhibition booth" },
                { src: "/images/expo-indoor-03-c.webp", alt: "The OTC stand at an indoor exhibition" },
                { src: "/images/signage-02-c.webp", alt: "The OTC banner pitched out in the field" },
              ].map((g) => (
                <Reveal key={g.src}>
                  <div className="img-frame relative aspect-[4/3]">
                    <Image src={g.src} alt={g.alt} fill sizes="(max-width: 640px) 100vw, 33vw" quality={55} className="object-cover" />
                  </div>
                </Reveal>
              ))}
            </div>
          </Reveal>
          <Reveal className="mt-10 flex flex-wrap gap-3">
            <Link prefetch={false}
              href="/admissions"
              className="press inline-flex min-h-[48px] items-center rounded-sm bg-otc-navy px-6 text-base font-semibold text-white transition-colors hover:bg-otc-navy-deep focus-visible-ring"
            >
              Become a graduate yourself
            </Link>
            <Link prefetch={false}
              href="/programmes"
              className="press inline-flex min-h-[48px] items-center rounded-sm border border-otc-navy/30 px-6 text-base font-semibold text-otc-navy transition-colors hover:bg-secondary focus-visible-ring"
            >
              Browse the trades
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
