"use client";

import { useEffect, useRef, useState, type PointerEvent } from "react";
import type { Vehicle } from "@/lib/vehicles";

type Props = {
  vehicle: Vehicle;
  mode?: "page" | "drawer";
};

const DETAIL_SIDE_SHOT = "/cars/detail-side-shot.png";
const DETAIL_SIDE_SHOT_WIDTH = 1345;
const DETAIL_SIDE_SHOT_HEIGHT = 375;
const DETAIL_SIDE_SHOT_ALT = "/cars/detail-side-shot-alt.png";
const DETAIL_SIDE_SHOT_ALT_HEIGHT = 369;
const WHITE_RARI_ANGLE_ONE = "/cars/white-rari1.png";
const WHITE_RARI_ANGLE_TWO = "/cars/white-rari2.png";
const WHITE_RARI_ANGLE_WIDTH = 1448;
const WHITE_RARI_ANGLE_HEIGHT = 1086;

const PRODUCT_IMAGES = [
  {
    src: DETAIL_SIDE_SHOT,
    width: DETAIL_SIDE_SHOT_WIDTH,
    height: DETAIL_SIDE_SHOT_HEIGHT,
  },
  {
    src: DETAIL_SIDE_SHOT_ALT,
    width: DETAIL_SIDE_SHOT_WIDTH,
    height: DETAIL_SIDE_SHOT_ALT_HEIGHT,
  },
  {
    src: WHITE_RARI_ANGLE_ONE,
    width: WHITE_RARI_ANGLE_WIDTH,
    height: WHITE_RARI_ANGLE_HEIGHT,
  },
  {
    src: WHITE_RARI_ANGLE_TWO,
    width: WHITE_RARI_ANGLE_WIDTH,
    height: WHITE_RARI_ANGLE_HEIGHT,
  },
];

type PaintOption = {
  name: string;
  word: string;
  swatch: string;
  glow: string;
  filter: string;
};

const PALETTES: Record<Vehicle["gradient"], PaintOption[]> = {
  "hero-blush": [
    { name: "Carmine Red", word: "CARMINE RED", swatch: "#b50d18", glow: "rgba(181,13,24,0.18)", filter: "sepia(0.45) saturate(3.8) hue-rotate(315deg) brightness(0.82)" },
    { name: "Racing Yellow", word: "RACING YELLOW", swatch: "#efc62f", glow: "rgba(239,198,47,0.16)", filter: "sepia(0.9) saturate(2.9) hue-rotate(350deg) brightness(1.08)" },
    { name: "Agate Grey", word: "AGATE GREY", swatch: "#7f858b", glow: "rgba(127,133,139,0.12)", filter: "grayscale(0.8) brightness(0.72)" },
  ],
  "hero-cream": [
    { name: "Racing Yellow", word: "RACING YELLOW", swatch: "#efc62f", glow: "rgba(239,198,47,0.18)", filter: "sepia(0.9) saturate(2.9) hue-rotate(350deg) brightness(1.08)" },
    { name: "Carmine Red", word: "CARMINE RED", swatch: "#b50d18", glow: "rgba(181,13,24,0.16)", filter: "sepia(0.45) saturate(3.8) hue-rotate(315deg) brightness(0.82)" },
    { name: "Agate Grey", word: "AGATE GREY", swatch: "#7f858b", glow: "rgba(127,133,139,0.12)", filter: "grayscale(0.8) brightness(0.72)" },
  ],
  "hero-sky": [
    { name: "Sapphire Blue", word: "SAPPHIRE BLUE", swatch: "#2f6fbe", glow: "rgba(47,111,190,0.18)", filter: "sepia(0.25) saturate(2.4) hue-rotate(170deg) brightness(0.78)" },
    { name: "Carmine Red", word: "CARMINE RED", swatch: "#b50d18", glow: "rgba(181,13,24,0.16)", filter: "sepia(0.45) saturate(3.8) hue-rotate(315deg) brightness(0.82)" },
    { name: "Agate Grey", word: "AGATE GREY", swatch: "#7f858b", glow: "rgba(127,133,139,0.12)", filter: "grayscale(0.8) brightness(0.72)" },
  ],
  "hero-slate": [
    { name: "Agate Grey", word: "AGATE GREY", swatch: "#7f858b", glow: "rgba(127,133,139,0.16)", filter: "grayscale(0.8) brightness(0.72)" },
    { name: "Carmine Red", word: "CARMINE RED", swatch: "#b50d18", glow: "rgba(181,13,24,0.14)", filter: "sepia(0.45) saturate(3.8) hue-rotate(315deg) brightness(0.82)" },
    { name: "Racing Yellow", word: "RACING YELLOW", swatch: "#efc62f", glow: "rgba(239,198,47,0.14)", filter: "sepia(0.9) saturate(2.9) hue-rotate(350deg) brightness(1.08)" },
  ],
  "hero-teal": [
    { name: "Aqua Teal", word: "AQUA TEAL", swatch: "#7ec8c8", glow: "rgba(126,200,200,0.16)", filter: "sepia(0.2) saturate(1.5) hue-rotate(120deg) brightness(0.92)" },
    { name: "Carmine Red", word: "CARMINE RED", swatch: "#b50d18", glow: "rgba(181,13,24,0.14)", filter: "sepia(0.45) saturate(3.8) hue-rotate(315deg) brightness(0.82)" },
    { name: "Agate Grey", word: "AGATE GREY", swatch: "#7f858b", glow: "rgba(127,133,139,0.12)", filter: "grayscale(0.8) brightness(0.72)" },
  ],
  "hero-sage": [
    { name: "Sage Green", word: "SAGE GREEN", swatch: "#a8c4a2", glow: "rgba(168,196,162,0.16)", filter: "sepia(0.35) saturate(1.1) hue-rotate(55deg) brightness(0.86)" },
    { name: "Carmine Red", word: "CARMINE RED", swatch: "#b50d18", glow: "rgba(181,13,24,0.14)", filter: "sepia(0.45) saturate(3.8) hue-rotate(315deg) brightness(0.82)" },
    { name: "Agate Grey", word: "AGATE GREY", swatch: "#7f858b", glow: "rgba(127,133,139,0.12)", filter: "grayscale(0.8) brightness(0.72)" },
  ],
};

