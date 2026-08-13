import { useState } from "react";
import { Check, ShoppingBag } from "lucide-react";
import { CtaButton } from "@/components/Cta";
import { Reveal } from "@/components/Reveal";
import { basePrices, bases, sizePrices, sizes, toppingPrice, toppings } from "@/config/site";
import { formatBRL, useCart } from "@/context/cart";
import { cn } from "@/lib/utils";

function Chip({
  selected,
  children,
  onClick,
}: {
  selected: boolean;
  children: React.ReactNode;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      aria-pressed={selected}
      onClick={onClick}
      className={cn(
        "flex items-center gap-2 rounded-2xl border-2 px-4 py-3 font-display text-sm font-extrabold transition-all duration-200 active:scale-95",
        selected
          ? "border-transparent gradient-acai text-primary-foreground shadow-card"
          : "border-primary/15 bg-card text-foreground/75 hover:border-primary/45 hover:text-primary",
      )}
    >
      {selected && <Check className="size-4" aria-hidden="true" />}
      {children}
    </button>
  );
}

export function Builder() {
  const [size, setSize] = useState(sizes[1]!);
  const [base, setBase] = useState(bases[0]!);
  const [picked, setPicked] = useState<string[]>(["Granola", "Morango"]);
  const { add, setOpen } = useCart();

  const toggle = (t: string) =>
    setPicked((prev) => (prev.includes(t) ? prev.filter((p) => p !== t) : [...prev, t]));

  const unitPrice =
    (sizePrices[size] ?? 0) + (basePrices[base] ?? 0) + picked.length * toppingPrice;

  const details = `${base}${picked.length ? ` · ${picked.join(", ")}` : ""}`;

  const addToCart = () => {
    add({
      id: `montado-${size}-${base}-${[...picked].sort().join("|")}`,
      name: `Açaí montado ${size}`,
      details,
      unitPrice,
    });
    setOpen(true);
  };


  return (
    <section id="monte" className="relative overflow-hidden py-16 sm:py-24">
      <div aria-hidden="true" className="absolute inset-0 gradient-soft" />
      <div className="relative mx-auto max-w-5xl px-4 sm:px-6">
        <Reveal className="text-center">
          <p className="font-display text-sm font-extrabold tracking-widest text-leaf uppercase">
            Interativo
          </p>
          <h2 className="mt-2 font-display text-3xl font-extrabold text-balance sm:text-4xl lg:text-5xl">
            Monte seu açaí do seu jeito!
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
            Em 4 passinhos seu pedido já vai direto pro nosso WhatsApp.
          </p>
        </Reveal>

        <Reveal className="mt-10 rounded-[2rem] border border-border bg-card p-5 shadow-float sm:p-8">
          <Step n={1} title="Escolha o tamanho">
            <div className="flex flex-wrap gap-2.5">
              {sizes.map((s) => (
                <Chip key={s} selected={size === s} onClick={() => setSize(s)}>
                  {s}
                </Chip>
              ))}
            </div>
          </Step>

          <Step n={2} title="Escolha a base">
            <div className="flex flex-wrap gap-2.5">
              {bases.map((b) => (
                <Chip key={b} selected={base === b} onClick={() => setBase(b)}>
                  {b}
                </Chip>
              ))}
            </div>
          </Step>

          <Step n={3} title="Escolha seus acompanhamentos">
            <div className="flex flex-wrap gap-2.5">
              {toppings.map((t) => (
                <Chip key={t} selected={picked.includes(t)} onClick={() => toggle(t)}>
                  {t}
                </Chip>
              ))}
            </div>
          </Step>

          <Step n={4} title="Finalize seu pedido" last>
            <div className="rounded-3xl bg-secondary p-5">
              <p className="text-sm font-bold text-secondary-foreground">
                {size} · {base} · {picked.length} acompanhamento
                {picked.length === 1 ? "" : "s"}
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
                {picked.length ? picked.join(" · ") : "Escolha seus acompanhamentos acima"}
              </p>
              <CtaLink
                variant="whatsapp"
                size="lg"
                className="mt-4 w-full sm:w-auto"
                href={whatsappLink(message)}
                target="_blank"
                rel="noopener noreferrer"
              >
                Montar meu açaí
              </CtaLink>
            </div>
          </Step>
        </Reveal>
      </div>
    </section>
  );
}

function Step({
  n,
  title,
  children,
  last,
}: {
  n: number;
  title: string;
  children: React.ReactNode;
  last?: boolean;
}) {
  return (
    <div className={cn("pb-6", !last && "mb-6 border-b border-border")}>
      <h3 className="mb-3 flex items-center gap-3 font-display text-lg font-extrabold">
        <span className="flex size-8 items-center justify-center rounded-full gradient-sunset font-display text-sm text-accent-foreground">
          {n}
        </span>
        {title}
      </h3>
      {children}
    </div>
  );
}
