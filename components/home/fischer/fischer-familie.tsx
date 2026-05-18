"use client";

import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const TESTIMONIALS = [
  {
    quote:
      "„Bei Fischer ist man kein Kunde, sondern ein Teil der Familie. Das spürt man vom ersten Anruf bis zur Übergabe.“",
    attribution: "Helga K. · Kundin seit 1995 · 1220 Wien",
  },
  {
    quote:
      "„Drei Generationen unter einem Dach – bei Reparaturen redet man mit jemandem, der den Wagen kennt.“",
    attribution: "Andreas S. · Stammkunde · Donaustadt",
  },
  {
    quote:
      "„Ehrliche Beratung, faires Eintausch-Angebot, kein Verkaufsdruck. Selten geworden.“",
    attribution: "Familie Pichler · Drittes Auto vom Fischer · 2024",
  },
  {
    quote:
      "„Termine werden eingehalten, der Preis stimmt mit dem Kostenvoranschlag überein. So muss eine Werkstatt sein.“",
    attribution: "Markus T. · Kunde seit 2018 · Floridsdorf",
  },
];

export function FischerFamilie() {
  const [active, setActive] = useState(0);
  const total = TESTIMONIALS.length;
  const t = TESTIMONIALS[active];

  const prev = () => setActive((a) => (a - 1 + total) % total);
  const next = () => setActive((a) => (a + 1) % total);

  useEffect(() => {
    const id = setInterval(() => {
      setActive((a) => (a + 1) % total);
    }, 6000);
    return () => clearInterval(id);
  }, [total]);

  return (
    <section
      className="bg-anthracite py-24 text-paper sm:py-28"
      aria-label="Kundenstimmen"
    >
      <div className="mx-auto max-w-5xl px-6 text-center sm:px-12 lg:px-20">
        <div className="flex items-center justify-center gap-4">
          <span className="font-mono text-[11px] tracking-[0.18em] text-paper/45">
            06
          </span>
          <div className="h-px w-12 bg-paper/30" />
          <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-paper/55">
            Kundenstimmen
          </p>
        </div>

        <blockquote className="mt-12 min-h-45 sm:min-h-50">
          <p className="font-serif text-2xl italic leading-snug text-paper sm:text-3xl lg:text-4xl">
            {t.quote}
          </p>
          <footer className="mt-10 text-[10px] font-semibold uppercase tracking-[0.24em] text-paper/45">
            {t.attribution}
          </footer>
        </blockquote>

        <div className="mt-12 flex items-center justify-center gap-6">
          <button
            onClick={prev}
            aria-label="Vorherige Stimme"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-paper/25 text-paper/70 transition-colors hover:border-paper hover:text-paper"
          >
            <ChevronLeft size={16} strokeWidth={1.8} aria-hidden />
          </button>

          <div className="flex items-center gap-2" role="tablist" aria-label="Stimme wechseln">
            {TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                role="tab"
                aria-selected={i === active}
                aria-label={`Stimme ${i + 1} von ${total}`}
                onClick={() => setActive(i)}
                className={`h-0.5 transition-all duration-300 ${
                  i === active ? "w-8 bg-paper" : "w-4 bg-paper/30"
                }`}
              />
            ))}
          </div>

          <button
            onClick={next}
            aria-label="Nächste Stimme"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-paper/25 text-paper/70 transition-colors hover:border-paper hover:text-paper"
          >
            <ChevronRight size={16} strokeWidth={1.8} aria-hidden />
          </button>
        </div>
      </div>
    </section>
  );
}
