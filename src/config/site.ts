import heroImg from "@/assets/frete-geladeira-inox.webp.asset.json";
import duplexImg from "@/assets/frete-geladeira-duplex.webp.asset.json";
import expositorImg from "@/assets/frete-expositor-refrigerado.webp.asset.json";
import stradaImg from "@/assets/fiat-strada-utilitario.webp.asset.json";
import brancaImg from "@/assets/frete-geladeira-branca.webp.asset.json";

/**
 * Configuração central do site. Edite aqui nome, WhatsApp, cidades, GTM e URL.
 * WhatsApp: apenas dígitos com DDI + DDD (ex.: "5547999999999"). Vazio = não configurado.
 */
export const site = {
  companyName: "Strada Fretes Itajaí", // nome provisório — substituir pela marca definitiva
  shortDescription:
    "Pequenos fretes e transporte de objetos com utilitário em Itajaí e região.",
  whatsappNumber: "554796980353", // +55 47 9698-0353
  phoneNumber: "", // opcional: telefone clicável (dispara phone_click)
  mainCity: "Itajaí",
  state: "Santa Catarina",
  stateShort: "SC",
  region: "Vale do Itajaí",
  gtmId: "GTM-KNMGZLJG", // contêiner único do Google Tag Manager
  canonicalUrl: "", // ex.: "https://www.seudominio.com.br" (sem barra final)
  defaultMessage:
    "Olá! Encontrei vocês pelo site e gostaria de solicitar um orçamento de pequeno frete.",
  privacy: {
    controllerName: "[Nome do responsável]", // editar
    contactEmail: "[e-mail de contato]", // editar
    updatedAt: "03/11/2026",
  },
  images: {
    hero: { src: heroImg.url, alt: "Fiat Strada branca transportando geladeira inox em Itajaí", w: 900, h: 1200 },
    gallery: [
      { src: heroImg.url, alt: "Frete de geladeira inox na caçamba da Fiat Strada", w: 900, h: 1200 },
      { src: duplexImg.url, alt: "Duas geladeiras transportadas com cintas na Fiat Strada", w: 900, h: 1200 },
      { src: expositorImg.url, alt: "Expositor refrigerado transportado na caçamba da Fiat Strada", w: 900, h: 1200 },
      { src: brancaImg.url, alt: "Fiat Strada com geladeira branca amarrada na caçamba", w: 900, h: 1200 },
      { src: stradaImg.url, alt: "Fiat Strada branca utilizada nos pequenos fretes", w: 900, h: 1200 },
    ],
  },
} as const;

export const nav = [
  { label: "Início", href: "#inicio" },
  { label: "Serviços", href: "#servicos" },
  { label: "Nossos Fretes", href: "#fretes" },
  { label: "Como Funciona", href: "#como-funciona" },
  { label: "Dúvidas", href: "#duvidas" },
] as const;

export const transportOptions = [
  "Geladeira ou freezer",
  "Máquina de lavar",
  "Fogão ou eletrodoméstico",
  "Sofá ou outro móvel",
  "Pequena mudança",
  "Retirada de compra",
  "Outros objetos",
] as const;

export const helpOptions = ["Sim", "Não", "Preciso confirmar"] as const;

export const whenOptions = [
  "Hoje, se houver disponibilidade",
  "Amanhã",
  "Nos próximos dias",
  "Data a combinar",
] as const;
