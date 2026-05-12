import { ParallaxImage } from "./parallax-image";
import { getVehicle } from "@/lib/vehicles";

export function Philosophy() {
  const accent = getVehicle("ferrari-458-speciale-aperta")!;

  return (
    <section
      id="philosophie"
      className="relative border-t border-line bg-ink"
      aria-labelledby="philosophie-title"
    >
      <div className="mx-auto grid max-w-[1440px] grid-cols-1 gap-y-16 px-6 py-24 sm:px-12 lg:grid-cols-12 lg:gap-x-16 lg:px-20 lg:py-32">
        <div className="lg:col-span-7 lg:pr-12">
          <p className="eyebrow">02 · Philosophie</p>
          <h2
            id="philosophie-title"
            className="serif mt-6 text-4xl leading-[1.05] text-bone sm:text-5xl lg:text-6xl"
          >
            Handverlesen. <span className="italic text-bone/70">Substanz</span>{" "}
            statt Spekulation.
          </h2>
          <div className="mt-10 max-w-prose space-y-6 text-mute leading-relaxed">
            <p>
              Seit über vier Jahrzehnten kuratiert Manfred Meyer in Wien eine
              Sammlung, die jenseits des Marktwerts steht. Jeder Wagen wird
              einzeln ausgewählt — auf Zustand, Provenienz und Charakter
              geprüft.
            </p>
            <p>
              Ferrari, Porsche, BMW M — Sportwagen, die ihre Zeit überdauern,
              weil sie nie für den Massengeschmack gebaut wurden. Wir kaufen
              nicht, was sich verkauft. Wir kaufen, was bleibt.
            </p>
            <p>
              Diskretion, vollständige Historie, und ein Bestand, den man nicht
              im Internet zusammensucht: das ist Meyer Motorsport.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-x-10 gap-y-6 border-t border-line pt-10 text-bone sm:grid-cols-4">
            <Stat label="Jahre" value="40+" />
            <Stat label="Fahrzeuge p.a." value="≈ 30" />
            <Stat label="Standort" value="Wien" />
            <Stat label="Marken" value="Ferrari · Porsche · BMW M" />
          </div>
        </div>
        <div className="lg:col-span-5">
          <ParallaxImage
            src={accent.src}
            srcAvif={accent.srcAvif}
            alt={accent.alt}
            width={accent.width}
            height={accent.height}
            className="aspect-[3/4] w-full border border-line"
          />
          <p className="mt-4 text-xs uppercase tracking-[0.2em] text-mute">
            {accent.name} {accent.subtitle} — aus aktuellem Bestand
          </p>
        </div>
      </div>
    </section>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-[11px] uppercase tracking-[0.2em] text-mute">{label}</p>
      <p className="serif mt-2 text-2xl text-bone">{value}</p>
    </div>
  );
}
