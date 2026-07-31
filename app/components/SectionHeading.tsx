export default function SectionHeading({
  eyebrow,
  title,
  description,
  light,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  light?: boolean;
}) {
  return (
    <div className="mb-12 flex flex-wrap items-end justify-between gap-8">
      <div>
        {eyebrow && (
          <p
            className={
              "mb-3 flex items-center gap-[0.6em] text-2xs font-bold tracking-[0.16em] uppercase before:h-px before:w-7 before:bg-current before:opacity-60 " +
              (light ? "text-sunlit" : "text-aqua-bright")
            }
          >
            {eyebrow}
          </p>
        )}
        <h2
          className={
            "max-w-[12ch] font-display text-2xl leading-[0.98] text-balance uppercase " +
            (light ? "text-foam" : "text-ink")
          }
        >
          {title}
        </h2>
      </div>
      {description && (
        <p
          className={
            "max-w-[38ch] text-md font-light " + (light ? "text-foam/68" : "text-ink/68")
          }
        >
          {description}
        </p>
      )}
    </div>
  );
}
