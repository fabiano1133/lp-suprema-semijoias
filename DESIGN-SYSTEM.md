# Design System — Suprema Semijoias

Sistema de design da landing page da Suprema Semijoias, construído com **Next.js**, **TailwindCSS** e **Lucide React**.

---

## 🎨 Paleta de Cores

### Cores Principais
```css
--ss-cream: #f9f5df;    /* Fundo principal, seções claras */
--ss-sage: #bdceb8;     /* Acentos, elementos decorativos */
--ss-mint: #d9ebd9;     /* Fundo alternado, gradientes */
--ss-sand: #d3d1b0;     /* Bordas, separadores */
--ss-gold: #c48d45;     /* Texto principal, CTAs, ícones */
--ss-white: #ffffff;    /* Fundo de cards, texto em botões primários */
```

### Uso das Cores
- **Fundo de seções**: Alternar entre `#f9f5df` (cream) e `#d9ebd9` (mint)
- **Texto principal**: `#c48d45` (gold)
- **Bordas de cards**: `#d3d1b0` com opacidade (`/70`, `/60`)
- **Botão primário**: Fundo `#c48d45`, texto `#ffffff`
- **Botão secundário**: Borda `#c48d45`, texto `#c48d45`, hover com fundo branco semi-transparente

---

## 📐 Tipografia

### Fontes
```typescript
// app/layout.tsx
import { Playfair_Display, Lora } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-title",
  weight: ["400", "600", "700"],
});

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600"],
});
```

### Classes de Fonte
```css
.font-title {
  font-family: var(--font-title), serif;
}

.font-body {
  font-family: var(--font-body), serif;
}
```

### Hierarquia Tipográfica
| Elemento | Classe | Tamanho (mobile) | Tamanho (desktop) | Peso | Uso |
|----------|--------|------------------|-------------------|------|-----|
| **H1 Hero** | `font-title` | `text-4xl` (2.25rem) | `lg:text-[2.75rem]` | `font-semibold` (600) | Título principal do Hero |
| **H2 Seção** | `font-title` | `text-3xl` (1.875rem) | `sm:text-4xl` (2.25rem) | `font-normal` (400) | Títulos de seção |
| **H3 Card** | `font-title` | `text-2xl` (1.5rem) | — | `font-normal` (400) | Títulos de cards/produtos |
| **Body** | `font-body` | `text-base` (1rem) | `sm:text-lg` (1.125rem) | `font-normal` (400) | Parágrafos, descrições |
| **Caption** | `font-body` | `text-sm` (0.875rem) | — | `font-normal` (400) | Links, labels |

### Espaçamento de Texto
- **Line Height**: `leading-tight` (1.25) para títulos, `leading-relaxed` (1.625) para corpo
- **Tracking**: `tracking-tight` para títulos grandes, `tracking-wide` para títulos médios, `tracking-wider` para labels pequenos

---

## 🔲 Componentes

### Button

#### Variante Primary
```tsx
<Button variant="primary" href="...">
  <Icon className="mr-2 h-5 w-5" strokeWidth={1.5} />
  Texto do Botão
</Button>
```

**Estilos:**
```css
bg-[#c48d45] text-[#ffffff]
shadow-sm shadow-[#c48d45]/20
hover:shadow-md hover:shadow-[#c48d45]/25
hover:scale-[1.02]
rounded-full px-6 py-3
```

#### CTA Hero (Primary Destacado)
Para o CTA principal da página (Hero), aplicamos **5 camadas de destaque visual**:

```tsx
<div className="relative">
  {/* 1. Glow pulsante atrás */}
  <div className="absolute -inset-2 -z-10 animate-pulse rounded-full bg-[#c48d45]/20 blur-xl" />
  
  {/* 2. Botão maior com sombra forte */}
  <Button
    variant="primary"
    className="group text-lg sm:text-xl sm:px-8 sm:py-4 shadow-lg shadow-[#c48d45]/30 hover:scale-105 hover:shadow-2xl hover:shadow-[#c48d45]/50"
  >
    {/* 3. Shine effect no hover */}
    <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-[#ffffff]/30 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
    
    {/* 4. Ícone maior com rotação no hover */}
    <Icon className="relative mr-2 h-6 w-6 sm:h-7 sm:w-7 transition-transform duration-300 group-hover:rotate-12" />
    
    {/* 5. Texto semibold */}
    <span className="relative font-semibold">Texto do CTA</span>
  </Button>
</div>
```

