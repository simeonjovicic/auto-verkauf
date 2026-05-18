import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/layout/page-hero";

export const metadata: Metadata = {
  title: "Videos & Rundgang",
  description:
    "Videos, virtueller Rundgang, Downloads und Newsletter-Einstieg für Fischerauto in Wien-Donaustadt.",
};

const MEDIA_AREAS = [
  {
    t: "Videos",
    d: "Modellvideos, Aktionsclips und Einblicke aus dem Autohaus können hier gebündelt werden.",
  },
  {
    t: "Virtueller Rundgang",
    d: "Der Rundgang durchs Autohaus wird als eigener Einstieg vorbereitet, sobald der neue Embed-Code vorliegt.",
  },
  {
    t: "Downloads",
    d: "Prospekte, Formulare und Kundeninformationen erhalten einen zentralen Download-Bereich.",
  },
  {
    t: "Newsletter",
    d: "Die bestehende Mailchimp-Anmeldung wird mit DSGVO-Zustimmung in die neue Seite integriert.",
  },
];

export default function MedienPage() {
  return (
    <>
      <PageHero
        eyebrow="Einblicke"
        title="Videos, Rundgang und Downloads."
        lede="Die Inhalte der alten Unterseiten werden auf der neuen Seite sinnvoll gebündelt: Videos, virtueller Rundgang, Download-Bereich und Newsletter-Anmeldung."
      />

      <section className="relative bg-ink">
        <div className="relative h-[60vh] min-h-[420px] w-full overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/fischerauto/team.png"
            alt="Fischerauto Team im Schauraum"
            width={1000}
            height={606}
            draggable={false}
            className="h-full w-full object-cover select-none"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-ink/60"
          />
        </div>
      </section>

      <section className="bg-ink px-6 py-20 sm:px-12 sm:py-24 lg:px-20">
        <div className="mx-auto grid max-w-[1440px] grid-cols-1 gap-x-16 gap-y-16 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="eyebrow text-mute">Unterseiten</p>
            <h2 className="serif mt-3 text-balance text-4xl text-bone sm:text-5xl">
              Alles, was nicht täglich wechselt.
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-x-12 gap-y-12 sm:grid-cols-2 lg:col-span-7">
            {MEDIA_AREAS.map((l) => (
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
            <p className="eyebrow text-mute">Newsletter</p>
            <h2 className="serif mt-3 text-3xl text-bone sm:text-4xl">
              Anmeldung vorbereiten.
            </h2>
            <p className="mt-6 text-sm leading-relaxed text-mute">
              Felder: Vorname, Nachname, E-Mail und DSGVO-Zustimmung. Die
              technische Anbindung bleibt Mailchimp.
            </p>
          </div>
          <div className="border border-line p-6 lg:col-span-8 sm:p-8">
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
              {["Vorname", "Nachname", "E-Mail ·"].map((label) => (
                <label key={label}>
                  <span className="eyebrow text-mute">{label}</span>
                  <input
                    className="mt-2 w-full border border-line bg-transparent px-4 py-3 text-sm text-bone focus:border-bone focus:outline-none"
                    disabled
                  />
                </label>
              ))}
            </div>
            <label className="mt-6 flex gap-3 text-sm leading-relaxed text-mute">
              <input className="mt-1 h-4 w-4 accent-gold" disabled type="checkbox" />
              <span>DSGVO-Zustimmung · Mailchimp-Anbindung vor Launch einsetzen.</span>
            </label>
          </div>
        </div>
      </section>

      <section className="bg-ink px-6 py-20 sm:px-12 sm:py-24 lg:px-20">
        <div className="mx-auto grid max-w-[1440px] grid-cols-1 gap-x-16 gap-y-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <p className="eyebrow text-mute">Nächster Schritt</p>
            <h2 className="serif mt-3 text-balance text-4xl text-bone sm:text-5xl">
              Embed-Codes und Download-Dateien ergänzen.
            </h2>
            <p className="mt-6 max-w-[52ch] text-base leading-relaxed text-mute sm:text-lg">
              Sobald Rundgang, Videos, Prospekte und Formulare vorliegen, können
              sie hier ohne Strukturänderung eingesetzt werden.
            </p>
          </div>
          <div className="flex flex-col gap-3 lg:col-span-5 lg:items-end lg:justify-end">
            <Link
              href="/kontakt/"
              className="inline-flex items-center justify-center bg-bone px-8 py-4 text-[11px] uppercase tracking-[0.2em] text-ink transition-colors hover:bg-gold"
            >
              Kontakt aufnehmen →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
