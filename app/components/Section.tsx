import clsx from "clsx";
import type { ReactNode } from "react";

type Tone = "foam" | "depth" | "ink";

const toneClasses: Record<Tone, string> = {
  foam: "bg-foam text-ink",
  depth: "bg-depth text-foam",
  ink: "bg-ink text-foam",
};

export default function Section({
  id,
  tone = "foam",
  children,
  className,
  innerClassName,
}: {
  id?: string;
  tone?: Tone;
  children: ReactNode;
  className?: string;
  innerClassName?: string;
}) {
  return (
    <section id={id} className={clsx(toneClasses[tone], className)}>
      <div
        className={clsx(
          "mx-auto max-w-[1180px] px-5 py-[clamp(4.5rem,9vw,7.5rem)] md:px-14",
          innerClassName,
        )}
      >
        {children}
      </div>
    </section>
  );
}