**Elementos de Destaque:**
1. **Glow Pulsante** — `animate-pulse` + `blur-xl` + opacidade 20%
2. **Tamanho Maior** — `text-lg/xl`, `px-8 py-4` (vs padrão `px-6 py-3`)
3. **Sombra Dramática** — `shadow-lg` (normal) → `shadow-2xl` (hover)
4. **Shine Effect** — Brilho horizontal que atravessa o botão no hover (700ms)
5. **Ícone Animado** — Rotação de 12° no hover
6. **Scale Maior** — `1.05` vs `1.02` dos botões normais
7. **Texto Bold** — `font-semibold` para maior peso visual

#### Variante Secondary
```tsx
<Button variant="secondary" href="...">
  <Icon className="mr-2 h-5 w-5" strokeWidth={1.5} />
  Texto do Botão
</Button>
```

**Estilos:**
```css
bg-transparent text-[#c48d45]
border border-[#c48d45]
hover:bg-[#ffffff]/60
hover:scale-[1.02]
rounded-full px-6 py-3
```

#### Button Link (Header)
Usado no header para ações secundárias (ex: link WhatsApp).

```tsx
<a
  href="..."
  className="inline-flex items-center gap-2 rounded-full border border-[#c48d45] bg-transparent px-4 py-2 font-body text-sm uppercase tracking-wider text-[#c48d45] shadow-sm shadow-[#c48d45]/10 transition-all duration-200 ease-out hover:scale-[1.02] hover:bg-[#c48d45] hover:text-[#ffffff] hover:shadow-md hover:shadow-[#c48d45]/25"
>
  <Icon className="h-4 w-4" strokeWidth={1.5} />
  Texto
</a>
```

**Características:**
- Menor que botões principais (`px-4 py-2` vs `px-6 py-3`)
- Texto uppercase com tracking-wider
- Hover inverte cores (fundo gold, texto branco)

---

### Cards

#### Product Card
```css
rounded-3xl
border border-[#d3d1b0]/70
bg-[#ffffff]/70
p-6
shadow-sm shadow-[#d3d1b0]/30
backdrop-blur-sm
transition duration-300 ease-out
hover:-translate-y-1
hover:shadow-md hover:shadow-[#d3d1b0]/40
```

**Estrutura:**
- Ícone em círculo (`rounded-2xl`, fundo `#d9ebd9`, tamanho `h-12 w-12`)
- Título `font-title text-2xl`
- Descrição `font-body text-base leading-relaxed`

#### Differential Card
```css
rounded-3xl
border border-[#d3d1b0]/70
bg-[#ffffff]/65
p-5
shadow-sm shadow-[#d3d1b0]/25
backdrop-blur-sm
transition duration-300 ease-out
hover:-translate-y-1
hover:shadow-md hover:shadow-[#d3d1b0]/35
```

**Estrutura:**
- Layout `flex items-start gap-3`
- Ícone `h-5 w-5 shrink-0 text-[#c48d45]`
- Texto `font-body text-base leading-relaxed`

---

## 🎭 Animações

### Reveal Component
Componente de animação "ao scroll" usando **IntersectionObserver** + classes Tailwind.

```tsx
<Reveal preset="fade-up" delayMs={80}>
  {children}
</Reveal>
```

**Presets disponíveis:**
- `fade-in`: Apenas fade (opacity)
- `fade-up`: Fade + translate Y (padrão)
- `slow-scale`: Fade + scale sutil

**Parâmetros:**
- `delayMs`: Atraso da animação (múltiplos de 40-80ms para sequência)
- `durationMs`: Duração (padrão 650ms)

**Classes aplicadas:**
```css
transform-gpu will-change-transform
transition ease-out
motion-reduce:transition-none
```

### Hover States

#### Botões
```css
hover:scale-[1.02]        /* Crescimento sutil */
active:scale-[0.99]       /* Pressão ao clicar */
transition-transform duration-200 ease-out
```

#### Cards
```css
hover:-translate-y-1      /* Levanta o card */
hover:shadow-md           /* Sombra mais forte */
transition duration-300 ease-out
```

#### Ícones em Cards
```css
group-hover:scale-[1.03]  /* Cresce junto com card */
transition duration-300 ease-out
```

#### Imagens (Hero)
```css
/* Container da imagem */
group-hover:scale-[1.02]
group-hover:shadow-lg group-hover:shadow-[#d3d1b0]/40
transition-all duration-500 ease-out

/* Imagem interna (zoom) */
group-hover:scale-105
transition-transform duration-700 ease-out
```

### Animações Contínuas

#### Float Animation
Movimento suave vertical para criar dinamismo sutil sem interação.

