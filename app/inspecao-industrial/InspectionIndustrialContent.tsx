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

function ContactButtons() {
  return (
    <div className="inspection-actions">
      <a className="btn" href={WHATSAPP} target="_blank" rel="noreferrer" onClick={() => trackClarityEvent("cta_inspecao")}>AVALIE SUA INSPEÇÃO EM LINHA <b>→</b></a>
      <a className="plain" href="#contato-inspecao" onClick={() => trackClarityEvent("cta_inspecao")}>CONVERSE SOBRE SEU PROCESSO <b>↓</b></a>
    </div>
  );
}

export default function InspectionIndustrialContent() {
  return (
    <main className="inspection-page">
      <header className="inspection-header">
        <Link href="/" aria-label="Voltar ao site da D2 Code"><Image className="logo compact" src="/d2code-logo.png" alt="D2 Code Sistemas" width={1024} height={1024} unoptimized priority /></Link>
        <nav aria-label="Navegação da página de inspeção">
          <a href="#onde-entramos">ONDE A D2 ENTRA</a>
          <a href="#aplicacoes">APLICAÇÕES</a>
          <a href="#processo-inspecao">PROCESSO</a>
          <a className="contact-link" href="#contato-inspecao">[ CONVERSAR ]</a>
        </nav>
      </header>

      <section className="inspection-hero">
        <div className="container inspection-hero-layout">
          <div>
            <p className="kicker">INSPEÇÃO INDUSTRIAL // VISÃO COMPUTACIONAL + IA</p>
            <h1>Uma câmera identifica. <span>O software transforma o resultado em processo.</span></h1>
            <p className="lead">A D2 Code desenvolve a camada de software que conecta câmeras, sistemas de visão, leitores e equipamentos ao processo produtivo.</p>
            <p>Recebemos resultados, leituras, imagens e sinais de inspeção para aplicar regras, registrar o histórico, bloquear falhas, liberar etapas e integrar as informações aos sistemas da empresa.</p>
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
          <div className="inspection-heading"><h2>Não vendemos apenas uma câmera. <span>Conectamos a inspeção ao processo.</span></h2><p>Desenvolvemos sistemas sob medida para transformar resultados de câmeras e sensores em decisões integradas à operação.</p></div>
          <div className="inspection-card-grid">{integrationLayers.map(item => <article key={item[0]}><b>{item[0]}</b><h3>{item[1]}</h3><p>{item[2]}</p></article>)}</div>
        </div>
      </section>

      <section className="section inspection-applications" id="aplicacoes">
        <div className="container">
          <div className="section-label inverse">03 / APLICAÇÕES TÍPICAS</div>
          <h2>O que pode ser verificado e conectado.</h2>
          <div className="application-grid">{applications.map((item, index) => <article key={item[0]}><span>{String(index + 1).padStart(2, "0")}</span><div><h3>{item[0]}</h3><p>{item[1]}</p></div></article>)}</div>
        </div>
      </section>

      <section className="section inspection-ai">
        <div className="container inspection-split">
          <div><div className="section-label">04 / TECNOLOGIA ADEQUADA</div><h2>Visão computacional e IA aplicadas ao processo.</h2></div>
          <div><p>Nem toda inspeção exige inteligência artificial. A solução pode utilizar visão computacional tradicional, regras determinísticas, leitura de códigos, OCR ou modelos baseados em IA.</p><p>A tecnologia é definida após avaliar peças, variações, iluminação, resolução, tolerâncias, posicionamento, velocidade, tempo de ciclo e critérios reais de aprovação e rejeição.</p><p><strong>O objetivo não é aplicar IA por aplicar. É construir uma inspeção tecnicamente viável, compreensível e integrada ao processo.</strong></p></div>
        </div>
      </section>

      <section className="section inspection-process" id="processo-inspecao">
        <div className="container">
          <div className="section-label">05 / DO RESULTADO À AÇÃO</div>
          <h2>Da avaliação à entrada em operação.</h2>
          <div className="inspection-steps">{processSteps.map(item => <article key={item[0]}><b>{item[0]}</b><div /><h3>{item[1]}</h3><p>{item[2]}</p></article>)}</div>
        </div>
      </section>

      <section className="section inspection-tech">
        <div className="container inspection-split">
          <div><div className="section-label inverse">06 / TECNOLOGIAS & EQUIPAMENTOS</div><h2>Experiência de integração, sem dependência de uma única marca.</h2></div>
          <div><p>A D2 Code possui experiência na integração de soluções Keyence, Hikvision, Cognex, Videojet, Zebra e Sato, além de CLPs, leitores industriais, impressoras, bancos de dados, APIs, ERPs e sistemas internos.</p><p>Keyence e Hikvision indicam a D2 para trabalhos de integração no Brasil. Isso não limita a atuação a essas marcas: a arquitetura é definida conforme o equipamento, o protocolo e a necessidade de cada operação.</p></div>
        </div>
      </section>

      <section className="inspection-bridge">
        <div className="container"><p className="kicker">CAMERA → SOFTWARE → PROCESSO</p><blockquote>Mais do que identificar: selecionar a receita, aplicar regras, registrar evidências, comandar ações e alimentar a rastreabilidade.</blockquote></div>
      </section>

      <section className="cta" id="contato-inspecao">
        <div className="container">
          <p className="kicker">INSPECTION_REVIEW.D2C</p><h2>Quer avaliar uma inspeção em linha?</h2>
          <p>Apresente a peça, o processo e o resultado esperado. A gente ajuda a transformar a necessidade em uma solução integrada à operação.</p>
          <a className="btn" href={WHATSAPP} target="_blank" rel="noreferrer" onClick={() => trackClarityEvent("cta_inspecao")}>AVALIE SUA INSPEÇÃO EM LINHA <b>→</b></a>
          <p className="inspection-disclaimer">A viabilidade depende da avaliação de amostras, iluminação, resolução, tolerâncias, tempo de ciclo e condições reais do processo.</p>
        </div>
      </section>

      <footer><div className="container inspection-footer"><span>© {new Date().getFullYear()} D2 CODE SISTEMAS LTDA. · ATIBAIA — SP</span><Link href="/">VOLTAR AO SITE PRINCIPAL ↑</Link></div></footer>
    </main>
  );
}
