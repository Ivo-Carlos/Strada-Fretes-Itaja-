import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { site } from "@/config/site";

const title = `Política de Privacidade | ${site.companyName}`;
const description = "Saiba como tratamos as informações quando você solicita um orçamento de pequeno frete pelo site.";

export const Route = createFileRoute("/privacidade")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary" },
    ],
    links: [{ rel: "canonical", href: `${site.canonicalUrl}/privacidade` }],
  }),
  component: Privacy,
});

function Privacy() {
  const p = site.privacy;
  const h2 = "mt-10 text-xl font-bold text-primary";
  return (
    <main className="mx-auto max-w-3xl px-4 py-12 text-muted-foreground sm:px-6 sm:py-20 [&_p]:mt-3 [&_li]:mt-2">
      <Link to="/" className="inline-flex items-center gap-2 text-sm font-semibold text-success"><ArrowLeft className="h-4 w-4" /> Voltar ao início</Link>
      <h1 className="mt-6 text-3xl font-extrabold text-primary sm:text-4xl">Política de Privacidade</h1>
      <p>Última atualização: {p.updatedAt}</p>

      <h2 className={h2}>1. Quem somos</h2>
      <p>Este site pertence a {site.companyName}, serviço de pequenos fretes com base em {site.mainCity} – {site.stateShort}. Responsável pelo tratamento de dados: {p.controllerName}. Contato: {p.contactEmail}.</p>

      <h2 className={h2}>2. Quais dados são usados</h2>
      <p>O formulário de orçamento pede nome, WhatsApp, tipo de objeto, locais de retirada e entrega, prazo e detalhes opcionais. Esses dados <strong>não são armazenados pelo site</strong>: eles servem apenas para montar uma mensagem que é aberta no seu WhatsApp. Você revisa e decide se envia.</p>

      <h2 className={h2}>3. Conversas pelo WhatsApp</h2>
      <p>Ao enviar a mensagem, as informações passam a constar na conversa do WhatsApp, serviço da Meta, sujeito às políticas próprias da plataforma. Usamos esses dados apenas para responder ao seu pedido de orçamento e combinar o transporte.</p>

      <h2 className={h2}>4. Cookies e medição</h2>
      <p>O site pode utilizar ferramentas de medição (como Google Tag Manager, Google Analytics e Google Ads) para entender o uso da página e o desempenho de anúncios. Esses registros contam cliques em botões, sem incluir seu nome, telefone, endereço ou mensagem.</p>

      <h2 className={h2}>5. Seus direitos</h2>
      <p>Conforme a Lei Geral de Proteção de Dados (LGPD – Lei 13.709/2018), você pode solicitar acesso, correção ou exclusão de dados pessoais que tenha nos enviado, pelo contato indicado acima.</p>

      <h2 className={h2}>6. Alterações</h2>
      <p>Esta política pode ser atualizada. A data no topo indica a versão vigente.</p>
    </main>
  );
}
