import Image from "next/image";
import * as React from "react";
import Link from "next/link";
import { MessageCircle } from "lucide-react";

import { Reveal } from "../motion/Reveal";
import { Button } from "../ui/Button";
import { Container } from "../ui/Container";

import heroImg1 from "@/public/hero-1.png";
import heroImg2 from "@/public/hero-2.png";
import heroImg3 from "@/public/hero1.png";

export function HeroSection({ whatsappUrl }: { whatsappUrl: string }) {
  return (
    <section className="relative overflow-hidden bg-[#f9f5df]" aria-label="Apresentação da Suprema Semijoias">
      {/* Camada de profundidade 1: Background decorativo */}
      <div aria-hidden className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-[#bdceb8]/40 blur-3xl" />
        <div className="absolute -bottom-28 -left-20 h-80 w-80 rounded-full bg-[#d9ebd9]/50 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/3 h-64 w-64 rounded-full bg-[#d3d1b0]/25 blur-2xl" />
      </div>
      
      {/* Camada de profundidade 2: Gradiente sutil */}
      <div aria-hidden className="pointer-events-none absolute inset-0 z-1 bg-linear-to-br from-transparent via-[#ffffff]/5 to-[#bdceb8]/10" />

      <Container className="relative z-10">
        {/* Header: logo à esquerda, nav à direita */}
        <header className="flex flex-wrap items-center justify-between gap-4 border-b border-[#d3d1b0]/50 py-4 shadow-sm shadow-[#d3d1b0]/20 backdrop-blur-sm sm:py-5" role="banner">
          <Reveal preset="fade-up">
            <Link href="/" aria-label="Suprema Semijoias — Página inicial" className="inline-block">
              <Image src="/suprema-logo-2.png" alt="Suprema Semijoias — Semijoias exclusivas em Belém do Pará" width={180} height={100} priority />
            </Link>
          </Reveal>
          <Reveal preset="fade-up" delayMs={60}>
            <nav aria-label="Navegação principal">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Fale conosco pelo WhatsApp"
                className="inline-flex items-center gap-2 rounded-full border border-[#c48d45] bg-transparent px-4 py-2 font-body text-sm uppercase tracking-wider text-[#c48d45] shadow-sm shadow-[#c48d45]/10 transition-all duration-200 ease-out hover:scale-[1.02] hover:bg-[#c48d45] hover:text-[#ffffff] hover:shadow-md hover:shadow-[#c48d45]/25 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#c48d45]"
              >
                <MessageCircle className="h-4 w-4" strokeWidth={1.5} aria-hidden="true" />
                Fale Conosco
              </a>
            </nav>
          </Reveal>
        </header>

        {/* Hero: duas colunas — esquerda texto + CTAs, direita colagem de imagens + texto */}
        <div className="grid grid-cols-1 items-start gap-10 py-10 lg:grid-cols-12 lg:gap-12 lg:py-14">
          {/* Coluna esquerda: título, subtítulo, botões */}
          <div className="relative flex flex-col lg:col-span-5 lg:pt-2">
            {/* Sombra de profundidade atrás do texto */}
            <div aria-hidden className="pointer-events-none absolute -left-4 top-8 -z-10 h-48 w-48 rounded-full bg-[#c48d45]/5 blur-3xl" />
            <Reveal preset="fade-up">
              <h1 className="font-title max-w-lg text-4xl font-semibold leading-tight tracking-tight text-[#c48d45] sm:max-w-xl sm:text-5xl lg:max-w-2xl lg:text-[2.75rem] lg:leading-tight">
                Realce Sua Beleza com Semijoias Exclusivas e Sofisticadas
              </h1>
            </Reveal>

            <Reveal preset="fade-up" delayMs={80}>
              <p className="mt-6 max-w-md text-lg font-medium leading-relaxed text-[#c48d45] sm:text-xl lg:mt-8 lg:text-2xl">
                Descubra peças únicas que combinam elegância e qualidade
                superior. Da rotina aos momentos especiais, encontre a semijoia
                perfeita para cada ocasião.
              </p>
            </Reveal>

            <Reveal preset="fade-up" delayMs={140}>
              <div className="relative mt-8 flex flex-wrap gap-3">
                {/* Glow effect atrás do CTA */}
                <div aria-hidden className="pointer-events-none absolute -inset-2 -z-10 animate-pulse rounded-full bg-[#c48d45]/20 blur-xl" />
                
                <Button
                  variant="primary"
                  href={whatsappUrl}
                  className="group relative overflow-hidden text-lg shadow-lg shadow-[#c48d45]/30 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-[#c48d45]/50 sm:px-8 sm:py-4 sm:text-xl"
                >
                  {/* Shine effect on hover */}
                  <span
                    aria-hidden
                    className="absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-[#ffffff]/30 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-full"
                  />
                  <MessageCircle className="relative mr-2 h-6 w-6 transition-transform duration-300 group-hover:rotate-12 sm:h-7 sm:w-7" strokeWidth={1.5} />
                  <span className="relative font-semibold">Quero conhecer a Coleção Exclusiva</span>
                </Button>
              </div>
            </Reveal>
          </div>

          {/* Coluna direita: colagem de 3 imagens + texto abaixo */}
          <div className="relative lg:col-span-7">
            {/* Camada de profundidade: sombra projetada atrás das imagens */}
            <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 translate-x-4 translate-y-4 rounded-3xl bg-linear-to-br from-[#d3d1b0]/20 to-transparent blur-2xl" />
            <Reveal preset="slow-scale" delayMs={100}>
              <div className="relative flex flex-nowrap items-end justify-start gap-2 sm:gap-4">
                {/* Escada: 1ª menor e mais baixa */}
                <div className="group relative w-[26%] min-w-0 translate-y-8 motion-safe:animate-float sm:w-[28%] sm:translate-y-12" style={{ transform: 'translateZ(0)' }}>
                  <div className="relative aspect-3/4 w-full overflow-hidden rounded-xl bg-[#d3d1b0]/30 shadow-md shadow-[#d3d1b0]/30 ring-1 ring-[#ffffff]/20 transition-all duration-500 ease-out group-hover:scale-[1.02] group-hover:shadow-xl group-hover:shadow-[#d3d1b0]/50">
                    <Image
                      src={heroImg2}
                      alt="Colar e brincos de semijoias douradas da coleção Suprema Semijoias"
                      fill
                      sizes="28vw"
                      className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                      placeholder="blur"
                    />
                  </div>
                </div>
                {/* Escada: 2ª maior, altura do meio */}
                <div className="group relative w-[38%] min-w-0 self-center motion-safe:animate-float-slow sm:w-[40%]" style={{ transform: 'translateZ(10px)' }}>
                  <div className="relative aspect-4/5 w-full overflow-hidden rounded-xl bg-[#d3d1b0]/30 shadow-lg shadow-[#d3d1b0]/40 ring-1 ring-[#ffffff]/30 transition-all duration-500 ease-out group-hover:scale-[1.02] group-hover:shadow-2xl group-hover:shadow-[#d3d1b0]/60">
                    <Image
                      src={heroImg1}
                      alt="Pulseiras e anéis sofisticados em ouro com pedras — Suprema Semijoias Belém"
                      fill
                      sizes="40vw"
                      className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                      priority
                      placeholder="blur"
                    />
                  </div>
                </div>
                {/* Escada: 3ª tamanho médio, mais alta */}
                <div className="group relative w-[30%] min-w-0 self-start pt-4 motion-safe:animate-float-reverse sm:w-[28%] sm:pt-6" style={{ transform: 'translateZ(5px)' }}>
                  <div className="relative aspect-3/4 w-full overflow-hidden rounded-xl bg-[#d3d1b0]/30 shadow-md shadow-[#d3d1b0]/35 ring-1 ring-[#ffffff]/25 transition-all duration-500 ease-out group-hover:scale-[1.02] group-hover:shadow-xl group-hover:shadow-[#d3d1b0]/55">
                    <Image
                      src={heroImg3}
                      alt="Brincos delicados e elegantes da coleção exclusiva Suprema Semijoias"
                      fill
                      sizes="30vw"
                      className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                      placeholder="blur"
                    />
                  </div>
                </div>
              </div>

              {/* Texto complementar abaixo da colagem (alinhado à direita, como na referência) */}
             
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
