import { Reveal } from "@/components/Reveal";

const items = [
  { icon: "🍓", title: "Ingredientes selecionados", text: "Só entra no copo o que a gente comeria." },
  { icon: "🥭", title: "Frutas fresquinhas", text: "Compradas todo dia na feira da região." },
  { icon: "🥤", title: "Preparado na hora", text: "Nada pronto na prateleira, tudo feito no pedido." },
  { icon: "⚡", title: "Entrega rápida", text: "Chega geladinho em até 30 minutos." },
  { icon: "💜", title: "Muito sabor", text: "Cremosidade de verdade em cada colherada." },
];

export function Features() {
  return (
    <section className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal className="text-center">
          <h2 className="font-display text-3xl font-extrabold text-balance sm:text-4xl">
            Por que todo mundo volta?
          </h2>
        </Reveal>
        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {items.map((f, i) => (
            <Reveal
              as="li"
              key={f.title}
              delay={i * 70}
              className="rounded-3xl border border-border bg-card p-6 text-center shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:shadow-float"
            >
              <span aria-hidden="true" className="text-3xl">
                {f.icon}
              </span>
              <h3 className="mt-3 font-display text-base font-extrabold">{f.title}</h3>
              <p className="mt-1.5 text-sm text-muted-foreground">{f.text}</p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
