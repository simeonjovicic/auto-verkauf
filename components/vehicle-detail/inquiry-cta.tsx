import Link from "next/link";
import { SITE } from "@/lib/site";
import type { Vehicle } from "@/lib/vehicles";

export function InquiryCta({ vehicle }: { vehicle: Vehicle }) {
  const subject = `Anfrage: ${vehicle.name} ${vehicle.subtitle}`;
  const body = `Sehr geehrtes Fischerauto-Team,\n\nich interessiere mich für ${vehicle.name} ${vehicle.subtitle}.\n\nBitte senden Sie mir weitere Informationen und einen Termin für Beratung oder Probefahrt.\n\nMit freundlichen Grüßen,\n`;
  const mailto = `mailto:${SITE.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  return (
    <div className="border-y border-fischer-line py-10">
      <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-hyundai">Interesse</p>
      <p className="mt-4 text-3xl font-semibold leading-tight tracking-tight text-anthracite">
        Beratung, Probefahrt oder Angebot direkt anfragen.
      </p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Link
          href={`/kontakt/?fahrzeug=${vehicle.slug}`}
          className="inline-flex items-center justify-center bg-hyundai px-8 py-4 text-[11px] font-semibold uppercase tracking-[0.2em] text-paper transition-colors hover:bg-hyundai-deep"
        >
          Anfrage senden
        </Link>
        <a
          href={mailto}
          className="inline-flex items-center justify-center border border-fischer-line px-8 py-4 text-[11px] font-semibold uppercase tracking-[0.2em] text-anthracite transition-colors hover:border-hyundai hover:text-hyundai"
        >
          E-Mail direkt
        </a>
        <a
          href={`tel:${SITE.phone.replace(/\s/g, "")}`}
          className="inline-flex items-center justify-center border border-fischer-line px-8 py-4 text-[11px] font-semibold uppercase tracking-[0.2em] text-anthracite transition-colors hover:border-hyundai hover:text-hyundai"
        >
          {SITE.phoneDisplay}
        </a>
      </div>
    </div>
  );
}
