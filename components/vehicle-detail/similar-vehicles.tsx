import { vehicles, type Vehicle } from "@/lib/vehicles";
import { VehicleCard } from "@/components/vehicles/vehicle-card";

export function SimilarVehicles({ current }: { current: Vehicle }) {
  const sameBrand = vehicles.filter(
    (v) => v.slug !== current.slug && v.brand === current.brand,
  );
  const others = vehicles.filter(
    (v) => v.slug !== current.slug && v.brand !== current.brand,
  );
  const picks = [...sameBrand, ...others].slice(0, 3);

  if (picks.length === 0) return null;

  return (
    <section className="border-t border-line bg-ink px-6 py-20 sm:px-12 sm:py-24 lg:px-20">
      <div className="mx-auto max-w-[1440px]">
        <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="eyebrow text-mute">Weiterführend</p>
            <h2 className="serif mt-3 text-3xl text-bone sm:text-4xl">
              Ähnliche Fahrzeuge
            </h2>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-12">
          {picks.map((v) => (
            <VehicleCard key={v.slug} vehicle={v} />
          ))}
        </div>
      </div>
    </section>
  );
}
