import Link from "next/link";
import Reveal from "./Reveal";

export default function PageHeader({
  eyebrow,
  title,
  tagline,
}: {
  eyebrow: string;
  title: string;
  tagline: string;
}) {
  return (
    <header className="bg-ink pt-32 pb-16 md:pt-40 md:pb-20">
      <Reveal className="mx-auto max-w-[1180px] px-5 md:px-14">
        <p className="mb-4 flex items-center gap-[0.6em] text-2xs font-bold tracking-[0.16em] text-sunlit uppercase before:h-px before:w-7 before:bg-current before:opacity-60">
          {eyebrow}
        </p>
        <h1 className="max-w-[18ch] font-display text-2xl leading-[0.98] text-foam text-balance uppercase">
          {title}
        </h1>
        <p className="mt-4 max-w-[46ch] text-md font-light text-foam/80">{tagline}</p>
        <Link
          href="/#enquire"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-accent px-7 py-[0.95rem] text-sm font-bold text-ink no-underline transition-[background,transform] hover:-translate-y-0.5 hover:bg-sunlit"
        >
          Book a Free Trial
        </Link>
      </Reveal>
    </header>
  );
}
