export default function TestimonialCard({
  quote,
  name,
  location,
}: {
  quote: string;
  name: string;
  location: string;
}) {
  return (
    <div className="flex flex-col gap-5 rounded-2xl border border-line-on-light bg-foam-dim p-8">
      <div aria-hidden="true" className="text-sm tracking-[0.15em] text-accent-strong">
        ★★★★★
      </div>
      <p className="text-base leading-[1.65] text-ink">&ldquo;{quote}&rdquo;</p>
      <div className="mt-auto flex items-center gap-3">
        <div className="grid h-[38px] w-[38px] flex-shrink-0 place-items-center rounded-full bg-aqua font-display text-sm text-foam">
          {name.charAt(0)}
        </div>
        <div>
          <div className="text-xs font-bold">{name}</div>
          <div className="text-2xs text-ink/55">{location}</div>
        </div>
      </div>
    </div>
  );
}
