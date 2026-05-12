import type { MetadataRoute } from "next";
import { getVehicleSlugs } from "@/lib/vehicles";

export const dynamic = "force-static";

const BASE = "https://www.meyer-motorsport.at";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${BASE}/`, lastModified: now, changeFrequency: "monthly", priority: 1.0 },
    { url: `${BASE}/fahrzeuge/`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE}/unternehmen/`, lastModified: now, changeFrequency: "yearly", priority: 0.6 },
    { url: `${BASE}/vips/`, lastModified: now, changeFrequency: "yearly", priority: 0.5 },
    { url: `${BASE}/stunts/`, lastModified: now, changeFrequency: "yearly", priority: 0.5 },
    { url: `${BASE}/kontakt/`, lastModified: now, changeFrequency: "yearly", priority: 0.6 },
    { url: `${BASE}/impressum/`, lastModified: now, changeFrequency: "yearly", priority: 0.2 },
  ];

  const vehicleRoutes: MetadataRoute.Sitemap = getVehicleSlugs().map((slug) => ({
    url: `${BASE}/fahrzeuge/${slug}/`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  return [...staticRoutes, ...vehicleRoutes];
}
