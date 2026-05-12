import Link from "next/link";
import { VehicleGrid } from "@/components/vehicles/vehicle-grid";
import { vehicles } from "@/lib/vehicles";

export function InventorySection() {
  return (
    <section
      id="fahrzeuge"
      className="relative border-t border-line bg-ink"
      aria-labelledby="fahrzeuge-title"
    >
      <div className="mx-auto max-w-[1440px] px-6 py-24 sm:px-12 lg:px-20 lg:py-32">
        <div className="mb-12 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="eyebrow">03 · Aktueller Bestand</p>
            <h2
              id="fahrzeuge-title"
              className="serif mt-6 max-w-2xl text-4xl leading-[1.05] text-bone sm:text-5xl lg:text-6xl"
            >
              {vehicles.length} Sammlerstücke <span className="italic text-bone/70">in Wien.</span>
            </h2>
          </div>
          <Link
            href="/fahrzeuge"
            className="inline-flex items-baseline gap-3 self-start text-[11px] uppercase tracking-[0.2em] text-bone hover:text-gold sm:self-end"
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
