"use client";

import Image from "next/image";
import Link from "next/link";
import { trackClarityEvent } from "../clarity";

const WHATSAPP =
  "https://wa.me/5511950263057?text=Olá%2C%20Diego!%20Gostaria%20de%20avaliar%20uma%20inspeção%20industrial%20em%20linha.";

const integrationLayers = [
  ["01", "Receitas e parâmetros", "Controle de produtos, formatos, tolerâncias e critérios de inspeção conforme o que está sendo produzido."],
  ["02", "Regras de aprovação", "Critérios de aprovação, rejeição e tratamento de exceções alinhados à operação."],
  ["03", "Recepção dos resultados", "Integração de OK/NOK, leituras, medições, códigos, imagens e dados fornecidos pelos equipamentos."],
  ["04", "Ações no processo", "Alarmes, bloqueios, liberações, acionamentos ou solicitação de uma nova inspeção."],
  ["05", "Histórico auditável", "Registro do resultado por peça, lote, caixa, pallet, ordem de produção ou outra identificação."],
  ["06", "Integração com a operação", "Conexão com sistemas internos, bancos de dados, ERPs, APIs, CLPs, leitores, impressoras e outros equipamentos."],
];

const applications = [
  ["Presença e ausência", "Componentes, tampas, rótulos, lacres, acessórios, peças ou elementos obrigatórios."],
  ["Posição e montagem", "Orientação, encaixe, alinhamento, montagem e posicionamento de componentes."],
  ["Quantidade", "Contagem de itens, componentes, embalagens ou elementos em uma área definida."],
  ["Características visuais", "Formato, cor, aparência, variações e características relevantes para o processo."],
  ["Códigos e etiquetas", "Códigos de barras, QR Codes, Data Matrix, textos, etiquetas e informações variáveis."],
  ["Lote e validade", "Conteúdo impresso, lote, fabricação, validade e demais dados de identificação."],
  ["Rastreabilidade", "Associação da inspeção à ordem, produto, lote, serial, embalagem ou movimentação correspondente."],
];

const processSteps = [
  ["01", "Avaliar", "Entendemos o produto, o ambiente, as variações, os riscos e o resultado esperado."],
  ["02", "Definir", "Estruturamos critérios, receitas, tolerâncias, integrações e ações para cada resultado."],
  ["03", "Integrar", "Conectamos câmeras, leitores, equipamentos, sistemas, bancos de dados e dispositivos de linha."],
  ["04", "Validar", "Realizamos testes com amostras e condições representativas do processo."],
  ["05", "Operar", "Implantamos registros, alarmes, bloqueios, rastreabilidade e acompanhamento."],
];

const visionDemos = [
  {
    code: "VISION.COUNT",
    title: "Contagem de características",
    description: "O sistema de visão identifica e conta características da peça. A camada de software pode associar o resultado à receita, ao produto e ao histórico de inspeção.",
    src: "/videos/visao-keyence-contagem-roda.mp4",
    poster: "/videos/visao-keyence-contagem-roda.jpg",
  },
  {
    code: "PASSAGE.COUNT",
    title: "Contagem por passagem",
    description: "A câmera executa a identificação em movimento. O software recebe o resultado e pode registrar, comparar, alertar ou comandar a próxima etapa do processo.",
    src: "/videos/visao-keyence-contagem-passagem.mp4",
    poster: "/videos/visao-keyence-contagem-passagem.jpg",
  },
  {
    code: "COLOR.TRIGGER",
    title: "Critério visual e acionamento",
    description: "O equipamento avalia a condição visual. A D2 integra o OK/NOK às regras de produção, bloqueios, liberações e rastreabilidade.",
    src: "/videos/visao-keyence-cor-trigger.mp4",
    poster: "/videos/visao-keyence-cor-trigger.jpg",
  },
];

function ContactButtons() {
  const trackContact = () => {
    trackClarityEvent("cta_inspecao");
    trackClarityEvent("whatsapp_contato");
  };

  return (
    <div className="inspection-actions">
      <a className="btn" href={WHATSAPP} target="_blank" rel="noreferrer" onClick={trackContact}>AVALIE SUA INSPEÇÃO EM LINHA <b>→</b></a>
      <a className="plain" href="#contato-inspecao" onClick={() => trackClarityEvent("cta_inspecao")}>CONVERSE SOBRE SEU PROCESSO <b>↓</b></a>
    </div>
  );
}

