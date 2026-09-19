import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero, HeroCtas } from "@/components/site/page-hero";
import { SectionHeading } from "@/components/site/section-heading";
import { Reveal } from "@/components/site/reveal";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Ongenga Technical College | Nurturing the Masters of Value Addition",
  description:
    "TVET college in Omafo, Namibia: seven full-time NVC trades and nine short courses, from welding and joinery to horticulture and ICDL. Two intakes yearly, and four for short courses.",
  alternates: { canonical: "/" },
};

const FACTS = [
  { value: "2019", label: "College established" },
  { value: "7", label: "Full-time NVC trades" },
  { value: "9", label: "Short courses" },
  { value: "2+4", label: "Intakes every year" },
];

const TRADE_PREVIEW = [
  {
    name: "Welding & Metal Fabrication",
    image: "/images/course-welding-detail.webp",
    alt: "Welder in protective gear joining steel",
  },
  {
    name: "Joinery & Cabinet Making",
    image: "/images/course-joinery.webp",
    alt: "Carpenter smoothing timber in a workshop",
  },
  {
    name: "Bricklaying & Plastering",
    image: "/images/course-bricklaying.webp",
    alt: "Blocks and bricks on a construction site",
  },
  {
    name: "Electrical General",
    image: "/images/course-electrical.webp",
    alt: "Trainee wiring an electrical control panel",
  },
  {
    name: "Auto Mechanics",
    image: "/images/course-automech.webp",
    alt: "Mechanic working on a vehicle engine",
  },
  {
    name: "Horticulture & Crop Husbandry",
    image: "/images/course-horticulture.webp",
    alt: "Farmer tending rows of crops",
  },
];

const UNITS = [
  {
    name: "Entrepreneurial Development Centre",
    image: "/images/unit-edc.webp",
    alt: "Trader selling woven goods at a market",
  },
  {
    name: "OTC Boxing Club",
    image: "/images/unit-boxing.webp",
    alt: "Boxer in stance at training",
  },
  {
    name: "Auxiliary Centre",
    image: "/images/detail-tools.webp",
    alt: "Workshop tools arranged on shelves",
  },
  {
    name: "Sem Hasheela Agricultural Campus",
    image: "/images/course-mushroom.webp",
    alt: "Mushrooms growing on cultivation shelves",
  },
];

