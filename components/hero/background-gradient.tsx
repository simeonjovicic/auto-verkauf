"use client";

import type { Ref } from "react";

export function BackgroundGradient({ ref }: { ref?: Ref<HTMLDivElement> }) {
  return (
    <div
      ref={ref}
      aria-hidden
      className="absolute inset-0"
      style={{
        background:
          "radial-gradient(ellipse 110% 80% at 50% 45%, var(--bg-color, #7ec8c8), transparent 72%), #0a0a0a",
        transition: "background 0s",
      }}
    />
  );
}
