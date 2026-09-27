"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";

export type Slide = { src: string; alt: string; caption: string };

export default function HeroCarousel({
  slides,
  aspect = "aspect-[4/5] sm:aspect-[5/6] lg:aspect-[4/5]",
}: {
  slides: Slide[];
  aspect?: string;
}) {
  const [active, setActive] = useState(0);
  const [visited, setVisited] = useState<Set<number>>(() => new Set([0]));
  const pausedRef = useRef(false);
  const reduceRef = useRef(false);

  useEffect(() => {
    reduceRef.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }, []);

  // Slide state updates always mark the slide as visited so it mounts
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

  useEffect(() => {
    if (reduceRef.current) return;
    const t = setInterval(() => {
      if (!pausedRef.current) next();
    }, 5200);
    return () => clearInterval(t);
  }, [next]);

  return (
    <div
      className={`img-frame relative ${aspect}`}
      onMouseEnter={() => (pausedRef.current = true)}
      onMouseLeave={() => (pausedRef.current = false)}
      onFocus={() => (pausedRef.current = true)}
      onBlur={() => (pausedRef.current = false)}
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
              className="object-cover"
            />
          ) : null}
        </div>
      ))}
      <p className="caption-chip">{slides[active].caption}</p>

      <div className="absolute bottom-3 right-3 z-10 flex gap-1.5">
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
    </div>
  );
}
