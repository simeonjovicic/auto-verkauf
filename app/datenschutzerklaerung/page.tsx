import type { Metadata } from "next";
import { PageHero } from "@/components/layout/page-hero";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Datenschutzerklärung",
  description:
    "Datenschutzerklärung für Fischerauto. Entwurf für die neue Website, vor Launch rechtlich finalisieren.",
  robots: { index: true, follow: true },
};

export default function DatenschutzPage() {
  return (
    <>
      <PageHero
        eyebrow="Rechtliches"
        title="Datenschutzerklärung."
        lede="Entwurf für die neue Website. Vor dem Launch müssen Cookie-Setup, Mailchimp-Anbindung, eingebettete Dienste und Tracking rechtlich final geprüft werden."
      />
      <section className="bg-ink px-6 py-20 sm:px-12 sm:py-24 lg:px-20">
        <div className="mx-auto max-w-[820px] space-y-10 text-sm leading-relaxed text-bone/85">
          <Section title="Verantwortlicher">
            {SITE.legalName}
            <br />
            {SITE.address.street}, {SITE.address.postal} {SITE.address.city}
            <br />
            <a href={`mailto:${SITE.email}`} className="text-bone hover:text-gold">
              {SITE.email}
            </a>
          </Section>
          <Section title="Kontaktformulare">
            Angaben aus Formularen werden zur Bearbeitung der jeweiligen Anfrage
            verarbeitet. Die aktuelle Umsetzung öffnet eine vorbereitete E-Mail
            im E-Mail-Programm des Nutzers.
          </Section>
          <Section title="Newsletter">
            Die Newsletter-Anmeldung ist für Mailchimp vorgesehen und benötigt
            vor Launch eine finale Einwilligungslösung samt Pflichtinformationen.
          </Section>
          <Section title="Externe Dienste">
            Google Maps, willhaben-Links, eingebettete Videos und ein virtueller
            Rundgang müssen im Cookie-/Consent-Setup separat berücksichtigt
            werden.
          </Section>
          <Section title="Cookies">
            Für nicht notwendige Cookies ist ein echtes Opt-in vorzusehen. Der
            konkrete Cookie-Banner muss nach Auswahl der eingesetzten Dienste
            final konfiguriert werden.
          </Section>
        </div>
      </section>
    </>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section>
      <h2 className="eyebrow text-mute">{title}</h2>
      <p className="mt-3">{children}</p>
    </section>
  );
}
