import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { programs, getProgramBySlug } from "@/lib/data/programs";
import { locations } from "@/lib/data/locations";
import PageHeader from "@/app/components/PageHeader";
import PricingTable from "@/app/components/PricingTable";
import Reveal from "@/app/components/Reveal";

import OceanSkillsContent from "../_content/classes-ocean-skills";
import PrivateClassesContent from "../_content/private-classes";
import GroupClassesContent from "../_content/group-classes";
import HolidayIntensiveContent from "../_content/classes-holiday-intensive";
import StrokeCorrectionContent from "../_content/classes-stroke-correction";

const contentBySlug: Record<string, React.ComponentType> = {
  "classes-ocean-skills": OceanSkillsContent,
  "private-classes": PrivateClassesContent,
  "group-classes": GroupClassesContent,
  "classes-holiday-intensive": HolidayIntensiveContent,
  "classes-stroke-correction": StrokeCorrectionContent,
};

export function generateStaticParams() {
  return programs.map((program) => ({ slug: program.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const program = getProgramBySlug(slug);
  if (!program) return {};
  return {
    title: program.name,
    description: program.tagline,
  };
}

export default async function ProgramPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const program = getProgramBySlug(slug);
  if (!program) notFound();

  const Content = contentBySlug[program.slug];
  const availableAt = locations.filter((location) =>
    location.programSlugs.includes(program.slug),
  );

  return (
    <>
      <PageHeader eyebrow={program.tag} title={program.name} tagline={program.tagline} />

      <section className="bg-foam">
        <div className="mx-auto grid max-w-[1180px] grid-cols-1 gap-12 px-5 py-[clamp(4.5rem,9vw,7.5rem)] md:px-14 lg:grid-cols-[1.3fr_1fr]">
          <Reveal className="space-y-4 text-base font-light text-ink/80">
            <p className="text-lg text-ink">{program.audience}</p>
            {Content && <Content />}
          </Reveal>

          <Reveal className="space-y-6">
            <div>
              <h2 className="mb-3 text-2xs font-bold tracking-[0.14em] text-aqua-bright uppercase">
                Pricing
              </h2>
              <PricingTable rows={program.pricing} note={program.pricingNote} />
            </div>

            {availableAt.length > 0 && (
              <div>
                <h2 className="mb-3 text-2xs font-bold tracking-[0.14em] text-aqua-bright uppercase">
                  Available at
                </h2>
                <ul className="flex flex-wrap gap-2">
                  {availableAt.map((location) => (
                    <li key={location.slug}>
                      <Link
                        href={`/locations/${location.slug}`}
                        className="inline-block rounded-full border border-line-on-light px-4 py-2 text-xs font-semibold text-ink no-underline transition-colors hover:border-accent-strong hover:text-accent-strong"
                      >
                        {location.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <Link
              href="/#enquire"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-7 py-[0.95rem] text-sm font-bold text-ink no-underline transition-[background,transform] hover:-translate-y-0.5 hover:bg-sunlit"
            >
              Book a Free Trial
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
