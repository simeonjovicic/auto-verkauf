import { HeroScroller } from "@/components/hero/hero-scroller";
import { Philosophy } from "@/components/home/philosophy";
import { BrandMarquee } from "@/components/home/brand-marquee";
import { InventorySection } from "@/components/home/inventory-section";
import { ServiceMediaTeaser } from "@/components/home/vips-stunts-teaser";
import { ContactInline } from "@/components/home/contact-inline";

export function MeyerHome() {
  return (
    <>
      <HeroScroller />
      <Philosophy />
      <BrandMarquee />
      <InventorySection />
      <ServiceMediaTeaser />
      <ContactInline />
    </>
  );
}
