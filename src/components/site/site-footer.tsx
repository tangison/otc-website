import Link from "next/link";
import { site, nav } from "@/lib/site";

export default function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-auto bg-otc-navy-deep text-white">
      <div className="h-1 w-full bg-otc-gold" aria-hidden="true" />
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div>
            <p className="font-display text-xl font-semibold tracking-tight">
              {site.name}
            </p>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-white/70">
              {site.positioning}
            </p>
            <p className="mt-4 text-sm text-white/70">
              {site.location}
            </p>
          </div>

          <nav aria-label="Footer: site">
            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-otc-gold">
              Study
            </p>
            <ul className="mt-4 space-y-2.5 text-sm">
              {nav.slice(1).map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-white/80 transition-colors hover:text-white">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Footer: college">
            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-otc-gold">
              College
            </p>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <Link href="/brand" className="text-white/80 transition-colors hover:text-white">
                  Brand
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="text-white/80 transition-colors hover:text-white">
                  Privacy policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-white/80 transition-colors hover:text-white">
                  Terms of use
                </Link>
              </li>
              <li>
                <a
                  href={site.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/80 transition-colors hover:text-white"
                >
                  Facebook
                </a>
              </li>
            </ul>
          </nav>

          <div>
            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-otc-gold">
              Contact
            </p>
            <ul className="mt-4 space-y-2.5 text-sm text-white/80">
              <li>
                <a href={`tel:${site.phoneHref}`} className="transition-colors hover:text-white">
                  {site.phoneDisplay}
                </a>
              </li>
              <li>
                <a href={`mailto:${site.email}`} className="break-all transition-colors hover:text-white">
                  {site.email}
                </a>
              </li>
              <li>Admissions: 2+ intakes a year</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/15 pt-6 text-xs text-white/60 sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} {site.name}. All rights reserved.</p>
          <p>
            Made by{" "}
            <a
              href={site.studio}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-white/85 underline-offset-4 hover:text-white hover:underline"
            >
              Tangison Studio
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
