import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getVehicle, getVehicleSlugs } from "@/lib/vehicles";
import { VehicleDetailContent } from "@/components/vehicle-detail/vehicle-detail-content";
import { SimilarVehicles } from "@/components/vehicle-detail/similar-vehicles";
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
      <VehicleDetailContent vehicle={vehicle} />
      <SimilarVehicles current={vehicle} />
    </>
  );
}
