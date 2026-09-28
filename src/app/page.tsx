import Link from "next/link";
import Image from "next/image";
import Reveal from "@/components/site/reveal";
import SectionHead from "@/components/site/section-head";
import HeroCarousel from "@/components/site/hero-carousel";
import LazyGallery from "@/components/site/lazy-gallery";
import TradeTile from "@/components/site/trade-tile";
import TradesTicker from "@/components/site/trades-ticker";
import NumberTicker from "@/components/site/number-ticker";
import Parallax from "@/components/site/parallax";
import { site, stats, trades, agriCarousel, heroSlides, partners } from "@/lib/site";

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

export default function HomePage() {
  return (
    <>
      {/* Hero: name, location and purpose stated plainly, per the site review */}
      <section className="border-b border-border bg-otc-paper">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 pb-12 pt-10 sm:px-6 lg:grid-cols-[1.08fr_0.92fr] lg:gap-16 lg:pb-20 lg:pt-16">
          <div>
            <span aria-hidden="true" className="rise block h-[3px] w-14 bg-otc-gold" style={{ "--rise-delay": "60ms" } as React.CSSProperties} />
            <h1 className="display-1 mt-5 text-otc-navy">
              <span className="rise block" style={{ "--rise-delay": "140ms" } as React.CSSProperties}>
                Build your future through
              </span>
              <span className="rise block" style={{ "--rise-delay": "260ms" } as React.CSSProperties}>
                practical technical skills
              </span>
            </h1>
            <p className="lede rise mt-6 max-w-xl" style={{ "--rise-delay": "400ms" } as React.CSSProperties}>
              <strong className="font-semibold text-otc-ink">Ongenga Technical College</strong> is
              located in Ongenga, Ohangwena Region, Namibia. We train seven full-time NVC trades and
              nine short courses in real workshops. Training you can put your hands on.
            </p>
            <div className="rise mt-8 flex flex-wrap gap-3" style={{ "--rise-delay": "520ms" } as React.CSSProperties}>
              <Link prefetch={false}
                href="/admissions"
                className="press inline-flex min-h-[48px] items-center rounded-sm bg-otc-navy px-6 text-base font-semibold text-white transition-colors hover:bg-otc-navy-deep focus-visible-ring"
              >
                Apply to OTC
              </Link>
              <Link prefetch={false}
                href="/programmes"
                className="press inline-flex min-h-[48px] items-center rounded-sm border border-otc-navy/30 px-6 text-base font-semibold text-otc-navy transition-colors hover:bg-secondary focus-visible-ring"
              >
                Explore programmes
              </Link>
            </div>
            <p className="rise mt-6 text-sm text-otc-ink/60" style={{ "--rise-delay": "620ms" } as React.CSSProperties}>
              Admissions open: 2+ intakes every year. Phone{" "}
              <a href={`tel:${site.phoneHref}`} className="font-medium text-otc-navy underline-offset-4 hover:underline">
                {site.phoneDisplay}
              </a>
            </p>
          </div>
          <Reveal delay={140}>
            <HeroCarousel slides={heroSlides} />
          </Reveal>
        </div>
      </section>

      {/* Trades ticker: the college's offer, always moving */}
      <TradesTicker />

      {/* Stats band */}
      <section aria-label="College at a glance" className="bg-otc-navy-deep text-white">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-y-10 px-4 py-12 sm:px-6 lg:grid-cols-4 lg:py-16">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 90} className="border-l border-white/15 pl-5 lg:pl-7">
              <p className="font-display text-4xl font-semibold tracking-tight text-otc-gold lg:text-5xl">
                <NumberTicker value={s.value} />
              </p>
              <p className="mt-2 text-sm text-white/75">{s.label}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Trades showcase: asymmetric grid, details behind dialogs */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-24">
        <SectionHead
          index="01"
          title="Seven trades. One standard."
          lede="Every programme is taught hands-on, in workshops, on real work. Open any trade for its qualification, career pathways and how to join."
        />
        <div className="mt-12 grid gap-x-8 gap-y-12 lg:grid-cols-12">
          {trades.map((t, i) => (
            <Reveal key={t.slug} delay={(i % 2) * 100} className={spans[i]}>
              <TradeTile trade={t} aspect={aspects[i]} />
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-10 border-l-2 border-otc-gold bg-otc-tint/60 px-5 py-4">
          <p className="text-[0.95rem] text-otc-ink/80">
            OTC offers <strong className="font-semibold text-otc-navy">seven full-time NVC trades</strong> in
            total and nine short courses. The current list is confirmed by admissions at every intake:{" "}
            <Link prefetch={false} href="/contact" className="font-medium text-otc-navy underline-offset-4 hover:underline">
              ask the college
            </Link>
            .
          </p>
        </Reveal>
      </section>

      {/* Credibility: accreditation, regional partnership, community */}
      <section className="border-y border-border bg-white">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-24">
          <SectionHead
            index="02"
            title="Recognised, connected, rooted here"
            lede="Credibility comes from evidence, not adjectives. Here is where OTC stands today."
          />
          <div className="mt-12 grid gap-10 lg:grid-cols-3">
            <Reveal>
              <div className="img-frame relative aspect-[4/3]">
                <Image
                  src="/images/classrooms-04-c.webp"
                  alt="An instructor addressing a seated training session in a full lecture hall"
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  quality={60}
                  className="object-cover"
                />
                <p className="caption-chip">Training session, OTC lecture hall</p>
              </div>
              <h3 className="display-3 mt-5 text-otc-navy">On the national TVET grid</h3>
              <p className="mt-2 text-[0.95rem] leading-relaxed text-otc-ink/75">
                OTC appears on the National TVET eLearning Portal run by the Namibia Training
                Authority. Registration and accreditation documents are available from the college
                administration on request.
              </p>
            </Reveal>
            <Reveal delay={100}>
              <div className="img-frame relative aspect-[4/3]">
                <Image
                  src="/images/expo-indoor-03-c.webp"
                  alt="The OTC exhibition booth under the college fascia sign at an indoor expo"
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="object-cover"
                />
                <p className="caption-chip">OTC exhibition booth, indoor expo</p>
              </div>
              <h3 className="display-3 mt-5 text-otc-navy">Partnered with Bulawayo Polytechnic</h3>
              <p className="mt-2 text-[0.95rem] leading-relaxed text-otc-ink/75">
                OTC signed a training partnership agreement with{" "}
                <strong className="font-semibold text-otc-ink">Bulawayo Polytechnic, Zimbabwe</strong>{" "}
                (est. {partners.zim.established}), covering academic exchange and joint training across
                the two institutions.
              </p>
            </Reveal>
            <Reveal delay={200}>
              <div className="img-frame relative aspect-[4/3]">
                <Image
                  src="/images/outreach-01-c.webp"
                  alt="OTC staff in hi-vis vests at an outreach stand with community members"
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="object-cover"
                />
                <p className="caption-chip">Community skills demonstration</p>
              </div>
              <h3 className="display-3 mt-5 text-otc-navy">Serving the Ohangwena Region</h3>
              <p className="mt-2 text-[0.95rem] leading-relaxed text-otc-ink/75">
                Skills demonstrations and outreach bring training to communities across the region,
                from school leavers to working adults upgrading their trade.
              </p>
            </Reveal>
          </div>
          <Reveal className="mt-10">
            <Link prefetch={false}
              href="/partners"
              className="link-underline inline-flex items-center gap-2 text-[0.95rem] font-semibold text-otc-navy focus-visible-ring"
            >
              See partnerships and employer pathways
              <span aria-hidden="true">→</span>
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Outcomes: graduation, real ceremony photography */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-24">
        <div className="grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
          <Reveal className="order-2 lg:order-1">
            <Parallax strength={14}>
              <div className="img-frame relative aspect-[4/5] sm:aspect-[4/3] lg:aspect-[4/5]">
                <Image
                  src="/images/graduation-04.webp"
                  alt="A graduating student receiving his certificate folder at the recognition ceremony"
                  fill
                  sizes="(max-width: 1024px) 100vw, 44vw"
                  quality={60}
                  className="object-cover"
                />
                <p className="caption-chip">Certificate handover, recognition ceremony</p>
              </div>
            </Parallax>
          </Reveal>
          <div className="order-1 lg:order-2">
            <SectionHead
              index="03"
              title="It ends with a certificate in your hands"
              lede="The photo says it better than we can: trainees finish their trade and receive their certificates at a proper recognition ceremony, with family watching."
            />
            <Reveal delay={100}>
              <p className="mt-5 max-w-xl text-[0.95rem] leading-relaxed text-otc-ink/75">
                Graduates leave OTC ready for work in trades Namibia needs: fabrication, wiring,
                building, mechanics, agriculture. Many step straight into self-employment, and the
                college's entrepreneurship focus is there to back them.
              </p>
              <div className="mt-6 flex flex-wrap gap-4">
                <Link prefetch={false}
                  href="/alumni"
                  className="link-underline inline-flex items-center gap-2 text-[0.95rem] font-semibold text-otc-navy focus-visible-ring"
                >
                  Meet our alumni
                  <span aria-hidden="true">→</span>
                </Link>
                <Link prefetch={false}
                  href="/programmes"
                  className="link-underline inline-flex items-center gap-2 text-[0.95rem] font-semibold text-otc-navy focus-visible-ring"
                >
                  Choose your trade
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Campus development carousel */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-24">
        <SectionHead
          index="04"
          title="The campus is growing"
          lede="Fencing and land works at the OTC AgriCampus, from construction through to handover. A college that is still building is a college that is still going places."
        />
        <Reveal className="mt-12">
          <LazyGallery items={agriCarousel} label="AgriCampus development photos" quality={55} />
        </Reveal>
      </section>

      {/* Closing CTA */}
      <section className="bg-otc-navy-deep text-white">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-20">
          <div className="grid items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]">
            <Reveal>
              <h2 className="display-2 text-white">
                The next intake is your intake
              </h2>
              <p className="lede mt-4 max-w-xl text-white/75">
                Applications for the next intake are open. Phone the college, visit the campus in
                Ongenga, or start with the admissions page to see exactly what to bring.
              </p>
            </Reveal>
            <Reveal delay={120} className="flex flex-wrap gap-3 lg:justify-end">
              <Link prefetch={false}
                href="/admissions"
                className="press inline-flex min-h-[48px] items-center rounded-sm bg-otc-gold px-6 text-base font-semibold text-otc-ink transition-colors hover:bg-[#c09a15] focus-visible-ring"
              >
                Apply to OTC
              </Link>
              <Link prefetch={false}
                href="/contact"
                className="press inline-flex min-h-[48px] items-center rounded-sm border border-white/35 px-6 text-base font-semibold text-white transition-colors hover:bg-white/10 focus-visible-ring"
              >
                Contact the college
              </Link>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
