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
      { label: "Indoor pool (Terrey Hills / Brookvale) — 30 min", price: "$95 private · $53pp semi-private" },
      { label: "Indoor pool (Terrey Hills / Brookvale) — 45 min", price: "$130 private · $70pp semi-private" },
      { label: "Ocean pool (Rockpools) — 30 min", price: "$80 private · $45pp semi-private" },
      { label: "Ocean pool (Rockpools) — 45 min", price: "$100 private · $60pp semi-private" },
      { label: "Residential (your pool) — 30 min", price: "$105" },
      { label: "Residential (your pool) — 45 min", price: "$135" },
      { label: "Residential (your pool) — 60 min", price: "$160" },
    ],
    pricingNote:
      "Semi-private pricing is per swimmer, for two swimmers of a similar level. All fees are GST-inclusive, with no payment surcharge. Ongoing lessons are paid by monthly direct debit, based on the number of scheduled lessons in the month.",
    fromPrice: "From $80 / session",
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
    pricing: [
      { label: "Group lesson", price: "$32 per lesson" },
      { label: "Baby classes (8–24 months)", price: "$25 per lesson" },
    ],
    pricingNote:
      "All fees are GST-inclusive, with no payment surcharge. Ongoing lessons are paid by monthly direct debit, based on the number of scheduled lessons in the month.",
    fromPrice: "From $25 / lesson",
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
      { label: "4 × 20 min lessons", price: "$220" },
      { label: "4 × 30 min lessons", price: "$270" },
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
