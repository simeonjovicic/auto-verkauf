import Link from "next/link";
import { Reveal } from "@/components/ui/reveal";

export function FischerAngebotWoche() {
  return (
    <section
      className="bg-paper px-4 py-10 sm:px-8 sm:py-14 lg:px-16 lg:py-20"
      aria-labelledby="angebot-woche-title"
    >
      <Reveal direction="up" distance={32} duration={1000} className="mx-auto max-w-360 overflow-hidden rounded-2xl bg-anthracite shadow-[0_40px_100px_rgba(0,0,0,0.28)]">
        <div className="grid min-h-130 grid-cols-1 lg:grid-cols-[1fr_1fr]">
          {/* ── Text column ── */}
          <div className="flex flex-col justify-center px-10 py-14 sm:px-14 sm:py-16 lg:py-20 lg:pl-16 lg:pr-12">
            <div className="flex items-center gap-4">
              <span className="font-mono text-[11px] tracking-[0.18em] text-paper/45">
                04
              </span>
              <div className="h-px w-12 bg-paper/30" />
              <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-paper/55">
                Angebot der Woche · Bis 31. Mai
              </p>
            </div>
            <h2
              id="angebot-woche-title"
              className="mt-5 font-serif text-4xl italic leading-[1.04] tracking-tight text-paper sm:text-5xl lg:text-[56px]"
            >
              Hyundai Santa Fe<br />PHEV Black Line.
            </h2>
            <p className="mt-6 max-w-sm text-[15px] leading-relaxed text-paper/60">
              Vorführwagen aus 2024 — 3.200 km, voll ausgestattet, mit der
              vollen Hyundai 8-Jahres-Garantie auf die Batterie.
            </p>

            <div className="mt-8 flex items-baseline gap-5">
              <span className="text-base text-paper/35 line-through">€ 62.900</span>
              <span className="font-serif text-5xl italic leading-none text-paper">€ 58.400</span>
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                href="/fahrzeuge/hyundai-santa-fe-phev-black-line"
                className="inline-flex items-center justify-center rounded-full bg-paper px-7 py-3 text-sm font-semibold text-anthracite transition-colors hover:bg-surface"
              >
                Details &amp; Probefahrt
              </Link>
              <Link
                href="/kontakt"
                className="inline-flex items-center justify-center rounded-full border border-paper/20 px-7 py-3 text-sm font-semibold text-paper transition-colors hover:border-paper/55"
              >
                Finanzierung berechnen
              </Link>
            </div>
          </div>

          {/* ── Image column ── */}
          <div className="relative flex items-center justify-center bg-[#1f1d1a] px-10 py-12 lg:px-14 lg:py-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/fischerauto/santa-fe-black-new-side.png"
              alt="Hyundai Santa Fe PHEV Black Line – Angebot der Woche"
              className="relative w-full max-w-xl object-contain drop-shadow-[0_30px_60px_rgba(0,0,0,0.5)]"
              loading="lazy"
            />
          </div>
        </div>
      </Reveal>
    </section>
  );
}
