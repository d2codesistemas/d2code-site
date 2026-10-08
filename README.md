# D2 Code — site institucional

Site institucional público da D2 Code Sistemas Ltda.

## Desenvolvimento

```bash
npm install
npm run dev
```

## Publicação

O site é exportado como conteúdo estático e publicado automaticamente no GitHub Pages quando a branch `main` é atualizada.

## Medição da home

O Clarity só é carregado em produção no hostname `d2code.com.br`, após consentimento aceito. Hosts locais e de desenvolvimento não coletam, inclusive quando executam um build de produção. Texto, escolhas e armazenamento do consentimento foram preservados; o aviso ocupa espaço próprio antes do conteúdo, sem sobrepor CTAs.

Eventos de contato: `whatsapp_contato`, `bookings_contato` e `email_contato` significam clique/intenção, nunca confirmação de mensagem, agendamento ou lead recebido. A origem é a da sessão (referrer/UTM). Deduplicar usuários/sessões ao combinar canais.

`ver_servicos` mantém seu nome histórico e significa clique para Aplicações (hero ou menu), não visualização da seção. Desde a atualização de 08/10/2026, `cta_conversa` fica apenas na navegação interna para Contato; deixou de ser disparado junto com WhatsApp. Não somar séries anteriores/posteriores como conversões comerciais equivalentes.

O `lastModified` da home é uma data explícita da atualização significativa publicada, não a data de cada build. Esta publicação técnica está prevista para 08/10/2026; a data deve acompanhar a publicação efetiva se ela ocorrer em outro dia.

Verificação da coleta/consentimento e dos handlers reais da home: `node --test tests/analytics.test.mjs`. As verificações não enviam mensagens nem concluem reservas.
