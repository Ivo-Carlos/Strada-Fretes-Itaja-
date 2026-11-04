
/**
 * Configuração central do site. Edite aqui nome, WhatsApp, cidades, GTM e URL.
 * WhatsApp: apenas dígitos com DDI + DDD (ex.: "5547999999999"). Vazio = não configurado.
 */
export const site = {
  companyName: "Strada Fretes Itajaí", // nome provisório — substituir pela marca definitiva
  shortDescription:
    "Pequenos fretes e transporte de objetos com utilitário em Itajaí e região.",
  whatsappNumber: "5547997082171", // +55 47 99708-2171
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
    hero: { src: "/images/frete-geladeira-inox.webp", alt: "Fiat Strada branca transportando geladeira inox em Itajaí", w: 900, h: 1200 },
    gallery: [
      { src: "/images/frete-geladeira-inox.webp", alt: "Frete de geladeira inox na caçamba da Fiat Strada", w: 900, h: 1200 },
      { src: "/images/frete-geladeira-duplex.webp", alt: "Duas geladeiras transportadas com cintas na Fiat Strada", w: 900, h: 1200 },
      { src: "/images/frete-expositor-refrigerado.webp", alt: "Expositor refrigerado transportado na caçamba da Fiat Strada", w: 900, h: 1200 },
      { src: "/images/frete-geladeira-branca.webp", alt: "Fiat Strada com geladeira branca amarrada na caçamba", w: 900, h: 1200 },
      { src: "/images/fiat-strada-utilitario.webp", alt: "Fiat Strada branca utilizada nos pequenos fretes", w: 900, h: 1200 },
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
