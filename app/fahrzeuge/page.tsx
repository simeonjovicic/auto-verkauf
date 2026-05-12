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
        eyebrow="Bestand"
        title="Fahrzeuge im Überblick."
        lede={`Aktuell ${vehicles.length} geprüfte Fahrzeuge in Wien. Helle Übersicht, klare Daten und direkte Anfrage für Besichtigung oder Probefahrt.`}
        tone="light"
      />
      <section className="bg-panel px-6 py-14 text-graphite sm:px-12 sm:py-[72px] lg:px-20">
        <div className="mx-auto max-w-[1440px]">
          <VehicleGrid />
        </div>
      </section>
      <Footer />
    </>
  );
}
