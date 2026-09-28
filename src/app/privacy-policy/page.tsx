import type { Metadata } from "next";
import PageHero from "@/components/site/page-hero";
import Reveal from "@/components/site/reveal";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Ongenga Technical College handles the personal information you send through this website, aligned with Namibian data practice.",
  alternates: { canonical: "/privacy-policy" },
  robots: { index: true, follow: true },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero
        image="/images/classrooms-01.webp"
        alt="The OTC lecture hall prepared for a training session"
        caption="OTC lecture hall"
        title="Privacy policy"
        lede="Plain words about what this website collects, why, and what happens to it."
      />

      <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:py-24">
        <div className="space-y-8 text-[1rem] leading-relaxed text-otc-ink/80">
          <Reveal>
            <h2 className="font-display text-2xl font-semibold tracking-tight text-otc-navy">
              1. Who is responsible
            </h2>
            <p className="mt-3">
              {site.name}, located in Ongenga, Ohangwena Region, Namibia, is responsible for the
              personal information collected through this website. You can reach the college at{" "}
              <a href={`tel:${site.phoneHref}`} className="font-medium text-otc-navy underline-offset-4 hover:underline">
                {site.phoneDisplay}
              </a>{" "}
              or{" "}
              <a href={`mailto:${site.email}`} className="font-medium text-otc-navy underline-offset-4 hover:underline">
                {site.email}
              </a>
              .
            </p>
          </Reveal>
          <Reveal>
            <h2 className="font-display text-2xl font-semibold tracking-tight text-otc-navy">
              2. What we collect
            </h2>
            <p className="mt-3">
              The contact form asks for your name, phone number, email address, a topic and your
              message. That is all. The form exists so the admissions office can answer your enquiry;
              the details go to the college and are used for that purpose only. Submitting the form is
              voluntary: everything on this site can also be done by phone or by walking into the
              campus.
            </p>
          </Reveal>
          <Reveal>
            <h2 className="font-display text-2xl font-semibold tracking-tight text-otc-navy">
              3. What we do not do
            </h2>
            <p className="mt-3">
              We do not sell your information. We do not share it with third parties for marketing. We
              do not run advertising trackers on this site. The site does not set advertising cookies,
              and no analytics profile is built around you as a visitor.
            </p>
          </Reveal>
          <Reveal>
            <h2 className="font-display text-2xl font-semibold tracking-tight text-otc-navy">
              4. How long we keep messages
            </h2>
            <p className="mt-3">
              Enquiries are kept only as long as needed to handle them and to keep a basic record of
              who asked about which programme. If you want a message of yours deleted, phone or email
              the college and it will be removed.
            </p>
          </Reveal>
          <Reveal>
            <h2 className="font-display text-2xl font-semibold tracking-tight text-otc-navy">
              5. Hosting and security
            </h2>
            <p className="mt-3">
              The site is served over HTTPS. Form submissions travel encrypted and are stored in the
              college's own systems. Access is limited to staff who handle admissions.
            </p>
          </Reveal>
          <Reveal>
            <h2 className="font-display text-2xl font-semibold tracking-tight text-otc-navy">
              6. Your choices
            </h2>
            <p className="mt-3">
              You can ask what information the college holds about you, ask for it to be corrected, or
              ask for it to be deleted. Contact the college through the details above and the request
              will be handled.
            </p>
          </Reveal>
          <Reveal>
            <h2 className="font-display text-2xl font-semibold tracking-tight text-otc-navy">
              7. Changes
            </h2>
            <p className="mt-3">
              If this policy changes materially, the updated version will appear on this page. This
              policy was last updated in September 2026.
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
