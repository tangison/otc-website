import { Reveal } from "@/components/reveal";
import { CTA } from "@/components/cta";
import { PARTNERS } from "@/lib/otc";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Partners",
  description:
    "OTC's institutional partners: Bulawayo Polytechnic (Zimbabwe), Advanced Design Colleges (Zimbabwe), and CJC Agricultural College (Namibia).",
  alternates: { canonical: "/partners" },
};

export default function PartnersPage() {
  return (
    <>
      <section className="pt-12 sm:pt-20 pb-12">
        <div className="mx-auto max-w-6xl px-4">
          <Reveal><span className="tag">Partners & collaborations</span></Reveal>
          <div className="mt-6 grid gap-10 md:grid-cols-[1.4fr_0.6fr] md:items-end">
            <Reveal delay={0.05}>
              <h1 className="display-1 text-navy">
                Three partners, <span className="text-gold italic font-500">two countries.</span>
              </h1>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="lead text-navy/80">
                OTC's institutional partnerships support lecturer exchange, joint curriculum review,
                and agricultural-college collaboration across Namibia and Zimbabwe.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Partner cards — editorial 3-card grid with country tag */}
      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid gap-6 md:grid-cols-3">
            {PARTNERS.map((p, i) => (
              <Reveal key={p.key} delay={i * 0.08}>
                <article className="group h-full rounded-3xl border border-navy/10 bg-white p-7 sm:p-8 transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:-translate-y-1.5 hover:border-gold/40 hover:shadow-[0_30px_60px_-30px_rgba(1,0,127,0.45)]">
                  <div className="flex items-start justify-between gap-4 mb-6">
                    {/* Logo placeholder block — monogram for each partner */}
                    <div className="grid h-16 w-16 place-items-center rounded-2xl bg-navy text-gold font-display text-2xl font-700 ring-1 ring-gold/30">
                      {p.name.split(" ").map((w) => w[0]).slice(0, 2).join("")}
                    </div>
                    <span className="mono text-[11px] text-navy/45">0{i + 1} / 03</span>
                  </div>
                  <span className="tag tag-gold-soft">{p.location}</span>
                  <h2 className="mt-4 font-display text-2xl font-700 text-navy leading-tight">{p.name}</h2>
                  <p className="mt-4 text-[15px] text-navy/70 leading-relaxed">{p.blurb}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Sector bodies note */}
      <section className="py-12 sm:py-16 bg-paper grain">
        <div className="mx-auto max-w-6xl px-4">
          <Reveal>
            <div className="rounded-2xl border border-navy/10 bg-white p-7 sm:p-8">
              <span className="eyebrow text-navy/55">On sector branding</span>
              <p className="mt-3 text-[15px] text-navy/75 leading-relaxed max-w-3xl">
                OTC materials occasionally reference TVET+ / TVET Africa branding. These are sector
                bodies, not OTC's own logo, and are not presented here as OTC's own identity.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 flex flex-wrap items-center justify-between gap-6">
          <Reveal>
            <p className="font-display text-2xl font-700 text-navy max-w-xl">
              Interested in partnering with OTC?
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <CTA href="/contact" variant="navy">Reach out</CTA>
          </Reveal>
        </div>
      </section>
    </>
  );
}
