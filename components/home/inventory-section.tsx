import { VehicleGrid } from "@/components/vehicles/vehicle-grid";
import { vehicles } from "@/lib/vehicles";

export function InventorySection() {
  return (
    <section
      id="fahrzeuge"
      className="relative border-t border-line bg-ink text-bone"
      aria-labelledby="fahrzeuge-title"
    >
      <div className="mx-auto max-w-400 px-6 py-20 sm:px-12 lg:px-12 lg:py-28">
        <div className="mb-12">
          <p className="eyebrow text-gold!">Fahrzeugübersicht</p>
          <h2
            id="fahrzeuge-title"
            className="serif mt-6 max-w-3xl text-4xl leading-[1.05] text-bone sm:text-5xl lg:text-6xl"
          >
            {vehicles.length} geprüfte Fahrzeuge{" "}
            <span className="italic text-bone/55">im aktuellen Bestand.</span>
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-mute sm:text-lg">
            Eine kuratierte Auswahl: klare Daten, dunkle Bühne und schnelle
            Filter für den ersten Vergleich.
          </p>
        </div>
        <VehicleGrid />
      </div>
    </section>
  );
}
