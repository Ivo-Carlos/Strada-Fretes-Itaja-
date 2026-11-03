import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import {
  Refrigerator, Sofa, WashingMachine, ShoppingBag, Boxes, Truck, MessageCircle, Package, Calculator,
  ClipboardList, MapPin, CalendarCheck, Camera, Navigation, X, ArrowRight, CheckCircle2, Phone,
} from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { nav, site } from "@/config/site";
import { serviceMessage } from "@/lib/whatsapp";
import { track } from "@/lib/tracking";
import { WaButton } from "./WaButton";
import { QuoteForm } from "./QuoteForm";

const wrap = "mx-auto max-w-[1200px] px-4 sm:px-6";

function SectionHead({ title, sub, light = false }: { title: string; sub?: string; light?: boolean }) {
  return (
    <div className="mx-auto mb-10 max-w-2xl text-center sm:mb-14">
      <h2 className={`text-3xl font-extrabold tracking-tight text-balance sm:text-4xl ${light ? "text-primary-foreground" : "text-primary"}`}>{title}</h2>
      {sub && <p className={`mt-4 text-lg ${light ? "text-primary-foreground/75" : "text-muted-foreground"}`}>{sub}</p>}
    </div>
  );
}

export function Hero() {
  const img = site.images.hero;
  return (
    <section id="inicio" className="relative overflow-hidden bg-muted">
      <div className={`${wrap} grid items-center gap-10 py-8 sm:py-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:py-20`}>
        <div className="reveal">
          <span className="eyebrow"><Truck className="h-3.5 w-3.5" /> PEQUENOS FRETES EM ITAJAÍ E REGIÃO</span>
          <h1 className="mt-5 max-w-[16ch] text-[2.4rem] font-extrabold leading-[1.05] tracking-tight text-primary text-balance sm:text-[3.4rem] lg:text-[3.8rem]">
            Precisa de um <span className="text-success">pequeno frete</span> em Itajaí ou região?
          </h1>
          <p className="mt-5 max-w-xl text-lg text-muted-foreground sm:text-xl sm:leading-relaxed">
            Transporte de geladeiras, móveis, eletrodomésticos e pequenos volumes em Itajaí e no Vale do Itajaí. Solicite seu orçamento de forma rápida pelo WhatsApp.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <WaButton location="hero" className="btn-wa !px-8 !py-4 text-base sm:text-lg">Solicitar orçamento pelo WhatsApp</WaButton>
            <a href="#servicos" className="btn-ghost-navy !py-4">Ver serviços <ArrowRight className="h-4 w-4" /></a>
          </div>
          <ul className="mt-9 grid gap-3 border-t border-border pt-6 text-sm font-semibold text-foreground sm:grid-cols-3 sm:gap-4">
            {[
              [MessageCircle, "Atendimento pelo WhatsApp"],
              [Package, "Fretes para pequenos volumes"],
              [Calculator, "Orçamento personalizado"],
            ].map(([Icon, t]) => {
              const I = Icon as typeof Truck;
              return (
                <li key={t as string} className="flex items-center gap-2.5">
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-success-soft text-success"><I className="h-4.5 w-4.5" /></span>
                  {t as string}
                </li>
              );
            })}
          </ul>
        </div>
        <div className="reveal relative mx-auto w-full max-w-md lg:max-w-none" style={{ animationDelay: ".15s" }}>
          <div className="absolute -inset-3 -z-0 rotate-2 rounded-[2rem] bg-navy/90" aria-hidden="true" />
          <img
            src={img.src} alt={img.alt} width={img.w} height={img.h}
            fetchPriority="high" decoding="async"
            className="relative aspect-[4/5] w-full rounded-[1.75rem] lg:aspect-[5/6] object-cover object-[50%_60%] shadow-lift"
          />
          <div className="absolute -bottom-4 left-4 flex items-center gap-2 rounded-2xl bg-background px-4 py-3 text-sm font-bold text-primary shadow-lift">
            <CheckCircle2 className="h-5 w-5 text-success" /> Fotos reais dos nossos fretes
          </div>
        </div>
      </div>
    </section>
  );
}

