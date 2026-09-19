import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/site/page-hero";
import { SectionHeading } from "@/components/site/section-heading";
import { Reveal } from "@/components/site/reveal";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Reach Ongenga Technical College: +264 85 8030415, info@otc.nam.na, Ongenga Industrial Park, Omafo, Ohangwena Region, Namibia. Find us on the map.",
  alternates: { canonical: "/contact" },
};

const CHANNELS = [
  {
    label: "Phone",
    value: SITE.phone,
    href: SITE.phoneHref,
    note: "Call or message during office hours",
  },
  {
    label: "Email",
    value: SITE.email,
    href: `mailto:${SITE.email}`,
    note: "For applications, fees and general enquiries",
  },
  {
    label: "Alternative email",
    value: SITE.emailSecondary,
    href: `mailto:${SITE.emailSecondary}`,
    note: "Secondary college inbox",
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        image="/images/otc-classroom.webp"
        alt="OTC trainee in an orange hard hat writing in a workbook"
        title="Come as far as the gate"
        lead="The college answers calls, emails and walk-in visits at Ongenga Industrial Park."
        priority
      />

      <section className="mx-auto max-w-[1440px] px-5 py-20 md:px-10 md:py-28">
        <div className="grid gap-12 md:grid-cols-12 md:gap-16">
          {/* Address + channels */}
          <div className="md:col-span-5">
            <SectionHeading
              title="Ongenga Industrial Park"
              lead={SITE.address}
            />
            <ul className="mt-10 border-t border-border">
              {CHANNELS.map((channel) => (
                <li key={channel.label} className="border-b border-border py-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gold">
                    {channel.label}
                  </p>
                  <a
                    href={channel.href}
                    className="mt-1.5 block font-display text-xl font-semibold tracking-tight text-navy underline-offset-4 hover:text-navy-700 hover:underline md:text-2xl"
                  >
                    {channel.value}
                  </a>
                  <p className="mt-1 text-sm text-muted-foreground">{channel.note}</p>
                </li>
              ))}
            </ul>
            <div className="mt-10 overflow-hidden rounded-3xl">
              <Image
                src="/images/namibia-savanna.webp"
                alt="Wide savanna landscape under an evening sky in northern Namibia"
                width={1600}
                height={1058}
                sizes="(min-width: 768px) 40vw, 92vw"
                className="h-auto w-full object-cover"
              />
            </div>
            <p className="mt-3 text-sm text-muted-foreground">
              The Ohangwena Region the college calls home.
            </p>
          </div>

          {/* Map */}
          <Reveal className="md:col-span-7" delay={100}>
            <div className="overflow-hidden rounded-3xl border border-border shadow-[0_28px_56px_-30px_rgba(1,0,127,0.35)]">
              <iframe
                title="Map showing Ongenga Industrial Park near Omafo, Namibia"
                src={SITE.mapEmbed}
                className="h-[420px] w-full md:h-[560px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
            <p className="mt-4 text-sm text-muted-foreground">
              Ongenga main road, Omafo, Ohangwena Region. If the pin drifts, search
              Ongenga Industrial Park in your maps app.
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
