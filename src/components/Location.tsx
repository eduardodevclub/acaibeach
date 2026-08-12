import { CtaLink } from "@/components/Cta";
import { Reveal } from "@/components/Reveal";
import { site } from "@/config/site";

export function Location() {
  return (
    <section id="localizacao" className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal className="text-center">
          <h2 className="font-display text-3xl font-extrabold text-balance sm:text-4xl lg:text-5xl">
            Estamos pertinho de você!
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-6 lg:grid-cols-[1fr_1.3fr]">
          <Reveal className="rounded-3xl border border-border bg-card p-7 shadow-card">
            <ul className="space-y-4 text-[15px] font-semibold">
              <li className="flex gap-3">
                <span aria-hidden="true">📍</span>
                <span>
                  {site.address}
                  <br />
                  <span className="text-muted-foreground">{site.city}</span>
                </span>
              </li>
              <li className="flex gap-3">
                <span aria-hidden="true">📞</span>
                <a href={`tel:+${site.whatsapp}`} className="hover:text-primary">
                  {site.phoneLabel}
                </a>
              </li>
              <li className="flex gap-3">
                <span aria-hidden="true">🕐</span>
                <span>{site.hours}</span>
              </li>
            </ul>
            <CtaLink
              variant="acai"
              size="lg"
              className="mt-6 w-full"
              href={site.mapsDirections}
              target="_blank"
              rel="noopener noreferrer"
            >
              Como chegar
            </CtaLink>
          </Reveal>

          <Reveal delay={100} className="overflow-hidden rounded-3xl border border-border shadow-card">
            <iframe
              title={`Mapa da localização da ${site.name}`}
              src={site.mapsEmbed}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-80 w-full lg:h-full lg:min-h-[22rem]"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
