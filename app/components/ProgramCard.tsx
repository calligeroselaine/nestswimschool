import Link from "next/link";
import Image from "next/image";

export default function ProgramCard({
  href,
  tag,
  title,
  description,
  image,
  feature,
}: {
  href: string;
  tag: string;
  title: string;
  description: string;
  image: string;
  feature?: boolean;
}) {
  return (
    <Link
      href={href}
      className={
        feature
          ? "group relative flex min-h-[320px] flex-col justify-end overflow-hidden rounded-[22px] p-8 text-foam no-underline"
          : "relative flex min-h-[240px] flex-col justify-end overflow-hidden rounded-[22px] p-7 text-foam no-underline"
      }
    >
      <Image
        src={image}
        alt=""
        fill
        sizes={feature ? "(min-width: 1024px) 590px, 100vw" : "(min-width: 1024px) 280px, 100vw"}
        className="object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(to top, rgba(18,52,73,0.92) 0%, rgba(18,52,73,0.55) 45%, rgba(18,52,73,0.12) 100%)",
        }}
      />
      <span className="relative mb-3 text-2xs font-bold tracking-[0.14em] text-sunlit uppercase">
        {tag}
      </span>
      <h3
        className={
          feature
            ? "relative mb-2 max-w-[16ch] font-display text-xl leading-none text-balance uppercase"
            : "relative mb-2 font-display text-lg leading-none text-balance uppercase"
        }
      >
        {title}
      </h3>
      <p
        className={
          feature
            ? "relative max-w-[46ch] text-sm font-light text-foam/86"
            : "relative max-w-[30ch] text-sm font-light text-foam/86"
        }
      >
        {description}
      </p>
      {feature && (
        <span className="relative mt-4 inline-flex items-center gap-1.5 text-xs font-bold tracking-[0.02em]">
          Explore {title}
          <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">
            →
          </span>
        </span>
      )}
    </Link>
  );
}
