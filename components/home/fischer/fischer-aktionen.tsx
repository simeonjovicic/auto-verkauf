import Link from "next/link";
import {
  ArrowRight,
  Calendar,
  Fuel,
  Gauge,
  Settings2,
  Zap,
} from "lucide-react";
import { Reveal } from "@/components/ui/reveal";

type Aktion = {
  title: string;
  variant: string;
  image: string;
  alt: string;
  href: string;
  badge?: string;
  price: string;
  year: string;
  km: string;
  fuel: string;
  transmission: string;
  power: string;
};

const AKTIONEN: Aktion[] = [
  {
    title: "Hyundai Tucson",
    variant: "N Line Hybrid · 4WD",
    image: "/fischerauto/tucson-red-new-front.png",
    alt: "Roter Hyundai Tucson N Line bei Fischerauto",
    href: "/fahrzeuge/hyundai-tucson-n-line",
    badge: "Aktion",
    price: "€ 42.900",
    year: "2024",
    km: "8.500 km",
    fuel: "Hybrid",
    transmission: "Automatik",
    power: "169 kW · 230 PS",
  },
  {
    title: "Hyundai Santa Fe",
    variant: "PHEV Black Line · 4WD",
    image: "/fischerauto/santa-fe-black-new-front.png",
    alt: "Schwarzer Hyundai Santa Fe PHEV bei Fischerauto",
    href: "/fahrzeuge/hyundai-santa-fe-phev-black-line",
    badge: "PHEV",
    price: "€ 58.400",
    year: "2024",
    km: "3.200 km",
    fuel: "Plug-in Hybrid",
    transmission: "Automatik",
    power: "195 kW · 265 PS",
  },
  {
    title: "Hyundai i20",
    variant: "Trend · 5-türig",
    image: "/fischerauto/i20-blue-new-front.png",
    alt: "Blauer Hyundai i20 bei Fischerauto",
    href: "/fahrzeuge/hyundai-i20-blue",
    badge: "Neuwagen",
    price: "€ 21.490",
    year: "2025",
    km: "12 km",
    fuel: "Benzin",
    transmission: "Manuell",
    power: "74 kW · 100 PS",
  },
];

const AKTIONEN_ROW2: Aktion[] = [
  {
    title: "Hyundai i20",
    variant: "N Line · Aktion",
    image: "/fischerauto/i20-blue-new-front.png",
    alt: "Blauer Hyundai i20 N Line bei Fischerauto",
    href: "/fahrzeuge/hyundai-i20-n-line",
    badge: "Aktion",
    price: "€ 24.990",
    year: "2024",
    km: "6.100 km",
    fuel: "Benzin",
    transmission: "Manuell",
    power: "88 kW · 120 PS",
  },
  {
    title: "Abarth 595",
    variant: "Competizione · Sportauspuff",
    image: "/fischerauto/abarth-595-black-front.png",
    alt: "Schwarzer Abarth 595 Competizione bei Fischerauto",
    href: "/fahrzeuge/abarth-595",
    badge: "Eintausch",
    price: "€ 19.900",
    year: "2021",
    km: "32.400 km",
    fuel: "Benzin",
    transmission: "Manuell",
    power: "132 kW · 180 PS",
  },
  {
    title: "Hyundai Tucson",
    variant: "Smart Line · Diesel",
    image: "/fischerauto/tucson-red-new-front.png",
    alt: "Hyundai Tucson Smart Line bei Fischerauto",
    href: "/fahrzeuge/hyundai-tucson-smart-line",
    badge: "Vorführwagen",
    price: "€ 34.290",
    year: "2024",
    km: "5.400 km",
    fuel: "Diesel",
    transmission: "Automatik",
    power: "100 kW · 136 PS",
  },
];

