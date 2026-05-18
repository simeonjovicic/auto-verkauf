import type { Vehicle } from "@/lib/vehicles";

const LABELS: Record<keyof Vehicle["specs"], string> = {
  year: "Baujahr",
  mileage: "Kilometerstand",
  horsepower: "Leistung",
  transmission: "Getriebe",
  color: "Hinweise",
};

export function SpecTable({ vehicle }: { vehicle: Vehicle }) {
  const entries = (Object.entries(vehicle.specs) as Array<
    [keyof Vehicle["specs"], string | null]
  >).filter(([, v]) => v !== null);

  return (
    <div>
      <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-hyundai">Technische Daten</p>
      <dl className="mt-6 divide-y divide-fischer-line border-y border-fischer-line">
        {entries.length === 0 ? (
          <div className="py-5 text-sm text-fischer-mute">
            Vollständige Daten auf Anfrage.
          </div>
        ) : (
          entries.map(([key, value]) => (
            <div
              key={key}
              className="grid grid-cols-2 gap-4 py-4 text-sm sm:py-5"
            >
              <dt className="text-fischer-mute">{LABELS[key]}</dt>
              <dd className="text-anthracite">{value}</dd>
            </div>
          ))
        )}
      </dl>
    </div>
  );
}
