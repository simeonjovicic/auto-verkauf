import type { Metadata } from "next";
import { PageHero } from "@/components/layout/page-hero";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Teilnahmebedingungen",
  description: "Teilnahmebedingungen für Gewinnspiele von Fischerauto.",
};

export default function TeilnahmebedingungPage() {
  return (
    <>
      <PageHero
        eyebrow="Rechtliches"
        title="Teilnahmebedingungen."
        lede="Platzhalter für Gewinnspielbedingungen. Konkrete Teilnahmebedingungen müssen je Aktion ergänzt und rechtlich geprüft werden."
      />
      <section className="bg-ink px-6 py-20 sm:px-12 lg:px-20">
        <div className="mx-auto max-w-[820px] space-y-8 text-sm leading-relaxed text-bone/85">
          <p>
            Veranstalter ist {SITE.legalName}, {SITE.address.street},{" "}
            {SITE.address.postal} {SITE.address.city}. Laufzeit, Teilnahmeweg,
            Gewinn, Ziehung, Verständigung und Ausschlüsse werden je Gewinnspiel
            gesondert angegeben.
          </p>
          <p>
            Diese Seite ist als Struktur vorbereitet und muss vor Veröffentlichung
            einer konkreten Aktion final ergänzt werden.
          </p>
        </div>
      </section>
    </>
  );
}
