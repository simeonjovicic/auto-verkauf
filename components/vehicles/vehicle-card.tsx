"use client";

import Link from "next/link";
import {
  useRef,
  type CSSProperties,
  type MouseEvent,
  type PointerEvent,
} from "react";
import type { Vehicle, Gradient } from "@/lib/vehicles";

const ACCENT: Record<Gradient, string> = {
  "hero-teal":  "#7ec8c8",
  "hero-cream": "#e8d49a",
  "hero-blush": "#c9151b",
  "hero-sage":  "#a8c4a2",
  "hero-sky":   "#9bb8d4",
  "hero-slate": "#8a8d94",
};

const ENGINE: Record<string, string> = {
  "ferrari-488-spider": "3.9 V8 Biturbo",
  "ferrari-488-pista": "3.9 V8 Biturbo",
  "ferrari-458-speciale-aperta": "4.5 V8 Sauger",
  "porsche-718-spyder-4-0": "4.0 Boxer",
  "bmw-z3-m-coupe-s54": "S54 Reihen-6",
};

type MotionValues = {
  rotateX: string;
  rotateY: string;
  shiftX: string;
  shiftY: string;
  imageX: string;
  imageY: string;
  hoverImageX: string;
  hoverImageY: string;
  glareX: string;
  glareY: string;
};

type CardStyle = CSSProperties & {
  "--vehicle-card-accent": string;
  "--card-rotate-x": string;
  "--card-rotate-y": string;
  "--card-shift-x": string;
  "--card-shift-y": string;
  "--card-lift": string;
  "--card-image-x": string;
  "--card-image-y": string;
  "--card-hover-image-x": string;
  "--card-hover-image-y": string;
  "--card-glare-x": string;
  "--card-glare-y": string;
};

const REST_MOTION: MotionValues = {
  rotateX: "0deg",
  rotateY: "0deg",
  shiftX: "0px",
  shiftY: "0px",
  imageX: "0px",
  imageY: "0px",
  hoverImageX: "0px",
  hoverImageY: "0px",
  glareX: "50%",
  glareY: "42%",
};

function writeMotion(node: HTMLElement, values: MotionValues) {
  node.style.setProperty("--card-rotate-x", values.rotateX);
  node.style.setProperty("--card-rotate-y", values.rotateY);
  node.style.setProperty("--card-shift-x", values.shiftX);
  node.style.setProperty("--card-shift-y", values.shiftY);
  node.style.setProperty("--card-image-x", values.imageX);
  node.style.setProperty("--card-image-y", values.imageY);
  node.style.setProperty("--card-hover-image-x", values.hoverImageX);
  node.style.setProperty("--card-hover-image-y", values.hoverImageY);
  node.style.setProperty("--card-glare-x", values.glareX);
  node.style.setProperty("--card-glare-y", values.glareY);
}

type Props = {
  vehicle: Vehicle;
  onOpen?: (vehicle: Vehicle) => void;
};

