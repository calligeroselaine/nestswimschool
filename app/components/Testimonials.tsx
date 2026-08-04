import Reveal from "./Reveal";
import Section from "./Section";
import SectionHeading from "./SectionHeading";
import TestimonialsCarousel from "./TestimonialsCarousel";
import { testimonials } from "@/lib/data/testimonials";

export default function Testimonials() {
  return (
    <Section id="families">
      <Reveal>
        <SectionHeading
          title="What families notice."
          description="The moment a nervous swimmer stops clinging to the wall — that's the moment parents tell us about."
        />
      </Reveal>

      <Reveal>
        <TestimonialsCarousel testimonials={testimonials} />
      </Reveal>
    </Section>
  );
}
