import type { Metadata } from "next";
import Link from "next/link";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import PageHero from "@/components/site/page-hero";
import Reveal from "@/components/site/reveal";
import SectionHead from "@/components/site/section-head";
import TradeTile from "@/components/site/trade-tile";
import { trades, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Programmes: NVC Trades and Short Courses",
  description:
    "Seven full-time NVC trades: welding, joinery, bricklaying, electrical, auto mechanics, horticulture. Nine short courses each intake in Ongenga.",
  alternates: { canonical: "/programmes" },
};

const spans = [
  "lg:col-span-7", "lg:col-span-5",
  "lg:col-span-5", "lg:col-span-7",
  "lg:col-span-7", "lg:col-span-5",
];
const aspects = [
  "aspect-[16/10]", "aspect-[4/3]",
  "aspect-[4/3]", "aspect-[16/10]",
  "aspect-[16/10]", "aspect-[4/3]",
];

export default function ProgrammesPage() {
  return (
    <>
      <PageHero
        image="/images/workshop-03.webp"
        alt="An OTC electrical student testing a circuit during a practical assessment"
        caption="Electrical practical assessment, OTC"
        title="Learn the trades that build a country"
        lede="Seven full-time NVC trades, nine short courses, two or more intakes a year. Open any trade below for its qualification, career pathways and entry route."
      />

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:py-20">
        <Tabs defaultValue="nvc" className="w-full">
          <TabsList className="h-auto w-full justify-start gap-1 rounded-sm bg-otc-tint p-1 sm:w-auto">
            <TabsTrigger
              value="nvc"
              className="min-h-[44px] rounded-[2px] px-5 text-[0.95rem] font-semibold data-[state=active]:bg-otc-navy data-[state=active]:text-white"
            >
              Full-time NVC trades
            </TabsTrigger>
            <TabsTrigger
              value="short"
              className="min-h-[44px] rounded-[2px] px-5 text-[0.95rem] font-semibold data-[state=active]:bg-otc-navy data-[state=active]:text-white"
            >
              Short courses
            </TabsTrigger>
          </TabsList>

          <TabsContent value="nvc" className="mt-10">
            <div className="grid gap-x-8 gap-y-12 lg:grid-cols-12">
              {trades.map((t, i) => (
                <Reveal key={t.slug} delay={(i % 2) * 100} className={spans[i]}>
                  <TradeTile trade={t} aspect={aspects[i]} priority={i === 0} />
                </Reveal>
              ))}
            </div>
            <Reveal className="mt-10 border-l-2 border-otc-gold bg-otc-tint/60 px-5 py-4">
              <p className="text-[0.95rem] text-otc-ink/80">
                The college offers seven full-time NVC trades in total. The complete, current list is
                confirmed by admissions at every intake:{" "}
                <Link prefetch={false} href="/contact" className="font-medium text-otc-navy underline-offset-4 hover:underline">
                  ask the college
                </Link>
                .
              </p>
            </Reveal>
          </TabsContent>

          <TabsContent value="short" className="mt-10">
            <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
              <Reveal>
                <h2 className="display-2 text-otc-navy">Nine short courses, taught the same way</h2>
                <p className="lede mt-4">
                  Short courses run alongside the full-time trades: skills upgrading for people already
                  working, job-readiness for those starting out, and custom training for employers and
                  organisations. They carry the same practical, workshop-first approach as everything
                  else at OTC.
                </p>
                <p className="mt-4 max-w-xl text-[0.95rem] leading-relaxed text-otc-ink/75">
                  The short course line-up changes per intake. The admissions office keeps the current
                  schedule with dates and fees in Namibian dollars, and will tell you within one phone
                  call what is running next.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <a
                    href={`tel:${site.phoneHref}`}
                    className="inline-flex min-h-[44px] items-center rounded-sm bg-otc-navy px-5 text-sm font-semibold text-white transition-colors hover:bg-otc-navy-deep"
                  >
                    Phone {site.phoneDisplay}
                  </a>
                  <Link prefetch={false}
                    href="/contact"
                    className="inline-flex min-h-[44px] items-center rounded-sm border border-otc-navy/30 px-5 text-sm font-semibold text-otc-navy transition-colors hover:bg-secondary"
                  >
                    Request the schedule
                  </Link>
                </div>
              </Reveal>
              <Reveal delay={120}>
                <Accordion type="single" collapsible className="w-full">
                  {[
                    {
                      q: "Who are short courses for?",
                      a: "Working adults upgrading a skill, school leavers testing a trade, employers training a team, and community members picking up a practical skill without committing to a full-time programme.",
                    },
                    {
                      q: "How long is a short course?",
                      a: "It varies by course. Dates and durations are confirmed in the schedule the admissions office issues for each intake.",
                    },
                    {
                      q: "Do short courses carry a certificate?",
                      a: "Yes. Short courses are assessed and recognised by the college. Ask admissions which certificate applies to the course you want.",
                    },
                    {
                      q: "What do they cost?",
                      a: "Fees are set per course per intake and published in Namibian dollars by the college. Contact admissions for the current rates for the course you want.",
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
          </TabsContent>
        </Tabs>
      </section>

      {/* Employer note bridging to partners */}
      <section className="border-t border-border bg-white">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:py-20">
          <SectionHead
            index="02"
            title="Where these trades lead"
            lede="Every trade tile lists its career pathways. Employers, apprenticeships and the Bulawayo Polytechnic partnership sit on the partners page."
          />
          <Reveal className="mt-8">
            <Link prefetch={false}
              href="/partners"
              className="link-underline inline-flex items-center gap-2 text-[0.95rem] font-semibold text-otc-navy"
            >
              See partners and pathways
              <span aria-hidden="true">→</span>
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
