export type Address = {
  street: string;
  suburb: string;
  state: string;
  postcode: string;
};

export type Location = {
  slug: string;
  name: string;
  displayHeading: string;
  eyebrow: string;
  cardDescription: string;
  description: string;
  address?: Address;
  programSlugs: string[];
  image: string;
};

export const locations: Location[] = [
  {
    slug: "locations-terrey-hills",
    name: "Terrey Hills",
    displayHeading: "Terrey Hills",
    eyebrow: "Location",
    cardDescription:
      "Our flagship indoor heated pool, purpose-built for small-group learning.",
    description:
      "SwimNest's flagship indoor, heated pool — home base for private, semi-private and group lessons, plus school-holiday intensives.",
    address: {
      street: "31 Myoora Rd",
      suburb: "Terrey Hills",
      state: "NSW",
      postcode: "2084",
    },
    programSlugs: [
      "private-classes",
      "group-classes",
      "classes-holiday-intensive",
      "classes-stroke-correction",
    ],
    image: "/images/locations/terrey-hills.webp",
  },
  {
    slug: "locations-brookvale",
    name: "Brookvale",
    displayHeading: "Brookvale Swim School",
    eyebrow: "Location",
    cardDescription: "Central and easy to reach, with dedicated learner pools.",
    description:
      "Lessons held at Brookvale Swim School — an indoor heated pool central to the Northern Beaches.",
    address: {
      street: "9B Green St",
      suburb: "Brookvale",
      state: "NSW",
      postcode: "2100",
    },
    programSlugs: ["private-classes", "group-classes"],
    image: "/images/locations/brookvale.webp",
  },
  {
    slug: "locations-rockpools",
    name: "Rockpools",
    displayHeading: "Northern Beaches Rockpools",
    eyebrow: "Location",
    cardDescription: "Seasonal ocean-pool lessons for confident open-water skills.",
    description:
      "Seasonal lessons at Northern Beaches ocean rockpools — the natural next step for swimmers building open-water confidence.",
    programSlugs: ["private-classes", "classes-ocean-skills"],
    image: "/images/locations/rockpools.webp",
  },
  {
    slug: "locations-residential",
    name: "Residential",
    displayHeading: "Backyard / Residential Pools",
    eyebrow: "Location",
    cardDescription: "Private in-home lessons in the comfort of your own backyard.",
    description:
      "Private and semi-private lessons held at your home pool — focused, personalised instruction in a relaxed, familiar setting.",
    programSlugs: ["private-classes"],
    image: "/images/locations/residential.webp",
  },
];

export function getLocationBySlug(slug: string): Location | undefined {
  return locations.find((location) => location.slug === slug);
}
