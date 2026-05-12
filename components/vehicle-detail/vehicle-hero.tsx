import type { Vehicle } from "@/lib/vehicles";
import { GRADIENT_COLORS } from "@/components/hero/constants";

export function VehicleHero({ vehicle }: { vehicle: Vehicle }) {
  return (
    <section
      className="relative isolate overflow-hidden border-b border-line"
      style={
        {
          backgroundImage: `radial-gradient(ellipse 110% 80% at 50% 45%, ${GRADIENT_COLORS[vehicle.gradient]}, transparent 72%), #0a0a0a`,
        } as React.CSSProperties
      }
    >
      <div className="mx-auto grid max-w-[1440px] grid-cols-1 gap-y-10 px-6 pt-32 pb-16 sm:px-12 sm:pt-40 sm:pb-20 lg:grid-cols-12 lg:gap-x-16 lg:px-20 lg:pt-44 lg:pb-24">
        <div className="lg:col-span-5">
          <p className="eyebrow text-bone/70">
            {vehicle.num} · {vehicle.brand}
          </p>
          <h1 className="serif mt-6 text-balance text-5xl leading-[1.02] text-bone sm:text-6xl lg:text-7xl">
            {vehicle.name}{" "}
            <span className="italic text-bone/70">{vehicle.subtitle}</span>
          </h1>
          <p className="mt-8 text-sm uppercase tracking-[0.3em] text-bone/70">
            Preis auf Anfrage
          </p>
        </div>
        <div className="lg:col-span-7">
          <picture>
            <source srcSet={vehicle.srcAvif} type="image/avif" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={vehicle.src}
              alt={vehicle.alt}
              width={vehicle.width}
              height={vehicle.height}
              decoding="async"
              draggable={false}
              className="h-auto w-full select-none drop-shadow-[0_40px_60px_rgba(0,0,0,0.5)]"
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
