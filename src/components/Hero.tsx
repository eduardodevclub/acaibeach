import heroAcai from "@/assets/hero-acai.jpg";
import { CtaLink } from "@/components/Cta";
import { whatsappLink } from "@/config/site";

const trust = [
  { icon: "⭐", label: "4,9/5 de avaliação" },
  { icon: "🥤", label: "Preparado na hora" },
  { icon: "🚀", label: "Entrega rápida" },
  { icon: "❤️", label: "Feito com carinho" },
];

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden gradient-soft pt-28 pb-16 sm:pt-32 lg:pb-24">
      {/* formas orgânicas tropicais */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 -left-24 size-80 rounded-full bg-primary/15 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-40 -right-20 size-96 rounded-full bg-accent/25 blur-3xl"
      />
      <div aria-hidden="true" className="pointer-events-none absolute top-24 left-6 hidden text-4xl opacity-70 animate-float-soft lg:block">
        🍃
      </div>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-16 left-1/3 hidden text-3xl opacity-70 animate-float-soft lg:block"
        style={{ animationDelay: "1.5s" }}
      >
        🍓
      </div>

      <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16">
        <div className="text-center lg:text-left">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/15 bg-card px-4 py-2 text-xs font-extrabold tracking-wide text-primary uppercase shadow-card">
            🫐 Açaí cremoso todos os dias
          </span>

          <h1 className="mt-5 font-display text-4xl leading-[1.05] font-extrabold text-balance sm:text-5xl lg:text-6xl">
            Seu momento mais gostoso <span className="text-gradient-acai">começa aqui!</span>
          </h1>

          <p className="mx-auto mt-5 max-w-xl text-base text-muted-foreground sm:text-lg lg:mx-0">
            Açaí cremoso, sorvetes irresistíveis e combinações do seu jeito. Monte seu copo e
            aproveite!
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center lg:justify-start">
            <CtaLink
              variant="whatsapp"
              size="lg"
              href={whatsappLink("Olá! Vim pelo site e gostaria de fazer um pedido. 🍧")}
              target="_blank"
              rel="noopener noreferrer"
            >
              Pedir pelo WhatsApp
            </CtaLink>
            <CtaLink variant="outline" size="lg" href="#cardapio">
              Ver nosso cardápio
            </CtaLink>
          </div>

          <ul className="mx-auto mt-9 grid max-w-lg grid-cols-2 gap-3 lg:mx-0">
            {trust.map((t) => (
              <li
                key={t.label}
                className="flex items-center gap-2 rounded-2xl border border-border bg-card/80 px-3 py-2.5 text-left text-sm font-bold shadow-card"
              >
                <span aria-hidden="true" className="text-base">
                  {t.icon}
                </span>
                {t.label}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative">
          <div
            aria-hidden="true"
            className="absolute inset-6 rotate-6 rounded-[3rem] gradient-sunset opacity-70 blur-sm"
          />
          <img
            src={heroAcai}
            alt="Copo de açaí cremoso com morango, banana, granola e leite condensado"
            width={1200}
            height={1408}
            fetchPriority="high"
            className="relative mx-auto w-full max-w-md rounded-[2.5rem] object-cover shadow-float"
          />
          <div className="absolute -bottom-4 left-2 rounded-2xl bg-card px-4 py-3 shadow-float sm:left-6">
            <p className="font-display text-sm font-extrabold text-primary">A partir de</p>
            <p className="font-display text-2xl font-extrabold">R$ 16,90</p>
          </div>
        </div>
      </div>
    </section>
  );
}
