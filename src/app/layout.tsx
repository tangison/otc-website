import type { Metadata, Viewport } from "next";
import { Sora, Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { SITE } from "@/lib/otc";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://otc.nam.na"),
  title: {
    default: "Ongenga Technical College, Nurturing the Masters of Value Addition",
    template: "%s · Ongenga Technical College",
  },
  description:
    "Ongenga Technical College (OTC) is a privately-owned Namibian TVET institution in Ohangwena Region, offering National Vocational Certificate programs and short courses across seven trades. Founded October 2019.",
  keywords: [
    "Ongenga Technical College",
    "OTC",
    "TVET Namibia",
    "Namibian vocational college",
    "Ohangwena",
    "welding",
    "joinery",
    "horticulture",
    "ICDL",
  ],
  authors: [{ name: SITE.name }],
  creator: SITE.name,
  publisher: SITE.name,
  applicationName: SITE.name,
  alternates: { canonical: "/" },
  icons: {
    icon: [
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon.png", sizes: "32x32", type: "image/png" },
    ],
    shortcut: "/favicon.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/manifest.webmanifest",
  openGraph: {
    title: "Ongenga Technical College, Nurturing the Masters of Value Addition",
    description:
      "A Namibian TVET institution in Ohangwena Region. National Vocational Certificate programs and short courses across seven trades. Founded October 2019.",
    url: "https://otc.nam.na",
    siteName: "Ongenga Technical College",
    type: "website",
    locale: "en_NA",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Ongenga Technical College" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ongenga Technical College",
    description: "A Namibian TVET institution. Nurturing the masters of value addition.",
    images: ["/og-image.png"],
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large" } },
  category: "education",
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#FFFFFF" },
    { media: "(prefers-color-scheme: dark)", color: "#01007F" },
  ],
  width: "device-width",
  initialScale: 1,
  colorScheme: "light dark",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: "Ongenga Technical College",
  alternateName: "OTC",
  parentOrganization: { "@type": "Organization", name: "Ethics Group Holdings (Pty) Ltd" },
  foundingDate: "2019-10",
  slogan: "Nurturing the Masters of Value Addition",
  description:
    "Privately-owned Namibian TVET institution in Ohangwena Region, offering National Vocational Certificate programs and short courses across seven trades.",
  email: "info@otc.nam.na",
  telephone: "+264 85 8030415",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Ongenga Industrial Park, Omafo, Ongenga main road",
    addressRegion: "Ohangwena Region",
    addressCountry: "NA",
  },
  url: "https://otc.nam.na",
  logo: "https://otc.nam.na/images/otc-logo.png",
  sameAs: [
    "https://twitter.com/collegeongenga",
    "https://na.linkedin.com/company/ongenga-technical-college",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${sora.variable} ${jakarta.variable} ${jetbrains.variable}`}>
      <body className="antialiased bg-background text-foreground min-h-screen flex flex-col">
        <a href="#main" className="skip-link">Skip to main content</a>
        <SiteHeader />
        <main id="main" className="flex-1 flex flex-col">
          {children}
        </main>
        <SiteFooter />
        <Toaster />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
