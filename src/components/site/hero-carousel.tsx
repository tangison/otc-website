"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";

export type Slide = { src: string; alt: string; caption: string };

// Hero carousel: crossfade slides with a slow Ken Burns drift, an 8s gold
// progress line, a photo counter and caption chip. Autoplay pauses on hover and
// for reduced-motion users.
export default function HeroCarousel({
  slides,
  aspect = "aspect-[4/5] sm:aspect-[5/6] lg:aspect-[4/5]",
}: {
  slides: Slide[];
  aspect?: string;
}) {
  const [active, setActive] = useState(0);
  const [visited, setVisited] = useState<Set<number>>(() => new Set([0]));
  const [paused, setPaused] = useState(false);
  const [userPaused, setUserPaused] = useState(false);
  const [reduce, setReduce] = useState(false);

  useEffect(() => {
    // Read the media query outside the render pass (next frame)
    const raf = requestAnimationFrame(() => {
      setReduce(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
    });
    return () => cancelAnimationFrame(raf);
  }, []);

  const goTo = useCallback((i: number) => {
    setActive(i);
    setVisited((v) => (v.has(i) ? v : new Set(v).add(i)));
  }, []);
  const next = useCallback(() => {
    setActive((a) => {
      const n = (a + 1) % slides.length;
      setVisited((v) => (v.has(n) ? v : new Set(v).add(n)));
      return n;
    });
  }, [slides.length]);

  const frozen = paused || userPaused;

  useEffect(() => {
    if (reduce) return;
    const t = setInterval(() => {
      if (!frozen) next();
    }, 8000);
    return () => clearInterval(t);
  }, [next, frozen, reduce]);

  return (
    <div
      className={`img-frame relative ${aspect}`}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      {slides.map((s, i) => (
        <div key={s.src} className={`hero-slide absolute inset-0 ${i === active ? "is-active" : ""}`} aria-hidden={i !== active}>
          {visited.has(i) ? (
            <Image
              src={s.src}
              alt={i === active ? s.alt : ""}
              fill
              priority={i === 0}
              sizes="(max-width: 1024px) 100vw, 44vw"
              className={`object-cover ${i === active && !reduce ? "kenburns" : ""}`}
            />
          ) : null}
        </div>
      ))}
      {/* Legibility scrim keeps the caption readable on bright photos */}
      <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-otc-ink/55 to-transparent" />
      <p className="caption-chip">{slides[active].caption}</p>

      <p className="absolute right-3 top-3 z-10 rounded-full bg-otc-navy-deep/80 px-2.5 py-1 text-[0.72rem] font-semibold tabular-nums text-white">
        {String(active + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
      </p>

      <div className="absolute bottom-3 right-3 z-10 flex items-center gap-1.5">
        <button
          type="button"
          onClick={() => setUserPaused((v) => !v)}
          aria-label={userPaused ? "Play photo slideshow" : "Pause photo slideshow"}
          aria-pressed={userPaused}
          className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-white/70 bg-otc-navy-deep/60 text-white transition-colors hover:bg-otc-navy-deep focus-visible-ring"
        >
          {userPaused ? (
            <svg width="10" height="10" viewBox="0 0 10 10" aria-hidden="true" fill="currentColor"><path d="M2 1l7 4-7 4z" /></svg>
          ) : (
            <svg width="10" height="10" viewBox="0 0 10 10" aria-hidden="true" fill="currentColor"><path d="M2 1h2.4v8H2zM5.6 1H8v8H5.6z" /></svg>
          )}
        </button>
        {slides.map((s, i) => (
          <button
            key={s.src}
            type="button"
            onClick={() => goTo(i)}
            aria-label={`Show photo ${i + 1} of ${slides.length}: ${s.caption}`}
            aria-current={i === active}
            className="h-2.5 w-2.5 rounded-full border border-white/70 transition-colors focus-visible-ring"
            style={{ background: i === active ? "#d6ad1b" : "rgba(255,255,255,0.35)" }}
          />
        ))}
      </div>

      {/* Pace line: drains over the 8 seconds between slides */}
      {!reduce && (
        <div aria-hidden="true" className="absolute inset-x-0 top-0 z-10 h-[3px] bg-white/25">
          <div
            key={`${active}-${frozen}`}
            className="h-full bg-otc-gold"
            style={{
              animation: frozen ? "none" : "hero-pace 8s linear forwards",
              width: frozen ? "0%" : undefined,
            }}
          />
        </div>
      )}
    </div>
  );
}
