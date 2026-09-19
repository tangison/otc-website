// Central content store for OTC — every fact comes from content-brief.md.
// Do not edit facts here without updating the brief first.

export const SITE = {
  name: "Ongenga Technical College",
  shortName: "OTC",
  tagline: "Nurturing the Masters of Value Addition",
  parentCompany: "Ethics Group Holdings (Pty) Ltd",
  founded: "October 2019",
  foundedYear: 2019,
  phone: "+264 85 8030415",
  phoneHref: "+264858030415",
  email: "info@otc.nam.na",
  emailSecondary: "otechnicoll@gmail.com",
  address: {
    line1: "Ongenga Industrial Park, Omafo",
    line2: "Ongenga main road, Ohangwena Region,",
    line3: "Namibia",
  },
  social: {
    facebook: "https://www.facebook.com/", // confirm official page with client
    twitter: "https://twitter.com/collegeongenga",
    linkedin: "https://na.linkedin.com/company/ongenga-technical-college",
  },
} as const;

export const NAV = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/programs", label: "Programs" },
  { href: "/units", label: "Institutional Units" },
  { href: "/partners", label: "Partners" },
  { href: "/apply", label: "Admissions" },
  { href: "/contact", label: "Contact" },
] as const;

export const QUICK_FACTS = [
  { value: "2", label: "intakes per year", sub: "Full-time & part-time" },
  { value: "7", label: "full-time trades", sub: "NVC programs" },
  { value: "9", label: "short courses", sub: "From ICDL to millwright" },
  { value: "2019", label: "founded", sub: "October intake, Ohangwena" },
] as const;

export const FULL_TIME_COURSES = [
  { name: "Welding and Metal Fabrication", blurb: "Fabrication, structural steel, and pipe work aligned to Namibia's industrialization agenda." },
  { name: "Joinery and Cabinet Making", blurb: "Timber selection, joinery, furniture construction and fine finishing." },
  { name: "Bricklaying and Plastering", blurb: "Masonry fundamentals, plastering, and on-site construction practice." },
  { name: "Wholesale & Retail Operations", blurb: "Stock control, point-of-sale, customer service and small-retail management." },
  { name: "Electrical General", blurb: "Installation, maintenance, and wiring for residential and light-commercial work." },
  { name: "Entrepreneurship", blurb: "Business modelling, record-keeping and small-enterprise launch within EDC." },
  { name: "Horticulture & Crop Husbandry", blurb: "Soil, irrigation, propagation and crop care grounded in Namibian conditions." },
] as const;

export const SHORT_COURSES = [
  { name: "Agriculture (Crops & Animal Husbandry)", note: 'Includes "Farming for Feathered Animals" (poultry)', price: "N$3,000" },
  { name: "AutoDesk (AutoCAD, Inventor, Revit, Maya)", note: "Industry-standard CAD and 3D modelling software", price: null },
  { name: "Welding and Metal Fabrication", note: "Practical fabrication skills for entry into the trades", price: null },
  { name: "Joinery and Cabinet Making", note: "Hands-on carpentry and cabinet construction", price: null },
  { name: "Electronics", note: "Foundational electronics and circuit practice", price: null },
  { name: "Auto Mechanics", note: "Engine systems, servicing and diagnostics", price: null },
  { name: "Upholstery Making and Production", note: "Furniture upholstery from frame to finish", price: "N$3,000" },
  { name: "International Computer Driving License (ICDL)", note: "Globally-recognised computer-skills certification", price: "N$1,500" },
  { name: "Millwright", note: "Installs, dismantles, repairs, re-assembles and moves industrial machinery", price: "N$3,000" },
] as const;

export const INTAKE_FULL_TIME = "2 intakes per year — full-time and part-time";
export const INTAKE_SHORT = "4 intakes per year — full-time and part-time";

export const INSTITUTIONAL_UNITS = [
  {
    key: "edc",
    name: "Entrepreneurial Development Centre",
    short: "EDC",
    blurb: "Promotes innovation, creativity and entrepreneurship among trainees, students and the wider public. The EDC helps trainees establish their own businesses with small start-up assistance.",
    accent: "gold" as const,
    tag: "Innovation & enterprise",
  },
  {
    key: "boxing",
    name: "OTC Boxing Club",
    short: "Boxing Club",
    blurb: "Boxing is OTC's adopted sport code. The club is open to public participation and registration, alongside the college's own trainees.",
    accent: "navy" as const,
    tag: "Sport & discipline",
  },
  {
    key: "auxiliary",
    name: "Auxiliary Centre",
    short: "Auxiliary Centre",
    blurb: "Sells institutional corporate items and training accessories to trainees, alumni and visitors, and supports practical training with consumables.",
    accent: "gold" as const,
    tag: "Campus services",
  },
  {
    key: "hasheela",
    name: "Sem Hasheela Agricultural Campus",
    short: "Sem Hasheela",
    blurb: "Agricultural incubation campus and production hub covering apiculture (bee farming), crop and animal husbandry, food processing, and mushroom production.",
    accent: "green" as const,
    tag: "Agriculture hub",
  },
] as const;

export const PARTNERS = [
  {
    key: "bulawayo",
    name: "Bulawayo Polytechnic",
    location: "Zimbabwe",
    blurb: "A long-established Zimbabwean TVET institution. The partnership supports lecturer exchange, joint curriculum review and quality assurance alignment across borders.",
  },
  {
    key: "adc",
    name: "Advanced Design Colleges",
    location: "Zimbabwe",
    blurb: "Collaborates with OTC on design-led technical training, exposing trainees to broader design-thinking methodology and digital production workflows.",
  },
  {
    key: "cjc",
    name: "CJC Agricultural College",
    location: "Namibia",
    blurb: "A Namibian agricultural college. The partnership strengthens OTC's horticulture, crop husbandry and food-processing work at Sem Hasheela campus.",
  },
] as const;

export const VALUES = [
  {
    key: "skills",
    name: "Skills Development",
    blurb: "Practical, tradeable skills built on Namibian industry needs and aligned to the National Vocational Certificate framework.",
  },
  {
    key: "entrepreneurship",
    name: "Entrepreneurship",
    blurb: "Trainees leave with the tools to start and run a small business — not just to seek employment.",
  },
  {
    key: "community",
    name: "Community Development",
    blurb: "Training grounded in the Ohangwena region, contributing to Harambee Prosperity Plan I & II and Vision 2030.",
  },
  {
    key: "inclusive",
    name: "Inclusiveness",
    blurb: "Open to every able-bodied Namibian from all walks of life — no background is a barrier to entry.",
  },
] as const;

export const APPLICATION_STEPS = [
  {
    step: "01",
    title: "Choose your intake",
    blurb: "Two intakes run per year for full-time programs; four intakes run per year for short courses. Confirm the next intake window with the Admissions Office before applying.",
  },
  {
    step: "02",
    title: "Confirm entry requirements",
    blurb: "Full-time NVC programs typically require a Grade 10 or Grade 12 certificate (subject to the program). Short courses have program-specific minimums — ask Admissions for the current sheet.",
  },
  {
    step: "03",
    title: "Submit your application",
    blurb: "Email a completed application form to info@otc.nam.na, or hand-deliver it to Ongenga Industrial Park, Omafo. A downloadable form is being prepared for the site.",
  },
  {
    step: "04",
    title: "Pay fees and enrol",
    blurb: "Once accepted, the Admissions Office will share the fee schedule, payment options and reporting date for your intake.",
  },
] as const;
