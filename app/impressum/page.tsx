import type { Metadata } from "next";
import { PageHero } from "@/components/layout/page-hero";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Impressum",
  description: "Impressum und rechtliche Hinweise — Fischerauto, Wien.",
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
                {SITE.legalName}
                <br />
                Auftritt: {SITE.name}
                <br />
                {SITE.address.street}
                <br />
                {SITE.address.postal} {SITE.address.city}, {SITE.address.country}
              </p>
            </div>

            <div>
              <p className="eyebrow text-mute">Kontakt</p>
              <p className="mt-3">
                Telefon: {SITE.phoneDisplay}
                <br />
                Fax: {SITE.faxDisplay}
                <br />
                E-Mail:{" "}
                <a href={`mailto:${SITE.email}`} className="text-bone hover:text-gold">
                  {SITE.email}
                </a>
                <br />
                Website:{" "}
                <a
                  href={SITE.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-bone hover:text-gold"
                >
                  {SITE.website}
                </a>
              </p>
            </div>

            <div>
              <p className="eyebrow text-mute">Firmenangaben</p>
              <p className="mt-3">
                UID-Nr.: {SITE.uid}
                <br />
                Firmenbuch-Nr.: {SITE.companyRegister}
                <br />
                Gegründet: {SITE.founded}
                <br />
                Gründer: Franz und Monika Fischer
              </p>
            </div>

            <div>
              <p className="eyebrow text-mute">Bankverbindung</p>
              <p className="mt-3">
                {SITE.bank}
                <br />
                IBAN: {SITE.iban}
                <br />
                BIC: {SITE.bic}
                <br />
                Konto-Nr. / BLZ: {SITE.account}
              </p>
            </div>

            <div>
              <p className="eyebrow text-mute">Unternehmensgegenstand</p>
              <p className="mt-3">
                Handel mit Neu- und Gebrauchtwagen, Reparatur und Service von
                Kraftfahrzeugen, Ersatzteile, Zubehör, Finanzierung, Leasing und
                Versicherungsservice.
              </p>
            </div>

            <div>
              <p className="eyebrow text-mute">Aufsichtsbehörde / Kammer</p>
              <p className="mt-3">
                Wirtschaftskammer Wien, Sparte Handel und Gewerbe. Zuständige
                Gewerbebehörde: Magistratisches Bezirksamt der Stadt Wien.
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
                Online-Streitbeilegung bereit:{" "}
                <a
                  href="https://ec.europa.eu/consumers/odr/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-bone underline-offset-4 hover:underline"
                >
                  ec.europa.eu/consumers/odr
                </a>
                .
              </p>
            </div>

            <div>
              <p className="eyebrow text-mute">Haftungsausschluss</p>
              <p className="mt-3">
                Inhalte dieser Website werden mit Sorgfalt erstellt. Für die
                Richtigkeit, Vollständigkeit und Aktualität wird dennoch keine
                Gewähr übernommen. Für Inhalte externer Links sind ausschließlich
                deren Betreiber verantwortlich.
              </p>
            </div>

            <div>
              <p className="eyebrow text-mute">Urheberrecht</p>
              <p className="mt-3">
                Texte, Fotos und grafische Elemente dieser Website sind
                urheberrechtlich geschützt. Eine Verwendung bedarf der vorherigen
                schriftlichen Zustimmung.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
