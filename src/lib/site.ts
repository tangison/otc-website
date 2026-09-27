// Ongenga Technical College: single source of truth for content and brand data.
// Facts are sourced from the client site review (Sept 2026), the OTC asset package,
// and the college's own signage. Nothing here is invented; pending items are marked.

export const site = {
  name: "Ongenga Technical College",
  short: "OTC",
  domain: "https://otc.edu.na",
  location: "Ongenga, Ohangwena Region, Namibia",
  phoneDisplay: "+264 81 294 6126",
  phoneHref: "+264812946126",
  email: "otechnicalcoli@gmail.com",
  facebook: "https://www.facebook.com/61578103662944",
  founded: 2019,
  studio: "https://studio.tangison.com",
  tagline: "Training you can put your hands on",
  positioning:
    "A regional centre of excellence for vocational and technical skills training serving the Ohangwena Region and Namibia.",
  vision: "To be Namibia's best and preferred technical training institution.",
  mission:
    "To enhance employability, entrepreneurship and innovation through practical, industry-focused training.",
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
    image: "/images/trade-welding.webp",
    alt: "OTC workshop interior with metal fabrication machines",
    blurb: "Join, cut and shape metal to industrial standard.",
    qualification: "National Vocational Certificate (NVC)",
    pathways: ["Welder", "Metal Fabricator", "Workshop Technician", "Industrial Maintenance Technician"],
    imageCaption: "Inside the OTC workshop",
  },
  {
    slug: "joinery-cabinet-making",
    name: "Joinery & Cabinet Making",
    image: "/images/trade-joinery.webp",
    alt: "Woodworking machine in the OTC joinery workshop",
    blurb: "Turn timber into furniture and fitted interiors.",
    qualification: "National Vocational Certificate (NVC)",
    pathways: ["Cabinet Maker", "Furniture Manufacturer", "Carpenter", "Self-employed Artisan"],
    imageCaption: "Woodworking machines in the joinery workshop",
  },
  {
    slug: "bricklaying-plastering",
    name: "Bricklaying & Plastering",
    image: "/images/trade-bricklaying.webp",
    alt: "Construction work under way at the OTC AgriCampus",
    blurb: "Build the walls and finishes Namibia is asking for.",
    qualification: "National Vocational Certificate (NVC)",
    pathways: ["Bricklayer", "Plasterer", "Building Contractor", "Site Supervisor"],
    imageCaption: "Construction work at the OTC AgriCampus",
  },
  {
    slug: "electrical-general",
    name: "Electrical General",
    image: "/images/trade-electrical.webp",
    alt: "OTC electrical student testing a circuit with a multimeter",
    blurb: "Wire, test and fault-find to code.",
    qualification: "National Vocational Certificate (NVC)",
    pathways: ["Electrician", "Wiring Installer", "Maintenance Electrician", "Electrical Technician"],
    imageCaption: "Electrical practical assessment at OTC",
  },
  {
    slug: "auto-mechanics",
    name: "Auto Mechanics",
    image: "/images/trade-auto.webp",
    alt: "OTC auto mechanics students servicing a vehicle engine",
    blurb: "Diagnose, service and repair what keeps Namibia moving.",
    qualification: "National Vocational Certificate (NVC)",
    pathways: ["Motor Mechanic", "Workshop Technician", "Service Advisor", "Self-employed Garage Owner"],
    imageCaption: "Auto mechanics practical, OTC campus",
  },
  {
    slug: "horticulture-crop-husbandry",
    name: "Horticulture & Crop Husbandry",
    image: "/images/trade-horticulture.webp",
    alt: "Fencing and land development at the OTC AgriCampus",
    blurb: "Grow food and manage land as a business.",
    qualification: "National Vocational Certificate (NVC)",
    pathways: ["Crop Producer", "Nursery Grower", "Landscaper", "Agri-entrepreneur"],
    imageCaption: "AgriCampus development, OTC",
  },
];

export const gallery = [
  { src: "/images/g-grad-1.webp", caption: "Recognition ceremony, OTC" },
  { src: "/images/g-handover-1.webp", caption: "AgriCampus fencing handover" },
  { src: "/images/g-expo-outdoor-1.webp", caption: "OTC exhibition stand, regional expo" },
  { src: "/images/g-outreach-1.webp", caption: "Community skills demonstration" },
  { src: "/images/g-classroom-1.webp", caption: "Theory session in the OTC lecture hall" },
  { src: "/images/g-signage-1.webp", caption: "Campus signage, Ongenga" },
  { src: "/images/g-agri-1.webp", caption: "AgriCampus fencing works" },
  { src: "/images/g-expo-indoor-1.webp", caption: "OTC booth at an indoor expo" },
  { src: "/images/g-team-1.webp", caption: "Staff and visitors at the OTC campus" },
  { src: "/images/g-auto-1.webp", caption: "Engine bay practical, Auto Mechanics" },
];

export const agriCarousel = [
  { src: "/images/story-agri-build.webp", caption: "Fencing under construction at the AgriCampus" },
  { src: "/images/g-agri-2.webp", caption: "Fence line taking shape, Ongenga" },
  { src: "/images/story-agri-handover.webp", caption: "AgriCampus works handed over on campus" },
  { src: "/images/g-handover-2.webp", caption: "Handover day at the OTC AgriCampus" },
];

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
  { href: "/admissions", label: "Admissions" },
  { href: "/partners", label: "Partners" },
  { href: "/contact", label: "Contact" },
];
