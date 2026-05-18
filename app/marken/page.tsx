import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/layout/page-hero";
import { VehicleCard } from "@/components/vehicles/vehicle-card";
import { vehicles, type Brand } from "@/lib/vehicles";

export const metadata: Metadata = {
  title: "Marken",
  description:
    "Hyundai und Mitsubishi bei Fischerauto in Wien-Donaustadt. Neuwagenverkauf, Beratung, Service, Teile und Finanzierung.",
};

type BrandEntry = {
  brand: Brand;
  wordmark: string;
  logo?: string;
  headline: string;
  paragraphs: string[];
  image: string;
  imageAlt: string;
  width: number;
  height: number;
};

const BRANDS: BrandEntry[] = [
  {
    brand: "Hyundai",
    wordmark: "HYUNDAI",
    logo: "/fischerauto/hyundai_logo.png",
    headline: "Die Hauptmarke bei Fischerauto.",
    paragraphs: [
      "Hyundai steht im Zentrum des Autohauses: aktuelle Modelle, Aktionen, Beratung, Finanzierung, Leasing und Service werden direkt am Standort in Wien-Donaustadt betreut.",
      "Ob IONIQ 9, Kona, Tucson, Santa Fe oder die übrige Modellpalette: Das Verkaufsteam klärt Ausstattung, Lieferzeit, Probefahrt und laufende Aktionen persönlich.",
    ],
    image: "/fischerauto/ioniq-9.jpg",
    imageAlt: "Hyundai IONIQ 9 Aktionsbanner von Fischerauto",
    width: 2339,
    height: 1511,
  },
  {
    brand: "Mitsubishi",
    wordmark: "MITSUBISHI",
    headline: "Neuwagen, Service und Betreuung.",
    paragraphs: [
      "Fischerauto ist auch Ansprechpartner für Mitsubishi. Beratung, Bestellung, Service, Teile und Garantie laufen über das eingespielte Team in der Wagramer Straße.",
      "Für verfügbare Modelle und konkrete Angebote ist der direkte Kontakt entscheidend, weil Verfügbarkeit, Ausstattung und Aktionen laufend wechseln.",
    ],
    image: "/fischerauto/team.png",
    imageAlt: "Fischerauto Team im Schauraum",
    width: 1000,
    height: 606,
  },
];

export default function MarkenPage() {
  return (
    <>
      <PageHero
        eyebrow="Marken"
        title="Hyundai und Mitsubishi in Wien."
        lede="Fischerauto verbindet Neuwagenverkauf, Service, Ersatzteile, Finanzierung und Versicherungsberatung in einem vollintegrierten Händlerbetrieb."
      />
      <main className="bg-ink text-bone">
        {BRANDS.map((b, i) => (
          <BrandSection key={b.brand} entry={b} flip={i % 2 === 1} />
        ))}
      </main>
    </>
  );
}

function BrandSection({ entry, flip }: { entry: BrandEntry; flip: boolean }) {
  const inStock = vehicles.filter((x) => x.brand === entry.brand);

  return (
    <section className="border-t border-line">
      <div className="mx-auto max-w-360 px-6 py-20 sm:px-12 lg:px-20 lg:py-28">
        <div
          className={
            "grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16 " +
            (flip ? "lg:[&>:first-child]:order-2" : "")
          }
        >
          <div className="lg:col-span-5">
            {entry.logo ? (
              <>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={entry.logo}
                  alt={`${entry.brand} Logo`}
                  width={500}
                  height={97}
                  loading="lazy"
                  decoding="async"
                  className="h-10 w-auto object-contain"
                />
              </>
            ) : (
              <p className="serif text-[44px] leading-none tracking-[0.06em] text-bone sm:text-[56px] lg:text-[64px]">
                {entry.wordmark}
              </p>
            )}
            <h2 className="serif mt-8 text-3xl leading-[1.1] text-bone sm:text-4xl lg:text-[40px]">
              <span className="italic text-bone/55">{entry.headline}</span>
            </h2>
            <div className="mt-8 space-y-5 text-base leading-relaxed text-mute sm:text-lg">
              {entry.paragraphs.map((p) => (
                <p key={p.slice(0, 24)}>{p}</p>
              ))}
            </div>
            <Link
              href="/kontakt"
              className="mt-10 inline-flex items-center gap-3 border border-bone/70 px-6 py-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-bone transition-colors hover:border-bone hover:bg-bone hover:text-ink"
            >
              Beratung anfragen
              <span aria-hidden>→</span>
            </Link>
          </div>

          <div className="lg:col-span-7">
            <div className="relative aspect-4/3 overflow-hidden bg-stage">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={entry.image}
                alt={entry.imageAlt}
                width={entry.width}
                height={entry.height}
                loading="lazy"
                decoding="async"
                draggable={false}
                className="h-full w-full object-cover select-none"
              />
            </div>
            <p className="mt-3 text-[11px] uppercase tracking-[0.22em] text-mute">
              {entry.brand} bei Fischerauto · Wagramer Straße 36A
            </p>
          </div>
        </div>

        {inStock.length > 0 && (
          <div className="mt-16 border-t border-line pt-10 lg:mt-24 lg:pt-14">
            <div className="mb-8 flex items-baseline justify-between gap-6">
              <h3 className="serif text-2xl text-bone sm:text-3xl">
                Aktuelle Einstiege
              </h3>
              <Link
                href="/fahrzeuge"
                className="text-[11px] uppercase tracking-[0.22em] text-mute transition-colors hover:text-gold"
              >
                Alle Fahrzeuge
                <span aria-hidden> →</span>
              </Link>
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {inStock.map((vh) => (
                <VehicleCard key={vh.slug} vehicle={vh} />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
