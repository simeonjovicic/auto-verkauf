"use client";

import type { Brand } from "@/lib/vehicles";

export type Sort =
  | "newest"
  | "az"
  | "price-asc"
  | "price-desc"
  | "km-asc"
  | "power-desc";

export type Filters = {
  brands: Brand[];
  categories: string[];
  model: string; // "" = all
  power: [number, number];
  mileage: [number, number];
  price: [number, number];
  year: [number, number];
  sort: Sort;
};

const BRAND_OPTIONS: Brand[] = ["Hyundai", "Mitsubishi", "Gebrauchtwagen"];

const SORT_LABELS: Record<Sort, string> = {
  newest: "Neu zuerst",
  az: "A – Z",
  "price-asc": "Preis aufsteigend",
  "price-desc": "Preis absteigend",
  "km-asc": "Kilometer aufsteigend",
  "power-desc": "Leistung absteigend",
};

type Range = [number, number];

type Props = {
  filters: Filters;
  ranges: {
    power: Range;
    mileage: Range;
    price: Range;
    year: Range;
  };
  categories: string[];
  models: string[];
  count: number;
  onChange: <K extends keyof Filters>(key: K, value: Filters[K]) => void;
  onReset: () => void;
};

export function FilterBar({
  filters,
  ranges,
  categories,
  models,
  count,
  onChange,
  onReset,
}: Props) {
  const toggleBrand = (b: Brand) => {
    const next = filters.brands.includes(b)
      ? filters.brands.filter((x) => x !== b)
      : [...filters.brands, b];
    onChange("brands", next);
  };

  const toggleCategory = (c: string) => {
    const next = filters.categories.includes(c)
      ? filters.categories.filter((x) => x !== c)
      : [...filters.categories, c];
    onChange("categories", next);
  };

  return (
    <aside
      aria-label="Bestand filtern"
      className="flex flex-col gap-8 border border-line bg-ink p-6 text-bone sm:p-7"
    >
      {/* Header */}
      <div className="flex items-baseline justify-between gap-4 border-b border-line pb-5">
        <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-bone">
          Filter
        </p>
        <span
          className="text-[10px] uppercase tracking-[0.22em] text-mute"
          aria-live="polite"
        >
          {count} {count === 1 ? "Fahrzeug" : "Fahrzeuge"}
        </span>
      </div>

      {/* Sort */}
      <Section title="Sortierung">
        <select
          value={filters.sort}
          onChange={(e) => onChange("sort", e.target.value as Sort)}
          className="w-full cursor-pointer border border-line bg-ink px-3 py-2.5 text-[12px] uppercase tracking-[0.18em] text-bone focus:border-gold focus:outline-none"
        >
          {(Object.keys(SORT_LABELS) as Sort[]).map((s) => (
            <option key={s} value={s} className="bg-ink">
              {SORT_LABELS[s]}
            </option>
          ))}
        </select>
      </Section>

      {/* Marke */}
      <Section title="Marke">
        <div className="flex flex-wrap gap-2">
          {BRAND_OPTIONS.map((b) => {
            const active = filters.brands.includes(b);
            return (
              <button
                key={b}
                type="button"
                onClick={() => toggleBrand(b)}
                aria-pressed={active}
                className={
                  "border px-3 py-1.5 text-[11px] uppercase tracking-[0.22em] transition-colors " +
                  (active
                    ? "border-gold bg-gold/10 text-gold"
                    : "border-line text-bone/80 hover:border-bone/40 hover:text-bone")
                }
              >
                {b}
              </button>
            );
          })}
        </div>
      </Section>

      {/* Kategorie */}
      {categories.length > 0 && (
        <Section title="Kategorie">
          <ul className="space-y-2.5">
            {categories.map((c) => {
              const active = filters.categories.includes(c);
              return (
                <li key={c}>
                  <label className="flex cursor-pointer items-center gap-3 text-[13px] text-bone/85 hover:text-bone">
                    <input
                      type="checkbox"
                      checked={active}
                      onChange={() => toggleCategory(c)}
                      className="h-3.5 w-3.5 cursor-pointer accent-gold"
                    />
                    {c}
                  </label>
                </li>
              );
            })}
          </ul>
        </Section>
      )}

      {/* Modell */}
      {models.length > 1 && (
        <Section title="Modell">
          <select
            value={filters.model}
            onChange={(e) => onChange("model", e.target.value)}
            className="w-full cursor-pointer border border-line bg-ink px-3 py-2.5 text-[12px] text-bone focus:border-gold focus:outline-none"
          >
            <option value="" className="bg-ink">Alle Modelle</option>
            {models.map((m) => (
              <option key={m} value={m} className="bg-ink">
                {m}
              </option>
            ))}
          </select>
        </Section>
      )}

      {/* Leistung */}
      <Section title="Leistung (PS)">
        <RangePicker
          value={filters.power}
          bounds={ranges.power}
          step={10}
          onChange={(v) => onChange("power", v)}
        />
      </Section>

      {/* Kilometerstand */}
      <Section title="Kilometerstand">
        <RangePicker
          value={filters.mileage}
          bounds={ranges.mileage}
          step={1000}
          onChange={(v) => onChange("mileage", v)}
        />
      </Section>

      {/* Preis */}
      <Section title="Preis (€)">
        <RangePicker
          value={filters.price}
          bounds={ranges.price}
          step={1000}
          onChange={(v) => onChange("price", v)}
        />
      </Section>

      {/* Baujahr */}
      <Section title="Baujahr">
        <RangePicker
          value={filters.year}
          bounds={ranges.year}
          step={1}
          onChange={(v) => onChange("year", v)}
        />
      </Section>

      <button
        type="button"
        onClick={onReset}
        className="mt-2 self-start text-[10px] uppercase tracking-[0.28em] text-mute transition-colors hover:text-gold"
      >
        Filter zurücksetzen
      </button>
    </aside>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.25em] text-mute">
        {title}
      </p>
      {children}
    </div>
  );
}

function RangePicker({
  value,
  bounds,
  step,
  onChange,
}: {
  value: Range;
  bounds: Range;
  step: number;
  onChange: (v: Range) => void;
}) {
  const [min, max] = value;
  const [bmin, bmax] = bounds;

  return (
    <div className="grid grid-cols-2 gap-2">
      <input
        type="number"
        inputMode="numeric"
        value={min}
        min={bmin}
        max={max}
        step={step}
        onChange={(e) => onChange([clamp(+e.target.value, bmin, max), max])}
        className="w-full border border-line bg-ink px-3 py-2 text-[12px] text-bone focus:border-gold focus:outline-none"
        aria-label="Minimum"
      />
      <input
        type="number"
        inputMode="numeric"
        value={max}
        min={min}
        max={bmax}
        step={step}
        onChange={(e) => onChange([min, clamp(+e.target.value, min, bmax)])}
        className="w-full border border-line bg-ink px-3 py-2 text-[12px] text-bone focus:border-gold focus:outline-none"
        aria-label="Maximum"
      />
    </div>
  );
}

function clamp(n: number, lo: number, hi: number) {
  if (Number.isNaN(n)) return lo;
  return Math.min(hi, Math.max(lo, n));
}
