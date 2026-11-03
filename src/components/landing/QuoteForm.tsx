import { useState, type FormEvent } from "react";
import { Link } from "@tanstack/react-router";
import { z } from "zod";
import { ShieldCheck } from "lucide-react";
import { helpOptions, transportOptions, whenOptions } from "@/config/site";
import { buildQuoteMessage, whatsappUrl } from "@/lib/whatsapp";
import { track } from "@/lib/tracking";
import { WhatsAppIcon } from "./icons";

const schema = z.object({
  nome: z.string().trim().min(2, "Informe seu nome").max(80),
  objeto: z.string().min(1, "Selecione o que deseja transportar"),
  origem: z.string().trim().min(3, "Informe o local de retirada").max(120),
  destino: z.string().trim().min(3, "Informe o local de entrega").max(120),
  prazo: z.string().min(1, "Selecione quando precisa do frete"),
  ajuda: z.string().optional(),
  detalhes: z.string().max(600).optional(),
});
type Data = z.infer<typeof schema>;
const empty: Data = { nome: "", objeto: "", origem: "", destino: "", prazo: "", ajuda: "", detalhes: "" };

export function QuoteForm() {
  const [data, setData] = useState<Data>(empty);
  const [errors, setErrors] = useState<Partial<Record<keyof Data, string>>>({});
  const set = (k: keyof Data, v: string) => {
    setData((d) => ({ ...d, [k]: v }));
    if (errors[k]) setErrors((e) => ({ ...e, [k]: undefined }));
  };

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    const r = schema.safeParse(data);
    if (!r.success) {
      const errs: typeof errors = {};
      r.error.issues.forEach((i) => (errs[i.path[0] as keyof Data] ??= i.message));
      setErrors(errs);
      document.getElementById(`f-${Object.keys(errs)[0]}`)?.focus();
      return;
    }
    setErrors({});
    // Único evento de conversão do formulário (sem dados pessoais); não dispara whatsapp_click para evitar contagem dupla.
    track("quote_form_submit", { form_name: "orcamento_frete", button_location: "formulario_orcamento", service_interest: r.data.objeto });
    window.open(whatsappUrl(buildQuoteMessage(r.data)), "_blank", "noopener,noreferrer");
  }

  const err = (k: keyof Data) =>
    errors[k] ? <p id={`e-${k}`} className="mt-1.5 text-sm font-medium text-destructive">{errors[k]}</p> : null;
  const aria = (k: keyof Data) => ({ id: `f-${k}`, "aria-invalid": !!errors[k], "aria-describedby": errors[k] ? `e-${k}` : undefined });
  const label = "mb-2 block text-[0.95rem] font-semibold text-primary";
  const opt = <span className="font-normal text-muted-foreground">(opcional)</span>;

  return (
    <form noValidate onSubmit={onSubmit} className="grid gap-5 rounded-[1.75rem] border border-border bg-card p-5 shadow-lift sm:grid-cols-2 sm:gap-x-6 sm:p-9">
      <div>
        <label htmlFor="f-nome" className={label}>Nome *</label>
        <input {...aria("nome")} className="field" placeholder="Como podemos te chamar?" autoComplete="given-name" value={data.nome} onChange={(e) => set("nome", e.target.value)} />
        {err("nome")}
      </div>
      <div>
        <label htmlFor="f-objeto" className={label}>O que deseja transportar? *</label>
        <select {...aria("objeto")} className="field cursor-pointer" value={data.objeto} onChange={(e) => set("objeto", e.target.value)}>
          <option value="">Selecione</option>
          {transportOptions.map((o) => <option key={o}>{o}</option>)}
        </select>
        {err("objeto")}
      </div>
      <div>
        <label htmlFor="f-origem" className={label}>Local de retirada *</label>
        <input {...aria("origem")} className="field" placeholder="Bairro e cidade de retirada" value={data.origem} onChange={(e) => set("origem", e.target.value)} />
        {err("origem")}
      </div>
      <div>
        <label htmlFor="f-destino" className={label}>Local de entrega *</label>
        <input {...aria("destino")} className="field" placeholder="Bairro e cidade de entrega" value={data.destino} onChange={(e) => set("destino", e.target.value)} />
        {err("destino")}
      </div>
      <div>
        <label htmlFor="f-prazo" className={label}>Quando precisa do frete? *</label>
        <select {...aria("prazo")} className="field cursor-pointer" value={data.prazo} onChange={(e) => set("prazo", e.target.value)}>
          <option value="">Selecione</option>
          {whenOptions.map((o) => <option key={o}>{o}</option>)}
        </select>
        {err("prazo")}
      </div>
      <div>
        <label htmlFor="f-ajuda" className={label}>Ajuda para carregar ou descarregar? {opt}</label>
        <select {...aria("ajuda")} className="field cursor-pointer" value={data.ajuda} onChange={(e) => set("ajuda", e.target.value)}>
          <option value="">Selecione</option>
          {helpOptions.map((o) => <option key={o}>{o}</option>)}
        </select>
      </div>
      <div className="sm:col-span-2">
        <label htmlFor="f-detalhes" className={label}>Detalhes do transporte {opt}</label>
        <textarea {...aria("detalhes")} rows={3} className="field resize-y" placeholder="Conte um pouco mais sobre o frete. Quantidade de objetos, medidas aproximadas, escadas, elevador ou outras informações importantes." value={data.detalhes} onChange={(e) => set("detalhes", e.target.value)} />
      </div>
      <div className="pt-1 sm:col-span-2">
        <button type="submit" className="btn-wa w-full !py-4 text-base sm:text-lg">
          <WhatsAppIcon className="h-6 w-6" /> Enviar orçamento pelo WhatsApp
        </button>
        <p className="mt-4 flex items-start gap-2 text-sm text-muted-foreground">
          <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-success" />
          <span>
            Seus dados não ficam salvos no site: eles apenas preenchem a mensagem que você revisa e envia no WhatsApp.{" "}
            <Link to="/privacidade" className="font-semibold underline underline-offset-2">Política de Privacidade</Link>.
          </span>
        </p>
      </div>
    </form>
  );
}
