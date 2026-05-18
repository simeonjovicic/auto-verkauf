"use client";

import { useRef } from "react";
import { BackgroundGradient } from "./background-gradient";
import { OverlayText } from "./overlay-text";

export function HeroScroller() {
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section
      ref={sectionRef}
      aria-label="Fischerauto Startseite"
      className="relative h-screen w-full overflow-hidden"
    >
      <BackgroundGradient />
      <OverlayText />
      <a
        href="#philosophie"
        className="sr-only focus:not-sr-only focus:absolute focus:bottom-6 focus:left-1/2 focus:z-30 focus:-translate-x-1/2 focus:rounded-full focus:bg-ink focus:px-4 focus:py-2 focus:text-xs focus:uppercase focus:tracking-[0.2em] focus:text-bone"
      >
        Startbereich überspringen
      </a>
    </section>
  );
}
