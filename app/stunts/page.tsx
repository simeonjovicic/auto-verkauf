import type { Metadata } from "next";
import { PageHero } from "@/components/layout/page-hero";
import { Footer } from "@/components/footer/footer";
import Link from "next/link";
import { vehicles } from "@/lib/vehicles";

export const metadata: Metadata = {
  title: "Stunts",
  description:
    "Fahrzeuge und Fahrkönnen für Film, Werbung und Stunts. Meyer Motorsport — Wiener Erfahrung seit über 40 Jahren.",
};

const showcase =
  vehicles.find((v) => v.slug === "porsche-996-gt3-rs") ?? vehicles[0];

const PRODUCTIONS = [
  { year: "2023", title: "Internationale TV-Werbung", role: "Picture car" },
  { year: "2021", title: "Spielfilmproduktion (ORF)", role: "Stunt coordination" },
  { year: "2019", title: "Premium-Automotive Spot", role: "Fleet & driver" },
  { year: "2017", title: "Musikvideo", role: "Picture car" },
];

export default function StuntsPage() {
  return (
    <>
      <PageHero
        eyebrow="04 · Film & Werbung"
        title="Autos, die ihren Auftritt kennen."
        lede="Wir stellen Fahrzeuge und Fahrer für Film-, Werbe- und Bühnenproduktionen. Mit Sorgfalt, Versicherung und einer Erfahrung, die nur Jahrzehnte hinter dem Lenkrad bringen."
      />

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

      <section className="bg-ink px-6 py-20 sm:px-12 sm:py-24 lg:px-20">
        <div className="mx-auto grid max-w-[1440px] grid-cols-1 gap-x-16 gap-y-16 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="eyebrow text-mute">Leistungen</p>
            <h2 className="serif mt-3 text-balance text-4xl text-bone sm:text-5xl">
              Vom Picture-Car bis zur kompletten Crew.
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-x-12 gap-y-12 sm:grid-cols-2 lg:col-span-7">
            {[
              {
                t: "Picture Cars",
                d: "Sportwagen, Klassiker, Alltagsfahrzeuge — in Top-Zustand und mit gültiger Drehgenehmigung.",
              },
              {
                t: "Stunt Coordination",
                d: "Inhaber Manfred Meyer fährt selbst — oder vermittelt erfahrene Stuntfahrer für anspruchsvolle Szenen.",
              },
              {
                t: "Logistik",
                d: "Transport, Set-Vorbereitung, Versicherung. Wir liefern fahrbereit zur vereinbarten Zeit.",
              },
              {
                t: "Beratung",
                d: "Welche Modelle passen zum Drehbuch? Wir helfen bei Auswahl, Casting und Budget.",
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

      <section className="border-y border-line bg-ink px-6 py-20 sm:px-12 sm:py-24 lg:px-20">
        <div className="mx-auto grid max-w-[1440px] grid-cols-1 gap-x-16 gap-y-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="eyebrow text-mute">Auswahl</p>
            <h2 className="serif mt-3 text-3xl text-bone sm:text-4xl">
              Produktionen.
            </h2>
            <p className="mt-6 text-sm leading-relaxed text-mute">
              Eine Auswahl. Vollständige Referenzen und Showreel auf Anfrage.
            </p>
          </div>
          <ul className="divide-y divide-line border-y border-line lg:col-span-8">
            {PRODUCTIONS.map((p) => (
              <li
                key={p.title}
                className="grid grid-cols-12 gap-4 py-6 text-sm"
              >
                <span className="col-span-2 text-mute">{p.year}</span>
                <span className="col-span-7 text-bone">{p.title}</span>
                <span className="col-span-3 text-right text-mute">
                  {p.role}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-ink px-6 py-20 sm:px-12 sm:py-24 lg:px-20">
        <div className="mx-auto grid max-w-[1440px] grid-cols-1 gap-x-16 gap-y-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <p className="eyebrow text-mute">Briefing</p>
            <h2 className="serif mt-3 text-balance text-4xl text-bone sm:text-5xl">
              Drehbuch in der Schublade?
            </h2>
            <p className="mt-6 max-w-[52ch] text-base leading-relaxed text-mute sm:text-lg">
              Erzählen Sie uns von Ihrer Produktion. Wir antworten schnell — und
              ehrlich, falls wir der falsche Partner sind.
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

      <Footer />
    </>
  );
}
