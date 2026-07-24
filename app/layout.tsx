import type { Metadata } from "next";
import "./globals.css";
export const metadata:Metadata={title:"D2 Code | Software industrial sob medida",description:"Sistemas, integrações e automações conectados à realidade da sua operação.",metadataBase:new URL("https://d2code.com.br"),openGraph:{title:"D2 Code | Software industrial sob medida",description:"Tecnologia conectada à realidade da operação.",url:"https://d2code.com.br",siteName:"D2 Code",locale:"pt_BR",type:"website"},icons:{icon:"/favicon.svg"}};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="pt-BR"><body>{children}</body></html>}
