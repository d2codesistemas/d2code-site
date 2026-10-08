"use client";

import { useState } from "react";
import Image from "next/image";
import { trackClarityEvent } from "./clarity";
import styles from "./home-preview.module.css";

const WHATSAPP = "https://wa.me/5511950263057?text=Olá%2C%20Diego!%20Gostaria%20de%20conversar%20sobre%20um%20projeto%20para%20minha%20empresa.";
const BOOKINGS = "https://outlook.office.com/bookwithme/user/7e13239b8ae54948829532ecc6f73f20@d2code.com.br/meetingtype/FCKJ91NRhE2z8E1pRqqKiQ2?anonymous&ismsaljsauthenabled";

const method = [
  ["Capturar", "Receber códigos, medições e resultados de equipamentos."],
  ["Validar", "Conferir os dados com as regras e o contexto da operação."],
  ["Agir", "Liberar, alertar, bloquear ou comandar, conforme a solução definida."],
  ["Registrar", "Guardar eventos, resultados e ocorrências para consulta."],
  ["Integrar", "Trocar dados com o ERP e outros sistemas."],
];
const implementation = [
  ["Entender", "Mapear o fluxo, as dificuldades e o resultado esperado."],
  ["Desenhar", "Definir regras, integrações e o primeiro escopo."],
  ["Construir", "Desenvolver em ciclos curtos, com validações frequentes."],
  ["Implantar", "Testar no contexto da operação e preparar a entrada em uso."],
  ["Acompanhar", "Verificar o funcionamento inicial e orientar os ajustes previstos no escopo."],
];
const applications = [
  { title: "O código lido corresponde ao produto da ordem?", text: "Comparar a leitura com a ordem e o produto esperado. Quando houver divergência, aplicar a ação definida e registrar a ocorrência.", flow: ["Leitura", "Ordem / produto", "Validação", "Ação"], symbol: "01" },
  { title: "A impressão está coerente com o que está sendo produzido?", text: "Usar os dados da ordem e as regras do processo para preparar a impressão. Ao identificar uma inconsistência, alertar, bloquear ou comandar a ação prevista e registrar o evento.", flow: ["Ordem / impressão", "Verificação", "Ação", "Registro"], symbol: "02" },
  { title: "É possível relacionar unidade, lote, serial e caixa?", text: "Associar identificações e eventos ao longo do fluxo para consultar a origem e o destino do produto e trocar informações com o ERP ou sistema da empresa.", flow: ["Unidade", "Lote / serial", "Caixa", "Sistema"], symbol: "03" },
];
const demos = [
  { title: "Captura e rastreabilidade", text: "Códigos lidos pela câmera, recebidos e validados pelo sistema, com registro e impressão automática da etiqueta.", src: "/videos/captura-rastreabilidade.mp4", poster: "/videos/captura-rastreabilidade.jpg", tag: "CAPTURA → REGISTRO → IMPRESSÃO" },
  { title: "Integração com Videojet", text: "Dados da ordem e do lote enviados pelo sistema ao equipamento, reduzindo a necessidade de digitação.", src: "/videos/integracao-videojet.mp4", poster: "/videos/integracao-videojet.jpg", tag: "ORDEM → SISTEMA → EQUIPAMENTO" },
];

function Logo() {
  return <Image src="/d2code-logo-home.webp" alt="D2 Code Sistemas" width={256} height={256} className="logo compact" unoptimized priority />;
}
function Heading({ label, title, subtitle }: { label: string; title: string; subtitle?: string }) {
  return <div className="hp-heading"><p className="hp-label">{label}</p><h2>{title}</h2>{subtitle && <p className="hp-subtitle">{subtitle}</p>}</div>;
}
function WhatsApp({ children }: { children: React.ReactNode }) {
  return <a className="hp-button" href={WHATSAPP} target="_blank" rel="noreferrer" onClick={() => trackClarityEvent("whatsapp_contato")}>{children}<span aria-hidden="true">↗</span></a>;
}
function Steps({ items }: { items: string[][] }) {
  return <ol className="hp-steps">{items.map(([title, text], index) => <li key={title}><span className="hp-number">0{index + 1}</span><h3>{title}</h3><p>{text}</p></li>)}</ol>;
}

