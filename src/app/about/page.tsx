import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/site/page-hero";
import { SectionHeading } from "@/components/site/section-heading";
import { Reveal } from "@/components/site/reveal";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "About OTC",
  description:
    "Founded in October 2019 by a young Namibian entrepreneur, Ongenga Technical College trains the masters of value addition under Ethics Group Holdings.",
  alternates: { canonical: "/about" },
};

const VALUES = [
  {
    name: "Skills Development",
    text: "Craft competence first: hours at the bench, the machine and the plot.",
  },
  {
    name: "Entrepreneurship",
    text: "Every graduate leaves able to invoice for their own work.",
  },
  {
    name: "Community Development",
    text: "Skills that stay in the Ohangwena Region and build it.",
  },
  {
    name: "Inclusiveness",
    text: "Every able-bodied Namibian, from all walks of life.",
  },
];

const ALIGNMENT = [
  "National Development Plans",
  "Harambee Prosperity Plan I & II",
  "Vision 2030",
  "UN Sustainable Development Goals",
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        image="/images/hero-workshop.webp"
        alt="Trainees practising carpentry side by side in a workshop"
        title="A college built for what comes after class"
        lead={`Founded ${SITE.founded} in Omafo, OTC exists to turn ability into livelihood.`}
        priority
      />

      {/* Founding story: image-led split */}
      <section className="mx-auto max-w-[1440px] px-5 py-20 md:px-10 md:py-32">
        <div className="grid items-center gap-10 md:grid-cols-12 md:gap-16">
          <Reveal className="md:col-span-5">
            <SectionHeading
              title="The OTC story"
              lead="Ongenga Technical College is a privately conceived Technical Vocational Education and Training institution, established by a young Namibian entrepreneur and trading under its mother company, Ethics Group Holdings (Pty) Ltd."
            />
            <p className="mt-6 max-w-[62ch] text-[15px] leading-relaxed text-foreground/80">
              The college aims to provide technical vocational education and training to
              every able-bodied Namibian from all walks of life, empowering them with
              the skills and knowledge that drive industrialisation and socio-economic
              development. That mission is anchored in where it teaches: Ongenga
              Industrial Park, on the Ongenga main road in the Ohangwena Region.
            </p>
            <Link
              href="/contact"
              className="press mt-8 inline-flex min-h-[48px] items-center rounded-full bg-navy px-7 text-sm font-semibold text-white transition-colors hover:bg-navy-800"
            >
              Visit the campus
            </Link>
          </Reveal>
          <Reveal delay={120} className="md:col-span-7">
            <figure>
              <div className="overflow-hidden rounded-3xl shadow-[0_32px_64px_-32px_rgba(1,0,127,0.4)]">
                <Image
                  src="/images/campus-building.webp"
                  alt="A vocational skills training centre building with signage"
                  width={1600}
                  height={1066}
                  sizes="(min-width: 768px) 58vw, 92vw"
                  className="h-auto w-full object-cover"
                />
              </div>
              <figcaption className="mt-4 text-sm text-muted-foreground">
                A vocational training centre environment in the region. Photo: stock
                imagery.
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </section>

      {/* Vision and mission: navy statement band */}
      <section aria-labelledby="vision-heading" className="bg-navy py-20 md:py-32">
        <div className="mx-auto grid max-w-[1440px] gap-12 px-5 md:grid-cols-2 md:gap-20 md:px-10">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold">
              Vision
            </p>
            <h2
              id="vision-heading"
              className="mt-4 font-display text-3xl font-semibold leading-[1.08] tracking-[-0.02em] text-white md:text-[2.75rem]"
            >
              To be Namibia's best and preferred technical training institution.
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold">
              Mission
            </p>
            <p className="mt-4 max-w-[58ch] font-display text-2xl font-medium leading-[1.2] tracking-[-0.01em] text-white/90 md:text-3xl">
              To nurture the masters of value addition who will harness community
              development, enhance employability, entrepreneurship and innovation.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Values: image strip left, values list right */}
      <section className="mx-auto max-w-[1440px] px-5 py-20 md:px-10 md:py-32">
        <div className="grid gap-12 md:grid-cols-12 md:gap-16">
          <Reveal className="md:col-span-5">
            <div className="space-y-5">
              <div className="overflow-hidden rounded-3xl">
                <Image
                  src="/images/otc-horticulture.webp"
                  alt="OTC trainee in blue coveralls working a garden plot with a wheelbarrow"
                  width={855}
                  height={515}
                  sizes="(min-width: 768px) 40vw, 92vw"
                  className="h-auto w-full object-cover"
                />
              </div>
              <div className="grid grid-cols-2 gap-5">
                <div className="overflow-hidden rounded-3xl">
                  <Image
                    src="/images/detail-woodshop.webp"
                    alt="Timber being machined in a wood workshop"
                    width={1024}
                    height={1242}
                    sizes="(min-width: 768px) 20vw, 45vw"
                    className="aspect-[4/5] h-auto w-full object-cover"
                  />
                </div>
                <div className="overflow-hidden rounded-3xl">
                  <Image
                    src="/images/course-solar.webp"
                    alt="Workers installing solar panels on a rooftop"
                    width={1400}
                    height={1050}
                    sizes="(min-width: 768px) 20vw, 45vw"
                    className="aspect-[4/5] h-auto w-full object-cover"
                  />
                </div>
              </div>
              <p className="text-sm text-muted-foreground">
                Top: an OTC trainee on the horticulture plot. Workshop and solar
                imagery: stock.
              </p>
            </div>
          </Reveal>
          <div className="md:col-span-7">
            <SectionHeading title="What OTC stands on" />
            <ul>
              {VALUES.map((value, i) => (
                <Reveal as="li" key={value.name} delay={i * 90}>
                  <div className="flex min-h-[96px] items-baseline gap-6 border-t border-border py-6 last:border-b">
                    <span
                      aria-hidden="true"
                      className="font-display text-2xl font-semibold text-[#9A7610]"
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h3 className="font-display text-xl font-semibold tracking-tight text-navy md:text-2xl">
                        {value.name}
                      </h3>
                      <p className="mt-1.5 text-[15px] leading-relaxed text-muted-foreground">
                        {value.text}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* National alignment strip */}
      <section
        aria-labelledby="alignment-heading"
        className="border-y border-border bg-white py-16 md:py-20"
      >
        <div className="mx-auto max-w-[1440px] px-5 md:px-10">
          <h2
            id="alignment-heading"
            className="font-display text-2xl font-semibold tracking-tight text-navy md:text-3xl"
          >
            Programmes aligned with national priorities
          </h2>
          <ul className="mt-8 flex flex-wrap gap-3">
            {ALIGNMENT.map((item) => (
              <li
                key={item}
                className="rounded-full border border-navy/15 bg-paper px-5 py-2.5 text-sm font-medium text-navy"
              >
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-8 max-w-[70ch] text-[15px] leading-relaxed text-muted-foreground">
            OTC's training responds to the country's development agenda, so the
            trades taught here are the ones Namibia needs built. The college trains
            under {SITE.parent}, with an agricultural production campus at Sem
            Hasheela extending the classroom into the field.
          </p>
        </div>
      </section>
    </>
  );
}
