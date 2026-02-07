import * as React from "react";
import {
  MapPin,
  Clock,
  Phone,
  MessageCircle,
  Navigation,
} from "lucide-react";

import { Reveal } from "../motion/Reveal";
import { Button } from "../ui/Button";
import { Container } from "../ui/Container";

function InfoItem({
  icon: Icon,
  label,
  value,
}: {
  icon: React.ElementType;
  label: string;
  value: string;
}) {
  return (
    <div className="group flex items-start gap-3 transition-all duration-300 ease-out hover:translate-x-1">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#ffffff]/80 shadow-sm shadow-[#d3d1b0]/25 ring-1 ring-[#d3d1b0]/30 transition-all duration-300 group-hover:shadow-md group-hover:shadow-[#d3d1b0]/40">
        <Icon className="h-5 w-5 text-[#c48d45]" strokeWidth={1.5} />
      </div>
      <div className="min-w-0 pt-0.5">
        <p className="text-sm font-medium uppercase tracking-wider text-[#c48d45]/70">
          {label}
        </p>
        <p className="mt-0.5 text-base leading-snug text-[#c48d45] sm:text-lg">
          {value}
        </p>
      </div>
    </div>
  );
}

export function FinalCtaSection({
  whatsappUrl,
  mapsUrl,
}: {
  whatsappUrl: string;
  mapsUrl: string;
}) {
  return (
    <section className="relative overflow-hidden bg-[#f9f5df] py-14 sm:py-20" id="localizacao" aria-labelledby="localizacao-titulo">
      {/* Elementos decorativos */}
      <div aria-hidden className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute -bottom-32 -right-24 h-96 w-96 rounded-full bg-[#bdceb8]/30 blur-3xl" />
        <div className="absolute -top-24 -left-20 h-80 w-80 rounded-full bg-[#d9ebd9]/40 blur-3xl" />
      </div>

      <Container className="relative z-10">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-start lg:gap-14">
          {/* Coluna esquerda: texto + CTAs */}
          <div className="lg:col-span-6">
            <Reveal preset="fade-up">
              <h2 id="localizacao-titulo" className="font-title text-3xl tracking-wide text-[#c48d45] sm:text-4xl lg:text-5xl">
              Escolha Como Brilhar Hoje
              </h2>
            </Reveal>

            <Reveal preset="fade-up" delayMs={90}>
              <p className="mt-5 text-lg font-medium leading-relaxed text-[#c48d45] sm:mt-6 sm:text-xl lg:text-2xl">
              Queremos que sua experiência com a Suprema seja tão impecável quanto nossas peças. Visite nosso showroom para um atendimento personalizado com consultoria de estilo, ou, se preferir o conforto de onde estiver, finalize sua escolha com nossas especialistas via WhatsApp.
              </p>
            </Reveal>

            <Reveal preset="fade-up" delayMs={160}>
              <div className="relative mt-8 sm:mt-10">
                {/* Glow pulsante */}
                <div aria-hidden className="pointer-events-none absolute -inset-2 -z-10 animate-pulse rounded-full bg-[#c48d45]/20 blur-xl" />

                <Button
                  variant="primary"
                  href={whatsappUrl}
                  className="group relative w-full overflow-hidden text-lg shadow-lg shadow-[#c48d45]/30 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-[#c48d45]/50 sm:w-auto sm:px-8 sm:py-4 sm:text-xl"
                >
                  {/* Shine effect */}
                  <span
                    aria-hidden
                    className="absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-[#ffffff]/30 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-full"
                  />
                  <MessageCircle className="relative mr-2 h-6 w-6 transition-transform duration-300 group-hover:rotate-12 sm:h-7 sm:w-7" strokeWidth={1.5} />
                  <span className="relative font-semibold">Comprar pelo WhatsApp</span>
                </Button>
              </div>
            </Reveal>
          </div>

          {/* Coluna direita: card de endereço */}
          <div className="lg:col-span-6">
            <Reveal preset="slow-scale" delayMs={120}>
              <div className="relative overflow-hidden rounded-3xl border border-[#d3d1b0]/60 bg-[#ffffff]/60 p-6 shadow-lg shadow-[#d3d1b0]/30 ring-1 ring-[#ffffff]/50 backdrop-blur-md sm:p-8">
                {/* Ornamentos */}
                <div aria-hidden className="pointer-events-none absolute -right-12 -top-12 h-36 w-36 rounded-full bg-[#d9ebd9]/30 blur-2xl" />
                <div aria-hidden className="pointer-events-none absolute -bottom-10 -left-10 h-28 w-28 rounded-full bg-[#bdceb8]/25 blur-2xl" />

                <div className="relative space-y-5">
                  {/* Header do card */}
                  <div className="flex items-center gap-3 border-b border-[#d3d1b0]/40 pb-5">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-linear-to-br from-[#d9ebd9] to-[#bdceb8] shadow-md shadow-[#bdceb8]/30 ring-2 ring-[#ffffff]/50">
                      <MapPin className="h-6 w-6 text-[#c48d45]" strokeWidth={1.5} />
                    </div>
                    <div>
                      <p className="font-title text-xl font-semibold tracking-wide text-[#c48d45] sm:text-2xl">
                        Suprema Semijoias
                      </p>
                      <p className="text-sm text-[#c48d45]/70">Loja Física</p>
                    </div>
                  </div>

                  {/* Informações */}
                  <InfoItem
                    icon={MapPin}
                    label="Endereço"
                    value="Tv. Dom Romualdo de Seixas, 1476 - Umarizal, Belém - PA, 66055-200"
                  />
                  <InfoItem
                    icon={Clock}
                    label="Horário"
                    value="Seg a Sex · 9h às 17h"
                  />
                  <InfoItem
                    icon={Phone}
                    label="Contato"
                    value="WhatsApp disponível"
                  />

                  {/* Link para mapa */}
                  <a
                    href={mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 flex items-center gap-2 text-sm font-medium text-[#c48d45] transition-all duration-300 hover:translate-x-1 hover:text-[#b37935]"
                  >
                    <Navigation className="h-4 w-4" strokeWidth={1.5} />
                    Abrir no Google Maps
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
