export type PricingRow = {
  label: string;
  price: string;
};

export type Program = {
  slug: string;
  name: string;
  shortName: string;
  tag: string;
  tagline: string;
  cardDescription: string;
  audience: string;
  pricing: PricingRow[];
  pricingNote?: string;
  /** Short "from" price for the homepage summary row — falls back to pricing[0] if omitted. */
  fromPrice?: string;
  featured?: boolean;
  image: string;
};

export const programs: Program[] = [
  {
    slug: "classes-ocean-skills",
    name: "Ocean Skills Program",
    shortName: "Ocean Skills",
    tag: "Signature Program",
    tagline: "Safety, technique and confidence in open water and surf.",
    cardDescription:
      "Open-water preparation for confident swimmers ready to meet the surf, swell and sand of the Northern Beaches coastline.",
    audience:
      "For swimmers who already have pool confidence and are ready to build the awareness and technique open water demands.",
    pricing: [],
    pricingNote: "Pricing on enquiry — get in touch for current rates.",
    featured: true,
    image: "/images/programs/classes-ocean-skills.jpg",
  },
  {
    slug: "private-classes",
    name: "Private & Semi-Private Classes",
    shortName: "Private & Semi-Private",
    tag: "Programs",
    tagline: "One-on-one or paired instruction, paced entirely around your child.",
    cardDescription:
      "One-on-one or paired instruction, paced entirely around your child.",
    audience:
      "Focused, personalised lessons for swimmers who benefit from undivided coaching attention — one student or two.",
    pricing: [
      { label: "Rockpools — 30 min", price: "$70 solo · $40pp shared" },
      { label: "Rockpools — 45 min", price: "$90 solo · $55pp shared" },
      { label: "Terrey Hills / Brookvale — 30 min", price: "$90 solo · $50pp shared" },
      { label: "Terrey Hills / Brookvale — 45 min", price: "$120 solo · $65pp shared" },
      { label: "Residential (your pool) — 30 min", price: "$100" },
      { label: "Residential (your pool) — 45 min", price: "$120" },
      { label: "Residential (your pool) — 60 min", price: "$150" },
    ],
    pricingNote: "“Shared” (semi-private) pricing is per swimmer, for two swimmers of a similar level.",
    fromPrice: "From $70 / session",
    image: "/images/programs/private-classes.jpg",
  },
  {
    slug: "group-classes",
    name: "Group Classes",
    shortName: "Group Classes",
    tag: "Programs",
    tagline: "Skill-matched peer classes that build technique and friendship.",
    cardDescription:
      "Skill-matched peer classes that build technique and friendship.",
    audience:
      "Small, level-matched groups — class size and lesson length vary by skill level and location.",
    pricing: [{ label: "Per term (12 weeks)", price: "$360" }],
    image: "/images/programs/group-classes.jpg",
  },
  {
    slug: "classes-holiday-intensive",
    name: "Holiday Intensive Classes",
    shortName: "Holiday Intensives",
    tag: "Programs",
    tagline: "Accelerated short courses that turn a week off school into a leap forward.",
    cardDescription:
      "Accelerated short courses that turn a week off school into a leap forward.",
    audience:
      "Runs during school holidays at Terrey Hills, 11am–3pm — a concentrated block of lessons for faster progress.",
    pricing: [
      { label: "4 × 20 min lessons", price: "$200" },
      { label: "4 × 30 min lessons", price: "$250" },
    ],
    image: "/images/programs/classes-holiday-intensive.jpg",
  },
  {
    slug: "classes-stroke-correction",
    name: "Adult Stroke Correction",
    shortName: "Stroke Correction",
    tag: "Programs",
    tagline: "Technique-focused coaching for adults refining their stroke.",
    cardDescription: "Technique-focused coaching for adults refining their stroke.",
    audience:
      "For adults who can already swim and want expert eyes on technique, efficiency and confidence in the water.",
    pricing: [],
    pricingNote: "Pricing on enquiry — get in touch for current rates.",
    image: "/images/programs/classes-stroke-correction.jpg",
  },
  {
    slug: "classes-parent-bub",
    name: "Free Parent & Bub Program",
    shortName: "Parent & Bub",
    tag: "Free Program",
    tagline: "A strong start in water, for life — free for babies 4–8 months.",
    cardDescription:
      "Free parent-education classes for babies 4–8 months. Sundays 8am at Brookvale — limited spots.",
    audience:
      "For parents and babies aged 4–8 months. SwimNest is the only Northern Beaches swim school offering this free program.",
    pricing: [],
    pricingNote: "Free — limited spots each term.",
    fromPrice: "Free",
    image: "/images/programs/classes-parent-bub.jpg",
  },
];

export function getProgramBySlug(slug: string): Program | undefined {
  return programs.find((program) => program.slug === slug);
}
