import { Reveal } from "@/components/reveal";
import { CTA } from "@/components/cta";
import { APPLICATION_STEPS, SITE, INTAKE_FULL_TIME, INTAKE_SHORT } from "@/lib/otc";
import type { Metadata } from "next";
import Link from "next/link";
import { Mail, Phone, MapPin, FileText, Info } from "lucide-react";

export const metadata: Metadata = {
  title: "Admissions",
  description:
    "How to apply to Ongenga Technical College, intake schedule, entry requirements, and how to submit your application. Two intakes per year for full-time, four intakes per year for short courses.",
  alternates: { canonical: "/apply" },
};

export default function ApplyPage() {
  return (
    <>
      <section className="pt-12 sm:pt-20 pb-12">
        <div className="mx-auto max-w-6xl px-4">
          <Reveal><span className="tag tag-gold-soft">Admissions</span></Reveal>
          <div className="mt-6 grid gap-10 md:grid-cols-[1.4fr_0.6fr] md:items-end">
            <Reveal delay={0.05}>
              <h1 className="display-1 text-navy">
                Apply to <span className="text-gold italic font-500">OTC.</span>
              </h1>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="lead text-navy/80">
                Two intakes per year for full-time NVC programs. Four intakes per year for short
                courses. Email a completed application form to info@otc.nam.na or hand-deliver to
                Ongenga Industrial Park, Omafo.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Intake schedule, two cards */}
      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid gap-6 md:grid-cols-2">
            <Reveal>
              <article className="bezel h-full">
                <div className="bezel-inner p-7 sm:p-8 h-full">
                  <span className="tag tag-gold-soft">Full-time NVC</span>
                  <h2 className="display-3 text-navy mt-5">Two intakes per year</h2>
                  <p className="mt-4 text-[15px] text-navy/70 leading-relaxed">
                    {INTAKE_FULL_TIME}. Confirms next intake window with Admissions before each
                    cycle opens.
                  </p>
                </div>
              </article>
            </Reveal>
            <Reveal delay={0.08}>
              <article className="bezel h-full">
                <div className="bezel-inner p-7 sm:p-8 h-full bg-navy text-white">
                  <span className="tag tag-gold-soft">Short courses</span>
                  <h2 className="display-3 mt-5">Four intakes per year</h2>
                  <p className="mt-4 text-[15px] text-white/75 leading-relaxed">
                    {INTAKE_SHORT}. More flexible cycle for working applicants and shorter training blocks.
                  </p>
                </div>
              </article>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Application steps */}
      <section className="py-12 sm:py-20 bg-paper grain">
        <div className="mx-auto max-w-6xl px-4">
          <Reveal>
            <span className="tag">How to apply</span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="display-2 text-navy mt-5 max-w-2xl">Four steps, one application.</h2>
          </Reveal>

          <div className="mt-12 grid gap-4 sm:gap-5 md:grid-cols-2 lg:grid-cols-4">
            {APPLICATION_STEPS.map((s, i) => (
              <Reveal key={s.step} delay={i * 0.07}>
                <article className="h-full rounded-2xl border border-navy/10 bg-white p-6 sm:p-7 transition-all duration-500 hover:border-gold/40 hover:-translate-y-1">
                  <div className="flex items-baseline gap-3 mb-4">
                    <span className="font-display text-5xl font-700 text-gold leading-none">{s.step}</span>
                    <span className="mono text-[10px] text-navy/40 uppercase tracking-widest">step</span>
                  </div>
                  <h3 className="font-display text-[17px] font-700 text-navy leading-tight">{s.title}</h3>
                  <p className="mt-3 text-[14px] text-navy/70 leading-relaxed">{s.blurb}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Application form placeholder + entry requirements */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid gap-6 md:grid-cols-2">
            {/* Form placeholder */}
            <Reveal>
              <article className="bezel h-full">
                <div className="bezel-inner h-full p-7 sm:p-9 flex flex-col">
                  <div className="flex items-center gap-3">
                    <span className="grid h-10 w-10 place-items-center rounded-full bg-gold/15 text-gold">
                      <FileText size={16} strokeWidth={1.6} />
                    </span>
                    <span className="tag tag-gold-soft">Application form</span>
                  </div>
                  <h3 className="mt-5 font-display text-xl font-700 text-navy">Downloadable form coming soon.</h3>
                  <p className="mt-3 text-[15px] text-navy/70 leading-relaxed">
                    A downloadable application PDF is being prepared for the site. In the meantime,
                    request a form by email and the Admissions Office will share the current version.
                  </p>
                  <div className="mt-auto pt-6 flex flex-wrap gap-2">
                    <a
                      href={`mailto:${SITE.email}?subject=Application form request, Ongenga Technical College`}
                      className="inline-flex items-center gap-2 rounded-full bg-navy px-4 py-2.5 text-[13px] font-600 text-white hover:bg-navy-700 transition-colors"
                    >
                      <Mail size={13} strokeWidth={1.6} />
                      Request form
                    </a>
                    <a
                      href={`tel:${SITE.phoneHref}`}
                      className="inline-flex items-center gap-2 rounded-full border border-navy/15 px-4 py-2.5 text-[13px] font-600 text-navy hover:bg-navy/5 transition-colors"
                    >
                      <Phone size={13} strokeWidth={1.6} />
                      {SITE.phone}
                    </a>
                  </div>
                </div>
              </article>
            </Reveal>

            {/* Entry requirements */}
            <Reveal delay={0.08}>
              <article className="bezel h-full">
                <div className="bezel-inner h-full p-7 sm:p-9 bg-navy text-white flex flex-col">
                  <div className="flex items-center gap-3">
                    <span className="grid h-10 w-10 place-items-center rounded-full bg-gold/15 text-gold">
                      <Info size={16} strokeWidth={1.6} />
                    </span>
                    <span className="tag tag-gold-soft">Entry requirements</span>
                  </div>
                  <h3 className="mt-5 font-display text-xl font-700">Confirm with Admissions before applying.</h3>
                  <ul className="mt-5 space-y-3 text-[15px] text-white/80 leading-relaxed">
                    <li className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-gold shrink-0" />
                      Full-time NVC programs typically require a Grade 10 or Grade 12 certificate, subject to the program.
                    </li>
                    <li className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-gold shrink-0" />
                      Short courses have program-specific minimums. Ask Admissions for the current sheet.
                    </li>
                    <li className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-gold shrink-0" />
                      Full-time program fees are not yet published; request the current fee schedule before applying.
                    </li>
                  </ul>
                </div>
              </article>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Where to reach admissions */}
      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-6xl px-4">
          <Reveal>
            <div className="rounded-3xl border border-navy/10 bg-white p-7 sm:p-10">
              <span className="tag">Where to reach Admissions</span>
              <div className="mt-6 grid gap-5 sm:grid-cols-3">
                <a
                  href={`mailto:${SITE.email}`}
                  className="group flex items-start gap-4 rounded-2xl border border-navy/10 p-5 hover:border-gold/40 transition-colors"
                >
                  <span className="grid h-10 w-10 place-items-center rounded-full bg-navy text-gold shrink-0">
                    <Mail size={15} strokeWidth={1.6} />
                  </span>
                  <span className="flex flex-col">
                    <span className="eyebrow text-navy/55">Email</span>
                    <span className="mt-1 text-[15px] font-600 text-navy group-hover:text-gold transition-colors">{SITE.email}</span>
                  </span>
                </a>
                <a
                  href={`tel:${SITE.phoneHref}`}
                  className="group flex items-start gap-4 rounded-2xl border border-navy/10 p-5 hover:border-gold/40 transition-colors"
                >
                  <span className="grid h-10 w-10 place-items-center rounded-full bg-navy text-gold shrink-0">
                    <Phone size={15} strokeWidth={1.6} />
                  </span>
                  <span className="flex flex-col">
                    <span className="eyebrow text-navy/55">Phone</span>
                    <span className="mt-1 text-[15px] font-600 text-navy group-hover:text-gold transition-colors">{SITE.phone}</span>
                  </span>
                </a>
                <div className="flex items-start gap-4 rounded-2xl border border-navy/10 p-5">
                  <span className="grid h-10 w-10 place-items-center rounded-full bg-navy text-gold shrink-0">
                    <MapPin size={15} strokeWidth={1.6} />
                  </span>
                  <span className="flex flex-col">
                    <span className="eyebrow text-navy/55">In person</span>
                    <span className="mt-1 text-[14.5px] font-600 text-navy leading-snug">
                      {SITE.address.line1}, {SITE.address.line3}
                    </span>
                  </span>
                </div>
              </div>
              <div className="mt-6">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 text-[14px] font-600 text-navy hover:text-gold transition-colors"
                >
                  Full contact page
                  <span aria-hidden>↗</span>
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="navy-texture text-white py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 flex flex-wrap items-center justify-between gap-6">
          <Reveal>
            <p className="font-display text-2xl font-700 max-w-xl">
              Ready to start? Email Admissions today.
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <CTA href={`mailto:${SITE.email}`} variant="gold">Email Admissions</CTA>
          </Reveal>
        </div>
      </section>
    </>
  );
}
