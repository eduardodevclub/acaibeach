import { ShoppingBag } from "lucide-react";
import { CtaButton } from "@/components/Cta";
import { Reveal } from "@/components/Reveal";
import { combos } from "@/config/site";
import { parsePrice, useCart } from "@/context/cart";

export function Combos() {
  const { add, setOpen } = useCart();

  return (
    <section id="combos" className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal className="text-center">
          <p className="font-display text-sm font-extrabold tracking-widest text-mango uppercase">
            Economize
          </p>
          <h2 className="mt-2 font-display text-3xl font-extrabold text-balance sm:text-4xl lg:text-5xl">
            Combos que valem a pena
          </h2>
        </Reveal>

        <ul className="mt-10 grid gap-6 md:grid-cols-3">
          {combos.map((c, i) => (
            <Reveal
              as="li"
              key={c.name}
              delay={i * 90}
              className="group flex flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:shadow-float"
            >
              <div className="aspect-[9/7] overflow-hidden">
                <img
                  src={c.image}
                  alt={c.name}
                  loading="lazy"
                  width={900}
                  height={700}
                  className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="font-display text-xl font-extrabold">{c.name}</h3>
                <p className="mt-2 flex-1 text-sm text-muted-foreground">{c.description}</p>
                <p className="mt-4 font-display text-3xl font-extrabold text-gradient-acai">
                  {c.price}
                </p>
                <CtaButton
                  variant="sunset"
                  size="lg"
                  className="mt-4 w-full"
                  onClick={() => {
                    add({
                      id: `combo-${c.name}`,
                      name: c.name,
                      unitPrice: parsePrice(c.price),
                      image: c.image,
                    });
                    setOpen(true);
                  }}
                >
                  <ShoppingBag className="size-5" aria-hidden="true" />
                  Adicionar ao carrinho
                </CtaButton>

              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
