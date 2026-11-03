import { createFileRoute } from "@tanstack/react-router";
import { site } from "@/config/site";
import { Header } from "@/components/landing/Header";
import {
  Hero, Services, Gallery, Differentials, HowItWorks, ServiceArea, MidCta, Faq, Quote, FinalCta, Footer, FloatingWhatsApp, faqs,
} from "@/components/landing/Sections";

const title = "Pequenos Fretes em Itajaí SC e Região | Orçamento";
const description =
  "Precisa de pequenos fretes em Itajaí SC? Transporte de geladeiras, móveis, eletrodomésticos e pequenos volumes. Solicite orçamento pelo WhatsApp.";
const url = site.canonicalUrl ? `${site.canonicalUrl}/` : "/";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: url },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: url }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          serviceType: "Pequenos fretes e transporte de objetos",
          provider: { "@type": "Organization", name: site.companyName },
          areaServed: [{ "@type": "City", name: site.mainCity }, { "@type": "Place", name: site.region }],
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map(([q, a]) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })),
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <Gallery />
        <Differentials />
        <HowItWorks />
        <ServiceArea />
        <MidCta />
        <Faq />
        <Quote />
        <FinalCta />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
