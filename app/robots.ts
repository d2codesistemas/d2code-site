import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://d2code.com.br/sitemap.xml",
    host: "https://d2code.com.br",
  };
}