```css
@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-8px); }
}

.animate-float {
  animation: float 6s ease-in-out infinite;
}
```

**Variações:**
- `animate-float` — 6s, sobe 8px (padrão)
- `animate-float-slow` — 8s, sobe 12px (mais lenta, amplitude maior)
- `animate-float-reverse` — 7s, desce 8px (direção invertida)

**Uso:**
```tsx
<div className="motion-safe:animate-float">
  {/* Conteúdo */}
</div>
```

**Nota:** Sempre usar com `motion-safe:` para respeitar preferências de usuários com `prefers-reduced-motion`.

---

## 🖼️ Imagens com Animações

### Estrutura de Imagens Animadas (Hero)

```tsx
{/* Container com animação float contínua */}
<div className="group relative motion-safe:animate-float">
  {/* Wrapper da imagem com hover scale e sombra */}
  <div className="relative aspect-3/4 overflow-hidden rounded-xl bg-[#d3d1b0]/30 transition-all duration-500 ease-out group-hover:scale-[1.02] group-hover:shadow-lg group-hover:shadow-[#d3d1b0]/40">
    {/* Next/Image com zoom interno no hover */}
    <Image
      src="/image.png"
      alt="..."
      fill
      sizes="..."
      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
      priority
    />
  </div>
</div>
```

### Camadas de Animação

1. **Animação Contínua (Float)**
   - Aplicada no container externo
   - Movimento vertical suave e infinito
   - Usa `motion-safe:` para acessibilidade
   - 3 variantes com durações/direções diferentes

2. **Hover no Container**
   - `scale-[1.02]` — Cresce 2%
   - `shadow-lg` — Sombra aumenta
   - `duration-500` — Transição média
   - Aplicado no wrapper da imagem

3. **Zoom Interno na Imagem**
   - `scale-105` — Imagem cresce 5%
   - `duration-700` — Transição mais lenta (parallax)
   - Aplicado diretamente no `<Image>`
   - Fica contido pelo `overflow-hidden` do pai

### Colagem com Animações Diferentes

Para criar efeito orgânico, cada imagem na colagem usa animação diferente:

```tsx
{/* 1ª imagem: float normal (6s) */}
<div className="motion-safe:animate-float">...</div>

{/* 2ª imagem: float lenta (8s, maior amplitude) */}
<div className="motion-safe:animate-float-slow">...</div>

{/* 3ª imagem: float reverso (7s, desce) */}
<div className="motion-safe:animate-float-reverse">...</div>
```

**Resultado:** Movimento dessincronizado que evita padrão robótico.

---

## 🎨 Ícones (Lucide React)

### Importação
```tsx
import { Icon1, Icon2 } from "lucide-react";
```

### Configuração Padrão
```tsx
<Icon
  className="h-5 w-5 text-[#c48d45]"
  strokeWidth={1.5}
/>
```

### Tamanhos por Contexto
| Contexto | Classe | Tamanho (px) |
|----------|--------|--------------|
| **Botão Header** | `h-4 w-4` | 16px |
| **Botão CTA** | `h-5 w-5` | 20px |
| **Card Produto** | `h-6 w-6` | 24px |
| **Card Diferencial** | `h-5 w-5` | 20px |

### Ícones Utilizados
- `MessageCircle` → WhatsApp, contato
- `Sparkles` → Dia a dia, versátil
- `Gem` → Sofisticado, luxo
- `Star` → Qualidade
- `Crown` → Atendimento premium
- `Gift` → Ocasiões especiais
- `Package` → Entrega
- `Heart` → Embalagem
- `ShieldCheck` → Garantia
- `Droplets` → Cuidados

---

## 📏 Espaçamento

### Container
```tsx
<Container>
  {/* Centraliza e limita largura */}
</Container>
```

**Estilos:**
```css
mx-auto w-full max-w-6xl
px-4 sm:px-6 lg:px-8
```

### Espaçamento Vertical de Seções
```css
py-14 sm:py-20    /* Padrão para seções */
```

### Gaps
- **Entre cards**: `gap-5 sm:gap-6`
- **Entre ícone e texto**: `gap-2` (pequeno), `gap-3` (médio), `gap-4` (grande)
- **Entre botões**: `gap-3`

### Margens Internas
- **Cards grandes**: `p-6`
- **Cards pequenos**: `p-5`
- **Botões**: `px-6 py-3` (grande), `px-4 py-2` (pequeno)

---

## 🌈 Efeitos e Ornamentos

### Backdrop Blur
Cards usam `backdrop-blur-sm` para efeito de vidro fosco.

