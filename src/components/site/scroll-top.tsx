"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

// Floating scroll-to-top control. Appears after the fold, gold on navy,
// transform-only entrance so it never shifts layout.
export default function ScrollTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 640);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      type="button"
      onClick={() => {
        const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" });
      }}
      aria-label="Back to top"
      tabIndex={show ? 0 : -1}
      className={`fixed bottom-5 right-5 z-50 inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-otc-navy-deep text-otc-gold shadow-[0_14px_30px_-12px_rgba(10,8,104,0.6)] transition-[transform,opacity,background-color] duration-300 hover:bg-otc-navy focus-visible-ring ${
        show ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"
      }`}
    >
      <ArrowUp aria-hidden="true" className="h-5 w-5" />
    </button>
  );
}
