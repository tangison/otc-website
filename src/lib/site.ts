// Ongenga Technical College: single source of truth for content and brand data.
// Facts are sourced from the client's asset package (OTC_Full_Package, Sept 2026),
// the client site review (Sept 2026) and the college's own signage and banners.
// Nothing here is invented; pending items are marked TODO.

export const site = {
  name: "Ongenga Technical College",
  short: "OTC",
  domain: "https://otc.edu.na",
  location: "Ongenga, Ohangwena Region, Namibia",
  phoneDisplay: "+264 81 294 6126",
  phoneHref: "+264812946126",
  email: "info@otc.edu.na",
  facebook: "https://www.facebook.com/61578103662944",
  founded: 2019,
  studio: "https://studio.tangison.com",
  tagline: "Training you can put your hands on",
  positioning:
    "A regional centre of excellence for vocational and technical skills training serving the Ohangwena Region and Namibia.",
  vision: "To be Namibia's best and preferred technical training institution.",
  mission:
    "To enhance employability, entrepreneurship and innovation through practical, industry-focused training.",
  // Operating hours shown in the header utility bar. Pending final confirmation from the college.
  hours: "Mon to Fri, 07h30 to 16h30",
  // External portals linked from the header. Interim target: the Namibia Training
  // Authority (www.nta.com.na), the national TVET authority whose eLearning portal
  // carries OTC. TODO: swap in the college's own Moodle / LMS URLs when supplied.
  portals: [
    { label: "Moodle", href: "https://www.nta.com.na" },
    { label: "LMS", href: "https://www.nta.com.na" },
  ],
  values: [
    { name: "Skills Development", note: "Hands-on training in real workshops, not just classrooms." },
    { name: "Entrepreneurship", note: "Graduates ready to create jobs, not only seek them." },
    { name: "Community Development", note: "Skills that serve the Ohangwena Region first." },
    { name: "Inclusiveness", note: "Open to every learner ready to work, from Ongenga and beyond." },
  ],
};

// Stats verified in the client's own site review (Sept 2026).
export const stats = [
  { value: "2019", label: "Year founded" },
  { value: "7", label: "Full-time NVC trades" },
  { value: "9", label: "Short courses" },
  { value: "2+", label: "Intakes every year" },
];

export type Trade = {
  slug: string;
  name: string;
  image: string;
  alt: string;
  blurb: string;
  qualification: string;
  pathways: string[];
  // Captions are the exception, not the rule. Only set one when the photo
  // needs explaining; tiles carry the trade name right below the image.
  imageCaption?: string;
};

// Six trades are named in the client's review; the college offers seven NVC trades.
// The seventh programme name is pending written confirmation from the college.
export const trades: Trade[] = [
  {
    slug: "welding-metal-fabrication",
    name: "Welding & Metal Fabrication",
    image: "/images/workshop-01-t.webp",
    alt: "Trainee working at a bench in the OTC training workshop",
    blurb: "Join, cut and shape metal to industrial standard.",
    qualification: "National Vocational Certificate (NVC)",
    pathways: ["Welder", "Metal Fabricator", "Workshop Technician", "Industrial Maintenance Technician"],
  },
  {
    slug: "joinery-cabinet-making",
    name: "Joinery & Cabinet Making",
    image: "/images/workshop-02-t.webp",
    alt: "Woodworking jointer and planer machine in the OTC workshop",
    blurb: "Turn timber into furniture and fitted interiors.",
    qualification: "National Vocational Certificate (NVC)",
    pathways: ["Cabinet Maker", "Furniture Manufacturer", "Carpenter", "Self-employed Artisan"],
  },
  {
    slug: "bricklaying-plastering",
    name: "Bricklaying & Plastering",
    image: "/images/agri-build-06-t.webp",
    alt: "A braced corner post with strung fence wire at the OTC AgriCampus",
    blurb: "Build the walls and finishes Namibia is asking for.",
    qualification: "National Vocational Certificate (NVC)",
    pathways: ["Bricklayer", "Plasterer", "Building Contractor", "Site Supervisor"],
    // Needed: outdoor construction reads as fencing without it.
    imageCaption: "Construction works at the AgriCampus",
  },
  {
    slug: "electrical-general",
    name: "Electrical General",
    image: "/images/workshop-03-t.webp",
    alt: "OTC electrical student taking readings with a multimeter at a wiring board",
    blurb: "Wire, test and fault-find to code.",
    qualification: "National Vocational Certificate (NVC)",
    pathways: ["Electrician", "Wiring Installer", "Maintenance Electrician", "Electrical Technician"],
  },
  {
    slug: "auto-mechanics",
    name: "Auto Mechanics",
    image: "/images/auto-02-t.webp",
    alt: "OTC trainee servicing an engine bay under an open bonnet",
    blurb: "Diagnose, service and repair what keeps Namibia moving.",
    qualification: "National Vocational Certificate (NVC)",
    pathways: ["Motor Mechanic", "Workshop Technician", "Service Advisor", "Self-employed Garage Owner"],
  },
  {
    slug: "horticulture-crop-husbandry",
    name: "Horticulture & Crop Husbandry",
    image: "/images/agri-build-03-t.webp",
    alt: "The open AgriCampus fields at Ongenga cleared and ready for crop production training",
    blurb: "Grow food and manage land as a business.",
    qualification: "National Vocational Certificate (NVC)",
    pathways: ["Crop Producer", "Nursery Grower", "Landscaper", "Agri-entrepreneur"],
  },
];

