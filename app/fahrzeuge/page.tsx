import type { Metadata } from "next";
import { PageHero } from "@/components/layout/page-hero";
import { VehicleGrid } from "@/components/vehicles/vehicle-grid";
import { vehicles } from "@/lib/vehicles";

export const metadata: Metadata = {
  title: "Stock",
  description:
    "Aktueller Bestand bei Meyer Motorsport in Wien — handverlesene Ferrari, Porsche und BMW M Sammlerstücke.",
};

export default function FahrzeugePage() {
  return (
    <>
      <PageHero
        eyebrow="Stock"
        title="Fahrzeuge im Überblick."
        lede={`Aktuell ${vehicles.length} geprüfte Fahrzeuge in Wien. Klare Daten, präzise Filter und direkte Anfrage für Besichtigung oder Probefahrt.`}
      />
      <section className="bg-ink px-6 py-14 text-bone sm:px-12 sm:py-18 lg:px-20">
        <div className="mx-auto max-w-360">
          <VehicleGrid />
        </div>
      </section>
    </>
  );
}
