import type { Locale } from "@/lib/i18n";
import { t } from "@/lib/copy";

export default function StructuredData({ locale }: { locale: Locale }) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "TrapPlan",
    url: "https://www.trapplan.com",
    logo: "https://www.trapplan.com/images/logo.png",
    description:
      t(locale, "structured.organization.description"),
    email: "pb@trapplan.com",
    foundingDate: "2020",
    sameAs: [
      "https://www.linkedin.com/company/trapplan",
      "https://twitter.com/trapplan",
    ],
    address: {
      "@type": "PostalAddress",
    },
    areaServed: "Worldwide",
    serviceType: [
      t(locale, "structured.organization.service_type.01"),
      t(locale, "structured.organization.service_type.02"),
      t(locale, "structured.organization.service_type.03"),
      t(locale, "structured.organization.service_type.04"),
    ],
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "TrapPlan",
    url: "https://www.trapplan.com",
    description:
      t(locale, "structured.website.description"),
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
    name: t(locale, "structured.professional_service.name"),
    image: "https://www.trapplan.com/images/logo.png",
    "@id": "https://www.trapplan.com",
    url: "https://www.trapplan.com",
    email: "pb@trapplan.com",
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
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
      name: t(locale, "structured.service_catalog.name"),
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: t(locale, "structured.service.blueprint.name"),
            description: t(locale, "structured.service.blueprint.desc"),
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: t(locale, "structured.service.paid_growth.name"),
            description: t(locale, "structured.service.paid_growth.desc"),
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: t(locale, "structured.service.creative.name"),
            description: t(locale, "structured.service.creative.desc"),
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
