import type { Metadata } from "next";
import PageHeader from "@/app/components/PageHeader";
import Section from "@/app/components/Section";
import Reveal from "@/app/components/Reveal";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "The terms that apply to using the SwimNest website.",
  alternates: { canonical: `${SITE_URL}/terms-and-conditions` },
};

const h2 = "mt-10 mb-3 font-display text-lg text-ink uppercase first:mt-0";
const p = "text-base font-light text-ink/80 leading-relaxed";
const ul = "list-disc space-y-1 pl-5 text-base font-light text-ink/80";
const category =
  "mt-16 mb-1 border-t border-line-on-light pt-10 font-display text-xl text-accent-strong uppercase tracking-wide first:mt-0 first:border-t-0 first:pt-0";
const categoryNote = "mb-6 text-sm font-light text-ink/60";

export default function TermsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Legal"
        title="Terms & Conditions"
        tagline="Last updated: August 2026. The terms that apply to using this website."
      />

      <Section>
        <Reveal className="mx-auto max-w-[70ch] space-y-1">
          <p className={p}>
            These terms apply to your use of the SwimNest website, and — from &ldquo;Group &amp;
            Enrolled Program Terms&rdquo; below — to enrolling a swimmer in SwimNest lessons. By
            using this site or enrolling, you agree to them. If you don&rsquo;t agree, please
            don&rsquo;t use the site or enrol.
          </p>

          <p className={category}>Group & Enrolled Program Terms</p>
          <p className={categoryNote}>
            These terms apply to ongoing group classes and other enrolled programs booked through
            our regular class schedule.
          </p>

          <h2 className={h2}>Enrolment & Program Structure</h2>
          <p className={p}>
            SwimNest operates as an ongoing, year-round swim program running approximately 50
            weeks per year. Lessons pause during the Christmas, New Year and Easter holidays,
            with dates communicated in advance.
          </p>
          <p className={p}>
            Lessons may operate during school holidays and public holidays unless otherwise
            advised by SwimNest.
          </p>
          <p className={p}>
            Enrolment secures an ongoing position in a class until written cancellation is
            received.
          </p>

          <h2 className={h2}>Payments</h2>
          <p className={p}>
            Lesson fees are charged fortnightly via direct debit (a fee of 1.7% for debit and
            credit cards will apply) or upfront for 12 weeks (10 weeks of school term + 2 weeks
            of holidays) via bank transfer.
          </p>
          <p className={p}>
            By enrolling, families authorise SwimNest to process recurring fortnightly payments
            using the nominated payment method.
          </p>
          <p className={p}>
            Failed or overdue payments may incur processing fees and may result in suspension of
            enrolment until outstanding balances are resolved.
          </p>

          <h2 className={h2}>Cancellation Policy</h2>
          <p className={p}>A minimum of two (2) weeks&rsquo; written notice is required to cancel enrolment.</p>
          <p className={p}>Fees continue to apply during the notice period.</p>
          <p className={p}>
            No refunds or credits are provided for missed classes during the cancellation period.
          </p>

          <h2 className={h2}>Spot Holding Policy</h2>
          <p className={p}>
            Families going on holidays may request to hold their class position for up to four
            (4) weeks.
          </p>
          <p className={p}>A holding fee of $15 per week applies to retain the class position.</p>
          <p className={p}>
            Spot holding requests must be submitted in advance and are subject to SwimNest
            approval.
          </p>
          <p className={p}>Positions held longer than four weeks may be released.</p>

          <h2 className={h2}>Flex Credit Policy</h2>
          <p className={p}>
            To maintain small class sizes and a consistent learning environment, SwimNest does
            not offer traditional make-up classes.
          </p>
          <p className={p}>
            If your child is unable to attend a lesson, SwimNest may provide up to two (2) Flex
            Credits per term where at least 12 hours&rsquo; notice is provided prior to the
            scheduled lesson.
          </p>
          <p className={p}>Flex Credits can be used toward:</p>
          <ul className={ul}>
            <li>school holiday programs;</li>
            <li>special clinics; or</li>
            <li>selected SwimNest events.</li>
          </ul>
          <p className={p}>
            Credits must be used within the following school holiday period of the same term and
            are subject to availability.
          </p>
          <p className={p}>
            Flex Credits are non-refundable, non-transferable and cannot be used toward regular
            weekly lessons.
          </p>
          <p className={p}>No-shows or absences without the required notice are not eligible for Flex Credits.</p>

          <h2 className={h2}>Missed Lessons</h2>
          <p className={p}>
            SwimNest is unable to guarantee alternative classes for missed lessons due to limited
            class availability.
          </p>

          <h2 className={h2}>Illness & Safety</h2>
          <p className={p}>
            Children who are unwell, contagious, or experiencing vomiting, diarrhoea, fever, or
            infectious conditions must not attend lessons.
          </p>
          <p className={p}>
            Parents/guardians are responsible for informing SwimNest of any medical or
            behavioural conditions relevant to participation.
          </p>

          <h2 className={h2}>Pool Closures & Instructor Changes</h2>
          <p className={p}>SwimNest reserves the right to:</p>
          <ul className={ul}>
            <li>change instructors;</li>
            <li>combine classes where necessary;</li>
            <li>modify lesson times; or</li>
            <li>
              cancel lessons due to pool closures, maintenance, safety concerns, or unforeseen
              circumstances.
            </li>
          </ul>
          <p className={p}>
            Where possible, reasonable notice will be provided and credit/refund organised.
          </p>

          <h2 className={h2}>Parent Responsibility</h2>
          <p className={p}>
            Parents/guardians remain responsible for supervising children outside lesson times
            and throughout the facility.
          </p>
          <p className={p}>SwimNest&rsquo;s responsibility applies only during the scheduled lesson duration.</p>

          <h2 className={h2}>Photography & Media</h2>
          <p className={p}>
            From time to time, SwimNest may capture photographs or videos for promotional and
            educational purposes.
          </p>
          <p className={p}>Families may opt out in writing at any time.</p>

          <p className={category}>Private & Rockpool Lesson Terms</p>
          <p className={categoryNote}>
            These terms apply specifically to Private and Rockpool lessons, in addition to the
            general terms above.
          </p>

          <h2 className={h2}>Payments</h2>
          <p className={p}>
            Monthly lesson fees are required upfront at the beginning of each month to secure
            your booking.
          </p>
          <p className={p}>Payments are due prior to the first scheduled lesson of the month.</p>
          <p className={p}>Lessons may be suspended if payment is not received.</p>

          <h2 className={h2}>Cancellations</h2>
          <p className={p}>
            <strong className="text-ink">Weather (Outdoor / Rockpools):</strong> Lessons will
            only be cancelled in the event of lightning or severe storm conditions. Rain alone is
            not considered a reason for cancellation. If SwimNest cancels due to unsafe weather, a
            make-up lesson or credit will be offered.
          </p>
          <p className={p}>
            <strong className="text-ink">Client Cancellations:</strong> A minimum of 12
            hours&rsquo; notice is required.
          </p>
          <ul className={ul}>
            <li>Less than 4 hours&rsquo; notice — full lesson fee applies.</li>
            <li>Between 4&ndash;12 hours&rsquo; notice — 50% of the lesson fee applies.</li>
            <li>Late arrivals do not extend lesson time.</li>
          </ul>
          <p className={p}>
            <strong className="text-ink">Teacher Cancellations:</strong> If cancelled by
            SwimNest, a make-up lesson or refund will be provided. In case of teacher illness or
            holidays, a qualified substitute teacher may be assigned.
          </p>

          <h2 className={h2}>Make-Up Lessons</h2>
          <ul className={ul}>
            <li>Each missed lesson is eligible for one (1) make-up class only.</li>
            <li>If the scheduled make-up lesson is missed, the lesson will be forfeited.</li>
            <li>
              Make-up lessons must be scheduled within the same calendar month and are subject to
              availability.
            </li>
            <li>Lessons cancelled due to lightning or storm may be rescheduled.</li>
          </ul>

          <h2 className={h2}>Private Pool Environment & Conditions</h2>
          <p className={p}>
            The client is responsible for ensuring the pool environment is safe, clean,
            accessible, and suitable for instruction.
          </p>
          <p className={p}>
            Recommended water temperature: 26&deg;C during summer conditions and 30&deg;C during
            colder weather.
          </p>
          <p className={p}>
            If a lesson cannot be completed due to unsuitable pool conditions or water
            temperature, the full lesson fee will apply.
          </p>

          <h2 className={h2}>Rockpool Lessons — Equipment & Conditions</h2>
          <p className={p}>
            It is the client&rsquo;s responsibility to ensure the swimmer is dressed appropriately
            for outdoor conditions, including suitable swimwear and, where recommended, a
            wetsuit.
          </p>
          <p className={p}>
            SwimNest strongly recommends wetsuits during cooler months to maintain comfort and
            maximise learning time.
          </p>
          <p className={p}>
            If a lesson is shortened due to the swimmer feeling cold or being inadequately
            prepared for water conditions, the full lesson fee will still apply.
          </p>

          <h2 className={h2}>Photo & Media Consent</h2>
          <p className={p}>
            Photos or short videos may be taken during lessons for educational, progress
            tracking, or promotional purposes.
          </p>
          <p className={p}>No child&rsquo;s full name or personal details will be published.</p>
          <p className={p}>Written consent will be obtained prior to any public promotional use.</p>
          <p className={p}>Families may withdraw consent at any time in writing.</p>

          <h2 className={h2}>Lesson Withdrawal & Notice</h2>
          <p className={p}>
            If you decide to discontinue lessons, we kindly request a minimum of two (2)
            weeks&rsquo; written notice.
          </p>
          <p className={p}>
            This allows us to offer your time slot to another family and maintain consistency
            within our schedule.
          </p>
          <p className={p}>
            Where notice is not provided, fees for the two-week notice period may still apply.
          </p>
          <p className={p}>We truly appreciate your understanding and consideration.</p>

          <h2 className={h2}>Agreement</h2>
          <p className={p}>
            By continuing with SwimNest lessons, families acknowledge and agree to these Terms
            &amp; Conditions. We are grateful for your trust and partnership in nurturing
            confident, capable swimmers.
          </p>

          <p className={category}>Website Terms</p>
          <p className={categoryNote}>
            These general terms apply to anyone using this website, regardless of enrolment.
          </p>

          <h2 className={h2}>About this website</h2>
          <p className={p}>
            This website is an informational site for SwimNest, a swim school operating across
            Sydney&rsquo;s Northern Beaches. It is not a booking platform — submitting the enquiry
            form registers your interest only and does not itself confirm a lesson, time, or
            place. Bookings and lesson administration for existing swimmers are handled through
            our separate Swimmers&rsquo; Portal (swimnest.ud.io), which has its own terms of use.
          </p>

          <h2 className={h2}>Using this website</h2>
          <p className={p}>You agree to use this website only for its intended purpose — to learn about our programs, locations, and to make an enquiry. You agree not to:</p>
          <ul className={ul}>
            <li>attempt to disrupt, overload, or interfere with the operation of the site;</li>
            <li>scrape, copy, or republish site content without our permission; or</li>
            <li>submit false, misleading, or malicious information through the enquiry form.</li>
          </ul>

          <h2 className={h2}>Content and intellectual property</h2>
          <p className={p}>
            The text, photos, video, and branding on this website belong to SwimNest or are used
            with the relevant rights holder&rsquo;s permission, and may not be copied or reused
            without our consent.
          </p>

          <h2 className={h2}>No guarantee of availability</h2>
          <p className={p}>
            Programs, pricing, and locations described on this site are provided as a general
            guide and may change. We&rsquo;ll always confirm current pricing and availability
            directly with you before any lesson is booked.
          </p>

          <h2 className={h2}>Third-party links and embeds</h2>
          <p className={p}>
            This site links to or embeds third-party services, including Google Maps and our
            Swimmers&rsquo; Portal. We aren&rsquo;t responsible for the content, availability, or
            practices of those third-party services.
          </p>

          <h2 className={h2}>Liability</h2>
          <p className={p}>
            This website and its content are provided &ldquo;as is&rdquo;, without warranties of
            any kind. To the extent permitted by law, SwimNest is not liable for any loss or
            damage arising from your use of this website. Nothing in these terms limits any
            consumer guarantee that cannot lawfully be excluded under the Australian Consumer Law.
          </p>

          <h2 className={h2}>Governing law</h2>
          <p className={p}>
            These terms are governed by the laws of New South Wales, Australia.
          </p>

          <h2 className={h2}>Changes to these terms</h2>
          <p className={p}>
            We may update these terms from time to time. The &ldquo;last updated&rdquo; date at
            the top of this page will reflect the most recent change.
          </p>

          <h2 className={h2}>Contact</h2>
          <p className={p}>
            Questions about these terms can be sent to{" "}
            <a href="mailto:Irina@swimnest.com.au" className="text-accent-strong underline">
              Irina@swimnest.com.au
            </a>
            .
          </p>
        </Reveal>
      </Section>
    </>
  );
}
