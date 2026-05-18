"use client";

const STATS = [
  { value: "1974", label: "in Familienhand" },
  { value: "Hyundai", label: "Hauptmarke" },
  { value: "Mitsubishi", label: "Neuwagen & Service" },
  { value: "1220", label: "Wien-Donaustadt" },
] as const;

export function OverlayText() {
  return (
    <div className="pointer-events-none absolute inset-0 flex flex-col justify-between px-6 pt-28 sm:px-12 sm:pt-32 lg:px-20">
      {/* Brand headline block */}
      <div className="flex flex-1 items-center">
        <div
          className="max-w-3xl text-bone"
          style={{ textShadow: "0 2px 32px rgba(0,0,0,0.85)" }}
        >
          <h1 className="text-5xl font-black uppercase leading-[0.88] tracking-tight sm:text-7xl lg:text-[7.5rem]">
            Fischerauto.
          </h1>
          <p className="mt-5 text-[11px] uppercase tracking-[0.28em] text-bone/90 sm:mt-6">
            Ihr Wiener Familienbetrieb seit Generationen
          </p>

          <div className="pointer-events-auto mt-8 flex flex-wrap items-center gap-4 sm:mt-10 sm:gap-6">
            <a
              href="/fahrzeuge"
              className="inline-flex h-12 items-center bg-bone px-7 text-[11px] font-semibold uppercase tracking-[0.18em] text-ink transition-opacity hover:opacity-90"
            >
              Fahrzeuge ansehen
            </a>
            <a
              href="/service"
              className="group inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.18em] text-bone transition-colors hover:text-gold"
            >
              <span>Service anfragen</span>
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom stats bar */}
      <div
        className="pb-10 sm:pb-14"
        style={{ textShadow: "0 1px 12px rgba(0,0,0,0.8)" }}
      >
        <div className="grid grid-cols-2 border-t border-bone/10 sm:grid-cols-4">
          {STATS.map((stat) => (
            <div
              key={stat.value}
              className="border-l border-bone/10 pl-4 pt-5 pr-4 sm:pl-6 sm:pr-8"
            >
              <p className="text-lg font-bold uppercase tracking-wide text-bone sm:text-xl">
                {stat.value}
              </p>
              <p className="mt-0.5 text-[10px] uppercase tracking-[0.2em] text-bone/80">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
