"use client";

import { useEffect, useState } from "react";
import { ArrowLeft } from "lucide-react";
import type { Vehicle } from "@/lib/vehicles";
import { GRADIENT_COLORS } from "@/components/hero/constants";

type Props = {
  vehicle: Vehicle;
  closing: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

type DrawerStyle = React.CSSProperties & {
  "--drawer-accent": string;
};

export const VEHICLE_DETAIL_DRAWER_EXIT_MS = 280;

export function VehicleDetailDrawer({
  vehicle,
  closing,
  onClose,
  children,
}: Props) {
  const [entered, setEntered] = useState(false);

  useEffect(() => {
    const frame = requestAnimationFrame(() => setEntered(true));
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      cancelAnimationFrame(frame);
      document.body.style.overflow = previousOverflow;
    };
  }, []);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  const open = entered && !closing;
  const style: DrawerStyle = {
    "--drawer-accent": GRADIENT_COLORS[vehicle.gradient],
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`${vehicle.name} ${vehicle.subtitle}`}
      className="fixed inset-0 z-[70]"
      style={style}
    >
      <button
        type="button"
        aria-label="Fahrzeugdetails schließen"
        onClick={onClose}
        className={
          "absolute inset-0 bg-ink/60 transition-opacity duration-300 " +
          (open ? "opacity-100" : "opacity-0")
        }
      />

      <aside
        className={
          "absolute inset-y-0 right-0 flex w-full max-w-[1040px] flex-col overflow-hidden border-l border-line bg-ink shadow-[-32px_0_90px_rgba(0,0,0,0.34)] transition-transform duration-300 ease-[cubic-bezier(0.22,0.61,0.36,1)] " +
          (open ? "translate-x-0" : "translate-x-full")
        }
      >
        <div className="sticky top-0 z-20 flex min-h-16 items-center justify-between border-b border-line bg-ink/92 px-4 backdrop-blur-md sm:px-6">
          <div className="min-w-0">
            <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-mute">
              Fahrzeugdetails
            </p>
            <p className="mt-1 truncate text-sm text-bone">
              {vehicle.name} {vehicle.subtitle}
            </p>
          </div>
          <button
            type="button"
            aria-label="Zurück zur Übersicht"
            onClick={onClose}
            className="inline-flex h-10 w-10 items-center justify-center border border-line text-bone transition-colors hover:border-[var(--drawer-accent)] hover:text-[var(--drawer-accent)]"
          >
            <ArrowLeft size={18} strokeWidth={1.5} />
          </button>
        </div>

        <div className="overflow-y-auto">{children}</div>
      </aside>
    </div>
  );
}
