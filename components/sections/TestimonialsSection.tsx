import * as React from "react";
import { Quote } from "lucide-react";

import { Reveal } from "../motion/Reveal";
import { Container } from "../ui/Container";

function TestimonialCard({
  quote,
  author,
  delayMs,
}: {
  quote: string;
  author: string;
  delayMs: number;
}) {
  return (
    <Reveal preset="fade-up" delayMs={delayMs}>
      <article className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-[#d3d1b0]/60 bg-[#ffffff]/75 p-6 shadow-lg shadow-[#d3d1b0]/25 ring-1 ring-[#ffffff]/50 backdrop-blur-md transition-all duration-500 ease-out hover:-translate-y-1 hover:border-[#d3d1b0]/80 hover:shadow-xl hover:shadow-[#d3d1b0]/40 hover:ring-[#ffffff]/70 sm:p-8">
        {/* Faixa decorativa lateral */}
        <div aria-hidden className="absolute left-0 top-0 h-full w-1 bg-linear-to-b from-[#c48d45]/40 via-[#c48d45]/25 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-100" />

        <div className="relative pl-2 sm:pl-3">
          {/* Ícone de citação em círculo suave */}
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#f9f5df]/80 shadow-inner ring-1 ring-[#d3d1b0]/30 transition-all duration-500 ease-out group-hover:bg-[#f9f5df] group-hover:ring-[#c48d45]/20">
            <Quote className="h-6 w-6 text-[#c48d45]/70 transition-colors duration-500 group-hover:text-[#c48d45]" strokeWidth={1.25} aria-hidden />
          </div>

          <blockquote className="mt-5 flex-1 text-base leading-loose text-[#c48d45] sm:text-lg sm:leading-loose">
            {quote}
          </blockquote>

          {/* Separador sutil + autoria */}
          <div className="mt-6 border-t border-[#d3d1b0]/50 pt-5">
            <p className="font-body text-sm font-medium italic tracking-wide text-[#c48d45]/95 sm:text-base">
              — <cite>{author}</cite>
            </p>
          </div>
        </div>
      </article>
    </Reveal>
  );
}

export function TestimonialsSection() {
  return (
    <section className="bg-[#d9ebd9] py-14 sm:py-20" id="depoimentos" aria-labelledby="depoimentos-titulo">
      <Container>
        <div className="max-w-3xl">
          <Reveal preset="fade-up">
            <h2 id="depoimentos-titulo" className="font-title text-3xl tracking-wide text-[#c48d45] sm:text-4xl">
              O Que Nossas Clientes Dizem
            </h2>
          </Reveal>
          <Reveal preset="fade-up" delayMs={80}>
            <p className="mt-5 text-lg font-medium leading-relaxed text-[#c48d45] sm:mt-6 sm:text-xl lg:text-2xl">
              A satisfação de quem confia na Suprema Semijoias é nossa maior
              conquista. Veja o que nossas clientes têm a dizer sobre suas
              experiências.
            </p>
          </Reveal>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
          <TestimonialCard
            quote="Fiquei encantada com a qualidade das semijoias! As peças são lindas, delicadas e combinam com tudo. O atendimento pelo WhatsApp foi maravilhoso, super atencioso. Com certeza voltarei a comprar."
            author="Mariana S."
            delayMs={120}
          />
          <TestimonialCard
            quote="Comprei um colar para usar no dia a dia e me surpreendi com o acabamento e o brilho. Dá para perceber o cuidado em cada detalhe. Além disso, a entrega foi rápida e a embalagem é simplesmente perfeita."
            author="Renata L."
            delayMs={170}
          />
          <TestimonialCard
            quote="A Suprema Semijoias virou minha loja favorita! Já comprei brincos e pulseiras e todas as peças são elegantes e confortáveis de usar. Atendimento impecável e muita confiança na procedência."
            author="Camila A."
            delayMs={220}
          />
        </div>
      </Container>
    </section>
  );
}