### Gradientes de Fundo
```css
background: linear-gradient(180deg, var(--ss-cream), var(--ss-mint));
```

### Elementos Decorativos (Hero)
```tsx
<div aria-hidden className="pointer-events-none absolute inset-0">
  <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-[#bdceb8]/40 blur-3xl" />
  <div className="absolute -bottom-28 -left-20 h-80 w-80 rounded-full bg-[#d9ebd9]/50 blur-3xl" />
</div>
```

### Profundidade (Depth) — Sistema de Camadas Z

Para criar sensação de profundidade sem comprometer performance, usamos **5 técnicas combinadas**:

#### 1. **Z-Index Layers**
```css
/* Camada 0: Background decorativo */
z-0

/* Camada 1: Gradiente overlay */
z-[1]

/* Camada 10: Conteúdo principal */
z-10
```

#### 2. **Sombras em Múltiplas Intensidades**
```css
/* Imagem de fundo (menos profundidade) */
shadow-md shadow-[#d3d1b0]/30

/* Imagem central (mais profundidade) */
shadow-lg shadow-[#d3d1b0]/40

/* Hover (profundidade máxima) */
hover:shadow-xl hover:shadow-[#d3d1b0]/50
hover:shadow-2xl hover:shadow-[#d3d1b0]/60
```

#### 3. **Ring (Borda Luminosa)**
Adiciona "separação do fundo" simulando luz refletida:
```css
ring-1 ring-[#ffffff]/20    /* Sutil */
ring-1 ring-[#ffffff]/30    /* Média - imagem central */
ring-1 ring-[#ffffff]/25    /* Entre sutil e média */
```

#### 4. **Transform 3D (GPU Acceleration)**
```tsx
style={{ transform: 'translateZ(0)' }}     /* Imagem 1 */
style={{ transform: 'translateZ(10px)' }}  /* Imagem 2 - mais próxima */
style={{ transform: 'translateZ(5px)' }}   /* Imagem 3 - intermediária */
```

**Por quê funciona:**
- `translateZ` força rendering via GPU (aceleração de hardware)
- Não causa reflow (propriedade `transform`)
- Cria "camadas" visuais sem mudar layout

#### 5. **Gradientes de Overlay**
```tsx
{/* Gradiente sutil para profundidade atmosférica */}
<div className="absolute inset-0 bg-gradient-to-br from-transparent via-[#ffffff]/5 to-[#bdceb8]/10" />
```

#### 6. **Sombras Projetadas (Drop Shadow)**
Sombras grandes e desfocadas atrás dos elementos:
```tsx
{/* Atrás da coluna de texto */}
<div className="absolute -left-4 top-8 -z-10 h-48 w-48 rounded-full bg-[#c48d45]/5 blur-3xl" />

{/* Atrás das imagens */}
<div className="absolute inset-0 -z-10 translate-x-4 translate-y-4 rounded-3xl bg-gradient-to-br from-[#d3d1b0]/20 to-transparent blur-2xl" />
```

### Sombras (Tabela de Referência)

| Elemento | Estado | Classe | Uso |
|----------|--------|--------|-----|
| **Card padrão** | Normal | `shadow-sm shadow-[#d3d1b0]/25` | Cards gerais |
| **Card padrão** | Hover | `hover:shadow-md hover:shadow-[#d3d1b0]/35` | Elevação sutil |
| **Botão primário** | Normal | `shadow-sm shadow-[#c48d45]/20` | CTA principal |
| **Botão primário** | Hover | `hover:shadow-md hover:shadow-[#c48d45]/25` | Destaque |
| **Imagem Hero** | Normal | `shadow-md shadow-[#d3d1b0]/30` | Profundidade base |
| **Imagem Hero (central)** | Normal | `shadow-lg shadow-[#d3d1b0]/40` | Mais profundidade |
| **Imagem Hero** | Hover | `hover:shadow-xl shadow-[#d3d1b0]/50` | Elevação forte |
| **Imagem Hero (central)** | Hover | `hover:shadow-2xl shadow-[#d3d1b0]/60` | Elevação máxima |

### Performance de Profundidade

**✅ Propriedades Performáticas (usadas):**
- `transform` — Não causa reflow, GPU accelerated
- `opacity` — Otimizado pelo browser
- `box-shadow` — Aceitável quando não excessivo
- `z-index` — Puro CSS, sem custo
- `filter: blur()` — GPU em elementos absolutos/fixed

**🔴 Evitado (pesados):**
- `filter` em elementos dinâmicos
- `backdrop-filter` em excesso (só header)
- Múltiplos `position: fixed`
- Transforms em elementos com muitos filhos

