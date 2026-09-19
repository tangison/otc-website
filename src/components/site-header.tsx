"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { NAV, SITE } from "@/lib/otc";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export function SiteHeader() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    // Close mobile menu on route change
    if (open) setOpen(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <header className="sticky top-0 z-40 w-full">
      <div
        className={`mx-auto max-w-6xl px-4 transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${
          scrolled ? "pt-3" : "pt-5"
        }`}
      >
        <div
          className={`flex items-center justify-between gap-3 rounded-full border border-navy/10 bg-white/85 backdrop-blur-xl transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${
            scrolled ? "py-2 pl-3 pr-2 shadow-[0_18px_36px_-22px_rgba(1,0,127,0.35)]" : "py-2.5 pl-3 pr-2"
          }`}
        >
          <Link href="/" className="flex items-center gap-2.5" aria-label={`${SITE.name} home`}>
            <span className="relative h-10 w-10 shrink-0">
              <Image
                src="/images/otc-logo.png"
                alt="Ongenga Technical College crest"
                fill
                sizes="40px"
                priority
                className="object-contain"
              />
            </span>
            <span className="hidden sm:flex flex-col leading-none">
              <span className="font-display text-[15px] font-700 tracking-tight text-navy">Ongenga</span>
              <span className="font-display text-[11px] font-500 uppercase tracking-[0.18em] text-navy/60">
                Technical College
              </span>
            </span>
          </Link>

          <nav aria-label="Primary" className="hidden md:flex items-center gap-1">
            {NAV.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={`relative px-3.5 py-2 rounded-full text-[13.5px] font-500 transition-colors duration-300 ${
                    active ? "text-navy" : "text-navy/70 hover:text-navy"
                  }`}
                >
                  {active && (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute inset-0 -z-10 rounded-full bg-gold/15 ring-1 ring-gold/40"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            <Link
              href="/apply"
              className="hidden md:inline-flex items-center gap-2 rounded-full bg-gold px-4 py-2.5 text-[13.5px] font-700 text-navy transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:bg-gold-soft active:scale-[0.98]"
            >
              Apply
              <span className="grid h-5 w-5 place-items-center rounded-full bg-navy text-gold">
                <span aria-hidden className="block text-[10px] leading-none -translate-y-[1px]">↗</span>
              </span>
            </Link>
            <button
              type="button"
              className="md:hidden grid h-10 w-10 place-items-center rounded-full text-navy hover:bg-navy/5 transition"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X size={20} strokeWidth={1.5} /> : <Menu size={20} strokeWidth={1.5} />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.32, 0.72, 0, 1] }}
            className="md:hidden fixed inset-0 top-0 z-[-1] bg-white/95 backdrop-blur-2xl"
          >
            <div className="flex h-full flex-col justify-center gap-1 px-8">
              {NAV.map((item, i) => {
                const active = pathname === item.href;
                return (
                  <motion.div
                    key={item.href}
                    initial={{ y: 28, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.06 + i * 0.05, duration: 0.55, ease: [0.32, 0.72, 0, 1] }}
                  >
                    <Link
                      href={item.href}
                      className={`flex items-baseline justify-between border-b border-navy/10 py-5 font-display text-3xl font-700 ${
                        active ? "text-navy" : "text-navy/70"
                      }`}
                    >
                      <span>{item.label}</span>
                      <span className="mono text-[11px] text-navy/40">0{i + 1}</span>
                    </Link>
                  </motion.div>
                );
              })}
              <motion.div
                initial={{ y: 24, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.55, ease: [0.32, 0.72, 0, 1] }}
                className="mt-10"
              >
                <Link
                  href="/apply"
                  className="inline-flex items-center gap-3 rounded-full bg-navy px-6 py-4 text-base font-600 text-white"
                >
                  Apply to OTC
                  <span className="grid h-6 w-6 place-items-center rounded-full bg-gold text-navy">↗</span>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
