"use client";

import {
  CSSProperties,
  ElementType,
  ReactNode,
  useEffect,
  useRef,
  useState,
} from "react";

type Direction = "up" | "down" | "left" | "right" | "fade";

type RevealProps = {
  children: ReactNode;
  as?: ElementType;
  delay?: number;
  duration?: number;
  direction?: Direction;
  distance?: number;
  threshold?: number;
  rootMargin?: string;
  className?: string;
  style?: CSSProperties;
};

const initialTransform = (dir: Direction, dist: number) => {
  switch (dir) {
    case "up":
      return `translate3d(0, ${dist}px, 0)`;
    case "down":
      return `translate3d(0, -${dist}px, 0)`;
    case "left":
      return `translate3d(${dist}px, 0, 0)`;
    case "right":
      return `translate3d(-${dist}px, 0, 0)`;
    default:
      return "none";
  }
};

export function Reveal({
  children,
  as: Tag = "div",
  delay = 0,
  duration = 900,
  direction = "up",
  distance = 24,
  threshold = 0.15,
  rootMargin = "0px 0px -10% 0px",
  className,
  style,
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.disconnect();
            break;
          }
        }
      },
      { threshold, rootMargin },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  const baseStyle: CSSProperties = {
    transitionProperty: "opacity, transform",
    transitionDuration: `${duration}ms`,
    transitionTimingFunction: "cubic-bezier(0.22, 0.61, 0.36, 1)",
    transitionDelay: `${delay}ms`,
    willChange: visible ? "auto" : "opacity, transform",
    opacity: visible ? 1 : 0,
    transform: visible ? "none" : initialTransform(direction, distance),
    ...style,
  };

  return (
    <Tag
      ref={ref as never}
      className={className}
      style={baseStyle}
    >
      {children}
    </Tag>
  );
}
