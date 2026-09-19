import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/site/page-hero";
import { SectionHeading } from "@/components/site/section-heading";
import { Reveal } from "@/components/site/reveal";
import { ProgramExplorer } from "@/components/site/program-explorer";
import { DISCIPLINES } from "@/lib/courses";

export const metadata: Metadata = {
  title: "Programs",
  description:
    "Seven full-time NVC trades and nine short courses: welding, joinery, bricklaying, electrical, retail, entrepreneurship, horticulture, ICDL, millwright and more.",
  alternates: { canonical: "/programs" },
};

export default function ProgramsPage() {
  return (
    <>
      <PageHero
        image="/images/hero-welding.webp"
        alt="A welder at work in a professional workshop, sparks at the steel"
        title="Learn the trades that build a country"
        lead="Tap any course for what it covers, its intakes and its fees."
        priority
      />

      {/* The explorer: tabs + image mosaic + detail dialogs */}
      <section className="mx-auto max-w-[1440px] px-5 py-16 md:px-10 md:py-24">
        <ProgramExplorer />
      </section>

      {/* Intake rhythm: two large numeric panels, no cards */}
      <section aria-labelledby="intakes-heading" className="bg-navy py-16 md:py-24">
        <div className="mx-auto grid max-w-[1440px] gap-10 px-5 md:grid-cols-2 md:gap-16 md:px-10">
          <Reveal>
            <p className="font-display text-7xl font-semibold tracking-tight text-gold md:text-8xl">
              2
            </p>
            <h3 className="mt-4 font-display text-2xl font-semibold tracking-tight text-white">
              Full-time intakes a year
            </h3>
            <p className="mt-2 max-w-[48ch] text-[15px] leading-relaxed text-white/75">
              National Vocational Certificate programmes, each open to full-time and
              part-time enrolment.
            </p>
          </Reveal>
          <Reveal delay={120}>
            <p className="font-display text-7xl font-semibold tracking-tight text-gold md:text-8xl">
              4
            </p>
            <h3 className="mt-4 font-display text-2xl font-semibold tracking-tight text-white">
              Short course intakes a year
            </h3>
            <p className="mt-2 max-w-[48ch] text-[15px] leading-relaxed text-white/75">
              Focused skills programmes, also open to full-time and part-time study.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Broader disciplines: horizontal scroll strip */}
      <section
        aria-labelledby="scope-heading"
        className="mx-auto max-w-[1440px] px-5 py-20 md:px-10 md:py-28"
      >
        <SectionHeading
          id="scope-heading"
          title="Built to grow into more"
          lead="Beyond the current timetable, OTC's institutional scope spans seven disciplines. These chart the college's direction; active courses are listed above."
        />
        <ul className="mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4 md:gap-5">
          {DISCIPLINES.map((d) => (
            <li key={d.name} className="w-64 shrink-0 snap-start md:w-72">
              <div className="group relative overflow-hidden rounded-2xl">
                <span className="block aspect-[3/4]">
                  <Image
                    src={d.image}
                    alt={d.alt}
                    fill
                    sizes="280px"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                  />
                </span>
                <span
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/20 to-transparent"
                />
                <span className="absolute inset-x-0 bottom-0 p-5 font-display text-lg font-semibold leading-snug tracking-tight text-white">
                  {d.name}
                </span>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
