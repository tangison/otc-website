import type { Metadata } from "next";
import PageHero from "@/components/site/page-hero";
import Reveal from "@/components/site/reveal";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of Use",
  description:
    "The terms that apply when you use the Ongenga Technical College website, including programme information accuracy and enquiry handling.",
  alternates: { canonical: "/terms" },
  robots: { index: true, follow: true },
};

export default function TermsPage() {
  return (
    <>
      <PageHero
        image="/images/g-agri-2.webp"
        alt="Fence line works at the OTC AgriCampus"
        caption="AgriCampus works, OTC"
        title="Terms of use"
        lede="The short version: information here is published in good faith, programmes are confirmed by the college, and enquiries through this site are handled by its staff."
      />

      <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:py-24">
        <div className="space-y-8 text-[1rem] leading-relaxed text-otc-ink/80">
          <Reveal>
            <h2 className="font-display text-2xl font-semibold tracking-tight text-otc-navy">
              1. Using this site
            </h2>
            <p className="mt-3">
              This website belongs to {site.name}. You are welcome to browse it, share links to it,
              and use its information to make study and partnership decisions. The photographs on this
              site are the college's own record of its campus, events and people, and remain the
              property of the college.
            </p>
          </Reveal>
          <Reveal>
            <h2 className="font-display text-2xl font-semibold tracking-tight text-otc-navy">
              2. Programme information
            </h2>
            <p className="mt-3">
              Programme names, qualifications, career pathways and statistics on this site reflect the
              college's offering as published in its own review materials. Intake lists, entry
              requirements and fees are confirmed by the admissions office for each intake. Where
              this site points you to admissions rather than quoting a figure, that is deliberate: the
              college publishes no number it cannot stand behind.
            </p>
          </Reveal>
          <Reveal>
            <h2 className="font-display text-2xl font-semibold tracking-tight text-otc-navy">
              3. Enquiries
            </h2>
            <p className="mt-3">
              Messages sent through the contact form reach the college's admissions office. Send only
              information you are comfortable sharing, and do not include sensitive documents through
              the form; those are handled at the campus during registration.
            </p>
          </Reveal>
          <Reveal>
            <h2 className="font-display text-2xl font-semibold tracking-tight text-otc-navy">
              4. External links
            </h2>
            <p className="mt-3">
              Links to partner institutions, such as Bulawayo Polytechnic, and to the college's
              Facebook page are provided for convenience. The college is not responsible for the
              content of those external sites.
            </p>
          </Reveal>
          <Reveal>
            <h2 className="font-display text-2xl font-semibold tracking-tight text-otc-navy">
              5. Liability
            </h2>
            <p className="mt-3">
              The site is maintained carefully, but the college accepts no liability for decisions
              made on the basis of site content that admissions has not confirmed directly. Always
              confirm programme details with the college before committing money or travel.
            </p>
          </Reveal>
          <Reveal>
            <h2 className="font-display text-2xl font-semibold tracking-tight text-otc-navy">
              6. Governing law
            </h2>
            <p className="mt-3">
              These terms are governed by the laws of the Republic of Namibia. This page was last
              updated in September 2026.
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
