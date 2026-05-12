import Link from "next/link";
import type { Vehicle } from "@/lib/vehicles";

export function VehicleCard({ vehicle }: { vehicle: Vehicle }) {
  return (
    <Link
      href={`/fahrzeuge/${vehicle.slug}`}
      className="group relative block border border-line bg-ink"
      aria-label={`${vehicle.name} ${vehicle.subtitle} — Details ansehen`}
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-ink">
        <picture>
          <source srcSet={vehicle.srcAvif} type="image/avif" />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={vehicle.src}
            alt={vehicle.alt}
            width={vehicle.width}
            height={vehicle.height}
            loading="lazy"
            decoding="async"
            draggable={false}
            className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03] select-none"
            style={{
              backgroundImage: `url(${vehicle.blurDataURL})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        </picture>
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent"
        />
      </div>
      <div className="flex items-end justify-between gap-4 px-5 py-5 sm:px-6">
        <div>
          <p className="eyebrow mb-2">{vehicle.brand}</p>
          <h3 className="serif text-xl text-bone leading-tight sm:text-2xl">
            {vehicle.name}{" "}
            <span className="italic text-bone/60">{vehicle.subtitle}</span>
          </h3>
        </div>
        <span className="text-bone/70 transition-transform duration-300 ease-out group-hover:translate-x-2">
          →
        </span>
      </div>
    </Link>
  );
}