function getPaintOptions(vehicle: Vehicle) {
  return PALETTES[vehicle.gradient].slice(0, 3);
}

function getHeroStats(vehicle: Vehicle) {
  return [
    { label: "Baujahr", value: vehicle.specs.year ?? "Auf Anfrage", animated: false },
    {
      label: "Leistung (PS)",
      value: vehicle.specs.horsepower ?? "Auf Anfrage",
      target: vehicle.horsepowerPs,
      suffix: "PS",
      animated: true,
    },
    {
      label: "Kilometer",
      value: vehicle.specs.mileage ?? "Auf Anfrage",
      target: vehicle.mileageKm,
      suffix: "km",
      animated: true,
    },
  ];
}

function formatStatNumber(value: number) {
  return new Intl.NumberFormat("de-AT", {
    maximumFractionDigits: 0,
  }).format(value);
}

function AnimatedStatValue({
  target,
  suffix,
  fallback,
  delay = 0,
}: {
  target?: number | null;
  suffix: string;
  fallback: string;
  delay?: number;
}) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!target) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setValue(target);
      return;
    }

    let frame = 0;
    let timeout = 0;
    const duration = 1750;
    const easeOut = (t: number) => 1 - Math.pow(1 - t, 3);

    setValue(0);
    timeout = window.setTimeout(() => {
      const start = performance.now();

      const tick = (now: number) => {
        const progress = Math.min((now - start) / duration, 1);
        setValue(Math.round(target * easeOut(progress)));

        if (progress < 1) {
          frame = window.requestAnimationFrame(tick);
        }
      };

      frame = window.requestAnimationFrame(tick);
    }, delay);

    return () => {
      window.clearTimeout(timeout);
      window.cancelAnimationFrame(frame);
    };
  }, [target, delay]);

  if (!target) return fallback;

  return (
    <>
      {formatStatNumber(value)} {suffix}
    </>
  );
}

