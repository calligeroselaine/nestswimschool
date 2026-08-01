import { SITE_URL } from "@/lib/site";

export default function OrganizationJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: "SwimNest",
    alternateName: "SwimNest Swim School",
    url: SITE_URL,
    description:
      "Patient, personalised swim lessons across Sydney's Northern Beaches — Terrey Hills, Brookvale, ocean rockpools and residential pools.",
    areaServed: {
      "@type": "Place",
      name: "Northern Beaches, Sydney, NSW",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
