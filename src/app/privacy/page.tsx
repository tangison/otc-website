import { Reveal } from "@/components/reveal";
import { SITE } from "@/lib/otc";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy policy for the Ongenga Technical College website. What we collect, why, and how to contact us about your data.",
  alternates: { canonical: "/privacy" },
  robots: { index: true, follow: true },
};

export default function PrivacyPage() {
  return (
    <>
      <section className="pt-12 sm:pt-20 pb-12">
        <div className="mx-auto max-w-3xl px-4">
          <Reveal><span className="tag">Privacy</span></Reveal>
          <Reveal delay={0.05}>
            <h1 className="display-2 text-navy mt-6">Privacy Policy.</h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="lead text-navy/75 mt-4">
              A short, plain-language summary of what {SITE.name} ("OTC", "we", "us") collects through
              this website and what we do with it. This policy may be updated; the date at the bottom
              reflects the last review.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-3xl px-4 space-y-10 text-[15.5px] leading-relaxed text-navy/85">
          <Reveal>
            <div>
              <h2 className="font-display text-2xl font-700 text-navy">What we collect</h2>
              <p className="mt-3">
                The contact form on this site collects the name, email, subject, and message you
                choose to send. Submitting that form opens your email client with the details
                pre-filled; we receive that email through our usual admissions inbox at {SITE.email}.
                We do not store form submissions on this website's servers.
              </p>
              <p className="mt-3">
                We also collect standard, anonymised web analytics (page views, browser type, country
                of origin in aggregate) for site improvement. We do not run third-party advertising
                networks on this site.
              </p>
            </div>
          </Reveal>

          <Reveal>
            <div>
              <h2 className="font-display text-2xl font-700 text-navy">How we use it</h2>
              <p className="mt-3">
                Messages submitted through the contact form are used to respond to admissions,
                partnerships, and general enquiries. We do not sell or share your personal data
                with third parties for marketing purposes.
              </p>
            </div>
          </Reveal>

          <Reveal>
            <div>
              <h2 className="font-display text-2xl font-700 text-navy">Cookies</h2>
              <p className="mt-3">
                This site uses a minimal set of cookies required for basic functionality. We do not
                set tracking cookies without your consent. Your browser settings control cookies
                and you can clear them at any time.
              </p>
            </div>
          </Reveal>

          <Reveal>
            <div>
              <h2 className="font-display text-2xl font-700 text-navy">Your rights</h2>
              <p className="mt-3">
                You may request access to, correction of, or deletion of any personal data we hold
                about you by emailing {SITE.email}. We will respond within a reasonable timeframe.
              </p>
            </div>
          </Reveal>

          <Reveal>
            <div>
              <h2 className="font-display text-2xl font-700 text-navy">Contact</h2>
              <p className="mt-3">
                For any privacy-related questions, contact us at:
              </p>
              <address className="not-italic mt-3 rounded-2xl border border-navy/10 bg-paper p-5">
                {SITE.name}
                <br />
                {SITE.address.line1}
                <br />
                {SITE.address.line2}
                <br />
                {SITE.address.line3}
                <br />
                Email: <a href={`mailto:${SITE.email}`} className="text-navy font-600 link-reveal">{SITE.email}</a>
                <br />
                Phone: <a href={`tel:${SITE.phoneHref}`} className="text-navy font-600 link-reveal">{SITE.phone}</a>
              </address>
            </div>
          </Reveal>

          <Reveal>
            <p className="text-[13px] text-navy/55 italic">
              Last reviewed: {new Date().toLocaleDateString("en-NA", { year: "numeric", month: "long", day: "numeric" })}.
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
