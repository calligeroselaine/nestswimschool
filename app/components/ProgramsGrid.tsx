import Reveal from "./Reveal";
import Section from "./Section";
import SectionHeading from "./SectionHeading";
import ProgramCard from "./ProgramCard";
import { programs } from "@/lib/data/programs";

export default function ProgramsGrid() {
  const feature = programs.find((p) => p.featured) ?? programs[0];
  const rest = programs.filter((p) => p.slug !== feature.slug);

  return (
    <Section id="programs">
      <Reveal>
        <SectionHeading
          title="Every swimmer learns differently."
          description="Six pathways, one goal — real progress that feels engaging, supportive and fun, whichever way your child learns best."
        />
      </Reveal>

      <Reveal>
        <ProgramCard
          href={`/programs/${feature.slug}`}
          tag={feature.tag}
          title={feature.shortName}
          description={feature.cardDescription}
          image={feature.image}
          feature
        />
      </Reveal>

      <Reveal className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {rest.map((program) => (
          <ProgramCard
            key={program.slug}
            href={`/programs/${program.slug}`}
            tag={program.tag}
            title={program.shortName}
            description={program.cardDescription}
            image={program.image}
          />
        ))}
      </Reveal>
    </Section>
  );
}
