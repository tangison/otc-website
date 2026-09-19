import type { Metadata } from "next";
import Link from "next/link";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Ongenga Technical College handles information on its website.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <section className="mx-auto max-w-[820px] px-5 py-20 md:px-10 md:py-28">
      <h1 className="font-display text-4xl font-semibold tracking-tight text-navy md:text-5xl">
        Privacy policy
      </h1>
      <div className="mt-10 space-y-10 text-[15px] leading-relaxed text-foreground/85">
        <div>
          <h2 className="font-display text-xl font-semibold text-navy">
            What this website collects
          </h2>
          <p className="mt-3">
            This site serves pages, images and a map embed. It does not run its own
            analytics, advertising cookies or account system, and it does not ask
            you to create an account. The contact form does not exist yet: when you
            email or call the college, the college handles your details directly.
          </p>
        </div>
        <div>
          <h2 className="font-display text-xl font-semibold text-navy">
            Third-party embeds
          </h2>
          <p className="mt-3">
            The Contact page embeds a Google map so you can find the campus. Loading
            that map involves Google, and Google's own privacy terms apply to that
            request. If you prefer not to load it, every address detail is also
            written on the page.
          </p>
        </div>
        <div>
          <h2 className="font-display text-xl font-semibold text-navy">
            Your correspondence
          </h2>
          <p className="mt-3">
            Emails and calls to the college reach the college's own inboxes and
            lines: {SITE.email} and {SITE.phone}. Enquiries about applications,
            fees and courses are answered by staff and kept only as long as the
            correspondence needs.
          </p>
        </div>
        <div>
          <h2 className="font-display text-xl font-semibold text-navy">
            Questions
          </h2>
          <p className="mt-3">
            Ask the college anything about this policy at {SITE.email}. This page
            states the site's present behaviour plainly; if the site grows features,
            this policy will be updated to match.
          </p>
        </div>
        <p className="border-t border-border pt-8 text-sm text-muted-foreground">
          Ongenga Technical College, {SITE.addressShort}. Established {SITE.founded}.{" "}
          <Link
            href="/"
            className="font-medium text-navy underline decoration-gold decoration-2 underline-offset-4"
          >
            Back to the home page
          </Link>
          .
        </p>
      </div>
    </section>
  );
}
