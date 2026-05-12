import type { Vehicle } from "@/lib/vehicles";

const LABELS: Record<keyof Vehicle["specs"], string> = {
  year: "Baujahr",
  mileage: "Kilometerstand",
  horsepower: "Leistung",
  transmission: "Getriebe",
  color: "Farbe",
};

export function SpecTable({ vehicle }: { vehicle: Vehicle }) {
  const entries = (Object.entries(vehicle.specs) as Array<
    [keyof Vehicle["specs"], string | null]
  >).filter(([, v]) => v !== null);

  return (
    <div>
      <p className="eyebrow text-mute">Technische Daten</p>
      <dl className="mt-6 divide-y divide-line border-y border-line">
        {entries.length === 0 ? (
          <div className="py-5 text-sm text-mute">
            Vollständige Daten auf Anfrage.
          </div>
        ) : (
          entries.map(([key, value]) => (
            <div
              key={key}
              className="grid grid-cols-2 gap-4 py-4 text-sm sm:py-5"
            >
              <dt className="text-mute">{LABELS[key]}</dt>
              <dd className="text-bone">{value}</dd>
            </div>
          ))
        )}
      </dl>
    </div>
  );
}
