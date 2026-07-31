import Link from "next/link";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { programs } from "@/lib/data/programs";

export default function PricesSummary() {
  return (
    <section id="prices" className="bg-foam">
      <div className="mx-auto max-w-[1180px] px-5 py-[clamp(4.5rem,9vw,7.5rem)] md:px-14">
        <Reveal>
          <SectionHeading
            title="Simple, transparent prices."
            description="A starting point for every program — exact pricing depends on location, class size and lesson length."
          />
        </Reveal>

        <Reveal className="divide-y divide-line-on-light overflow-hidden rounded-2xl border border-line-on-light bg-foam-dim">
          {programs.map((program) => (
            <Link
              key={program.slug}
              href={`/programs/${program.slug}`}
              className="flex flex-wrap items-center justify-between gap-3 px-6 py-5 text-ink no-underline transition-colors hover:bg-foam"
            >
              <span className="font-display text-md uppercase">{program.shortName}</span>
              <span className="flex items-center gap-4 text-sm text-ink/70">
                {program.pricingNote ?? `From ${program.pricing[0]?.price ?? ""}`}
                <span aria-hidden="true" className="text-accent-strong">
                  →
                </span>
              </span>
            </Link>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
