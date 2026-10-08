export type ClarityEventName =
  | "cta_conversa"
  | "whatsapp_contato"
  | "bookings_contato"
  | "email_contato"
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

export function isClarityProductionHost(hostname: string) {
  return process.env.NODE_ENV === "production" && hostname === "d2code.com.br";
}

export function trackClarityEvent(eventName: ClarityEventName) {
  if (typeof window === "undefined" || !isClarityProductionHost(window.location.hostname)) {
    return;
  }

  try {
    window.clarity?.("event", eventName);
  } catch {
    // Analytics must never interrupt the user's navigation or contact action.
  }
}
