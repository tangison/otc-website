import { Reveal } from "@/components/reveal";
import { CTA } from "@/components/cta";
import { SITE, VALUES } from "@/lib/otc";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "Ongenga Technical College is a privately-owned Namibian TVET institution founded in October 2019, trading under Ethics Group Holdings (Pty) Ltd. Vision, mission, values, and founding story.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <section className="pt-12 sm:pt-20 pb-12">
        <div className="mx-auto max-w-6xl px-4">
          <Reveal>
            <span className="tag">About the college</span>
          </Reveal>
          <div className="mt-6 grid gap-10 md:grid-cols-[1.4fr_0.6fr] md:items-end">
            <Reveal delay={0.05}>
              <h1 className="display-1 text-navy">
                A young Namibian <span className="text-gold italic font-500">institution</span> building trades from the ground up.
              </h1>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="lead text-navy/80">
                Founded in October 2019 by a young Namibian entrepreneur, OTC has grown into a seven-trade
                TVET institution serving the Ohangwena region and beyond — aligned to Harambee Prosperity
                Plan I & II, Vision 2030, and the UN Sustainable Development Goals.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Mission + Vision editorial split */}
      <section className="py-16 sm:py-24 bg-paper grain">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid gap-6 md:grid-cols-2">
            <Reveal>
              <article className="bezel h-full">
                <div className="bezel-inner h-full p-8 sm:p-10">
                  <span className="tag tag-gold-soft">Our vision</span>
                  <p className="display-3 text-navy mt-6 leading-tight">
                    To be Namibia's best and preferred technical training institution.
                  </p>
                </div>
              </article>
            </Reveal>

            <Reveal delay={0.08}>
              <article className="bezel h-full">
                <div className="bezel-inner h-full p-8 sm:p-10 bg-navy text-white">
                  <span className="tag tag-gold-soft">Our mission</span>
                  <p className="display-3 mt-6 leading-tight">
                    To nurture the masters of value addition that will harness community development,
                    enhance employability, entrepreneurship and innovation.
                  </p>
                </div>
              </article>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Founding story + parent company */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid gap-12 md:grid-cols-[0.85fr_1.15fr] md:gap-16 md:items-start">
            <Reveal>
              <div className="md:sticky md:top-32">
                <span className="tag">Founding story</span>
                <h2 className="display-2 text-navy mt-5">From a profile to a campus.</h2>
                <p className="mt-5 text-[15px] text-navy/70 leading-relaxed">
                  Established by a young Namibian entrepreneur, OTC trades under its mother company
                  Ethics Group Holdings (Pty) Ltd. The college began with the goal of providing
                  technical vocational education and training to every able-bodied Namibian from
                  all walks of life.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="max-w-prose space-y-6 text-[17px] leading-relaxed text-navy/85">
                <p>
                  Ongenga Technical College (OTC) is a privately conceived Technical Vocational
                  Education and Training Institution, established by a young Namibian entrepreneur,
                  trading under its mother company Ethics Group Holdings (Pty) Ltd.
                </p>
                <p>
                  OTC aims to provide technical vocational education and training to every
                  able-bodied Namibian from all walks of life, empowering them with the skills and
                  knowledge that drive industrialization and socio-economic development.
                </p>
                <p>
                  Its programs are aligned with Namibia's National Development Plans, the Harambee
                  Prosperity Plan I & II, Vision 2030, and the UN Sustainable Development Goals.
                </p>

                <div className="mt-10 border-t border-navy/10 pt-6">
                  <span className="tag tag-gold-soft">Parent company</span>
                  <h3 className="mt-4 font-display text-2xl font-700 text-navy">{SITE.parentCompany}</h3>
                  <p className="mt-3 text-[15px] text-navy/70 leading-relaxed">
                    OTC operates as the technical-training arm of Ethics Group Holdings (Pty) Ltd,
                    which owns the Ongenga Industrial Park site at Omafo where the college is based.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Values grid */}
      <section className="py-20 sm:py-28 bg-navy text-white">
        <div className="mx-auto max-w-6xl px-4">
          <div className="flex flex-wrap items-end justify-between gap-6 mb-14">
            <div className="max-w-xl">
              <Reveal><span className="tag tag-gold-soft">What we stand on</span></Reveal>
              <Reveal delay={0.05}><h2 className="display-2 mt-5">Four values, one program.</h2></Reveal>
            </div>
            <Reveal delay={0.1}>
              <p className="text-[15px] text-white/65 max-w-sm">
                Every course, every unit, and every partnership at OTC ladders up to one of these four values.
              </p>
            </Reveal>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {VALUES.map((v, i) => (
              <Reveal key={v.key} delay={i * 0.05}>
                <article className="h-full rounded-2xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 hover:border-gold/40 transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]">
                  <span className="mono text-[11px] text-gold">0{i + 1}</span>
                  <h3 className="mt-4 font-display text-[19px] font-700 leading-tight">{v.name}</h3>
                  <p className="mt-3 text-[14px] leading-relaxed text-white/70">{v.blurb}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Alignment strip */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4">
          <Reveal>
            <div className="flex flex-wrap items-center justify-between gap-6 rounded-2xl border border-navy/10 bg-paper p-8 sm:p-10">
              <div>
                <span className="eyebrow text-navy/55">Aligned to</span>
                <p className="mt-2 font-display text-lg font-600 text-navy">
                  National Development Plans · Harambee Prosperity Plan I & II · Vision 2030 · UN SDGs
                </p>
              </div>
              <CTA href="/apply" variant="navy">Apply to OTC</CTA>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
