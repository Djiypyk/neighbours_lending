import { HomePage } from "@/views/home";
import { site } from "@/shared/config";

/** Statically generated at build time (SSG) — best case for SEO & speed. */
export const dynamic = "force-static";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "MobileApplication",
  name: site.name,
  description: site.description,
  applicationCategory: "LifestyleApplication",
  operatingSystem: "iOS, Android",
  offers: { "@type": "Offer", price: "0", priceCurrency: "BYN" },
};

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
