import type { Metadata, Viewport } from "next";
import { Fraunces, Outfit } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { SiteHeader } from "@/components/site/site-header";
import { SiteFooter } from "@/components/site/site-footer";
import { SITE, orgJsonLd } from "@/lib/site";

const display = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  axes: ["opsz"],
  display: "swap",
});

const body = Outfit({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: "Ongenga Technical College | Omafo, Namibia",
    template: "%s | Ongenga Technical College",
  },
  description:
    "Technical and vocational training in Omafo, Ohangwena Region, Namibia. Seven full-time trades, nine short courses, two campuses. Nurturing the Masters of Value Addition.",
  keywords: [
    "Ongenga Technical College",
    "OTC Namibia",
    "TVET Namibia",
    "vocational training Ohangwena",
    "technical college Omafo",
    "NVC courses Namibia",
  ],
  authors: [{ name: SITE.name }],
  icons: {
    icon: [
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    type: "website",
    siteName: SITE.name,
    url: SITE.url,
    title: "Ongenga Technical College | Omafo, Namibia",
    description:
      "Seven full-time trades, nine short courses, two campuses in the Ohangwena Region. Nurturing the Masters of Value Addition.",
    images: [
      {
        url: "/images/detail-welding-sparks.webp",
        width: 1920,
        height: 1300,
        alt: "Welding sparks flying in the OTC training workshop",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ongenga Technical College | Omafo, Namibia",
    description:
      "Technical and vocational training in Namibia. Nurturing the Masters of Value Addition.",
    images: ["/images/detail-welding-sparks.webp"],
  },
};

export const viewport: Viewport = {
  themeColor: "#01007F",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${display.variable} ${body.variable} flex min-h-svh flex-col bg-paper font-sans antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd()) }}
        />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-gold focus:px-6 focus:py-3 focus:text-sm focus:font-semibold focus:text-navy"
        >
          Skip to content
        </a>
        <SiteHeader />
        <main id="main" className="flex-1">
          {children}
        </main>
        <SiteFooter />
        <Toaster />
      </body>
    </html>
  );
}
