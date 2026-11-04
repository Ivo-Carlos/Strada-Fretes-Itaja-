import { describe, expect, it } from "vitest";
import { site } from "@/config/site";
import { buildQuoteMessage, whatsappUrl } from "@/lib/whatsapp";

const base = { nome: "Ana", objeto: "Sofá ou outro móvel", origem: "Centro, Itajaí", destino: "Cordeiros, Itajaí", prazo: "Amanhã" };

describe("whatsapp helpers", () => {
  it("builds wa.me link with encoded message", () => {
    expect(whatsappUrl("Olá frete", "+55 47 99999-8888")).toBe("https://wa.me/5547999998888?text=Ol%C3%A1%20frete");
  });
  it("sends every default link to the configured number 5547997082171", () => {
    expect(site.whatsappNumber).toBe("5547997082171");
    expect(whatsappUrl()).toBe("https://wa.me/5547997082171?text=Ol%C3%A1!%20Encontrei%20voc%C3%AAs%20pelo%20site%20e%20gostaria%20de%20solicitar%20um%20or%C3%A7amento%20de%20pequeno%20frete.");
    expect(whatsappUrl(buildQuoteMessage(base))).toContain("https://wa.me/5547997082171?text=");
  });
  it("includes required fields and help answer", () => {
    const m = buildQuoteMessage({ ...base, ajuda: "Sim" });
    expect(m).toContain("Quando preciso: Amanhã");
    expect(m).toContain("Ajuda para carga/descarga: Sim");
  });
  it("omits empty optional fields", () => {
    const m = buildQuoteMessage({ ...base, ajuda: "", detalhes: "  " });
    expect(m).not.toContain("Ajuda para carga/descarga");
    expect(m).not.toContain("Detalhes:");
  });
  it("never includes a phone/WhatsApp line", () => {
    expect(buildQuoteMessage(base)).not.toMatch(/WhatsApp:|Telefone/);
  });
});
