import Link from "next/link";
import type { Vehicle, Gradient } from "@/lib/vehicles";

const ACCENT: Record<Gradient, string> = {
  "hero-teal":  "#7ec8c8",
  "hero-cream": "#e8d49a",
  "hero-blush": "#d99891",
  "hero-sage":  "#a8c4a2",
  "hero-sky":   "#9bb8d4",
  "hero-slate": "#8a8d94",
};

type SpecItem = { label: string; value: string };

function getCardSpecs(vehicle: Vehicle): SpecItem[] {
  const items: SpecItem[] = [];
  if (vehicle.specs.year) items.push({ label: "Baujahr", value: vehicle.specs.year });
  if (vehicle.specs.mileage) items.push({ label: "Kilometerstand", value: vehicle.specs.mileage });
  if (vehicle.specs.horsepower) items.push({ label: "Leistung", value: vehicle.specs.horsepower });
  if (vehicle.specs.transmission) items.push({ label: "Getriebe", value: vehicle.specs.transmission });
  return items;
}

export function VehicleCard({ vehicle }: { vehicle: Vehicle }) {
  const accent = ACCENT[vehicle.gradient];
  const specs = getCardSpecs(vehicle);

  return (
    <Link
      href={`/fahrzeuge/${vehicle.slug}`}
      className="group relative flex flex-col overflow-hidden bg-ink"
      aria-label={`${vehicle.name} ${vehicle.subtitle} — Details ansehen`}
    >
      {/* Top accent — hairline that intensifies on hover */}
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 z-20 h-px transition-all duration-700 ease-out group-hover:h-0.5"
        style={{ background: `linear-gradient(to right, ${accent} 0%, ${accent}66 60%, transparent 100%)` }}
      />

      {/* ─────────────  IMAGE STAGE  ───────────── */}
      <div className="relative aspect-4/3 overflow-hidden bg-[#0e0e0e]">
        {/* Primary */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={vehicle.src}
          alt={vehicle.alt}
          width={vehicle.width}
          height={vehicle.height}
          loading="lazy"
          decoding="async"
          draggable={false}
          className="absolute inset-0 h-full w-full object-cover transition-all duration-900 ease-[cubic-bezier(0.22,0.61,0.36,1)] group-hover:scale-[1.04] select-none"
          style={{
            backgroundImage: `url(${vehicle.blurDataURL})`,
            backgroundSize: "cover",
          }}
        />

        {/* Crossfade — alternate angle */}
        {vehicle.srcHover && (
          /* eslint-disable-next-line @next/next/no-img-element */
          <img
            src={vehicle.srcHover}
            alt=""
            aria-hidden
            width={vehicle.width}
            height={vehicle.height}
            loading="lazy"
            decoding="async"
            draggable={false}
            className="absolute inset-0 h-full w-full object-cover opacity-0 transition-all duration-900 ease-[cubic-bezier(0.22,0.61,0.36,1)] group-hover:scale-[1.04] group-hover:opacity-100 select-none"
          />
        )}

        {/* Vignette */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, #0a0a0a 0%, rgba(10,10,10,0.45) 30%, transparent 70%)",
          }}
        />

        {/* Index number */}
        <span
          aria-hidden
          className="pointer-events-none absolute bottom-5 left-7 font-mono text-[10px] tracking-[0.4em] text-bone/25 select-none transition-colors duration-500 group-hover:text-bone/45"
        >
          {vehicle.num}
        </span>

        {/* Car color */}
        {vehicle.specs.color && (
          <span
            aria-hidden
            className="pointer-events-none absolute bottom-5 right-7 text-[10px] uppercase tracking-[0.25em] text-bone/30 select-none transition-colors duration-500 group-hover:text-bone/55"
          >
            {vehicle.specs.color}
          </span>
        )}
      </div>

      {/* ─────────────  INFO  ───────────── */}
      <div className="relative flex flex-col gap-7 px-7 pb-9 pt-8 sm:px-9 sm:pb-10 sm:pt-9">
        {/* Subtle accent bleed */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-700 group-hover:opacity-100"
          style={{ background: `linear-gradient(155deg, ${accent}0d 0%, transparent 55%)` }}
        />

        {/* Title block */}
        <div className="relative">
          <div className="mb-4 flex items-center gap-3">
            <span
              aria-hidden
              className="block h-px w-5 transition-all duration-500 ease-out group-hover:w-9"
              style={{ background: accent }}
            />
            <p
              className="text-[10px] font-semibold uppercase tracking-[0.3em]"
              style={{ color: accent }}
            >
              {vehicle.brand}
            </p>
          </div>

          <h3 className="serif text-[28px] leading-[1.05] text-bone sm:text-[32px] lg:text-[34px]">
            {vehicle.name}
          </h3>
          <p className="serif mt-1.5 text-xl italic leading-tight text-bone/40 sm:text-2xl">
            {vehicle.subtitle}
          </p>

          {/* Highlight tagline */}
          {vehicle.highlight && (
            <p className="mt-5 text-[11px] uppercase tracking-[0.22em] text-bone/55">
              {vehicle.highlight}
            </p>
          )}
        </div>

        {/* Specs grid — 2×2 */}
        {specs.length > 0 && (
          <dl className="relative grid grid-cols-2 gap-x-6 gap-y-5 border-t border-line pt-6">
            {specs.map((spec) => (
              <div key={spec.label} className="flex flex-col gap-1">
                <dd className="text-[15px] font-medium leading-tight text-bone">
                  {spec.value}
                </dd>
                <dt className="text-[9px] uppercase tracking-[0.25em] text-bone/35">
                  {spec.label}
                </dt>
              </div>
            ))}
          </dl>
        )}

        {/* CTA row — price + details */}
        <div className="relative flex items-center justify-between gap-4 border-t border-line pt-5">
          <div className="flex flex-col gap-0.5">
            <span className="text-[9px] uppercase tracking-[0.28em] text-bone/40">
              Preis
            </span>
            <span className="text-[13px] font-medium text-bone/75">
              Auf Anfrage
            </span>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-[10px] uppercase tracking-[0.3em] text-bone/55 transition-colors duration-500 group-hover:text-bone">
              Details ansehen
            </span>
            <span
              aria-hidden
              className="text-base leading-none text-bone/40 transition-all duration-500 group-hover:translate-x-1.5 group-hover:text-gold"
            >
              →
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
