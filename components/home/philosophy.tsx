import { AnimatedStats } from "./animated-stats";

export function Philosophy() {
  return (
    <section
      id="philosophie"
      className="relative overflow-hidden border-t border-line bg-ink text-bone"
      aria-labelledby="philosophie-title"
    >
      <div className="relative mx-auto grid max-w-360 grid-cols-1 gap-y-14 px-6 pb-20 pt-24 sm:px-12 sm:pt-28 lg:grid-cols-12 lg:gap-x-16 lg:px-20 lg:pb-28 lg:pt-32">
        <div className="lg:col-span-6 lg:pr-8">
          <p className="eyebrow text-gold!">Autohaus in Wien</p>
          <h2
            id="philosophie-title"
            className="serif mt-6 text-4xl leading-[1.05] text-bone sm:text-5xl lg:text-6xl"
          >
            Seit 1974 in Familienhand.{" "}
            <span className="italic text-bone/55">Mit kurzen Wegen für alles rund ums Auto.</span>
          </h2>
          <div className="mt-10 max-w-prose space-y-5 text-base leading-relaxed text-mute sm:text-lg">
            <p>
              Fischerauto wurde von Franz und Monika Fischer gegründet und ist
              bis heute ein Wiener Betrieb in Familienhand. Mehrere Generationen
              arbeiten am Standort in der Wagramer Straße Hand in Hand.
            </p>
            <p>
              Verkauf, Service, Teile, Finanzierung, Leasing und
              Versicherungsberatung liegen unter einem Dach. Dadurch bleiben
              Ansprechpartner, Wege und Entscheidungen klar.
            </p>
            <p>
              Ausstellungsflächen im Untergeschoß und auf dem Dach, ein
              Kundenparkplatz und ein eingespieltes Team sorgen für eine
              persönliche, familiäre Atmosphäre.
            </p>
          </div>
          <AnimatedStats />
        </div>
        <div className="lg:col-span-6">
          <div className="overflow-hidden border border-line bg-ink shadow-[0_24px_70px_rgba(0,0,0,0.45)]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/fischerauto/team.png"
              alt="Fischerauto Team im Schauraum in Wien"
              width={1000}
              height={606}
              loading="lazy"
              decoding="async"
              className="aspect-4/3 w-full bg-stage object-cover"
            />
            <div className="grid gap-4 border-t border-line p-5 sm:grid-cols-[1.2fr_0.8fr] sm:p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-bone">
                Familie und Team Fischerauto
              </p>
              <p className="text-sm leading-relaxed text-mute sm:text-right">
                Persönliche Beratung in Wien-Donaustadt.
              </p>
            </div>
          </div>
          <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-3">
            <Feature label="Seit" value="1974" />
            <Feature label="Marken" value="Hyundai & Mitsubishi" />
            <Feature label="Service" value="alle Fabrikate" />
          </div>
        </div>
      </div>
    </section>
  );
}

function Feature({ label, value }: { label: string; value: string }) {
  return (
    <div className="border border-line bg-ink px-4 py-4">
      <p className="text-[10px] uppercase tracking-[0.22em] text-gold">{label}</p>
      <p className="mt-2 text-sm font-medium text-bone">{value}</p>
    </div>
  );
}
