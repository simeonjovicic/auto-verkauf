"use client";

import { useCallback, useMemo, useState } from "react";
import { vehicles, type Vehicle, type Brand } from "@/lib/vehicles";
import { VehicleCard } from "./vehicle-card";
import type { Sort } from "./filter-bar";

const ALL_BRANDS: Brand[] = ["Ferrari", "Porsche", "BMW"];

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
      {/* Filter strip */}
      <div className="mb-10 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
        
        {/* Left: Brand Filter (Segmented Control Style) */}
        <div className="flex items-center gap-4">
          <div className="inline-flex rounded-full border border-line bg-ink/50 p-1 backdrop-blur-md">
            <button
              type="button"
              onClick={() => setActiveBrands([])}
              className={
                "rounded-full px-5 py-2 text-[11px] font-medium uppercase tracking-[0.2em] transition-all duration-300 " +
                (activeBrands.length === 0
                  ? "bg-bone text-ink shadow-md"
                  : "text-bone/60")
              }
            >
              Alle Marken
            </button>
            {ALL_BRANDS.map((b) => {
              const active = activeBrands.includes(b);
              return (
                <button
                  key={b}
                  type="button"
                  onClick={() => toggleBrand(b)}
                  className={
                    "rounded-full px-5 py-2 text-[11px] font-medium uppercase tracking-[0.2em] transition-all duration-300 " +
                    (active
                      ? "bg-gold text-ink shadow-md"
                      : "text-bone/60")
                  }
                >
                  {b}
                </button>
              );
            })}
          </div>
        </div>

        {/* Right: Sort & Count */}
        <div className="flex items-center gap-6 text-[11px] uppercase tracking-[0.2em]">
          
          {/* Sort Dropdown */}
          <div className="relative flex items-center gap-3">
            <span className="text-mute">Sortierung:</span>
            <div className="relative">
              <select
                value={sort}
                onChange={(e) => setSort(e.target.value as Sort)}
                className="appearance-none cursor-pointer bg-transparent pr-6 text-bone focus:outline-none"
              >
                {SORT_OPTIONS.map((o) => (
                  <option key={o.value} value={o.value} className="bg-ink text-bone">
                    {o.label}
                  </option>
                ))}
              </select>
              <svg
                className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 h-3 w-3 text-bone/60"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>

          {/* Divider */}
          <span aria-hidden className="hidden h-3 w-px bg-line sm:block" />

          {/* Count */}
          <span className="text-mute">
            <span className="text-bone">{filtered.length}</span>{" "}
            {filtered.length === 1 ? "Fahrzeug" : "Fahrzeuge"}
          </span>
        </div>
      </div>

      {/* Vehicle grid */}
      {filtered.length > 0 ? (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 md:gap-7">
          {filtered.map((v) => (
            <div key={v.slug}>
              <VehicleCard vehicle={v} />
            </div>
          ))}
        </div>
      ) : (
        <div className="border border-line bg-ink px-8 py-16 text-center">
          <p className="serif text-2xl text-bone">
            Keine Fahrzeuge entsprechen Ihrer Auswahl.
          </p>
          <p className="mt-3 text-sm text-mute">
            Setzen Sie die Filter zurück oder sprechen Sie uns direkt an —
            unser Bestand rotiert laufend.
          </p>
          <button
            type="button"
            onClick={() => setActiveBrands([])}
            className="mt-6 inline-flex items-center gap-3 border border-bone/70 px-5 py-3 text-[11px] uppercase tracking-[0.22em] text-bone transition-colors hover:border-bone hover:bg-bone hover:text-ink"
          >
            Filter zurücksetzen
            <span aria-hidden>→</span>
          </button>
        </div>
      )}
    </>
  );
}
