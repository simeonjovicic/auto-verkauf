import type { Vehicle } from "@/lib/vehicles";
import { GRADIENT_COLORS } from "@/components/hero/constants";

type Props = {
  vehicle: Vehicle;
  mode?: "page" | "drawer";
};

export function VehicleHero({ vehicle, mode = "page" }: Props) {
  const isDrawer = mode === "drawer";

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
          <picture>
            <source srcSet={vehicle.srcAvif} type="image/avif" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={vehicle.src}
              alt={vehicle.alt}
              width={vehicle.width}
              height={vehicle.height}
              decoding="async"
              loading={isDrawer ? "eager" : "lazy"}
              draggable={false}
              className={
                "h-auto w-full select-none drop-shadow-[0_40px_60px_rgba(0,0,0,0.5)] " +
                (isDrawer ? "max-h-[420px] object-contain" : "")
              }
              style={{
                backgroundImage: `url(${vehicle.blurDataURL})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
          </picture>
        </div>
      </div>
    </section>
  );
}
