import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/site/page-hero";
import Reveal from "@/components/site/reveal";
import SectionHead from "@/components/site/section-head";
import LazyGallery from "@/components/site/lazy-gallery";
import { partners } from "@/lib/site";

export const metadata: Metadata = {
  title: "Partners and Employer Pathways",
  description:
    "Our training partnership with Bulawayo Polytechnic, Zimbabwe, plus employer pathways, apprenticeships and community programmes in the Ohangwena Region.",
  alternates: { canonical: "/partners" },
};

const partnerGallery = [
  { src: "/images/expo-indoor-01-c.webp", alt: "The OTC booth at an indoor expo" },
  { src: "/images/expo-outdoor-03-c.webp", alt: "The OTC gazebo stand under a blue sky at an outdoor expo" },
  { src: "/images/expo-outdoor-02-c.webp", alt: "The OTC exhibition tent at an outdoor expo" },
  { src: "/images/expo-indoor-03-c.webp", alt: "Visitors at the OTC exhibition stand" },
  { src: "/images/outreach-02-c.webp", alt: "An outreach demonstration with community members", caption: "Outreach demonstration with community partners" },
  { src: "/images/agri-handover-04-c.webp", alt: "Guests signing at the register table on AgriCampus handover day", caption: "Signing at the AgriCampus handover" },
  { src: "/images/agri-handover-07-c.webp", alt: "The handover venue set out under large trees with OTC banners" },
  { src: "/images/signage-02-c.webp", alt: "The OTC banner installed at the campus" },
  { src: "/images/graduation-05-c.webp", alt: "An OTC graduate holding his certificate folder" },
  { src: "/images/graduation-06-c.webp", alt: "The recognition ceremony at OTC" },
  { src: "/images/signage-03-c.webp", alt: "Raising the OTC banner on campus" },
];

export default function PartnersPage() {
  return (
    <>
      <PageHero
        image="/images/expo-outdoor-01.webp"
        alt="The OTC exhibition stand at a regional expo with branded banners"
        caption="OTC exhibiting at a regional expo"
        title="Training travels further in company"
        lede="A cross-border academic partnership, employers who take OTC graduates, and community programmes that carry skills beyond the campus fence."
      />

      {/* Bulawayo Polytechnic feature: the Zim partnership, prominent per the site review */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-24">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
          <Reveal>
            <div className="relative flex aspect-[4/3] items-center justify-center bg-otc-navy-deep p-8">
              <div className="h-1 w-12 bg-otc-gold absolute left-0 top-0" aria-hidden="true" />
              <div className="text-center">
                <p className="font-display text-2xl font-semibold leading-snug tracking-tight text-white sm:text-3xl">
                  Bulawayo
                  <br />
                  Polytechnic
                </p>
                <p className="mt-3 text-sm text-white/70">Zimbabwe, est. {partners.zim.established}</p>
                <p className="mt-6 inline-block border-t border-otc-gold/60 pt-3 text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-otc-gold">
                  Training partnership
                </p>
              </div>
              <p className="absolute bottom-3 left-0 right-0 text-center text-[0.68rem] text-white/40">
                Official logotype pending the partner's own artwork
              </p>
            </div>
          </Reveal>
          <div>
            <SectionHead
              index="01"
              title="Bulawayo Polytechnic, Zimbabwe"
              lede="OTC signed a training partnership agreement with Bulawayo Polytechnic at Bulawayo: a formal Memorandum of Understanding between the two institutions."
            />
            <Reveal delay={100}>
              <p className="mt-5 max-w-xl text-[0.95rem] leading-relaxed text-otc-ink/75">
                Bulawayo Polytechnic, established in {partners.zim.established} and known as one of
                Zimbabwe's leading technical institutions, brings decades of engineering and
                vocational training depth. The agreement opens the door to academic exchange, joint
                training initiatives and staff development across both campuses.
              </p>
              <p className="mt-4 max-w-xl text-[0.95rem] leading-relaxed text-otc-ink/75">
                For OTC students it means exposure beyond one campus: standards benchmarked across
                borders, and a pathway for lecturers and trainers to keep their own skills current.
              </p>
              <a
                href={partners.zim.url}
                target="_blank"
                rel="noopener noreferrer"
                className="link-underline mt-6 inline-flex items-center gap-2 text-[0.95rem] font-semibold text-otc-navy"
              >
                Visit Bulawayo Polytechnic
                <span aria-hidden="true">→</span>
              </a>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Employer linkage */}
      <section className="border-y border-border bg-white">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-24">
          <SectionHead
            index="02"
            title="Employer pathways"
            lede="Vocational training only works when it ends in work. OTC builds employer links around every trade it teaches."
          />
          <div className="mt-12 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                t: "Apprenticeships",
                d: "Workplace learning alongside employers in the trades OTC teaches, from workshops to construction sites.",
              },
              {
                t: "Internships",
                d: "Structured placements that turn final-year trainees into first-job candidates.",
              },
              {
                t: "Custom training",
                d: "Short course programmes built for a specific employer's workforce, delivered on campus or on site.",
              },
              {
                t: "Graduate placement",
                d: "Employers looking for welders, electricians, mechanics and builders talk to OTC first.",
              },
            ].map((c, i) => (
              <Reveal key={c.t} delay={(i % 4) * 80} className="border-t-2 border-otc-gold pt-5">
                <h3 className="font-display text-xl font-semibold tracking-tight text-otc-navy">{c.t}</h3>
                <p className="mt-2 text-[0.95rem] leading-relaxed text-otc-ink/75">{c.d}</p>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-12 border-l-2 border-otc-gold bg-otc-tint/60 px-5 py-4">
            <p className="text-[0.95rem] text-otc-ink/80">
              Employer, or know one? Named industry partners will be listed here with their own
              logotypes as agreements are confirmed.{" "}
              <Link prefetch={false} href="/contact" className="font-medium text-otc-navy underline-offset-4 hover:underline">
                Start the conversation
              </Link>
              .
            </p>
          </Reveal>
        </div>
      </section>

      {/* Presence gallery */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-24">
        <SectionHead
          index="03"
          title="Out where the region can see us"
          lede="Expos, outreach demonstrations and campus works: OTC in public, photographed at its own events."
        />
        <Reveal className="mt-12">
          <LazyGallery items={partnerGallery} label="Partnership and presence photos" quality={55} />
        </Reveal>

        {/* Pending partner slots, honestly marked */}
        <div className="mt-14 grid gap-4 sm:grid-cols-3">
          {partners.pending.map((p, i) => (
            <Reveal key={p.name} delay={i * 90}>
              <div className="flex h-full min-h-[120px] flex-col justify-between border border-dashed border-otc-navy/30 bg-otc-paper px-5 py-5">
                <p className="font-display text-lg font-medium text-otc-navy/80">{p.name}</p>
                <p className="mt-3 text-xs uppercase tracking-[0.14em] text-otc-gold-deep">{p.note}</p>
              </div>
            </Reveal>
          ))}
        </div>
          <Reveal className="mt-8">
            <div className="img-frame relative hidden aspect-[21/9] lg:block">
              <Image
                src="/images/expo-indoor-02-c.webp"
                alt="OTC exhibition stand interior with visitors"
                fill
                sizes="100vw"
                className="object-cover"
              />
            </div>
          </Reveal>
      </section>
    </>
  );
}
