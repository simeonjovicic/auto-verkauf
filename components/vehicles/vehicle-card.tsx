"use client";

import type { Vehicle, Gradient } from "@/lib/vehicles";
import { VehicleDetailTransitionLink } from "./vehicle-detail-transition-link";

const ACCENT: Record<Gradient, string> = {
  "hero-teal":  "#7ec8c8",
  "hero-cream": "#e8d49a",
  "hero-blush": "#c9151b",
  "hero-sage":  "#a8c4a2",
  "hero-sky":   "#9bb8d4",
  "hero-slate": "#8a8d94",
};

type Props = {
  vehicle: Vehicle;
};

type SpecRow = { label: string; value: string };

function getSpecs(vehicle: Vehicle): SpecRow[] {
  const rows: SpecRow[] = [];
  if (vehicle.specs.horsepower) rows.push({ label: "Leistung", value: vehicle.specs.horsepower });
  if (vehicle.specs.year) rows.push({ label: "Erstzulassung", value: vehicle.specs.year });
  if (vehicle.specs.mileage) rows.push({ label: "Kilometerstand", value: vehicle.specs.mileage });
  if (vehicle.category) rows.push({ label: "Kategorie", value: vehicle.category });
  else if (vehicle.specs.transmission) rows.push({ label: "Getriebe", value: vehicle.specs.transmission });
  return rows;
}

export function VehicleCard({ vehicle }: Props) {
  const accent = ACCENT[vehicle.gradient];
  const specs = getSpecs(vehicle);
  const imageClass =
    vehicle.src.endsWith(".png") && !vehicle.src.includes("team")
      ? "absolute inset-0 h-full w-full object-contain p-5 transition-transform duration-[1200ms] ease-out group-hover:scale-[1.03]"
      : "absolute inset-0 h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.03]";

  return (
    <VehicleDetailTransitionLink
      vehicle={vehicle}
      href={`/fahrzeuge/${vehicle.slug}`}
      className="group relative flex h-full flex-col overflow-hidden border border-fischer-line bg-surface-soft text-anthracite shadow-[0_18px_50px_rgba(0,44,95,0.08)] transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_28px_80px_rgba(0,44,95,0.14)]"
      aria-label={`${vehicle.name} ${vehicle.subtitle} - Details ansehen`}
      style={{ "--vehicle-card-accent": accent } as React.CSSProperties}
    >
      {/* Top accent line */}
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 z-20 h-0.75"
        style={{
          background: `linear-gradient(90deg, transparent, var(--vehicle-card-accent), transparent)`,
          opacity: 0.8,
        }}
      />

      {/* Image container */}
      <div className="relative aspect-4/3 overflow-hidden bg-paper">
        <picture>
          {vehicle.srcAvif.endsWith(".avif") ? (
            <source srcSet={vehicle.srcAvif} type="image/avif" />
          ) : null}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={vehicle.src}
            alt={vehicle.alt}
            width={vehicle.width}
            height={vehicle.height}
            loading="lazy"
            decoding="async"
            draggable={false}
            className={imageClass}
          />
        </picture>
        
        <div 
          className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-anthracite/28 via-transparent to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-45" 
          aria-hidden 
        />
      </div>

      <div className="flex flex-1 flex-col p-6 sm:p-7">
        <div className="mb-6">
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-hyundai">{vehicle.brand}</p>
          <h3 className="mt-2 text-2xl font-semibold tracking-tight text-anthracite sm:text-3xl">
            {vehicle.name}
            <span className="block text-copper">{vehicle.subtitle}</span>
          </h3>
          {vehicle.highlight ? (
            <p className="mt-3 text-sm leading-relaxed text-fischer-mute">
              {vehicle.highlight}
            </p>
          ) : null}
        </div>

        <div className="grid grid-cols-2 gap-x-4 gap-y-4">
          {specs.map((s) => (
            <div key={s.label}>
              <dt className="text-[10px] uppercase tracking-[0.2em] text-anthracite/45">
                {s.label}
              </dt>
              <dd className="mt-1 text-[13px] text-anthracite/82">{s.value}</dd>
            </div>
          ))}
        </div>

        <div className="mt-8 flex items-end justify-between border-t border-fischer-line pt-6">
          <p className="text-lg font-semibold text-anthracite sm:text-xl">
            {vehicle.price || "Preis auf Anfrage"}
          </p>
          <span
            className="text-[11px] font-semibold uppercase tracking-[0.2em] text-fischer-mute transition-colors group-hover:text-hyundai"
            aria-hidden
          >
            Anfragen
          </span>
        </div>
      </div>
    </VehicleDetailTransitionLink>
  );
}
