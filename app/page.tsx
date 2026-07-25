"use client";

import { useState } from "react";
import Image from "next/image";

const WHATSAPP =
  "https://wa.me/5511950263057?text=Olá%2C%20Diego!%20Gostaria%20de%20conversar%20sobre%20um%20projeto%20para%20minha%20empresa.";
const BOOKINGS =
  "https://outlook.office.com/book/D2Code@d2codesistemas.com.br/?ismsaljsauthenabled";

const services = [
  ["01", "Sistemas sob medida", "Aplicações web, desktop e serviços desenvolvidos para a realidade do seu negócio."],
  ["02", "Integrações industriais", "Câmeras, leitores, impressoras, CLPs, RFID, ERPs, APIs e bancos de dados trabalhando no mesmo fluxo."],
  ["03", "Automação de processos", "Menos tarefas manuais, menos retrabalho e mais controle sobre a operação."],
  ["04", "Inspeção & qualidade", "Validação automática, leitura de códigos, visão computacional e bloqueio de falhas no processo."],
  ["05", "Dados & rastreabilidade", "Controle de lotes, seriais, produção, movimentações e histórico operacional."],
  ["06", "Evolução de sistemas", "Modernização e continuidade para soluções que já fazem parte da empresa."],
];

const operationAreas = [
  ["GES", "GESTÃO E PROCESSOS", "Sistemas internos, aprovações, indicadores e controle operacional."],
  ["INT", "INTEGRAÇÃO DE SISTEMAS", "ERPs, APIs, bancos de dados e sistemas legados conectados."],
  ["AUT", "AUTOMAÇÃO INDUSTRIAL", "Equipamentos, produção, impressão, leitura e controle de linha."],
  ["TRC", "RASTREABILIDADE E QUALIDADE", "Controle por lote, serial, inspeção, rejeição e histórico completo."],
];

const solutions = [
  ["01", "Rastreabilidade industrial", "Controle de ordens, lotes, seriais, produção, refugo e qualidade."],
  ["02", "Integração com equipamentos", "Comunicação com câmeras, leitores, impressoras, CLPs e dispositivos de identificação."],
  ["03", "Inspeção automática", "Validação de códigos, conteúdo, presença, posicionamento e conformidade de produtos."],
  ["04", "Impressão e serialização", "Geração, envio e controle de dados variáveis para impressoras industriais e etiquetas."],
  ["05", "RFID e identificação", "Leitura, gravação e rastreamento de produtos, embalagens e movimentações."],
  ["06", "Modernização de sistemas", "Evolução de aplicações legadas sem interromper operações já consolidadas."],
];

const technologies = [
  "C# e .NET",
  "Delphi",
  "SQL Server",
  "PostgreSQL",
  "Firebird",
  "Serviços Windows",
  "APIs REST",
  "Modbus TCP",
  "Zebra",
  "Keyence",
  "Cognex",
  "Videojet",
  "RFID",
  "Leitores industriais",
  "Impressoras industriais",
  "Câmeras e visão computacional",
];

const steps = [
  ["01", "Entender", "Mapeamos a operação, os riscos, as necessidades e o resultado esperado."],
  ["02", "Projetar", "Desenhamos a solução, as integrações e um escopo claro."],
  ["03", "Construir", "Desenvolvemos em ciclos curtos, com validações frequentes."],
  ["04", "Implantar", "Colocamos a solução em operação com testes, documentação e acompanhamento."],
];

function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <Image
      className={compact ? "logo compact" : "logo"}
      src="/d2code-logo.png"
      alt="D2 Code Sistemas"
      width={1024}
      height={1024}
      unoptimized
      priority={compact}
    />
  );
}

