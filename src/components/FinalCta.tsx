import { CtaLink } from "@/components/Cta";
import { Reveal } from "@/components/Reveal";
import { whatsappLink } from "@/config/site";

export function FinalCta() {
  return (
    <section className="relative overflow-hidden py-20 text-center sm:py-28">
      <div aria-hidden="true" className="absolute inset-0 gradient-sunset opacity-90" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-20 left-1/4 size-72 rounded-full bg-primary/25 blur-3xl"
      />
      <Reveal className="relative mx-auto max-w-3xl px-4 sm:px-6">
        <h2 className="font-display text-4xl font-extrabold text-balance text-accent-foreground sm:text-5xl lg:text-6xl">
          Qual vai ser o sabor de hoje?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-lg text-accent-foreground/80">
          Escolha seu favorito, monte do seu jeito e peça agora.
        </p>
        <CtaLink
          variant="acai"
          size="xl"
          className="mt-8 w-full sm:w-auto"
          href={whatsappLink("Olá! Quero fazer meu pedido agora. 🍧")}
          target="_blank"
          rel="noopener noreferrer"
        >
          FAZER MEU PEDIDO
        </CtaLink>
      </Reveal>
    </section>
  );
}
