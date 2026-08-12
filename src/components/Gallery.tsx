import { Reveal } from "@/components/Reveal";
import { gallery } from "@/config/site";

export function Gallery() {
  return (
    <section className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal className="text-center">
          <h2 className="font-display text-3xl font-extrabold text-balance sm:text-4xl">
            Um passeio pelo nosso mundo gelado
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
            Açaí, sorvetes, milk-shakes, frutas e o nosso cantinho favorito.
          </p>
        </Reveal>

        <ul className="mt-10 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
          {gallery.map((g, i) => (
            <Reveal
              as="li"
              key={g.alt}
              delay={i * 60}
              className={`group overflow-hidden rounded-3xl shadow-card ${
                i === 0 || i === 5 ? "lg:col-span-2 lg:row-span-1" : ""
              }`}
            >
              <img
                src={g.src}
                alt={g.alt}
                loading="lazy"
                className="aspect-square size-full object-cover transition-transform duration-500 group-hover:scale-105 lg:aspect-[4/3]"
              />
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
