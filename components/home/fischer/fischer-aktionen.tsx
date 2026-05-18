import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { WILLHABEN_URL } from "@/lib/site";

type Aktion = {
  title: string;
  subtitle: string;
  image: string;
  alt: string;
  href: string;
  badge?: string;
};

const AKTIONEN: Aktion[] = [
  {
    title: "Hyundai Tucson",
    subtitle: "N Line Hybrid als starke Aktionsansicht. Beratung direkt im Haus.",
    image: "/fischerauto/tucson-red-new-front.png",
    alt: "Roter Hyundai Tucson bei Fischerauto",
    href: "/fahrzeuge/hyundai-tucson-n-line",
    badge: "Aktion",
  },
  {
    title: "Hyundai Santa Fe",
    subtitle: "Plug-in Hybrid, 4WD und viel Platz. Angebot persönlich klären.",
    image: "/fischerauto/santa-fe-black-new-front.png",
    alt: "Schwarzer Hyundai Santa Fe PHEV bei Fischerauto",
    href: "/fahrzeuge/hyundai-santa-fe-phev-black-line",
    badge: "PHEV",
  },
  {
    title: "Hyundai i20",
    subtitle: "Kompakt, effizient und ideal für Wien. Neuwagenberatung vor Ort.",
    image: "/fischerauto/i20-blue-new-front.png",
    alt: "Blauer Hyundai i20 bei Fischerauto",
    href: "/fahrzeuge/hyundai-i20-blue",
    badge: "Neuwagen",
  },
];

const FILTERS = ["Neuwagen", "Aktionen", "Eintauschwagen", "willhaben-Bestand"] as const;

export function FischerAktionen() {
  return (
    <section
      id="aktionen"
      className="bg-paper text-anthracite"
      aria-labelledby="fischer-aktionen-title"
    >
      <div className="mx-auto max-w-360 px-6 py-20 sm:px-12 sm:py-24 lg:px-20 lg:py-28">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-hyundai">
              Bestand & Aktionen
            </p>
            <h2
              id="fischer-aktionen-title"
              className="mt-3 max-w-3xl text-3xl font-semibold tracking-tight text-anthracite sm:text-4xl lg:text-5xl"
            >
              Aktuelle Modelle, ohne Banner-Chaos.
            </h2>
          </div>
          <div className="lg:col-span-5 lg:justify-self-end">
            <div className="flex flex-wrap gap-2">
              {FILTERS.map((filter) => (
                <span
                  key={filter}
                  className="border border-fischer-line bg-surface-soft px-3 py-2 text-xs font-semibold text-anthracite/70"
                >
                  {filter}
                </span>
              ))}
            </div>
            <Link
              href="/fahrzeuge"
              className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-hyundai underline-offset-4 hover:underline"
            >
              Alle Fahrzeuge
              <ArrowUpRight size={15} strokeWidth={1.8} aria-hidden />
            </Link>
          </div>
        </div>

        <ul className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-3 lg:gap-8">
          {AKTIONEN.map((a) => (
            <li key={a.title}>
              <Link
                href={a.href}
                className="group flex h-full flex-col overflow-hidden border border-fischer-line bg-surface-soft transition-shadow hover:shadow-[0_24px_60px_rgba(0,44,95,0.14)]"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-surface">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={a.image}
                    alt={a.alt}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    loading="lazy"
                  />
                  <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-anthracite/35 to-transparent" aria-hidden />
                  {a.badge && (
                    <span className="absolute left-4 top-4 bg-paper px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-hyundai">
                      {a.badge}
                    </span>
                  )}
                </div>
                <div className="flex flex-1 flex-col gap-3 p-6 lg:p-7">
                  <h3 className="text-xl font-semibold text-anthracite">{a.title}</h3>
                  <p className="text-sm leading-relaxed text-fischer-mute">{a.subtitle}</p>
                  <span className="mt-auto pt-4 text-sm font-semibold text-hyundai">
                    Mehr erfahren
                  </span>
                </div>
              </Link>
            </li>
          ))}
        </ul>

        <div className="mt-8 flex flex-col gap-5 border border-fischer-line bg-surface-soft p-6 sm:flex-row sm:items-center sm:justify-between lg:p-7">
          <div>
            <p className="text-sm font-semibold text-anthracite">
              Tagesaktueller Gebrauchtwagenbestand
            </p>
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-fischer-mute">
              Der Live-Bestand wird direkt über willhaben gepflegt. Für die
              neue Seite bleibt der Bestand damit aktuell, ohne doppelte Pflege.
            </p>
          </div>
          <a
            href={WILLHABEN_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex shrink-0 items-center justify-center gap-2 bg-hyundai px-6 py-3 text-sm font-semibold text-paper transition-colors hover:bg-hyundai-deep"
          >
            willhaben öffnen
            <ArrowUpRight size={16} strokeWidth={1.8} aria-hidden />
          </a>
        </div>
      </div>
    </section>
  );
}
