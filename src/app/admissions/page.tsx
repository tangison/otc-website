import type { Metadata } from "next";
import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import PageHero from "@/components/site/page-hero";
import Reveal from "@/components/site/reveal";
import SectionHead from "@/components/site/section-head";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Admissions and How to Apply",
  description:
    "How to apply to Ongenga Technical College: intake dates, entry requirements, documents to bring and fees. 2+ intakes a year in Ongenga, Ohangwena Region.",
  alternates: { canonical: "/admissions" },
};

const steps = [
  {
    n: "01",
    t: "Phone or visit the college",
    d: "Admissions will confirm which trades and short courses are open for the next intake, and answer questions on entry requirements. Call +264 81 294 6126 or come to the campus in Ongenga.",
  },
  {
    n: "02",
    t: "Confirm your programme",
    d: "Each NVC trade has its own entry requirements, set per programme. Admissions will check your school results and place you in the right trade or short course.",
  },
  {
    n: "03",
    t: "Bring your documents",
    d: "Certified ID or birth certificate, your latest school results, and passport photos. Admissions will give you the exact checklist for your programme when you first make contact.",
  },
  {
    n: "04",
    t: "Register and pay",
    d: "Once accepted, you complete registration at the campus and settle the fees for your intake. The college issues its fee schedule in Namibian dollars per intake.",
  },
  {
    n: "05",
    t: "Start training",
    d: "Day classes begin on the intake date. From your first week you are on the tools in workshops, not only in a classroom.",
  },
];

export default function AdmissionsPage() {
  return (
    <>
      <PageHero
        image="/images/hero-classroom.webp"
        alt="An instructor addressing trainees seated in the OTC lecture hall"
        caption="Admissions sessions run at the OTC campus"
        title="Apply to OTC"
        lede="Two or more intakes every year. The process is a phone call, a visit, and your documents: here is exactly how it works."
      />

      {/* Steps */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-24">
        <SectionHead index="01" title="Five steps to your first day" />
        <ol className="mt-12 space-y-0">
          {steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 60} as="li" className="relative border-t border-border py-7 last:border-b">
              <div className="grid gap-3 sm:grid-cols-[90px_1fr] sm:gap-8">
                <p aria-hidden="true" className="font-display text-4xl font-medium italic text-otc-gold-deep">
                  {s.n}
                </p>
                <div>
                  <h3 className="font-display text-2xl font-semibold tracking-tight text-otc-navy">{s.t}</h3>
                  <p className="mt-2 max-w-2xl text-[0.95rem] leading-relaxed text-otc-ink/75">{s.d}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </ol>
        <Reveal className="mt-8 flex flex-wrap gap-3">
          <a
            href={`tel:${site.phoneHref}`}
            className="inline-flex min-h-[48px] items-center rounded-sm bg-otc-navy px-6 text-base font-semibold text-white transition-colors hover:bg-otc-navy-deep"
          >
            Phone {site.phoneDisplay}
          </a>
          <Link
            href="/contact"
            className="inline-flex min-h-[48px] items-center rounded-sm border border-otc-navy/30 px-6 text-base font-semibold text-otc-navy transition-colors hover:bg-secondary"
          >
            Send a message
          </Link>
        </Reveal>
      </section>

      {/* Questions */}
      <section className="border-y border-border bg-white">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <SectionHead
                index="02"
                title="Questions, answered straight"
                lede="Where this site does not have verified detail, it says so instead of guessing. The admissions office closes every gap on one call."
              />
              <Reveal className="mt-8">
                <div className="img-frame relative aspect-[4/3]">
                  <img
                    src="/images/hero-branded.webp"
                    alt="OTC trainees in branded college jackets during a session"
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                  <p className="caption-chip">OTC trainees on campus</p>
                </div>
              </Reveal>
            </div>
            <Reveal delay={100}>
              <Accordion type="single" collapsible className="w-full">
                {[
                  {
                    q: "What are the entry requirements?",
                    a: "Requirements are set per programme and confirmed by admissions. Generally your latest school results are needed to place you. Phone the college with your results at hand and they will tell you which trade you qualify for.",
                  },
                  {
                    q: "How much are the fees?",
                    a: "The college issues its fee schedule, in Namibian dollars (N$), for every intake: registration, tuition and examination components are confirmed by the administration. This site deliberately publishes no numbers it cannot stand behind.",
                  },
                  {
                    q: "Is accommodation available?",
                    a: "Ask admissions directly when you first make contact: they will confirm what is currently available around the Ongenga campus and what it costs.",
                  },
                  {
                    q: "When do intakes start?",
                    a: "OTC runs two or more intakes every year. The next intake date is confirmed by the admissions office when you enquire.",
                  },
                  {
                    q: "Can I study without a full-time commitment?",
                    a: "Yes. Nine short courses run alongside the full-time NVC trades, aimed at working adults, employers and anyone testing a trade. See the programmes page.",
                  },
                  {
                    q: "Is there an application form to download?",
                    a: "The application form is issued by the college at first contact or at the campus. The current version is confirmed with admissions: we do not host a stale PDF here.",
                  },
                ].map((f, i) => (
                  <AccordionItem key={i} value={`item-${i}`} className="border-border">
                    <AccordionTrigger className="text-left text-[1rem] font-semibold text-otc-navy hover:no-underline">
                      {f.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-[0.95rem] leading-relaxed text-otc-ink/75">
                      {f.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Visit strip */}
      <section className="bg-otc-navy-deep text-white">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1.2fr_0.8fr] lg:py-18">
          <Reveal>
            <h2 className="display-2 text-white">Come and see the workshops before you decide</h2>
            <p className="lede mt-4 max-w-xl text-white/75">
              The campus is in Ongenga, Ohangwena Region. Visit during the week, meet trainers, watch
              practicals in progress, then apply.
            </p>
          </Reveal>
          <Reveal delay={120} className="flex flex-wrap gap-3 lg:justify-end">
            <Link
              href="/contact"
              className="inline-flex min-h-[48px] items-center rounded-sm bg-otc-gold px-6 text-base font-semibold text-otc-ink transition-colors hover:bg-[#c09a15]"
            >
              Find the campus
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
