"use client";
import { useState } from "react";

const services = [
  ["01", "Sistemas industriais sob medida", "Aplicações desenhadas para o fluxo real da sua operação."],
  ["02", "Integrações & middleware", "Sistemas, equipamentos e dados conversando sem ruído."],
  ["03", "Automação operacional", "Menos trabalho manual, retrabalho e pontos de falha."],
  ["04", "Rastreabilidade & serialização", "Histórico, precisão e conformidade de ponta a ponta."],
  ["05", "Integração com equipamentos", "Leitores, câmeras, impressoras e dispositivos industriais."],
  ["06", "Aplicações desktop & serviços", "Soluções Windows preparadas para ambientes críticos."],
];

const steps = [
  ["01", "Entender", "Mapeamos a operação, os riscos e o resultado esperado."],
  ["02", "Projetar", "Desenhamos a solução e as integrações com escopo claro."],
  ["03", "Construir", "Desenvolvemos em ciclos curtos e validações frequentes."],
  ["04", "Implantar", "Colocamos em operação com documentação e acompanhamento."],
];

function Logo({ compact = false }: { compact?: boolean }) {
  return <img className={compact ? "logo compact" : "logo"} src="/d2code-logo.png" alt="D2 Code" />;
}

export default function Home() {
  const [menu, setMenu] = useState(false);
  return <main>
    <header>
      <a href="#inicio" aria-label="D2 Code — início"><Logo compact /></a>
      <button className="menu" onClick={() => setMenu(!menu)} aria-label="Abrir menu"><span /><span /></button>
      <nav className={menu ? "open" : ""}>
        <a href="#servicos">SERVIÇOS</a><a href="#atuacao">ATUAÇÃO</a><a href="#sobre">SOBRE</a><a href="#processo">PROCESSO</a>
        <a className="contact-link" href="#contato">[ FALE COM A D2 ]</a>
      </nav>
    </header>

    <section className="hero" id="inicio">
      <div className="container hero-layout">
        <div className="hero-copy">
          <p className="kicker">D2_CODE // SOFTWARE INDUSTRIAL</p>
          <h1>Software conectado à <span>realidade da operação.</span></h1>
          <p className="lead">Sistemas, integrações e automações sob medida para transformar processos complexos em operações mais estáveis, rastreáveis e eficientes.</p>
          <div className="actions"><a className="btn" href="#contato">INICIAR CONVERSA <b>→</b></a><a className="plain" href="#servicos">VER SOLUÇÕES ↓</a></div>
          <div className="status"><span>● SISTEMA ONLINE</span><span>ATIBAIA_SP · BRASIL</span></div>
        </div>
        <div className="hero-brand">
          <div className="window">
            <div className="titlebar"><span>D2CODE.EXE</span><i>_ □ ×</i></div>
            <div className="window-body"><Logo /><div className="boot"><p>C:\D2CODE&gt; CONNECT_OPERATION</p><p>LOADING INDUSTRIAL MODULES...</p><p className="ok">[ OK ] READY TO BUILD_</p></div></div>
          </div>
          <div className="stamp">DESDE<br /><strong>2025</strong></div>
        </div>
      </div>
      <div className="ticker"><div>DESENVOLVIMENTO SOB MEDIDA ◆ INTEGRAÇÃO INDUSTRIAL ◆ RASTREABILIDADE ◆ AUTOMAÇÃO DE PROCESSOS ◆ SOFTWARE QUE FUNCIONA NA VIDA REAL ◆</div></div>
    </section>

    <section className="section proposition">
      <div className="container">
        <div className="section-label">01 / NOSSA PROPOSTA</div>
        <div className="big-copy"><h2>Tecnologia que se adapta à sua operação.<br /><span>Não o contrário.</span></h2><p>Entramos onde soluções prontas param. Entendemos o processo, conectamos o que já existe e construímos exatamente o que a operação precisa para avançar.</p></div>
        <div className="value-cards">
          {[["PROCESSO","Feito para a rotina, as restrições e os objetivos reais da sua equipe."],["INTEGRAÇÃO","Software, dispositivos e sistemas no mesmo fluxo de informação."],["ESTABILIDADE","Arquitetura pensada para ambientes onde parar não é uma opção."]].map((v,i)=><article key={v[0]}><span>0{i+1}</span><h3>{v[0]}</h3><p>{v[1]}</p></article>)}
        </div>
      </div>
    </section>

    <section className="section services" id="servicos">
      <div className="container">
        <div className="section-label inverse">02 / O QUE FAZEMOS</div>
        <div className="service-head"><h2>Da necessidade à<br /><span>solução em produção.</span></h2><div className="cursor">_</div></div>
        <div className="service-grid">{services.map(s=><article key={s[0]}><b>{s[0]}</b><h3>{s[1]}</h3><p>{s[2]}</p><i>↗</i></article>)}</div>
      </div>
    </section>

    <section className="section operation" id="atuacao">
      <div className="container">
        <div className="section-label">03 / ONDE ATUAMOS</div>
        <h2>Software para os pontos críticos da cadeia operacional.</h2>
        <div className="modules">
          {[["PRD","PRODUÇÃO","Fluxos produtivos, apontamentos e controle operacional."],["LOG","LOGÍSTICA","Movimentação, leitura, identificação e expedição."],["QLD","QUALIDADE","Rastreabilidade, registros e evidências do processo."],["INT","INTEGRAÇÃO","Sistemas legados, ERPs, APIs e equipamentos."]].map(x=><article key={x[0]}><div className="module-title"><span>{x[0]}</span><i>×</i></div><div><h3>{x[1]}</h3><p>{x[2]}</p></div><small>STATUS: READY</small></article>)}
        </div>
      </div>
    </section>

    <section className="section about" id="sobre">
      <div className="container about-layout">
        <div className="poster"><Logo /><div className="poster-lines">DESIGN / DEVELOPMENT<br />INDUSTRIAL SYSTEMS<br />ATIBAIA — SP</div></div>
        <div className="about-copy"><div className="section-label inverse">04 / SOBRE A D2 CODE</div><h2>Experiência técnica.<br /><span>Visão de operação.</span></h2><p>A D2 Code é uma empresa de Atibaia especializada em software para ambientes industriais e produtivos. Criamos soluções que conversam com equipamentos, sistemas e processos já existentes, respeitando a realidade de cada cliente.</p><p>Nosso foco é entregar tecnologia confiável, compreensível e útil no dia a dia — da primeira conversa à solução funcionando.</p><div className="facts"><b>2025<small>FUNDAÇÃO</small></b><b>ATIBAIA · SP<small>BASE</small></b><b>SOB MEDIDA<small>MODELO</small></b></div></div>
      </div>
    </section>

    <section className="section process-section" id="processo">
      <div className="container"><div className="section-label">05 / COMO TRABALHAMOS</div><h2>Do diagnóstico à entrada em operação.</h2><div className="steps">{steps.map(s=><article key={s[0]}><b>{s[0]}</b><div className="step-line" /><h3>{s[1]}</h3><p>{s[2]}</p></article>)}</div></div>
    </section>

    <section className="cta" id="contato"><div className="container"><p className="kicker">NEW_PROJECT.D2C</p><h2>Tem um processo travando a operação?</h2><p>Conte o desafio. A gente transforma complexidade em software que funciona.</p><a className="btn light" href="https://www.linkedin.com/company/d2code" target="_blank" rel="noreferrer">FALAR COM A D2 NO LINKEDIN <b>→</b></a></div></section>

    <footer><div className="container footer-top"><Logo compact /><p>SOFTWARE INDUSTRIAL CONECTADO<br />À REALIDADE DA OPERAÇÃO.</p><div><a href="https://www.linkedin.com/company/d2code">LINKEDIN ↗</a><a href="https://d2code.com.br">D2CODE.COM.BR ↗</a></div></div><div className="container footer-bottom">© {new Date().getFullYear()} D2 CODE SISTEMAS LTDA. <a href="#inicio">VOLTAR AO TOPO ↑</a></div></footer>
  </main>;
}
