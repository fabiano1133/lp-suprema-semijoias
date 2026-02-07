import * as React from "react";
import { MessageCircle, Sparkles, MapPin } from "lucide-react";

import { Reveal } from "../motion/Reveal";
import { Container } from "../ui/Container";

function Step({
  icon: Icon,
  title,
  description,
  delayMs,
}: {
  icon: React.ElementType;
  title: string;
  description: string;
  delayMs: number;
}) {
  return (
    <Reveal preset="fade-up" delayMs={delayMs}>
      <li className="group relative flex h-full gap-4 rounded-2xl border border-[#d3d1b0]/50 bg-[#ffffff]/50 p-5 shadow-sm shadow-[#d3d1b0]/20 backdrop-blur-sm transition-all duration-400 ease-out hover:-translate-y-1 hover:shadow-md hover:shadow-[#d3d1b0]/30 sm:p-6 lg:flex-col lg:items-center lg:p-6 lg:text-center">
        {/* Sombra sutil atrás do card */}
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 translate-x-1 translate-y-1 rounded-2xl bg-[#d3d1b0]/15 blur-lg opacity-0 transition-opacity duration-400 group-hover:opacity-100" />
        
        <div className="relative flex h-12 w-12 flex-none items-center justify-center rounded-xl bg-[#ffffff] shadow-sm shadow-[#d3d1b0]/25 ring-1 ring-[#d3d1b0]/30 transition-all duration-400 ease-out group-hover:shadow-md group-hover:shadow-[#d3d1b0]/35 sm:h-14 sm:w-14 lg:mb-4 lg:h-14 lg:w-14">
          {/* Glow sutil no hover */}
          <div aria-hidden className="absolute inset-0 rounded-xl bg-[#c48d45]/10 opacity-0 transition-opacity duration-400 group-hover:opacity-100" />
          <Icon className="relative h-6 w-6 text-[#c48d45] transition-transform duration-400 group-hover:scale-110 sm:h-7 sm:w-7 lg:h-7 lg:w-7" strokeWidth={1.5} />
        </div>
        
        <div className="flex-1">
          <h3 className="font-title text-xl tracking-wide text-[#c48d45] sm:text-2xl lg:text-2xl">
            {title}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-[#c48d45]/85 sm:text-base lg:mt-3 lg:text-base">
            {description}
          </p>
        </div>
      </li>
    </Reveal>
  );
}

export function HowItWorksSection() {
  return (
    <section className="relative overflow-hidden bg-[#d9ebd9] py-14 sm:py-20" id="como-funciona" aria-labelledby="como-funciona-titulo">
      {/* Camada 1: Elementos decorativos de fundo */}
      <div aria-hidden className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute -top-32 -left-24 h-96 w-96 rounded-full bg-[#bdceb8]/40 blur-3xl" />
        <div className="absolute -bottom-32 -right-24 h-96 w-96 rounded-full bg-[#f9f5df]/60 blur-3xl" />
        <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#d3d1b0]/20 blur-3xl" />
      </div>

      {/* Camada 2: Gradiente atmosférico */}
      <div aria-hidden className="pointer-events-none absolute inset-0 z-1 bg-linear-to-b from-transparent via-[#ffffff]/5 to-transparent" />

      <Container className="relative z-10">
        <Reveal preset="fade-up">
          <h2 id="como-funciona-titulo" className="font-title text-3xl tracking-wide text-[#c48d45] sm:text-4xl">
            Comprar é Simples e Rápido
          </h2>
        </Reveal>

        <ol className="mt-10 grid grid-cols-1 gap-5 sm:gap-6 lg:grid-cols-3 lg:gap-6">
          <Step
            icon={MessageCircle}
            title="Entre em Contato"
            description="Mande uma mensagem no nosso WhatsApp e seja atendida com atenção personalizada por nossa equipe especializada."
            delayMs={80}
          />
          <Step
            icon={Sparkles}
            title="Conheça Nossos Produtos"
            description="Apresentamos nossa coleção exclusiva com fotos, detalhes e preços. Tire todas as suas dúvidas sobre as peças."
            delayMs={140}
          />
          <Step
            icon={MapPin}
            title="Escolha Como Receber"
            description="Prefere receber em casa? Fazemos a entrega. Quer conhecer nossa loja? Venha nos visitar e experimentar as peças pessoalmente."
            delayMs={200}
          />
        </ol>
      </Container>
    </section>
  );
}

