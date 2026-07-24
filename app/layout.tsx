import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "D2 Code | Software sob medida",
  description:
    "Sistemas, integrações e automações sob medida para transformar desafios reais em soluções confiáveis.",
  metadataBase: new URL("https://d2code.com.br"),
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
  return (
    <html lang="pt-BR">
      <body>{children}</body>
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
