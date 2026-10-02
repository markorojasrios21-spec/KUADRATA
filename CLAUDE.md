# Kuadrata web — contexto para cualquier sesión

Web de Kuadrata (estudio de interiorismo de lujo, Madrid). Antes de tocar nada, lee en este orden:
1. `docs/BRIEF.md`: design read, marca y qué se extrae de cada referencia
2. `docs/DESIGN.md`: tokens, tipografía, grid, prohibidos
3. `docs/ESTRUCTURA.md` y `docs/ARQUITECTURA.md`: secciones, copy literal, URLs y navegación
4. `docs/MOTION.md`: efecto por sección + sección **AS BUILT** (reglas aprendidas)
5. `docs/UX-COPY.md`: glosario y microcopy (un término por concepto)
6. `docs/ESTADO.md` y `docs/CRITIQUE.md`: qué está hecho y qué falta
7. Guía maestra: `08 - Sistema/WEB.md` del vault de Obsidian

Reglas:
- Stack: React 19 · Tailwind v3 · GSAP · Lucide. Extras aprobados: Lenis, three + @react-three/fiber + drei. Nada más sin preguntar.
- Una sección por iteración; verifica en 375 / 768 / 1440 antes de seguir. Commit por bloque.
- Copy del cliente literal; cero datos inventados; sin em dash en textos visibles. Inglés británico.
- Un solo loop de animación: `gsap.ticker` mueve Lenis; R3F en `frameloop="demand"`. Todo movimiento bajo `gsap.matchMedia` (`MQ` en `src/motion/gsap.js`); sin bucles infinitos.
- NUNCA pre-ocultar con `transform` en CSS lo que GSAP anima (usa `visibility`); `clearProps: 'transform'` si el elemento tiene hover por clase.
- Imágenes: `public/img/{nombre}-{640,1200,2400}.webp` + `src/lib/images.js` (dimensiones reales). Originales en el Dropbox "Nueva WEB". No usar renders/IA a pantalla completa.
- Cada apartado es una página (`src/routes.js` es la fuente única: ruta, etiqueta del nav, título y descripción). Enlaces internos con `Link` de `src/router.jsx`, nunca `<a href="#...">` a secciones. Páginas nuevas: añadir la ruta, el componente en `App.jsx` y se prerenderiza solo.
- Todo lo que se anima al entrar espera a la compuerta (`afterFonts` / `getGate`); lo oculto por CSS lleva `data-reveal`, `data-clip` o `data-row-in`.
- Build: `npm run build` (cliente + SSR + prerender de todas las rutas). Dev: `npm run dev` (reinicia el servidor si cambias `tailwind.config.js`).
- Brand board de referencia en `docs/brand/`.
