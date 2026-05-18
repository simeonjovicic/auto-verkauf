"use client";

import { useCallback, useMemo, useState } from "react";
import { vehicles, type Vehicle, type Brand } from "@/lib/vehicles";
import { VehicleCard } from "./vehicle-card";
import type { Sort } from "./filter-bar";

const SORT_OPTIONS: { value: Sort; label: string }[] = [
  { value: "newest",     label: "Neu zuerst" },
  { value: "price-asc",  label: "Preis ↑" },
  { value: "price-desc", label: "Preis ↓" },
  { value: "km-asc",     label: "km ↑" },
  { value: "power-desc", label: "PS ↓" },
  { value: "az",         label: "A – Z" },
];

function sortVehicles(list: Vehicle[], sort: Sort): Vehicle[] {
  const out = [...list];
  switch (sort) {
    case "az":
      out.sort((a, b) =>
        `${a.name} ${a.subtitle}`.localeCompare(`${b.name} ${b.subtitle}`, "de"),
      );
      break;
    case "price-asc":
      out.sort((a, b) => (a.priceEur ?? Infinity) - (b.priceEur ?? Infinity));
      break;
    case "price-desc":
      out.sort((a, b) => (b.priceEur ?? -Infinity) - (a.priceEur ?? -Infinity));
      break;
    case "km-asc":
      out.sort((a, b) => (a.mileageKm ?? Infinity) - (b.mileageKm ?? Infinity));
      break;
    case "power-desc":
      out.sort((a, b) => (b.horsepowerPs ?? -Infinity) - (a.horsepowerPs ?? -Infinity));
      break;
    case "newest":
    default:
      break;
  }
  return out;
}

export function VehicleGrid({ initial }: { initial?: Vehicle[] } = {}) {
  const source = initial ?? vehicles;

  const [activeBrands, setActiveBrands] = useState<Brand[]>([]);
  const [sort, setSort] = useState<Sort>("newest");

  const allBrands = useMemo(
    () => Array.from(new Set(source.map((vehicle) => vehicle.brand))),
    [source],
  );

  const toggleBrand = useCallback((b: Brand) => {
    setActiveBrands((prev) =>
      prev.includes(b) ? prev.filter((x) => x !== b) : [...prev, b],
    );
  }, []);

  const filtered = useMemo(() => {
    const out =
      activeBrands.length === 0
        ? source
        : source.filter((v) => activeBrands.includes(v.brand));
    return sortVehicles(out, sort);
  }, [source, activeBrands, sort]);

  return (
    <>
      <div className="mb-10 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-4">
          <div className="inline-flex flex-wrap border border-fischer-line bg-surface-soft p-1">
            <button
              type="button"
              onClick={() => setActiveBrands([])}
              className={
                "px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] transition-colors sm:px-5 " +
                (activeBrands.length === 0
                  ? "bg-hyundai text-paper"
                  : "text-anthracite/60 hover:text-anthracite")
              }
            >
              Alle Marken
            </button>
            {allBrands.map((b) => {
              const active = activeBrands.includes(b);
              return (
                <button
                  key={b}
                  type="button"
                  onClick={() => toggleBrand(b)}
                  className={
                    "px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] transition-colors sm:px-5 " +
                    (active
                      ? "bg-copper text-paper"
                      : "text-anthracite/60 hover:text-anthracite")
                  }
                >
                  {b}
                </button>
              );
            })}
          </div>
        </div>

        <div className="flex items-center gap-6 text-[11px] uppercase tracking-[0.2em]">
          <div className="relative flex items-center gap-3">
            <span className="text-fischer-mute">Sortierung:</span>
            <div className="relative">
              <select
                value={sort}
                onChange={(e) => setSort(e.target.value as Sort)}
                className="cursor-pointer appearance-none bg-transparent pr-6 text-anthracite focus:outline-none"
              >
                {SORT_OPTIONS.map((o) => (
                  <option key={o.value} value={o.value} className="bg-paper text-anthracite">
                    {o.label}
                  </option>
                ))}
              </select>
              <svg
                className="pointer-events-none absolute right-0 top-1/2 h-3 w-3 -translate-y-1/2 text-anthracite/60"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>

          <span aria-hidden className="hidden h-3 w-px bg-fischer-line sm:block" />

          <span className="text-fischer-mute">
            <span className="text-anthracite">{filtered.length}</span>{" "}
            {filtered.length === 1 ? "Fahrzeug" : "Fahrzeuge"}
          </span>
        </div>
      </div>

      {filtered.length > 0 ? (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 md:gap-7">
          {filtered.map((v) => (
            <div key={v.slug}>
              <VehicleCard vehicle={v} />
            </div>
          ))}
        </div>
      ) : (
        <div className="border border-fischer-line bg-surface-soft px-8 py-16 text-center">
          <p className="text-2xl font-semibold text-anthracite">
            Keine Fahrzeuge entsprechen Ihrer Auswahl.
          </p>
          <p className="mt-3 text-sm text-fischer-mute">
            Setzen Sie die Filter zurück oder sprechen Sie uns direkt an -
            die Angebote ändern sich laufend.
          </p>
          <button
            type="button"
            onClick={() => setActiveBrands([])}
            className="mt-6 inline-flex items-center gap-3 border border-anthracite/20 px-5 py-3 text-[11px] uppercase tracking-[0.22em] text-anthracite transition-colors hover:border-hyundai hover:text-hyundai"
          >
            Filter zurücksetzen
            <span aria-hidden>→</span>
          </button>
        </div>
      )}
    </>
  );
}
