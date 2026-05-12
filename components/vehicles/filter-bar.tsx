"use client";

import type { Brand } from "@/lib/vehicles";

export type Filter = "Alle" | Brand;
export type Sort = "Neu zuerst" | "A–Z";

const FILTERS: Filter[] = ["Alle", "Ferrari", "Porsche", "BMW", "Sonstige"];
const SORTS: Sort[] = ["Neu zuerst", "A–Z"];

type Props = {
  filter: Filter;
  sort: Sort;
  onFilter: (f: Filter) => void;
  onSort: (s: Sort) => void;
  count: number;
};

export function FilterBar({ filter, sort, onFilter, onSort, count }: Props) {
  return (
    <div className="-mx-6 mb-10 border-y border-chrome bg-panel px-6 py-4 shadow-[0_12px_30px_rgba(17,24,32,0.06)] sm:-mx-12 sm:px-12 lg:-mx-20 lg:px-20">
      <div className="mx-auto flex max-w-[1440px] flex-wrap items-center justify-between gap-x-8 gap-y-3">
        <div className="flex flex-wrap items-center gap-1 sm:gap-2">
          {FILTERS.map((f) => {
            const active = f === filter;
            return (
              <button
                key={f}
                type="button"
                onClick={() => onFilter(f)}
                className={
                  "rounded-full border px-4 py-2 text-[11px] uppercase tracking-[0.2em] transition-colors " +
                  (active
                    ? "border-graphite bg-graphite text-white"
                    : "border-chrome bg-showroom text-steel hover:border-signal hover:text-signal")
                }
              >
                {f}
              </button>
            );
          })}
        </div>
        <div className="flex items-center gap-4 text-[11px] uppercase tracking-[0.2em] text-steel">
          <span aria-live="polite">{count} Fahrzeuge</span>
          <span className="hidden h-3 w-px bg-chrome sm:block" />
          <label className="flex items-center gap-2">
            <span className="hidden sm:inline">Sortierung</span>
            <select
              value={sort}
              onChange={(e) => onSort(e.target.value as Sort)}
              className="cursor-pointer rounded-[8px] border border-chrome bg-showroom px-3 py-2 text-graphite uppercase tracking-[0.2em] focus:outline-none focus:ring-2 focus:ring-signal/30"
            >
              {SORTS.map((s) => (
                <option key={s} value={s} className="bg-panel text-graphite">
                  {s}
                </option>
              ))}
            </select>
          </label>
        </div>
      </div>
    </div>
  );
}
