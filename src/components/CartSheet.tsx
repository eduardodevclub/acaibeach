import { Minus, Plus, ShoppingBag, Trash2 } from "lucide-react";
import { CtaLink } from "@/components/Cta";
import { formatBRL, useCart } from "@/context/cart";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";

export function CartButton({ className }: { className?: string }) {
  const { count, setOpen } = useCart();
  return (
    <button
      type="button"
      onClick={() => setOpen(true)}
      aria-label={`Abrir carrinho (${count} ${count === 1 ? "item" : "itens"})`}
      className={
        "relative flex size-11 items-center justify-center rounded-2xl border-2 border-primary/20 bg-card text-primary transition-colors hover:border-primary/50 " +
        (className ?? "")
      }
    >
      <ShoppingBag className="size-5" aria-hidden="true" />
      {count > 0 && (
        <span className="absolute -top-1.5 -right-1.5 flex min-w-5 items-center justify-center rounded-full gradient-sunset px-1.5 font-display text-xs font-extrabold text-accent-foreground">
          {count}
        </span>
      )}
    </button>
  );
}

export function CartSheet() {
  const { items, open, setOpen, total, setQty, remove, clear, whatsappOrderLink } = useCart();

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetContent side="right" className="flex w-full flex-col gap-0 sm:max-w-md">
        <SheetHeader>
          <SheetTitle className="font-display text-2xl font-extrabold">Seu carrinho</SheetTitle>
          <SheetDescription>Revise seu pedido e finalize pelo WhatsApp.</SheetDescription>
        </SheetHeader>

        {items.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center gap-3 px-6 text-center">
            <ShoppingBag className="size-10 text-primary/40" aria-hidden="true" />
            <p className="text-muted-foreground">
              Seu carrinho está vazio. Monte seu açaí ou escolha algo do cardápio!
            </p>
          </div>
        ) : (
          <ul className="flex-1 space-y-3 overflow-y-auto px-4 py-4">
            {items.map((item) => (
              <li key={item.id} className="flex gap-3 rounded-2xl border border-border bg-card p-3">
                {item.image && (
                  <img
                    src={item.image}
                    alt={item.name}
                    loading="lazy"
                    className="size-16 shrink-0 rounded-xl object-cover"
                  />
                )}
                <div className="min-w-0 flex-1">
                  <p className="font-display text-sm font-extrabold">{item.name}</p>
                  {item.details && (
                    <p className="mt-0.5 text-xs text-muted-foreground">{item.details}</p>
                  )}
                  <div className="mt-2 flex items-center gap-2">
                    <div className="flex items-center gap-1 rounded-full border border-border">
                      <button
                        type="button"
                        aria-label="Diminuir quantidade"
                        onClick={() => setQty(item.id, item.qty - 1)}
                        className="flex size-7 items-center justify-center rounded-full text-primary hover:bg-secondary"
                      >
                        <Minus className="size-3.5" />
                      </button>
                      <span className="min-w-5 text-center font-display text-sm font-extrabold">
                        {item.qty}
                      </span>
                      <button
                        type="button"
                        aria-label="Aumentar quantidade"
                        onClick={() => setQty(item.id, item.qty + 1)}
                        className="flex size-7 items-center justify-center rounded-full text-primary hover:bg-secondary"
                      >
                        <Plus className="size-3.5" />
                      </button>
                    </div>
                    <span className="ml-auto font-display text-sm font-extrabold text-primary">
                      {formatBRL(item.qty * item.unitPrice)}
                    </span>
                    <button
                      type="button"
                      aria-label={`Remover ${item.name}`}
                      onClick={() => remove(item.id)}
                      className="flex size-7 items-center justify-center rounded-full text-muted-foreground hover:text-destructive"
                    >
                      <Trash2 className="size-4" />
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}

        <div className="border-t border-border p-4">
          <div className="flex items-center justify-between">
            <span className="font-bold text-muted-foreground">Total</span>
            <span className="font-display text-2xl font-extrabold text-gradient-acai">
              {formatBRL(total)}
            </span>
          </div>
          <CtaLink
            variant="whatsapp"
            size="lg"
            className={"mt-4 w-full " + (items.length === 0 ? "pointer-events-none opacity-50" : "")}
            href={whatsappOrderLink()}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
          >
            Pedir pelo WhatsApp
          </CtaLink>
          {items.length > 0 && (
            <button
              type="button"
              onClick={clear}
              className="mt-2 w-full rounded-full py-2 text-sm font-bold text-muted-foreground hover:text-destructive"
            >
              Limpar carrinho
            </button>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
}
