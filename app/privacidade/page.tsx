import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Política de Privacidade | D2 Code",
  description: "Como a D2 Code trata dados de navegação e informações de contato.",
  alternates: { canonical: "/privacidade/" },
};

export default function PrivacyPage() {
  return (
    <main className="privacy-page">
      <div className="container">
        <header className="privacy-header">
          <Link href="/" aria-label="D2 Code — página inicial">
            <Image className="logo compact" src="/d2code-logo.png" alt="D2 Code Sistemas" width={1024} height={1024} unoptimized priority />
          </Link>
          <Link href="/">← VOLTAR AO SITE</Link>
        </header>
        <article className="privacy-content">
          <p className="kicker">LEGAL.D2C</p>
          <h1>Política de Privacidade</h1>
          <p>Última atualização: 24 de julho de 2026.</p>

          <h2>Informações de contato</h2>
          <p>Ao entrar em contato por e-mail, WhatsApp ou Microsoft Bookings, você fornece voluntariamente os dados necessários para que a D2 Code responda à sua solicitação e dê continuidade à conversa.</p>

          <h2>Dados de navegação e analytics</h2>
          <p>Com o seu consentimento, utilizamos o Microsoft Clarity para compreender interações gerais com o site, como dispositivo, cliques, rolagem e navegação. Essas informações ajudam a identificar dificuldades de uso e melhorar a experiência.</p>

          <h2>Cookies e preferências</h2>
          <p>O analytics só é carregado após sua aceitação. A preferência escolhida é armazenada no seu navegador. Você pode retirar o consentimento apagando os dados deste site nas configurações do navegador e fazendo uma nova escolha ao acessá-lo.</p>

          <h2>Serviços externos</h2>
          <p>Links para WhatsApp, Microsoft Bookings e LinkedIn levam a serviços externos, sujeitos às políticas de privacidade de cada plataforma.</p>

          <h2>Compartilhamento e retenção</h2>
          <p>A D2 Code não comercializa dados pessoais. Informações de contato são mantidas apenas pelo tempo necessário para atender à solicitação, cumprir obrigações aplicáveis ou preservar registros legítimos da comunicação.</p>

          <h2>Seus direitos e contato</h2>
          <p>Para solicitar informações, correção ou exclusão de dados fornecidos à D2 Code, entre em contato pelo e-mail <a href="mailto:diego.carvalho@d2code.com.br">diego.carvalho@d2code.com.br</a>.</p>
        </article>
      </div>
    </main>
  );
}