function SectionContact({ text }: { text: string }) {
  return (
    <aside className="section-contact" aria-label="Entre em contato com a D2 Code">
      <div className="container section-contact-layout">
        <p><span>◆</span>{text}</p>
        <div className="section-contact-actions">
          <a href={WHATSAPP} target="_blank" rel="noreferrer">
            FALAR PELO WHATSAPP <b>→</b>
          </a>
          <a href={BOOKINGS} target="_blank" rel="noreferrer">
            AGENDAR CONVERSA <b>↗</b>
          </a>
        </div>
      </div>
    </aside>
  );
}

export default function Home() {
  const [menu, setMenu] = useState(false);
  const closeMenu = () => setMenu(false);

  return (
    <main>
      <header>
        <a href="#inicio" aria-label="D2 Code — início" onClick={closeMenu}>
          <Logo compact />
        </a>
        <button
          className="menu"
          onClick={() => setMenu(!menu)}
          aria-label={menu ? "Fechar menu" : "Abrir menu"}
          aria-expanded={menu}
          aria-controls="menu-principal"
        >
          <span />
          <span />
        </button>
        <nav id="menu-principal" className={menu ? "open" : ""} aria-label="Navegação principal">
          <a href="#servicos" onClick={closeMenu}>SERVIÇOS</a>
          <a href="#atuacao" onClick={closeMenu}>ATUAÇÃO</a>
          <a href="#solucoes" onClick={closeMenu}>SOLUÇÕES</a>
          <a href="#sobre" onClick={closeMenu}>SOBRE</a>
          <a href="#processo" onClick={closeMenu}>PROCESSO</a>
          <a className="contact-link" href="#contato" onClick={closeMenu}>[ FALE COM A D2 ]</a>
        </nav>
      </header>

      <section className="hero" id="inicio">
        <div className="container hero-layout">
          <div className="hero-copy">
            <p className="kicker">D2_CODE // SOFTWARE &amp; AUTOMAÇÃO</p>
            <h1>
              Software sob medida<span className="desktop-break"><br /></span>{" "}
              para <span>operações que<span className="desktop-break"><br /></span>{" "}não podem parar.</span>
            </h1>
            <p className="lead">Desenvolvemos sistemas, integrações e automações para conectar processos, equipamentos e dados — da gestão ao chão de fábrica.</p>
            <div className="mobile-signature">
              <Logo />
              <p><strong>D2 CODE</strong><span>SISTEMAS SOB MEDIDA<br />ATIBAIA · SP</span></p>
            </div>
            <div className="actions">
              <a className="btn" href={WHATSAPP} target="_blank" rel="noreferrer">INICIAR UMA CONVERSA <b>→</b></a>
              <a className="plain" href="#servicos">CONHECER AS SOLUÇÕES ↓</a>
            </div>
            <div className="status"><span>● D2 CODE ONLINE</span><span>ATIBAIA — SP · BRASIL</span></div>
          </div>
          <div className="hero-brand" aria-hidden="true">
            <div className="window">
              <div className="titlebar"><span>D2CODE.EXE</span><i>_ □ ×</i></div>
              <div className="window-body">
                <Logo />
                <div className="boot">
                  <p>C:\D2CODE&gt; CONNECT_OPERATION</p>
                  <p>LINKING SYSTEMS, DEVICES &amp; DATA...</p>
                  <p className="ok">[ OK ] READY FOR PRODUCTION_</p>
                </div>
              </div>
            </div>
            <div className="stamp">FUNDADA<br /><strong>2025</strong></div>
          </div>
        </div>
        <div className="ticker" aria-label="Áreas de atuação">
          <div className="ticker-track">
            <span>SOFTWARE SOB MEDIDA ◆ AUTOMAÇÃO INDUSTRIAL ◆ RASTREABILIDADE ◆ INSPEÇÃO &amp; QUALIDADE ◆ INTEGRAÇÃO COM EQUIPAMENTOS ◆ MODERNIZAÇÃO DE SISTEMAS ◆</span>
            <span aria-hidden="true">SOFTWARE SOB MEDIDA ◆ AUTOMAÇÃO INDUSTRIAL ◆ RASTREABILIDADE ◆ INSPEÇÃO &amp; QUALIDADE ◆ INTEGRAÇÃO COM EQUIPAMENTOS ◆ MODERNIZAÇÃO DE SISTEMAS ◆</span>
          </div>
        </div>
      </section>

      <section className="section proposition">
        <div className="container">
          <div className="section-label">01 / NOSSA PROPOSTA</div>
          <div className="big-copy">
            <h2>Não vendemos uma caixa fechada.<br /><span>Construímos o encaixe certo.</span></h2>
            <p>Cada projeto começa pelo desafio, não pela tecnologia. Entendemos o contexto, conectamos o que já existe e desenvolvemos uma solução que faça sentido para a operação, para as pessoas e para os objetivos da empresa.</p>
          </div>
          <div className="value-cards">
            {[
              ["ENTENDIMENTO", "Começamos pelas pessoas, pelos objetivos e pela realidade do processo."],
              ["CONEXÃO", "Integramos sistemas, equipamentos, plataformas e dados no mesmo fluxo de informação."],
              ["CONFIANÇA", "Criamos soluções claras, sustentáveis e preparadas para evoluir com a empresa."],
            ].map((value, index) => (
              <article key={value[0]}>
                <span>0{index + 1}</span>
                <div><h3>{value[0]}</h3><p>{value[1]}</p></div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <SectionContact text="Tem um desafio que não cabe em uma solução pronta?" />

      <section className="section services" id="servicos">
        <div className="container">
          <div className="section-label inverse">02 / O QUE FAZEMOS</div>
          <div className="service-head">
            <h2>Da necessidade à<br /><span>solução em produção.</span></h2>
            <div className="cursor" aria-hidden="true">_</div>
          </div>
          <div className="service-grid">
            {services.map((service) => (
              <article key={service[0]}>
                <b>{service[0]}</b><h3>{service[1]}</h3><p>{service[2]}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <SectionContact text="Quer entender qual solução faz sentido para a sua operação?" />

      <section className="section operation" id="atuacao">
        <div className="container">
          <div className="section-label">03 / ONDE ATUAMOS</div>
          <h2>Da gestão ao chão de fábrica, com <span>controle de ponta a ponta.</span></h2>
          <div className="modules">
            {operationAreas.map((area) => (
              <article key={area[0]}>
                <div className="module-title"><span>{area[0]}</span><i>×</i></div>
                <div><h3>{area[1]}</h3><p>{area[2]}</p></div>
                <small>STATUS: READY</small>
              </article>
            ))}
          </div>
        </div>
      </section>
      <SectionContact text="Precisa conectar sistemas, equipamentos e dados?" />

      <section className="section field-solutions" id="solucoes">
        <div className="container">
          <div className="section-label">04 / SOLUÇÕES EM OPERAÇÃO</div>
          <div className="solutions-heading">
            <h2>Soluções que colocamos <span>em operação.</span></h2>
            <p>Desenvolvemos tecnologia para resolver desafios reais de produção, integração, controle e rastreabilidade.</p>
          </div>
          <div className="solution-grid">
            {solutions.map((solution) => (
              <article key={solution[0]}>
                <span>{solution[0]}</span>
                <div><h3>{solution[1]}</h3><p>{solution[2]}</p></div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <SectionContact text="Existe um processo que precisa de mais controle ou rastreabilidade?" />

      <section className="section about" id="sobre">
        <div className="container about-layout">
          <div className="poster">
            <Logo />
            <blockquote>Tecnologia boa não aparece como complicação. Aparece como processo funcionando.</blockquote>
            <div className="poster-lines">DESIGN / DEVELOPMENT / INTEGRATION<br />ATIBAIA — SP</div>
          </div>
          <div className="about-copy">
            <div className="section-label inverse">05 / SOBRE A D2 CODE</div>
            <h2>Experiência técnica.<br /><span>Visão de negócio.</span></h2>
            <p>A D2 Code é uma empresa de Atibaia especializada em software sob medida, integrações e automação de processos.</p>
            <p>Nascemos em 2025, reunindo anos de experiência prática em ambientes industriais, sistemas críticos e operações que exigem confiabilidade. Desenvolvemos soluções que conectam pessoas, processos, dados e equipamentos, respeitando a realidade de cada cliente.</p>
            <p>Nosso compromisso é entregar tecnologia clara, sustentável e útil no dia a dia — sem tentar encaixar problemas específicos em ferramentas genéricas.</p>
            <div className="facts">
              <b>2025<small>FUNDAÇÃO</small></b>
              <b>ATIBAIA · SP<small>BASE</small></b>
              <b>SOB MEDIDA<small>MODELO</small></b>
              <b>OPERAÇÕES CRÍTICAS<small>ESPECIALIDADE</small></b>
            </div>
          </div>
        </div>
      </section>
      <SectionContact text="Vamos conversar sobre a realidade da sua empresa?" />

      <section className="section technologies" id="tecnologias">
        <div className="container">
          <div className="section-label">06 / TECNOLOGIAS &amp; INTEGRAÇÕES</div>
          <h2>Tecnologias e equipamentos com os quais trabalhamos.</h2>
          <div className="tech-grid">
            {technologies.map((technology, index) => (
              <span key={technology}><b>{String(index + 1).padStart(2, "0")}</b>{technology}</span>
            ))}
          </div>
        </div>
      </section>
      <SectionContact text="Tem uma integração ou sistema legado para evoluir?" />

      <section className="section process-section" id="processo">
        <div className="container">
          <div className="section-label">07 / COMO TRABALHAMOS</div>
          <h2>Do diagnóstico à entrada em operação.</h2>
          <div className="steps">
            {steps.map((step) => (
              <article key={step[0]}>
                <b>{step[0]}</b><div className="step-line" /><h3>{step[1]}</h3><p>{step[2]}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="cta" id="contato">
        <div className="container">
          <p className="kicker">NEW_PROJECT.D2C</p>
          <h2>Existe um jeito melhor de fazer?</h2>
          <p>Conte o desafio. A gente transforma complexidade em software que funciona.</p>
          <div className="contact-options">
            <a className="btn booking" href={BOOKINGS} target="_blank" rel="noreferrer">AGENDAR UMA CONVERSA <b>→</b></a>
            <a className="btn light" href={WHATSAPP} target="_blank" rel="noreferrer">FALAR PELO WHATSAPP <b>→</b></a>
          </div>
          <address className="contact-details">
            <strong>Diego Carvalho</strong>
            <span>Fundador e responsável técnico</span>
            <a href="mailto:diego.carvalho@d2code.com.br">diego.carvalho@d2code.com.br</a>
            <a href={WHATSAPP} target="_blank" rel="noreferrer">(11) 95026-3057</a>
          </address>
        </div>
      </section>

      <footer>
        <div className="container footer-top">
          <Logo compact />
          <p>D2 CODE SISTEMAS LTDA.<br />ATIBAIA — SP</p>
          <div>
            <a href="mailto:diego.carvalho@d2code.com.br">E-MAIL ↗</a>
            <a href={WHATSAPP} target="_blank" rel="noreferrer">WHATSAPP ↗</a>
            <a href="https://www.linkedin.com/company/d2code" target="_blank" rel="noreferrer">LINKEDIN ↗</a>
          </div>
        </div>
        <div className="container footer-bottom">
          <span>© {new Date().getFullYear()} D2 CODE SISTEMAS LTDA.</span>
          <span><a href="mailto:diego.carvalho@d2code.com.br">diego.carvalho@d2code.com.br</a> · <a href={WHATSAPP} target="_blank" rel="noreferrer">(11) 95026-3057</a></span>
          <span><a href="/privacidade/">PRIVACIDADE</a> · <a href="#inicio">VOLTAR AO TOPO ↑</a></span>
        </div>
      </footer>
    </main>
  );
}
