import type { Metadata } from "next";
import AnalyticsConsent from "./AnalyticsConsent";
import "./globals.css";

export const metadata: Metadata = {
  title: "D2 Code | Software sob medida e automação industrial",
  description:
    "Sistemas sob medida, integrações industriais, automação, rastreabilidade e evolução de sistemas para operações que exigem confiabilidade.",
  metadataBase: new URL("https://d2code.com.br"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "D2 Code | Software sob medida e automação industrial",
    description: "Software sob medida para operações que não podem parar.",
    url: "https://d2code.com.br",
    siteName: "D2 Code",
    locale: "pt_BR",
    type: "website",
    images: ["/og.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "D2 Code | Software sob medida e automação industrial",
    description: "Software sob medida para operações que não podem parar.",
    images: ["/og.png"],
  },
  icons: {
    icon: [{ url: "/d2code-logo.png", type: "image/png" }],
    apple: "/d2code-logo.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const organizationData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "D2 Code Sistemas",
    alternateName: "D2 Code",
    url: "https://d2code.com.br",
    logo: "https://d2code.com.br/d2code-logo.png",
    foundingDate: "2025",
    email: "diego.carvalho@d2code.com.br",
    telephone: "+55 11 95026-3057",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Atibaia",
      addressRegion: "SP",
      addressCountry: "BR",
    },
    sameAs: ["https://www.linkedin.com/company/d2code"],
  };

  return (
    <html lang="pt-BR">
      <body>
        {children}
        <AnalyticsConsent />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationData) }}
        />
      </body>
    </html>
  );
}
