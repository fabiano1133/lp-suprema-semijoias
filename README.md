## Suprema Semijoias — Landing Page (Next.js + TailwindCSS)

Landing page otimizada para conversão, performance e SEO (App Router + TailwindCSS).

### Requisitos
- Node.js 20+

```bash
npm install
```

### Ambiente (.env)
Crie um arquivo `.env.local` baseado em `.env.example`:

```bash
cp .env.example .env.local
```

Variáveis usadas:
- `NEXT_PUBLIC_SITE_URL`
- `NEXT_PUBLIC_WHATSAPP_URL`
- `NEXT_PUBLIC_MAPS_URL`

### Desenvolvimento

```bash
npm run dev
```

### Qualidade

```bash
npm run lint
npm run typecheck
```

### Produção

```bash
npm run build
npm run start
```

#### Deploy (recomendado)
- Build gera output **standalone** (`next.config.ts`), facilitando deploy em containers/VMs.
- Configure as variáveis do `.env.local` no provedor (Vercel/Render/Fly/EC2 etc.).