export function VehicleHero({ vehicle, mode = "page" }: Props) {
  const isDrawer = mode === "drawer";
  const paintOptions = getPaintOptions(vehicle);
  const [paintIndex, setPaintIndex] = useState(0);
  const [slideIndex, setSlideIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const sliderRef = useRef<HTMLDivElement | null>(null);
  const dragRef = useRef({
    pointerId: -1,
    startX: 0,
    scrollLeft: 0,
  });
  const activePaint = paintOptions[paintIndex] ?? paintOptions[0];
  const stats = getHeroStats(vehicle);
  const productImages = PRODUCT_IMAGES;

  useEffect(() => {
    setPaintIndex(0);
    setSlideIndex(0);
  }, [vehicle.slug]);

  function scrollToSlide(index: number) {
    const slider = sliderRef.current;
    if (!slider) return;
    slider.scrollTo({
      left: slider.clientWidth * index,
      behavior: "smooth",
    });
    setSlideIndex(index);
  }

  function handleSliderScroll() {
    const slider = sliderRef.current;
    if (!slider) return;
    const nextIndex = Math.round(slider.scrollLeft / slider.clientWidth);
    setSlideIndex(Math.min(productImages.length - 1, Math.max(0, nextIndex)));
  }

  function snapToNearestSlide() {
    const slider = sliderRef.current;
    if (!slider) return;
    const nextIndex = Math.min(
      productImages.length - 1,
      Math.max(0, Math.round(slider.scrollLeft / slider.clientWidth)),
    );
    slider.scrollTo({
      left: slider.clientWidth * nextIndex,
      behavior: "smooth",
    });
    setSlideIndex(nextIndex);
  }

  function handlePointerDown(event: PointerEvent<HTMLDivElement>) {
    if (event.pointerType === "mouse" && event.button !== 0) return;
    const slider = sliderRef.current;
    if (!slider) return;

    dragRef.current = {
      pointerId: event.pointerId,
      startX: event.clientX,
      scrollLeft: slider.scrollLeft,
    };
    setIsDragging(true);
    slider.setPointerCapture(event.pointerId);
  }

  function handlePointerMove(event: PointerEvent<HTMLDivElement>) {
    const slider = sliderRef.current;
    if (!slider || dragRef.current.pointerId !== event.pointerId) return;

    event.preventDefault();
    slider.scrollLeft = dragRef.current.scrollLeft - (event.clientX - dragRef.current.startX);
  }

  function handlePointerEnd(event: PointerEvent<HTMLDivElement>) {
    const slider = sliderRef.current;
    if (!slider || dragRef.current.pointerId !== event.pointerId) return;

    if (slider.hasPointerCapture(event.pointerId)) {
      slider.releasePointerCapture(event.pointerId);
    }
    dragRef.current.pointerId = -1;
    setIsDragging(false);
    snapToNearestSlide();
  }

  return (
    <section
      className={
        "relative isolate flex overflow-hidden border-b border-line bg-black text-bone " +
        (isDrawer ? "min-h-[720px] flex-col" : "min-h-screen flex-col")
      }
    >
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 78% 66% at 44% 42%, rgba(255,255,255,0.075), transparent 62%)",
        }}
      />
      <div aria-hidden className="absolute inset-x-0 bottom-0 h-56 bg-[linear-gradient(to_top,rgba(0,0,0,0.95),transparent)]" />

      <div className="absolute right-5 top-44 z-20 hidden w-[300px] flex-col items-end gap-8 lg:flex xl:right-9 xl:w-[340px]">
        <p className="text-right text-xl font-medium tracking-[0.08em] text-bone/84">
          Farbvarianten
        </p>
        <div className="flex w-full flex-col gap-9">
          {paintOptions.map((paint, index) => {
            const active = index === paintIndex;
            return (
              <button
                key={`${paint.word}-${index}`}
                type="button"
                aria-label={`${paint.name} auswählen`}
                aria-pressed={active}
                onClick={() => setPaintIndex(index)}
                className={
                  "group relative h-28 w-full text-right transition-all duration-300 " +
                  (active ? "opacity-100" : "opacity-[0.52] hover:opacity-[0.82]")
                }
              >
                <span
                  aria-hidden
                  className="absolute right-16 top-3 z-0 max-w-full whitespace-nowrap text-[0.9rem] font-black uppercase leading-none tracking-[0.06em] opacity-62 transition-opacity group-hover:opacity-82 xl:right-20 xl:text-[1.05rem]"
                  style={{ color: paint.swatch }}
                >
                  {paint.word}
                </span>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={DETAIL_SIDE_SHOT}
                  alt=""
                  width={DETAIL_SIDE_SHOT_WIDTH}
                  height={DETAIL_SIDE_SHOT_HEIGHT}
                  draggable={false}
                  className="absolute right-0 top-8 z-10 h-auto w-[210px] select-none object-contain drop-shadow-[0_16px_22px_rgba(0,0,0,0.65)] transition-transform duration-300 group-hover:-translate-x-1 xl:w-[235px]"
                  style={{ filter: paint.filter }}
                />
                <span
                  className={
                    "absolute right-0 bottom-0 h-3 w-3 rounded-full border transition-transform " +
                    (active
                      ? "scale-110 border-bone"
                      : "border-bone/35 group-hover:scale-105")
                  }
                  style={{ backgroundColor: paint.swatch }}
                />
              </button>
            );
          })}
        </div>
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-[1520px] flex-1 flex-col px-6 pt-28 sm:px-12 sm:pt-32 lg:px-20">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="eyebrow text-bone/55">{vehicle.brand}</p>
            <h1 className="serif mt-4 max-w-[12ch] text-4xl leading-[1.02] text-bone sm:text-5xl lg:text-6xl">
              {vehicle.name}{" "}
              <span className="italic text-bone/62">{vehicle.subtitle}</span>
            </h1>
          </div>
          <div className="text-left sm:mr-44 sm:pt-[3.25rem] sm:text-right lg:mr-56 xl:mr-64">
            <p className="text-[11px] uppercase tracking-[0.2em] text-bone/45">
              Preis
            </p>
            <p className="mt-2 text-xl text-bone sm:text-2xl">
              {vehicle.price || "Auf Anfrage"}
            </p>
          </div>
        </div>

        <div className="relative mt-8 flex flex-1 items-end justify-center pb-4 sm:mt-4 sm:pb-8 lg:-mt-10">
          <div
            aria-hidden
            className="absolute left-[29%] top-[23%] z-0 w-full -translate-x-1/2 overflow-hidden text-center sm:top-[25%] lg:top-[27%]"
          >
            <span className="inline-block max-w-full truncate text-[2.97rem] font-black uppercase leading-none tracking-[0.04em] text-white/13 sm:text-[4.22rem] lg:text-[95px] xl:text-[117px]">
              {activePaint.word}
            </span>
          </div>

          <div className="relative z-10 w-[min(81vw,936px)] max-w-none -translate-x-[15vw] sm:w-[min(71vw,982px)] sm:-translate-x-[16vw] lg:w-[min(57vw,1011px)] lg:-translate-x-[17vw] xl:-translate-x-[18vw]">
            <div
              aria-hidden
              className="absolute inset-x-[3%] bottom-[-4%] h-12 rounded-full bg-white/22 blur-2xl sm:h-14"
            />
            <div
              ref={sliderRef}
              onScroll={handleSliderScroll}
              onPointerDown={handlePointerDown}
              onPointerMove={handlePointerMove}
              onPointerUp={handlePointerEnd}
              onPointerCancel={handlePointerEnd}
              className={
                "relative z-10 flex overflow-x-auto scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden " +
                (isDragging
                  ? "snap-none cursor-grabbing"
                  : "snap-x snap-mandatory cursor-grab")
              }
            >
              {productImages.map((image, index) => (
                <div
                  key={image.src}
                  className="flex min-h-[32svh] min-w-full snap-center items-end justify-center sm:min-h-[42svh] lg:min-h-[50svh]"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={image.src}
                    alt={`${vehicle.name} ${vehicle.subtitle} Ansicht ${index + 1}`}
                    width={image.width}
                    height={image.height}
                    decoding="async"
                    loading={index === 0 ? "eager" : "lazy"}
                    draggable={false}
                    className="mx-auto h-auto max-h-[50svh] w-auto max-w-full select-none object-contain drop-shadow-[0_42px_58px_rgba(0,0,0,0.65)]"
                  />
                </div>
              ))}
            </div>
            <div className="absolute -bottom-8 left-1/2 z-20 flex -translate-x-1/2 gap-2">
              {productImages.map((image, index) => (
                <button
                  key={image.src}
                  type="button"
                  aria-label={`Produktbild ${index + 1} anzeigen`}
                  aria-pressed={slideIndex === index}
                  onClick={() => scrollToSlide(index)}
                  className={
                    "h-1.5 rounded-full transition-all " +
                    (slideIndex === index
                      ? "w-7 bg-bone"
                      : "w-1.5 bg-bone/35 hover:bg-bone/70")
                  }
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <dl className="relative z-10 mx-auto grid w-full max-w-[1180px] grid-cols-1 gap-7 px-6 pb-10 pt-4 sm:grid-cols-3 sm:px-12 sm:pb-14 lg:px-20">
        {stats.map((stat) => (
          <div key={stat.label}>
            <dt className="text-[11px] font-semibold uppercase tracking-[0.18em] text-bone/66">
              {stat.label}
            </dt>
            <dd className="mt-3 text-3xl font-black uppercase leading-none text-bone sm:text-4xl">
              {stat.animated ? (
                <AnimatedStatValue
                  target={stat.target}
                  suffix={stat.suffix ?? ""}
                  fallback={stat.value}
                  delay={stat.label === "Kilometer" ? 140 : 0}
                />
              ) : (
                stat.value
              )}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
