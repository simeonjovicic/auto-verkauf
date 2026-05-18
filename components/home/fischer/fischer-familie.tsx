import Link from "next/link";

export function FischerFamilie() {
  return (
    <section
      id="familie"
      className="bg-surface text-anthracite"
      aria-labelledby="fischer-familie-title"
    >
      <div className="mx-auto grid max-w-360 grid-cols-1 gap-12 px-6 py-20 sm:px-12 sm:py-24 lg:grid-cols-12 lg:gap-x-16 lg:px-20 lg:py-28">
        <div className="lg:col-span-5">
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-copper">
            Familie · Seit 1974
          </p>
          <h2
            id="fischer-familie-title"
            className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl"
          >
            Drei Generationen{" "}
            <span className="text-hyundai">unter einem Dach.</span>
          </h2>
          <div className="mt-8 space-y-5 text-base leading-relaxed text-fischer-mute lg:text-[17px]">
            <p>
              Franz und Monika Fischer haben Fischerauto 1974 gegründet. Heute
              führt die Familie das Unternehmen gemeinsam mit Sohn Marko und
              Daniel weiter - als Hyundai-Vertragshändler in Wien-Donaustadt.
            </p>
            <p>
              Das heißt für Sie: kurze Wege, klare Ansprechpartner und eine
              Werkstatt, die das Auto kennt - vom Tag der Übergabe bis zum
              nächsten Service.
            </p>
          </div>

          <blockquote className="mt-9 border-l-2 border-copper bg-paper p-6 text-base leading-relaxed text-anthracite shadow-[0_18px_50px_rgba(26,26,26,0.06)]">
            "Bei uns finden Sie immer ein Familienmitglied, das Zeit und ein
            offenes Ohr für Ihr Anliegen hat."
            <cite className="mt-4 block text-xs font-semibold uppercase not-italic tracking-[0.18em] text-hyundai">
              Familie Fischer
            </cite>
          </blockquote>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link
              href="/unternehmen"
              className="inline-flex items-center justify-center bg-hyundai px-7 py-3.5 text-sm font-semibold tracking-wide text-paper transition-colors hover:bg-hyundai-deep"
            >
              Unser Team
            </Link>
            <Link
              href="/kontakt"
              className="inline-flex items-center justify-center border border-anthracite/15 px-7 py-3.5 text-sm font-semibold tracking-wide text-anthracite transition-colors hover:border-hyundai hover:text-hyundai"
            >
              Termin vereinbaren
            </Link>
          </div>
        </div>

        <div className="lg:col-span-7">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-5">
            <div className="relative aspect-[4/3] overflow-hidden bg-paper shadow-[0_28px_80px_rgba(26,26,26,0.10)] sm:col-span-3">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/fischerauto/team.png"
                alt="Team und Familie Fischer"
                className="absolute inset-0 h-full w-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="grid gap-4 sm:col-span-2">
              <div className="relative min-h-56 overflow-hidden bg-paper shadow-[0_22px_60px_rgba(26,26,26,0.08)]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/fischerauto/schauraum02.png"
                  alt="Fischerauto Schauraum an der Wagramer Straße"
                  className="absolute inset-0 h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="bg-hyundai p-6 text-paper">
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-paper/65">
                  Vor Ort
                </p>
                <p className="mt-3 text-sm leading-relaxed text-paper/82">
                  Ausstellungsflächen im Untergeschoß und auf dem Dach, dazu
                  ein Kundenparkplatz direkt beim Autohaus.
                </p>
              </div>
            </div>
          </div>
          <p className="mt-4 text-xs uppercase tracking-[0.2em] text-anthracite/60">
            Familie & Team Fischerauto
          </p>
        </div>
      </div>
    </section>
  );
}
