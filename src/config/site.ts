import acaiTradicional from "@/assets/acai-tradicional.jpg";
import acaiMorango from "@/assets/acai-morango.jpg";
import acaiTropical from "@/assets/acai-tropical.jpg";
import sorveteCasquinha from "@/assets/sorvete-casquinha.jpg";
import sorveteSundae from "@/assets/sorvete-sundae.jpg";
import shakeChocolate from "@/assets/shake-chocolate.jpg";
import shakeMorango from "@/assets/shake-morango.jpg";
import comboTropical from "@/assets/combo-tropical.jpg";
import comboCasal from "@/assets/combo-casal.jpg";
import comboFamilia from "@/assets/combo-familia.jpg";
import lojaAmbiente from "@/assets/loja-ambiente.jpg";
import heroAcai from "@/assets/hero-acai.jpg";

/**
 * Ponto único de personalização da marca.
 * Troque nome, cores (src/styles.css), telefone, endereço e produtos aqui.
 */
export const site = {
  name: "Açaí Tropical",
  tagline: "Açaí, Sorvetes e Milk-Shakes",
  whatsapp: "5585999999999",
  phoneLabel: "(85) 99999-9999",
  instagram: "https://instagram.com",
  instagramHandle: "@acaitropical",
  address: "Rua Exemplo, 123 — Centro",
  city: "Fortaleza — CE",
  hours: "Segunda a domingo — 14h às 23h",
  mapsEmbed:
    "https://www.google.com/maps?q=Rua+Exemplo+123+Centro+Fortaleza+CE&output=embed",
  mapsDirections:
    "https://www.google.com/maps/dir/?api=1&destination=Rua+Exemplo+123+Centro+Fortaleza+CE",
};

export const whatsappLink = (message: string) =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;

export type Product = {
  name: string;
  description: string;
  price: string;
  image: string;
};

export const menu: { id: string; label: string; emoji: string; items: Product[] }[] = [
  {
    id: "acai",
    label: "Açaí",
    emoji: "🫐",
    items: [
      {
        name: "Açaí Tradicional",
        description: "Creme puro batido na hora com granola crocante.",
        price: "R$ 16,90",
        image: acaiTradicional,
      },
      {
        name: "Açaí com Morango",
        description: "Morangos fresquinhos e leite condensado.",
        price: "R$ 19,90",
        image: acaiMorango,
      },
      {
        name: "Açaí Tropical",
        description: "Manga, kiwi, abacaxi e coco ralado.",
        price: "R$ 22,90",
        image: acaiTropical,
      },
      {
        name: "Açaí Especial",
        description: "Açaí + cupuaçu, paçoca, Ovomaltine e leite em pó.",
        price: "R$ 26,90",
        image: comboCasal,
      },
    ],
  },
  {
    id: "sorvetes",
    label: "Sorvetes",
    emoji: "🍦",
    items: [
      {
        name: "Casquinha",
        description: "Três bolas na casquinha crocante, sabores à escolha.",
        price: "R$ 9,90",
        image: sorveteCasquinha,
      },
      {
        name: "Copo de Sorvete",
        description: "Duas bolas com cobertura e granulado.",
        price: "R$ 12,90",
        image: sorveteSundae,
      },
      {
        name: "Sundae",
        description: "Sorvete, calda de chocolate, chantilly e amendoim.",
        price: "R$ 15,90",
        image: sorveteSundae,
      },
      {
        name: "Sorvete Especial",
        description: "Taça generosa com frutas, calda e biscoito.",
        price: "R$ 21,90",
        image: sorveteCasquinha,
      },
    ],
  },
  {
    id: "shakes",
    label: "Milk-Shakes",
    emoji: "🥤",
    items: [
      {
        name: "Milk-Shake de Chocolate",
        description: "Cremoso, com chantilly e raspas de chocolate.",
        price: "R$ 17,90",
        image: shakeChocolate,
      },
      {
        name: "Milk-Shake de Morango",
        description: "Morango natural batido com sorvete de creme.",
        price: "R$ 17,90",
        image: shakeMorango,
      },
      {
        name: "Milk-Shake de Ovomaltine",
        description: "Clássico crocante que todo mundo ama.",
        price: "R$ 19,90",
        image: shakeChocolate,
      },
      {
        name: "Milk-Shake de Nutella",
        description: "Nutella de verdade, cremosíssimo.",
        price: "R$ 22,90",
        image: shakeMorango,
      },
    ],
  },
];

export const combos = [
  {
    name: "Combo Tropical",
    description: "Açaí 500ml + 3 acompanhamentos + bebida gelada.",
    price: "R$ 29,90",
    image: comboTropical,
  },
  {
    name: "Combo Casal",
    description: "2 açaís de 500ml + 6 acompanhamentos à escolha.",
    price: "R$ 49,90",
    image: comboCasal,
  },
  {
    name: "Combo Família",
    description: "Açaí de 1 litro + acompanhamentos + colheres para todos.",
    price: "R$ 74,90",
    image: comboFamilia,
  },
];

export const sizes = ["300ml", "500ml", "700ml", "1 litro"];
export const bases = ["Açaí", "Açaí + Cupuaçu", "Açaí + Sorvete"];
export const toppings = [
  "Morango",
  "Banana",
  "Granola",
  "Leite em pó",
  "Leite condensado",
  "Paçoca",
  "Coco",
  "Ovomaltine",
  "Chocolate",
  "Confetes",
];

export const gallery = [
  { src: heroAcai, alt: "Copo de açaí com morango, banana e granola" },
  { src: sorveteCasquinha, alt: "Casquinha de sorvete com três bolas" },
  { src: shakeChocolate, alt: "Milk-shake de chocolate com chantilly" },
  { src: acaiTropical, alt: "Açaí tropical com frutas frescas" },
  { src: comboFamilia, alt: "Combo família de açaí de 1 litro" },
  { src: lojaAmbiente, alt: "Ambiente da loja Açaí Tropical" },
];

export const testimonials = [
  {
    name: "Mariana S.",
    initials: "MS",
    text: "Simplesmente maravilhoso! O açaí é muito cremoso e os acompanhamentos são bem servidos.",
  },
  {
    name: "Rafael L.",
    initials: "RL",
    text: "Peço quase toda semana pelo WhatsApp. Chega rápido e sempre bem geladinho.",
  },
  {
    name: "Camila R.",
    initials: "CR",
    text: "O milk-shake de Ovomaltine é o melhor da cidade, sem exagero. Atendimento nota mil!",
  },
  {
    name: "João P.",
    initials: "JP",
    text: "Levei a família no combo de 1 litro e sobrou até. Preço justo e sabor incrível.",
  },
];
