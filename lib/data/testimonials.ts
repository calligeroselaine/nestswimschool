export type Testimonial = {
  quote: string;
  name: string;
  location: string;
};

// Real reviews sourced from swimnest.com.au — every review on the live
// site, not a curated subset. Long reviews are trimmed to a single,
// unedited contiguous excerpt rather than paraphrased.
export const testimonials: Testimonial[] = [
  {
    quote:
      "From the moment we arrived, Irina was so warm, patient, attentive, and genuinely caring with every baby. She took such great care to make sure all of the babies felt calm, safe, relaxed, and comfortable throughout the entire class, and it really showed how passionate she is about what she does.",
    name: "Carolina",
    location: "Brookvale",
  },
  {
    quote:
      "Irina and her team are such lovely teachers. They get results while treating all the children with kindness and respect and keeping classes fun. My little one didn't really enjoy swimming lessons before we started with Irina and Peter. Now he loves them and he's improved so much.",
    name: "Amanda",
    location: "Brookvale",
  },
  {
    quote:
      "These guys are great. We've been to a couple of swim schools and his improvement since we've come to SwimNest Swim School has been unreal. The team are fantastic, patient and know how to teach young children. Highly recommend.",
    name: "Toby",
    location: "Brookvale",
  },
  {
    quote:
      "Irina and her team are amazing. We have now got all of our kids in their classes and we couldn't be happier. The lessons are personal and you don't feel like just a number. They show care and compassion, and have easily balanced the various needs of all our kids with ease.",
    name: "James",
    location: "Brookvale",
  },
  {
    quote:
      "Irina is fantastic. After trying lots of other teachers we finally found Irina and she tailors her approach so beautifully to suit our son. His swimming has come along in leaps and bounds. I highly recommend Swim Nest.",
    name: "Daniella",
    location: "Terrey Hills",
  },
  {
    quote:
      "We had our first ever private swimming lesson with Irina for our 6 and 2 year olds, and I honestly couldn't believe how well it went. She was so warm and welcoming, and somehow managed to make both kids feel completely comfortable in the water straight away.",
    name: "Tahira",
    location: "Private lessons, home pool",
  },
];
