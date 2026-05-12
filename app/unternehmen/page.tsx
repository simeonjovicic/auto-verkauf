import type { Metadata } from "next";
import { PageHero } from "@/components/layout/page-hero";
import { Footer } from "@/components/footer/footer";
import { ParallaxImage } from "@/components/home/parallax-image";
import { vehicles } from "@/lib/vehicles";

export const metadata: Metadata = {
  title: "Unternehmen",
  description:
    "Seit über 40 Jahren handelt Manfred Meyer mit ausgewählten Sportwagen. Meyer Motorsport in Wien — Heritage, Sorgfalt, Vertrauen.",
};

const portrait =
  vehicles.find((v) => v.slug === "porsche-718-spyder-4-0") ?? vehicles[0];

const STATS = [
  { value: "1983", label: "Gegründet" },
  { value: "40+", label: "Jahre Erfahrung" },
  { value: "Wien", label: "Standort" },
  { value: "300+", label: "Fahrzeuge vermittelt" },
];

export default function UnternehmenPage() {
  return (
    <>
      <PageHero
        eyebrow="Über uns"
        title="Vier Jahrzehnte Sportwagen — eine Adresse."
        lede="Meyer Motorsport ist ein Familienbetrieb in Wien-Favoriten. Was 1983 mit einer Leidenschaft für italienische Sportwagen begann, ist heute eine der ältesten Adressen Österreichs für ausgewählte Ferrari, Porsche und BMW M Sammlerstücke."
      />

      <section className="bg-ink px-6 py-20 sm:px-12 sm:py-24 lg:px-20">
        <div className="mx-auto grid max-w-[1440px] grid-cols-1 gap-x-16 gap-y-16 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <p className="eyebrow text-mute">Selbstverständnis</p>
            <div className="serif mt-6 space-y-6 text-lg leading-relaxed text-bone/85 sm:text-xl">
              <p>
                Unsere Arbeit lebt von Diskretion und Sorgfalt. Wir kaufen,
                vermitteln und betreuen Fahrzeuge, deren Geschichte wir kennen
                und deren technischen Zustand wir verantworten können.
              </p>
              <p>
                Der Bestand ist klein und kuratiert. Jedes Auto wird persönlich
                begutachtet, dokumentiert und — sofern nötig — von vertrauten
                Werkstätten vorbereitet. Wir verkaufen keine Versprechungen,
                sondern Fahrzeuge mit nachvollziehbarer Herkunft.
              </p>
              <p>
                Kunden kommen seit Jahrzehnten zu uns zurück. Wir bewahren
                diesen Anspruch — durch klare Auswahl, klare Worte, klare
                Preise.
              </p>
            </div>
          </div>
          <aside className="lg:col-span-5">
            <ParallaxImage
              src={portrait.src}
              srcAvif={portrait.srcAvif}
              alt={portrait.alt}
              width={portrait.width}
              height={portrait.height}
              className="aspect-[3/4]"
            />
            <p className="mt-4 text-xs uppercase tracking-[0.2em] text-mute">
              Manfred Meyer · Inhaber
            </p>
          </aside>
        </div>
      </section>

      <section className="border-y border-line bg-ink px-6 py-16 sm:px-12 lg:px-20">
        <div className="mx-auto grid max-w-[1440px] grid-cols-2 gap-y-10 lg:grid-cols-4">
          {STATS.map((s) => (
            <div key={s.label}>
              <p className="serif text-4xl text-bone sm:text-5xl">{s.value}</p>
              <p className="mt-2 text-[11px] uppercase tracking-[0.2em] text-mute">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-ink px-6 py-20 sm:px-12 sm:py-24 lg:px-20">
        <div className="mx-auto grid max-w-[1440px] grid-cols-1 gap-x-16 gap-y-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="eyebrow text-mute">Leistungen</p>
            <h2 className="serif mt-3 text-3xl text-bone sm:text-4xl">
              Was wir tun.
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-x-12 gap-y-10 sm:grid-cols-2 lg:col-span-8">
            {[
              {
                t: "An- und Verkauf",
                d: "Vermittlung ausgewählter Sammlerfahrzeuge mit dokumentierter Historie. Ankauf einzelner Stücke und kompletter Sammlungen.",
              },
              {
                t: "Suchaufträge",
                d: "Auf Wunsch suchen wir gezielt nach einem bestimmten Modell, einer Lackierung, einer Spezifikation. Diskret, mit europaweitem Netzwerk.",
              },
              {
                t: "Konsignation",
                d: "Wir präsentieren Ihr Fahrzeug einem ausgewählten Kundenkreis. Auf Wunsch übernehmen wir Aufbereitung und Dokumentation.",
              },
              {
                t: "Beratung",
                d: "Einschätzung von Marktwert, Originalität und Zustand — auch unabhängig von einer konkreten Transaktion.",
              },
            ].map((l) => (
              <div key={l.t}>
                <h3 className="serif text-2xl text-bone">{l.t}</h3>
                <p className="mt-3 text-sm leading-relaxed text-mute">{l.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
