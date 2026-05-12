import type { Metadata } from "next";
import { PageHero } from "@/components/layout/page-hero";
import { Footer } from "@/components/footer/footer";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Impressum",
  description: "Impressum und rechtliche Hinweise — Meyer Motorsport, Wien.",
  robots: { index: true, follow: true },
};

export default function ImpressumPage() {
  return (
    <>
      <PageHero eyebrow="Rechtliches" title="Impressum." />

      <section className="bg-ink px-6 py-20 sm:px-12 sm:py-24 lg:px-20">
        <div className="mx-auto grid max-w-[1440px] grid-cols-1 gap-x-16 gap-y-12 lg:grid-cols-12">
          <div className="space-y-10 text-sm leading-relaxed text-bone/85 lg:col-span-8 lg:col-start-2">
            <div>
              <p className="eyebrow text-mute">Medieninhaber & Herausgeber</p>
              <p className="mt-3">
                {SITE.owner}
                <br />
                {SITE.name}
                <br />
                {SITE.address.street}
                <br />
                {SITE.address.postal}, {SITE.address.country}
              </p>
            </div>

            <div>
              <p className="eyebrow text-mute">Kontakt</p>
              <p className="mt-3">
                Telefon: {SITE.phoneDisplay}
                <br />
                Mobil: {SITE.mobileDisplay}
                <br />
                E-Mail:{" "}
                <a
                  href={`mailto:${SITE.email}`}
                  className="text-bone hover:text-gold"
                >
                  {SITE.email}
                </a>
              </p>
            </div>

            <div>
              <p className="eyebrow text-mute">Unternehmensgegenstand</p>
              <p className="mt-3">
                Handel mit Sammler- und Sportwagen, Vermittlung, Beratung.
              </p>
            </div>

            <div>
              <p className="eyebrow text-mute">Aufsichtsbehörde / Kammer</p>
              <p className="mt-3">
                Wirtschaftskammer Wien, Sparte Handel —
                Fachgruppe Fahrzeughandel.
              </p>
            </div>

            <div>
              <p className="eyebrow text-mute">Berufsrecht</p>
              <p className="mt-3">
                Gewerbeordnung (GewO), abrufbar unter{" "}
                <a
                  href="https://www.ris.bka.gv.at"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-bone underline-offset-4 hover:underline"
                >
                  ris.bka.gv.at
                </a>
                .
              </p>
            </div>

            <div>
              <p className="eyebrow text-mute">Online-Streitbeilegung</p>
              <p className="mt-3">
                Die Europäische Kommission stellt eine Plattform zur
                Online-Streitbeilegung (OS) bereit:{" "}
                <a
                  href="https://ec.europa.eu/consumers/odr/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-bone underline-offset-4 hover:underline"
                >
                  ec.europa.eu/consumers/odr
                </a>
                . Wir sind nicht verpflichtet und nicht bereit, an einem
                Streitbeilegungsverfahren vor einer
                Verbraucherschlichtungsstelle teilzunehmen.
              </p>
            </div>

            <div>
              <p className="eyebrow text-mute">Haftungsausschluss</p>
              <p className="mt-3">
                Inhalte dieser Website wurden mit grösster Sorgfalt erstellt.
                Für die Richtigkeit, Vollständigkeit und Aktualität wird
                dennoch keine Gewähr übernommen. Für Inhalte externer Links
                sind ausschliesslich deren Betreiber verantwortlich.
              </p>
            </div>

            <div>
              <p className="eyebrow text-mute">Urheberrecht</p>
              <p className="mt-3">
                Alle auf dieser Website verwendeten Texte, Fotos und grafischen
                Elemente sind urheberrechtlich geschützt. Eine Verwendung
                bedarf der vorherigen schriftlichen Zustimmung.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
