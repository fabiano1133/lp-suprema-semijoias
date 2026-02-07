import Image from "next/image";
import * as React from "react";
import {
  Star,
  Crown,
  Gift,
  Heart,
  ShieldCheck,
  Droplets,
  MessageCircle,
} from "lucide-react";

import { Reveal } from "../motion/Reveal";
import { Button } from "../ui/Button";
import { Container } from "../ui/Container";

const DIFFERENTIALS = [
  { icon: Star, text: "Semijoias de Qualidade e Exclusivas" },
  { icon: Crown, text: "Atendimento Personalizado" },
  { icon: Gift, text: "Peças para Todas as Ocasiões" },
  { icon: Heart, text: "Embalagem Especial para Presente" },
  { icon: ShieldCheck, text: "Garantia de Procedência" },
  { icon: Droplets, text: "Orientação de Cuidados e Conservação" },
] as const;

export function DifferentialsSection({ whatsappUrl }: { whatsappUrl: string }) {
  return (
    <section className="relative overflow-hidden bg-[#f9f5df] py-14 sm:py-20" id="diferenciais" aria-labelledby="diferenciais-titulo">
      {/* Background image com overlay */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <Image
          src="/diferentials-session.png"
          alt=""
          aria-hidden="true"
          fill
          className="object-cover opacity-35"
          sizes="100vw"
          quality={90}
        />
        {/* Overlay para manter legibilidade */}
        <div className="absolute inset-0 bg-linear-to-b from-[#f9f5df]/85 via-[#f9f5df]/70 to-[#f9f5df]/85" />
      </div>

      {/* Elementos decorativos adicionais */}
      <div aria-hidden className="pointer-events-none absolute inset-0 z-1">
        <div className="absolute -top-24 right-1/4 h-80 w-80 rounded-full bg-[#bdceb8]/20 blur-3xl" />
        <div className="absolute -bottom-24 left-1/4 h-80 w-80 rounded-full bg-[#d3d1b0]/15 blur-3xl" />
      </div>

      <Container className="relative z-10">
        {/* Card orgânico — título — forma pétala inclinada à direita */}
        <div className="relative mx-auto max-w-3xl sm:ml-auto sm:mr-8 lg:mr-16">
          <Reveal preset="fade-up">
            <div className="group relative overflow-hidden bg-[#ffffff]/50 px-8 py-8 text-center shadow-xl shadow-[#d3d1b0]/30 backdrop-blur-md transition-all duration-500 ease-out hover:bg-[#ffffff]/60 hover:shadow-2xl hover:shadow-[#d3d1b0]/40 sm:px-10 sm:py-10 lg:px-14 lg:py-12" style={{ borderRadius: '70% 30% 55% 45% / 40% 65% 35% 60%' }}>
              {/* Ornamentos orgânicos */}
              <div aria-hidden className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[#d9ebd9]/25 blur-3xl" />
              <div aria-hidden className="pointer-events-none absolute -bottom-12 -left-12 h-28 w-28 rounded-full bg-[#bdceb8]/20 blur-2xl" />
              <div aria-hidden className="pointer-events-none absolute right-1/4 top-0 h-20 w-20 rounded-full bg-[#c48d45]/5 blur-xl" />

              <h2 id="diferenciais-titulo" className="relative font-title text-3xl tracking-wide text-[#c48d45] sm:text-4xl lg:text-5xl">
                Por Que Escolher a Suprema Semijoias?
              </h2>
            </div>
          </Reveal>
        </div>

        {/* Card orgânico — subtítulo — forma pétala inclinada à esquerda */}
        <div className="relative mx-auto mt-8 max-w-2xl sm:-mt-2 sm:ml-8 sm:mr-auto lg:ml-16">
          <Reveal preset="fade-up" delayMs={80}>
            <div className="group relative overflow-hidden bg-[#ffffff]/40 px-7 py-6 text-center shadow-lg shadow-[#d3d1b0]/25 backdrop-blur-md transition-all duration-500 ease-out hover:bg-[#ffffff]/50 hover:shadow-xl hover:shadow-[#d3d1b0]/30 sm:px-8 sm:py-7 lg:px-12 lg:py-9" style={{ borderRadius: '35% 65% 45% 55% / 55% 35% 65% 45%' }}>
              {/* Ornamento */}
              <div aria-hidden className="pointer-events-none absolute -right-8 bottom-0 h-24 w-24 rounded-full bg-[#d3d1b0]/15 blur-2xl" />

              <p className="relative text-lg font-medium leading-relaxed text-[#c48d45] sm:text-xl lg:text-2xl">
                Mais do que acessórios, oferecemos uma experiência completa de
                beleza e sofisticação com produtos exclusivos e atendimento que
                você merece.
              </p>
            </div>
          </Reveal>
        </div>

        {/* Bullets em duas colunas — destaque extra no mobile */}
        <Reveal preset="fade-up" delayMs={140}>
          <div className="mx-auto mt-10 max-w-4xl sm:mt-12 lg:mt-16">
            <ul className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-5 sm:gap-4">
              {DIFFERENTIALS.map((item) => {
                const Icon = item.icon;
                return (
                  <li key={item.text} className="group flex items-center gap-4 transition-all duration-300 ease-out hover:translate-x-1 sm:gap-3">
                    {/* Mobile: bullet maior e com fundo; sm: volta ao tamanho normal */}
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#ffffff]/80 shadow-md shadow-[#d3d1b0]/35 ring-2 ring-[#d3d1b0]/40 backdrop-blur-sm transition-all duration-300 ease-out group-hover:scale-110 group-hover:bg-[#ffffff]/90 group-hover:shadow-md group-hover:shadow-[#d3d1b0]/35 sm:h-9 sm:w-9 sm:bg-[#ffffff]/70 sm:shadow-sm sm:ring-1 sm:ring-[#d3d1b0]/30">
                      <Icon
                        className="h-6 w-6 text-[#c48d45] transition-transform duration-300 group-hover:rotate-12 sm:h-5 sm:w-5"
                        strokeWidth={2}
                      />
                    </div>
                    <p className="text-lg font-medium leading-snug text-[#c48d45] sm:font-normal">
                      {item.text}
                    </p>
                  </li>
                );
              })}
            </ul>
          </div>
        </Reveal>

        {/* CTA */}
        <Reveal preset="fade-up" delayMs={200}>
          <div className="mt-10 flex justify-center sm:mt-12 lg:mt-16">
            <Button variant="primary" href={whatsappUrl} className="text-lg sm:px-8 sm:py-4 sm:text-xl">
              <MessageCircle className="mr-2 h-5 w-5 sm:h-6 sm:w-6" strokeWidth={1.5} />
              Garantir minhas peças agora
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

