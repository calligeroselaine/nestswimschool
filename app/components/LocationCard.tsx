import Link from "next/link";

export default function LocationCard({
  href,
  eyebrow,
  name,
  description,
  active,
}: {
  href: string;
  eyebrow: string;
  name: string;
  description: string;
  active?: boolean;
}) {
  return (
    <Link
      href={href}
      aria-current={active ? "page" : undefined}
      className={
        "flex min-h-[170px] flex-col justify-between rounded-2xl border p-6 no-underline transition-colors hover:border-sunlit hover:bg-sunlit/6 " +
        (active ? "border-sunlit bg-sunlit/6" : "border-line-on-dark")
      }
    >
      <div>
        <p className="flex items-center gap-[0.6em] text-2xs font-bold tracking-[0.16em] text-sunlit uppercase before:h-px before:w-7 before:bg-current before:opacity-60">
          {eyebrow}
        </p>
        <h3 className="mt-2.5 font-display text-md text-foam uppercase">{name}</h3>
        <p className="mt-2 text-xs text-foam/66">{description}</p>
      </div>
    </Link>
  );
}
