import Image from "next/image";
import Reveal from "./reveal";

export default function PageHero({
  image,
  alt,
  caption,
  title,
  lede,
  priority = true,
}: {
  image: string;
  alt: string;
  caption: string;
  title: string;
  lede: string;
  priority?: boolean;
}) {
  return (
    <section className="border-b border-border bg-otc-paper">
      <div className="mx-auto grid max-w-6xl items-center gap-8 px-4 pb-12 pt-10 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14 lg:pb-16 lg:pt-16">
        <Reveal>
          <span aria-hidden="true" className="block h-[3px] w-14 bg-otc-gold" />
          <h1 className="display-1 mt-5 text-otc-navy">{title}</h1>
          <p className="lede mt-5 max-w-xl">{lede}</p>
        </Reveal>
        <Reveal delay={120}>
          <div className="img-frame relative aspect-[4/3] lg:aspect-[5/4]">
            <Image
              src={image}
              alt={alt}
              fill
              priority={priority}
              sizes="(max-width: 1024px) 100vw, 46vw"
              className="object-cover"
            />
            <p className="caption-chip">{caption}</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
