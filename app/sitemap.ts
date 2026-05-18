import type { MetadataRoute } from "next";
import { getVehicleSlugs } from "@/lib/vehicles";
import { getInsightSlugs } from "@/lib/insights";
import { SITE } from "@/lib/site";

export const dynamic = "force-static";

const BASE = SITE.baseUrl;

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${BASE}/`, lastModified: now, changeFrequency: "monthly", priority: 1.0 },
    { url: `${BASE}/fahrzeuge/`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE}/marken/`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/service/`, lastModified: now, changeFrequency: "yearly", priority: 0.6 },
    { url: `${BASE}/insights/`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE}/unternehmen/`, lastModified: now, changeFrequency: "yearly", priority: 0.6 },
    { url: `${BASE}/videos/`, lastModified: now, changeFrequency: "yearly", priority: 0.4 },
    { url: `${BASE}/virtueller-rundgang/`, lastModified: now, changeFrequency: "yearly", priority: 0.4 },
    { url: `${BASE}/download/`, lastModified: now, changeFrequency: "yearly", priority: 0.4 },
    { url: `${BASE}/kontakt/`, lastModified: now, changeFrequency: "yearly", priority: 0.6 },
    { url: `${BASE}/impressum/`, lastModified: now, changeFrequency: "yearly", priority: 0.2 },
    { url: `${BASE}/datenschutzerklaerung/`, lastModified: now, changeFrequency: "yearly", priority: 0.2 },
    { url: `${BASE}/teilnahmebedingung/`, lastModified: now, changeFrequency: "yearly", priority: 0.2 },
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
