import Reveal from "./Reveal";
import Section from "./Section";
import SectionHeading from "./SectionHeading";
import TeamProfile from "./TeamProfile";
import { team } from "@/lib/data/team";

export default function Team() {
  return (
    <Section id="team" tone="depth">
      <Reveal>
        <SectionHeading
          eyebrow="Meet the coaches"
          title="Taught by people who love this."
          description="A small, experienced team who know every swimmer by name — not a rotating roster of casual staff."
          light
        />
      </Reveal>

      <Reveal className="grid grid-cols-1 gap-5 sm:grid-cols-3">
        {team.map((member) => (
          <TeamProfile
            key={member.name}
            name={member.name}
            role={member.role}
            bio={member.bio}
            fullBio={member.fullBio}
            photo={member.photo}
          />
        ))}
      </Reveal>
    </Section>
  );
}
