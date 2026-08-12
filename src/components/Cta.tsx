import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

export const ctaVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-full font-display font-bold tracking-tight transition-all duration-300 active:scale-[0.97] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-ring/30 disabled:opacity-60",
  {
    variants: {
      variant: {
        acai: "gradient-acai text-primary-foreground shadow-card hover:shadow-float hover:-translate-y-0.5",
        sunset:
          "gradient-sunset text-accent-foreground shadow-card hover:shadow-float hover:-translate-y-0.5",
        whatsapp:
          "bg-whatsapp text-whatsapp-foreground shadow-card hover:brightness-105 hover:shadow-float hover:-translate-y-0.5",
        outline:
          "border-2 border-primary/25 bg-card text-primary hover:border-primary/60 hover:bg-secondary hover:-translate-y-0.5",
        ghostLight:
          "border-2 border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground/10",
      },
      size: {
        sm: "h-10 px-4 text-sm",
        md: "h-12 px-6 text-[15px]",
        lg: "h-14 px-8 text-base",
        xl: "h-16 px-10 text-lg",
      },
    },
    defaultVariants: { variant: "acai", size: "md" },
  },
);

type Props = VariantProps<typeof ctaVariants> & {
  children: ReactNode;
  className?: string;
};

export function CtaLink({
  variant,
  size,
  className,
  children,
  ...rest
}: Props & AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <a className={cn(ctaVariants({ variant, size }), className)} {...rest}>
      {children}
    </a>
  );
}

export function CtaButton({
  variant,
  size,
  className,
  children,
  ...rest
}: Props & ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button className={cn(ctaVariants({ variant, size }), className)} {...rest}>
      {children}
    </button>
  );
}
