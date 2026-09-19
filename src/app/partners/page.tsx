import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/site/page-hero";
import { SectionHeading } from "@/components/site/section-heading";
import { Reveal } from "@/components/site/reveal";

export const metadata: Metadata = {
  title: "Partners",
  description:
    "OTC trains in collaboration with Bulawayo Polytechnic and Advanced Design Colleges in Zimbabwe, and CJC Agricultural College in Namibia.",
  alternates: { canonical: "/partners" },
};

const PARTNERS = [
  {
    monogram: "BP",
    name: "Bulawayo Polytechnic",
    country: "Zimbabwe",
    note: "A long established technical polytechnic collaborating with OTC in technical training.",
  },
  {
    monogram: "AD",
    name: "Advanced Design Colleges",
    country: "Zimbabwe",
    note: "Design and technical education collaboration extending OTC's programme reach.",
  },
  {
    monogram: "CJ",
    name: "CJC Agricultural College",
    country: "Namibia",
    note: "Agricultural training partnership supporting the Sem Hasheela campus disciplines.",
  },
];

export default function PartnersPage() {
  return (
    <>
      <PageHero
        image="/images/namibia-savanna.webp"
        alt="Wide savanna landscape under an evening sky in northern Namibia"
        title="Trained here, recognised beyond"
        lead="Collaborations that widen what an OTC qualification opens."
        priority
      />

      {/* Partner panels: asymmetric rows, no card grid */}
      <section className="mx-auto max-w-[1200px] px-5 py-20 md:px-10 md:py-28">
        <ul className="space-y-0">
          {PARTNERS.map((partner, i) => (
            <Reveal as="li" key={partner.name}>
              <div className="grid items-center gap-8 border-t border-border py-12 last:border-b md:grid-cols-12 md:gap-12">
                <div
                  className={
                    i % 2 === 0 ? "md:col-span-7 md:order-1" : "md:col-span-7 md:order-2"
                  }
                >
                  <div className="flex items-center gap-6">
                    <span
                      aria-hidden="true"
                      className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl bg-navy font-display text-2xl font-semibold tracking-tight text-gold md:h-24 md:w-24 md:text-3xl"
                    >
                      {partner.monogram}
                    </span>
                    <div>
                      <h2 className="font-display text-2xl font-semibold tracking-tight text-navy md:text-3xl">
                        {partner.name}
                      </h2>
                      <p className="mt-1 text-sm font-semibold uppercase tracking-[0.16em] text-gold">
                        {partner.country}
                      </p>
                    </div>
                  </div>
                  <p className="mt-5 max-w-[56ch] text-[15px] leading-relaxed text-muted-foreground">
                    {partner.note}
                  </p>
                </div>
                <div
                  className={
                    i % 2 === 0
                      ? "md:col-span-5 md:order-2 md:pl-6"
                      : "md:col-span-5 md:order-1 md:pr-6"
                  }
                >
                  <div className="overflow-hidden rounded-2xl">
                    <Image
                      src={
                        i === 0
                          ? "/images/namibia-quiver.webp"
                          : i === 1
                            ? "/images/detail-woodshop.webp"
                            : "/images/course-animal.webp"
                      }
                      alt={
                        i === 0
                          ? "Quiver trees standing in a rocky Namibian landscape"
                          : i === 1
                            ? "Timber machined in a design workshop"
                            : "Cattle grazing on green pasture"
                      }
                      width={1400}
                      height={933}
                      sizes="(min-width: 768px) 38vw, 92vw"
                      className="aspect-[4/3] h-auto w-full object-cover transition-transform duration-700 ease-out hover:scale-[1.03]"
                    />
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </ul>
      </section>

      {/* Sector affiliation band */}
      <section
        aria-labelledby="sector-heading"
        className="bg-navy py-16 md:py-24"
      >
        <div className="mx-auto grid max-w-[1200px] items-center gap-10 px-5 md:grid-cols-2 md:gap-16 md:px-10">
          <Reveal>
            <SectionHeading
              id="sector-heading"
              light
              title="Part of the wider TVET community"
              lead="OTC materials carry TVET+ and TVET Africa sector branding, affiliations that sit alongside the college's own crest."
            />
            <Link
              href="/contact"
              className="press mt-8 inline-flex min-h-[48px] items-center rounded-full bg-gold px-7 text-sm font-semibold text-navy transition-colors hover:bg-gold-soft"
            >
              Partner with OTC
            </Link>
          </Reveal>
          <Reveal delay={120}>
            <div className="overflow-hidden rounded-3xl">
              <Image
                src="/images/namibia-sunset.webp"
                alt="Acacia tree silhouette against a vibrant sunset sky"
                width={1600}
                height={1066}
                sizes="(min-width: 768px) 42vw, 92vw"
                className="h-auto w-full object-cover"
              />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
