import { site } from "@/config/site";

export function Logo({ inverted = false }: { inverted?: boolean }) {
  return (
    <span className="flex items-center gap-2.5">
      <span className="gradient-acai flex size-10 items-center justify-center rounded-2xl text-lg shadow-card">
        🍧
      </span>
      <span className="leading-none">
        <span
          className={`block font-display text-xl font-extrabold ${
            inverted ? "text-primary-foreground" : "text-foreground"
          }`}
        >
          {site.name}
        </span>
        <span
          className={`block text-[11px] font-semibold tracking-wide uppercase ${
            inverted ? "text-primary-foreground/70" : "text-muted-foreground"
          }`}
        >
          Sorveteria & Açaiteria
        </span>
      </span>
    </span>
  );
}
