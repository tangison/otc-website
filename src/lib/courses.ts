export type Course = {
  slug: string;
  name: string;
  category: "fulltime" | "short";
  image: string;
  alt: string;
  summary: string;
  detail: string;
  price?: string;
  span?: "wide" | "tall" | "normal";
};

export const FULLTIME: Course[] = [
  {
    slug: "welding",
    name: "Welding and Metal Fabrication",
    category: "fulltime",
    image: "/images/course-welding-detail.webp",
    alt: "Welder in protective gear joining steel with bright sparks",
    summary:
      "Join, cut and shape steel into structures that stand for decades.",
    detail:
      "Trainees learn arc and gas welding, cutting, and fabrication of gates, frames and structural steel, working from drawings to finished product in the college workshop.",
  },
  {
    slug: "joinery",
    name: "Joinery and Cabinet Making",
    category: "fulltime",
    image: "/images/course-joinery.webp",
    alt: "Carpenter smoothing timber in a joinery workshop",
    summary: "From rough timber to finished furniture and fitted cabins.",
    detail:
      "The trade covers timber selection, jointing, machine and hand finishing, and complete cabinet construction, with upholstery-friendly detailing for furniture work.",
  },
  {
    slug: "bricklaying",
    name: "Bricklaying and Plastering",
    category: "fulltime",
    image: "/images/course-bricklaying.webp",
    alt: "Bricks and blocks being moved on a construction site",
    summary: "Build walls that carry their weight, then finish them right.",
    detail:
      "Setting out, bonding, block and brick walling, plastering and screeds: the core site skills Namibia's construction sector hires for.",
  },
  {
    slug: "retail",
    name: "Wholesale & Retail Operations",
    category: "fulltime",
    image: "/images/course-retail.webp",
    alt: "Trader arranging goods at a busy market stall",
    summary: "Stock, sales and service for shops, wholesalers and markets.",
    detail:
      "Learners practise stock control, merchandising, point of sale and customer service, the groundwork for employment in trade or for running a shop of one's own.",
  },
  {
    slug: "electrical",
    name: "Electrical General",
    category: "fulltime",
    image: "/images/course-electrical.webp",
    alt: "Trainee wiring an electrical control panel",
    summary: "Install, test and repair the circuits that power daily life.",
    detail:
      "Wiring practice, distribution boards, testing instruments and safety procedure, aligned to the National Vocational Certificate standard.",
  },
  {
    slug: "entrepreneurship",
    name: "Entrepreneurship",
    category: "fulltime",
    image: "/images/course-entrepreneurship.webp",
    alt: "Shop owner arranging clothing in a small store",
    summary: "Turn a trade into a business that pays and employs.",
    detail:
      "Business planning, costing, marketing and record keeping, taught alongside the college's Entrepreneurial Development Centre so graduates can launch their own ventures.",
  },
  {
    slug: "horticulture",
    name: "Horticulture & Crop Husbandry",
    category: "fulltime",
    image: "/images/course-horticulture.webp",
    alt: "Farmer tending rows of lettuce in a green field",
    summary: "Grow food and value where the soil is.",
    detail:
      "Soil preparation, propagation, irrigation and crop care through to harvest, with production practice at the college's agricultural campus.",
  },
];

export const SHORT: Course[] = [
  {
    slug: "agriculture",
    name: "Agriculture: Farming for Feathered Animals",
    category: "short",
    image: "/images/course-poultry.webp",
    alt: "Free range chicken at a poultry farm",
    summary: "Poultry husbandry from day old chick to market.",
    price: "N$3,000",
    detail:
      "Covers the Agriculture short programme in crops and animal husbandry, with the flagship module Farming for Feathered Animals focused on poultry production.",
  },
  {
    slug: "autodesk",
    name: "AutoDesk",
    category: "short",
    image: "/images/course-computing.webp",
    alt: "Instructor teaching design software to students",
    summary: "AutoCAD, Inventor, Revit and Maya.",
    detail:
      "Computer aided design and modelling across drafting, mechanical invention, building information modelling and 3D animation.",
  },
  {
    slug: "welding-short",
    name: "Welding and Metal Fabrication",
    category: "short",
    image: "/images/hero-welding.webp",
    alt: "Welder at work in a professional workshop",
    summary: "The trade, condensed for fast entry.",
    detail:
      "A focused welding and fabrication course covering the core joining and cutting processes for work readiness.",
  },
  {
    slug: "joinery-short",
    name: "Joinery and Cabinet Making",
    category: "short",
    image: "/images/detail-woodshop.webp",
    alt: "Timber being machined in a wood workshop",
    summary: "Timber skills in a shorter format.",
    detail:
      "Practical joinery practice suited to those who want workshop skills without the full time commitment.",
  },
  {
    slug: "electronics",
    name: "Electronics",
    category: "short",
    image: "/images/course-electrical.webp",
    alt: "Trainee wiring an electrical panel",
    summary: "Component level electronics fundamentals.",
    detail:
      "Electronic components, circuit assembly, fault finding and repair for appliances and basic installations.",
  },
  {
    slug: "automech",
    name: "Auto Mechanics",
    category: "short",
    image: "/images/course-automech.webp",
    alt: "Mechanic working on a vehicle engine",
    summary: "Engine diagnostics and vehicle service.",
    detail:
      "Vehicle systems, servicing routines and diagnostic method for engines, drivetrain and brakes.",
  },
  {
    slug: "upholstery",
    name: "Upholstery Making and Production",
    category: "short",
    image: "/images/course-sewing.webp",
    alt: "Craftsperson sewing upholstery fabric",
    summary: "Furniture coverings, seats and soft goods.",
    price: "N$3,000",
    detail:
      "Cutting, stitching and fitting upholstery for furniture and vehicle interiors, from measurement to finished piece.",
  },
  {
    slug: "icdl",
    name: "International Computer Driving License",
    category: "short",
    image: "/images/course-icdl.webp",
    alt: "Students learning together around a laptop",
    summary: "The recognised global standard in computer skills.",
    price: "N$1,500",
    detail:
      "The ICDL certifies competence in everyday computing: documents, spreadsheets, presentations and online work.",
  },
  {
    slug: "millwright",
    name: "Millwright",
    category: "short",
    image: "/images/detail-tools.webp",
    alt: "Organised hand tools and hardware on workshop shelves",
    summary: "Industrial machinery: install, dismantle, repair, move.",
    price: "N$3,000",
    detail:
      "Millwrights install, dismantle, repair, reassemble and move industrial machinery, a combined mechanical and electrical trade in high demand.",
  },
];

export const DISCIPLINES = [
  {
    name: "Medical and Health Sciences",
    image: "/images/course-agriprocessing.webp",
    alt: "Hands inspecting processed grain",
  },
  {
    name: "Engineering and ICT Disciplines",
    image: "/images/detail-welding-sparks.webp",
    alt: "Welding arc with bright sparks",
  },
  {
    name: "Manufacturing and Value Addition",
    image: "/images/detail-tools.webp",
    alt: "Workshop tools arranged on shelves",
  },
  {
    name: "Agriculture and Food Processing",
    image: "/images/course-foodprocess.webp",
    alt: "Scoop of grain at a processing facility",
  },
  {
    name: "Applied Art & Designs",
    image: "/images/course-sewing.webp",
    alt: "Fabric work in a design workshop",
  },
  {
    name: "Mining and Renewable Energy",
    image: "/images/course-solar.webp",
    alt: "Workers installing solar panels on a roof",
  },
  {
    name: "Wholesale and Retail",
    image: "/images/course-retail-store.webp",
    alt: "Shelves of goods in a retail store",
  },
];
