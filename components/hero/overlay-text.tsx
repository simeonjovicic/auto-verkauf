"use client";

import type { Vehicle } from "@/lib/vehicles";

type Props = {
  cars: Vehicle[];
  registerRef: (el: HTMLDivElement | null, index: number) => void;
};

export function OverlayText({ cars, registerRef }: Props) {
  const total = cars.length.toString().padStart(2, "0");

  return (
    <div className="pointer-events-none absolute inset-0">
      {cars.map((car, i) => (
        <div
          key={car.slug}
          ref={(el) => {
            registerRef(el, i);
          }}
          className="absolute inset-0 flex flex-col justify-between px-6 pt-24 pb-10 sm:px-12 sm:pt-28 sm:pb-14 lg:px-20"
          style={{
            opacity: i === 0 ? 1 : 0,
            transform: i === 0 ? "translateY(0)" : "translateY(20px)",
            textShadow: "0 2px 24px rgba(0,0,0,0.55)",
          }}
        >
          <div className="flex-1 flex items-end pb-8 lg:pb-16">
            <div className="max-w-4xl text-bone">
              <p className="eyebrow mb-4 !text-bone/70">{car.brand}</p>
              <h1 className="serif text-5xl sm:text-7xl lg:text-[8.5rem] font-normal leading-[0.92] tracking-tight">
                {car.name}
              </h1>
              <p className="serif italic mt-1 text-3xl sm:text-5xl lg:text-7xl text-bone/65 leading-[0.95]">
                {car.subtitle}
              </p>
              <div className="mt-8 flex flex-wrap items-baseline gap-x-8 gap-y-2 text-xs uppercase tracking-[0.2em] text-bone/80">
                <span>Preis auf Anfrage</span>
                <span className="text-bone/40">·</span>
                <span>Wien, AT</span>
              </div>
            </div>
          </div>

          <div className="flex items-end justify-between gap-6 text-bone">
            <div className="flex items-baseline gap-6">
              <span className="serif text-2xl lg:text-3xl tabular-nums">
                <span>{car.num}</span>
                <span className="text-bone/40"> / {total}</span>
              </span>
              <span className="hidden sm:block h-px w-12 bg-bone/30" />
              <div className="hidden sm:flex gap-6 text-[11px] uppercase tracking-[0.2em] text-bone/70">
                <span>Baujahr · auf Anfrage</span>
                <span>Leistung · auf Anfrage</span>
              </div>
            </div>
            <a
              href={`/fahrzeuge/${car.slug}`}
              className="pointer-events-auto group inline-flex items-baseline gap-3 text-[11px] uppercase tracking-[0.2em] text-bone"
            >
              <span>Details ansehen</span>
              <span className="transition-transform duration-300 ease-out group-hover:translate-x-2">
                →
              </span>
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}
