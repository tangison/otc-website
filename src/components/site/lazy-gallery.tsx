"use client";

import { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import type { CarouselItem } from "./gallery-carousel";

// The embla bundle loads only when the section approaches the viewport
const GalleryCarousel = dynamic(() => import("./gallery-carousel"), {
  ssr: false,
  loading: () => <div className="img-frame h-[300px] sm:h-[380px] lg:h-[440px]" aria-hidden="true" />,
});

export default function LazyGallery({
  items,
  heightClass,
  label,
  quality = 60,
}: {
  items: CarouselItem[];
  heightClass?: string;
  label?: string;
  quality?: number;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setShow(true);
          io.disconnect();
        }
      },
      { rootMargin: "400px 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  if (show) {
    return <GalleryCarousel items={items} heightClass={heightClass} label={label} quality={quality} />;
  }
  return (
    <div ref={ref}>
      <div className={`img-frame ${heightClass ?? "h-[300px] sm:h-[380px] lg:h-[440px]"}`} aria-hidden="true" />
    </div>
  );
}
