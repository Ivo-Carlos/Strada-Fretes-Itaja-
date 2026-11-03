import { createFileRoute } from "@tanstack/react-router";
import { site } from "@/config/site";

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: ({ request }) => {
        const base = site.canonicalUrl || new URL(request.url).origin;
        const urls = ["/", "/privacidade"]
          .map((p) => `<url><loc>${base}${p}</loc></url>`)
          .join("");
        return new Response(
          `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}</urlset>`,
          { headers: { "Content-Type": "application/xml" } },
        );
      },
    },
  },
});
