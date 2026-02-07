import * as React from "react";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://supremasemijoias.com.br";
const whatsappUrl =
  process.env.NEXT_PUBLIC_WHATSAPP_URL ?? "https://wa.me/5591985161605";

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "JewelryStore",
  name: "Suprema Semijoias",
  description:
    "Loja especializada em semijoias exclusivas e sofisticadas em Belém do Pará. Colares, brincos, pulseiras e anéis com qualidade superior e atendimento personalizado.",
  url: siteUrl,
  contactPoint: [
    {
      "@type": "ContactPoint",
      contactType: "customer support",
      availableLanguage: ["Portuguese"],
      url: whatsappUrl,
    },
  ],
  address: {
    "@type": "PostalAddress",
    streetAddress: "Tv. Dom Romualdo de Seixas, 1476",
    addressLocality: "Belém",
    addressRegion: "PA",
    postalCode: "66055-200",
    addressCountry: "BR",
    name: "Umarizal",
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "09:00",
    closes: "17:00",
  },
  image: `${siteUrl}/hero-1.png`,
  priceRange: "$$",
  currenciesAccepted: "BRL",
  paymentAccepted: "Dinheiro, Cartão, PIX",
  review: [
    {
      "@type": "Review",
      author: { "@type": "Person", name: "Mariana S." },
      reviewBody:
        "Fiquei encantada com a qualidade das semijoias! As peças são lindas, delicadas e combinam com tudo. O atendimento pelo WhatsApp foi maravilhoso, super atencioso. Com certeza voltarei a comprar.",
    },
    {
      "@type": "Review",
      author: { "@type": "Person", name: "Renata L." },
      reviewBody:
        "Comprei um colar para usar no dia a dia e me surpreendi com o acabamento e o brilho. Dá para perceber o cuidado em cada detalhe. Além disso, a entrega foi rápida e a embalagem é simplesmente perfeita.",
    },
    {
      "@type": "Review",
      author: { "@type": "Person", name: "Camila A." },
      reviewBody:
        "A Suprema Semijoias virou minha loja favorita! Já comprei brincos e pulseiras e todas as peças são elegantes e confortáveis de usar. Atendimento impecável e muita confiança na procedência.",
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Como comprar semijoias na Suprema Semijoias?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "É simples! Mande uma mensagem no nosso WhatsApp e seja atendida com atenção personalizada. Apresentamos nossa coleção exclusiva com fotos, detalhes e preços. Você escolhe como receber: entrega ou retirada na loja.",
      },
    },
    {
      "@type": "Question",
      name: "Onde fica a loja da Suprema Semijoias?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Nossa loja fica na Tv. Dom Romualdo de Seixas, 1476 - Umarizal, Belém - PA, 66055-200. Funcionamos de segunda a sexta, das 9h às 17h.",
      },
    },
    {
      "@type": "Question",
      name: "Quais tipos de semijoias a Suprema oferece?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Oferecemos colares, brincos, pulseiras e anéis em duas linhas: semijoias para o dia a dia (versáteis e elegantes) e semijoias sofisticadas (exclusividade e brilho para momentos especiais).",
      },
    },
    {
      "@type": "Question",
      name: "A Suprema Semijoias oferece garantia?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sim! Oferecemos garantia de procedência em todas as peças, além de orientação de cuidados e conservação para que suas semijoias durem muito mais.",
      },
    },
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Início",
      item: siteUrl,
    },
  ],
};

export function JsonLd() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
    </>
  );
}
