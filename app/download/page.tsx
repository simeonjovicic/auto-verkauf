import type { Metadata } from "next";
import { PageHero } from "@/components/layout/page-hero";

export const metadata: Metadata = {
  title: "Download",
  description: "Download-Bereich für Fischerauto Prospekte und Formulare.",
};

const ITEMS = ["Prospekte", "Serviceformulare", "Finanzierungsunterlagen", "Kundeninformationen"];

export default function DownloadPage() {
  return (
    <>
      <PageHero
        eyebrow="Download"
        title="Prospekte und Formulare."
        lede="Der Download-Bereich ist vorbereitet. Finale Dateien können hier als PDF-Liste ergänzt werden."
      />
      <section className="bg-ink px-6 py-20 sm:px-12 lg:px-20">
        <ul className="mx-auto grid max-w-[1000px] grid-cols-1 gap-4 sm:grid-cols-2">
          {ITEMS.map((item) => (
            <li key={item} className="border border-line p-6 text-bone">
              <p className="serif text-2xl">{item}</p>
              <p className="mt-3 text-sm text-mute">PDF vor Launch ergänzen.</p>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
