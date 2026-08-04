"use client";

import { useEffect, useRef, useState } from "react";
import TestimonialCard from "./TestimonialCard";
import type { Testimonial } from "@/lib/data/testimonials";

export default function TestimonialsCarousel({ testimonials }: { testimonials: Testimonial[] }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const onScroll = () => {
      const cardWidth = track.firstElementChild?.clientWidth ?? 1;
      const gap = 24;
      const index = Math.round(track.scrollLeft / (cardWidth + gap));
      setActive(index);
    };

    track.addEventListener("scroll", onScroll, { passive: true });
    return () => track.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToIndex = (index: number) => {
    const track = trackRef.current;
    if (!track) return;
    const cardWidth = track.firstElementChild?.clientWidth ?? 0;
    const gap = 24;
    track.scrollTo({ left: index * (cardWidth + gap), behavior: "smooth" });
  };

  return (
    <div>
      <div
        ref={trackRef}
        className="flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.name}
            className="w-[86%] flex-shrink-0 snap-center sm:w-[60%] lg:w-[38%]"
          >
            <TestimonialCard
              quote={testimonial.quote}
              name={testimonial.name}
              location={testimonial.location}
            />
          </div>
        ))}
      </div>

      <div className="mt-7 flex items-center justify-center gap-6">
        <button
          type="button"
          onClick={() => scrollToIndex(Math.max(active - 1, 0))}
          disabled={active === 0}
          aria-label="Previous review"
          className="grid h-9 w-9 place-items-center rounded-full border border-line-on-light text-ink transition-colors hover:border-accent-strong hover:text-accent-strong disabled:opacity-30"
        >
          ←
        </button>

        <div className="flex items-center gap-2">
          {testimonials.map((testimonial, index) => (
            <button
              key={testimonial.name}
              type="button"
              onClick={() => scrollToIndex(index)}
              aria-label={`Go to review from ${testimonial.name}`}
              aria-current={active === index}
              className={
                active === index
                  ? "h-2 w-6 rounded-full bg-accent-strong transition-all"
                  : "h-2 w-2 rounded-full bg-line-on-light transition-all hover:bg-accent"
              }
            />
          ))}
        </div>

        <button
          type="button"
          onClick={() => scrollToIndex(Math.min(active + 1, testimonials.length - 1))}
          disabled={active === testimonials.length - 1}
          aria-label="Next review"
          className="grid h-9 w-9 place-items-center rounded-full border border-line-on-light text-ink transition-colors hover:border-accent-strong hover:text-accent-strong disabled:opacity-30"
        >
          →
        </button>
      </div>
    </div>
  );
}
