import { AnimatedStats } from "./animated-stats";
import { ParallaxImage } from "./parallax-image";
import { getVehicle } from "@/lib/vehicles";

export function Philosophy() {
  const accent = getVehicle("ferrari-458-speciale-aperta")!;

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
            Ruhig, klar, persönlich.{" "}
            <span className="italic text-bone/55">Ein Bestand mit Substanz.</span>
          </h2>
          <div className="mt-10 max-w-prose space-y-5 text-base leading-relaxed text-mute sm:text-lg">
            <p>
              Meyer Motorsport verbindet die Erfahrung eines spezialisierten
              Sportwagenhauses mit einer ruhigen, transparenten Beratung. Jeder
              Wagen wird einzeln geprüft, dokumentiert und in Wien persönlich
              vorgestellt.
            </p>
            <p>
              Ferrari, Porsche und BMW M bleiben hier nicht anonyme Inserate,
              sondern nachvollziehbare Fahrzeuge: Zustand, Historie, Laufleistung
              und Charakter werden vor Ort gemeinsam besprochen.
            </p>
            <p>
              So entsteht ein Autohaus-Erlebnis, das ruhig und direkt wirkt:
              kurze Wege, klare Antworten und ein Bestand, der nicht nach Masse,
              sondern nach Qualität zusammengestellt ist.
            </p>
          </div>
          <AnimatedStats />
        </div>
        <div className="lg:col-span-6">
          <div className="overflow-hidden border border-line bg-ink shadow-[0_24px_70px_rgba(0,0,0,0.45)]">
            <ParallaxImage
              src={accent.src}
              srcAvif={accent.srcAvif}
              alt={accent.alt}
              width={accent.width}
              height={accent.height}
              className="aspect-4/3 w-full bg-stage"
            />
            <div className="grid gap-4 border-t border-line p-5 sm:grid-cols-[1.2fr_0.8fr] sm:p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-bone">
                {accent.name} {accent.subtitle}
              </p>
              <p className="text-sm leading-relaxed text-mute sm:text-right">
                Aktueller Bestand, Besichtigung nach Vereinbarung.
              </p>
            </div>
          </div>
          <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-3">
            <Feature label="Historie" value="nachvollziehbar" />
            <Feature label="Besichtigung" value="in Wien" />
            <Feature label="Anfrage" value="direkt persönlich" />
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
