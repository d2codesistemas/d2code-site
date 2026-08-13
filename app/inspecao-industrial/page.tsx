import type { Metadata } from "next";
import InspectionIndustrialContent from "./InspectionIndustrialContent";

export const metadata: Metadata = {
  title: "Integração de sistemas de visão e inspeção industrial | D2 Code",
  description:
    "Software para integrar câmeras e sistemas de visão ao processo, com regras, OK/NOK, rastreabilidade, alarmes, bloqueios e dados de produção.",
  alternates: { canonical: "/inspecao-industrial/" },
  openGraph: {
    title: "Integração de sistemas de visão e inspeção industrial | D2 Code",
    description: "Uma câmera identifica. O software transforma o resultado em processo.",
    url: "/inspecao-industrial/",
    images: ["/og.png"],
  },
};

export default function InspectionIndustrialPage() {
  return <InspectionIndustrialContent />;
}