export default function InspectionIndustrialContent() {
  return (
    <main className="inspection-page">
      <header className="inspection-header">
        <Link href="/" aria-label="Voltar ao site da D2 Code"><Image className="logo compact" src="/d2code-logo.png" alt="D2 Code Sistemas" width={1024} height={1024} unoptimized priority /></Link>
        <nav aria-label="Navegação da página de sistemas de visão">
          <a href="#onde-entramos">ONDE A D2 ENTRA</a>
          <a href="#demonstracoes">DEMONSTRAÇÕES</a>
          <a href="#aplicacoes">APLICAÇÕES</a>
          <a href="#processo-inspecao">PROCESSO</a>
          <a className="contact-link" href="#contato-inspecao">[ CONVERSAR ]</a>
        </nav>
      </header>

      <section className="inspection-hero">
        <div className="container inspection-hero-layout">
          <div>
            <p className="kicker">SISTEMAS DE VISÃO // SOFTWARE &amp; INTEGRAÇÃO</p>
            <h1>Uma câmera identifica. <span>O software transforma o resultado em processo.</span></h1>
            <p className="lead">A D2 Code desenvolve a camada de software que conecta câmeras e sistemas de visão — com ou sem recursos de IA — ao processo produtivo.</p>
            <p>A câmera executa a identificação ou inspeção. Nosso software seleciona receitas e regras, recebe os resultados, registra o histórico, comanda ações e integra as informações aos sistemas da empresa.</p>
            <ContactButtons />
          </div>
          <div className="inspection-terminal" aria-label="Fluxo de inspeção integrado">
            <div className="titlebar"><span>VISION_PROCESS.D2C</span><span>− □ ×</span></div>
            <div className="inspection-flow">
              <code>CAMERA.INPUT</code><b>IDENTIFICAR</b><i>↓</i>
              <code>D2CODE.LOGIC</code><b>DECIDIR + REGISTRAR</b><i>↓</i>
              <code>PROCESS.ACTION</code><b>LIBERAR / BLOQUEAR</b>
              <small>[ OK ] PROCESS CONNECTED_</small>
            </div>
          </div>
        </div>
      </section>

      <section className="inspection-intro">
        <div className="container inspection-split">
          <div><p className="section-label">01 / ALÉM DO OK OU NOK</p><h2>A inspeção não termina no resultado da câmera.</h2></div>
          <div><p>Identificar uma característica visual é apenas uma parte do processo.</p><p>Para gerar valor na operação, o resultado precisa estar associado ao produto correto, seguir critérios definidos, provocar ações na linha e permanecer disponível para consulta e rastreabilidade.</p><p><strong>É nessa camada que a D2 Code atua.</strong></p></div>
        </div>
      </section>

      <section className="section inspection-layer" id="onde-entramos">
        <div className="container">
          <div className="section-label">02 / ONDE A D2 ENTRA</div>
          <div className="inspection-heading"><h2>Não entregamos apenas uma câmera. <span>Conectamos a inspeção ao processo.</span></h2><p>A tecnologia do equipamento identifica. A D2 transforma resultados de câmeras e sistemas de visão em decisões integradas à operação.</p></div>
          <div className="inspection-card-grid">{integrationLayers.map(item => <article key={item[0]}><b>{item[0]}</b><h3>{item[1]}</h3><p>{item[2]}</p></article>)}</div>
        </div>
      </section>

      <section className="section vision-demos" id="demonstracoes" aria-labelledby="demonstracoes-visao">
        <div className="container">
          <div className="section-label">03 / SISTEMAS DE VISÃO EM AÇÃO</div>
          <div className="inspection-heading">
            <h2 id="demonstracoes-visao">A câmera analisa. <span>A D2 conecta o resultado.</span></h2>
            <p>As demonstrações mostram recursos dos equipamentos de visão. Em um projeto real, a D2 cria o software que relaciona esses resultados às regras, aos dados e às ações da operação.</p>
          </div>
          <div className="vision-demo-grid">
            {visionDemos.map((demo, index) => (
              <article key={demo.code}>
                <div className="vision-demo-frame">
                  <video controls playsInline preload="metadata" poster={demo.poster} aria-label={`${demo.title}: demonstração de sistema de visão`}>
                    <source src={demo.src} type="video/mp4" />
                    Seu navegador não suporta a reprodução deste vídeo.
                  </video>
                  <span aria-hidden="true">0{index + 1}</span>
                </div>
                <code>{demo.code}</code>
                <h3>{demo.title}</h3>
                <p>{demo.description}</p>
              </article>
            ))}
          </div>
          <p className="vision-demo-note">Vídeos demonstrativos de tecnologia Keyence. A análise visual é executada pelo equipamento; a atuação da D2 está no software, nas regras e na integração com o processo.</p>
        </div>
      </section>

      <section className="section inspection-applications" id="aplicacoes">
        <div className="container">
          <div className="section-label inverse">04 / APLICAÇÕES TÍPICAS</div>
          <h2>O que pode ser verificado e conectado.</h2>
          <div className="application-grid">{applications.map((item, index) => <article key={item[0]}><span>{String(index + 1).padStart(2, "0")}</span><div><h3>{item[0]}</h3><p>{item[1]}</p></div></article>)}</div>
        </div>
      </section>

      <section className="section inspection-ai">
        <div className="container inspection-split">
          <div><div className="section-label">05 / O PAPEL DA IA</div><h2>A IA está no sistema de visão. A D2 integra sua resposta.</h2></div>
          <div><p>Algumas câmeras e sistemas de visão possuem recursos próprios de inteligência artificial para classificação, detecção, contagem ou identificação de características.</p><p>A D2 não desenvolve uma ferramenta genérica de IA nem substitui a tecnologia do equipamento. Criamos a camada que configura o contexto da produção, envia ou seleciona receitas, recebe resultados e faz o processo reagir.</p><p>Nem toda aplicação exige IA. A solução pode utilizar visão tradicional, ferramentas determinísticas, leitura de códigos, OCR ou recursos inteligentes já disponíveis no sistema de visão.</p><p><strong>A escolha depende das peças, iluminação, resolução, tolerâncias, posicionamento, tempo de ciclo e condições reais da operação.</strong></p></div>
        </div>
      </section>

      <section className="section inspection-process" id="processo-inspecao">
        <div className="container">
          <div className="section-label">06 / DO RESULTADO À AÇÃO</div>
          <h2>Da avaliação à entrada em operação.</h2>
          <div className="inspection-steps">{processSteps.map(item => <article key={item[0]}><b>{item[0]}</b><div /><h3>{item[1]}</h3><p>{item[2]}</p></article>)}</div>
        </div>
      </section>

      <section className="section inspection-tech">
        <div className="container inspection-split">
          <div><div className="section-label inverse">07 / TECNOLOGIAS &amp; EQUIPAMENTOS</div><h2>Experiência de integração, sem dependência de uma única marca.</h2></div>
          <div><p>A D2 Code possui experiência na integração de soluções Keyence, Hikvision, Cognex, Videojet, Zebra e Sato, além de CLPs, leitores industriais, impressoras, bancos de dados, APIs, ERPs e sistemas internos.</p><p>Keyence e Hikvision indicam a D2 para projetos de integração no Brasil. A D2 atua como integradora de software e processo; não se apresenta como fabricante das câmeras nem limita a arquitetura a uma única marca.</p></div>
        </div>
      </section>

      <section className="inspection-bridge">
        <div className="container"><p className="kicker">CAMERA → SOFTWARE → PROCESSO</p><blockquote>Mais do que identificar: selecionar a receita, aplicar regras, registrar evidências, comandar ações e alimentar a rastreabilidade.</blockquote></div>
      </section>

      <section className="cta" id="contato-inspecao">
        <div className="container">
          <p className="kicker">INSPECTION_REVIEW.D2C</p><h2>Quer avaliar uma inspeção em linha?</h2>
          <p>Apresente a peça, o processo e o resultado esperado. A gente ajuda a transformar a necessidade em uma solução integrada à operação.</p>
          <a className="btn" href={WHATSAPP} target="_blank" rel="noreferrer" onClick={() => { trackClarityEvent("cta_inspecao"); trackClarityEvent("whatsapp_contato"); }}>AVALIE SUA INSPEÇÃO EM LINHA <b>→</b></a>
          <p className="inspection-disclaimer">A viabilidade depende da avaliação de amostras, iluminação, resolução, tolerâncias, tempo de ciclo e condições reais do processo.</p>
        </div>
      </section>

      <footer><div className="container inspection-footer"><span>© {new Date().getFullYear()} D2 CODE SISTEMAS LTDA. · ATIBAIA — SP</span><Link href="/">VOLTAR AO SITE PRINCIPAL ↑</Link></div></footer>
    </main>
  );
}
