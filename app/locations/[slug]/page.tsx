import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { locations, getLocationBySlug } from "@/lib/data/locations";
import { programs } from "@/lib/data/programs";
import { SITE_URL } from "@/lib/site";
import PageHeader from "@/app/components/PageHeader";
import Reveal from "@/app/components/Reveal";
import Section from "@/app/components/Section";
import LocationJsonLd from "@/app/components/JsonLd";
import BreadcrumbJsonLd from "@/app/components/BreadcrumbJsonLd";
import Button from "@/app/components/Button";

import TerreyHillsContent from "../_content/locations-terrey-hills";
import BrookvaleContent from "../_content/locations-brookvale";
import RockpoolsContent from "../_content/locations-rockpools";
import ResidentialContent from "../_content/locations-residential";

const contentBySlug: Record<string, React.ComponentType> = {
  "locations-terrey-hills": TerreyHillsContent,
  "locations-brookvale": BrookvaleContent,
  "locations-rockpools": RockpoolsContent,
  "locations-residential": ResidentialContent,
};

export function generateStaticParams() {
  return locations.map((location) => ({ slug: location.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const location = getLocationBySlug(slug);
  if (!location) return {};
  const url = `${SITE_URL}/locations/${location.slug}`;
  return {
    title: location.name,
    description: location.cardDescription,
    alternates: { canonical: url },
    openGraph: {
      title: `${location.name} | SwimNest`,
      description: location.cardDescription,
      url,
    },
    twitter: {
      title: `${location.name} | SwimNest`,
      description: location.cardDescription,
    },
  };
}

export default async function LocationPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const location = getLocationBySlug(slug);
  if (!location) notFound();

  const Content = contentBySlug[location.slug];
  const offeredPrograms = programs.filter((program) =>
    location.programSlugs.includes(program.slug),
  );

  const mapQuery = location.address
    ? `${location.address.street}, ${location.address.suburb} ${location.address.state} ${location.address.postcode}`
    : null;

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: SITE_URL },
          { name: "Locations", url: `${SITE_URL}/#locations` },
          { name: location.name, url: `${SITE_URL}/locations/${location.slug}` },
        ]}
      />
      {location.address && (
        <LocationJsonLd
          name={location.name}
          address={location.address}
          url={`${SITE_URL}/locations/${location.slug}`}
        />
      )}
      <PageHeader
        eyebrow={location.eyebrow}
        title={location.displayHeading}
        tagline={location.cardDescription}
      />

      <Section innerClassName="grid grid-cols-1 gap-12 pb-0 lg:grid-cols-[1.3fr_1fr]">
        <Reveal className="space-y-4 text-base font-light text-ink/80">
          {Content && <Content />}
        </Reveal>

        <Reveal className="space-y-6">
          {location.address && (
            <div>
              <h2 className="mb-3 text-2xs font-bold tracking-[0.14em] text-aqua-bright uppercase">
                Address
              </h2>
              <p className="text-sm text-ink/80">
                {location.address.street}
                <br />
                {location.address.suburb} {location.address.state} {location.address.postcode}
              </p>
            </div>
          )}

          {offeredPrograms.length > 0 && (
            <div>
              <h2 className="mb-3 text-2xs font-bold tracking-[0.14em] text-aqua-bright uppercase">
                Programs here
              </h2>
              <ul className="flex flex-wrap gap-2">
                {offeredPrograms.map((program) => (
                  <li key={program.slug}>
                    <Link
                      href={`/programs/${program.slug}`}
                      className="inline-block rounded-full border border-line-on-light px-4 py-2 text-xs font-semibold text-ink no-underline transition-colors hover:border-accent-strong hover:text-accent-strong"
                    >
                      {program.shortName}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <Button href="/#enquire">Book a Free Trial</Button>
        </Reveal>
      </Section>

      {mapQuery && (
        <div className="bg-foam px-5 pb-[clamp(4.5rem,9vw,7.5rem)] md:px-14">
          <div className="mx-auto max-w-[1180px]">
            <iframe
              title={`Map showing ${location.name}`}
              src={`https://www.google.com/maps?q=${encodeURIComponent(mapQuery)}&output=embed`}
              className="h-[360px] w-full rounded-2xl border border-line-on-light"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      )}
    </>
  );
}
