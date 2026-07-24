import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "D2 Code | Software sob medida",
  description:
    "Sistemas, integrações e automações sob medida para transformar desafios reais em soluções confiáveis.",
  metadataBase: new URL("https://d2code.com.br"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "D2 Code | Software sob medida",
    description: "Tecnologia feita para o seu negócio avançar.",
    url: "https://d2code.com.br",
    siteName: "D2 Code",
    locale: "pt_BR",
    type: "website",
    images: ["/d2code-logo.png"],
  },
  icons: { icon: "/d2code-logo.png" },
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationData) }}
        />
      </body>
      <Script id="microsoft-clarity" strategy="afterInteractive">
        {`
          (function(c,l,a,r,i,t,y){
            c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
            t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
            y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
          })(window, document, "clarity", "script", "xrms869m9l");
        `}
      </Script>
    </html>
  );
}
