import Link from "next/link";
import { site } from "@/lib/site";

export default function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-auto bg-otc-navy-deep text-white">
      <div className="h-1 w-full bg-otc-gold" aria-hidden="true" />
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        {/* Crest and one line of identity, nothing more */}
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-4">
            <img
              src="/icons/logo-dark-512.png"
              alt=""
              width={64}
              height={64}
              loading="lazy"
              className="h-14 w-auto rounded-sm bg-white/95 p-1"
            />
            <div>
              <p className="font-display text-lg font-semibold tracking-tight">{site.name}</p>
              <p className="text-xs text-white/60">{site.location}</p>
            </div>
          </div>
          <div className="text-sm text-white/75 sm:text-right">
            <p>
              <a href={`tel:${site.phoneHref}`} className="transition-colors hover:text-white focus-visible-ring">
                {site.phoneDisplay}
              </a>
              <span aria-hidden="true" className="mx-2 text-white/30">
                |
              </span>
              <a href={`mailto:${site.email}`} className="transition-colors hover:text-white focus-visible-ring">
                {site.email}
              </a>
            </p>
            <p className="mt-1">
              <a
                href={site.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-white focus-visible-ring"
              >
                Facebook
              </a>
            </p>
          </div>
        </div>

        {/* Page-based menu, one row */}
        <nav aria-label="Footer" className="mt-7 border-t border-white/10 pt-5">
          <ul className="flex flex-wrap items-center gap-x-6 gap-y-2 text-[0.82rem] text-white/70">
            {[
              { href: "/", label: "Home" },
              { href: "/programmes", label: "Programmes" },
              { href: "/about", label: "About" },
              { href: "/alumni", label: "Alumni" },
              { href: "/admissions", label: "Admissions" },
              { href: "/partners", label: "Partners" },
              { href: "/contact", label: "Contact" },
              { href: "/privacy-policy", label: "Privacy" },
              { href: "/terms", label: "Terms" },
              { href: "/brand", label: "Brand" },
            ].map((item) => (
              <li key={item.href}>
                <Link
                  prefetch={false}
                  href={item.href}
                  className="transition-colors hover:text-white focus-visible-ring"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="mt-6 flex flex-col gap-2 border-t border-white/10 pt-5 text-xs text-white/55 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {site.name}. All rights reserved.
          </p>
          <p>
            Made by{" "}
            <a
              href={site.studio}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-white/85 underline-offset-4 hover:text-white hover:underline focus-visible-ring"
            >
              Tangison Studio
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
