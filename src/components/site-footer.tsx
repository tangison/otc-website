import Link from "next/link";
import Image from "next/image";
import { NAV, SITE } from "@/lib/otc";

export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-auto navy-texture text-white">
      {/* gold hairline top */}
      <div className="h-px w-full bg-gold/40" />
      <div className="mx-auto max-w-6xl px-4 py-16 sm:py-20">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          {/* Brand */}
          <div className="flex flex-col gap-6">
            <Link href="/" className="flex items-center gap-3">
              <span className="relative h-14 w-14">
                <Image src="/images/otc-logo.png" alt="OTC crest" fill sizes="56px" className="object-contain" />
              </span>
              <span className="flex flex-col leading-tight">
                <span className="font-display text-lg font-700">Ongenga Technical College</span>
                <span className="font-display text-[11px] uppercase tracking-[0.18em] text-gold">{SITE.tagline}</span>
              </span>
            </Link>
            <p className="max-w-sm text-sm leading-relaxed text-white/70">
              A privately-owned Namibian TVET institution in Ohangwena Region, trading under {SITE.parentCompany}. Founded {SITE.founded}.
            </p>
            <div className="flex flex-wrap gap-2">
              <a href={`tel:${SITE.phoneHref}`} className="rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs font-500 text-white/85 transition hover:bg-white/10 hover:border-gold/50">
                {SITE.phone}
              </a>
              <a href={`mailto:${SITE.email}`} className="rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs font-500 text-white/85 transition hover:bg-white/10 hover:border-gold/50">
                {SITE.email}
              </a>
            </div>
          </div>

          {/* Sitemap */}
          <div>
            <h3 className="eyebrow text-gold/90 mb-4">Explore</h3>
            <ul className="flex flex-col gap-2.5 text-sm">
              {NAV.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-white/70 hover:text-white transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/privacy" className="text-white/70 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h3 className="eyebrow text-gold/90 mb-4">Programs</h3>
            <ul className="flex flex-col gap-2.5 text-sm">
              <li><Link href="/programs" className="text-white/70 hover:text-white transition">Full-time NVC courses</Link></li>
              <li><Link href="/programs#short" className="text-white/70 hover:text-white transition">Short courses</Link></li>
              <li><Link href="/units#hasheela" className="text-white/70 hover:text-white transition">Sem Hasheela campus</Link></li>
              <li><Link href="/apply" className="text-white/70 hover:text-white transition">Admissions</Link></li>
            </ul>
          </div>

          {/* Address */}
          <div>
            <h3 className="eyebrow text-gold/90 mb-4">Visit</h3>
            <address className="not-italic text-sm leading-relaxed text-white/70 space-y-1">
              <div>{SITE.address.line1}</div>
              <div>{SITE.address.line2}</div>
              <div>{SITE.address.line3}</div>
            </address>
            <div className="mt-4 flex flex-col gap-1.5 text-sm">
              <a href={`tel:${SITE.phoneHref}`} className="text-white/70 hover:text-white transition">{SITE.phone}</a>
              <a href={`mailto:${SITE.email}`} className="text-white/70 hover:text-white transition">{SITE.email}</a>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-t border-white/10 pt-6 text-xs text-white/55">
          <p>© {year} {SITE.name}. Trading under {SITE.parentCompany}.</p>
          <div className="flex items-center gap-4">
            <span className="mono uppercase tracking-widest text-white/40">Ohangwena · Namibia</span>
            <a href="/sitemap.xml" className="hover:text-white transition">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
