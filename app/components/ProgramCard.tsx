import Link from "next/link";

export default function ProgramCard({
  href,
  tag,
  title,
  description,
  gradient,
  feature,
}: {
  href: string;
  tag: string;
  title: string;
  description: string;
  gradient: string;
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
      style={{ background: gradient }}
    >
      <span className="mb-3 text-2xs font-bold tracking-[0.14em] text-sunlit uppercase">
        {tag}
      </span>
      <h3
        className={
          feature
            ? "mb-2 max-w-[16ch] font-display text-xl leading-none text-balance uppercase"
            : "mb-2 font-display text-lg leading-none text-balance uppercase"
        }
      >
        {title}
      </h3>
      <p
        className={
          feature
            ? "max-w-[46ch] text-sm font-light text-foam/86"
            : "max-w-[30ch] text-sm font-light text-foam/86"
        }
      >
        {description}
      </p>
      {feature && (
        <span className="mt-4 inline-flex items-center gap-1.5 text-xs font-bold tracking-[0.02em]">
          Explore {title}
          <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">
            →
          </span>
        </span>
      )}
    </Link>
  );
}
