import Reveal from "./Reveal";
import Section from "./Section";
import SectionHeading from "./SectionHeading";
import LocationCard from "./LocationCard";
import { locations } from "@/lib/data/locations";

export default function LocationsGrid() {
  return (
    <Section id="locations" tone="ink">
      <Reveal>
        <SectionHeading
          title="Find your nearest pool."
          description="Four ways to learn — from purpose-built pools to your own backyard."
          light
        />
      </Reveal>

      <Reveal className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {locations.map((location) => (
          <LocationCard
            key={location.slug}
            href={`/locations/${location.slug}`}
            eyebrow={location.eyebrow}
            name={location.name}
            description={location.cardDescription}
          />
        ))}
      </Reveal>
    </Section>
  );
}
