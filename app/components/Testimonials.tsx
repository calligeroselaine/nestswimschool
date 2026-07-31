import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { testimonials } from "@/lib/data/testimonials";

export default function Testimonials() {
  const featured = testimonials.slice(0, 3);

  return (
    <section id="families" className="bg-foam">
      <div className="mx-auto max-w-[1180px] px-5 py-[clamp(4.5rem,9vw,7.5rem)] md:px-14">
        <Reveal>
          <SectionHeading
            title="What families notice."
            description="The moment a nervous swimmer stops clinging to the wall — that's the moment parents tell us about."
          />
        </Reveal>

        <Reveal className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {featured.map((testimonial) => (
            <div
              key={testimonial.name}
              className="flex flex-col gap-5 rounded-2xl border border-line-on-light bg-foam-dim p-8"
            >
              <div aria-hidden="true" className="text-sm tracking-[0.15em] text-accent-strong">
                ★★★★★
              </div>
              <p className="text-base leading-[1.65] text-ink">&ldquo;{testimonial.quote}&rdquo;</p>
              <div className="mt-auto flex items-center gap-3">
                <div className="grid h-[38px] w-[38px] flex-shrink-0 place-items-center rounded-full bg-aqua font-display text-sm text-foam">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <div className="text-xs font-bold">{testimonial.name}</div>
                  <div className="text-2xs text-ink/55">{testimonial.location}</div>
                </div>
              </div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
