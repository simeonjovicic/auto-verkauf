import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://www.meyer-motorsport.at/sitemap.xml",
    host: "https://www.meyer-motorsport.at",
  };
}
