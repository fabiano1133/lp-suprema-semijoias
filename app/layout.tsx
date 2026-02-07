import type { Metadata, Viewport } from "next";
import { Julius_Sans_One, Simonetta } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const playfair = Julius_Sans_One({
  subsets: ["latin"],
  variable: "--font-title",
  display: "swap",
  weight: ["400"],
});

const lora = Simonetta({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
  weight: ["400"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://suprema-semijoias.sophos-tech-hub.com.br";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#c48d45",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Suprema Semijoias | Semijoias Exclusivas em Belém",
    template: "%s | Suprema Semijoias",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", type: "image/x-icon" },
      { url: "/icon.png", type: "image/png" },
    ],
    apple: [{ url: "/apple-icon.png", type: "image/png" }],
  },
  verification: {
    google: "3SRA-1kVbbJUM_4vkqoEaEAbrLLyNJ3aOXyfxcujjpw",
  },
  description:
    "Semijoias exclusivas e sofisticadas em Belém do Pará. Colares, brincos, pulseiras e anéis com qualidade superior, atendimento personalizado via WhatsApp e loja física no Umarizal.",
  keywords: [
    "semijoias",
    "semijoias Belém",
    "semijoias exclusivas",
    "semijoias sofisticadas",
    "colares femininos",
    "brincos",
    "pulseiras",
    "anéis",
    "acessórios femininos",
    "joias Belém do Pará",
    "loja de semijoias",
    "semijoias Umarizal",
    "presente feminino",
    "Suprema Semijoias",
  ],
  authors: [{ name: "Suprema Semijoias" }],
  creator: "Suprema Semijoias",
  publisher: "Suprema Semijoias",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: siteUrl,
    siteName: "Suprema Semijoias",
    title: "Suprema Semijoias | Semijoias Exclusivas e Sofisticadas",
    description:
      "Descubra peças únicas que combinam elegância e qualidade superior. Da rotina aos momentos especiais, encontre a semijoia perfeita para cada ocasião. Loja em Belém do Pará.",
    images: [
      {
        url: "/hero-1.png",
        width: 1200,
        height: 630,
        alt: "Suprema Semijoias — Coleção de semijoias exclusivas",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Suprema Semijoias | Semijoias Exclusivas e Sofisticadas",
    description:
      "Semijoias exclusivas com atendimento personalizado via WhatsApp. Colares, brincos, pulseiras e mais. Loja em Belém do Pará.",
    images: ["/hero-1.png"],
  },
  alternates: {
    canonical: siteUrl,
  },
  category: "shopping",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${playfair.variable} ${lora.variable} antialiased`}>
        {/* Google tag (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-FP5EGYF5B7"
          strategy="afterInteractive"
        />
        <Script id="ga4-gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-FP5EGYF5B7');
          `}
        </Script>

        <a
          href="#conteudo"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-[#c48d45] focus:px-4 focus:py-2 focus:font-body focus:text-sm focus:font-semibold focus:text-[#ffffff] focus:shadow-lg focus:shadow-[#c48d45]/30 focus:outline-none"
        >
          Pular para o conteúdo
        </a>
        {children}
      </body>
    </html>
  );
}
