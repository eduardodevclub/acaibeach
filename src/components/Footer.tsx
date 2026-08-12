import { Logo } from "@/components/Logo";
import { site, whatsappLink } from "@/config/site";

export function Footer() {
  return (
    <footer className="bg-[var(--primary-deep)] text-primary-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-4">
        <div>
          <Logo inverted />
          <p className="mt-4 max-w-xs text-sm text-primary-foreground/70">
            Açaí cremoso, sorvetes e milk-shakes feitos na hora. Do nosso balcão direto pra sua
            casa.
          </p>
        </div>

        <nav aria-label="Links rápidos">
          <h3 className="font-display text-base font-extrabold text-primary-foreground">
            Links rápidos
          </h3>
          <ul className="mt-4 space-y-2 text-sm text-primary-foreground/70">
            <li>
              <a href="#cardapio" className="hover:text-accent">
                Cardápio
              </a>
            </li>
            <li>
              <a href="#combos" className="hover:text-accent">
                Combos
              </a>
            </li>
            <li>
              <a href="#avaliacoes" className="hover:text-accent">
                Sobre nós
              </a>
            </li>
            <li>
              <a href="#localizacao" className="hover:text-accent">
                Contato
              </a>
            </li>
            <li>
              <a href={site.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-accent">
                Instagram {site.instagramHandle}
              </a>
            </li>
            <li>
              <a
                href={whatsappLink("Olá! Vim pelo site e gostaria de fazer um pedido. 🍧")}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent"
              >
                WhatsApp
              </a>
            </li>
          </ul>
        </nav>

        <div>
          <h3 className="font-display text-base font-extrabold">Endereço</h3>
          <address className="mt-4 text-sm not-italic text-primary-foreground/70">
            {site.address}
            <br />
            {site.city}
            <br />
            {site.phoneLabel}
          </address>
        </div>

        <div>
          <h3 className="font-display text-base font-extrabold">Funcionamento</h3>
          <p className="mt-4 text-sm text-primary-foreground/70">{site.hours}</p>
          <p className="mt-2 text-sm text-primary-foreground/70">Delivery até 22h30</p>
        </div>
      </div>

      <div className="border-t border-primary-foreground/15">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-6 text-xs text-primary-foreground/60 sm:flex-row sm:px-6">
          <p>© 2026 {site.name} — Todos os direitos reservados.</p>
          <div className="flex gap-5">
            <a href="#top" className="hover:text-accent">
              Política de Privacidade
            </a>
            <a href="#top" className="hover:text-accent">
              Termos de Uso
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
