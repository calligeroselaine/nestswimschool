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
            These terms apply to your use of the SwimNest website. By using this site, you agree
            to them. If you don&rsquo;t agree, please don&rsquo;t use the site.
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
            <strong className="text-ink">[CLIENT TO CONFIRM — contact email or phone]</strong>.
          </p>
        </Reveal>
      </Section>
    </>
  );
}
