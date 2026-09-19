import { Reveal } from "@/components/reveal";
import { CTA } from "@/components/cta";
import { INSTITUTIONAL_UNITS } from "@/lib/otc";
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Institutional Units",
  description:
    "Four units extend OTC beyond the trades: the Entrepreneurial Development Centre (EDC), OTC Boxing Club, Auxiliary Centre, and Sem Hasheela Agricultural Campus.",
  alternates: { canonical: "/units" },
};

const accentClasses: Record<string, { text: string; bg: string; border: string; tag: string }> = {
  gold: { text: "text-gold", bg: "bg-gold/15", border: "border-gold/40", tag: "tag-gold-soft" },
  navy: { text: "text-navy", bg: "bg-navy/10", border: "border-navy/25", tag: "tag" },
  green: { text: "text-otc-green", bg: "bg-otc-green/10", border: "border-otc-green/35", tag: "tag-green" },
};

export default function UnitsPage() {
  return (
    <>
      <section className="pt-12 sm:pt-20 pb-12">
        <div className="mx-auto max-w-6xl px-4">
          <Reveal><span className="tag">Institutional units</span></Reveal>
          <div className="mt-6 grid gap-10 md:grid-cols-[1.4fr_0.6fr] md:items-end">
            <Reveal delay={0.05}>
              <h1 className="display-1 text-navy">
                Four units, <span className="text-gold italic font-500">one institution.</span>
              </h1>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="lead text-navy/80">
                Beyond the trades, OTC runs an entrepreneurship centre, an adopted sports code,
                an auxiliary campus-services shop, and an agricultural incubation campus.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Unit detail, Z-axis cascade with alternating asymmetric splits */}
      <section className="py-12 sm:py-16 space-y-16 sm:space-y-24">
        {INSTITUTIONAL_UNITS.map((u, i) => {
          const a = accentClasses[u.accent];
          const reversed = i % 2 === 1;
          return (
            <div key={u.key} id={u.key} className="section-anchor mx-auto max-w-6xl px-4">
              <Reveal>
                <div className={`grid gap-8 md:grid-cols-2 md:items-center ${reversed ? "md:[&>*:first-child]:order-2" : ""}`}>
                  {/* Visual block, Z-axis layered */}
                  <div className="relative h-[320px] sm:h-[420px] md:h-[460px]">
                    {/* Background card */}
                    <div
                      className={`absolute top-6 ${reversed ? "right-0" : "left-0"} h-[280px] sm:h-[380px] md:h-[420px] w-[78%] rounded-3xl ${a.bg} border ${a.border}`}
                      style={{ transform: `${reversed ? "rotate(2deg)" : "rotate(-2deg)"}` }}
                      aria-hidden
                    />
                    {/* Foreground card */}
                    <div
                      className={`absolute bottom-0 ${reversed ? "left-0" : "right-0"} h-[280px] sm:h-[380px] md:h-[420px] w-[78%] rounded-3xl bg-navy border border-white/10 overflow-hidden shadow-[0_30px_60px_-30px_rgba(1,0,127,0.45)]`}
                      style={{ transform: `${reversed ? "rotate(-3deg)" : "rotate(3deg)"}` }}
                    >
                      <div className="relative h-full w-full">
                        {u.key === "hasheela" ? (
                          <Image
                            src="/images/otc-student-horticulture.png"
                            alt="OTC trainee working in a garden at Sem Hasheela"
                            fill
                            sizes="(min-width: 768px) 460px, 80vw"
                            className="object-cover"
                          />
                        ) : (
                          <div className="relative h-full w-full flex flex-col justify-between p-7">
                            <span className={`mono text-[11px] uppercase tracking-[0.2em] ${a.text}`}>0{i + 1} / 04</span>
                            <div>
                              <h3 className="font-display text-3xl font-700 text-white leading-tight">{u.short}</h3>
                              <p className="mt-3 text-[13.5px] text-white/65 leading-relaxed">{u.tag}</p>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Text block */}
                  <div>
                    <div className="flex items-center gap-3 mb-5">
                      <span className={`tag ${a.tag}`}>{u.tag}</span>
                      <span className="mono text-[11px] text-navy/45">0{i + 1} / 04</span>
                    </div>
                    <h2 className="display-3 text-navy leading-tight">{u.name}</h2>
                    <p className="mt-5 text-[16px] text-navy/75 leading-relaxed">{u.blurb}</p>

                    {u.key === "boxing" && (
                      <p className="mt-4 text-[14px] text-navy/60 leading-relaxed">
                        Open to public participation and registration. Reach out via the Contact page
                        to register or to ask about training schedules.
                      </p>
                    )}
                    {u.key === "auxiliary" && (
                      <p className="mt-4 text-[14px] text-navy/60 leading-relaxed">
                        The Auxiliary Centre is open during campus hours for trainees, alumni, and
                        visitors to Ongenga Industrial Park.
                      </p>
                    )}
                    {u.key === "edc" && (
                      <p className="mt-4 text-[14px] text-navy/60 leading-relaxed">
                        The EDC accepts applications from trainees, students, and the wider public.
                      </p>
                    )}
                    {u.key === "hasheela" && (
                      <p className="mt-4 text-[14px] text-navy/60 leading-relaxed">
                        Programs at Sem Hasheela include apiculture (bee farming), crop and animal
                        husbandry, food processing, and mushroom production.
                      </p>
                    )}

                    <div className="mt-7">
                      <CTA href="/contact" variant="outline">Enquire</CTA>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          );
        })}
      </section>

      {/* Footer CTA */}
      <section className="navy-texture text-white py-16 sm:py-20 mt-12">
        <div className="mx-auto max-w-6xl px-4 flex flex-wrap items-center justify-between gap-6">
          <Reveal>
            <p className="font-display text-2xl font-700 max-w-xl">
              Want to work with one of these units?
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <CTA href="/contact" variant="gold">Get in touch</CTA>
          </Reveal>
        </div>
      </section>
    </>
  );
}
