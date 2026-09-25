import Image from "next/image";
import Link from "next/link";
import { programs } from "@/lib/data/programs";
import { locations } from "@/lib/data/locations";

export default function Footer() {
  return (
    <footer className="flex flex-wrap items-start justify-between gap-8 border-t border-line-on-dark bg-ink px-5 py-10 text-2xs text-foam/55 md:px-14">
      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-2">
          <Image
            src="/images/logo-icon.png"
            alt=""
            width={183}
            height={112}
            className="h-8 w-auto"
          />
          <span className="font-display text-base text-foam uppercase">SwimNest</span>
        </div>
        <p className="max-w-[26ch] text-foam/70">
          Small classes. Big confidence. Swim lessons across Sydney&rsquo;s Northern Beaches.
        </p>
      </div>

      <div className="flex flex-wrap gap-10">
        <FooterColumn title="Programs">
          {programs.map((program) => (
            <Link
              key={program.slug}
              href={`/programs/${program.slug}`}
              className="text-foam/60 no-underline hover:text-foam"
            >
              {program.shortName}
            </Link>
          ))}
        </FooterColumn>

        <FooterColumn title="Locations">
          {locations.map((location) => (
            <Link
              key={location.slug}
              href={`/locations/${location.slug}`}
              className="text-foam/60 no-underline hover:text-foam"
            >
              {location.name}
            </Link>
          ))}
        </FooterColumn>

        <FooterColumn title="SwimNest">
          <Link href="/#team" className="text-foam/60 no-underline hover:text-foam">
            Team
          </Link>
          <Link href="/#prices" className="text-foam/60 no-underline hover:text-foam">
            Prices
          </Link>
          <Link href="/#enquire" className="text-foam/60 no-underline hover:text-foam">
            Book a Free Trial
          </Link>
          <a
            href="https://swimnest.ud.io"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foam/60 no-underline hover:text-foam"
          >
            Swimmers&rsquo; Portal
          </a>
        </FooterColumn>

        <FooterColumn title="Contact">
          <a href="tel:+61433611550" className="text-foam/60 no-underline hover:text-foam">
            0433 611 550
          </a>
          <a
            href="mailto:Irina@swimnest.com.au"
            className="text-foam/60 no-underline hover:text-foam"
          >
            Irina@swimnest.com.au
          </a>
        </FooterColumn>
      </div>

      <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-foam/70">
        <span>&copy; {new Date().getFullYear()} SwimNest Swim School</span>
        <Link href="/privacy-policy" className="text-foam/60 no-underline hover:text-foam">
          Privacy Policy
        </Link>
        <Link href="/terms-and-conditions" className="text-foam/60 no-underline hover:text-foam">
          Terms &amp; Conditions
        </Link>
        <span className="text-foam/70">
          Website by{" "}
          <a
            href="https://gevantage.com.au"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foam/70 no-underline hover:text-foam"
          >
            Gevantage
          </a>
        </span>
      </div>
    </footer>
  );
}

function FooterColumn({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-2">
      <p className="text-2xs font-bold tracking-[0.14em] text-foam/70 uppercase">{title}</p>
      {children}
    </div>
  );
}
