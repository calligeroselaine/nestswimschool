import Link from "next/link";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { locations } from "@/lib/data/locations";

export default function LocationsGrid() {
  return (
    <section id="locations" className="bg-ink">
      <div className="mx-auto max-w-[1180px] px-5 py-[clamp(4.5rem,9vw,7.5rem)] md:px-14">
        <Reveal>
          <SectionHeading
            title="Find your nearest pool."
            description="Four ways to learn — from purpose-built pools to your own backyard."
            light
          />
        </Reveal>

        <Reveal className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {locations.map((location) => (
            <Link
              key={location.slug}
              href={`/locations/${location.slug}`}
              className="flex min-h-[170px] flex-col justify-between rounded-2xl border border-line-on-dark p-6 no-underline transition-colors hover:border-sunlit hover:bg-sunlit/6"
            >
              <div>
                <p className="flex items-center gap-[0.6em] text-2xs font-bold tracking-[0.16em] text-sunlit uppercase before:h-px before:w-7 before:bg-current before:opacity-60">
                  {location.eyebrow}
                </p>
                <h3 className="mt-2.5 font-display text-md text-foam uppercase">
                  {location.name}
                </h3>
                <p className="mt-2 text-xs text-foam/66">{location.cardDescription}</p>
              </div>
            </Link>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
