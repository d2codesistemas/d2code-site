import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/logos", "/logos/", "/inspecao-industrial", "/inspecao-industrial/"],
    },
    sitemap: "https://d2code.com.br/sitemap.xml",
    host: "https://d2code.com.br",
  };
}
