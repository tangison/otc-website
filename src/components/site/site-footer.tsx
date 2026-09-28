import Link from "next/link";
import Image from "next/image";
import Reveal from "@/components/site/reveal";
import { site } from "@/lib/site";

export default function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-auto">
      {/* Navy block: page menu and contact, nothing else */}
      <div className="bg-otc-navy-deep text-white">
        <div className="h-1 w-full bg-otc-gold" aria-hidden="true" />
        <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
          <nav aria-label="Footer">
            <ul className="flex flex-wrap items-center gap-x-6 gap-y-2 text-[0.85rem] text-white/75">
              {[
                { href: "/", label: "Home" },
                { href: "/programmes", label: "Programmes" },
                { href: "/about", label: "About" },
                { href: "/alumni", label: "Alumni" },
                { href: "/admissions", label: "Admissions" },
                { href: "/partners", label: "Partners" },
                { href: "/contact", label: "Contact" },
                { href: "/privacy-policy", label: "Privacy" },
                { href: "/terms", label: "Terms" },
                { href: "/brand", label: "Brand" },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    prefetch={false}
                    href={item.href}
                    className="transition-colors hover:text-white focus-visible-ring"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="mt-6 flex flex-col gap-2 border-t border-white/10 pt-5 text-sm text-white/75 sm:flex-row sm:items-center sm:justify-between">
            <p>
              <a href={`tel:${site.phoneHref}`} className="transition-colors hover:text-white focus-visible-ring">
                {site.phoneDisplay}
              </a>
              <span aria-hidden="true" className="mx-2 text-white/30">
                |
              </span>
              <a href={`mailto:${site.email}`} className="transition-colors hover:text-white focus-visible-ring">
                {site.email}
              </a>
              <span aria-hidden="true" className="mx-2 text-white/30">
                |
              </span>
              <a
                href={site.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-white focus-visible-ring"
              >
                Facebook
              </a>
            </p>
            <p className="text-white/60">{site.location}</p>
          </div>
        </div>
      </div>

      {/* The very bottom: the crest alone, huge, on white. No wordmark. */}
      <div className="bg-white">
        <div className="mx-auto flex max-w-6xl flex-col items-center px-4 pb-10 pt-14 sm:px-6 lg:pb-12 lg:pt-16">
          <Reveal>
            <Image
              src="/icons/crest-footer.png"
              alt="The Ongenga Technical College crest"
              width={560}
              height={560}
              loading="lazy"
              sizes="(max-width: 640px) 176px, (max-width: 1024px) 224px, 256px"
              className="h-44 w-44 sm:h-56 sm:w-56 lg:h-64 lg:w-64"
            />
          </Reveal>
          <p className="mt-8 flex flex-col items-center gap-1 text-center text-xs text-otc-ink/55 sm:flex-row sm:gap-3">
            <span>
              © {year} {site.name}
            </span>
            <span aria-hidden="true" className="hidden h-1 w-1 rounded-full bg-otc-gold sm:block" />
            <span>
              Made by{" "}
              <a
                href={site.studio}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-otc-ink/75 underline-offset-4 hover:text-otc-navy hover:underline focus-visible-ring"
              >
                Tangison Studio
              </a>
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}
