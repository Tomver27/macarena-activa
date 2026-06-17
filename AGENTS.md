<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

---

# Contexto del proyecto: Macarena En Movimiento

## Qué es
Landing page del Centro Cultural Comunitario (CDC) "Macarena en Movimiento", desarrollada por el Grupo Orizzonti (Universidad Piloto de Colombia, Taller Internacional Italia 2026). El proyecto real es un CDC en el barrio La Macarena, Bogotá (Calle 26 Bis #4-88).

## Stack
- Next.js 16.2.9, App Router, TypeScript, Tailwind CSS v4
- GSAP + ScrollTrigger para animaciones
- Lenis para smooth scroll
- SIN auth, SIN roles, SIN middleware, SIN (public)/(private) route groups

## Estructura de carpetas (`src/`)
```
app/
  layout.tsx       — fuentes (Playfair Display, Inter), SmoothScrollProvider, CursorFollower, Grain
  page.tsx         — orquesta Preloader + Navbar + secciones + Footer ("use client")
  globals.css      — tokens CSS de paleta, cursor, grain, preloader
components/
  layout/
    SmoothScrollProvider.tsx  — Lenis + ScrollTrigger integration ("use client")
    Navbar.tsx                — fixed nav con scroll detection ("use client")
    Footer.tsx                — server component
  ui/
    CursorFollower.tsx  — dot + ring con gsap.quickTo ("use client")
    Grain.tsx           — overlay fijo animado CSS ("use client")
    Preloader.tsx       — contador 0→100 + cortina GSAP ("use client")
  landing/
    HeroSection.tsx       — título + bloque ?stream= + CTA
    ExposicionSection.tsx — 3 cards stagger
    ActividadesSection.tsx — 6 actividades con SVG icons
    PlanosSection.tsx     — SVG floor plan conceptual
    LoteSection.tsx       — datos predio + iframe OpenStreetMap
    ProblematicaSection.tsx — 3 columnas problemática
    StatsSection.tsx      — 6 contadores animados
    AvancesSection.tsx    — timeline 3 fases + chips equipo
    EquipoSection.tsx     — 6 cards Grupo Orizzonti
```

## Paleta de colores (tokens CSS en globals.css)
- `--coral: #BA5A5A` — acento primario
- `--amarillo: #F7E49B` — highlights
- `--verde: #A4CE8B` — naturaleza / completado
- `--azul: #86BCBD` — agua / equipo
- `--negro: #111111` — texto sobre claros
- `--crema: #faf8f4` — texto sobre oscuros
- `--oscuro: #0a0a0a` — fondo principal

## Parámetro ?stream=
El hero lee `?stream=<dominio>` con `useSearchParams()` (Client Component en Suspense). Si está presente renderiza `<iframe src={dominio}>`. Esto representa la futura integración de programación visual (TouchDesigner) via streaming WebRTC desde el CDC. **El streaming RTC real se implementará en una fase posterior.**

## Contenido del proyecto (fuente de verdad)
Los datos reales del proyecto están en:
`/home/tomas-vera/Documents/Tomas_Vera/Universidad/Taller Internacional/aporte-sistemas/avances.md`

## Dependencias externas instaladas
- `gsap` — animaciones
- `lenis` — smooth scroll

## Lo que falta implementar
- Streaming WebRTC real desde TouchDesigner
- Planos arquitectónicos reales (reemplazar SVG conceptual)
- Fotos/renders reales del predio y propuesta
- Posible integración con CMS para eventos dinámicos
