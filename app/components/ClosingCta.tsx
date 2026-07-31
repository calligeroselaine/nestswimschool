import Link from "next/link";
import Reveal from "./Reveal";
import EnquiryForm from "./EnquiryForm";

export default function ClosingCta() {
  return (
    <section id="enquire" className="bg-depth text-center">
      <Reveal className="mx-auto max-w-[1180px] px-5 py-[clamp(4.5rem,9vw,7.5rem)] md:px-14">
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
          <Link
            href="#enquiry-form"
            className="inline-flex items-center gap-2 rounded-full border-[1.5px] border-transparent bg-accent px-7 py-[0.95rem] text-sm font-bold text-ink no-underline transition-[background,transform] hover:-translate-y-0.5 hover:bg-sunlit"
          >
            Book a Free Trial
          </Link>
          <Link
            href="#prices"
            className="inline-flex items-center gap-2 rounded-full border-[1.5px] border-foam/50 bg-transparent px-7 py-[0.95rem] text-sm font-bold text-foam no-underline transition-[background,border-color,transform] hover:-translate-y-0.5 hover:border-foam hover:bg-foam/8"
          >
            View Prices &amp; Programs
          </Link>
        </div>
        <EnquiryForm />
      </Reveal>
    </section>
  );
}
