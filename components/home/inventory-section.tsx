import Link from "next/link";
import { VehicleGrid } from "@/components/vehicles/vehicle-grid";
import { vehicles } from "@/lib/vehicles";

export function InventorySection() {
  return (
    <section
      id="fahrzeuge"
      className="relative border-t border-chrome bg-panel text-graphite"
      aria-labelledby="fahrzeuge-title"
    >
      <div className="mx-auto max-w-[1440px] px-6 py-20 sm:px-12 lg:px-20 lg:py-28">
        <div className="mb-12 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <p className="eyebrow !text-signal">Fahrzeugübersicht</p>
            <h2
              id="fahrzeuge-title"
              className="serif mt-6 max-w-3xl text-4xl leading-[1.05] text-graphite sm:text-5xl lg:text-6xl"
            >
              {vehicles.length} geprüfte Fahrzeuge{" "}
              <span className="italic text-steel">im aktuellen Bestand.</span>
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-steel sm:text-lg">
              Eine übersichtliche Auswahl statt dunkler Galerie: klare Daten,
              helle Karten und schnelle Filter für den ersten Vergleich.
            </p>
          </div>
          <Link
            href="/fahrzeuge"
            className="inline-flex min-h-12 items-center justify-center gap-3 rounded-[8px] bg-graphite px-5 text-[11px] font-semibold uppercase tracking-[0.18em] text-white transition-colors hover:bg-signal"
          >
            Vollständige Übersicht
            <span aria-hidden>→</span>
          </Link>
        </div>
        <VehicleGrid />
      </div>
    </section>
  );
}
