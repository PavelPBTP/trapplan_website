export default function StructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "TrapPlan",
    url: "https://www.trapplan.com",
    logo: "https://www.trapplan.com/images/logo.png",
    description:
      "TrapPlan is a specialized game marketing agency helping indie and AA studios grow Steam wishlists and game sales through influencers, community-driven marketing, and structured launch support.",
    email: "pb@trapplan.com",
    foundingDate: "2020",
    sameAs: [
      "https://www.linkedin.com/company/trapplan",
      "https://twitter.com/trapplan",
    ],
    address: {
      "@type": "PostalAddress",
      addressCountry: "Global",
    },
    areaServed: "Worldwide",
    serviceType: [
      "Game Marketing",
      "Steam Wishlist Growth",
      "Paid Growth",
      "Creative Content Pipeline",
    ],
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "TrapPlan",
    url: "https://www.trapplan.com",
    description:
      "Game marketing agency specializing in Steam wishlists, influencer campaigns, and launch strategies for indie and AA game studios.",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: "https://www.trapplan.com/blog?q={search_term_string}",
      },
      "query-input": "required name=search_term_string",
    },
  };

  const professionalServiceSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "TrapPlan Game Marketing Agency",
    image: "https://www.trapplan.com/images/logo.png",
    "@id": "https://www.trapplan.com",
    url: "https://www.trapplan.com",
    telephone: "",
    email: "pb@trapplan.com",
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      addressCountry: "Global",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 0,
      longitude: 0,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
      ],
      opens: "09:00",
      closes: "18:00",
    },
    sameAs: [
      "https://www.linkedin.com/company/trapplan",
      "https://twitter.com/trapplan",
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5",
      reviewCount: "50",
    },
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Game Marketing",
    provider: {
      "@type": "Organization",
      name: "TrapPlan",
      url: "https://www.trapplan.com",
    },
    areaServed: "Worldwide",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Game Marketing Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Game Launch Blueprint",
            description:
              "A clear launch plan for your game: positioning, audience, messaging, timeline and channel mix.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Paid Growth",
            description:
              "Paid campaign setup and structure: channel selection, tracking, targeting and clean handoff.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Creative Content Pipeline",
            description:
              "A pipeline for trailers, shortform and store assets built for iteration and distribution.",
          },
        },
      ],
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(professionalServiceSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
    </>
  );
}
