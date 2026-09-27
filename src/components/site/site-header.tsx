"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { site, nav } from "@/lib/site";

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile panel and lock background scroll while it is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50">
      {/* Brand bar: 4px gold accent sampled from the crest, CLS 0 */}
      <div className="h-1 w-full bg-otc-gold" aria-hidden="true" />
      <div
        className={`bg-otc-paper/95 backdrop-blur-sm transition-shadow ${
          scrolled ? "shadow-[0_1px_0_#e2e0d8,0_8px_24px_-16px_rgba(10,8,104,0.25)]" : ""
        }`}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
          <Link prefetch={false}
            href="/"
            className="flex items-center gap-3 py-3 focus-visible-ring"
            aria-label={`${site.name}, home`}
          >
            <img
              src="/icons/icon-192.png"
              alt=""
              width={40}
              height={40}
              className="h-10 w-10 rounded-sm"
            />
            <span className="leading-tight">
              <span className="block font-display text-[1.05rem] font-semibold tracking-tight text-otc-navy">
                Ongenga Technical College
              </span>
              <span className="block text-[0.68rem] uppercase tracking-[0.14em] text-otc-gold-deep">
                Ongenga, Ohangwena Region
              </span>
            </span>
          </Link>

          <nav aria-label="Primary" className="hidden lg:block">
            <ul className="flex items-center gap-7">
              {nav.map((item) => {
                const active =
                  item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
                return (
                  <li key={item.href}>
                    <Link prefetch={false}
                      href={item.href}
                      aria-current={active ? "page" : undefined}
                      className={`link-underline py-2 text-[0.95rem] font-medium focus-visible-ring ${
                        active ? "text-otc-navy underline-offset-4" : "text-otc-ink/80 hover:text-otc-navy"
                      }`}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
              <li>
                <Link prefetch={false}
                  href="/admissions"
                  className="inline-flex min-h-[44px] items-center rounded-sm bg-otc-navy px-5 text-[0.95rem] font-semibold text-white transition-colors hover:bg-otc-navy-deep focus-visible-ring"
                >
                  Apply to OTC
                </Link>
              </li>
            </ul>
          </nav>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            className="inline-flex h-11 w-11 items-center justify-center rounded-sm text-otc-navy lg:hidden focus-visible-ring"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile nav panel */}
      <div
        id="mobile-nav"
        className={`fixed inset-x-0 bottom-0 top-[69px] z-40 bg-otc-paper lg:hidden ${
          open ? "pointer-events-auto" : "pointer-events-none"
        }`}
        style={{ opacity: open ? 1 : 0, transition: "opacity 0.25s ease" }}
        aria-hidden={!open}
      >
        <nav aria-label="Mobile" className="h-full overflow-y-auto px-6 py-8">
          <ul className="space-y-1">
            {nav.map((item) => (
              <li key={item.href}>
                <Link prefetch={false}
                  href={item.href}
                  tabIndex={open ? 0 : -1}
                  onClick={() => setOpen(false)}
                  className="block border-b border-border/70 py-4 font-display text-2xl font-medium text-otc-navy focus-visible-ring"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link prefetch={false}
            href="/admissions"
            tabIndex={open ? 0 : -1}
            onClick={() => setOpen(false)}
            className="mt-8 inline-flex min-h-[48px] w-full items-center justify-center rounded-sm bg-otc-navy px-6 text-base font-semibold text-white focus-visible-ring"
          >
            Apply to OTC
          </Link>
          <div className="mt-10 space-y-1 text-sm text-otc-ink/70">
            <p>{site.location}</p>
            <p>
              <a href={`tel:${site.phoneHref}`} tabIndex={open ? 0 : -1} className="focus-visible-ring">
                {site.phoneDisplay}
              </a>
            </p>
            <p>
              <a href={`mailto:${site.email}`} tabIndex={open ? 0 : -1} className="focus-visible-ring">
                {site.email}
              </a>
            </p>
          </div>
        </nav>
      </div>
    </header>
  );
}
