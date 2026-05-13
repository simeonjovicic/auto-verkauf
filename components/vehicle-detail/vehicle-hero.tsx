"use client";

import { useState } from "react";
import type { Vehicle } from "@/lib/vehicles";
import { GRADIENT_COLORS } from "@/components/hero/constants";

type Props = {
  vehicle: Vehicle;
  mode?: "page" | "drawer";
};

export function VehicleHero({ vehicle, mode = "page" }: Props) {
  const isDrawer = mode === "drawer";
  const [activeImage, setActiveImage] = useState(vehicle.src);

  // If there's a gallery, use it. Otherwise, fallback to just the main src.
  const galleryImages = vehicle.gallery && vehicle.gallery.length > 0 
    ? vehicle.gallery 
    : [vehicle.src];

  return (
    <section
      className="relative isolate overflow-hidden border-b border-line"
      style={
        {
          backgroundImage: `radial-gradient(ellipse 110% 80% at 50% 45%, ${GRADIENT_COLORS[vehicle.gradient]}, transparent 72%), #0a0a0a`,
        } as React.CSSProperties
      }
    >
      <div
        className={
          isDrawer
            ? "grid grid-cols-1 gap-y-8 px-5 pb-10 pt-10 sm:px-8 sm:pb-12 lg:grid-cols-12 lg:gap-x-8"
            : "mx-auto grid max-w-[1440px] grid-cols-1 gap-y-10 px-6 pb-16 pt-32 sm:px-12 sm:pb-20 sm:pt-40 lg:grid-cols-12 lg:gap-x-16 lg:px-20 lg:pb-24 lg:pt-44"
        }
      >
        <div className={isDrawer ? "lg:col-span-5" : "lg:col-span-5"}>
          <p className="eyebrow text-bone/70">{vehicle.brand}</p>
          <h1
            className={
              "serif mt-6 text-balance leading-[1.02] text-bone " +
              (isDrawer ? "text-4xl sm:text-5xl" : "text-5xl sm:text-6xl lg:text-7xl")
            }
          >
            {vehicle.name}{" "}
            <span className="italic text-bone/70">{vehicle.subtitle}</span>
          </h1>
          <p className="mt-8 text-sm uppercase tracking-[0.3em] text-bone/70">
            Preis auf Anfrage
          </p>
        </div>
        <div className={isDrawer ? "lg:col-span-7" : "lg:col-span-7"}>
          
          {/* Main active image */}
          <picture>
            {/* We only use srcAvif if the active image is the default one, otherwise we don't have AVIF versions mapped out yet. For simplicity, we just use the raw imgSrc for the active view to ensure it updates properly. */}
            {activeImage === vehicle.src && (
              <source srcSet={vehicle.srcAvif} type="image/avif" />
            )}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              key={activeImage} // Force re-render for smooth swap (or just let react update src)
              src={activeImage}
              alt={`${vehicle.name} ${vehicle.subtitle}`}
              width={vehicle.width}
              height={vehicle.height}
              decoding="async"
              loading={isDrawer ? "eager" : "lazy"}
              draggable={false}
              className={
                "h-auto w-full select-none drop-shadow-[0_40px_60px_rgba(0,0,0,0.5)] transition-opacity duration-300 animate-in fade-in " +
                (isDrawer ? "max-h-[420px] object-contain" : "")
              }
              style={{
                backgroundImage: activeImage === vehicle.src ? `url(${vehicle.blurDataURL})` : undefined,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
          </picture>

          {/* Interactive Thumbnails */}
          {galleryImages.length > 1 && (
            <div className="mt-6 flex flex-wrap gap-2">
              {galleryImages.map((imgSrc, idx) => {
                const isActive = activeImage === imgSrc;
                return (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setActiveImage(imgSrc)}
                    className={`relative overflow-hidden rounded-md border transition-all duration-200 ${
                      isActive 
                        ? "border-gold opacity-100 shadow-[0_0_15px_rgba(255,215,0,0.2)]" 
                        : "border-line opacity-60 hover:border-bone/50 hover:opacity-100"
                    }`}
                    style={{ width: "120px", height: "90px" }}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img 
                      src={imgSrc} 
                      alt={`Thumbnail ${idx + 1}`} 
                      className="h-full w-full object-cover"
                      loading="lazy"
                    />
                  </button>
                );
              })}
            </div>
          )}

        </div>
      </div>
    </section>
  );
}
