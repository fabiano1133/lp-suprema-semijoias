import Image from "next/image";
import * as React from "react";
import { MapPin, Clock, MessageCircle, Heart } from "lucide-react";

import { Container } from "../ui/Container";

export function Footer({ whatsappUrl }: { whatsappUrl: string }) {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="border-t border-[#d3d1b0]/40 bg-[#f9f5df] py-10 sm:py-14"
      role="contentinfo"
      itemScope
      itemType="https://schema.org/WPFooter"
    >
      <Container>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-12">
          {/* Coluna 1: Marca + descrição */}
          <div>
            <Image
              src="/suprema-logo-2.png"
              alt="Suprema Semijoias"
              width={160}
              height={50}
              className="h-auto w-36 sm:w-40"
            />
            <p className="mt-4 text-base font-medium leading-relaxed text-[#c48d45] sm:text-lg">
              Semijoias exclusivas e sofisticadas em Belém do Pará. Qualidade
              superior, atendimento personalizado e peças para todas as ocasiões.
            </p>
          </div>

          {/* Coluna 2: Navegação interna */}
          <nav aria-label="Links do rodapé">
            <p className="font-title text-sm font-semibold uppercase tracking-wider text-[#c48d45]">
              Navegação
            </p>
            <ul className="mt-3 space-y-2">
              {[
                { href: "#produtos", label: "Produtos" },
                { href: "#como-funciona", label: "Como Funciona" },
                { href: "#diferenciais", label: "Diferenciais" },
                { href: "#depoimentos", label: "Depoimentos" },
                { href: "#localizacao", label: "Localização" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-[#c48d45]/75 transition-colors duration-200 hover:text-[#c48d45] sm:text-base"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Coluna 3: Contato e endereço */}
          <div
            itemScope
            itemType="https://schema.org/LocalBusiness"
          >
            <p className="font-title text-sm font-semibold uppercase tracking-wider text-[#c48d45]">
              Contato
            </p>
            <ul className="mt-3 space-y-3">
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#c48d45]/70" strokeWidth={1.5} />
                <span
                  className="text-sm leading-snug text-[#c48d45]/80"
                  itemProp="address"
                  itemScope
                  itemType="https://schema.org/PostalAddress"
                >
                  <span itemProp="streetAddress">Tv. Dom Romualdo de Seixas, 1476</span> —{" "}
                  <span itemProp="addressLocality">Umarizal, Belém</span> —{" "}
                  <span itemProp="addressRegion">PA</span>,{" "}
                  <span itemProp="postalCode">66055-200</span>
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Clock className="h-4 w-4 shrink-0 text-[#c48d45]/70" strokeWidth={1.5} />
                <span className="text-sm text-[#c48d45]/80">
                  Seg a Sex · 9h às 17h
                </span>
              </li>
              <li className="flex items-center gap-2">
                <MessageCircle className="h-4 w-4 shrink-0 text-[#c48d45]/70" strokeWidth={1.5} />
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-[#c48d45]/80 transition-colors duration-200 hover:text-[#c48d45]"
                >
                  Atendimento via WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider + copyright */}
        <div className="mt-8 border-t border-[#d3d1b0]/30 pt-6 text-center sm:mt-10 sm:pt-8">
          <p className="flex items-center justify-center gap-1 text-xs text-[#c48d45]/60 sm:text-sm">
            &copy; {currentYear} Suprema Semijoias. Todos os direitos reservados.
            <Heart className="inline h-3 w-3 text-[#c48d45]/40" strokeWidth={1.5} aria-hidden />
          </p>
        </div>
      </Container>
    </footer>
  );
}
