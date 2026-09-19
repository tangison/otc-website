import { Reveal } from "@/components/reveal";
import { SITE } from "@/lib/otc";
import type { Metadata } from "next";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Reach Ongenga Technical College: phone +264 85 8030415, email info@otc.nam.na, located at Ongenga Industrial Park, Omafo, Ohangwena Region, Namibia.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <section className="pt-12 sm:pt-20 pb-12">
        <div className="mx-auto max-w-6xl px-4">
          <Reveal><span className="tag">Contact</span></Reveal>
          <div className="mt-6 grid gap-10 md:grid-cols-[1.4fr_0.6fr] md:items-end">
            <Reveal delay={0.05}>
              <h1 className="display-1 text-navy">
                Reach <span className="text-gold italic font-500">OTC.</span>
              </h1>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="lead text-navy/80">
                For admissions, partnerships, the Auxiliary Centre, or Sem Hasheela Agricultural
                Campus, use the details below. Admissions is the fastest route for intake questions.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Contact methods + map */}
      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid gap-8 md:grid-cols-[0.9fr_1.1fr] md:items-stretch">
            {/* Methods */}
            <Reveal>
              <div className="flex flex-col gap-4 h-full">
                <a
                  href={`tel:${SITE.phoneHref}`}
                  className="group rounded-2xl border border-navy/10 bg-white p-6 sm:p-7 hover:border-gold/40 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <span className="grid h-10 w-10 place-items-center rounded-full bg-navy text-gold shrink-0">
                      <Phone size={15} strokeWidth={1.6} />
                    </span>
                    <span className="eyebrow text-navy/55">Phone</span>
                  </div>
                  <p className="mt-3 text-[18px] font-700 font-display text-navy group-hover:text-gold transition-colors">
                    {SITE.phone}
                  </p>
                  <p className="mt-1 text-[13px] text-navy/55">Mon–Fri, 08:00–17:00 CAT</p>
                </a>

                <a
                  href={`mailto:${SITE.email}`}
                  className="group rounded-2xl border border-navy/10 bg-white p-6 sm:p-7 hover:border-gold/40 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <span className="grid h-10 w-10 place-items-center rounded-full bg-navy text-gold shrink-0">
                      <Mail size={15} strokeWidth={1.6} />
                    </span>
                    <span className="eyebrow text-navy/55">Email</span>
                  </div>
                  <p className="mt-3 text-[18px] font-700 font-display text-navy group-hover:text-gold transition-colors break-all">
                    {SITE.email}
                  </p>
                  <p className="mt-1 text-[13px] text-navy/55">For admissions, partnerships, general queries.</p>
                </a>

                <div className="rounded-2xl border border-navy/10 bg-white p-6 sm:p-7">
                  <div className="flex items-center gap-3">
                    <span className="grid h-10 w-10 place-items-center rounded-full bg-navy text-gold shrink-0">
                      <MapPin size={15} strokeWidth={1.6} />
                    </span>
                    <span className="eyebrow text-navy/55">Address</span>
                  </div>
                  <address className="not-italic mt-3 text-[16px] font-600 text-navy leading-relaxed">
                    {SITE.address.line1}
                    <br />
                    {SITE.address.line2}
                    <br />
                    {SITE.address.line3}
                  </address>
                </div>

                <div className="rounded-2xl border border-navy/10 bg-paper p-6 sm:p-7">
                  <div className="flex items-center gap-3">
                    <span className="grid h-10 w-10 place-items-center rounded-full bg-navy text-gold shrink-0">
                      <Clock size={15} strokeWidth={1.6} />
                    </span>
                    <span className="eyebrow text-navy/55">Secondary email</span>
                  </div>
                  <p className="mt-3 text-[15px] font-600 text-navy break-all">{SITE.emailSecondary}</p>
                  <p className="mt-1 text-[12.5px] text-navy/55 italic">Use only if the primary email is unavailable.</p>
                </div>
              </div>
            </Reveal>

            {/* Map embed */}
            <Reveal delay={0.08}>
              <div className="bezel h-full">
                <div className="bezel-inner h-full overflow-hidden">
                  <div className="flex items-center justify-between gap-4 border-b border-navy/10 bg-white px-5 py-4">
                    <div>
                      <span className="eyebrow text-navy/55">Find us</span>
                      <p className="mt-1 font-display text-[16px] font-700 text-navy">
                        Ongenga Industrial Park, Omafo
                      </p>
                    </div>
                    <a
                      href="https://www.google.com/maps/search/?api=1&query=Ongenga+Industrial+Park+Omafo+Ohangwena+Namibia"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full bg-navy px-3.5 py-2 text-[12px] font-600 text-white hover:bg-navy-700 transition-colors"
                    >
                      Open in Maps ↗
                    </a>
                  </div>
                  <div className="relative aspect-[4/3] sm:aspect-[16/11] bg-paper">
                    <iframe
                      title="Map showing Ongenga Industrial Park, Omafo, Ohangwena Region, Namibia"
                      src="https://www.openstreetmap.org/export/embed.html?bbox=16.0%2C-17.5%2C16.6%2C-17.2&layer=mapnik&marker=-17.35%2C16.30"
                      className="absolute inset-0 h-full w-full"
                      loading="lazy"
                      style={{ border: 0 }}
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Contact form */}
      <section className="py-12 sm:py-16 bg-paper grain">
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <div className="bezel">
              <div className="bezel-inner p-7 sm:p-10">
                <span className="tag tag-gold-soft">Send a message</span>
                <h2 className="display-3 text-navy mt-5">Quick enquiry form.</h2>
                <p className="mt-3 text-[14.5px] text-navy/65 leading-relaxed">
                  Your message drops straight into the Admissions Office inbox. For anything urgent,
                  call {SITE.phone} during office hours.
                </p>

                <form
                  action={`mailto:${SITE.email}`}
                  method="post"
                  encType="text/plain"
                  className="mt-7 grid gap-4"
                >
                  <div className="grid gap-4 sm:grid-cols-2">
                    <label className="flex flex-col gap-1.5">
                      <span className="eyebrow text-navy/55">Full name</span>
                      <input
                        type="text"
                        name="name"
                        required
                        autoComplete="name"
                        className="rounded-xl border border-navy/15 bg-white px-4 py-3 text-[15px] text-navy placeholder:text-navy/40 focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/40 transition"
                        placeholder="Your name"
                      />
                    </label>
                    <label className="flex flex-col gap-1.5">
                      <span className="eyebrow text-navy/55">Email</span>
                      <input
                        type="email"
                        name="email"
                        required
                        autoComplete="email"
                        className="rounded-xl border border-navy/15 bg-white px-4 py-3 text-[15px] text-navy placeholder:text-navy/40 focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/40 transition"
                        placeholder="you@example.com"
                      />
                    </label>
                  </div>
                  <label className="flex flex-col gap-1.5">
                    <span className="eyebrow text-navy/55">Subject</span>
                    <input
                      type="text"
                      name="subject"
                      required
                      className="rounded-xl border border-navy/15 bg-white px-4 py-3 text-[15px] text-navy placeholder:text-navy/40 focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/40 transition"
                      placeholder="Admissions enquiry"
                    />
                  </label>
                  <label className="flex flex-col gap-1.5">
                    <span className="eyebrow text-navy/55">Message</span>
                    <textarea
                      name="message"
                      rows={5}
                      required
                      className="rounded-xl border border-navy/15 bg-white px-4 py-3 text-[15px] text-navy placeholder:text-navy/40 focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/40 transition resize-y"
                      placeholder="Tell us what you'd like to know, intake dates, fees, course details, partnerships..."
                    />
                  </label>
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <p className="text-[12px] text-navy/55 max-w-xs">
                      Submitting opens your email client. We do not store form data on this site.
                    </p>
                    <button
                      type="submit"
                      className="inline-flex items-center gap-2 rounded-full bg-navy px-5 py-3 text-[13.5px] font-600 text-white hover:bg-navy-700 active:scale-[0.98] transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]"
                    >
                      Send message
                      <span className="grid h-5 w-5 place-items-center rounded-full bg-gold text-navy">↗</span>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