---

## 🔧 Bordas e Raios

### Border Radius
- **Cards**: `rounded-3xl` (1.5rem)
- **Botões**: `rounded-full`
- **Ícone Container**: `rounded-2xl` (1rem)
- **Imagens**: `rounded-xl` (0.75rem)

### Bordas
```css
border border-[#d3d1b0]/70    /* Cards */
border border-[#c48d45]       /* Botões secundários */
```

---

## 📱 Responsividade

### Breakpoints (TailwindCSS)
- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px

### Grid de Seções
```tsx
{/* Hero */}
<div className="grid grid-cols-1 lg:grid-cols-12">
  <div className="lg:col-span-5">{/* Texto */}</div>
  <div className="lg:col-span-7">{/* Imagens */}</div>
</div>

{/* Produtos */}
<div className="grid grid-cols-1 sm:grid-cols-2">
  {/* Cards */}
</div>

{/* Diferenciais */}
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
  {/* Cards */}
</div>
```

### Ajustes Mobile-First
- Texto menor em mobile, aumenta em `sm:` e `lg:`
- Padding/margin menor em mobile
- Stacking vertical em mobile, horizontal em desktop
- Imagens em proporção diferente (aspect ratio)

---

## ✅ Boas Práticas

### Acessibilidade
- `aria-hidden` em elementos decorativos
- `focus-visible:outline` em todos os elementos interativos
- `alt` descritivos em imagens
- Contrast ratio mantido (WCAG AA)

### Performance
- Fontes carregadas via `next/font` (otimização automática)
- Imagens via `next/image` (lazy loading, sizes, priority)
- `transform-gpu` para animações aceleradas por hardware
- `will-change-transform` apenas onde necessário

### Motion
- `motion-reduce:transition-none` para respeitar preferências do usuário
- Animações sutis (scale de 1.02, translate de -4px)
- Durações curtas (200-300ms para hover, 650ms para reveal)

---

## 📦 Estrutura de Arquivos

```
components/
├── motion/
│   └── Reveal.tsx           # Animação ao scroll
├── sections/
│   ├── HeroSection.tsx
│   ├── ProductsSection.tsx
│   ├── HowItWorksSection.tsx
│   ├── DifferentialsSection.tsx
│   ├── TestimonialsSection.tsx
│   └── FinalCtaSection.tsx
└── ui/
    ├── Button.tsx           # Botão reutilizável
    └── Container.tsx        # Container centralizado

app/
├── globals.css              # Variáveis CSS, fontes, reset
├── layout.tsx               # Layout raiz, fontes Google
└── page.tsx                 # Montagem das seções
```

---

## 🚀 Uso Prático

### Criar um novo Card
```tsx
<article className="rounded-3xl border border-[#d3d1b0]/70 bg-[#ffffff]/70 p-6 shadow-sm shadow-[#d3d1b0]/30 backdrop-blur-sm transition duration-300 ease-out hover:-translate-y-1 hover:shadow-md hover:shadow-[#d3d1b0]/40">
  <div className="flex items-start gap-4">
    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#d9ebd9]">
      <Icon className="h-6 w-6 text-[#c48d45]" strokeWidth={1.5} />
    </div>
    <div>
      <h3 className="font-title text-2xl tracking-wide text-[#c48d45]">
        Título
      </h3>
      <p className="mt-3 text-base leading-relaxed text-[#c48d45]">
        Descrição
      </p>
    </div>
  </div>
</article>
```

### Criar uma nova Seção
```tsx
<section className="bg-[#f9f5df] py-14 sm:py-20" id="secao">
  <Container>
    <Reveal preset="fade-up">
      <h2 className="font-title text-3xl tracking-wide text-[#c48d45] sm:text-4xl">
        Título da Seção
      </h2>
    </Reveal>
    <Reveal preset="fade-up" delayMs={80}>
      <p className="mt-4 text-base leading-relaxed text-[#c48d45] sm:text-lg">
        Subtítulo
      </p>
    </Reveal>
    {/* Conteúdo */}
  </Container>
</section>
```

---

## 📝 Changelog

- **v1.0** — Sistema inicial com Next.js 16, Tailwind v4, Lucide React
- Fontes: Playfair Display + Lora (Google Fonts)
- Paleta: 6 cores fixas (#f9f5df, #bdceb8, #d9ebd9, #d3d1b0, #c48d45, #ffffff)
- Componentes: Button (2 variantes), Cards (3 tipos), Reveal, Container
- Ícones: 10 ícones do Lucide React
