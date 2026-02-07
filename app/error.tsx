"use client";

import * as React from "react";
import { MessageCircle } from "lucide-react";

import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export default function Error({
  reset: _reset,
}: {
  reset: () => void;
}) {
  const whatsappUrl =
    process.env.NEXT_PUBLIC_WHATSAPP_URL ?? "https://wa.me/5591985161605";

  return (
    <main className="min-h-screen bg-[#f9f5df] py-14 sm:py-20">
      <Container>
        <div className="mx-auto max-w-2xl rounded-3xl border border-[#d3d1b0]/60 bg-[#ffffff]/70 p-6 text-center shadow-lg shadow-[#d3d1b0]/25 ring-1 ring-[#ffffff]/50 backdrop-blur-md sm:p-10">
          <p className="font-title text-2xl tracking-wide text-[#c48d45] sm:text-3xl">
            Suprema Semijoias
          </p>
          <p className="mt-4 text-base font-medium leading-relaxed text-[#c48d45] sm:text-lg">
            Estamos prontas para atendê-la!
          </p>

          <div className="mt-8 flex justify-center">
            <Button
              variant="primary"
              href={whatsappUrl}
              className="group relative overflow-hidden sm:px-8 sm:py-4"
            >
              <MessageCircle
                className="mr-2 h-5 w-5 sm:h-6 sm:w-6"
                strokeWidth={1.5}
              />
              Comprar pelo WhatsApp
            </Button>
          </div>
        </div>
      </Container>
    </main>
  );
}