export function VehicleCard({ vehicle, onOpen }: Props) {
  const cardRef = useRef<HTMLAnchorElement>(null);
  const frameRef = useRef<number | null>(null);
  const motionRef = useRef<MotionValues>(REST_MOTION);
  const accent = ACCENT[vehicle.gradient];
  const engine = ENGINE[vehicle.slug];
  const powerLine = [vehicle.specs.horsepower, engine].filter(Boolean).join(" · ");
  const cardStyle: CardStyle = {
    "--vehicle-card-accent": accent,
    "--card-rotate-x": REST_MOTION.rotateX,
    "--card-rotate-y": REST_MOTION.rotateY,
    "--card-shift-x": REST_MOTION.shiftX,
    "--card-shift-y": REST_MOTION.shiftY,
    "--card-lift": "0px",
    "--card-image-x": REST_MOTION.imageX,
    "--card-image-y": REST_MOTION.imageY,
    "--card-hover-image-x": REST_MOTION.hoverImageX,
    "--card-hover-image-y": REST_MOTION.hoverImageY,
    "--card-glare-x": REST_MOTION.glareX,
    "--card-glare-y": REST_MOTION.glareY,
    transform:
      "perspective(900px) rotateX(var(--card-rotate-x)) rotateY(var(--card-rotate-y)) translate3d(var(--card-shift-x), calc(var(--card-shift-y) + var(--card-lift)), 0)",
    transformStyle: "preserve-3d",
  };

  function queueMotion(values: MotionValues) {
    motionRef.current = values;
    if (frameRef.current !== null) return;

    frameRef.current = requestAnimationFrame(() => {
      frameRef.current = null;
      const node = cardRef.current;
      if (node) writeMotion(node, motionRef.current);
    });
  }

  function resetMotion() {
    if (frameRef.current !== null) {
      cancelAnimationFrame(frameRef.current);
      frameRef.current = null;
    }

    motionRef.current = REST_MOTION;
    const node = cardRef.current;
    if (node) writeMotion(node, REST_MOTION);
  }

  function handlePointerMove(event: PointerEvent<HTMLAnchorElement>) {
    if (event.pointerType !== "mouse") return;

    const rect = event.currentTarget.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width - 0.5) * 2;
    const y = ((event.clientY - rect.top) / rect.height - 0.5) * 2;

    queueMotion({
      rotateX: `${(-y * 5).toFixed(2)}deg`,
      rotateY: `${(x * 7).toFixed(2)}deg`,
      shiftX: `${(x * 3).toFixed(2)}px`,
      shiftY: `${(y * 2).toFixed(2)}px`,
      imageX: `${(-x * 10).toFixed(2)}px`,
      imageY: `${(-y * 8).toFixed(2)}px`,
      hoverImageX: `${(-x * 14).toFixed(2)}px`,
      hoverImageY: `${(-y * 11).toFixed(2)}px`,
      glareX: `${((x + 1) * 50).toFixed(1)}%`,
      glareY: `${((y + 1) * 50).toFixed(1)}%`,
    });
  }

  function handleClick(event: MouseEvent<HTMLAnchorElement>) {
    if (!onOpen) return;
    if (
      event.defaultPrevented ||
      event.button !== 0 ||
      event.metaKey ||
      event.altKey ||
      event.ctrlKey ||
      event.shiftKey
    ) {
      return;
    }

    event.preventDefault();
    onOpen(vehicle);
  }

  return (
    <Link
      ref={cardRef}
      href={`/fahrzeuge/${vehicle.slug}`}
      className="group relative flex h-full flex-col overflow-hidden rounded-[8px] border border-chrome bg-panel text-graphite shadow-[0_16px_46px_rgba(17,24,32,0.08)] transition-[border-color,box-shadow,transform] duration-300 ease-out motion-safe:will-change-transform hover:[--card-lift:-4px] hover:border-graphite/30 hover:shadow-[0_28px_80px_rgba(17,24,32,0.16)]"
      aria-label={`${vehicle.name} ${vehicle.subtitle} — Details ansehen`}
      onPointerMove={handlePointerMove}
      onPointerLeave={resetMotion}
      onBlur={resetMotion}
      onClick={handleClick}
      style={cardStyle}
    >
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 z-20 h-1"
        style={{
          background:
            "linear-gradient(to right, var(--vehicle-card-accent) 0%, color-mix(in srgb, var(--vehicle-card-accent) 40%, transparent) 60%, transparent 100%)",
        }}
      />

      <div className="relative aspect-[4/3] overflow-hidden bg-showroom-soft [transform-style:preserve-3d]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={vehicle.src}
          alt={vehicle.alt}
          width={vehicle.width}
          height={vehicle.height}
          loading="lazy"
          decoding="async"
          draggable={false}
          className="absolute inset-0 h-full w-full object-cover transition-[transform] duration-300 ease-out select-none"
          style={{
            backgroundImage: `url(${vehicle.blurDataURL})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            transform:
              "translate3d(var(--card-image-x), var(--card-image-y), 34px) scale(1.045)",
          }}
        />

        {vehicle.srcHover && (
          /* eslint-disable-next-line @next/next/no-img-element */
          <img
            src={vehicle.srcHover}
            alt=""
            aria-hidden
            width={vehicle.width}
            height={vehicle.height}
            loading="lazy"
            decoding="async"
            draggable={false}
            className="absolute inset-0 h-full w-full object-cover opacity-0 transition-[opacity,transform] duration-300 ease-out group-hover:opacity-100 select-none"
            style={{
              transform:
                "translate3d(var(--card-hover-image-x), var(--card-hover-image-y), 46px) scale(1.06)",
            }}
          />
        )}

        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{
            background:
              "radial-gradient(circle at var(--card-glare-x) var(--card-glare-y), rgba(255,255,255,0.26), rgba(255,255,255,0.08) 18%, transparent 42%)",
            transform: "translateZ(58px)",
          }}
        />
      </div>

      <div className="relative min-h-[118px] px-5 pb-6 pt-5 sm:px-6 sm:pt-6">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-700 group-hover:opacity-100"
          style={{
            background:
              "linear-gradient(155deg, color-mix(in srgb, var(--vehicle-card-accent) 13%, transparent) 0%, transparent 58%)",
          }}
        />

        <div className="relative">
          <div className="min-w-0">
            <h3 className="serif text-[30px] leading-[1.02] text-graphite sm:text-[34px]">
              {vehicle.name}
            </h3>
            <p className="serif mt-1.5 text-2xl italic leading-tight text-steel">
              {vehicle.subtitle}
            </p>
            {powerLine ? (
              <p className="mt-4 text-[11px] font-semibold uppercase tracking-[0.16em] text-graphite/60">
                {powerLine}
              </p>
            ) : null}
          </div>
          <div
            aria-hidden
            className="mt-5 h-1 w-14 rounded-full transition-all duration-500 group-hover:w-24"
            style={{ background: "var(--vehicle-card-accent)" }}
          />
        </div>
      </div>
    </Link>
  );
}
