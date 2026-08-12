import { Star } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { testimonials } from "@/config/site";

export function Testimonials() {
  return (
    <section id="avaliacoes" className="relative overflow-hidden py-16 sm:py-24">
      <div aria-hidden="true" className="absolute inset-0 gradient-soft" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal className="text-center">
          <p className="font-display text-sm font-extrabold tracking-widest text-mango uppercase">
            4,9 de 5 · +1.200 pedidos
          </p>
          <h2 className="mt-2 font-display text-3xl font-extrabold text-balance sm:text-4xl lg:text-5xl">
            Quem experimenta, recomenda!
          </h2>
        </Reveal>

        <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {testimonials.map((t, i) => (
            <Reveal
              as="li"
              key={t.name}
              delay={i * 80}
              className="flex flex-col rounded-3xl border border-border bg-card p-6 shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:shadow-float"
            >
              <div className="flex gap-0.5 text-accent" aria-label="5 de 5 estrelas">
                {Array.from({ length: 5 }).map((_, s) => (
                  <Star key={s} className="size-4 fill-current" aria-hidden="true" />
                ))}
              </div>
              <p className="mt-3 flex-1 text-sm text-foreground/80">“{t.text}”</p>
              <div className="mt-5 flex items-center gap-3">
                <span className="flex size-10 items-center justify-center rounded-full gradient-acai font-display text-sm font-extrabold text-primary-foreground">
                  {t.initials}
                </span>
                <span className="font-display text-sm font-extrabold">— {t.name}</span>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
