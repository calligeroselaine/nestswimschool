export type Testimonial = {
  quote: string;
  name: string;
  location: string;
};

// Real reviews sourced from swimnest.com.au — short, complete excerpts only.
export const testimonials: Testimonial[] = [
  {
    quote:
      "Irina and her team are such lovely teachers. They get results while treating all the children with kindness and respect and keeping classes fun.",
    name: "Amanda",
    location: "Brookvale",
  },
  {
    quote:
      "These guys are great. We've been to a couple of swim schools and his improvement since we've come to SwimNest has been unreal.",
    name: "Toby",
    location: "Brookvale",
  },
  {
    quote:
      "Irina is fantastic. After trying lots of other teachers we finally found Irina and she tailors her approach so beautifully to suit our son.",
    name: "Daniella",
    location: "Terrey Hills",
  },
  {
    quote:
      "We had our first ever private swimming lesson with Irina for our 6 and 2 year olds, and I honestly couldn't believe how well it went.",
    name: "Tahira",
    location: "Private lessons, home pool",
  },
];
