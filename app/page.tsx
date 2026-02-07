import { DifferentialsSection } from "@/components/sections/DifferentialsSection";
import { FinalCtaSection } from "@/components/sections/FinalCtaSection";
import { Footer } from "@/components/sections/Footer";

import { HeroSection } from "@/components/sections/HeroSection";
import { HowItWorksSection } from "@/components/sections/HowItWorksSection";
import { ProductsSection } from "@/components/sections/ProductsSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { JsonLd } from "@/components/seo/JsonLd";

export default function Home() {
  const whatsappUrl =
    process.env.NEXT_PUBLIC_WHATSAPP_URL ?? "https://wa.me/5591985161605";
  const mapsUrl =
    process.env.NEXT_PUBLIC_MAPS_URL ?? "https://share.google/oaGKfNXGCgdrKAR8z";

  return (
    <>
      <JsonLd />
      <main id="conteudo" className="min-h-screen">
        <HeroSection whatsappUrl={whatsappUrl} />
        <ProductsSection />
        <HowItWorksSection />
        <DifferentialsSection whatsappUrl={whatsappUrl} />
        <TestimonialsSection />
        <FinalCtaSection whatsappUrl={whatsappUrl} mapsUrl={mapsUrl} />
      </main>
      <Footer whatsappUrl={whatsappUrl} />
    </>
  );
}
