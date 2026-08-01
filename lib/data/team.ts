export type TeamMember = {
  name: string;
  role: string;
  bio: string;
  fullBio: string[];
  photo: string;
};

export const team: TeamMember[] = [
  {
    name: "Irina Skvortsova",
    role: "Owner & Head Coach",
    bio: "16 years of coaching experience leading SwimNest's teaching philosophy — patient, personalised instruction for every swimmer.",
    fullBio: [
      "Irina has been coaching swimming since 2010, with over 16 years of experience helping children and adults become confident, capable swimmers. Her coaching journey began in Russia, where she worked as a swimming instructor at a local fitness centre, bringing a background as a competitive open-water swimmer. She quickly found a natural ability to break swimming down into simple, achievable steps.",
      "Across her career, Irina has coached in three countries — Russia, the UAE and Australia — working with more than 20 swim schools. She teaches everyone from anxious young beginners to adults overcoming a fear of water, and adults training for endurance events like the Cole Classic.",
      "At SwimNest, Irina believes swimming lessons are about more than learning strokes — they're about building trust, resilience and a lifelong love of water, starting from the very first splash.",
    ],
    photo: "/images/team/irina.jpg",
  },
  {
    name: "Peter Henry",
    role: "Coach",
    bio: "Coaching with SwimNest since 2007, bringing nearly two decades of experience to swimmers of every age and level.",
    fullBio: [
      "Peter has been coaching swimming since 2007, working with swimmers of every level — from babies and beginners to adults, swimmers with special needs, and competitive squad athletes. After a career in retail, he made the switch to a profession that matched his real passion: swimming, running and triathlon had been a major part of his life, including years competing as a triathlete.",
      "During his competitive years, Peter was coached by an Australian Olympic swim coach — an experience that gave him a strong technical foundation he now brings into every lesson. He tailors his approach to each swimmer's needs, abilities and goals, and says his only regret is not starting swim coaching earlier in life.",
    ],
    photo: "/images/team/peter.jpg",
  },
  {
    name: "Kenya Guezou",
    role: "Coach",
    bio: "Part of the SwimNest coaching team, helping swimmers build technique and confidence in the water.",
    fullBio: [
      "Kenya has been part of the SwimNest team since 2021. With a competitive swimming background, she enjoys teaching swimmers of all ages and abilities, from beginners to advanced levels, bringing a positive, patient and encouraging approach to every lesson.",
      "Alongside coaching, Kenya is currently studying to become a chiropractor — giving her a strong understanding of movement and body awareness that carries into how she teaches.",
    ],
    photo: "/images/team/kenya.jpg",
  },
];
