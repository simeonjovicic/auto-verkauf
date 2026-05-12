import type { Metadata } from "next";
import { PageHero } from "@/components/layout/page-hero";
import { VehicleGrid } from "@/components/vehicles/vehicle-grid";
import { Footer } from "@/components/footer/footer";
import { vehicles } from "@/lib/vehicles";

export const metadata: Metadata = {
  title: "Fahrzeuge",
  description:
    "Aktueller Bestand bei Meyer Motorsport in Wien — handverlesene Ferrari, Porsche und BMW M Sammlerstücke.",
};

export default function FahrzeugePage() {
  return (
    <>
      <PageHero
        eyebrow="01 · Bestand"
        title="Fahrzeuge."
        lede={`Aktuell ${vehicles.length} Sammlerstücke. Jedes Auto persönlich verlesen, dokumentiert und in Wien einsehbar. Preise auf Anfrage.`}
      />
      <section className="bg-ink px-6 py-16 sm:px-12 sm:py-20 lg:px-20">
        <div className="mx-auto max-w-[1440px]">
          <VehicleGrid />
        </div>
      </section>
      <Footer />
    </>
  );
}
