import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://d2code.com.br/",
      lastModified: new Date("2026-07-24"),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: "https://d2code.com.br/privacidade/",
      lastModified: new Date("2026-07-24"),
      changeFrequency: "yearly",
      priority: 0.2,
    },
  ];
}
