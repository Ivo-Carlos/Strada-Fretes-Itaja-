type EventName = "whatsapp_click" | "quote_form_submit" | "phone_click";

declare global {
  interface Window { dataLayer?: Record<string, unknown>[] }
}

/** Envia eventos ao dataLayer (GTM). Nunca envie dados pessoais aqui. */
export function track(event: EventName, params: Record<string, string>) {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event, ...params, page_path: window.location.pathname });
}
