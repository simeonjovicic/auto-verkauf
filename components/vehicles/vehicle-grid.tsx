"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { vehicles, type Vehicle } from "@/lib/vehicles";
import { VehicleDetailContent } from "@/components/vehicle-detail/vehicle-detail-content";
import {
  VehicleDetailDrawer,
  VEHICLE_DETAIL_DRAWER_EXIT_MS,
} from "@/components/vehicle-detail/vehicle-detail-drawer";
import { VehicleCard } from "./vehicle-card";
import { FilterBar, type Filter, type Sort } from "./filter-bar";

export function VehicleGrid({ initial }: { initial?: Vehicle[] } = {}) {
  const source = initial ?? vehicles;
  const [filter, setFilter] = useState<Filter>("Alle");
  const [sort, setSort] = useState<Sort>("Neu zuerst");
  const [drawerVehicle, setDrawerVehicle] = useState<Vehicle | null>(null);
  const [drawerClosing, setDrawerClosing] = useState(false);
  const drawerVehicleRef = useRef<Vehicle | null>(null);
  const drawerClosingRef = useRef(false);
  const closeTimerRef = useRef<number | null>(null);
  const ignoreNextPopRef = useRef(false);

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

  useEffect(() => {
    drawerVehicleRef.current = drawerVehicle;
  }, [drawerVehicle]);

  useEffect(() => {
    drawerClosingRef.current = drawerClosing;
  }, [drawerClosing]);

  useEffect(() => {
    return () => {
      if (closeTimerRef.current !== null) {
        window.clearTimeout(closeTimerRef.current);
      }
    };
  }, []);

  const finishClose = useCallback((updateHistory: boolean) => {
    closeTimerRef.current = window.setTimeout(() => {
      closeTimerRef.current = null;
      drawerVehicleRef.current = null;
      drawerClosingRef.current = false;
      setDrawerVehicle(null);
      setDrawerClosing(false);

      if (updateHistory) {
        ignoreNextPopRef.current = true;
        window.history.back();
      }
    }, VEHICLE_DETAIL_DRAWER_EXIT_MS);
  }, []);

  const closeDrawer = useCallback(() => {
    if (!drawerVehicleRef.current || drawerClosingRef.current) return;
    drawerClosingRef.current = true;
    setDrawerClosing(true);
    finishClose(true);
  }, [finishClose]);

  useEffect(() => {
    const onPopState = () => {
      if (ignoreNextPopRef.current) {
        ignoreNextPopRef.current = false;
        return;
      }

      if (!drawerVehicleRef.current || drawerClosingRef.current) return;
      drawerClosingRef.current = true;
      setDrawerClosing(true);
      finishClose(false);
    };

    window.addEventListener("popstate", onPopState);
    return () => window.removeEventListener("popstate", onPopState);
  }, [finishClose]);

  function openDrawer(vehicle: Vehicle) {
    if (closeTimerRef.current !== null) {
      window.clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }

    drawerVehicleRef.current = vehicle;
    drawerClosingRef.current = false;
    setDrawerVehicle(vehicle);
    setDrawerClosing(false);
    window.history.pushState(
      { vehicleDrawer: vehicle.slug },
      "",
      `/fahrzeuge/${vehicle.slug}/`,
    );
  }

  return (
    <>
      <FilterBar
        filter={filter}
        sort={sort}
        count={filtered.length}
        onFilter={setFilter}
        onSort={setSort}
      />
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
        {filtered.map((v) => (
          <div key={v.slug}>
            <VehicleCard vehicle={v} onOpen={openDrawer} />
          </div>
        ))}
      </div>
      {filtered.length === 0 ? (
        <p className="mt-12 text-center text-steel">
          Keine Fahrzeuge in dieser Auswahl. Sprechen Sie uns an — unser Bestand
          rotiert laufend.
        </p>
      ) : null}
      {drawerVehicle ? (
        <VehicleDetailDrawer
          vehicle={drawerVehicle}
          closing={drawerClosing}
          onClose={closeDrawer}
        >
          <VehicleDetailContent vehicle={drawerVehicle} mode="drawer" />
        </VehicleDetailDrawer>
      ) : null}
    </>
  );
}
