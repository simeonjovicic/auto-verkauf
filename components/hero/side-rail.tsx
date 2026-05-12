"use client";

import { ChevronUp, ChevronDown } from "lucide-react";

export function SideRail() {
  return (
    <div
      className="pointer-events-none absolute left-4 top-1/2 z-20 hidden -translate-y-1/2 flex-col items-center gap-5 text-bone/70 sm:left-8 md:flex lg:left-12"
      style={{ filter: "drop-shadow(0 1px 6px rgba(0,0,0,0.5))" }}
    >
      <div className="h-px w-6 bg-bone/40" />
      <div className="flex flex-col gap-3">
        <button
          type="button"
          aria-label="Vorheriges Fahrzeug"
          className="pointer-events-auto text-bone/60 transition-colors hover:text-bone"
        >
          <ChevronUp size={16} strokeWidth={1.4} />
        </button>
        <button
          type="button"
          aria-label="Nächstes Fahrzeug"
          className="pointer-events-auto text-bone/60 transition-colors hover:text-bone"
        >
          <ChevronDown size={16} strokeWidth={1.4} />
        </button>
      </div>
      <div className="h-px w-6 bg-bone/40" />
    </div>
  );
}
