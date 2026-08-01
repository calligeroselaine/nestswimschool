import Reveal from "./Reveal";
import Section from "./Section";
import SectionHeading from "./SectionHeading";
import ProgramCard from "./ProgramCard";
import { programs } from "@/lib/data/programs";

const featureGradient = "linear-gradient(160deg, #17435C 0%, #1F5C72 55%, #4CA6C0 100%)";
const cardGradients = [
  "linear-gradient(160deg, #1B4E68 0%, #3E90B0 100%)",
  "linear-gradient(160deg, #1B435A 0%, #2F6E88 100%)",
  "linear-gradient(160deg, #123449 0%, #1B4E68 100%)",
  "linear-gradient(160deg, #17435C 0%, #2A6076 100%)",
];

export default function ProgramsGrid() {
  const feature = programs.find((p) => p.featured) ?? programs[0];
  const rest = programs.filter((p) => p.slug !== feature.slug);

  return (
    <Section id="programs">
      <Reveal>
        <SectionHeading
          title="Every swimmer learns differently."
          description="Five pathways, one goal — real progress that feels engaging, supportive and fun, whichever way your child learns best."
        />
      </Reveal>

      <Reveal>
        <ProgramCard
          href={`/programs/${feature.slug}`}
          tag={feature.tag}
          title={feature.shortName}
          description={feature.cardDescription}
          gradient={featureGradient}
          feature
        />
      </Reveal>

      <Reveal className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {rest.map((program, i) => (
          <ProgramCard
            key={program.slug}
            href={`/programs/${program.slug}`}
            tag={program.tag}
            title={program.shortName}
            description={program.cardDescription}
            gradient={cardGradients[i % cardGradients.length]}
          />
        ))}
      </Reveal>
    </Section>
  );
}
