import { AnimatedStats } from "./animated-stats";
import { ParallaxImage } from "./parallax-image";
import { getVehicle } from "@/lib/vehicles";

export function Philosophy() {
  const accent = getVehicle("ferrari-458-speciale-aperta")!;

  return (
    <section
      id="philosophie"
      className="relative overflow-hidden bg-showroom text-graphite"
      aria-labelledby="philosophie-title"
    >
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-28 sm:h-32 lg:h-36"
        style={{
          background:
            "linear-gradient(180deg, rgba(10,10,10,0.82) 0%, rgba(17,24,32,0.56) 28%, rgba(93,107,120,0.22) 66%, rgba(244,247,249,0) 100%)",
        }}
      />
      <div className="relative mx-auto grid max-w-[1440px] grid-cols-1 gap-y-14 px-6 pb-20 pt-28 sm:px-12 sm:pt-32 lg:grid-cols-12 lg:gap-x-16 lg:px-20 lg:pb-28 lg:pt-36">
        <div className="lg:col-span-6 lg:pr-8">
          <p className="eyebrow !text-signal">Autohaus in Wien</p>
          <h2
            id="philosophie-title"
            className="serif mt-6 text-4xl leading-[1.05] text-graphite sm:text-5xl lg:text-6xl"
          >
            Hell, klar, persönlich.{" "}
            <span className="italic text-steel">Ein Bestand mit Substanz.</span>
          </h2>
          <div className="mt-10 max-w-prose space-y-5 text-base leading-relaxed text-steel sm:text-lg">
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
              So entsteht ein Autohaus-Erlebnis, das heller und direkter wirkt:
              kurze Wege, klare Antworten und ein Bestand, der nicht nach Masse,
              sondern nach Qualität zusammengestellt ist.
            </p>
          </div>
          <AnimatedStats />
        </div>
        <div className="lg:col-span-6">
          <div className="overflow-hidden rounded-[8px] border border-chrome bg-panel shadow-[0_24px_70px_rgba(17,24,32,0.12)]">
            <ParallaxImage
              src={accent.src}
              srcAvif={accent.srcAvif}
              alt={accent.alt}
              width={accent.width}
              height={accent.height}
              className="aspect-[4/3] w-full bg-showroom-soft"
            />
            <div className="grid gap-4 border-t border-chrome p-5 sm:grid-cols-[1.2fr_0.8fr] sm:p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-graphite">
                {accent.name} {accent.subtitle}
              </p>
              <p className="text-sm leading-relaxed text-steel sm:text-right">
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
    <div className="rounded-[8px] border border-chrome bg-panel px-4 py-4">
      <p className="text-[10px] uppercase tracking-[0.2em] text-signal">{label}</p>
      <p className="mt-2 text-sm font-medium text-graphite">{value}</p>
    </div>
  );
}