export default function HomePage() {
  return (
    <>
      <PageHero
        image="/images/detail-welding-sparks.webp"
        alt="A welding arc throws bright sparks inside a training workshop"
        title="Nurturing the Masters of Value Addition"
        lead="Technical and vocational training in Omafo, Ohangwena Region. Trades taught in real workshops, for real work."
        priority
        size="full"
      >
        <HeroCtas />
      </PageHero>

      {/* Quick facts: borderless, breathing, no cards */}
      <section aria-label="OTC at a glance" className="border-b border-border">
        <div className="mx-auto grid max-w-[1440px] grid-cols-2 gap-y-10 px-5 py-14 md:grid-cols-4 md:px-10 md:py-20">
          {FACTS.map((fact, i) => (
            <Reveal key={fact.label} delay={i * 80}>
              <div className="border-l-2 border-gold pl-5">
                <p className="font-display text-4xl font-semibold tracking-tight text-navy md:text-6xl">
                  {fact.value}
                </p>
                <p className="mt-2 text-sm font-medium text-muted-foreground md:text-base">
                  {fact.label}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Real training: authentic OTC photograph carries this section */}
      <section className="mx-auto max-w-[1440px] px-5 py-20 md:px-10 md:py-32">
        <div className="grid items-center gap-10 md:grid-cols-12 md:gap-16">
          <Reveal className="md:col-span-7">
            <figure>
              <div className="overflow-hidden rounded-3xl shadow-[0_32px_64px_-32px_rgba(1,0,127,0.4)]">
                <Image
                  src="/images/otc-classroom.webp"
                  alt="OTC trainee in an orange hard hat and blue coveralls writing in a workbook"
                  width={810}
                  height={500}
                  sizes="(min-width: 768px) 58vw, 92vw"
                  className="h-auto w-full object-cover"
                />
              </div>
              <figcaption className="mt-4 text-sm text-muted-foreground">
                An OTC trainee at work in the college workshop.
              </figcaption>
            </figure>
          </Reveal>
          <Reveal delay={120} className="md:col-span-5">
            <SectionHeading
              title="Training you can put your hands on"
              lead="Since 2019, OTC has taught the trades Namibia builds with: steel, timber, brick, wire and soil. Small classes, real workshop hours, instructors from the industry."
            />
            <ul className="mt-8 space-y-0 border-t border-border text-[15px]">
              {[
                "Aligned with Namibia's National Development Plans and Vision 2030",
                "Registered TVET provider under Ethics Group Holdings",
                "Full-time and part-time enrolment on every course",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 border-b border-border py-4"
                >
                  <span aria-hidden="true" className="mt-2 h-2 w-2 shrink-0 rounded-full bg-gold" />
                  <span className="text-foreground/85">{item}</span>
                </li>
              ))}
            </ul>
            <Link
              href="/about"
              className="press mt-8 inline-flex min-h-[48px] items-center gap-2 rounded-full bg-navy px-7 text-sm font-semibold text-white transition-colors hover:bg-navy-800"
            >
              The OTC story
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M5 12h14m-6-6 6 6-6 6" />
              </svg>
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Trade mosaic: varied spans, images first */}
      <section aria-labelledby="trades-heading" className="bg-navy py-20 md:py-32">
        <div className="mx-auto max-w-[1440px] px-5 md:px-10">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading
              id="trades-heading"
              light
              title="Seven trades. One standard."
              lead="Full-time National Vocational Certificate programmes, with part-time options."
            />
            <Link
              href="/programs"
              className="press inline-flex min-h-[48px] items-center rounded-full border border-white/40 px-7 text-sm font-semibold text-white transition-colors hover:border-gold hover:text-gold"
            >
              All programs
            </Link>
          </div>

          <ul className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-12 md:gap-5">
            {TRADE_PREVIEW.map((trade, i) => (
              <Reveal
                as="li"
                key={trade.name}
                delay={(i % 4) * 70}
                className={
                  i === 0
                    ? "col-span-2 md:col-span-6"
                    : i < 3
                      ? "col-span-1 md:col-span-3"
                      : "col-span-1 md:col-span-4"
                }
              >
                <Link
                  href="/programs"
                  className="group relative block overflow-hidden rounded-2xl"
                >
                  <span className={i === 0 ? "block aspect-[16/9] bg-navy/10" : "block aspect-[4/3] bg-navy/10"}>
                    <Image
                      src={trade.image}
                      alt={trade.alt}
                      fill
                      sizes="(min-width: 768px) 30vw, 46vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                    />
                  </span>
                  <span
                    aria-hidden="true"
                    className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/20 to-transparent"
                  />
                  <span className="absolute inset-x-0 bottom-0 p-4 font-display text-base font-semibold leading-snug tracking-tight text-white md:p-5 md:text-lg">
                    {trade.name}
                  </span>
                </Link>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* Units preview on paper */}
      <section aria-labelledby="units-heading" className="mx-auto max-w-[1440px] px-5 py-20 md:px-10 md:py-32">
        <SectionHeading
          id="units-heading"
          title="More than a college"
          lead="Four units extend OTC beyond the classroom, from business incubation to boxing."
        />
        <ul className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4 md:gap-5">
          {UNITS.map((unit, i) => (
            <Reveal as="li" key={unit.name} delay={i * 80}>
              <Link href="/units" className="group relative block overflow-hidden rounded-2xl">
                <span className="block aspect-[3/4] bg-navy/10">
                  <Image
                    src={unit.image}
                    alt={unit.alt}
                    fill
                    sizes="(min-width: 768px) 24vw, 92vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                  />
                </span>
                <span
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/25 to-transparent"
                />
                <span className="absolute inset-x-0 bottom-0 p-5 font-display text-lg font-semibold leading-snug tracking-tight text-white">
                  {unit.name}
                </span>
              </Link>
            </Reveal>
          ))}
        </ul>
      </section>

      {/* Closing CTA over imagery */}
      <section aria-labelledby="cta-heading" className="relative isolate overflow-hidden">
        <Image
          src="/images/hero-workshop.webp"
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-navy/70"
        />
        <div className="relative mx-auto max-w-[1440px] px-5 py-24 md:px-10 md:py-36">
          <Reveal>
            <h2
              id="cta-heading"
              className="max-w-3xl font-display text-4xl font-semibold leading-[1.03] tracking-[-0.02em] text-white md:text-6xl"
            >
              Your next intake is closer than you think
            </h2>
            <p className="mt-5 max-w-xl text-lg text-white/80">
              Talk to the college today, or come see the workshops at Ongenga
              Industrial Park.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                href="/admissions"
                className="press inline-flex min-h-[52px] items-center rounded-full bg-gold px-8 text-base font-semibold text-navy transition-colors hover:bg-gold-soft"
              >
                Apply to OTC
              </Link>
              <a
                href={SITE.phoneHref}
                className="press inline-flex min-h-[52px] items-center rounded-full border border-white/40 px-8 text-base font-medium text-white transition-colors hover:border-gold hover:text-gold"
              >
                Call {SITE.phone}
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
