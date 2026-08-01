import Reveal from "./Reveal";
import Button from "./Button";
import Section from "./Section";
import EnquiryForm from "./EnquiryForm";

export default function ClosingCta() {
  return (
    <Section id="enquire" tone="depth" className="text-center">
      <Reveal>
        <p className="flex items-center justify-center gap-[0.6em] text-2xs font-bold tracking-[0.16em] text-sunlit uppercase before:h-px before:w-7 before:bg-current before:opacity-60">
          Begin the journey
        </p>
        <h2 className="mx-auto mt-4 max-w-[16ch] font-display text-2xl leading-[0.98] text-foam text-balance uppercase">
          Ready to swap uncertain for unstoppable?
        </h2>
        <p className="mx-auto mt-5 max-w-[40ch] text-md font-light text-foam/75">
          Book a free trial lesson and see how quickly confidence takes over &mdash; one small,
          supported step at a time.
        </p>
        <div className="mt-9 flex flex-wrap justify-center gap-4">
          <Button href="#enquiry-form">Book a Free Trial</Button>
          <Button href="#prices" variant="outline">
            View Prices &amp; Programs
          </Button>
        </div>
        <EnquiryForm />
      </Reveal>
    </Section>
  );
}
