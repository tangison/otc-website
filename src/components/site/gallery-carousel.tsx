"use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { CarouselSlide } from "@/lib/site";

export type CarouselItem = CarouselSlide;

export default function GalleryCarousel({
  items,
  heightClass = "h-[300px] sm:h-[380px] lg:h-[440px]",
  label = "Photo gallery",
  quality = 60,
}: {
  items: CarouselItem[];
  heightClass?: string;
  label?: string;
  quality?: number;
}) {
  const [emblaRef, embla] = useEmblaCarousel({ loop: true, align: "start" });
  const [selected, setSelected] = useState(0);
  const [snaps, setSnaps] = useState<number[]>([]);

  const onSelect = useCallback(() => {
    if (!embla) return;
    setSnaps(embla.scrollSnapList());
    setSelected(embla.selectedScrollSnap());
  }, [embla]);

  useEffect(() => {
    if (!embla) return;
    // Sync initial snap state outside the effect body (next frame)
    const raf = requestAnimationFrame(() => {
      setSnaps(embla.scrollSnapList());
      setSelected(embla.selectedScrollSnap());
    });
    embla.on("select", onSelect).on("reInit", onSelect);
    return () => {
      cancelAnimationFrame(raf);
      embla.off("select", onSelect).off("reInit", onSelect);
    };
  }, [embla, onSelect]);

  const scrollPrev = () => embla?.scrollPrev();
  const scrollNext = () => embla?.scrollNext();

  return (
    <div role="region" aria-roledescription="carousel" aria-label={label}>
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {items.map((item, i) => (
            <div
              key={item.src}
              className="min-w-0 flex-[0_0_86%] pr-3 sm:flex-[0_0_55%] lg:flex-[0_0_42%]"
              role="group"
              aria-roledescription="slide"
              aria-label={`${i + 1} of ${items.length}`}
            >
              <figure className={`img-frame relative h-full ${heightClass}`}>
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 640px) 86vw, (max-width: 1024px) 55vw, 42vw"
                  quality={quality}
                  className="object-cover"
                />
                {item.caption ? <figcaption className="caption-chip">{item.caption}</figcaption> : null}
              </figure>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-4 flex items-center justify-between gap-4">
        <div className="flex flex-1 gap-1.5" aria-hidden="true">
          {snaps.map((_, i) => (
            <span
              key={i}
              className="h-[3px] flex-1 rounded-full transition-colors"
              style={{ background: i === selected ? "#0e0aae" : "#d9d7ce" }}
            />
          ))}
        </div>
        <div className="flex gap-2">
          <button
            type="button"
            onClick={scrollPrev}
            aria-label="Previous photo"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-otc-navy/25 text-otc-navy transition-colors hover:bg-otc-navy hover:text-white focus-visible-ring"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={scrollNext}
            aria-label="Next photo"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-otc-navy/25 text-otc-navy transition-colors hover:bg-otc-navy hover:text-white focus-visible-ring"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
