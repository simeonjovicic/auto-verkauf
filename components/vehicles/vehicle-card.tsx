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

  const titleSegments = [
    `${vehicle.name} ${vehicle.subtitle}`,
    ...(vehicle.highlight?.split(" · ") ?? []),
  ];

  return (
    <VehicleDetailTransitionLink
      vehicle={vehicle}
      href={`/fahrzeuge/${vehicle.slug}`}
      className="group relative flex h-full flex-col overflow-hidden bg-ink text-bone shadow-[0_24px_80px_rgba(0,0,0,0.45)] transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_36px_110px_rgba(0,0,0,0.6)]"
      aria-label={`${vehicle.name} ${vehicle.subtitle} — Details ansehen`}
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
      <div className="relative aspect-4/3 overflow-hidden bg-stage">
        <picture>
          <source srcSet={vehicle.srcAvif} type="image/avif" />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={vehicle.src}
            alt={vehicle.alt}
            width={vehicle.width}
            height={vehicle.height}
            loading="lazy"
            decoding="async"
            draggable={false}
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.03]"
          />
        </picture>
        
        {/* Simple gradient overlay instead of complex glare */}
        <div 
          className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent opacity-60 mix-blend-overlay transition-opacity duration-500 group-hover:opacity-40" 
          aria-hidden 
        />
      </div>

      {/* Content area */}
      <div className="flex flex-1 flex-col p-6 sm:p-7">
        <div className="mb-6">
          <p className="eyebrow text-bone/70">{vehicle.brand}</p>
          <h3 className="serif mt-2 text-2xl text-bone sm:text-3xl">
            {titleSegments.map((segment, i) => (
              <span key={i}>
                {segment}
                {i < titleSegments.length - 1 && (
                  <span className="mx-2 text-bone/40">·</span>
                )}
              </span>
            ))}
          </h3>
        </div>

        <div className="grid grid-cols-2 gap-x-4 gap-y-4">
          {specs.map((s) => (
            <div key={s.label}>
              <dt className="text-[10px] uppercase tracking-[0.2em] text-mute">
                {s.label}
              </dt>
              <dd className="mt-1 text-[13px] text-bone/90">{s.value}</dd>
            </div>
          ))}
        </div>

        <div className="mt-8 flex items-end justify-between pt-6 border-t border-line/50">
          <p className="text-lg text-bone sm:text-xl">
            {vehicle.price || "Preis auf Anfrage"}
          </p>
          <span
            className="text-[11px] font-medium uppercase tracking-[0.2em] text-mute transition-colors group-hover:text-gold"
            aria-hidden
          >
            Detailansicht →
          </span>
        </div>
      </div>
    </VehicleDetailTransitionLink>
  );
}
