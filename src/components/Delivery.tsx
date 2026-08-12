import { CtaLink } from "@/components/Cta";
import { Reveal } from "@/components/Reveal";
import { whatsappLink } from "@/config/site";

export function Delivery() {
  return (
    <section className="px-4 py-8 sm:px-6 sm:py-12">
      <Reveal className="mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] gradient-acai p-8 shadow-float sm:p-12">
        <div className="grid items-center gap-8 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <h2 className="font-display text-3xl font-extrabold text-balance text-primary-foreground sm:text-4xl lg:text-5xl">
              Bateu aquela vontade?
            </h2>
            <p className="mt-3 max-w-lg text-primary-foreground/80">
              Peça seu açaí, sorvete ou milk-shake sem sair de casa.
            </p>
            <CtaLink
              variant="sunset"
              size="lg"
              className="mt-6"
              href={whatsappLink("Olá! Quero pedir delivery. 🍧")}
              target="_blank"
              rel="noopener noreferrer"
            >
              Pedir pelo WhatsApp
            </CtaLink>
          </div>
          <ul className="grid gap-3">
            {[
              { icon: "📍", text: "Entregamos em toda a região" },
              { icon: "🕐", text: "Funcionamento: 14h às 23h" },
              { icon: "💳", text: "Pix, cartão e dinheiro" },
            ].map((i) => (
              <li
                key={i.text}
                className="flex items-center gap-3 rounded-2xl bg-primary-foreground/10 px-4 py-3 font-bold text-primary-foreground backdrop-blur-sm"
              >
                <span aria-hidden="true">{i.icon}</span>
                {i.text}
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </section>
  );
}
