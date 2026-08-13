import type { Metadata } from "next";
import InspectionIndustrialContent from "./InspectionIndustrialContent";

export const metadata: Metadata = {
  title: "Inspeção industrial com IA e visão computacional | D2 Code",
  description:
    "Software e integração para inspeção industrial, visão computacional, IA, controle de qualidade e rastreabilidade em linhas de produção.",
  alternates: { canonical: "/inspecao-industrial/" },
  openGraph: {
    title: "Inspeção industrial com IA e visão computacional | D2 Code",
    description: "Uma câmera identifica. O software transforma o resultado em processo.",
    url: "/inspecao-industrial/",
    images: ["/og.png"],
  },
};

export default function InspectionIndustrialPage() {
  return <InspectionIndustrialContent />;
}
