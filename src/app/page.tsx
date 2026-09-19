import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/reveal";
import { CTA } from "@/components/cta";
import {
  QUICK_FACTS,
  FULL_TIME_COURSES,
  SHORT_COURSES,
  SITE,
  INSTITUTIONAL_UNITS,
} from "@/lib/otc";
import { ArrowUpRight, MapPin, Phone, Mail, CalendarDays } from "lucide-react";

export const metadata = {
  title: "Ongenga Technical College, Nurturing the Masters of Value Addition",
  description:
    "A Namibian TVET institution in Ohangwena Region. National Vocational Certificate programs across seven trades, plus short courses from ICDL to millwright. Founded October 2019.",
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      {/* ============== HERO ============== */}
      <section aria-label="Ongenga Technical College introduction" className="relative pt-10 sm:pt-16 pb-10">
        <div className="mx-auto max-w-6xl px-4">
          {/* eyebrow row */}
          <Reveal>
            <div className="flex items-center justify-between gap-4 flex-wrap">
              <span className="tag">
                <span className="h-1.5 w-1.5 rounded-full bg-otc-green" />
                Ohangwena Region · Namibia
              </span>
              <span className="mono text-[11px] uppercase tracking-[0.18em] text-navy/55">
                Est. October 2019
              </span>
            </div>
          </Reveal>

          {/* Editorial split: massive headline + photo card */}
          <div className="mt-10 grid items-end gap-10 md:grid-cols-[1.15fr_0.85fr] md:gap-6">
            <div>
              <Reveal delay={0.05}>
                <h1 className="display-1 text-navy">
                  Nurturing the
                  <br />
                  <span className="relative inline-block">
                    <span className="text-gold italic font-500">masters</span>
                    <svg
                      aria-hidden
                      viewBox="0 0 320 18"
                      className="absolute left-0 -bottom-2 w-full h-3 text-gold"
                      preserveAspectRatio="none"
                    >
                      <path
                        d="M2 12 C 80 4, 240 4, 318 10"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                      />
                    </svg>
                  </span>{" "}
                  of value addition.
                </h1>
              </Reveal>

              <Reveal delay={0.15}>
                <p className="lead mt-8 max-w-xl">
                  Ongenga Technical College (OTC) is a privately-owned Namibian TVET institution,
                  trading under Ethics Group Holdings (Pty) Ltd. We train every able-bodied Namibian
                  across seven full-time trades and a growing portfolio of short courses, aligned to
                  Namibia's National Development Plans, Harambee Prosperity Plan I & II, and Vision 2030.
                </p>
              </Reveal>

              <Reveal delay={0.25}>
                <div className="mt-9 flex flex-wrap items-center gap-3">
                  <CTA href="/apply" variant="navy">Apply to OTC</CTA>
                  <CTA href="/programs" variant="outline">View programs</CTA>
                </div>
              </Reveal>
            </div>

            {/* Photo card */}
            <Reveal delay={0.2}>
              <figure className="bezel bezel-navy">
                <div className="bezel-inner">
                  <div className="relative aspect-[4/5] w-full">
                    <Image
                      src="/images/otc-student-classroom.png"
                      alt="OTC trainee in an orange hardhat and blue coveralls writing in a workbook"
                      fill
                      priority
                      sizes="(min-width: 768px) 480px, 100vw"
                      className="object-cover"
                    />
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy/85 via-navy/30 to-transparent p-5 pt-20">
                      <figcaption className="text-[12px] font-500 uppercase tracking-[0.18em] text-gold">
                        Full-time trainee
                      </figcaption>
                      <p className="mt-1 text-[13.5px] text-white/85">
                        National Vocational Certificate programs, 2 intakes a year.
                      </p>
                    </div>
                  </div>
                </div>
              </figure>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============== QUICK FACTS ============== */}
      <section aria-label="Quick facts" className="py-12 sm:py-16 bg-paper grain">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid gap-px overflow-hidden rounded-2xl border border-navy/10 bg-navy/10 sm:grid-cols-2 lg:grid-cols-4">
            {QUICK_FACTS.map((f, i) => (
              <Reveal key={f.label} delay={i * 0.05}>
                <div className="bg-white h-full p-6 sm:p-7 flex flex-col gap-2">
                  <span className="font-display text-5xl font-700 text-navy tracking-tight">{f.value}</span>
                  <span className="text-[15px] font-600 text-navy leading-tight">{f.label}</span>
                  <span className="text-[12.5px] text-navy/55 leading-snug">{f.sub}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============== MARQUEE STRIP ============== */}
      <section aria-hidden className="navy-texture text-white py-4 overflow-hidden">
        <div className="marquee">
          <div className="marquee-track">
            {[0, 1].map((dup) => (
              <span key={dup} className="flex gap-12 px-6 items-center">
                {FULL_TIME_COURSES.map((c) => (
                  <span key={c.name + dup} className="flex items-center gap-3 text-sm font-500 uppercase tracking-[0.16em]">
                    <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                    {c.name}
                  </span>
                ))}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ============== TWO-PATH PROGRAMS ============== */}
      <section aria-label="Training pathways" className="py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-4">
          <div className="flex flex-wrap items-end justify-between gap-6 mb-12">
            <div className="max-w-2xl">
              <Reveal>
                <span className="tag tag-gold-soft">Two training pathways</span>
              </Reveal>
              <Reveal delay={0.05}>
                <h2 className="display-2 text-navy mt-5">
                  Pick a path. Build a trade.
                </h2>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="lead mt-5">
                  Full-time National Vocational Certificate programs run on a two-intake academic year.
                  Short courses run four times a year, full-time or part-time, with fees where published.
                </p>
              </Reveal>
            </div>
            <Reveal delay={0.15}>
              <CTA href="/programs" variant="outline">All programs</CTA>
            </Reveal>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {/* Full-time card */}
            <Reveal>
              <Link href="/programs" className="group block">
                <article className="bezel h-full">
                  <div className="bezel-inner p-7 sm:p-9 h-full flex flex-col">
                    <div className="flex items-start justify-between gap-4 mb-6">
                      <span className="tag tag-gold-soft">Full-time · NVC</span>
                      <span className="mono text-[11px] text-navy/40">01</span>
                    </div>
                    <h3 className="display-3 text-navy">Full-time Courses</h3>
                    <p className="mt-4 text-[15px] text-navy/70 leading-relaxed">
                      Seven National Vocational Certificate trades, two intakes per year.
                      Aligned to the NQA framework and built for direct entry into industry or self-employment.
                    </p>
                    <ul className="mt-6 grid gap-1.5 text-[14px] text-navy/75">
                      {FULL_TIME_COURSES.slice(0, 5).map((c) => (
                        <li key={c.name} className="flex items-center gap-2.5">
                          <span className="h-1 w-1 rounded-full bg-gold" />
                          {c.name}
                        </li>
                      ))}
                      <li className="text-navy/45 italic">+ two more trades</li>
                    </ul>
                    <div className="mt-auto pt-6">
                      <span className="inline-flex items-center gap-2 text-[13px] font-600 text-navy">
                        See full list
                        <ArrowUpRight size={14} strokeWidth={1.8} className="transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1" />
                      </span>
                    </div>
                  </div>
                </article>
              </Link>
            </Reveal>

            {/* Short courses card */}
            <Reveal delay={0.08}>
              <Link href="/programs#short" className="group block">
                <article className="bezel h-full">
                  <div className="bezel-inner p-7 sm:p-9 h-full flex flex-col bg-navy text-white">
                    <div className="flex items-start justify-between gap-4 mb-6">
                      <span className="tag tag-gold-soft">Short · 4 intakes/yr</span>
                      <span className="mono text-[11px] text-white/40">02</span>
                    </div>
                    <h3 className="display-3">Short Courses</h3>
                    <p className="mt-4 text-[15px] text-white/75 leading-relaxed">
                      Nine short programs from ICDL to millwright. Four intakes per year, full-time or
                      part-time. Pricing shown where published; confirm current fees with Admissions.
                    </p>
                    <ul className="mt-6 grid gap-2 text-[14px] text-white/85">
                      <li className="flex items-center justify-between border-b border-white/10 pb-2">
                        <span>Agriculture (incl. poultry)</span>
                        <span className="mono text-gold">N$3,000</span>
                      </li>
                      <li className="flex items-center justify-between border-b border-white/10 pb-2">
                        <span>Upholstery Making & Production</span>
                        <span className="mono text-gold">N$3,000</span>
                      </li>
                      <li className="flex items-center justify-between border-b border-white/10 pb-2">
                        <span>ICDL</span>
                        <span className="mono text-gold">N$1,500</span>
                      </li>
                      <li className="flex items-center justify-between border-b border-white/10 pb-2">
                        <span>Millwright</span>
                        <span className="mono text-gold">N$3,000</span>
                      </li>
                      <li className="text-white/55 italic">+ five more short courses</li>
                    </ul>
                    <div className="mt-auto pt-6">
                      <span className="inline-flex items-center gap-2 text-[13px] font-600 text-gold">
                        View all short courses
                        <ArrowUpRight size={14} strokeWidth={1.8} className="transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1" />
                      </span>
                    </div>
                  </div>
                </article>
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============== HORTICULTURE FEATURE ============== */}
      <section aria-label="Horticulture program feature" className="bg-paper grain py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid gap-10 md:grid-cols-[1.1fr_0.9fr] md:items-center md:gap-16">
            <Reveal>
              <figure className="bezel">
                <div className="bezel-inner">
                  <div className="relative aspect-[16/11]">
                    <Image
                      src="/images/otc-student-horticulture.png"
                      alt="OTC trainee in blue coveralls working in a garden with a wheelbarrow"
                      fill
                      sizes="(min-width: 768px) 640px, 100vw"
                      className="object-cover"
                    />
                  </div>
                </div>
              </figure>
            </Reveal>

            <div>
              <Reveal>
                <span className="tag tag-green">
                  <span className="h-1.5 w-1.5 rounded-full bg-otc-green" />
                  Horticulture & Crop Husbandry
                </span>
              </Reveal>
              <Reveal delay={0.05}>
                <h2 className="display-3 text-navy mt-5">
                  Soil, propagation, and crop care, grounded in Namibian conditions.
                </h2>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="mt-5 text-[16px] text-navy/75 leading-relaxed">
                  Horticulture runs both as a full-time NVC trade and as part of the work at
                  Sem Hasheela Agricultural Campus, where apiculture, mushroom production,
                  and food processing sit alongside the college's main horticulture program.
                </p>
              </Reveal>
              <Reveal delay={0.15}>
                <div className="mt-8 flex flex-wrap gap-3">
                  <CTA href="/units#hasheela" variant="outline">Sem Hasheela campus</CTA>
                  <CTA href="/programs" variant="navy">Program details</CTA>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ============== INSTITUTIONAL UNITS ============== */}
      <section aria-label="Institutional units" className="py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-4">
          <div className="flex flex-wrap items-end justify-between gap-6 mb-12">
            <div className="max-w-2xl">
              <Reveal><span className="tag">Beyond the trades</span></Reveal>
              <Reveal delay={0.05}><h2 className="display-2 text-navy mt-5">Four units, one institution.</h2></Reveal>
            </div>
            <Reveal delay={0.1}><CTA href="/units" variant="outline">All units</CTA></Reveal>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {INSTITUTIONAL_UNITS.map((u, i) => (
              <Reveal key={u.key} delay={i * 0.06}>
                <Link href={`/units#${u.key}`} className="group block h-full">
                  <article className="h-full rounded-2xl border border-navy/10 bg-white p-6 transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:-translate-y-1 hover:border-gold/40 hover:shadow-[0_22px_50px_-28px_rgba(1,0,127,0.4)]">
                    <div className="flex items-center justify-between">
                      <span className={`mono text-[11px] font-600 ${u.accent === "green" ? "text-otc-green" : u.accent === "gold" ? "text-gold" : "text-navy"}`}>
                        0{i + 1}
                      </span>
                      <span className="h-1.5 w-1.5 rounded-full bg-navy/20 group-hover:bg-gold transition-colors" />
                    </div>
                    <h3 className="mt-4 font-display text-[18px] font-700 text-navy leading-tight">{u.short}</h3>
                    <p className="mt-3 text-[13.5px] text-navy/65 leading-snug line-clamp-4">{u.blurb}</p>
                  </article>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============== APPLY CTA ============== */}
      <section aria-label="Apply to OTC" className="navy-texture text-white py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid gap-12 md:grid-cols-[1.2fr_0.8fr] md:items-end">
            <div>
              <Reveal><span className="tag tag-gold">Admissions open</span></Reveal>
              <Reveal delay={0.05}>
                <h2 className="display-2 mt-6">
                  Build a trade.
                  <br />
                  Build a livelihood.
                </h2>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="lead mt-6 text-white/80 max-w-xl">
                  Applications open across both intakes. Email a completed form to {SITE.email} or
                  hand-deliver to {SITE.address.line1}.
                </p>
              </Reveal>
            </div>

            <Reveal delay={0.15}>
              <div className="grid gap-3 text-sm">
                <div className="flex items-center gap-3 text-white/85">
                  <span className="grid h-9 w-9 place-items-center rounded-full border border-gold/40 bg-gold/10"><CalendarDays size={15} strokeWidth={1.5} className="text-gold" /></span>
                  2 intakes/yr full-time · 4 intakes/yr short courses
                </div>
                <div className="flex items-center gap-3 text-white/85">
                  <span className="grid h-9 w-9 place-items-center rounded-full border border-gold/40 bg-gold/10"><Phone size={15} strokeWidth={1.5} className="text-gold" /></span>
                  <a href={`tel:${SITE.phoneHref}`} className="hover:text-white transition">{SITE.phone}</a>
                </div>
                <div className="flex items-center gap-3 text-white/85">
                  <span className="grid h-9 w-9 place-items-center rounded-full border border-gold/40 bg-gold/10"><Mail size={15} strokeWidth={1.5} className="text-gold" /></span>
                  <a href={`mailto:${SITE.email}`} className="hover:text-white transition">{SITE.email}</a>
                </div>
                <div className="flex items-center gap-3 text-white/85">
                  <span className="grid h-9 w-9 place-items-center rounded-full border border-gold/40 bg-gold/10"><MapPin size={15} strokeWidth={1.5} className="text-gold" /></span>
                  {SITE.address.line1}, {SITE.address.line3}
                </div>
                <div className="mt-3">
                  <CTA href="/apply" variant="gold">Apply now</CTA>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
