import { useState } from "react";
import { CtaLink } from "@/components/Cta";
import { Reveal } from "@/components/Reveal";
import { menu, whatsappLink } from "@/config/site";
import { cn } from "@/lib/utils";

export function MenuSection() {
  const [active, setActive] = useState(menu[0]!.id);
  const current = menu.find((c) => c.id === active) ?? menu[0]!;

  return (
    <section id="cardapio" className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal className="text-center">
          <p className="font-display text-sm font-extrabold tracking-widest text-mango uppercase">
            Cardápio
          </p>
          <h2 className="mt-2 font-display text-3xl font-extrabold text-balance sm:text-4xl lg:text-5xl">
            Escolha seu favorito
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
            Tudo preparado na hora, com ingredientes fresquinhos e do jeito que você gosta.
          </p>
        </Reveal>

        <div
          role="tablist"
          aria-label="Categorias do cardápio"
          className="mt-8 flex flex-wrap justify-center gap-2"
        >
          {menu.map((c) => (
            <button
              key={c.id}
              role="tab"
              aria-selected={active === c.id}
              onClick={() => setActive(c.id)}
              className={cn(
                "rounded-full px-5 py-3 font-display text-sm font-extrabold transition-all duration-300",
                active === c.id
                  ? "gradient-acai text-primary-foreground shadow-card"
                  : "border-2 border-primary/15 bg-card text-foreground/70 hover:border-primary/40 hover:text-primary",
              )}
            >
              <span aria-hidden="true" className="mr-1.5">
                {c.emoji}
              </span>
              {c.label}
            </button>
          ))}
        </div>

        <ul className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {current.items.map((p, i) => (
            <Reveal
              as="li"
              key={p.name}
              delay={i * 70}
              className="group flex flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:shadow-float"
            >
              <div className="relative aspect-square overflow-hidden">
                <img
                  src={p.image}
                  alt={p.name}
                  loading="lazy"
                  width={800}
                  height={800}
                  className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute top-3 right-3 rounded-full bg-card/95 px-3 py-1.5 font-display text-sm font-extrabold text-primary shadow-card">
                  {p.price}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-5">
                <h3 className="font-display text-lg font-extrabold">{p.name}</h3>
                <p className="mt-1.5 flex-1 text-sm text-muted-foreground">{p.description}</p>
                <CtaLink
                  variant="whatsapp"
                  size="md"
                  className="mt-4 w-full"
                  href={whatsappLink(
                    `Olá! Quero pedir 1x ${p.name} (${p.price}). 🍧`,
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Pedir agora
                </CtaLink>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
