import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/site/page-hero";
import { SectionHeading } from "@/components/site/section-heading";
import { Reveal } from "@/components/site/reveal";
import { FaqAccordion } from "@/components/site/faq-accordion";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Admissions & Applying",
  description:
    "How to apply to Ongenga Technical College: choose a course, check intakes and requirements, then contact the college on +264 85 8030415 or info@otc.nam.na.",
  alternates: { canonical: "/admissions" },
};

const STEPS = [
  {
    image: "/images/course-welding-detail.webp",
    alt: "Welder working with sparks in a training workshop",
    title: "Choose your course",
    text: "Browse the seven full-time NVC trades and nine short courses. Tap any course for its details.",
    href: "/programs",
    link: "See programs",
  },
  {
    image: "/images/course-computing.webp",
    alt: "Instructor teaching a class in a computer training room",
    title: "Check the intake",
    text: "Full-time programmes take two intakes a year, short courses four. Call to confirm the next dates.",
    href: "#faq",
    link: "Read the FAQ",
  },
  {
    image: "/images/otc-classroom.webp",
    alt: "OTC trainee in an orange hard hat writing in a workbook",
    title: "Contact the college",
    text: "Phone, email or visit: staff confirm requirements and send the application form.",
    href: "/contact",
    link: "Contact details",
  },
];

export default function AdmissionsPage() {
  return (
    <>
      <PageHero
        image="/images/admissions-students.webp"
        alt="Two smiling students in uniform, one wearing a medal"
        title="Your seat in the workshop"
        lead="Three steps between you and your first day of training."
        priority
      />

      {/* Steps as an editorial sequence: number + image + text, alternating */}
      <section className="mx-auto max-w-[1200px] px-5 py-20 md:px-10 md:py-28">
        <ol className="space-y-16 md:space-y-24">
          {STEPS.map((step, i) => (
            <Reveal as="li" key={step.title}>
              <div
                className={
                  i % 2 === 0
                    ? "grid items-center gap-8 md:grid-cols-12 md:gap-14"
                    : "grid items-center gap-8 md:grid-cols-12 md:gap-14"
                }
              >
                <div
                  className={
                    i % 2 === 0
                      ? "md:order-1 md:col-span-7"
                      : "md:order-2 md:col-span-7"
                  }
                >
                  <div className="overflow-hidden rounded-3xl shadow-[0_28px_56px_-30px_rgba(1,0,127,0.4)]">
                    <Image
                      src={step.image}
                      alt={step.alt}
                      width={1400}
                      height={800}
                      sizes="(min-width: 768px) 58vw, 92vw"
                      className="aspect-[16/9] h-auto w-full object-cover"
                    />
                  </div>
                </div>
                <div
                  className={
                    i % 2 === 0
                      ? "md:order-2 md:col-span-5"
                      : "md:order-1 md:col-span-5"
                  }
                >
                  <p
                    aria-hidden="true"
                    className="font-display text-6xl font-semibold text-[#9A7610] md:text-7xl"
                  >
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <h2 className="mt-3 font-display text-2xl font-semibold tracking-tight text-navy md:text-3xl">
                    {step.title}
                  </h2>
                  <p className="mt-3 max-w-[50ch] text-[15px] leading-relaxed text-muted-foreground">
                    {step.text}
                  </p>
                  {step.href.startsWith("#") ? (
                    <a
                      href={step.href}
                      className="press mt-6 inline-flex min-h-[48px] items-center rounded-full bg-navy px-7 text-sm font-semibold text-white transition-colors hover:bg-navy-800"
                    >
                      {step.link}
                    </a>
                  ) : (
                    <Link
                      href={step.href}
                      className="press mt-6 inline-flex min-h-[48px] items-center rounded-full bg-navy px-7 text-sm font-semibold text-white transition-colors hover:bg-navy-800"
                    >
                      {step.link}
                    </Link>
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </ol>
      </section>

      {/* Intake rhythm + application form placeholder */}
      <section
        aria-labelledby="intake-heading"
        className="border-y border-border bg-white py-16 md:py-24"
      >
        <div className="mx-auto grid max-w-[1200px] gap-12 px-5 md:grid-cols-2 md:gap-16 md:px-10">
          <Reveal>
            <SectionHeading
              id="intake-heading"
              title="Intakes at a glance"
              lead="Two intakes yearly for full-time NVC programmes, four for short courses, with part-time options on both."
            />
          </Reveal>
          <Reveal delay={120}>
            <dl className="border-t border-border">
              <div className="flex items-baseline justify-between gap-6 border-b border-border py-5">
                <dt className="font-display text-xl font-semibold text-navy">
                  Full-time NVC
                </dt>
                <dd className="text-sm font-medium text-muted-foreground">
                  2 intakes a year
                </dd>
              </div>
              <div className="flex items-baseline justify-between gap-6 border-b border-border py-5">
                <dt className="font-display text-xl font-semibold text-navy">
                  Short courses
                </dt>
                <dd className="text-sm font-medium text-muted-foreground">
                  4 intakes a year
                </dd>
              </div>
              <div className="flex items-baseline justify-between gap-6 border-b border-border py-5">
                <dt className="font-display text-xl font-semibold text-navy">
                  Attendance
                </dt>
                <dd className="text-sm font-medium text-muted-foreground">
                  Full-time or part-time
                </dd>
              </div>
            </dl>
            <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
              The downloadable application form will be published here as soon as the
              college supplies the current version. In the meantime, request it
              directly at{" "}
              <a
                href={`mailto:${SITE.email}`}
                className="font-medium text-navy underline decoration-gold decoration-2 underline-offset-4 hover:text-navy-700"
              >
                {SITE.email}
              </a>{" "}
              or {SITE.phone}.
            </p>
          </Reveal>
        </div>
      </section>

      {/* FAQ accordion: the reading matter, tucked behind widgets */}
      <section id="faq" className="mx-auto max-w-[900px] px-5 py-20 md:px-10 md:py-28">
        <SectionHeading
          title="Questions applicants ask"
          lead="Everything here reflects what the college has confirmed. For the rest, one call settles it."
        />
        <div className="mt-10">
          <FaqAccordion />
        </div>
      </section>

      {/* Certificate moment */}
      <section aria-labelledby="ready-heading" className="relative isolate overflow-hidden">
        <Image
          src="/images/success-certificate.webp"
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div aria-hidden="true" className="absolute inset-0 bg-navy/70" />
        <div className="relative mx-auto max-w-[1200px] px-5 py-24 md:px-10 md:py-32">
          <Reveal>
            <h2
              id="ready-heading"
              className="max-w-2xl font-display text-4xl font-semibold leading-[1.05] tracking-[-0.02em] text-white md:text-5xl"
            >
              Start with a phone call
            </h2>
            <p className="mt-4 max-w-lg text-lg text-white/80">
              {SITE.phone}, or email {SITE.email}. The campus is at Ongenga
              Industrial Park, Omafo.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href={SITE.phoneHref}
                className="press inline-flex min-h-[52px] items-center rounded-full bg-gold px-8 text-base font-semibold text-navy transition-colors hover:bg-gold-soft"
              >
                Call {SITE.phone}
              </a>
              <Link
                href="/contact"
                className="press inline-flex min-h-[52px] items-center rounded-full border border-white/40 px-8 text-base font-medium text-white transition-colors hover:border-gold hover:text-gold"
              >
                All contact options
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
