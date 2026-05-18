"use client";

import { useEffect, useRef, useState, type PointerEvent } from "react";
import type { Vehicle } from "@/lib/vehicles";

type Props = {
  vehicle: Vehicle;
  mode?: "page" | "drawer";
};

function getHeroStats(vehicle: Vehicle) {
  return [
    {
      label: "Erstzulassung",
      value: vehicle.specs.year ?? "Auf Anfrage",
      animated: false,
    },
    {
      label: "Leistung",
      value: vehicle.specs.horsepower ?? "Auf Anfrage",
      animated: false,
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
  const [slideIndex, setSlideIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const sliderRef = useRef<HTMLDivElement | null>(null);
  const dragRef = useRef({
    pointerId: -1,
    startX: 0,
    scrollLeft: 0,
  });
  const stats = getHeroStats(vehicle);
  const productImages = (vehicle.gallery.length > 0 ? vehicle.gallery : [vehicle.src]).map(
    (src) => ({
      src,
      width: vehicle.width,
      height: vehicle.height,
    }),
  );

  useEffect(() => {
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
        "relative isolate overflow-hidden border-b border-fischer-line bg-surface text-anthracite"
      }
    >
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, rgba(255,255,255,0.76), rgba(245,244,241,0.72))",
        }}
      />

      <div
        className={
          "relative z-10 mx-auto w-full max-w-[1440px] px-6 sm:px-12 lg:px-20 " +
          (isDrawer ? "py-14 sm:py-16" : "pb-16 pt-24 sm:pt-28 lg:pb-20")
        }
      >
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,0.84fr)_minmax(0,1.16fr)] lg:items-end lg:gap-14">
          <div className="max-w-2xl">
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-hyundai">
              {vehicle.brand}
            </p>
            <h1 className="mt-4 text-4xl font-semibold leading-[1.02] tracking-tight text-anthracite sm:text-5xl xl:text-6xl">
              {vehicle.name}
              <span className="block text-copper">{vehicle.subtitle}</span>
            </h1>
            {vehicle.highlight ? (
              <p className="mt-6 max-w-xl text-base leading-relaxed text-fischer-mute sm:text-lg">
                {vehicle.highlight}
              </p>
            ) : null}

            <div className="mt-8 inline-flex flex-col border border-fischer-line bg-paper/70 px-5 py-4 shadow-[0_18px_55px_rgba(0,44,95,0.08)] lg:hidden">
              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-anthracite/45">
                Preis
              </span>
              <span className="mt-2 text-2xl font-semibold text-anthracite">
                {vehicle.price || "Auf Anfrage"}
              </span>
            </div>

            <dl className="mt-9 grid grid-cols-1 gap-3 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="border border-fischer-line bg-paper/70 p-4 shadow-[0_14px_45px_rgba(0,44,95,0.06)]"
                >
                  <dt className="text-[10px] font-semibold uppercase tracking-[0.18em] text-anthracite/50">
                    {stat.label}
                  </dt>
                  <dd className="mt-2 break-words text-xl font-semibold leading-tight text-anthracite sm:text-2xl lg:text-[22px]">
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
          </div>

          <div className="min-w-0">
            <div className="mb-5 hidden text-right lg:block">
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-anthracite/45">
                Preis
              </p>
              <p className="mt-2 text-2xl font-semibold text-anthracite">
                {vehicle.price || "Auf Anfrage"}
              </p>
            </div>

            <div className="relative overflow-hidden rounded-[28px] border border-fischer-line bg-paper shadow-[0_34px_100px_rgba(0,44,95,0.14)]">
              <div
                aria-hidden
                className="absolute inset-x-[10%] bottom-4 h-12 rounded-full bg-hyundai/12 blur-2xl sm:h-14"
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
                    className="flex aspect-[16/11] min-w-full snap-center items-center justify-center p-5 sm:p-8 lg:aspect-[16/10]"
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
                      className="mx-auto h-auto max-h-[430px] w-auto max-w-full select-none object-contain drop-shadow-[0_26px_40px_rgba(0,44,95,0.16)] lg:max-h-[500px]"
                    />
                  </div>
                ))}
              </div>
              <div className="absolute bottom-5 left-1/2 z-20 flex -translate-x-1/2 gap-2">
                {productImages.map((image, index) => (
                  <button
                    key={image.src}
                    type="button"
                    aria-label={`Produktbild ${index + 1} anzeigen`}
                    aria-pressed={slideIndex === index}
                    onClick={() => scrollToSlide(index)}
                    className={
                      "h-1.5 transition-all " +
                      (slideIndex === index
                        ? "w-7 bg-hyundai"
                        : "w-1.5 bg-anthracite/25 hover:bg-hyundai/70")
                    }
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
