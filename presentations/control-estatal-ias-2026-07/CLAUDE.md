# CLAUDE.md — Mythos, Fable y GPT-5.6

## Presentation Overview

Charla de Dani Lupión (PauseAI España) para el seminario mensual de BlueDot Impact × iaS (Inteligencia Artificial Segura). Continuación de «Mythos y Glasswing» (`mythos-ias-2026-05`). Tema: la llegada de Claude Fable 5 / Claude Mythos 5 y GPT-5.6, el acceso escalonado a modelos de frontera (tiers públicos vs. organizaciones aprobadas) y la pregunta central: **¿ha comenzado la era del control estatal de la IA de frontera?**

## Bilingual

- ES (canonical): `slides.md` → `slides/es/` · `pnpm dev` (3040) · `pnpm build`
- EN: `slides-en.md` → `slides/en/` · `pnpm dev:en` (3050) · `pnpm build:en`
- Both languages share `public/`, `style.css`, `vite.config.js`, `global-bottom.vue`, and `package.json`.
- Slide structure and click reveals mirror 1:1 between languages. Translation is mechanical — keep them in lockstep when editing.

## Key Details

- **Ponente**: Dani Lupión
- **Formato**: Seminario virtual + discusión (los seminarios iaS son el primer miércoles de cada mes)
- **Audiencia**: Comunidad iaS / BlueDot Impact en español — gente que trabaja en AI safety (investigación y políticas públicas) y curiosos informados. Técnicamente sofisticada; muchos asistieron a la charla de mayo sobre Mythos/Glasswing.
- **Duración**: TBD (confirmar con organizadores)
- **Fecha**: Julio 2026 (día exacto por confirmar — el "primer miércoles" de julio ya pasó, verificar fecha real del seminario)
- **Lugar**: Virtual — Seminarios BlueDot Impact × iaS
- **Idiomas**: Español (canónico) + Inglés
- **Tono**: Técnico pero accesible, factual, sin hedging. Enfoque AI safety + governance/policy.

## Branding

