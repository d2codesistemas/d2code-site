export type ClarityEventName =
  | "cta_conversa"
  | "whatsapp_contato"
  | "ver_servicos"
  | "card_atuacao"
  | "card_solucao"
  | "cta_inspecao"
  | "formulario_enviado";

declare global {
  interface Window {
    clarity?: (command: "event", eventName: ClarityEventName) => void;
  }
}

export function trackClarityEvent(eventName: ClarityEventName) {
  if (process.env.NODE_ENV !== "production" || typeof window === "undefined") {
    return;
  }

  try {
    window.clarity?.("event", eventName);
  } catch {
    // Analytics must never interrupt the user's navigation or contact action.
  }
}
