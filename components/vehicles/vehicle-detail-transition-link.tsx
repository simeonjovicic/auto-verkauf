"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import type { Vehicle } from "@/lib/vehicles";
import { VehicleDetailContent } from "@/components/vehicle-detail/vehicle-detail-content";
import { SimilarVehicles } from "@/components/vehicle-detail/similar-vehicles";

type NavigateEvent = {
  preventDefault: () => void;
};

const DETAIL_SLIDE_MS = 680;

type Props = {
  vehicle: Vehicle;
  href: string;
  className?: string;
  style?: React.CSSProperties;
  "aria-label"?: string;
  children: React.ReactNode;
};

export function VehicleDetailTransitionLink({
  vehicle,
  href,
  className,
  style,
  "aria-label": ariaLabel,
  children,
}: Props) {
  const [transitioning, setTransitioning] = useState(false);
  const [entered, setEntered] = useState(false);
  const pushedStateRef = useRef(false);
  const closeTimerRef = useRef<number | null>(null);
  const ignoreNextPopRef = useRef(false);

  useEffect(() => {
    return () => {
      if (closeTimerRef.current) window.clearTimeout(closeTimerRef.current);
    };
  }, []);

  useEffect(() => {
    if (!transitioning) return;

    const onPopState = () => {
      if (closeTimerRef.current) window.clearTimeout(closeTimerRef.current);

      if (ignoreNextPopRef.current) {
        ignoreNextPopRef.current = false;
        pushedStateRef.current = false;
        setTransitioning(false);
        return;
      }

      pushedStateRef.current = false;
      setEntered(false);
      closeTimerRef.current = window.setTimeout(() => {
        setTransitioning(false);
      }, DETAIL_SLIDE_MS);
    };

    window.addEventListener("popstate", onPopState);
    return () => window.removeEventListener("popstate", onPopState);
  }, [transitioning]);

  useEffect(() => {
    if (!transitioning) return;

    const frame = window.requestAnimationFrame(() => setEntered(true));
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      window.cancelAnimationFrame(frame);
      document.body.style.overflow = previousOverflow;
    };
  }, [transitioning]);

  function closeOverlay() {
    if (closeTimerRef.current) window.clearTimeout(closeTimerRef.current);
    setEntered(false);

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      if (pushedStateRef.current) {
        ignoreNextPopRef.current = true;
        window.history.back();
        return;
      }

      setTransitioning(false);
      return;
    }

    if (pushedStateRef.current) {
      closeTimerRef.current = window.setTimeout(() => {
        ignoreNextPopRef.current = true;
        window.history.back();
      }, DETAIL_SLIDE_MS);
      return;
    }

    closeTimerRef.current = window.setTimeout(() => {
      setTransitioning(false);
    }, DETAIL_SLIDE_MS);
  }

  function handleNavigate(event: NavigateEvent) {
    if (transitioning) {
      event.preventDefault();
      return;
    }

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    event.preventDefault();
    setTransitioning(true);
    pushedStateRef.current = true;
    window.history.pushState({ vehicleDetailOverlay: true }, "", href);
  }

  function handleReducedMotionNavigate() {
    setTransitioning(true);
    setEntered(true);
    pushedStateRef.current = true;
    window.history.pushState({ vehicleDetailOverlay: true }, "", href);
  }

  return (
    <>
      <Link
        href={href}
        className={className}
        aria-label={ariaLabel}
        style={style}
        onNavigate={(event) => {
          if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
            event.preventDefault();
            handleReducedMotionNavigate();
            return;
          }

          handleNavigate(event);
        }}
      >
        {children}
      </Link>

      {transitioning ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`${vehicle.name} ${vehicle.subtitle}`}
          className={
            "fixed inset-0 z-[80] overflow-y-auto bg-ink text-bone shadow-[-36px_0_110px_rgba(0,0,0,0.45)] transition-transform duration-[680ms] ease-[cubic-bezier(0.22,0.61,0.36,1)] " +
            (entered ? "translate-x-0" : "translate-x-full")
          }
        >
          <button
            type="button"
            aria-label="Zurück zur Übersicht"
            onClick={closeOverlay}
            className="fixed left-4 top-4 z-[90] inline-flex h-11 w-11 items-center justify-center border border-line bg-ink/70 text-bone backdrop-blur-md transition-colors hover:border-gold hover:text-gold sm:left-8 sm:top-6"
          >
            <ArrowLeft size={18} strokeWidth={1.5} />
          </button>
          <VehicleDetailContent vehicle={vehicle} />
          <SimilarVehicles current={vehicle} />
        </div>
      ) : null}
    </>
  );
}
