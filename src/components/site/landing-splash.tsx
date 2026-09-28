"use client";

import { useEffect, useState } from "react";

// Landing splash: the crest lands, the tagline shows, the curtain lifts.
// Plays once per browser session, never for reduced-motion users, never traps focus.
export default function LandingSplash() {
  const [phase, setPhase] = useState<"idle" | "play" | "done">("idle");

  useEffect(() => {
    const raf = requestAnimationFrame(() => {
      const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      const seen = sessionStorage.getItem("otc-splash");
      if (reduce || seen) {
        setPhase("done");
        return;
      }
      setPhase("play");
      sessionStorage.setItem("otc-splash", "1");
      document.documentElement.classList.add("splash-lock");
    });
    const lift = setTimeout(() => setPhase("done"), 1900);
    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(lift);
      document.documentElement.classList.remove("splash-lock");
    };
  }, []);

  useEffect(() => {
    if (phase === "done") document.documentElement.classList.remove("splash-lock");
  }, [phase]);

  if (phase !== "play") return null;

  return (
    <div className="splash" role="presentation" aria-hidden="true">
      <div className="splash-inner">
        <img src="/icons/icon-128.png" alt="" width={96} height={96} className="splash-crest" />
        <p className="splash-word">Ongenga Technical College</p>
        <p className="splash-tag">Training you can put your hands on</p>
        <span className="splash-rule" aria-hidden="true" />
      </div>
      <div className="splash-curtain" />
    </div>
  );
}
