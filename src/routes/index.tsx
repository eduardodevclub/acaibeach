import { createFileRoute } from "@tanstack/react-router";

import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { MenuSection } from "@/components/MenuSection";
import { Builder } from "@/components/Builder";
import { Combos } from "@/components/Combos";
import { Features } from "@/components/Features";
import { Testimonials } from "@/components/Testimonials";
import { Gallery } from "@/components/Gallery";
import { Delivery } from "@/components/Delivery";
import { Location } from "@/components/Location";
import { FinalCta } from "@/components/FinalCta";
import { Footer } from "@/components/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { CartSheet } from "@/components/CartSheet";
import { CartProvider } from "@/context/cart";

const TITLE = "Açaí Tropical | Açaí, Sorvetes e Milk-Shakes";
const DESCRIPTION =
  "Peça açaí, sorvetes, milk-shakes e combos deliciosos. Monte seu açaí do seu jeito e peça pelo WhatsApp.";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { property: "og:locale", content: "pt_BR" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "IceCreamShop",
          name: "Açaí Tropical",
          description: DESCRIPTION,
          servesCuisine: ["Açaí", "Sorvetes", "Milk-Shakes"],
          priceRange: "$$",
          telephone: "+55 85 99999-9999",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Rua Exemplo, 123",
            addressLocality: "Fortaleza",
            addressRegion: "CE",
            addressCountry: "BR",
          },
          openingHoursSpecification: [
            {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
                "Sunday",
              ],
              opens: "14:00",
              closes: "23:00",
            },
          ],
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.9",
            reviewCount: "1200",
          },
        }),
      },
    ],
  }),
});

function Index() {
  return (
    <CartProvider>
      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <Hero />
          <MenuSection />
          <Builder />
          <Combos />
          <Features />
          <Testimonials />
          <Gallery />
          <Delivery />
          <Location />
          <FinalCta />
        </main>
        <Footer />
        <WhatsAppFloat />
        <CartSheet />
      </div>
    </CartProvider>
  );
}

