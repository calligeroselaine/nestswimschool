import Link from "next/link";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { programs } from "@/lib/data/programs";

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
    <section id="programs" className="bg-foam">
      <div className="mx-auto max-w-[1180px] px-5 py-[clamp(4.5rem,9vw,7.5rem)] md:px-14">
        <Reveal>
          <SectionHeading
            title="Every swimmer learns differently."
            description="Five pathways, one goal — real progress that feels engaging, supportive and fun, whichever way your child learns best."
          />
        </Reveal>

        <Reveal>
          <Link
            href={`/programs/${feature.slug}`}
            className="group relative flex min-h-[320px] flex-col justify-end overflow-hidden rounded-[22px] p-8 text-foam no-underline"
            style={{ background: "linear-gradient(160deg, #17435C 0%, #1F5C72 55%, #4CA6C0 100%)" }}
          >
            <span className="mb-3 text-2xs font-bold tracking-[0.14em] text-sunlit uppercase">
              {feature.tag}
            </span>
            <h3 className="mb-2 max-w-[16ch] font-display text-xl leading-none text-balance uppercase">
              {feature.shortName}
            </h3>
            <p className="max-w-[46ch] text-sm font-light text-foam/86">
              {feature.cardDescription}
            </p>
            <span className="mt-4 inline-flex items-center gap-1.5 text-xs font-bold tracking-[0.02em]">
              Explore {feature.shortName}
              <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">
                →
              </span>
            </span>
          </Link>
        </Reveal>

        <Reveal className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {rest.map((program, i) => (
            <Link
              key={program.slug}
              href={`/programs/${program.slug}`}
              className="relative flex min-h-[240px] flex-col justify-end overflow-hidden rounded-[22px] p-7 text-foam no-underline"
              style={{ background: cardGradients[i % cardGradients.length] }}
            >
              <span className="mb-3 text-2xs font-bold tracking-[0.14em] text-sunlit uppercase">
                {program.tag}
              </span>
              <h3 className="mb-2 font-display text-lg leading-none text-balance uppercase">
                {program.shortName}
              </h3>
              <p className="max-w-[30ch] text-sm font-light text-foam/86">
                {program.cardDescription}
              </p>
            </Link>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
