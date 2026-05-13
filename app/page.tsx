import { HeroScroller } from "@/components/hero/hero-scroller";
import { Philosophy } from "@/components/home/philosophy";
import { BrandMarquee } from "@/components/home/brand-marquee";
import { InventorySection } from "@/components/home/inventory-section";
import { VipsStuntsTeaser } from "@/components/home/vips-stunts-teaser";
import { ContactInline } from "@/components/home/contact-inline";
import { JsonLd } from "@/components/seo/json-ld";
import { SITE } from "@/lib/site";

const BASE = "https://www.meyer-motorsport.at";

const autoDealer = {
  "@context": "https://schema.org",
  "@type": "AutoDealer",
  name: SITE.name,
  url: BASE,
  founder: { "@type": "Person", name: SITE.owner },
  telephone: SITE.phone,
  email: SITE.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: SITE.address.street,
    postalCode: "1100",
    addressLocality: "Wien",
    addressCountry: "AT",
  },
  areaServed: { "@type": "Country", name: "AT" },
  makesOffer: ["Ferrari", "Porsche", "BMW M"],
  openingHours: "Mo-Sa by appointment",
};

export default function Home() {
  return (
    <>
      <JsonLd data={autoDealer} />
      <HeroScroller />
      <Philosophy />
      <BrandMarquee />
      <InventorySection />
      <VipsStuntsTeaser />
      <ContactInline />
    </>
  );
}
