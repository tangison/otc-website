import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { NAV } from "@/lib/site";

export const metadata: Metadata = {
  title: "Page Not Found",
  description: "The page you were looking for does not exist on the OTC website.",
};

export default function NotFound() {
  return (
    <section className="relative isolate flex min-h-[80dvh] items-center overflow-hidden bg-navy">
      <Image
        src="/images/detail-tools.webp"
        alt=""
        fill
        sizes="100vw"
        className="object-cover opacity-60"
        priority
      />
      <div aria-hidden="true" className="absolute inset-0 bg-navy/40" />
      <div className="relative mx-auto w-full max-w-[1200px] px-5 py-24 md:px-10">
        <p className="font-display text-7xl font-semibold tracking-tight text-gold md:text-8xl">
          404
        </p>
        <h1 className="mt-4 max-w-2xl font-display text-4xl font-semibold leading-[1.05] tracking-[-0.02em] text-white md:text-5xl">
          That page is not on the shelf
        </h1>
        <p className="mt-4 max-w-lg text-lg text-white/75">
          The address may be mistyped, or the page moved. The workshop is still
          open: start from the home page or go straight to programs.
        </p>
        <div className="mt-9 flex flex-wrap gap-4">
          <Link
            href="/"
            className="press inline-flex min-h-[52px] items-center rounded-full bg-gold px-8 text-base font-semibold text-navy transition-colors hover:bg-gold-soft"
          >
            Home
          </Link>
          <Link
            href="/programs"
            className="press inline-flex min-h-[52px] items-center rounded-full border border-white/40 px-8 text-base font-medium text-white transition-colors hover:border-gold hover:text-gold"
          >
            Programs
          </Link>
        </div>
        <nav aria-label="Site" className="mt-14 flex flex-wrap gap-x-6 gap-y-3 border-t border-white/15 pt-8">
          {NAV.filter((n) => n.href !== "/").map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-white/70 underline-offset-4 transition-colors hover:text-gold hover:underline"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </section>
  );
}
