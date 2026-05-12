"use client";

import { useLayoutEffect, useMemo, useRef, useState } from "react";
import { gsap, Flip } from "@/lib/gsap";
import { vehicles, type Vehicle } from "@/lib/vehicles";
import { VehicleCard } from "./vehicle-card";
import { FilterBar, type Filter, type Sort } from "./filter-bar";

export function VehicleGrid({ initial }: { initial?: Vehicle[] } = {}) {
  const source = initial ?? vehicles;
  const [filter, setFilter] = useState<Filter>("Alle");
  const [sort, setSort] = useState<Sort>("Neu zuerst");
  const gridRef = useRef<HTMLDivElement>(null);
  const stateRef = useRef<ReturnType<typeof Flip.getState> | null>(null);

  const filtered = useMemo(() => {
    let f = source;
    if (filter !== "Alle") f = f.filter((v) => v.brand === filter);
    if (sort === "A–Z") {
      f = [...f].sort((a, b) =>
        `${a.name} ${a.subtitle}`.localeCompare(`${b.name} ${b.subtitle}`, "de"),
      );
    }
    return f;
  }, [source, filter, sort]);

  useLayoutEffect(() => {
    if (!gridRef.current || !stateRef.current) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      stateRef.current = null;
      return;
    }
    Flip.from(stateRef.current, {
      duration: 0.55,
      ease: "power3.out",
      absolute: true,
      stagger: 0.03,
      onEnter: (els) =>
        gsap.fromTo(
          els,
          { opacity: 0, scale: 0.94 },
          { opacity: 1, scale: 1, duration: 0.4, ease: "power3.out" },
        ),
      onLeave: (els) =>
        gsap.to(els, { opacity: 0, scale: 0.94, duration: 0.3, ease: "power2.in" }),
    });
    stateRef.current = null;
  }, [filtered]);

  function capture() {
    if (gridRef.current) {
      stateRef.current = Flip.getState(gridRef.current.children, { props: "opacity" });
    }
  }

  return (
    <>
      <FilterBar
        filter={filter}
        sort={sort}
        count={filtered.length}
        onFilter={(f) => {
          capture();
          setFilter(f);
        }}
        onSort={(s) => {
          capture();
          setSort(s);
        }}
      />
      <div
        ref={gridRef}
        className="grid grid-cols-1 gap-px bg-line sm:grid-cols-2 lg:grid-cols-3"
      >
        {filtered.map((v) => (
          <div key={v.slug} data-flip-id={v.slug}>
            <VehicleCard vehicle={v} />
          </div>
        ))}
      </div>
      {filtered.length === 0 ? (
        <p className="mt-12 text-center text-mute">
          Keine Fahrzeuge in dieser Auswahl. Sprechen Sie uns an — unser Bestand
          rotiert laufend.
        </p>
      ) : null}
    </>
  );
}