export default function Home() {
  const [menu, setMenu] = useState(false);
  const [playing, setPlaying] = useState<string | null>(null);
  const close = () => setMenu(false);
  return <main className={styles.preview}>
    <header className="hp-header">
      <a href="#inicio" aria-label="D2 Code — início" onClick={close}><Logo /></a>
      <button className="hp-menu" type="button" aria-label={menu ? "Fechar menu" : "Abrir menu"} aria-expanded={menu} aria-controls="menu-principal" onClick={() => setMenu(!menu)}><span /><span /></button>
      <nav id="menu-principal" className={menu ? "hp-open" : ""} aria-label="Navegação principal">
        <a href="#aplicacoes" onClick={() => { trackClarityEvent("ver_servicos"); close(); }}>Aplicações</a><a href="#experiencia" onClick={close}>Experiência</a><a href="#implantacao" onClick={close}>Implantação</a><a href="#sobre" onClick={close}>Sobre</a>
        <a className="hp-nav-contact" href="#contato" onClick={() => { trackClarityEvent("cta_conversa"); close(); }}>Falar com a D2 ↗</a>
      </nav>
    </header>
    <section className="hp-hero" id="inicio">
      <div className="container hp-hero-grid">
        <div><p className="hp-label">INTEGRAÇÃO ENTRE EQUIPAMENTOS, PROCESSO E SISTEMAS</p>
          <h1>Menos conferência manual.<br /><span>Mais controle entre equipamento e sistemas.</span></h1>
          <p className="hp-lead">Conectamos equipamentos, regras do processo e sistemas para reduzir digitação, erros e retrabalho.</p>
          <div className="hp-actions"><WhatsApp>Falar sobre minha operação</WhatsApp><a className="hp-text-link" href="#aplicacoes" onClick={() => trackClarityEvent("ver_servicos")}>Ver aplicações <span aria-hidden="true">↓</span></a></div>
        </div>
        <div className="hp-hero-diagram" aria-label="Equipamento conectado nos dois sentidos ao software D2 e suas regras, conectado ao ERP e sistemas">
          <p className="hp-diagram-label">ONDE A D2 ENTRA</p>
          <div className="hp-mini-node"><span className="hp-node-icon" aria-hidden="true">▥</span><strong>EQUIPAMENTO</strong><small>Leituras · eventos · comandos</small></div>
          <div className="hp-connector" aria-hidden="true">↕</div>
          <div className="hp-mini-node hp-d2-node"><span className="hp-chip">D2 CODE</span><strong>SOFTWARE D2 + REGRAS</strong><small>Validar · agir · registrar</small></div>
          <div className="hp-connector" aria-hidden="true">↕</div>
          <div className="hp-mini-node"><span className="hp-node-icon" aria-hidden="true">▤</span><strong>ERP / SISTEMAS</strong><small>Contexto · dados · histórico</small></div>
        </div>
      </div>
    </section>
    <section className="hp-section hp-role" id="papel">
      <div className="container">
        <Heading label="01 / O PAPEL DA D2" title="Entre o equipamento e o sistema, as regras da sua operação." subtitle="Conectamos o que acontece na linha ao contexto que a empresa precisa para decidir e registrar." />
        <div className="hp-role-grid">
          <article><span className="hp-label">EQUIPAMENTO</span><h3>O que acontece na operação.</h3><p>Gera leituras, resultados e eventos; também pode receber dados e comandos.</p></article>
          <span className="hp-role-arrow" aria-hidden="true">↔</span>
          <article className="hp-role-d2"><span className="hp-label">SOFTWARE D2 + REGRAS</span><h3>A informação vira ação.</h3><p>Usa o contexto da operação para validar informações, definir ações e registrar ocorrências.</p></article>
          <span className="hp-role-arrow" aria-hidden="true">↔</span>
          <article><span className="hp-label">ERP / SISTEMAS</span><h3>O contexto da empresa.</h3><p>Fornecem ordens, produtos e lotes; recebem os registros e resultados combinados no projeto.</p></article>
        </div>
        <p className="hp-infrastructure"><span aria-hidden="true">↳</span>Avaliamos o que pode ser aproveitado da infraestrutura existente antes de propor novas integrações ou substituições.</p>
      </div>
    </section>
    <section className="hp-section hp-method" id="metodo"><div className="container">
      <Heading label="02 / DO DADO À AÇÃO" title="Capturar. Validar. Agir. Registrar. Integrar." subtitle="A informação precisa chegar à ação certa e deixar um histórico útil." />
      <Steps items={method} /><p className="hp-note">O fluxo é definido conforme o processo e os recursos disponíveis.</p>
    </div></section>
    <section className="hp-section" id="aplicacoes"><div className="container">
      <Heading label="03 / PROBLEMAS QUE PODEMOS TRATAR" title="Três situações em que a integração faz diferença." subtitle="Exemplos de aplicação. As regras e ações são definidas para cada operação." />
      <div className="hp-applications">{applications.map(app => <article key={app.symbol}><span className="hp-number">{app.symbol}</span><h3>{app.title}</h3><p>{app.text}</p><ol className="hp-flow" aria-label="Fluxo da aplicação">{app.flow.map(item => <li key={item}>{item}</li>)}</ol></article>)}</div>
      <div className="hp-section-action"><WhatsApp>Tenho um desafio parecido</WhatsApp></div>
    </div></section>
    <section className="hp-section hp-proof" id="experiencia"><div className="container">
      <Heading label="04 / EXPERIÊNCIA APLICADA" title="Software, dados e equipamentos trabalhando no mesmo fluxo." subtitle="Demonstrações ajudam a visualizar como regras, registros e ações se conectam na operação." />
      <div className="hp-demos">{demos.map(demo => <article key={demo.src}>
        <div className="hp-media">{playing === demo.src ? <video controls playsInline autoPlay preload="metadata" poster={demo.poster} aria-label={demo.title}><source src={demo.src} type="video/mp4" />Seu navegador não suporta a reprodução deste vídeo.</video> : <button type="button" className="hp-play" onClick={() => setPlaying(demo.src)} aria-label={"Reproduzir " + demo.title}><span className="hp-poster-photo"><Image src={demo.poster} alt="" width={720} height={1280} unoptimized /></span><span className="hp-poster-copy"><span className="hp-poster-label">DEMONSTRAÇÃO</span><strong>{demo.title}</strong><span className="hp-poster-action"><span className="hp-play-icon" aria-hidden="true">▶</span><span>Reproduzir vídeo</span></span></span></button>}</div>
        <p className="hp-label hp-demo-tag">{demo.tag}</p><h3>{demo.title}</h3><p>{demo.text}</p>
      </article>)}</div>
      <div className="hp-tech"><p>Tecnologias e equipamentos presentes no nosso repertório técnico</p><strong><span className="hp-tech-pair">Keyence <span>·</span> Cognex</span><span className="hp-tech-between">·</span><span className="hp-tech-pair">Videojet <span>·</span> Zebra</span></strong></div>
    </div></section>
    <section className="hp-section" id="implantacao"><div className="container">
      <Heading label="05 / COMO TRABALHAMOS" title="Começar pelo processo. Implantar com validação." subtitle="Um escopo claro, construído e conferido com quem usa a solução." /><Steps items={implementation} />
    </div></section>
    <section className="hp-section hp-about" id="sobre"><div className="container hp-about-grid">
      <Heading label="06 / SOBRE A D2 CODE" title="Experiência técnica próxima da operação." />
      <div><p>A D2 Code é uma empresa de Atibaia especializada em software, integrações e evolução de sistemas para operações que dependem de informação correta no momento certo.</p><p>Trabalhamos conectando sistemas, equipamentos e regras do processo para criar soluções adequadas à realidade de cada operação.</p><div className="hp-about-labels"><span>ATIBAIA · SP</span><span>SOFTWARE SOB MEDIDA</span></div></div>
    </div></section>
    <section className="hp-section hp-contact" id="contato"><div className="container">
      <Heading label="07 / VAMOS CONVERSAR" title="Onde sua operação ainda exige conferir ou digitar à mão?" subtitle="Vale conversar quando leituras, impressão ou registros dependem de conferências repetitivas — ou quando equipamentos e sistemas precisam trocar informações." />
      <div className="hp-contact-grid"><div><p>Conte qual é o processo, quais equipamentos e sistemas estão envolvidos e onde aparece o erro, o retrabalho ou a intervenção manual. Na primeira conversa, buscamos entender o cenário e avaliar se faz sentido avançar para um escopo.</p><div className="hp-contact-prompts"><span>O PROCESSO</span><span>OS EQUIPAMENTOS E SISTEMAS</span><span>A DIFICULDADE</span></div></div><div className="hp-contact-actions"><WhatsApp>Falar pelo WhatsApp</WhatsApp><a className="hp-agenda" href={BOOKINGS} target="_blank" rel="noreferrer" onClick={() => trackClarityEvent("bookings_contato")}>Agendar uma conversa de 30 minutos <span aria-hidden="true">↗</span></a><address><strong>Diego Carvalho</strong><span>Fundador e responsável técnico</span><a href="mailto:diego.carvalho@d2code.com.br" onClick={() => trackClarityEvent("email_contato")}>diego.carvalho@d2code.com.br</a><a href={WHATSAPP} target="_blank" rel="noreferrer" onClick={() => trackClarityEvent("whatsapp_contato")}>(11) 95026-3057</a></address></div></div>
    </div></section>
    <footer className="hp-footer"><div className="container"><div className="hp-footer-top"><a href="#inicio" aria-label="D2 Code — voltar ao início"><Logo /></a><p>D2 CODE SISTEMAS LTDA.<br />ATIBAIA — SP</p><div><a href="mailto:diego.carvalho@d2code.com.br" onClick={() => trackClarityEvent("email_contato")}>E-mail ↗</a><a href={WHATSAPP} target="_blank" rel="noreferrer" onClick={() => trackClarityEvent("whatsapp_contato")}>WhatsApp ↗</a><a href="https://www.linkedin.com/company/d2code" target="_blank" rel="noreferrer">LinkedIn ↗</a></div></div><div className="hp-footer-bottom"><span>© {new Date().getFullYear()} D2 CODE SISTEMAS LTDA.</span><a href="/privacidade/">Privacidade</a><a href="#inicio">Voltar ao topo ↑</a></div></div></footer>
  </main>;
}
