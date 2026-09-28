import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import PageHero from "@/components/site/page-hero";
import Reveal from "@/components/site/reveal";
import SectionHead from "@/components/site/section-head";
import { site, stats } from "@/lib/site";

export const metadata: Metadata = {
  title: "About the College",
  description:
    "Founded in 2019 in Ongenga: the vision, mission and values of Ongenga Technical College, and how it serves the Ohangwena Region.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        image="/images/classrooms-04.webp"
        alt="An instructor leading a class in the OTC lecture hall"
        caption="Training session, OTC lecture hall"
        title="A college built for the Ohangwena Region"
        lede={site.positioning}
      />

      {/* The story */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <SectionHead index="01" title="The OTC story" />
            <Reveal className="mt-8 grid grid-cols-2 gap-4">
              <div className="img-frame relative aspect-[4/5]">
                <Image
                  src="/images/signage-01.webp"
                  alt="The Ongenga Technical College campus entrance signage"
                  fill
                  sizes="(max-width: 1024px) 50vw, 20vw"
                  quality={60}
                  className="object-cover"
                />
                <p className="caption-chip">Campus entrance, Ongenga</p>
              </div>
              <div className="img-frame relative mt-8 aspect-[4/5]">
                <Image
                  src="/images/classrooms-05.webp"
                  alt="Trainees listening during a session at OTC"
                  fill
                  sizes="(max-width: 1024px) 50vw, 20vw"
                  quality={60}
                  className="object-cover"
                />
                <p className="caption-chip">In class at OTC</p>
              </div>
            </Reveal>
          </div>

          <div className="space-y-6 text-[1rem] leading-relaxed text-otc-ink/80">
            <Reveal>
              <p>
                Ongenga Technical College opened its doors in{" "}
                <strong className="font-semibold text-otc-ink">2019</strong> to answer a question the
                region kept asking: where can a young person in Ohangwena learn a trade that pays,
                without travelling hundreds of kilometres to Windhoek or beyond the border? The
                college was established as a regional centre for vocational and technical skills, close
                to the families who need it most.
              </p>
            </Reveal>
            <Reveal>
              <p>
                The years since have been about building capability on two fronts at once. Inside the
                classrooms and workshops, OTC has grown to seven full-time NVC trades and nine short
                courses, taught by practitioners, assessed practically. Outside them, the college has
                carried its training into communities through outreach demonstrations, expo stands and
                partnerships, including a training agreement with Bulawayo Polytechnic in Zimbabwe.
              </p>
            </Reveal>
            <Reveal>
              <p>
                The campus itself tells the same story: fencing and land development at the AgriCampus
                has turned open ground into working training space. Growth is still under way, and the
                college is candid about that. What exists today is real, photographed on this site, and
                open for you to visit in Ongenga.
              </p>
            </Reveal>
            <Reveal>
              <p>
                Where next? More graduates into jobs and self-employment, deeper industry partnerships,
                and a wider role as an entrepreneurship incubator for the region. That is the direction
                the founding objectives point to, and every intake moves it forward.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Vision / mission / values on navy */}
      <section className="bg-otc-navy-deep text-white">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-24">
          <div className="grid gap-10 lg:grid-cols-2">
            <Reveal>
              <p className="text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-otc-gold">Vision</p>
              <p className="mt-4 font-display text-3xl font-medium leading-snug tracking-tight lg:text-4xl">
                {site.vision}
              </p>
            </Reveal>
            <Reveal delay={120}>
              <p className="text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-otc-gold">Mission</p>
              <p className="mt-4 font-display text-3xl font-medium leading-snug tracking-tight lg:text-4xl">
                {site.mission}
              </p>
            </Reveal>
          </div>
          <div className="mt-14 grid gap-8 border-t border-white/15 pt-10 sm:grid-cols-2 lg:grid-cols-4">
            {site.values.map((v, i) => (
              <Reveal key={v.name} delay={i * 90}>
                <p className="font-display text-lg italic text-otc-gold">0{i + 1}</p>
                <p className="mt-2 font-semibold">{v.name}</p>
                <p className="mt-1.5 text-sm leading-relaxed text-white/70">{v.note}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why choose OTC */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-24">
        <SectionHead
          index="02"
          title="Why choose OTC"
          lede="Six honest reasons, none of them adjectives."
        />
        <div className="mt-12 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              t: "Practical learning",
              d: "Workshops, tools, real workpieces. Assessment is practical because the job is practical.",
            },
            {
              t: "Community roots",
              d: "Founded for Ohangwena, staffed and training for Ohangwena. Your family can visit on any weekend.",
            },
            {
              t: "Small classes",
              d: "Trainers who know your name and can spot a bad weld from across the bench.",
            },
            {
              t: "Industry-focused trades",
              d: "The seven NVC trades map to work Namibia actually hires for, from wiring to crop production.",
            },
            {
              t: "Entrepreneurship emphasis",
              d: "Graduates are prepared to start workshops of their own, not only to seek employment.",
            },
            {
              t: "Regional accessibility",
              d: "Campus life in Ongenga at a fraction of the cost of studying far from home. Two or more intakes a year.",
            },
          ].map((r, i) => (
            <Reveal key={r.t} delay={(i % 3) * 90} className="border-t-2 border-otc-gold pt-5">
              <h3 className="font-display text-xl font-semibold tracking-tight text-otc-navy">{r.t}</h3>
              <p className="mt-2 text-[0.95rem] leading-relaxed text-otc-ink/75">{r.d}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Accreditation and governance: honest status */}
      <section className="border-y border-border bg-white">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-24">
          <SectionHead
            index="03"
            title="Accreditation, recognition and governance"
            lede="Stated plainly, with nothing dressed up. What is confirmed is confirmed; what is pending is marked pending."
          />
          <div className="mt-12 grid gap-10 lg:grid-cols-2">
            <Reveal>
              <div className="img-frame relative aspect-[16/10]">
                <Image
                  src="/images/graduation-02.webp"
                  alt="An OTC graduate holding the college's certificate folder"
                  fill
                  sizes="(max-width: 1024px) 100vw, 46vw"
                  className="object-cover"
                />
                <p className="caption-chip">Certificates awarded at the recognition ceremony</p>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <dl className="divide-y divide-border">
                {[
                  {
                    k: "National TVET eLearning Portal",
                    v: "OTC is listed on the eLearning portal run by the Namibia Training Authority, alongside VTCs across the country.",
                  },
                  {
                    k: "Qualifications",
                    v: "Full-time trades follow the National Vocational Certificate (NVC) framework. Certificates are awarded at the college's recognition ceremony.",
                  },
                  {
                    k: "Registration and accreditation certificates",
                    v: "Available for inspection from the college administration on request, so you can verify before you enrol.",
                  },
                  {
                    k: "Governance",
                    v: "The college operates under a governing structure accountable for academic standards and compliance. Leadership profiles and governance documents are published as they are confirmed; ask the administration for the current status.",
                  },
                  {
                    k: "Achievements",
                    v: `Founded ${stats[0].value}, now ${stats[1].value} full-time NVC trades and ${stats[2].value} short courses, with ${stats[3].value} intakes a year and an expanding AgriCampus.`,
                  },
                ].map((row) => (
                  <div key={row.k} className="py-4">
                    <dt className="text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-otc-gold-deep">
                      {row.k}
                    </dt>
                    <dd className="mt-1.5 text-[0.95rem] leading-relaxed text-otc-ink/80">{row.v}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>
          <Reveal className="mt-10">
            <p className="text-sm text-otc-ink/60">
              Prefer to verify in person? The college welcomes visits:{" "}
              <Link prefetch={false} href="/contact" className="font-medium text-otc-navy underline-offset-4 hover:underline">
                arrange one on the contact page
              </Link>
              .
            </p>
          </Reveal>
        </div>
      </section>

      {/* Team teaser (no invented names) */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-24">
        <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <div>
            <SectionHead
              index="04"
              title="The people behind the college"
              lede="Trainers, administrators and support staff who run OTC day to day. Named leadership profiles will be published here once confirmed by the college."
            />
            <Reveal delay={100}>
              <p className="mt-5 max-w-xl text-[0.95rem] leading-relaxed text-otc-ink/75">
                This site does not invent staff biographies to look finished. When the college
                confirms its leadership team, their profiles will appear here with photographs and
                roles.
              </p>
            </Reveal>
          </div>
          <Reveal delay={120}>
            <div className="img-frame relative aspect-[4/3]">
              <Image
                src="/images/team-01.webp"
                alt="OTC staff and visitors together outside the campus buildings"
                fill
                sizes="(max-width: 1024px) 100vw, 44vw"
                className="object-cover"
              />
              <p className="caption-chip">Staff and visitors at the campus</p>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
