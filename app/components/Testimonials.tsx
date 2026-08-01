import Reveal from "./Reveal";
import Section from "./Section";
import SectionHeading from "./SectionHeading";
import TestimonialCard from "./TestimonialCard";
import { testimonials } from "@/lib/data/testimonials";

export default function Testimonials() {
  const featured = testimonials.slice(0, 3);

  return (
    <Section id="families">
      <Reveal>
        <SectionHeading
          title="What families notice."
          description="The moment a nervous swimmer stops clinging to the wall — that's the moment parents tell us about."
        />
      </Reveal>

      <Reveal className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {featured.map((testimonial) => (
          <TestimonialCard
            key={testimonial.name}
            quote={testimonial.quote}
            name={testimonial.name}
            location={testimonial.location}
          />
        ))}
      </Reveal>
    </Section>
  );
}
