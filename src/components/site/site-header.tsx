"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, Clock, LogIn } from "lucide-react";
import { site, nav } from "@/lib/site";

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [docked, setDocked] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setDocked(window.scrollY > 148);
    onScroll();
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
    <header className="relative z-50">
      {/* Line 1: utility strip. Hours left, external portals and phone right */}
      <div className="bg-otc-navy-deep text-white/85">
        <div className="mx-auto flex h-9 max-w-6xl items-center justify-between gap-4 px-4 text-[0.72rem] sm:px-6 sm:text-[0.78rem]">
          <p className="inline-flex items-center gap-1.5 tracking-wide">
            <Clock aria-hidden="true" className="h-3.5 w-3.5 text-otc-gold" />
            <span className="text-white/90">{site.hours}</span>
          </p>
          <div className="flex items-center gap-4">
            {site.portals.map((p) => (
              <a
                key={p.label}
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden items-center gap-1 font-medium tracking-wide transition-colors hover:text-otc-gold focus-visible-ring sm:inline-flex"
              >
                <LogIn aria-hidden="true" className="h-3 w-3" />
                {p.label}
              </a>
            ))}
            <a
              href={`tel:${site.phoneHref}`}
              className="font-medium tracking-wide transition-colors hover:text-otc-gold focus-visible-ring"
            >
              {site.phoneDisplay}
            </a>
          </div>
        </div>
      </div>

      {/* Line 2: the crest alone, no wordmark. Apply action rides on this row */}
      <div className="border-b border-border/70 bg-otc-paper">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
          <Link
            prefetch={false}
            href="/"
            className="flex items-center focus-visible-ring"
            aria-label={`${site.name}, home`}
          >
            <Image
              src="/icons/icon-192.png"
              alt=""
              width={56}
              height={56}
              priority
              className="h-12 w-12 sm:h-14 sm:w-14"
            />
          </Link>
          <div className="flex items-center gap-3">
            <p className="hidden text-right text-[0.72rem] leading-tight text-otc-ink/60 md:block">
              {site.location}
              <span className="block font-medium text-otc-navy">{site.email}</span>
            </p>
            <Link
              prefetch={false}
              href="/admissions"
              className="inline-flex min-h-[44px] items-center rounded-sm bg-otc-navy px-5 text-[0.9rem] font-semibold text-white transition-colors hover:bg-otc-navy-deep focus-visible-ring"
            >
              Apply to OTC
            </Link>
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
      </div>

      {/* Line 3: the main menu, floating on a pill */}
      <div className="bg-otc-paper/80 pb-3 pt-3 backdrop-blur-sm lg:pb-4">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <nav
            aria-label="Primary"
            className="hidden rounded-full border border-border/80 bg-white/90 shadow-[0_10px_30px_-18px_rgba(10,8,104,0.45)] backdrop-blur lg:block"
          >
            <ul className="flex items-center justify-between px-2">
              {nav.map((item) => {
                const active =
                  item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
                return (
                  <li key={item.href} className="flex-1">
                    <Link
                      prefetch={false}
                      href={item.href}
                      aria-current={active ? "page" : undefined}
                      className={`relative flex min-h-[46px] items-center justify-center rounded-full px-4 text-[0.92rem] font-medium transition-colors focus-visible-ring ${
                        active
                          ? "bg-otc-navy text-white"
                          : "text-otc-ink/80 hover:bg-otc-tint hover:text-otc-navy"
                      }`}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
          {/* Mobile breadcrumb of the current page keeps line 3 alive on small screens */}
          <p className="flex items-center gap-2 px-1 text-[0.78rem] font-medium uppercase tracking-[0.14em] text-otc-gold-deep lg:hidden">
            <span aria-hidden="true" className="h-[2px] w-6 bg-otc-gold" />
            {nav.find((n) => (n.href === "/" ? pathname === "/" : pathname.startsWith(n.href)))
              ?.label ?? "Home"}
          </p>
        </div>
      </div>

      {/* Floating dock: the main menu detaches and follows you, gold accent on top */}
      <div
        aria-hidden={!docked || open}
        className={`fixed inset-x-0 top-0 z-50 hidden justify-center px-4 pt-3 transition-[transform,opacity,visibility] duration-300 lg:flex ${
          docked ? "pointer-events-auto translate-y-0 opacity-100" : "pointer-events-none -translate-y-6 opacity-0"
        }`}
        style={{ visibility: docked ? "visible" : "hidden" }}
      >
        <nav
          aria-label="Floating"
          className="w-full max-w-4xl overflow-hidden rounded-full border border-border/80 bg-otc-paper/95 shadow-[0_18px_40px_-20px_rgba(10,8,104,0.5)] backdrop-blur"
        >
          <div className="h-[3px] w-full bg-otc-gold" aria-hidden="true" />
          <ul className="flex items-center px-2 py-1.5">
            {nav.map((item) => {
              const active =
                item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
              return (
                <li key={item.href} className="flex-1">
                  <Link
                    prefetch={false}
                    href={item.href}
                    tabIndex={docked && !open ? 0 : -1}
                    aria-current={active ? "page" : undefined}
                    className={`flex min-h-[40px] items-center justify-center rounded-full px-3 text-[0.85rem] font-medium transition-colors focus-visible-ring ${
                      active ? "bg-otc-navy text-white" : "text-otc-ink/80 hover:bg-otc-tint hover:text-otc-navy"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
            <li className="pl-1">
              <Link
                prefetch={false}
                href="/admissions"
                tabIndex={docked && !open ? 0 : -1}
                className="ml-1 inline-flex min-h-[38px] items-center rounded-full bg-otc-gold px-4 text-[0.85rem] font-semibold text-otc-ink transition-colors hover:bg-[#c09a15] focus-visible-ring"
              >
                Apply
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      {/* Mobile nav panel: full screen, own header row, works at any scroll position */}
      <div
        id="mobile-nav"
        className={`fixed inset-0 z-[60] bg-otc-paper lg:hidden ${
          open ? "pointer-events-auto" : "pointer-events-none"
        }`}
        style={{ opacity: open ? 1 : 0, transition: "opacity 0.25s ease" }}
        aria-hidden={!open}
      >
        <div className="flex items-center justify-between border-b border-border/70 px-4 py-3">
          <Link
            prefetch={false}
            href="/"
            tabIndex={open ? 0 : -1}
            onClick={() => setOpen(false)}
            className="flex items-center focus-visible-ring"
            aria-label={`${site.name}, home`}
          >
            <img src="/icons/icon-128.png" alt="" width={44} height={44} className="h-11 w-11" />
          </Link>
          <button
            type="button"
            onClick={() => setOpen(false)}
            tabIndex={open ? 0 : -1}
            aria-label="Close menu"
            className="inline-flex h-11 w-11 items-center justify-center rounded-sm text-otc-navy focus-visible-ring"
          >
            <X className="h-6 w-6" />
          </button>
        </div>
        <nav aria-label="Mobile" className="h-[calc(100%-73px)] overflow-y-auto overscroll-contain px-6 py-6">
          <ul className="space-y-1">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  prefetch={false}
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
          <div className="mt-8 space-y-2 text-sm">
            {site.portals.map((p) => (
              <a
                key={p.label}
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
                tabIndex={open ? 0 : -1}
                className="block font-medium text-otc-navy focus-visible-ring"
              >
                {p.label} portal
              </a>
            ))}
          </div>
          <div className="mt-8 space-y-1 text-sm text-otc-ink/70">
            <p className="inline-flex items-center gap-1.5">
              <Clock aria-hidden="true" className="h-3.5 w-3.5 text-otc-gold-deep" />
              {site.hours}
            </p>
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
