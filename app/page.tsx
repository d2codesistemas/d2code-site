"use client";
import { useState } from "react";

const services = [
  ["01", "Sistemas sob medida", "Aplicações web, desktop e serviços desenhados para o seu negócio."],
  ["02", "Integrações & APIs", "Sistemas, plataformas, equipamentos e dados trabalhando em conjunto."],
  ["03", "Automação de processos", "Menos tarefas manuais, retrabalho e pontos de falha na rotina."],
  ["04", "Portais & ferramentas internas", "Experiências simples para organizar fluxos, equipes e informações."],
  ["05", "Dados & rastreabilidade", "Informação confiável para acompanhar, decidir e comprovar."],
  ["06", "Evolução de sistemas", "Modernização e continuidade para soluções que já fazem parte da empresa."],
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
          <p className="kicker">D2_CODE // SOFTWARE SOB MEDIDA</p>
          <h1>Tecnologia feita para <span>o seu negócio avançar.</span></h1>
          <p className="lead">Criamos sistemas, integrações e automações sob medida para transformar desafios reais em soluções simples, confiáveis e prontas para crescer.</p>
          <div className="actions"><a className="btn" href="#contato">INICIAR CONVERSA <b>→</b></a><a className="plain" href="#servicos">VER SOLUÇÕES ↓</a></div>
          <div className="status"><span>● SISTEMA ONLINE</span><span>ATIBAIA_SP · BRASIL</span></div>
        </div>
        <div className="hero-brand">
          <div className="window">
            <div className="titlebar"><span>D2CODE.EXE</span><i>_ □ ×</i></div>
            <div className="window-body"><Logo /><div className="boot"><p>C:\D2CODE&gt; START_PROJECT</p><p>CONNECTING IDEAS, SYSTEMS &amp; PEOPLE...</p><p className="ok">[ OK ] READY TO BUILD_</p></div></div>
          </div>
          <div className="stamp">DESDE<br /><strong>2025</strong></div>
        </div>
      </div>
      <div className="ticker"><div>DESENVOLVIMENTO SOB MEDIDA ◆ APLICAÇÕES WEB &amp; DESKTOP ◆ INTEGRAÇÕES &amp; APIs ◆ AUTOMAÇÃO DE PROCESSOS ◆ SOFTWARE QUE FUNCIONA NA VIDA REAL ◆</div></div>
    </section>

    <section className="section proposition">
      <div className="container">
        <div className="section-label">01 / NOSSA PROPOSTA</div>
        <div className="big-copy"><h2>Tecnologia que se adapta ao seu negócio.<br /><span>Não o contrário.</span></h2><p>Entramos onde soluções prontas param. Entendemos o contexto, conectamos o que já existe e construímos exatamente o que sua empresa precisa para avançar.</p></div>
        <div className="value-cards">
          {[["ENTENDIMENTO","Começamos pelas pessoas, pelos objetivos e pela realidade do processo."],["CONEXÃO","Software, plataformas e dados no mesmo fluxo de informação."],["CONFIANÇA","Soluções claras, sustentáveis e preparadas para evoluir com a empresa."]].map((v,i)=><article key={v[0]}><span>0{i+1}</span><div><h3>{v[0]}</h3><p>{v[1]}</p></div></article>)}
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
        <h2>Soluções para diferentes desafios e contextos de negócio.</h2>
        <div className="modules">
          {[["GES","GESTÃO","Ferramentas internas, fluxos de aprovação e visibilidade para decidir."],["INT","INTEGRAÇÃO","ERPs, plataformas, APIs, sistemas legados e equipamentos."],["OPS","OPERAÇÕES","Automação, controle, rastreabilidade e redução de tarefas manuais."],["IND","INDÚSTRIA","Soluções robustas para produção, logística, qualidade e chão de fábrica."]].map(x=><article key={x[0]}><div className="module-title"><span>{x[0]}</span><i>×</i></div><div><h3>{x[1]}</h3><p>{x[2]}</p></div><small>STATUS: READY</small></article>)}
        </div>
      </div>
    </section>

    <section className="section about" id="sobre">
      <div className="container about-layout">
        <div className="poster"><Logo /><div className="poster-lines">DESIGN / DEVELOPMENT<br />CUSTOM SOFTWARE<br />ATIBAIA — SP</div></div>
        <div className="about-copy"><div className="section-label inverse">04 / SOBRE A D2 CODE</div><h2>Experiência técnica.<br /><span>Visão de negócio.</span></h2><p>A D2 Code é uma empresa de Atibaia que cria software sob medida para empresas. Desenvolvemos sistemas, integrações e automações que respeitam a realidade de cada cliente e resolvem problemas que ferramentas genéricas não alcançam.</p><p>Nossa experiência em ambientes industriais e operações críticas reforça um compromisso que vale para todo projeto: entregar tecnologia confiável, compreensível e útil no dia a dia.</p><div className="facts"><b>2025<small>FUNDAÇÃO</small></b><b>ATIBAIA · SP<small>BASE</small></b><b>SOB MEDIDA<small>MODELO</small></b></div></div>
      </div>
    </section>

    <section className="section process-section" id="processo">
      <div className="container"><div className="section-label">05 / COMO TRABALHAMOS</div><h2>Do diagnóstico à entrada em operação.</h2><div className="steps">{steps.map(s=><article key={s[0]}><b>{s[0]}</b><div className="step-line" /><h3>{s[1]}</h3><p>{s[2]}</p></article>)}</div></div>
    </section>

    <section className="cta" id="contato"><div className="container"><p className="kicker">NEW_PROJECT.D2C</p><h2>Existe um jeito melhor de fazer?</h2><p>Conte o desafio. A gente transforma complexidade em software que funciona.</p><div className="contact-options"><a className="btn booking" href="https://outlook.office.com/book/D2Code@d2codesistemas.com.br/" target="_blank" rel="noreferrer">AGENDAR UMA CONVERSA <b>→</b></a><a className="btn light" href="https://wa.me/5511950263057?text=Olá%2C%20Diego!%20Gostaria%20de%20conversar%20sobre%20um%20projeto%20para%20minha%20empresa." target="_blank" rel="noreferrer">WHATSAPP <b>→</b></a><a className="contact-card" href="mailto:diego.carvalho@d2code.com.br"><small>E-MAIL</small><strong>diego.carvalho@d2code.com.br</strong><span>↗</span></a></div></div></section>

    <footer><div className="container footer-top"><Logo compact /><p>SOFTWARE SOB MEDIDA<br />PARA DESAFIOS REAIS.</p><div><a href="mailto:diego.carvalho@d2code.com.br">E-MAIL ↗</a><a href="https://wa.me/5511950263057" target="_blank" rel="noreferrer">WHATSAPP ↗</a><a href="https://www.linkedin.com/company/d2code">LINKEDIN ↗</a></div></div><div className="container footer-bottom"><span>© {new Date().getFullYear()} D2 CODE SISTEMAS LTDA.</span><span><a href="mailto:diego.carvalho@d2code.com.br">diego.carvalho@d2code.com.br</a> · <a href="tel:+5511950263057">(11) 95026-3057</a></span><a href="#inicio">VOLTAR AO TOPO ↑</a></div></footer>
  </main>;
}
