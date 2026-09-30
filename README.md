# PatrimonioNariño

Guía del patrimonio cultural de Pasto y Nariño (Next.js 15, App Router).

Patrones de rendering usados: SSG (`/lugares`, `/lugares/[slug]`), SSR (`/agenda`), ISR (`/destacado`, `revalidate = 20`), Streaming SSR (`/recorrido`, Suspense) y CSR + Web Worker (`/explorar`).

```bash
npm install
npm run build && npm start
```
