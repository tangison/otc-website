import { Reveal } from "@/components/reveal";
import { CTA } from "@/components/cta";
import {
  FULL_TIME_COURSES,
  SHORT_COURSES,
  INTAKE_FULL_TIME,
  INTAKE_SHORT,
} from "@/lib/otc";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Programs",
  description:
    "Full-time National Vocational Certificate programs (seven trades, two intakes per year) and short courses (nine programs, four intakes per year). Fees shown where published.",
  alternates: { canonical: "/programs" },
};

export default function ProgramsPage() {
  return (
    <>
      {/* Header */}
      <section className="pt-12 sm:pt-20 pb-12">
        <div className="mx-auto max-w-6xl px-4">
          <Reveal>
            <span className="tag">Programs</span>
          </Reveal>
          <div className="mt-6 grid gap-10 md:grid-cols-[1.4fr_0.6fr] md:items-end">
            <Reveal delay={0.05}>
              <h1 className="display-1 text-navy">
                Two pathways. <span className="text-gold italic font-500">One trade.</span>
              </h1>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="lead text-navy/80">
                Full-time National Vocational Certificate programs run two intakes a year across
                seven trades. Short courses run four times a year, full-time or part-time, with
                fees shown where confirmed.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Section anchor */}
      <section id="full-time" className="section-anchor py-12 sm:py-16 bg-paper grain">
        <div className="mx-auto max-w-6xl px-4">
          <div className="flex flex-wrap items-end justify-between gap-6 mb-10">
            <div>
              <Reveal>
                <span className="tag tag-gold-soft">Full-time · NVC</span>
              </Reveal>
              <Reveal delay={0.05}>
                <h2 className="display-2 text-navy mt-5">Full-time courses.</h2>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="lead mt-4">{INTAKE_FULL_TIME}.</p>
              </Reveal>
            </div>
            <Reveal delay={0.12}>
              <span className="mono text-[12px] uppercase tracking-[0.18em] text-navy/55">
                07 programs
              </span>
            </Reveal>
          </div>

          {/* Asymmetric bento for full-time courses */}
          <div className="grid gap-4 md:grid-cols-6">
            {FULL_TIME_COURSES.map((c, i) => {
              // Make the first card span 3 cols on md, the rest alternate 2/2/2 or 3/3.
              const layout =
                i === 0
                  ? "md:col-span-6"
                  : i % 3 === 1
                  ? "md:col-span-3"
                  : i % 3 === 2
                  ? "md:col-span-3"
                  : "md:col-span-2";
              return (
                <Reveal key={c.name} delay={i * 0.04} className={layout}>
                  <article className="group h-full rounded-2xl border border-navy/10 bg-white p-7 transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:-translate-y-1 hover:border-gold/40 hover:shadow-[0_22px_50px_-28px_rgba(1,0,127,0.4)]">
                    <div className="flex items-start justify-between gap-4">
                      <span className="mono text-[11px] text-navy/45">{String(i + 1).padStart(2, "0")}</span>
                      <span className="h-1.5 w-1.5 rounded-full bg-navy/15 group-hover:bg-gold transition-colors" />
                    </div>
                    <h3 className="mt-5 font-display text-[20px] font-700 text-navy leading-tight">{c.name}</h3>
                    <p className="mt-3 text-[14.5px] text-navy/65 leading-relaxed">{c.blurb}</p>
                    <div className="mt-6 flex items-center justify-between">
                      <span className="rounded-full bg-navy/5 px-3 py-1 text-[11px] font-600 uppercase tracking-wider text-navy/70">
                        NVC
                      </span>
                      <Link
                        href="/apply"
                        className="text-[13px] font-600 text-navy inline-flex items-center gap-1.5 hover:text-gold transition-colors"
                      >
                        Apply
                        <span aria-hidden>↗</span>
                      </Link>
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>

          <Reveal delay={0.1}>
            <div className="mt-10 rounded-2xl border border-navy/10 bg-white p-6 sm:p-7">
              <p className="text-[14px] text-navy/70 leading-relaxed">
                <strong className="text-navy font-700">Fees:</strong> Full-time NVC program fees are
                not yet published. Contact the Admissions Office at{" "}
                <Link href="/contact" className="link-reveal text-navy font-600">info@otc.nam.na</Link>{" "}
                for the current fee schedule before applying.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Short courses */}
      <section id="short" className="section-anchor py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-4">
          <div className="flex flex-wrap items-end justify-between gap-6 mb-10">
            <div>
              <Reveal><span className="tag tag-gold-soft">Short courses · 4 intakes/yr</span></Reveal>
              <Reveal delay={0.05}><h2 className="display-2 text-navy mt-5">Short courses.</h2></Reveal>
              <Reveal delay={0.1}><p className="lead mt-4">{INTAKE_SHORT}.</p></Reveal>
            </div>
            <Reveal delay={0.12}>
              <span className="mono text-[12px] uppercase tracking-[0.18em] text-navy/55">
                09 programs
              </span>
            </Reveal>
          </div>

          {/* Short courses table — navy CTA strip, asymmetric rows */}
          <div className="rounded-3xl border border-navy/10 overflow-hidden bg-white">
            <div className="hidden sm:grid grid-cols-[1fr_2fr_auto] gap-6 bg-navy text-white px-7 py-4 text-[12px] font-600 uppercase tracking-[0.16em]">
              <span>Course</span>
              <span>Description</span>
              <span className="text-right">Fee</span>
            </div>
            {SHORT_COURSES.map((c, i) => (
              <Reveal key={c.name} delay={i * 0.04}>
                <div
                  className={`grid gap-2 sm:grid-cols-[1fr_2fr_auto] sm:gap-6 px-6 sm:px-7 py-5 sm:py-6 items-baseline ${
                    i !== SHORT_COURSES.length - 1 ? "border-b border-navy/10" : ""
                  } hover:bg-paper transition-colors duration-300`}
                >
                  <div>
                    <span className="mono text-[10px] text-navy/40">{String(i + 1).padStart(2, "0")}</span>
                    <h3 className="font-display text-[16.5px] font-700 text-navy mt-1 leading-tight">{c.name}</h3>
                  </div>
                  <p className="text-[14px] text-navy/65 leading-relaxed">{c.note}</p>
                  <div className="sm:text-right">
                    {c.price ? (
                      <span className="mono text-[15px] font-600 text-navy bg-gold/15 rounded-full px-3 py-1.5 whitespace-nowrap">
                        {c.price}
                      </span>
                    ) : (
                      <span className="text-[12.5px] text-navy/50 italic">Confirm with Admissions</span>
                    )}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.1}>
            <p className="mt-6 text-[13px] text-navy/55 italic leading-relaxed max-w-2xl">
              Prices sourced from current public course listings. Confirm current fees with the
              Admissions Office before applying.
            </p>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy text-white py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid gap-8 md:grid-cols-[1.4fr_0.6fr] md:items-center">
            <Reveal>
              <h2 className="display-2">
                Pick your trade. <span className="text-gold italic">Start at the next intake.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="flex flex-wrap gap-3">
                <CTA href="/apply" variant="gold">Apply now</CTA>
                <CTA href="/contact" variant="outline" className="border-white/25 text-white hover:bg-white/5">Ask Admissions</CTA>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
