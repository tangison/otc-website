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
  imageCaption: string;
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
    imageCaption: "Inside the OTC training workshop",
  },
  {
    slug: "joinery-cabinet-making",
    name: "Joinery & Cabinet Making",
    image: "/images/workshop-02-t.webp",
    alt: "Woodworking jointer and planer machine in the OTC workshop",
    blurb: "Turn timber into furniture and fitted interiors.",
    qualification: "National Vocational Certificate (NVC)",
    pathways: ["Cabinet Maker", "Furniture Manufacturer", "Carpenter", "Self-employed Artisan"],
    imageCaption: "Woodworking machines in the joinery workshop",
  },
  {
    slug: "bricklaying-plastering",
    name: "Bricklaying & Plastering",
    image: "/images/agri-build-06-t.webp",
    alt: "A braced corner post with strung fence wire at the OTC AgriCampus",
    blurb: "Build the walls and finishes Namibia is asking for.",
    qualification: "National Vocational Certificate (NVC)",
    pathways: ["Bricklayer", "Plasterer", "Building Contractor", "Site Supervisor"],
    imageCaption: "Corner post strung with wire, AgriCampus",
  },
  {
    slug: "electrical-general",
    name: "Electrical General",
    image: "/images/workshop-03-t.webp",
    alt: "OTC electrical student taking readings with a multimeter at a wiring board",
    blurb: "Wire, test and fault-find to code.",
    qualification: "National Vocational Certificate (NVC)",
    pathways: ["Electrician", "Wiring Installer", "Maintenance Electrician", "Electrical Technician"],
    imageCaption: "Electrical practical assessment at OTC",
  },
  {
    slug: "auto-mechanics",
    name: "Auto Mechanics",
    image: "/images/auto-02-t.webp",
    alt: "OTC trainee servicing an engine bay under an open bonnet",
    blurb: "Diagnose, service and repair what keeps Namibia moving.",
    qualification: "National Vocational Certificate (NVC)",
    pathways: ["Motor Mechanic", "Workshop Technician", "Service Advisor", "Self-employed Garage Owner"],
    imageCaption: "Engine bay practical, Auto Mechanics",
  },
  {
    slug: "horticulture-crop-husbandry",
    name: "Horticulture & Crop Husbandry",
    image: "/images/agri-build-05-t.webp",
    alt: "Fence wire being strung along the OTC AgriCampus boundary",
    blurb: "Grow food and manage land as a business.",
    qualification: "National Vocational Certificate (NVC)",
    pathways: ["Crop Producer", "Nursery Grower", "Landscaper", "Agri-entrepreneur"],
    imageCaption: "AgriCampus land development, OTC",
  },
];

// Every caption below describes what is actually visible in the photo.
export const heroSlides = [
  { src: "/images/classrooms-02.webp", alt: "Two OTC trainees in branded college jackets during a theory session", caption: "OTC trainees, theory session" },
  { src: "/images/graduation-03.webp", alt: "A graduate shaking hands as he receives his certificate at the OTC recognition ceremony", caption: "Certificate handover, recognition ceremony" },
  { src: "/images/expo-outdoor-01.webp", alt: "The OTC gazebo stand with branded banners at an outdoor regional expo", caption: "OTC at a regional expo" },
  { src: "/images/workshop-03-t.webp", alt: "An electrical student taking multimeter readings at a wiring board", caption: "Electrical practical, OTC workshop" },
];

export const gallery = [
  { src: "/images/classrooms-04-c.webp", caption: "Instructor addressing a training session" },
  { src: "/images/graduation-02-c.webp", caption: "Certificate moment, recognition ceremony" },
  { src: "/images/expo-indoor-03-c.webp", caption: "OTC exhibition booth, indoor expo" },
  { src: "/images/outreach-02-c.webp", caption: "Equipment demonstration, community outreach" },
  { src: "/images/workshop-04-c.webp", caption: "Wiring practical, Electrical General" },
  { src: "/images/auto-01-c.webp", caption: "Vehicle practical, Auto Mechanics" },
  { src: "/images/signage-03-c.webp", caption: "Raising the OTC banner on campus" },
  { src: "/images/agri-build-09-c.webp", caption: "Tensioning fence wire, AgriCampus" },
  { src: "/images/agri-handover-03-c.webp", caption: "AgriCampus fencing handover" },
  { src: "/images/team-01-c.webp", caption: "The OTC team at the campus entrance" },
  { src: "/images/classrooms-06-c.webp", caption: "Lecture room, OTC campus" },
  { src: "/images/expo-outdoor-02-c.webp", caption: "OTC gazebo stand, regional expo" },
];

export const agriCarousel = [
  { src: "/images/agri-build-01-c.webp", caption: "Fencing materials delivered to the AgriCampus" },
  { src: "/images/agri-build-02-t.webp", caption: "First posts in the ground, Ongenga" },
  { src: "/images/agri-build-09-c.webp", caption: "Tensioning wire along the boundary" },
  { src: "/images/agri-build-06-c.webp", caption: "Corner post braced and strung" },
  { src: "/images/agri-handover-05-c.webp", caption: "Fencing rolls handed over on site" },
  { src: "/images/agri-handover-06-c.webp", caption: "Group photo, AgriCampus handover day" },
];

export const alumniCarousel = [
  { src: "/images/graduation-01-c.webp", caption: "Graduate arriving to family greetings" },
  { src: "/images/graduation-02-c.webp", caption: "Receiving the certificate folder on stage" },
  { src: "/images/graduation-03-c.webp", caption: "The handshake that ends the trade" },
  { src: "/images/graduation-04-c.webp", caption: "Certificate handover, recognition ceremony" },
  { src: "/images/outreach-01-c.webp", caption: "OTC outreach stand, rural skills demo" },
  { src: "/images/outreach-02-c.webp", caption: "Showing the tools of the trades" },
  { src: "/images/outreach-03-c.webp", caption: "OTC staff with community members" },
];

export const campusCarousel = [
  { src: "/images/team-03-b.webp", caption: "Under the college sign, OTC campus" },
  { src: "/images/team-02-b.webp", caption: "The OTC team at the entrance" },
  { src: "/images/signage-01-b.webp", caption: "Setting up the registration desk" },
  { src: "/images/signage-02-b.webp", caption: "OTC banner at the sports field" },
  { src: "/images/classrooms-01-b.webp", caption: "In class at OTC" },
  { src: "/images/classrooms-05-b.webp", caption: "Training session in the lecture hall" },
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