- **Assets** (en `public/logos/`): `logo.png` (icono PauseAI), `logo-completo.png` (banner horizontal), `aisafetyspain.svg` (logo comunidad — TODO: confirmar si iaS tiene logo propio nuevo o mantener el de AISafety España)
- **Footer**: PauseAI logo + pauseai.es (izquierda), logo comunidad (derecha)
- **Theme**: dark (fondo navy #0f172a, acento orange #ff9416)

## Arco narrativo (v2 — integra `research/crossover.md`)

1. Recap express de mayo: Mythos Preview, Glasswing, la ventana transicional.
2. Los hechos de 2026 (informe): Fable 5/Mythos 5, el rollback de 19 días, GPT-5.6 y la puerta de 12 días, la EO "voluntaria", la demanda al Pentágono. Cronología como columna vertebral.
3. El mapa estratégico (crossover §0): los tres campos de BlueDot y las nueve visiones IAPS. Tesis: esto es el campo 1 (control gubernamental) ejecutado ad hoc, sin sus salvaguardas.
4. Tres disecciones técnicas (crossover §1-§4): el gradiente de acceso (¿quién decide quién es "organización aprobada"?), el ciclo jailbreak→clasificador→">99%" (por qué las salvaguardas no fundamentan acceso general), y lo que la directiva no puede tocar (open-weight + la curva cyber).
5. El Leviatán (crossover §5): el palo y la zanahoria son el mismo brazo — Pentágono/blacklist vs. Glasswing/redeployment; el arsenal de palancas estaba inventariado (GovAI 2021); Hobbes y el narrow corridor.
6. El falso dilema (crossover §6): momento interactivo con el crux IAPS; 2026 logró concentración ad hoc Y proliferación a la vez. Europa como objeto, no sujeto (§7). Terrorismo con honestidad (§8).
7. El clímax (crossover §9): control estatal sí — pero el equivocado. Tabla de contraste eje por eje: lo que hay vs. lo que PauseAI pide (tratado, umbrales públicos, verificación, reversibilidad). Preempt de la objeción Drago/Laine.
8. Cierre personal ("pause, then purpose") + implicaciones para la comunidad iaS: investigación, policy, incidencia.
9. Discusión / Q&A.

## Session Structure

Provisional (sin minutos — duración TBD con organizadores). Referencias: `research/informe.md` (hechos) y `research/crossover.md` (conceptos).

### Bloque 1: De Mythos Preview al rollback (recap + hechos)

- Recap mayo + cronología mar-jul 2026 (informe: cronología)
- El episodio 9 jun – 1 jul contado como historia (informe: Pilar 1 + rollback)

### Bloque 2: El mapa — dónde estamos en el espacio de estrategias

- Tres campos + crux IAPS (crossover §0, §6) — **momento interactivo: posicionar a la audiencia ante el crux**
- El gradiente de acceso y quién decide (crossover §1)

### Bloque 3: Por qué el control actual no se sostiene técnicamente

- Gato y ratón: clasificadores y el ">99%" (crossover §2)
- Open-weight: lo que la directiva no puede tocar (crossover §3)
- La curva cyber que asusta a los estados (crossover §4)

### Bloque 4: El Leviatán y Europa

- Palo y zanahoria: Pentágono ↔ Glasswing (crossover §5)
- Europa: mapa de tiers reales, soberanía como capacidad (crossover §7)
- Terrorismo: dos columnas honestas (crossover §8)

### Bloque 5: Control estatal sí — pero el equivocado

- Tabla de contraste eje por eje (crossover §9)
- Objeciones preemptadas (crossover: consolidado)
- Cierre personal + llamada a la comunidad iaS

### Bloque 6: Q&A

## Interactive Moments

1. Bloque 2: proyectar el crux IAPS ("Which is more concerning…") y pedir posiciones antes de revelar que 2026 materializó ambos males (crossover §6).
2. (Candidato) Bloque 4: encuesta rápida — "¿cuántos perdisteis acceso a Fable 5 entre el 12 jun y el 1 jul?" — convierte la sección de Europa en experiencia propia de la audiencia.

## TODOs Before Presentation

- [ ] Confirmar fecha y duración exactas con organizadores iaS
- [ ] Confirmar logo de la comunidad (¿iaS tiene branding propio o se mantiene AISafety España?)
- [x] Investigar y documentar en `research/` las fuentes sobre: lanzamiento Fable 5 / Mythos 5 (tier de organizaciones aprobadas), GPT-5.6, y movimientos de policy/estados relacionados → ver `research/informe.md` (23 afirmaciones verificadas 2026-07-17) y `research/afirmaciones-verificadas.json`
- [x] Panel de verificación de extensión (2026-07-17, ronda 2): GPT-5.6, orden ejecutiva, Glasswing, reacciones y demanda Anthropic-Pentágono — todo verificado, ver `research/informe.md`
- [x] Investigación adicional (2026-07-17): Kimi/open-weight, ciberataques, Europa, terrorismo, rollback de Fable 5 — verificada e integrada en `research/informe.md` (+ `research/afirmaciones-extension.json`)
- [ ] **Ronda 1 de validación de Dani sobre `research/informe.md`** (pueden venir más temas de investigación después)
- [ ] Toda afirmación en `research/` debe llevar URL de fuente + cita literal (convención ya en uso)
- [x] Fase filosofía/AI safety: temas conectados con los materiales de BlueDot (`agi-strategy` + `technical-ai-safety` + wiki) → ver `research/crossover.md` (2026-07-18; citas verificadas con grep contra los archivos fuente) y el arco narrativo v2 + Session Structure de este documento
- [ ] **Ronda de validación de Dani sobre `research/crossover.md`** (en paralelo a la del informe)
- [x] Construir slides individuales en `slides/es/` y `slides/en/` (2026-07-18: 36 slides × 2 idiomas, 7 ficheros por idioma, lockstep verificado, ambos builds OK) — pendiente de validación de Dani junto con informe + crossover
- [ ] Verificar todas las fuentes con `TODO source:` en slides/
- [x] Generar QR codes en `public/` (2026-07-21, con `segno`): `qr-charla.png` (URL ES) y `qr-charla-en.png` (URL `/en/`), usados en la slide de Preguntas. Cierre reestructurado a lo mythos-mayo: Gracias → Fuentes y verificación → Preguntas+QR (fuera la slide «qué puede hacer esta comunidad»)

## Key Sources

### Anthropic — Claude 5 / Fable / Mythos

- https://www.anthropic.com/news/claude-fable-5-mythos-5
- (heredadas de la charla anterior) https://red.anthropic.com/2026/mythos-preview/ · https://www.anthropic.com/glasswing

### Anthropic — episodio de controles de exportación (jun 2026)

- https://www.anthropic.com/claude/mythos
- https://www.anthropic.com/news/redeploying-fable-5
- https://x.com/AnthropicAI/status/2070665903440871779

### OpenAI — GPT-5.6

- https://openai.com/index/previewing-gpt-5-6-sol/ (vista previa limitada a petición del gobierno — ⚠️ pendiente de panel)
- https://deploymentsafety.openai.com/gpt-5-6 (system card: High en bio+cyber, Trusted Access, evals de UK AISI — ✅)

### Governance / estados

- https://blogs.microsoft.com/on-the-issues/2026/05/05/advancing-ai-evaluation-with-the-center-for-ai-standards-us-and-innovation-and-the-ai-security-institute-uk/ (Microsoft ↔ CAISI/UK AISI — ✅)
- https://www.federalregister.gov/documents/2025/01/15/2025-00636/framework-for-artificial-intelligence-diffusion (BIS: pesos, UVEU, tiers — ☑️ comprobar vigencia)
- https://digital-strategy.ec.europa.eu/en/policies/guidelines-gpai-providers (UE: multas GPAI solo desde 2026-08-02 — ✅)
- https://www.piie.com/blogs/realtime-economics/2026/fable-mythos-saga-ad-hoc-us-ai-model-controls-could-help-china (análisis crítico — ⚠️)

El detalle completo, con citas literales y estado de verificación por afirmación, está en `research/informe.md`.

<!-- Añadir más fuentes (papers, incidentes, policy) al construir el contenido. -->

## Scaffold notes

Scaffolding creado el 2026-07-17 a partir de `mythos-ias-2026-05`. Contenido pendiente — slides individuales se construirán en sesiones posteriores dentro de `slides/`.
