import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getVehicle, getVehicleSlugs } from "@/lib/vehicles";
import { VehicleHero } from "@/components/vehicle-detail/vehicle-hero";
import { SpecTable } from "@/components/vehicle-detail/spec-table";
import { InquiryCta } from "@/components/vehicle-detail/inquiry-cta";
import { SimilarVehicles } from "@/components/vehicle-detail/similar-vehicles";
import { Footer } from "@/components/footer/footer";
import { JsonLd } from "@/components/seo/json-ld";
import { SITE } from "@/lib/site";

const BASE = "https://www.meyer-motorsport.at";

type Params = { slug: string };

export async function generateStaticParams(): Promise<Params[]> {
  return getVehicleSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const vehicle = getVehicle(slug);
  if (!vehicle) return { title: "Fahrzeug nicht gefunden" };
  return {
    title: `${vehicle.name} ${vehicle.subtitle}`,
    description: `${vehicle.name} ${vehicle.subtitle} bei Meyer Motorsport in Wien — handverlesenes Sammlerstück, Preis auf Anfrage.`,
    openGraph: {
      images: [
        {
          url: vehicle.src,
          width: vehicle.width,
          height: vehicle.height,
          alt: vehicle.alt,
        },
      ],
    },
  };
}

export default async function VehicleDetailPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const vehicle = getVehicle(slug);
  if (!vehicle) notFound();

  const vehicleLd = {
    "@context": "https://schema.org",
    "@type": "Vehicle",
    name: `${vehicle.name} ${vehicle.subtitle}`,
    brand: { "@type": "Brand", name: vehicle.brand },
    image: `${BASE}${vehicle.src}`,
    url: `${BASE}/fahrzeuge/${vehicle.slug}/`,
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      priceCurrency: "EUR",
      priceSpecification: {
        "@type": "PriceSpecification",
        priceCurrency: "EUR",
        valueAddedTaxIncluded: true,
        description: "Preis auf Anfrage",
      },
      seller: {
        "@type": "AutoDealer",
        name: SITE.name,
        url: BASE,
      },
    },
  };

  return (
    <>
      <JsonLd data={vehicleLd} />
      <VehicleHero vehicle={vehicle} />

      <section className="bg-ink px-6 py-20 sm:px-12 sm:py-24 lg:px-20">
        <div className="mx-auto grid max-w-[1440px] grid-cols-1 gap-x-16 gap-y-16 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <p className="eyebrow text-mute">Über dieses Fahrzeug</p>
            <div className="serif mt-6 space-y-6 text-lg leading-relaxed text-bone/85 sm:text-xl">
              <p>
                Persönlich verlesen, im Detail dokumentiert, in Wien einsehbar.
                Jedes Fahrzeug in unserem Bestand erfüllt die gleichen
                Kriterien: belegbare Historie, technische Integrität und ein
                Zustand, der den Charakter des Modells erkennen lässt.
              </p>
              <p>
                Vollständige Unterlagen — Servicehefte, Originalrechnungen,
                Vorbesitzerketten — stellen wir gerne im Rahmen einer
                Besichtigung bereit.
              </p>
            </div>

            <div className="mt-12">
              <InquiryCta vehicle={vehicle} />
            </div>
          </div>

          <aside className="lg:col-span-5">
            <SpecTable vehicle={vehicle} />
            <div className="mt-12">
              <p className="eyebrow text-mute">Standort</p>
              <p className="mt-4 text-sm leading-relaxed text-bone">
                Meyer Motorsport
                <br />
                Himberger Strasse 45
                <br />
                1100 Wien, Österreich
              </p>
              <p className="mt-2 text-xs text-mute">
                Einfahrt Franzosenweg 2 · Termin nach Vereinbarung
              </p>
            </div>
          </aside>
        </div>

        <div className="mx-auto mt-16 max-w-[1440px] border-t border-line pt-8">
          <Link
            href="/fahrzeuge/"
            className="text-[11px] uppercase tracking-[0.2em] text-mute hover:text-bone"
          >
            ← Zurück zur Übersicht
          </Link>
        </div>
      </section>

      <SimilarVehicles current={vehicle} />
      <Footer />
    </>
  );
}
