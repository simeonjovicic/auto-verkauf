"use client";

import type { Ref } from "react";

export function BackgroundGradient({ ref }: { ref?: Ref<HTMLDivElement> }) {
  return (
    <div aria-hidden className="absolute inset-0">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/Hero.jpeg"
        alt=""
        className="absolute inset-0 h-full w-full object-cover object-center"
        loading="eager"
        fetchPriority="high"
        draggable={false}
      />
      <div
        ref={ref}
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 110% 80% at 50% 45%, var(--bg-color, #7ec8c8), transparent 72%)",
          transition: "background 0s",
          opacity: 0.55,
        }}
      />
    </div>
  );
}
