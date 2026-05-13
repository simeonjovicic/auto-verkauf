import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/layout/page-hero";
import { VehicleCard } from "@/components/vehicles/vehicle-card";
import { vehicles, type Brand } from "@/lib/vehicles";

export const metadata: Metadata = {
  title: "Marken",
  description:
    "Ferrari, Porsche und BMW M bei Meyer Motorsport — handverlesene Sammlerstücke aus drei Häusern mit klarer Haltung.",
};

type BrandEntry = {
  brand: Brand;
  wordmark: string;
  headline: string;
  paragraphs: string[];
  imageSlug: string;
};

const BRANDS: BrandEntry[] = [
  {
    brand: "Ferrari",
    wordmark: "FERRARI",
    headline: "Maranello, kompromisslos.",
    paragraphs: [
      "Seit den späten 1940er-Jahren verbindet Ferrari Rennsport-DNA mit kompromissloser Eleganz. Jeder Wagen ist ein Statement, kein Werkzeug.",
      "Unser Schwerpunkt liegt auf den letzten Saugmotor-Modellen sowie auf ausgewählten Turbo-Ikonen der V8-Mittelmotor-Linie — vom 458 Speciale Aperta bis zum 488 Pista. Jedes Fahrzeug wird mit lückenloser Dokumentation und Werks-Service-Historie übergeben.",
    ],
    imageSlug: "ferrari-458-speciale-aperta",
  },
  {
    brand: "Porsche",
    wordmark: "PORSCHE",
    headline: "Stuttgarter Präzision.",
    paragraphs: [
      "Porsche hat den alltagstauglichen Sportwagen erfunden — kompromisslos schnell und gleichzeitig unaufgeregt. Eine Marke, in der jedes Detail seinen Sinn ergibt.",
      "Wir konzentrieren uns auf die seltenen Schaltgetriebe-Varianten der GT-Reihe und auf limitierte Sondermodelle: 718 Spyder 4.0, Cayman R, 996 GT3 RS. Fahrzeuge, die nicht abgestellt, sondern bewegt werden wollen.",
    ],
    imageSlug: "porsche-718-spyder-4-0",
  },
  {
    brand: "BMW",
    wordmark: "BMW M",
    headline: "Münchner Pragmatismus.",
    paragraphs: [
      "BMW M ist die kompromisslosere Seite der Marke — eine der letzten Bastionen des hochdrehenden Sechszylinder-Saugmotors im Premium-Segment.",
      "Wir kuratieren ausgewählte M-Modelle der späten 1990er und frühen 2000er — den Z3 M Coupé S54, nach Verfügbarkeit auch E46 M3 CSL und E39 M5. Modelle, deren Wert in den letzten zehn Jahren stabil gewachsen ist.",
    ],
    imageSlug: "bmw-z3-m-coupe-s54",
  },
];

export default function MarkenPage() {
  return (
    <>
      <PageHero
        eyebrow="Marken"
        title="Drei Häuser, eine Haltung."
        lede="Ferrari, Porsche und BMW M — die Marken, die wir vertreten, und die Modellpolitik, der wir folgen."
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
  const v = vehicles.find((x) => x.slug === entry.imageSlug);
  if (!v) return null;

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
          {/* Copy */}
          <div className="lg:col-span-5">
            <p className="serif text-[44px] leading-none tracking-[0.06em] text-bone sm:text-[56px] lg:text-[64px]">
              {entry.wordmark}
            </p>
            <h2 className="serif mt-8 text-3xl leading-[1.1] text-bone sm:text-4xl lg:text-[40px]">
              <span className="italic text-bone/55">{entry.headline}</span>
            </h2>
            <div className="mt-8 space-y-5 text-base leading-relaxed text-mute sm:text-lg">
              {entry.paragraphs.map((p) => (
                <p key={p.slice(0, 24)}>{p}</p>
              ))}
            </div>
            <Link
              href="/fahrzeuge"
              className="mt-10 inline-flex items-center gap-3 border border-bone/70 px-6 py-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-bone transition-colors hover:border-bone hover:bg-bone hover:text-ink"
            >
              Bestand ansehen
              <span aria-hidden>→</span>
            </Link>
          </div>

          {/* Photo */}
          <div className="lg:col-span-7">
            <div className="relative aspect-4/3 overflow-hidden bg-stage">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={v.src}
                alt={v.alt}
                width={v.width}
                height={v.height}
                loading="lazy"
                decoding="async"
                draggable={false}
                className="h-full w-full object-cover select-none"
                style={{
                  backgroundImage: `url(${v.blurDataURL})`,
                  backgroundSize: "cover",
                }}
              />
            </div>
            <p className="mt-3 text-[11px] uppercase tracking-[0.22em] text-mute">
              {v.name} {v.subtitle} · {v.specs.color}
            </p>
          </div>
        </div>

        {inStock.length > 0 && (
          <div className="mt-16 border-t border-line pt-10 lg:mt-24 lg:pt-14">
            <div className="mb-8 flex items-baseline justify-between gap-6">
              <h3 className="serif text-2xl text-bone sm:text-3xl">
                Verfügbar im Bestand
              </h3>
              <Link
                href="/fahrzeuge"
                className="text-[11px] uppercase tracking-[0.22em] text-mute transition-colors hover:text-gold"
              >
                Alle {entry.brand}
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
