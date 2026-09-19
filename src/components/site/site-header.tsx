"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { NAV, SITE } from "@/lib/site";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b bg-paper/95 backdrop-blur-sm transition-shadow",
        scrolled ? "border-border shadow-[0_10px_30px_-18px_rgba(1,0,127,0.25)]" : "border-transparent"
      )}
    >
      <div className="mx-auto flex h-20 max-w-[1440px] items-center justify-between gap-6 px-5 md:px-10">
        <Link
          href="/"
          className="group flex min-h-[44px] items-center gap-3"
          aria-label="Ongenga Technical College, home"
        >
          <Image
            src="/images/otc-crest.png"
            alt=""
            width={44}
            height={44}
            className="h-11 w-11 shrink-0 object-contain"
            priority
          />
          <span className="leading-tight">
            <span className="block font-display text-lg font-semibold tracking-tight text-navy">
              Ongenga Technical College
            </span>
            <span className="hidden text-[11px] font-medium uppercase tracking-[0.14em] text-muted-foreground sm:block">
              Nurturing the Masters of Value Addition
            </span>
          </span>
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-1 lg:flex">
          {NAV.map((item) => {
            const active =
              item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "press rounded-full px-4 py-2.5 text-[15px] font-medium transition-colors",
                  active
                    ? "bg-navy text-white"
                    : "text-foreground/80 hover:bg-navy/5 hover:text-navy"
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <Button
            asChild
            className="press hidden rounded-full bg-gold px-6 font-semibold text-navy hover:bg-gold-soft sm:inline-flex"
          >
            <Link href="/admissions">Apply</Link>
          </Button>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger
              aria-label="Open menu"
              className="press inline-flex h-11 w-11 items-center justify-center rounded-full border border-border text-navy lg:hidden"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
                <path d="M4 7h16M4 12h16M4 17h16" />
              </svg>
            </SheetTrigger>
            <SheetContent side="right" className="w-[85vw] max-w-sm bg-paper p-0">
              <SheetTitle className="sr-only">Site menu</SheetTitle>
              <div className="flex h-full flex-col">
                <div className="flex items-center gap-3 border-b border-border px-6 py-5">
                  <Image
                    src="/images/otc-crest.png"
                    alt=""
                    width={40}
                    height={40}
                    className="h-10 w-10 object-contain"
                  />
                  <span className="font-display text-base font-semibold text-navy">
                    Ongenga Technical College
                  </span>
                </div>
                <nav aria-label="Mobile" className="flex-1 overflow-y-auto px-3 py-4">
                  {NAV.map((item) => {
                    const active =
                      item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setOpen(false)}
                        aria-current={active ? "page" : undefined}
                        className={cn(
                          "mb-1 flex min-h-[52px] items-center rounded-2xl px-5 text-lg font-medium",
                          active ? "bg-navy text-white" : "text-foreground hover:bg-navy/5"
                        )}
                      >
                        {item.label}
                      </Link>
                    );
                  })}
                </nav>
                <div className="border-t border-border p-5">
                  <Button
                    asChild
                    className="press w-full rounded-full bg-gold py-6 text-base font-semibold text-navy hover:bg-gold-soft"
                  >
                    <Link href="/admissions" onClick={() => setOpen(false)}>
                      Apply to OTC
                    </Link>
                  </Button>
                  <a
                    href={SITE.phoneHref}
                    className="mt-4 block text-center text-sm font-medium text-muted-foreground underline-offset-4 hover:text-navy hover:underline"
                  >
                    {SITE.phone}
                  </a>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
