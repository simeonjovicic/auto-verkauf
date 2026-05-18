import { HeroScroller } from "@/components/hero/hero-scroller";
import { Philosophy } from "@/components/home/philosophy";
import { BrandMarquee } from "@/components/home/brand-marquee";
import { InventorySection } from "@/components/home/inventory-section";
import { ServiceMediaTeaser } from "@/components/home/vips-stunts-teaser";
import { ContactInline } from "@/components/home/contact-inline";
import { JsonLd } from "@/components/seo/json-ld";
import { SITE } from "@/lib/site";

const BASE = SITE.baseUrl;

const autoDealer = {
  "@context": "https://schema.org",
  "@type": "AutoDealer",
  name: SITE.name,
  url: BASE,
  legalName: SITE.legalName,
  foundingDate: SITE.founded,
  founder: [
    { "@type": "Person", name: "Franz Fischer" },
    { "@type": "Person", name: "Monika Fischer" },
  ],
  telephone: SITE.phone,
  email: SITE.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: SITE.address.street,
    postalCode: "1220",
    addressLocality: "Wien",
    addressCountry: "AT",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: SITE.coordinates.latitude,
    longitude: SITE.coordinates.longitude,
  },
  areaServed: { "@type": "Country", name: "AT" },
  makesOffer: ["Hyundai", "Mitsubishi", "Gebrauchtwagen", "Werkstattservice"],
  openingHours: ["Mo-Fr 09:00-18:00", "Sa 09:00-12:00"],
};

export default function Home() {
  return (
    <>
      <JsonLd data={autoDealer} />
      <HeroScroller />
      <Philosophy />
      <BrandMarquee />
      <InventorySection />
      <ServiceMediaTeaser />
      <ContactInline />
    </>
  );
}
