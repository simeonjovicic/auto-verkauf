import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/layout/page-hero";
import { vehicles } from "@/lib/vehicles";

export const metadata: Metadata = {
  title: "Service",
  description:
    "Sammlerservice, Konsignation und diskrete Fahrzeugvermittlung — seit über vier Jahrzehnten in Wien.",
};

const showcase = vehicles.find((v) => v.slug === "ferrari-488-pista") ?? vehicles[0];

type Offering = { t: string; d: string };

const OFFERINGS: Offering[] = [
  {
    t: "Konsignation",
    d: "Wir nehmen pro Quartal maximal sechs Fahrzeuge in Konsignation. Inspektion, Fotografie, Marktrecherche, Inserat — Sie werden erst involviert, wenn ein konkretes Angebot vorliegt.",
  },
  {
    t: "Suche & Vermittlung",
    d: "Auf Zuruf finden wir Fahrzeuge, die nicht öffentlich angeboten werden — europaweit, mit überprüfter Historie und Werks-Service-Akten.",
  },
  {
    t: "Übernahme & Übergabe",
    d: "Werkstattprüfung, Transport, Anmeldung, Schlüsselübergabe. Sie sehen das Fahrzeug, wenn es bereit ist — nicht vorher.",
  },
  {
    t: "Garage & Pflege",
    d: "Klimatisierte Unterstellung in Wien, regelmäßige Bewegung, Reifenwechsel und Batterie-Conditioning. Auf Wunsch ganzjährig.",
  },
  {
    t: "Verkauf in Ihrem Namen",
    d: "Diskrete Vermittlung Ihrer Fahrzeuge. Keine öffentlichen Listings, keine Spekulanten — Käufer kommen aus einem geprüften Netzwerk.",
  },
  {
    t: "Beratung & Inspektion",
    d: "Pre-Purchase-Inspection vor jedem Sammlerkauf. Wir prüfen Fahrzeuge auch außerhalb unseres Bestandes — auf Stundenbasis, neutral und ohne Provisionsinteresse.",
  },
];

export default function ServicePage() {
  return (
    <>
      <PageHero
        eyebrow="Service"
        title="Diskret, persönlich, verbindlich."
        lede="Seit vier Jahrzehnten betreuen wir Sammler, Persönlichkeiten und Unternehmen mit dem gleichen Anspruch — Vertraulichkeit und kompromisslose Sorgfalt vom ersten Gespräch an."
      />

      {/* Immersive image band */}
      <section className="relative bg-ink">
        <div className="relative h-[60vh] min-h-[420px] w-full overflow-hidden">
          <picture>
            <source srcSet={showcase.srcAvif} type="image/avif" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={showcase.src}
              alt={showcase.alt}
              width={showcase.width}
              height={showcase.height}
              draggable={false}
              className="h-full w-full object-cover select-none"
              style={{
                backgroundImage: `url(${showcase.blurDataURL})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
          </picture>
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-ink/60"
          />
        </div>
      </section>

      {/* Offerings */}
      <section className="bg-ink px-6 py-20 sm:px-12 sm:py-24 lg:px-20">
        <div className="mx-auto grid max-w-360 grid-cols-1 gap-x-16 gap-y-16 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="eyebrow text-gold!">Was Sie erwartet</p>
            <h2 className="serif mt-6 text-balance text-4xl text-bone sm:text-5xl">
              Ein einziger Ansprechpartner. <span className="italic text-bone/55">Für alles.</span>
            </h2>
            <p className="mt-6 max-w-[42ch] text-base leading-relaxed text-mute sm:text-lg">
              Wir machen keine Massenabwicklung. Unsere Klientel kommt zu uns,
              weil sie genau weiß, dass jedes Fahrzeug einzeln betreut wird —
              vom ersten Telefonat bis zur Übergabe und darüber hinaus.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-x-12 gap-y-12 sm:grid-cols-2 lg:col-span-7">
            {OFFERINGS.map((l) => (
              <div key={l.t}>
                <h3 className="serif text-2xl text-bone">{l.t}</h3>
                <p className="mt-3 text-sm leading-relaxed text-mute">{l.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-line bg-ink px-6 py-20 sm:px-12 sm:py-24 lg:px-20">
        <div className="mx-auto grid max-w-360 grid-cols-1 gap-x-16 gap-y-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <p className="eyebrow text-gold!">Erstkontakt</p>
            <h2 className="serif mt-6 text-balance text-4xl text-bone sm:text-5xl">
              Sprechen Sie direkt mit dem Inhaber.
            </h2>
            <p className="mt-6 max-w-[52ch] text-base leading-relaxed text-mute sm:text-lg">
              Anfragen werden persönlich und vertraulich beantwortet — meist
              innerhalb desselben Tages.
            </p>
          </div>
          <div className="flex flex-col gap-3 lg:col-span-5 lg:items-end lg:justify-end">
            <Link
              href="/kontakt/"
              className="inline-flex items-center justify-center bg-bone px-8 py-4 text-[11px] uppercase tracking-[0.2em] text-ink transition-colors hover:bg-gold"
            >
              Anfrage senden →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
