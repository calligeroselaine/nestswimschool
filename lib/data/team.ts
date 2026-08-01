export type TeamMember = {
  name: string;
  role: string;
  bio: string;
  photo: string;
};

export const team: TeamMember[] = [
  {
    name: "Irina Skvortsova",
    role: "Owner & Head Coach",
    bio: "16 years of coaching experience leading SwimNest's teaching philosophy — patient, personalised instruction for every swimmer.",
    photo: "/images/team/irina.jpg",
  },
  {
    name: "Peter Henry",
    role: "Coach",
    bio: "Coaching with SwimNest since 2007, bringing nearly two decades of experience to swimmers of every age and level.",
    photo: "/images/team/peter.jpg",
  },
  {
    name: "Kenya Guezou",
    role: "Coach",
    bio: "Part of the SwimNest coaching team, helping swimmers build technique and confidence in the water.",
    photo: "/images/team/kenya.jpg",
  },
];