// Every caption below describes what is actually visible in the photo.
// The hero cycles four different scenes, so a caption is needed there.
export const heroSlides = [
  { src: "/images/classrooms-02.webp", alt: "Two OTC trainees in branded college jackets during a theory session", caption: "OTC trainees, theory session" },
  { src: "/images/graduation-03.webp", alt: "A graduate shaking hands as he receives his certificate at the OTC recognition ceremony", caption: "Certificate handover, recognition ceremony" },
  { src: "/images/expo-outdoor-01.webp", alt: "The OTC gazebo stand with branded banners at an outdoor regional expo", caption: "OTC at a regional expo" },
  { src: "/images/workshop-03-t.webp", alt: "An electrical student taking multimeter readings at a wiring board", caption: "Electrical practical, OTC workshop" },
];

// Carousel items: alt is required; a caption chip only where the photo
// genuinely needs explaining.
export type CarouselSlide = { src: string; alt: string; caption?: string };

// The AgriCampus story in order: bare ground, materials, fencing works, handover.
export const agriCarousel: CarouselSlide[] = [
  { src: "/images/agri-build-03-c.webp", alt: "Open sandy ground with scattered trees at the AgriCampus before any works started", caption: "The AgriCampus grounds before the works" },
  { src: "/images/agri-build-01-c.webp", alt: "Fencing materials delivered and stacked on the AgriCampus site" },
  { src: "/images/agri-build-04-c.webp", alt: "Workers unloading materials from a bakkie at the AgriCampus" },
  { src: "/images/agri-build-02-t.webp", alt: "The first fence posts standing in the ground at Ongenga" },
  { src: "/images/agri-build-05-c.webp", alt: "Fence wire being strung along the AgriCampus boundary" },
  { src: "/images/agri-build-09-c.webp", alt: "A worker tensioning fence wire along the AgriCampus boundary" },
  { src: "/images/agri-build-10-c.webp", alt: "A steel strainer post braced with wire in sandy ground" },
  { src: "/images/agri-build-06-c.webp", alt: "A braced corner post with strung fence wire at the AgriCampus" },
  { src: "/images/agri-handover-01-c.webp", alt: "Officials in hard hats receiving a roll of fencing at the handover" },
  { src: "/images/agri-handover-03-c.webp", alt: "The AgriCampus fencing handover with officials and trainees on site" },
  { src: "/images/agri-handover-05-c.webp", alt: "Fencing rolls handed over on site at the AgriCampus" },
  { src: "/images/agri-build-08-c.webp", alt: "Chairs and a yellow table set out under the trees for the handover day" },
  { src: "/images/agri-handover-06-c.webp", alt: "Group photo taken on the AgriCampus handover day" },
];

// Recognition ceremonies and community outreach, the two places OTC graduates
// and staff are photographed. No captions: the photos speak for themselves.
export const alumniCarousel: CarouselSlide[] = [
  { src: "/images/graduation-01-c.webp", alt: "A graduate arriving to family greetings at the recognition ceremony" },
  { src: "/images/graduation-02-c.webp", alt: "A graduate receiving the certificate folder on stage" },
  { src: "/images/graduation-03-c.webp", alt: "The handshake as a graduate receives his certificate" },
  { src: "/images/graduation-04-c.webp", alt: "Certificate handover at the recognition ceremony" },
  { src: "/images/graduation-07-c.webp", alt: "A graduate holding his certificate folder with college officials beside him" },
  { src: "/images/outreach-01-c.webp", alt: "The OTC outreach stand at a rural skills demonstration" },
  { src: "/images/outreach-02-c.webp", alt: "OTC staff showing the tools of the trades to community members" },
  { src: "/images/agri-handover-02-c.webp", alt: "OTC trainees in hi-vis vests taking a break under the trees on handover day" },
  { src: "/images/outreach-03-c.webp", alt: "OTC staff with community members at an outreach event" },
];

// Brand in use across campus. No captions: the branding is the subject.
export const campusCarousel: CarouselSlide[] = [
  { src: "/images/team-03-b.webp", alt: "The OTC team standing under the college sign at the campus entrance" },
  { src: "/images/team-02-b.webp", alt: "The OTC team gathered at the campus entrance" },
  { src: "/images/signage-01-b.webp", alt: "Setting up the registration desk under OTC signage" },
  { src: "/images/signage-02-b.webp", alt: "The OTC banner pitched at the sports field" },
  { src: "/images/classrooms-01-b.webp", alt: "A class in session at OTC" },
  { src: "/images/classrooms-03-c.webp", alt: "Two students from behind wearing OTC-branded jackets in a classroom" },
  { src: "/images/classrooms-05-b.webp", alt: "A training session in the lecture hall" },
];

// Alumni: outcomes and ceremony evidence. No invented employment claims.
export const alumni = {
  intro:
    "Every OTC story ends the same way: a certificate in hand and a trade to practise. These are the faces behind that promise, from recognition ceremonies and campus life to the AgriCampus works our trainees help deliver.",
  invite:
    "Studied at OTC? Tell us where your trade has taken you. Your story guides the trainees coming behind you, and we would like to feature it here.",
};

export const partners = {
  zim: {
    name: "Bulawayo Polytechnic",
    country: "Zimbabwe",
    established: "1927",
    note: "Training partnership agreement signed at Bulawayo. Academic exchange, joint training and staff development across the two institutions.",
    url: "https://www.bulawayopolytechnic.ac.zw",
  },
  pending: [
    { name: "Industry Employer Partner", note: "Logo and confirmation pending" },
    { name: "Regional Development Partner", note: "Logo and confirmation pending" },
    { name: "Community Programme Partner", note: "Logo and confirmation pending" },
  ],
};

export const nav = [
  { href: "/", label: "Home" },
  { href: "/programmes", label: "Programmes" },
  { href: "/about", label: "About" },
  { href: "/alumni", label: "Alumni" },
  { href: "/admissions", label: "Admissions" },
  { href: "/partners", label: "Partners" },
  { href: "/contact", label: "Contact" },
];
