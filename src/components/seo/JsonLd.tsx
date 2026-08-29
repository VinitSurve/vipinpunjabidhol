import { SITE_URL, SITE_NAME, BUSINESS_INFO } from "@/lib/siteConfig";

/**
 * LocalBusiness JSON-LD structured data.
 * Only real, verifiable information is included.
 * No fake reviews, ratings, prices, or awards.
 */
export default function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "EntertainmentBusiness",
    name: SITE_NAME,
    alternateName: "Vipin Punjabi Dhol",
    description:
      "Authentic Punjabi Dhol players, Bhangra groups, LED Dhol, and live entertainment for weddings, Baraat, Ganpati, and corporate events across Mumbai and Navi Mumbai.",
    url: SITE_URL,
    telephone: BUSINESS_INFO.phone,
    sameAs: [BUSINESS_INFO.instagram, BUSINESS_INFO.whatsapp],
    address: {
      "@type": "PostalAddress",
      streetAddress: BUSINESS_INFO.address.streetAddress,
      addressLocality: BUSINESS_INFO.address.addressLocality,
      addressRegion: BUSINESS_INFO.address.addressRegion,
      postalCode: BUSINESS_INFO.address.postalCode,
      addressCountry: BUSINESS_INFO.address.addressCountry,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: BUSINESS_INFO.geo.latitude,
      longitude: BUSINESS_INFO.geo.longitude,
    },
    areaServed: BUSINESS_INFO.serviceArea.map((area) => ({
      "@type": "City",
      name: area,
    })),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Entertainment Services",
      itemListElement: BUSINESS_INFO.services.map((service, index) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: service,
        },
        position: index + 1,
      })),
    },
    image: `${SITE_URL}/images/home-hero-dhol.webp`,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
