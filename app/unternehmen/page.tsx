import type { Metadata } from "next";
import { PageHero } from "@/components/layout/page-hero";
import { TEAM } from "@/lib/site";

export const metadata: Metadata = {
  title: "Über uns",
  description:
    "Fischerauto ist seit 1974 ein Wiener Familienbetrieb. Hyundai, Mitsubishi, Service, Teile und Finanzierung in Wien-Donaustadt.",
};

const STATS = [
  { value: "1974", label: "Gegründet" },
  { value: "Familie", label: "in mehreren Generationen" },
  { value: "Hyundai", label: "Hauptmarke" },
  { value: "1220", label: "Wien-Donaustadt" },
];

export default function UnternehmenPage() {
  return (
    <>
      <PageHero
        eyebrow="Über uns"
        title="Ihr Wiener Familienbetrieb seit Generationen."
        lede="Fischerauto wurde 1974 von Franz und Monika Fischer gegründet. Heute arbeiten mehrere Generationen und ein erfahrenes Team im vollintegrierten Händlerbetrieb zusammen."
      />

      <section className="bg-ink px-6 py-20 sm:px-12 sm:py-24 lg:px-20">
        <div className="mx-auto grid max-w-[1440px] grid-cols-1 gap-x-16 gap-y-16 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <p className="eyebrow text-mute">Selbstverständnis</p>
            <div className="serif mt-6 space-y-6 text-lg leading-relaxed text-bone/85 sm:text-xl">
              <p>
                Wertvolle Erfahrung, Tradition und Beständigkeit sind bei
                Fischerauto keine Floskeln. Seit 1974 ist der Betrieb in
                Familienhand und wächst mit den Anforderungen seiner Kundinnen
                und Kunden.
              </p>
              <p>
                Das Team ist seit Jahren in der Branche tätig und für Fragen
                rund um Verkauf, Service, Reparatur, Teile, Garantie,
                Finanzierung und Versicherung vorbereitet.
              </p>
              <p>
                Kundenparkplatz, Ausstellungsflächen im Untergeschoß und auf
                dem Dach sowie eine modern ausgestattete Werkstatt machen den
                Standort in der Wagramer Straße zu einem Autohaus mit kurzen
                Wegen.
              </p>
            </div>
          </div>
          <aside className="lg:col-span-5">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/fischerauto/team.png"
              alt="Fischerauto Team im Schauraum"
              width={1000}
              height={606}
              loading="lazy"
              decoding="async"
              className="aspect-[4/3] w-full object-cover"
            />
            <p className="mt-4 text-xs uppercase tracking-[0.2em] text-mute">
              Team Fischerauto · Wagramer Straße 36A
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
            <p className="eyebrow text-mute">Team</p>
            <h2 className="serif mt-3 text-3xl text-bone sm:text-4xl">
              Ansprechpartner.
            </h2>
          </div>
          <div className="space-y-12 lg:col-span-8">
            {TEAM.map((group) => (
              <div key={group.group}>
                <h3 className="serif text-2xl text-bone">{group.group}</h3>
                <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                  {group.people.map((person) => (
                    <div
                      key={person.name}
                      className="border border-line bg-bone/[0.03] p-5"
                    >
                      <p className="font-medium text-bone">{person.name}</p>
                      <p className="mt-1 text-sm text-mute">{person.role}</p>
                      {"contact" in person && person.contact ? (
                        <p className="mt-3 text-xs leading-relaxed text-bone/75">
                          {person.contact}
                        </p>
                      ) : null}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
