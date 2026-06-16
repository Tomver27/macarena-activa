# SPEC — Macarena Activa

## Objetivo y audiencia
Landing page del CDC "Macarena en Movimiento", barrio La Macarena, Bogotá.
Audiencia: potenciales aliados institucionales, comunidad del sector, inversores y visitantes digitales.

## Paleta y tipografía
| Token CSS | Valor | Uso |
|---|---|---|
| `--coral` | `#BA5A5A` | Acento primario, CTAs, énfasis |
| `--amarillo` | `#F7E49B` | Highlights, estadísticas, localización |
| `--verde` | `#A4CE8B` | Naturaleza, completado, sostenibilidad |
| `--azul` | `#86BCBD` | Agua, tranquilidad, equipo |
| `--negro` | `#111111` | Texto sobre fondos claros |
| `--crema` | `#faf8f4` | Texto sobre fondos oscuros, fondos cálidos |
| `--oscuro` | `#0a0a0a` | Fondo principal oscuro |

Tipografía:
- Títulos: Playfair Display (serif, italic), var `--font-playfair`
- Cuerpo: Inter (sans-serif), var `--font-inter`
- Escala fluida con `clamp()` en tokens CSS

## Mapa de secciones
1. **Hero** — Título animado + bloque streaming `?stream=` + CTA scroll
2. **Exposición** — 3 cards stagger (programación visual, arte, encuentro)
3. **Actividades** — Grid 6 actividades con iconos SVG
4. **Planos** — SVG floor plan conceptual + estrategias de diseño
5. **El Lote** — Datos del predio + mapa OpenStreetMap iframe
6. **Problemática** — 3 columnas: efecto barrera, baja permanencia, activación isla
7. **Estadísticas** — 6 contadores animados al entrar en viewport
8. **Avances** — Timeline 3 fases + chips del equipo
9. **Equipo** — 6 cards Grupo Orizzonti
10. **Footer**

## Stack y librerías
- Next.js 16.2.9 (App Router)
- React 19, TypeScript
- Tailwind CSS v4
- GSAP + ScrollTrigger
- Lenis (smooth scroll)

## Parámetro ?stream=
`/` acepta query param `?stream=<dominio>`. Si presente, renderiza `<iframe src={dominio}>` en el hero (Client Component envuelto en `<Suspense>`). Si ausente, muestra placeholder con ícono de transmisión. Representa la futura integración de TouchDesigner via WebRTC.

## Criterios de aceptación
- [x] Preloader con contador 0→100 y cortina
- [x] Cursor follower con dot + ring, desactivado en touch
- [x] Efecto de grano animado sobre toda la página
- [x] Lenis smooth scroll integrado con ScrollTrigger
- [x] Animaciones GSAP de entrada en todas las secciones
- [x] Contadores animados en sección de estadísticas
- [x] Timeline vertical animado en avances
- [x] Mapa OpenStreetMap embebido
- [x] Responsive: grid auto-fit en todas las secciones
- [x] `prefers-reduced-motion` respetado en grain
- [x] Tipografía fluida con clamp()
