import { site } from "@/config/site";
import { track } from "@/lib/tracking";

export function whatsappUrl(message: string = site.defaultMessage, number: string = site.whatsappNumber) {
  const digits = number.replace(/\D/g, "");
  const base = digits ? `https://wa.me/${digits}` : "https://wa.me/";
  return `${base}?text=${encodeURIComponent(message)}`;
}

export function serviceMessage(service: string) {
  return `Olá! Encontrei vocês pelo site e gostaria de consultar um frete: ${service}.`;
}

export function openWhatsApp(opts: { message?: string; location: string; service?: string }) {
  track("whatsapp_click", { button_location: opts.location, service_interest: opts.service ?? "geral" });
  window.open(whatsappUrl(opts.message), "_blank", "noopener,noreferrer");
}

export type QuoteData = {
  nome: string; objeto: string; origem: string; destino: string; prazo: string;
  ajuda?: string | undefined; detalhes?: string | undefined;
};

/** Mensagem do formulário. Campos opcionais vazios são omitidos; nunca inclui telefone do visitante. */
export function buildQuoteMessage(q: QuoteData) {
  const lines = [
    `Nome: ${q.nome.trim()}`,
    `Objeto: ${q.objeto}`,
    `Retirada: ${q.origem.trim()}`,
    `Entrega: ${q.destino.trim()}`,
    `Quando preciso: ${q.prazo}`,
  ];
  if (q.ajuda?.trim()) lines.push(`Ajuda para carga/descarga: ${q.ajuda.trim()}`);
  if (q.detalhes?.trim()) lines.push(`Detalhes: ${q.detalhes.trim()}`);
  return [
    "Olá! Gostaria de solicitar um orçamento de pequeno frete.",
    "",
    ...lines,
    "",
    "Gostaria de consultar a disponibilidade e o valor do transporte. Obrigado!",
  ].join("\n");
}
