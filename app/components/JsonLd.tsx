import type { Address } from "@/lib/data/locations";

export default function LocationJsonLd({
  name,
  address,
  url,
}: {
  name: string;
  address: Address;
  url: string;
}) {
  const data = {
    "@context": "https://schema.org",
    "@type": "SwimSchool",
    name: `SwimNest — ${name}`,
    url,
    address: {
      "@type": "PostalAddress",
      streetAddress: address.street,
      addressLocality: address.suburb,
      addressRegion: address.state,
      postalCode: address.postcode,
      addressCountry: "AU",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
