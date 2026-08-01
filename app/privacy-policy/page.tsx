import type { Metadata } from "next";
import PageHeader from "@/app/components/PageHeader";
import Section from "@/app/components/Section";
import Reveal from "@/app/components/Reveal";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How SwimNest collects, uses, and protects the personal information you share with us.",
  alternates: { canonical: `${SITE_URL}/privacy-policy` },
};

const h2 = "mt-10 mb-3 font-display text-lg text-ink uppercase first:mt-0";
const p = "text-base font-light text-ink/80 leading-relaxed";
const ul = "list-disc space-y-1 pl-5 text-base font-light text-ink/80";

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHeader
        eyebrow="Legal"
        title="Privacy Policy"
        tagline="Last updated: August 2026. How we collect, use, and protect your personal information."
      />

      <Section>
        <Reveal className="mx-auto max-w-[70ch] space-y-1">
          <p className={p}>
            SwimNest (&ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;) provides swimming
            lessons across Sydney&rsquo;s Northern Beaches. This policy explains how we handle
            personal information collected through this website, in line with the Australian
            Privacy Principles under the Privacy Act 1988 (Cth).
          </p>

          <h2 className={h2}>Information we collect</h2>
          <p className={p}>
            The only personal information this website collects is what you choose to submit
            through our enquiry form: your name, email address, phone number (optional), the
            program you&rsquo;re interested in, and any details you include in your message
            (which may include your child&rsquo;s name, age, or swimming experience).
          </p>
          <p className={p}>
            We don&rsquo;t use tracking cookies, advertising pixels, or analytics scripts on this
            website at this time. If that changes in future, we&rsquo;ll update this policy
            before doing so.
          </p>

          <h2 className={h2}>How we use it</h2>
          <p className={p}>We use the information you submit only to:</p>
          <ul className={ul}>
            <li>respond to your enquiry and discuss lesson options;</li>
            <li>arrange a trial lesson or booking if you proceed; and</li>
            <li>keep a record of the enquiry for our own reference.</li>
          </ul>
          <p className={p}>We do not sell, rent, or trade your information to third parties.</p>

          <h2 className={h2}>Who we share it with</h2>
          <p className={p}>
            Enquiry form submissions are processed via our email delivery provider (Resend) solely
            to deliver the enquiry to us, and are stored on our hosting infrastructure (Vercel).
            Location pages on this site embed Google Maps, which may collect data according to{" "}
            <a
              href="https://policies.google.com/privacy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent-strong underline"
            >
              Google&rsquo;s own privacy policy
            </a>{" "}
            when that map loads. Our Swimmers&rsquo; Portal (swimnest.ud.io) is a separate
            system with its own privacy practices, which apply once you use it.
          </p>

          <h2 className={h2}>Children&rsquo;s information</h2>
          <p className={p}>
            As a swim school, information about children is sometimes included in enquiries by a
            parent or guardian. We only collect this information when a parent or guardian
            chooses to provide it to us directly, and we use it solely for the purposes described
            above.
          </p>

          <h2 className={h2}>Data security</h2>
          <p className={p}>
            We take reasonable steps to protect the personal information we hold from misuse,
            loss, and unauthorised access, including relying on our hosting and email providers&rsquo;
            own security practices.
          </p>

          <h2 className={h2}>Access, correction, and complaints</h2>
          <p className={p}>
            You can ask us what personal information we hold about you, request a correction, or
            make a privacy complaint by contacting us at{" "}
            <strong className="text-ink">[CLIENT TO CONFIRM — contact email or phone]</strong>. If
            you&rsquo;re not satisfied with our response, you can contact the{" "}
            <a
              href="https://www.oaic.gov.au/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent-strong underline"
            >
              Office of the Australian Information Commissioner
            </a>
            .
          </p>

          <h2 className={h2}>Changes to this policy</h2>
          <p className={p}>
            We may update this policy from time to time. The &ldquo;last updated&rdquo; date at
            the top of this page will reflect the most recent change.
          </p>
        </Reveal>
      </Section>
    </>
  );
}
