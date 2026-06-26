import { HomePage } from "@/views/home";
import { site, faqContent } from "@/shared/config";

/** Statically generated at build time (SSG) — best case for SEO & speed. */
export const dynamic = "force-static";

/**
 * Structured data — helps search engines understand the app and can surface
 * a rich FAQ snippet in results (more screen space, higher CTR).
 */
const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "MobileApplication",
    name: site.name,
    description: site.description,
    applicationCategory: "LifestyleApplication",
    operatingSystem: "iOS, Android",
    inLanguage: "ru",
    url: site.url,
    offers: { "@type": "Offer", price: "0", priceCurrency: "BYN" },
    areaServed: { "@type": "Country", name: "Беларусь" },
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqContent.items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  },
];

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HomePage />
    </>
  );
}
