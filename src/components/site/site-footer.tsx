import Link from "next/link";
import Image from "next/image";
import { NAV, SITE } from "@/lib/site";

export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-auto bg-navy text-white">
      <div className="mx-auto grid max-w-[1440px] gap-12 px-5 py-16 md:grid-cols-[1.4fr_1fr_1fr] md:px-10 md:py-20">
        <div>
          <div className="flex items-center gap-4">
            <Image
              src="/images/otc-crest.png"
              alt=""
              width={64}
              height={64}
              className="h-16 w-16 object-contain"
            />
            <div>
              <p className="font-display text-xl font-semibold tracking-tight">
                Ongenga Technical College
              </p>
              <p className="text-sm text-white/70">{SITE.tagline}</p>
            </div>
          </div>
          <p className="mt-6 max-w-sm text-sm leading-relaxed text-white/75">
            A private technical and vocational training institution in the Ohangwena
            Region, trading under {SITE.parent}. Established {SITE.founded}.
          </p>
        </div>

        <nav aria-label="Footer">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold">
            Explore
          </p>
          <ul className="mt-4 space-y-1">
            {NAV.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="inline-flex min-h-[40px] items-center text-[15px] text-white/85 underline-offset-4 transition-colors hover:text-gold hover:underline"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold">
            Reach us
          </p>
          <address className="mt-4 space-y-3 text-[15px] not-italic leading-relaxed text-white/85">
            <p>{SITE.address}</p>
            <p>
              <a
                href={SITE.phoneHref}
                className="underline-offset-4 transition-colors hover:text-gold hover:underline"
              >
                {SITE.phone}
              </a>
            </p>
            <p>
              <a
                href={`mailto:${SITE.email}`}
                className="underline-offset-4 transition-colors hover:text-gold hover:underline"
              >
                {SITE.email}
              </a>
            </p>
          </address>
        </div>
      </div>

      <div className="border-t border-white/15">
        <div className="mx-auto flex max-w-[1440px] flex-col gap-2 px-5 py-6 text-[13px] text-white/60 sm:flex-row sm:items-center sm:justify-between md:px-10">
          <p>
            &copy; {year} Ongenga Technical College. A member institution of{" "}
            {SITE.parent}.
          </p>
          <Link
            href="/privacy"
            className="underline-offset-4 transition-colors hover:text-gold hover:underline"
          >
            Privacy policy
          </Link>
        </div>
      </div>
    </footer>
  );
}
