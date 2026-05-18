import type { Metadata } from "next";
import { PageHero } from "@/components/layout/page-hero";
import { VehicleGrid } from "@/components/vehicles/vehicle-grid";
import { vehicles } from "@/lib/vehicles";

export const metadata: Metadata = {
  title: "Fahrzeuge",
  description:
    "Hyundai und Mitsubishi Neuwagen, aktuelle Aktionen und geprüfte Eintauschwagen bei Fischerauto in Wien-Donaustadt.",
};

export default function FahrzeugePage() {
  return (
    <>
      <PageHero
        eyebrow="Fahrzeuge"
        title="Neuwagen, Aktionen und Eintauschwagen."
        lede={`${vehicles.length} hervorgehobene Angebote und Einstiege in den aktuellen Bestand. Den tagesaktuellen Gebrauchtwagenbestand pflegt Fischerauto direkt auf willhaben.`}
      />
      <section className="bg-ink px-6 py-14 text-bone sm:px-12 sm:py-18 lg:px-20">
        <div className="mx-auto max-w-360">
          <VehicleGrid />
        </div>
      </section>
    </>
  );
}
