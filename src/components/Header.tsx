import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { CtaLink } from "@/components/Cta";
import { Logo } from "@/components/Logo";
import { whatsappLink } from "@/config/site";
import { cn } from "@/lib/utils";

const links = [
  { href: "#cardapio", label: "Cardápio" },
  { href: "#monte", label: "Monte seu açaí" },
  { href: "#combos", label: "Combos" },
  { href: "#avaliacoes", label: "Avaliações" },
  { href: "#localizacao", label: "Onde estamos" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled ? "bg-background/85 shadow-card backdrop-blur-lg" : "bg-transparent",
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6">
        <a href="#top" aria-label="Ir para o topo">
          <Logo />
        </a>

        <nav aria-label="Navegação principal" className="hidden items-center gap-1 lg:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-full px-4 py-2 text-sm font-bold text-foreground/75 transition-colors hover:bg-secondary hover:text-primary"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <CtaLink
            variant="whatsapp"
            size="sm"
            href={whatsappLink("Olá! Vim pelo site e gostaria de fazer um pedido. 🍧")}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex"
          >
            Pedir pelo WhatsApp
          </CtaLink>
          <button
            type="button"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="flex size-11 items-center justify-center rounded-2xl border-2 border-primary/20 bg-card text-primary lg:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="mx-4 mb-3 rounded-3xl border border-border bg-card p-3 shadow-float lg:hidden">
          <nav aria-label="Navegação mobile" className="flex flex-col">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-2xl px-4 py-3 text-base font-bold text-foreground/80 transition-colors hover:bg-secondary hover:text-primary"
              >
                {l.label}
              </a>
            ))}
            <CtaLink
              variant="whatsapp"
              size="lg"
              className="mt-2"
              href={whatsappLink("Olá! Vim pelo site e gostaria de fazer um pedido. 🍧")}
              target="_blank"
              rel="noopener noreferrer"
            >
              Pedir pelo WhatsApp
            </CtaLink>
          </nav>
        </div>
      )}
    </header>
  );
}
