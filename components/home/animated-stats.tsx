"use client";

import { useEffect, useRef, useState } from "react";
import {
  BadgeCheck,
  CarFront,
  Gauge,
  MapPin,
  type LucideIcon,
} from "lucide-react";

const COUNT_DURATION = 1300;

type CountStat = {
  type: "count";
  label: string;
  end: number;
  icon: LucideIcon;
  prefix?: string;
  suffix?: string;
  detail: string;
};

type TextStat = {
  type: "text";
  label: string;
  value: string;
  icon: LucideIcon;
  detail: string;
};

type BrandStat = {
  type: "brands";
  label: string;
  brands: string[];
  icon: LucideIcon;
  detail: string;
};

type Stat = CountStat | TextStat | BrandStat;

const STATS: Stat[] = [
  {
    type: "count",
    label: "Erfahrung",
    end: 40,
    suffix: "+",
    icon: BadgeCheck,
    detail: "Jahre Sportwagen in Wien",
  },
  {
    type: "count",
    label: "Bestand",
    end: 30,
    prefix: "ca. ",
    icon: CarFront,
    detail: "Fahrzeuge pro Jahr",
  },
  {
    type: "text",
    label: "Standort",
    value: "Wien",
    icon: MapPin,
    detail: "Besichtigung nach Termin",
  },
  {
    type: "brands",
    label: "Fokus",
    brands: ["Ferrari", "Porsche", "BMW M"],
    icon: Gauge,
    detail: "Sportwagen mit Historie",
  },
];

export function AnimatedStats() {
  const rootRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const node = rootRef.current;
    if (!node) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setActive(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true);
          observer.disconnect();
        }
      },
      { threshold: 0.35 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={rootRef}
      className="mt-12 grid grid-cols-1 border-y border-line sm:grid-cols-2"
    >
      {STATS.map((stat, index) => (
        <StatItem key={stat.label} stat={stat} index={index} active={active} />
      ))}
    </div>
  );
}

function StatItem({
  stat,
  index,
  active,
}: {
  stat: Stat;
  index: number;
  active: boolean;
}) {
  const Icon = stat.icon;
  const mobileDivider = index < STATS.length - 1 ? "border-b " : "";
  const columnDivider = index % 2 === 0 ? "sm:border-r " : "";
  const rowDivider = index < 2 ? "sm:border-b " : "sm:border-b-0 ";

  return (
    <div
      className={
        "group relative flex min-h-[150px] gap-5 border-line py-6 transition duration-700 sm:px-5 " +
        mobileDivider +
        columnDivider +
        rowDivider +
        (active ? " translate-y-0 opacity-100" : " translate-y-4 opacity-0")
      }
      style={{ transitionDelay: `${index * 90}ms` }}
    >
      <div className="pt-1">
        <Icon
          aria-hidden
          strokeWidth={1.35}
          className="h-10 w-10 text-gold transition-transform duration-500 group-hover:-translate-y-1"
        />
      </div>

      <div className="min-w-0">
        <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-mute">
          {stat.label}
        </p>
        <div className="mt-4">
          {stat.type === "count" ? (
            <CountValue stat={stat} active={active} />
          ) : stat.type === "brands" ? (
            <p className="serif text-3xl leading-tight text-bone sm:text-4xl">
              {stat.brands.join(" / ")}
            </p>
          ) : (
            <p className="serif text-5xl leading-none tracking-normal text-bone">
              {stat.value}
            </p>
          )}
        </div>
        <p className="mt-3 text-sm leading-relaxed text-mute">{stat.detail}</p>
      </div>
    </div>
  );
}

function CountValue({
  stat,
  active,
}: {
  stat: CountStat;
  active: boolean;
}) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!active) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setValue(stat.end);
      return;
    }

    let raf = 0;
    const start = performance.now();

    const tick = (now: number) => {
      const progress = Math.min((now - start) / COUNT_DURATION, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(stat.end * eased));

      if (progress < 1) {
        raf = requestAnimationFrame(tick);
      }
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [active, stat.end]);

  return (
    <p className="serif text-5xl leading-none tracking-normal text-bone sm:text-6xl">
      <span className="text-[0.42em] align-middle">{stat.prefix}</span>
      {value}
      <span className="text-[0.48em] align-top">{stat.suffix}</span>
    </p>
  );
}
