"use client";

import { useEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { vehicles } from "@/lib/vehicles";
import { GRADIENT_COLORS } from "./constants";
import { BackgroundGradient } from "./background-gradient";
import { CarStage } from "./car-stage";
import { OverlayText } from "./overlay-text";
import { SideRail } from "./side-rail";

const CARS = vehicles;

export function HeroScroller() {
  const sectionRef = useRef<HTMLElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const carRefs = useRef<Array<HTMLDivElement | null>>([]);
  const textRefs = useRef<Array<HTMLDivElement | null>>([]);

  useEffect(() => {
    if (typeof window === "undefined") return;

    if (bgRef.current) {
      bgRef.current.style.setProperty(
        "--bg-color",
        GRADIENT_COLORS[CARS[0].gradient],
      );
    }

    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (reduced) return;

    const ctx = gsap.context(() => {
      const N = CARS.length;
      const mm = gsap.matchMedia();

      const build = (perCar: number) => {
        const trigger = ScrollTrigger.create({
          trigger: sectionRef.current!,
          start: "top top",
          end: () => `+=${window.innerHeight * (N - 1) * perCar}`,
          pin: true,
          scrub: 1,
          invalidateOnRefresh: true,
          onUpdate(self) {
            const total = N - 1;
            const p = Math.max(0, Math.min(self.progress, 1)) * total;
            const i = Math.min(Math.floor(p), total - 1);
            const t = p - i;

            for (let idx = 0; idx < CARS.length; idx++) {
              const el = carRefs.current[idx];
              if (!el) continue;
              if (idx === i) {
                el.style.transform = `translate3d(${-15 * t}vw, 0, 0)`;
                el.style.opacity = `${1 - t}`;
              } else if (idx === i + 1) {
                el.style.transform = `translate3d(${15 * (1 - t)}vw, 0, 0)`;
                el.style.opacity = `${t}`;
              } else {
                el.style.opacity = "0";
              }
            }

            for (let idx = 0; idx < CARS.length; idx++) {
              const el = textRefs.current[idx];
              if (!el) continue;
              if (idx === i) {
                el.style.opacity = `${1 - t}`;
                el.style.transform = `translateY(${-20 * t}px)`;
              } else if (idx === i + 1) {
                el.style.opacity = `${t}`;
                el.style.transform = `translateY(${20 * (1 - t)}px)`;
              } else {
                el.style.opacity = "0";
              }
            }

            if (bgRef.current) {
              const c1 = GRADIENT_COLORS[CARS[i].gradient];
              const c2 = GRADIENT_COLORS[CARS[Math.min(i + 1, N - 1)].gradient];
              const mixed = gsap.utils.interpolate(c1, c2, t) as string;
              bgRef.current.style.setProperty("--bg-color", mixed);
            }
          },
        });
        return () => trigger.kill();
      };

      mm.add("(min-width: 768px)", () => build(1));
      mm.add("(max-width: 767.99px)", () => build(0.6));
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      aria-label="Aktuelle Fahrzeuge"
      className="relative h-screen w-full overflow-hidden"
    >
      <BackgroundGradient ref={bgRef} />
      <CarStage
        cars={CARS}
        registerRef={(el, i) => {
          carRefs.current[i] = el;
        }}
      />
      <SideRail />
      <OverlayText
        cars={CARS}
        registerRef={(el, i) => {
          textRefs.current[i] = el;
        }}
      />
      <a
        href="#philosophie"
        className="sr-only focus:not-sr-only focus:absolute focus:bottom-6 focus:left-1/2 focus:z-30 focus:-translate-x-1/2 focus:rounded-full focus:bg-ink focus:px-4 focus:py-2 focus:text-xs focus:uppercase focus:tracking-[0.2em] focus:text-bone"
      >
        Animation überspringen
      </a>
    </section>
  );
}