function CarCard({ a }: { a: Aktion }) {
  return (
    <Link
      href={a.href}
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-anthracite/20 bg-paper transition-all hover:border-anthracite/45 hover:shadow-[0_24px_60px_rgba(20,17,13,0.10)]"
    >
      {/* Image */}
      <div className="relative aspect-16/10 overflow-hidden bg-surface">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={a.image}
          alt={a.alt}
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          loading="lazy"
        />
        {a.badge && (
          <span className="absolute left-4 top-4 rounded-full bg-paper px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-anthracite shadow-sm">
            {a.badge}
          </span>
        )}
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col p-6 lg:p-7">
        {/* Title + price */}
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="font-serif text-xl italic leading-tight text-anthracite">
              {a.title}
            </h3>
            <p className="mt-1 text-[13px] text-fischer-mute">{a.variant}</p>
          </div>
          <p className="shrink-0 text-right font-serif text-xl italic text-anthracite">
            {a.price}
          </p>
        </div>

        {/* Specs grid */}
        <dl className="mt-6 grid grid-cols-2 gap-x-4 gap-y-3 border-t border-fischer-line pt-5 text-[13px] text-anthracite">
          <div className="flex items-center gap-2.5">
            <Calendar size={14} strokeWidth={1.6} className="text-anthracite/55" aria-hidden />
            <dt className="sr-only">Erstzulassung</dt>
            <dd>{a.year}</dd>
          </div>
          <div className="flex items-center gap-2.5">
            <Gauge size={14} strokeWidth={1.6} className="text-anthracite/55" aria-hidden />
            <dt className="sr-only">Kilometerstand</dt>
            <dd>{a.km}</dd>
          </div>
          <div className="flex items-center gap-2.5">
            <Fuel size={14} strokeWidth={1.6} className="text-anthracite/55" aria-hidden />
            <dt className="sr-only">Kraftstoff</dt>
            <dd>{a.fuel}</dd>
          </div>
          <div className="flex items-center gap-2.5">
            <Settings2 size={14} strokeWidth={1.6} className="text-anthracite/55" aria-hidden />
            <dt className="sr-only">Getriebe</dt>
            <dd>{a.transmission}</dd>
          </div>
          <div className="col-span-2 flex items-center gap-2.5">
            <Zap size={14} strokeWidth={1.6} className="text-anthracite/55" aria-hidden />
            <dt className="sr-only">Leistung</dt>
            <dd>{a.power}</dd>
          </div>
        </dl>

        {/* CTA row */}
        <div className="mt-6 flex items-center justify-between border-t border-fischer-line pt-5">
          <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-anthracite/65">
            Details &amp; Probefahrt
          </span>
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-anthracite text-paper transition-transform group-hover:translate-x-0.5">
            <ArrowRight size={14} strokeWidth={1.8} aria-hidden />
          </span>
        </div>
      </div>
    </Link>
  );
}

export function FischerAktionen() {
  return (
    <section
      id="aktionen"
      className="bg-paper text-anthracite"
      aria-labelledby="fischer-aktionen-title"
    >
      <div className="mx-auto max-w-360 px-6 py-24 sm:px-12 sm:py-28 lg:px-20 lg:py-32">
        <Reveal direction="up" distance={12} duration={700}>
          <div className="flex items-center gap-4">
            <span className="font-mono text-[11px] tracking-[0.18em] text-anthracite/50">
              02
            </span>
            <div className="h-px w-12 bg-anthracite/25" />
            <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-anthracite/55">
              Fahrzeuge &amp; Aktionen
            </p>
          </div>
        </Reveal>
        <Reveal direction="up" delay={120}>
          <h2
            id="fischer-aktionen-title"
            className="mt-8 max-w-3xl font-serif text-4xl italic leading-[1.05] tracking-tight sm:text-5xl lg:text-[64px]"
          >
            Aktuelle Modelle,
            <br />
            ohne Banner-Chaos.
          </h2>
        </Reveal>

        <ul className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-7">
          {AKTIONEN.map((a, i) => (
            <Reveal as="li" key={a.title + a.variant} direction="up" delay={i * 80}>
              <CarCard a={a} />
            </Reveal>
          ))}
        </ul>

        <ul className="mt-7 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-7">
          {AKTIONEN_ROW2.map((a, i) => (
            <Reveal as="li" key={a.title + a.variant} direction="up" delay={i * 80}>
              <CarCard a={a} />
            </Reveal>
          ))}
        </ul>

        <Reveal direction="up" delay={150}>
          <div className="mt-12 flex justify-center">
            <Link
              href="/fahrzeuge"
              className="inline-flex items-center gap-2 rounded-full bg-anthracite px-8 py-3.5 text-sm font-semibold text-paper transition-colors hover:bg-anthracite/85"
            >
              Alle Fahrzeuge anzeigen
              <ArrowRight size={15} strokeWidth={1.8} aria-hidden />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
