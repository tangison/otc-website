import Link from "next/link";
import { CTA } from "@/components/cta";
import { Reveal } from "@/components/reveal";

export default function NotFound() {
  return (
    <section className="pt-20 pb-20 sm:pt-32 sm:pb-32">
      <div className="mx-auto max-w-3xl px-4 text-center">
        <Reveal>
          <span className="tag">404</span>
        </Reveal>
        <Reveal delay={0.05}>
          <p className="display-1 text-navy mt-6">
            <span className="text-gold italic font-500">Page</span> not found.
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="lead text-navy/75 mt-6 max-w-xl mx-auto">
            The page you were looking for may have been moved, renamed, or never existed. Try the
            navigation, or head back home and start again.
          </p>
        </Reveal>
        <Reveal delay={0.15}>
          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <CTA href="/" variant="navy">Back home</CTA>
            <CTA href="/programs" variant="outline">View programs</CTA>
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="mt-12 flex flex-wrap justify-center gap-3 text-[13px] text-navy/55">
            <Link href="/about" className="link-reveal hover:text-navy transition-colors">About</Link>
            <span aria-hidden>·</span>
            <Link href="/apply" className="link-reveal hover:text-navy transition-colors">Admissions</Link>
            <span aria-hidden>·</span>
            <Link href="/contact" className="link-reveal hover:text-navy transition-colors">Contact</Link>
            <span aria-hidden>·</span>
            <Link href="/privacy" className="link-reveal hover:text-navy transition-colors">Privacy</Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
