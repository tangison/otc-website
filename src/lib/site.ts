export const SITE = {
  name: "Ongenga Technical College",
  shortName: "OTC",
  tagline: "Nurturing the Masters of Value Addition",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://otc.nam.na",
  phone: "+264 85 8030415",
  phoneHref: "tel:+264858030415",
  email: "info@otc.nam.na",
  emailSecondary: "otechnicalcoll@gmail.com",
  address: "Ongenga Industrial Park, Omafo, Ongenga main road, Ohangwena Region, Namibia",
  addressShort: "Ongenga Industrial Park, Omafo, Namibia",
  parent: "Ethics Group Holdings (Pty) Ltd",
  founded: "October 2019",
  mapEmbed:
    "https://www.google.com/maps?q=Ongenga+Industrial+Park,+Omafo,+Namibia&output=embed",
} as const;

export const NAV = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/programs", label: "Programs" },
  { href: "/units", label: "Units" },
  { href: "/partners", label: "Partners" },
  { href: "/admissions", label: "Admissions" },
  { href: "/contact", label: "Contact" },
] as const;

export function orgJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "@id": `${SITE.url}/#organization`,
    name: SITE.name,
    alternateName: SITE.shortName,
    slogan: SITE.tagline,
    url: SITE.url,
    logo: `${SITE.url}/images/otc-crest.png`,
    foundingDate: "2019-10",
    parentOrganization: {
      "@type": "Organization",
      name: SITE.parent,
    },
    telephone: SITE.phone,
    email: SITE.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Ongenga Industrial Park, Ongenga main road",
      addressLocality: "Omafo",
      addressRegion: "Ohangwena Region",
      addressCountry: "NA",
    },
    areaServed: "Namibia",
    sameAs: [],
  };
}
