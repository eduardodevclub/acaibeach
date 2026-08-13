import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { site } from "@/config/site";

export type CartItem = {
  id: string;
  name: string;
  details?: string;
  unitPrice: number;
  qty: number;
  image?: string;
};

type CartContextValue = {
  items: CartItem[];
  count: number;
  total: number;
  open: boolean;
  setOpen: (v: boolean) => void;
  add: (item: Omit<CartItem, "qty">, qty?: number) => void;
  remove: (id: string) => void;
  setQty: (id: string, qty: number) => void;
  clear: () => void;
  whatsappOrderLink: () => string;
};

const CartContext = createContext<CartContextValue | null>(null);

const STORAGE_KEY = "acai-tropical-cart";

export const formatBRL = (value: number) =>
  value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });

export const parsePrice = (price: string) =>
  Number(price.replace(/[^\d,]/g, "").replace(",", ".")) || 0;

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) setItems(JSON.parse(raw) as CartItem[]);
    } catch {
      /* ignore */
    }
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch {
      /* ignore */
    }
  }, [items]);

  const add = useCallback((item: Omit<CartItem, "qty">, qty = 1) => {
    setItems((prev) => {
      const existing = prev.find((p) => p.id === item.id);
      if (existing) {
        return prev.map((p) => (p.id === item.id ? { ...p, qty: p.qty + qty } : p));
      }
      return [...prev, { ...item, qty }];
    });
  }, []);

  const remove = useCallback((id: string) => {
    setItems((prev) => prev.filter((p) => p.id !== id));
  }, []);

  const setQty = useCallback((id: string, qty: number) => {
    setItems((prev) =>
      qty <= 0 ? prev.filter((p) => p.id !== id) : prev.map((p) => (p.id === id ? { ...p, qty } : p)),
    );
  }, []);

  const clear = useCallback(() => setItems([]), []);

  const count = items.reduce((sum, i) => sum + i.qty, 0);
  const total = items.reduce((sum, i) => sum + i.qty * i.unitPrice, 0);

  const whatsappOrderLink = useCallback(() => {
    const lines = items.map(
      (i) =>
        `• ${i.qty}x ${i.name}${i.details ? ` (${i.details})` : ""} — ${formatBRL(i.qty * i.unitPrice)}`,
    );
    const message = [
      "Olá! Quero fazer um pedido 🍧",
      "",
      ...lines,
      "",
      `Total: ${formatBRL(items.reduce((s, i) => s + i.qty * i.unitPrice, 0))}`,
    ].join("\n");
    return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;
  }, [items]);

  const value = useMemo<CartContextValue>(
    () => ({ items, count, total, open, setOpen, add, remove, setQty, clear, whatsappOrderLink }),
    [items, count, total, open, add, remove, setQty, clear, whatsappOrderLink],
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart deve ser usado dentro de CartProvider");
  return ctx;
}
