"use client";

import { useEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";

type Props = {
  src: string;
  srcAvif: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  /** Vertical pixel range. Image moves from -amount to +amount across its scroll window. */
  amount?: number;
};

export function ParallaxImage({
  src,
  srcAvif,
  alt,
  width,
  height,
  className,
  amount = 80,
}: Props) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (!wrapRef.current || !imgRef.current) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        imgRef.current,
        { y: -amount },
        {
          y: amount,
          ease: "none",
          scrollTrigger: {
            trigger: wrapRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
            invalidateOnRefresh: true,
          },
        },
      );
    }, wrapRef);

    return () => {
      ctx.revert();
      ScrollTrigger.refresh();
    };
  }, [amount]);

  return (
    <div ref={wrapRef} className={`overflow-hidden ${className ?? ""}`}>
      <picture>
        <source srcSet={srcAvif} type="image/avif" />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          ref={imgRef}
          src={src}
          alt={alt}
          width={width}
          height={height}
          loading="lazy"
          decoding="async"
          draggable={false}
          className="h-full w-full scale-110 object-cover select-none will-change-transform"
        />
      </picture>
    </div>
  );
}
