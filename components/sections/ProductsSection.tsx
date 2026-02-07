import Image from "next/image";
import * as React from "react";
import { Sparkles, Gem } from "lucide-react";

import { Reveal } from "../motion/Reveal";
import { Container } from "../ui/Container";

function ProductCard({
  icon: Icon,
  title,
  description,
  delayMs = 0,
}: {
  icon: React.ElementType;
  title: string;
  description: string;
  delayMs?: number;
}) {
  return (
    <Reveal preset="fade-up" delayMs={delayMs}>
      <article className="group flex h-full flex-col rounded-3xl border border-[#d3d1b0]/70 bg-[#ffffff]/70 p-6 shadow-sm shadow-[#d3d1b0]/30 backdrop-blur-sm transition-all duration-500 ease-out hover:-translate-y-2 hover:shadow-xl hover:shadow-[#d3d1b0]/50 sm:p-8 lg:p-8 lg:hover:scale-[1.02]">
        {/* Layout vertical no desktop para mais elegância */}
        <div className="flex flex-col items-center text-center lg:items-center">
          {/* Container do ícone com destaque */}
          <div className="relative mb-6 flex h-20 w-20 shrink-0 items-center justify-center rounded-3xl bg-linear-to-br from-[#d9ebd9] to-[#bdceb8] shadow-lg shadow-[#bdceb8]/30 ring-4 ring-[#ffffff]/50 transition-all duration-500 ease-out group-hover:scale-110 group-hover:shadow-xl group-hover:shadow-[#bdceb8]/50 sm:h-24 sm:w-24 lg:mb-6 lg:h-24 lg:w-24">
            {/* Glow interno */}
            <div aria-hidden className="absolute inset-0 rounded-3xl bg-[#ffffff]/30 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            {/* Ornamento decorativo */}
            <div aria-hidden className="absolute -inset-1 rounded-3xl bg-linear-to-br from-[#c48d45]/20 to-transparent opacity-0 blur-md transition-opacity duration-500 group-hover:opacity-100" />
            <Icon className="relative h-10 w-10 text-[#c48d45] transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110 sm:h-12 sm:w-12 lg:h-12 lg:w-12" strokeWidth={1.5} />
          </div>
          
          <div className="flex w-full flex-1 flex-col">
            <h3 className="font-title text-2xl font-semibold tracking-wide text-[#c48d45] transition-colors duration-300 group-hover:text-[#b37935] sm:text-3xl lg:text-3xl">
              {title}
            </h3>
            <p className="mt-4 text-lg font-medium leading-relaxed text-[#c48d45]/90 sm:text-xl lg:mt-5 lg:text-xl lg:leading-relaxed">
              {description}
            </p>
          </div>
        </div>
      </article>
    </Reveal>
  );
}

export function ProductsSection() {
  return (
    <section className="relative overflow-hidden bg-[#f9f5df] py-14 sm:py-20" id="produtos" aria-labelledby="produtos-titulo">
      {/* Background image com overlay */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <Image
          src="/product-session-bg.png"
          alt=""
          aria-hidden="true"
          fill
          className="object-cover opacity-40"
          sizes="100vw"
          quality={90}
        />
        {/* Overlay para manter legibilidade */}
        <div className="absolute inset-0 bg-linear-to-b from-[#f9f5df]/80 via-[#f9f5df]/60 to-[#f9f5df]/80" />
      </div>

      <Container className="relative z-10">
        <div className="mx-auto max-w-4xl text-center lg:max-w-5xl">
          <Reveal preset="fade-up">
            <h2 id="produtos-titulo" className="font-title text-3xl tracking-wide text-[#c48d45] sm:text-4xl lg:text-5xl">
              Semijoias Pensadas Para Você
            </h2>
          </Reveal>
          <Reveal preset="fade-up" delayMs={80}>
            <p className="mx-auto mt-5 max-w-2xl text-xl font-medium leading-relaxed text-[#c48d45] sm:mt-6 sm:text-2xl lg:mt-8 lg:max-w-3xl lg:text-3xl lg:leading-tight">
              Cada peça é cuidadosamente selecionada para realçar sua
              personalidade e estilo, seja no dia a dia ou em momentos únicos.
            </p>
          </Reveal>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:mt-16 sm:grid-cols-2 sm:gap-8 lg:mx-auto lg:mt-20 lg:max-w-5xl lg:gap-12">
          <ProductCard
            icon={Sparkles}
            title="Semijoias para o Dia a Dia"
            description="Peças versáteis e elegantes que complementam seu estilo diário com sofisticação e conforto. Perfeitas para trabalho, passeios e encontros casuais."
            delayMs={120}
          />
          <ProductCard
            icon={Gem}
            title="Semijoias Sofisticadas"
            description="Exclusividade e brilho para seus momentos especiais. Colares, brincos e pulseiras que transformam qualquer ocasião em inesquecível."
            delayMs={180}
          />
        </div>
      </Container>
    </section>
  );
}

