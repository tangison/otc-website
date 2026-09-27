import type { Metadata, Viewport } from "next";
import { Fraunces, Outfit } from "next/font/google";
import "./globals.css";
import SiteHeader from "@/components/site/site-header";
import SiteFooter from "@/components/site/site-footer";
import { site } from "@/lib/site";

const display = Fraunces({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
  axes: ["opsz"],
});

const body = Outfit({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.domain),
  title: {
    default: "Ongenga Technical College | TVET Training in Namibia",
    template: "%s | Ongenga Technical College",
  },
  description:
    "Technical and vocational training in Ongenga, Ohangwena Region, Namibia. Seven NVC trades and short courses in real workshops.",
  keywords: [
    "Ongenga Technical College",
    "technical college Namibia",
    "vocational training Namibia",
    "TVET Namibia",
    "NVC courses Namibia",
    "Ohangwena Region college",
    "welding course Namibia",
    "electrical training Namibia",
    "auto mechanics course Namibia",
    "horticulture training Namibia",
  ],
  authors: [{ name: site.name }],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_NA",
    url: site.domain,
    siteName: site.name,
    title: "Ongenga Technical College | TVET Training in Namibia",
    description:
      "Technical and vocational training in Ongenga, Ohangwena Region. Seven NVC trades, short courses, real workshops.",
    images: [{ url: "/images/og-card.png", width: 1200, height: 630, alt: "Ongenga Technical College crest and wordmark" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ongenga Technical College | TVET Training in Namibia",
    description:
      "Technical and vocational training in Ongenga, Ohangwena Region. Seven NVC trades, short courses, real workshops.",
    images: ["/images/og-card.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "48x48" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: "/icons/apple-touch-icon.png",
  },
  manifest: "/manifest.webmanifest",
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#0e0aae",
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: site.name,
  alternateName: "OTC",
  url: site.domain,
  logo: `${site.domain}/icons/icon-512.png`,
  image: `${site.domain}/images/og-card.png`,
  description: site.positioning,
  foundingDate: "2019",
  telephone: site.phoneHref,
  email: site.email,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Ongenga",
    addressRegion: "Ohangwena Region",
    addressCountry: "NA",
  },
  sameAs: [site.facebook],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${display.variable} ${body.variable} antialiased bg-background text-foreground font-sans`}>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:bg-otc-navy focus:text-white focus:px-4 focus:py-2.5 focus:text-sm focus:font-medium"
        >
          Skip to main content
        </a>
        <SiteHeader />
        <main id="main-content">{children}</main>
        <SiteFooter />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
