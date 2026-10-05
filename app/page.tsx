import type { Metadata } from "next";
import HomeContent from "./HomeContent";

const title = "D2 Code | Software industrial e integração de equipamentos";
const description =
  "Software industrial para integrar equipamentos, regras do processo e sistemas, reduzindo digitação, erros e retrabalho na operação.";

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    url: "https://d2code.com.br",
    siteName: "D2 Code",
    locale: "pt_BR",
    type: "website",
    images: ["/og.png"],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/og.png"],
  },
};

export default function Home() {
  return <HomeContent />;
}
