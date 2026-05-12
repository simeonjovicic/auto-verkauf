"use client";

import type { Vehicle } from "@/lib/vehicles";
import { GRADIENT_COLORS, HERO_MODE } from "./constants";

type Props = {
  cars: Vehicle[];
  registerRef: (el: HTMLDivElement | null, index: number) => void;
};

export function CarStage(props: Props) {
  return HERO_MODE === "cutout" ? (
    <CutoutStage {...props} />
  ) : (
    <PhotoStage {...props} />
  );
}

function PhotoStage({ cars, registerRef }: Props) {
  return (
    <div className="absolute inset-0">
      {cars.map((car, i) => (
        <div
          key={car.slug}
          ref={(el) => {
            registerRef(el, i);
          }}
          className="absolute inset-0 will-change-transform"
          style={{
            opacity: i === 0 ? 1 : 0,
            transform: i === 0 ? "translate3d(0,0,0)" : "translate3d(15vw,0,0)",
          }}
        >
          <picture>
            <source srcSet={car.srcAvif} type="image/avif" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={car.src}
              alt={car.alt}
              width={car.width}
              height={car.height}
              loading={i === 0 ? "eager" : "lazy"}
              decoding={i === 0 ? "sync" : "async"}
              fetchPriority={i === 0 ? "high" : "auto"}
              draggable={false}
              className="h-full w-full object-cover object-center select-none"
              style={{
                backgroundImage: `url(${car.blurDataURL})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
          </picture>
        </div>
      ))}

      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 95% 75% at 50% 45%, transparent 35%, rgba(10,10,10,0.45) 85%, rgba(10,10,10,0.92) 100%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-[55%]"
        style={{
          background:
            "linear-gradient(to top, rgba(10,10,10,0.88) 0%, rgba(10,10,10,0.6) 30%, rgba(10,10,10,0.2) 65%, transparent 100%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-32"
        style={{
          background:
            "linear-gradient(to bottom, rgba(10,10,10,0.75) 0%, rgba(10,10,10,0.3) 50%, transparent 100%)",
        }}
      />
    </div>
  );
}

function CutoutStage({ cars, registerRef }: Props) {
  return (
    <div
      className="pointer-events-none absolute inset-0 flex items-center justify-center"
      aria-hidden
    >
      {cars.map((car, i) => (
        <div
          key={car.slug}
          ref={(el) => {
            registerRef(el, i);
          }}
          className="absolute will-change-transform"
          style={{
            opacity: i === 0 ? 1 : 0,
            transform: i === 0 ? "translate3d(0,0,0)" : "translate3d(15vw,0,0)",
            filter: `drop-shadow(0 40px 50px ${GRADIENT_COLORS[car.gradient]}55)`,
          }}
        >
          {/* When cutout PNGs exist (e.g. /cars/<slug>-cutout.png), swap srcSet/src below. */}
          <picture>
            <source srcSet={car.srcAvif} type="image/avif" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={car.src}
              alt={car.alt}
              width={car.width}
              height={car.height}
              loading={i === 0 ? "eager" : "lazy"}
              decoding={i === 0 ? "sync" : "async"}
              fetchPriority={i === 0 ? "high" : "auto"}
              draggable={false}
              className="select-none"
              style={{
                maxWidth: "min(70vw, 1100px)",
                maxHeight: "60vh",
                width: "auto",
                height: "auto",
              }}
            />
          </picture>
        </div>
      ))}
    </div>
  );
}
