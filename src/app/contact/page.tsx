import type { Metadata } from "next";
import PageHero from "@/components/site/page-hero";
import Reveal from "@/components/site/reveal";
import SectionHead from "@/components/site/section-head";
import ContactForm from "@/components/site/contact-form";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact and Campus Location",
  description:
    "Phone +264 81 294 6126 or email Ongenga Technical College. The campus is in Ongenga, Ohangwena Region, Namibia. Send a message and admissions will reply.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        image="/images/team-03.webp"
        alt="OTC staff standing outside the campus beneath the college banner"
        caption="The OTC campus, Ongenga"
        title="Talk to the college"
        lede="Phone, email or visit. Admissions answers questions on trades, intakes, fees and visits to the workshops."
      />

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <SectionHead
              index="01"
              title="Where to find us"
              lede="The campus sits in Ongenga, in the Ohangwena Region of northern Namibia, close to the community it serves."
            />
            <Reveal className="mt-8">
              <dl className="divide-y divide-border border-y border-border">
                <div className="py-5">
                  <dt className="text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-otc-gold-deep">
                    Phone
                  </dt>
                  <dd className="mt-1.5">
                    <a
                      href={`tel:${site.phoneHref}`}
                      className="font-display text-2xl font-semibold tracking-tight text-otc-navy underline-offset-4 hover:underline"
                    >
                      {site.phoneDisplay}
                    </a>
                  </dd>
                </div>
                <div className="py-5">
                  <dt className="text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-otc-gold-deep">
                    Email
                  </dt>
                  <dd className="mt-1.5">
                    <a
                      href={`mailto:${site.email}`}
                      className="break-all text-[1rem] font-medium text-otc-navy underline-offset-4 hover:underline"
                    >
                      {site.email}
                    </a>
                  </dd>
                </div>
                <div className="py-5">
                  <dt className="text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-otc-gold-deep">
                    Campus
                  </dt>
                  <dd className="mt-1.5 text-[1rem] leading-relaxed text-otc-ink/80">
                    Ongenga
                    <br />
                    Ohangwena Region
                    <br />
                    Namibia
                  </dd>
                </div>
                <div className="py-5">
                  <dt className="text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-otc-gold-deep">
                    Online
                  </dt>
                  <dd className="mt-1.5 text-[1rem] text-otc-ink/80">
                    <a
                      href={site.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium text-otc-navy underline-offset-4 hover:underline"
                    >
                      Ongenga Technical College on Facebook
                    </a>
                    <p className="mt-1 text-sm text-otc-ink/60">Updates, intake announcements and event photos.</p>
                  </dd>
                </div>
              </dl>
            </Reveal>
          </div>

          <div>
            <SectionHead
              index="02"
              title="Send a message"
              lede="Ask about a trade, an intake, or arranging a campus visit. The college replies directly."
            />
            <Reveal delay={100} className="mt-8">
              <ContactForm />
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