const services = [
  { icon: Refrigerator, title: "Transporte de Geladeiras", text: "Precisa levar sua geladeira ou freezer para outro endereço? Envie as medidas e consulte a possibilidade do transporte." },
  { icon: Sofa, title: "Transporte de Móveis", text: "Fretes para sofás, mesas, cadeiras, cômodas e outros móveis compatíveis com o veículo." },
  { icon: WashingMachine, title: "Frete de Eletrodomésticos", text: "Transporte de máquinas de lavar, fogões e outros eletrodomésticos, conforme tamanho e condições da carga." },
  { icon: ShoppingBag, title: "Retirada de Compras", text: "Comprou um produto em uma loja ou de outra pessoa? Consulte o transporte até o endereço desejado." },
  { icon: Boxes, title: "Pequenas Mudanças", text: "Transporte de poucos móveis, caixas e objetos para mudanças compactas, respeitando a capacidade do veículo." },
  { icon: Truck, title: "Fretes de Objetos Diversos", text: "Precisa transportar algo diferente? Envie uma foto e as dimensões para avaliação." },
];

export function Services() {
  return (
    <section id="servicos" className="py-16 sm:py-24">
      <div className={wrap}>
        <SectionHead title="Pequenos fretes para o que você precisa transportar" sub="Uma solução prática para transportar móveis, eletrodomésticos e objetos compatíveis com o veículo." />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ icon: Icon, title, text }) => (
            <article key={title} className="card-soft flex h-full flex-col p-6 sm:p-8">
              <div className="flex items-center gap-4">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-success-soft text-success"><Icon className="h-6 w-6" /></span>
                <h3 className="text-lg font-extrabold leading-snug text-primary sm:text-xl">{title}</h3>
              </div>
              <p className="mt-4 flex-1 leading-relaxed text-muted-foreground">{text}</p>
              <WaButton location="servicos" service={title} message={serviceMessage(title)} icon={false}
                className="mt-6 inline-flex min-h-11 items-center gap-1.5 self-start border-t border-border pt-4 font-bold text-success hover:text-success-hover">
                Consultar meu frete <ArrowRight className="h-4 w-4" />
              </WaButton>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Gallery() {
  const [active, setActive] = useState<number | null>(null);
  const imgs = site.images.gallery;
  useEffect(() => {
    if (active === null) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setActive(null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active]);
  return (
    <section id="fretes" className="bg-muted py-16 sm:py-24">
      <div className={wrap}>
        <SectionHead title="Confira alguns fretes realizados" sub="Veja fotos reais do veículo e de transportes realizados." />
        <div className="grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-3">
          {imgs.map((g, i) => (
            <button key={g.src} type="button" onClick={() => setActive(i)} aria-label={`Ampliar foto: ${g.alt}`}
              className="group relative overflow-hidden rounded-2xl shadow-soft focus-visible:outline-3 focus-visible:outline-ring">
              <img src={g.src} alt={g.alt} width={g.w} height={g.h} loading="lazy" decoding="async"
                className="aspect-[3/4] h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]" />
            </button>
          ))}
          <div className="flex flex-col justify-center rounded-2xl bg-navy p-6 text-primary-foreground sm:p-8">
            <Camera className="h-8 w-8 text-success" />
            <h3 className="mt-4 text-xl font-extrabold sm:text-2xl">Precisa transportar algo parecido?</h3>
            <p className="mt-3 text-primary-foreground/75">Envie uma foto do objeto e informe o local de retirada e entrega para solicitar seu orçamento.</p>
            <WaButton location="galeria" className="btn-wa mt-6 self-stretch sm:self-start">Consultar meu frete</WaButton>
          </div>
        </div>
      </div>
      {active !== null && imgs[active] && (
        <div role="dialog" aria-modal="true" aria-label={imgs[active]!.alt}
          className="fixed inset-0 z-50 grid place-items-center bg-navy/90 p-4" onClick={() => setActive(null)}>
          <button type="button" aria-label="Fechar" autoFocus className="absolute right-4 top-4 grid h-11 w-11 place-items-center rounded-full bg-background text-primary">
            <X className="h-5 w-5" />
          </button>
          <img src={imgs[active]!.src} alt={imgs[active]!.alt} className="max-h-[88vh] w-auto rounded-2xl object-contain" />
        </div>
      )}
    </section>
  );
}

const diffs = [
  { icon: MessageCircle, title: "Atendimento direto", text: "Converse pelo WhatsApp e explique o que precisa transportar, sem processos complicados." },
  { icon: Calculator, title: "Orçamento personalizado", text: "Cada frete é avaliado conforme o tipo de carga, distância e condições do transporte." },
  { icon: Package, title: "Fretes para pequenos volumes", text: "Para quem precisa transportar poucos objetos, sem precisar de um caminhão de mudanças." },
  { icon: ClipboardList, title: "Organização do transporte", text: "Informe os detalhes da retirada e entrega para combinar as condições do serviço." },
];

export function Differentials() {
  return (
    <section className="py-16 sm:py-24">
      <div className={wrap}>
        <SectionHead title="Por que solicitar seu frete conosco?" sub="Atendimento simples e direto para quem precisa transportar pequenos volumes." />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {diffs.map(({ icon: Icon, title, text }) => (
            <div key={title} className="card-soft h-full p-7">
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-primary text-primary-foreground"><Icon className="h-6 w-6" /></span>
              <h3 className="mt-6 text-lg font-extrabold text-primary">{title}</h3>
              <p className="mt-2 leading-relaxed text-muted-foreground">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const steps = [
  { icon: Camera, title: "Informe o que precisa transportar", text: "Diga qual é o objeto e, se possível, envie uma foto." },
  { icon: MapPin, title: "Envie origem e destino", text: "Informe os bairros de retirada e entrega e os detalhes de acesso." },
  { icon: Calculator, title: "Receba seu orçamento", text: "Avaliado conforme distância, carga e condições do transporte." },
  { icon: CalendarCheck, title: "Combine o transporte", text: "Após a confirmação, combine a data e os detalhes." },
];

export function HowItWorks() {
  return (
    <section id="como-funciona" className="bg-muted py-16 sm:py-24">
      <div className={wrap}>
        <SectionHead title="Como solicitar seu pequeno frete?" sub="Em poucos passos você pode consultar o transporte que precisa." />
        <ol className="relative grid gap-8 lg:grid-cols-4 lg:gap-6">
          <div className="absolute left-8 top-8 bottom-8 w-0.5 bg-border lg:bottom-auto lg:left-8 lg:right-8 lg:top-8 lg:h-0.5 lg:w-auto" aria-hidden="true" />
          {steps.map(({ icon: Icon, title, text }, i) => (
            <li key={title} className="relative flex gap-4 lg:flex-col lg:gap-0">
              <span className="relative grid h-16 w-16 shrink-0 place-items-center rounded-2xl bg-navy text-primary-foreground shadow-lift">
                <Icon className="h-7 w-7" />
                <span className="absolute -right-2.5 -top-2.5 grid h-8 w-8 place-items-center rounded-full bg-success text-sm font-extrabold text-accent-foreground ring-4 ring-muted">{String(i + 1).padStart(2, "0")}</span>
              </span>
              <div className="pt-2 lg:mt-6 lg:pt-0">
                <h3 className="text-lg font-bold text-primary">{title}</h3>
                <p className="mt-1.5 text-muted-foreground">{text}</p>
              </div>
            </li>
          ))}
        </ol>
        <div className="mt-12 text-center">
          <a href="#orcamento" className="btn-wa text-base">Solicitar orçamento</a>
        </div>
      </div>
    </section>
  );
}

export function ServiceArea() {
  return (
    <section className="py-16 sm:py-24">
      <div className={`${wrap} grid items-center gap-10 lg:grid-cols-2 lg:gap-16`}>
        <div>
          <span className="eyebrow"><Navigation className="h-3.5 w-3.5" /> ÁREA DE ATENDIMENTO</span>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-primary text-balance sm:text-4xl">Pequenos fretes em Itajaí e no Vale do Itajaí</h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            Realizamos pequenos fretes em Itajaí e atendemos diferentes localidades do Vale do Itajaí, conforme a disponibilidade e as condições do transporte.
          </p>
          <p className="mt-4 font-medium text-foreground">Precisa transportar algo? Informe o local de retirada e entrega para consultar a disponibilidade do frete.</p>
          <WaButton location="area_atendimento" message="Olá! Gostaria de consultar se vocês atendem minha região para um pequeno frete." className="btn-wa mt-7">
            Consultar atendimento na minha região
          </WaButton>
        </div>
        <div className="relative overflow-hidden rounded-[1.75rem] bg-navy p-8 text-primary-foreground shadow-lift sm:p-10">
          <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-success/20 blur-3xl" aria-hidden="true" />
          <span className="relative grid h-14 w-14 place-items-center rounded-2xl bg-success text-accent-foreground"><MapPin className="h-7 w-7" /></span>
          <h3 className="relative mt-6 text-2xl font-extrabold sm:text-3xl">Atendimento no Vale do Itajaí</h3>
          <p className="relative mt-3 text-lg text-primary-foreground/75">Consulte a disponibilidade para o seu trajeto.</p>
          <p className="relative mt-8 flex items-center gap-3 rounded-2xl bg-navy-2 p-4 font-semibold">
            <CheckCircle2 className="h-5 w-5 shrink-0 text-success" /> Retirada e entrega conforme orçamento.
          </p>
        </div>
      </div>
    </section>
  );
}

export function MidCta() {
  return (
    <section className="bg-navy">
      <div className={`${wrap} flex flex-col items-start gap-6 py-12 sm:py-14 lg:flex-row lg:items-center lg:justify-between`}>
        <div className="max-w-2xl">
          <h2 className="text-2xl font-extrabold text-primary-foreground sm:text-3xl">Comprou um móvel ou eletrodoméstico e precisa transportar?</h2>
          <p className="mt-3 text-primary-foreground/75">Informe o que precisa levar e receba orientações para solicitar seu orçamento.</p>
        </div>
        <WaButton location="cta_intermediario" className="btn-wa shrink-0">Consultar frete pelo WhatsApp</WaButton>
      </div>
    </section>
  );
}

export const faqs = [
  ["Quanto custa um pequeno frete em Itajaí?", "O valor depende da distância, do tipo de objeto, do volume e das condições de retirada e entrega. Envie os detalhes pelo WhatsApp para solicitar um orçamento."],
  ["Vocês transportam geladeiras?", "Você pode solicitar o transporte de geladeiras e freezers, desde que as dimensões e as condições da carga sejam compatíveis com o veículo."],
  ["Posso contratar um frete para apenas um móvel?", "Sim, é possível solicitar orçamento para transportar um único móvel ou objeto, conforme tamanho e disponibilidade."],
  ["Vocês fazem pequenas mudanças?", "É possível consultar o transporte de pequenos volumes e objetos de mudanças compactas, respeitando a capacidade do veículo."],
  ["Vocês ajudam a carregar e descarregar?", "Informe se precisará de ajuda na carga ou descarga para confirmar as condições e a disponibilidade desse serviço."],
  ["Vocês atendem fora de Itajaí?", "É possível consultar fretes para diferentes localidades do Vale do Itajaí, conforme a disponibilidade e as condições do transporte."],
  ["Como solicitar um orçamento?", "Informe o objeto, o local de retirada, o destino e a data desejada. Se possível, envie uma foto e as medidas aproximadas da carga."],
] as const;

export function Faq() {
  return (
    <section id="duvidas" className="bg-muted py-16 sm:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <SectionHead title="Dúvidas frequentes sobre pequenos fretes" />
        <Accordion type="single" collapsible className="grid gap-3">
          {faqs.map(([q, a], i) => (
            <AccordionItem key={q} value={`q${i}`} className="rounded-2xl border border-border bg-card px-5 shadow-soft transition-shadow data-[state=open]:shadow-lift sm:px-7">
              <AccordionTrigger className="gap-4 py-5 text-left text-base font-bold text-primary hover:no-underline sm:text-lg [&>svg]:h-5 [&>svg]:w-5 [&>svg]:text-success">{q}</AccordionTrigger>
              <AccordionContent className="pb-6 text-base leading-relaxed text-muted-foreground">{a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

export function Quote() {
  return (
    <section id="orcamento" className="scroll-mt-20 py-16 sm:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <SectionHead title="Solicite seu orçamento de pequeno frete" sub="Informe os detalhes do transporte e envie sua solicitação pelo WhatsApp." />
        <QuoteForm />
      </div>
    </section>
  );
}

export function FinalCta() {
  return (
    <section className="px-4 pb-16 sm:px-6 sm:pb-24">
      <div className="relative mx-auto max-w-[1200px] overflow-hidden rounded-[2rem] bg-navy px-6 py-14 text-center sm:px-12 sm:py-20">
        <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-success/25 blur-3xl" aria-hidden="true" />
        <h2 className="relative text-3xl font-extrabold text-primary-foreground text-balance sm:text-5xl">
          Precisa de um frete? <span className="text-success">Solicite seu orçamento!</span>
        </h2>
        <p className="relative mx-auto mt-5 max-w-xl text-lg text-primary-foreground/80">
          Conte o que precisa transportar e consulte a disponibilidade para sua região.
        </p>
        <WaButton location="cta_final" className="btn-wa relative mt-9 !px-9 !py-4 text-lg">Conversar pelo WhatsApp</WaButton>
      </div>
    </section>
  );
}

export function Footer() {
  const year = new Date().getFullYear();
  const serviceList = ["Pequenos fretes", "Transporte de móveis", "Frete de geladeiras", "Transporte de eletrodomésticos", "Pequenas mudanças"];
  const h = "mb-4 text-sm font-bold uppercase tracking-wider text-primary-foreground";
  return (
    <footer className="bg-navy pb-24 text-primary-foreground/75 md:pb-0">
      <div className={`${wrap} grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4`}>
        <div>
          <p className="flex items-center gap-2 text-lg font-extrabold text-primary-foreground"><Truck className="h-5 w-5 text-success" /> {site.companyName}</p>
          <p className="mt-3 text-sm">{site.shortDescription}</p>
        </div>
        <div>
          <p className={h}>Links rápidos</p>
          <ul className="grid gap-2 text-sm">{nav.map((n) => <li key={n.href}><a href={`/${n.href}`} className="hover:text-primary-foreground">{n.label}</a></li>)}</ul>
        </div>
        <div>
          <p className={h}>Serviços</p>
          <ul className="grid gap-2 text-sm">{serviceList.map((s) => <li key={s}>{s}</li>)}</ul>
        </div>
        <div>
          <p className={h}>Contato</p>
          <ul className="grid gap-3 text-sm">
            <li><WaButton location="rodape" icon={false} className="inline-flex items-center gap-2 font-semibold text-success hover:text-primary-foreground"><MessageCircle className="h-4 w-4" /> Falar pelo WhatsApp</WaButton></li>
            {site.phoneNumber && (
              <li><a href={`tel:${site.phoneNumber}`} onClick={() => track("phone_click", { button_location: "rodape" })} className="inline-flex items-center gap-2"><Phone className="h-4 w-4" /> {site.phoneNumber}</a></li>
            )}
            <li className="flex items-center gap-2"><MapPin className="h-4 w-4" /> {site.mainCity} – {site.state}</li>
            <li>Atendimento regional sob consulta</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-primary-foreground/10">
        <div className={`${wrap} flex flex-col gap-2 py-6 text-xs sm:flex-row sm:justify-between`}>
          <p>© {year} {site.companyName}. Todos os direitos reservados.</p>
          <Link to="/privacidade" className="hover:text-primary-foreground">Política de Privacidade</Link>
        </div>
      </div>
    </footer>
  );
}

export function FloatingWhatsApp() {
  return (
    <>
      <WaButton location="flutuante" icon={true}
        className="btn-wa fixed bottom-6 right-6 z-40 hidden !h-14 !w-14 !p-0 md:inline-flex [&>svg]:h-7 [&>svg]:w-7">
        <span className="sr-only">Abrir WhatsApp</span>
      </WaButton>
      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-background/95 px-4 pt-3 backdrop-blur md:hidden"
        style={{ paddingBottom: "max(0.75rem, env(safe-area-inset-bottom))" }}>
        <WaButton location="barra_mobile" className="btn-wa w-full !py-3.5">Solicitar orçamento</WaButton>
      </div>
    </>
  );
}
