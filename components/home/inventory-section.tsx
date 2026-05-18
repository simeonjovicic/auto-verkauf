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
            Neuwagen, Aktionen und geprüfte Eintauschwagen{" "}
            <span className="italic text-bone/55">auf einen Blick.</span>
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-mute sm:text-lg">
            Aktionsmodelle werden hier hervorgehoben. Der tagesaktuelle
            Gebrauchtwagenbestand wird über willhaben gepflegt und ändert sich
            laufend.
          </p>
        </div>
        <VehicleGrid />
      </div>
    </section>
  );
}
