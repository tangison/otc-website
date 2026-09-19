import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

type HeroProps = {
  image: string;
  alt: string;
  title: string;
  lead?: string;
  priority?: boolean;
  size?: "full" | "page";
  children?: React.ReactNode;
  className?: string;
};

/**
 * Full-bleed photographic hero with a navy scrim.
 * Text is left aligned on purpose; the image carries the moment.
 */
export function PageHero({
  image,
  alt,
  title,
  lead,
  priority = false,
  size = "page",
  children,
  className,
}: HeroProps) {
  return (
    <section
      className={cn(
        "hero-media relative isolate flex items-end overflow-hidden bg-navy",
        size === "full" ? "min-h-[88dvh]" : "min-h-[56dvh] md:min-h-[62dvh]",
        className
      )}
      aria-labelledby="hero-heading"
    >
      <Image
        src={image}
        alt={alt}
        fill
        priority={priority}
        sizes="100vw"
        className="object-cover"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-navy/20"
      />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-3/4 bg-gradient-to-t from-navy/90 via-navy/45 to-transparent"
      />
      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-5 pb-14 pt-32 md:px-10 md:pb-20">
        <h1
          id="hero-heading"
          className="max-w-3xl font-display text-[2.6rem] font-semibold leading-[1.02] tracking-[-0.02em] text-white md:text-6xl lg:text-7xl"
        >
          {title}
        </h1>
        {lead ? (
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-white/85 md:text-xl">
            {lead}
          </p>
        ) : null}
        {children ? <div className="mt-8">{children}</div> : null}
      </div>
    </section>
  );
}

export function HeroCtas() {
  return (
    <div className="flex flex-wrap items-center gap-4">
      <Link
        href="/admissions"
        className="press inline-flex min-h-[52px] items-center rounded-full bg-gold px-8 text-base font-semibold text-navy shadow-[0_24px_48px_-20px_rgba(0,0,0,0.5)] transition-colors hover:bg-gold-soft"
      >
        Apply to OTC
      </Link>
      <Link
        href="/programs"
        className="press inline-flex min-h-[52px] items-center rounded-full border border-white/40 px-8 text-base font-medium text-white transition-colors hover:border-gold hover:text-gold"
      >
        Explore programs
      </Link>
    </div>
  );
}
