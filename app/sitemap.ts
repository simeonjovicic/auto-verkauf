import type { MetadataRoute } from "next";
import { getVehicleSlugs } from "@/lib/vehicles";
import { getInsightSlugs } from "@/lib/insights";

export const dynamic = "force-static";

const BASE = "https://www.meyer-motorsport.at";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${BASE}/`, lastModified: now, changeFrequency: "monthly", priority: 1.0 },
    { url: `${BASE}/fahrzeuge/`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE}/marken/`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/service/`, lastModified: now, changeFrequency: "yearly", priority: 0.6 },
    { url: `${BASE}/insights/`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE}/unternehmen/`, lastModified: now, changeFrequency: "yearly", priority: 0.6 },
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

  const insightRoutes: MetadataRoute.Sitemap = getInsightSlugs().map((slug) => ({
    url: `${BASE}/insights/${slug}/`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticRoutes, ...vehicleRoutes, ...insightRoutes];
}
