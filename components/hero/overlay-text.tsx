"use client";

const STATS = [
  { value: "25+", label: "Fahrzeuge auf Lager" },
  { value: "Exklusiv", label: "Supersportwagen" },
  { value: "15 Jahre", label: "Erfahrung" },
  { value: "EU-weit", label: "Lieferung möglich" },
] as const;

export function OverlayText() {
  return (
    <div className="pointer-events-none absolute inset-0 flex flex-col justify-between px-6 pt-28 sm:px-12 sm:pt-32 lg:px-20">
      {/* Brand headline block */}
      <div className="flex flex-1 items-center">
        <div
          className="max-w-3xl text-bone"
          style={{ textShadow: "0 2px 28px rgba(0,0,0,0.6)" }}
        >
          <h1 className="text-5xl font-black uppercase leading-[0.88] tracking-tight sm:text-7xl lg:text-[7.5rem]">
            Getrieben von
            <br />
            Exzellenz.
          </h1>
          <p className="mt-5 text-[11px] uppercase tracking-[0.28em] text-bone/65 sm:mt-6">
            Die feinsten Automobile Wiens
          </p>

          <div className="pointer-events-auto mt-8 flex flex-wrap items-center gap-4 sm:mt-10 sm:gap-6">
            <a
              href="/fahrzeuge"
              className="inline-flex h-12 items-center bg-bone px-7 text-[11px] font-semibold uppercase tracking-[0.18em] text-ink transition-opacity hover:opacity-90"
            >
              Alle Fahrzeuge
            </a>
            <a
              href="/kontakt"
              className="group inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.18em] text-bone/85 transition-colors hover:text-bone"
            >
              <span>Fahrzeug verkaufen</span>
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
        style={{ textShadow: "0 1px 8px rgba(0,0,0,0.5)" }}
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
              <p className="mt-0.5 text-[10px] uppercase tracking-[0.2em] text-bone/50">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
