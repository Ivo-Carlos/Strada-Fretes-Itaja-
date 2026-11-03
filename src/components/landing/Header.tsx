import { useState } from "react";
import { Menu, Truck, X } from "lucide-react";
import { nav, site } from "@/config/site";

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-[1200px] items-center justify-between gap-4 px-4 sm:px-6">
        <a href="#inicio" className="flex min-w-0 items-center gap-2.5 font-extrabold text-primary">
          <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-primary text-primary-foreground">
            <Truck className="h-5 w-5" />
          </span>
          <span className="truncate text-base sm:text-lg">{site.companyName}</span>
        </a>
        <nav aria-label="Principal" className="hidden lg:block">
          <ul className="flex items-center gap-7 text-sm font-semibold text-muted-foreground">
            {nav.map((n) => (
              <li key={n.href}><a href={n.href} className="transition-colors hover:text-primary">{n.label}</a></li>
            ))}
          </ul>
        </nav>
        <div className="flex shrink-0 items-center gap-2">
          <a href="#orcamento" className="btn-wa hidden !px-4 !py-2.5 text-sm sm:inline-flex">Solicitar Orçamento</a>
          <button
            type="button"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
            onClick={() => setOpen(!open)}
            className="grid h-10 w-10 place-items-center rounded-xl border border-border text-primary lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>
      {open && (
        <nav aria-label="Menu móvel" className="border-t border-border bg-background lg:hidden">
          <ul className="mx-auto max-w-[1200px] px-4 py-2">
            {nav.map((n) => (
              <li key={n.href}>
                <a href={n.href} onClick={() => setOpen(false)} className="block rounded-lg px-3 py-3 font-semibold text-foreground hover:bg-muted">
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
