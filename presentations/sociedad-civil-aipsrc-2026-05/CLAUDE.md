# CLAUDE.md — Cuando la carrera de la IA no se detiene / When the AI Race Won't Stop

## Presentation Overview

Charla de Dani Lupión (PauseAI, co-lead del capítulo en español) en la 2ª sesión del **AI Policy and Safety Reading Club**, un club de estudiantes (principalmente LL.M.) interesados en gobernanza, seguridad y política de IA. Formato mini-serie de ponentes, Dani comparte sesión con Ryan Stendall (UK AI Security Institute). 15-20 min máximo por ponente + Q&A conjunta.

## Bilingual

- ES (canónica): `slides.md` → `slides/es/` · `pnpm dev` (3039) · `pnpm build`. Footer: `pauseai.es`.
- EN: `slides-en.md` → `slides/en/` · `pnpm dev:en` (3049) · `pnpm build:en`. Footer: `pauseai.info` (la entrega original fue en inglés representando a PauseAI globalmente).
- Ambos idiomas comparten `public/`, `style.css`, `vite.config.js`, `global-bottom.vue`, `package.json` y `presentation.json`.
- `global-bottom.vue` lee `configs.lang` y conmuta dominio + etiqueta del Reading Club según idioma.
- **EN es la fuente** (charla del 17 mayo 2026); ES traducida después. Estructura espejada 1:1.

**Nota de representación**: Hoy Dani habla como organizador de PauseAI a nivel global, no específicamente del capítulo español. Por eso el footer, cover y bio referencian PauseAI/pauseai.info y no PauseAI en Español/pauseai.es.

Tesis: la política de IA la moldea quien se organiza, no solo quien tiene razón técnicamente. Hay un vacío de sociedad civil en este debate; PauseAI es un experimento concreto para llenarlo; hay un playbook emergente; los LL.M. son palanca.

## Key Details

- **Ponente**: Dani Lupión (PauseAI, co-lead del capítulo español)
- **Co-ponente en la sesión**: Ryan Stendall (UK AI Security Institute)
- **Host**: Alex (organizador del Reading Club, estudiante LL.M.)
- **Formato**: Charla 15-20 min + Q&A conjunta tras ambas ponencias
- **Audiencia**: estudiantes LL.M. interesados en gobernanza/política/seguridad de IA. Background legal, no técnico. Internacional. Cultura académica anglosajona. Procesan argumentos estructurales y debaten objeciones con detalle.
- **Duración**: 15-20 min charla + Q&A
- **Fecha**: 2026-05-17 (domingo)
- **Hora**: 13:00-14:30 BST (GMT+1)
- **Lugar**: online (plataforma a confirmar con Alex)
- **Idioma**: Inglés
- **Tono**: activista informado, registro académico para LL.M. crowd. Argumentos estructurales. Conviction sin hedging. Engage counterarguments honestamente. Concrete > abstract. Show, don't tell.
- **Grabación**: a confirmar con Alex (asumir que sí por defecto, comprobar antes de hablar).
- **Web acompañante**: TBD, opciones: (a) QR final a pauseai.info, (b) link a la nueva landing /presentaciones, (c) PDF export enviado a Alex tras la charla para distribuir.

## Branding

- **Assets en `public/logos/`**: `logo.png` (icono PauseAI), `banner.png` (banner horizontal PauseAI sobre fondo oscuro), `claude.png` (opcional, si se reutiliza el slide bisagra de ultima-invencion).
- **Footer**: PauseAI logo + pauseai.info (izquierda), "AI Policy & Safety Reading Club · Session 2" texto (derecha, sin logo del club por ahora, preguntar a Alex si tienen).
- **Theme**: dark (fondo navy #0f172a, acento orange #ff9416).

## Diferencias clave respecto a charlas Spanish-audience

- **Idioma**: inglés (no español).
- **Duración**: 15-20 min (vs 60-90 min de charlas presenciales). Muchísima compresión.
- **Audiencia**: legal/policy LL.M. (vs general/activista/técnica). NO necesitan explicación básica de qué es IA o por qué x-risk es serio. SÍ esperan argumentos estructurales y respeto por counterarguments.
- **Foco**: movement-building + sociedad civil + policy levers. NO es una charla "AI risks 101", es una charla "civil society's role in AI policy" usando PauseAI como caso.
- **Tono**: registrado-académico pero con convicción. Menos cinemático que ultima-invencion (la audiencia no responde a teatralidad), más argumentativo.
- **No-recording bias**: a diferencia de ultima-invencion (no se graba), aquí asumimos grabación. Vigilar verbatims y atribución.

## Beat sheet (aprobado v3, 2026-05-17)

> 10 slides + cover. ~17 min. Files en `slides/00-opening.md` → `slides/05-closing.md`.
> **v3 cambios respecto a v2**: título → "When the AI Race Won't Stop"; **eliminada toda referencia a la historia personal de Dani** en slides; opener pivotado a Russell verbatim; cierre rehecho como forward-look; "labs" → "AI companies" en todo el texto.

| #     | Slide                                       | Función                                                                                                                                                                                                                                                                                                                                                                                                                                | Tiempo      |
| ----- | ------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| Cover | When the AI Race Won't Stop                 | Title + Reading Club tag                                                                                                                                                                                                                                                                                                                                                                                                               | 20s         |
| 1     | Russell opener                              | Verbatim Russell @ PauseCon Brussels Feb 2026: _"trajectory towards a loss of control … biggest moral failure of government that ever occurred."_ Frame de stakes inmediato.                                                                                                                                                                                                                                                           | 1m          |
| 2     | Transition + thesis                         | Lead-in: "who put him on that podium … what civil society on AI policy looks like in 2026." Thesis: **"The hard part of AI policy isn't being right, it's being heard."**                                                                                                                                                                                                                                                              | 2m          |
| 3     | The third voice is missing                  | Diagnóstico 3-voces (industry/governments/civil society). Precedentes de **sociedad civil**: CND (UK 1957) + Nuclear Freeze (1980s), human cloning bans (UNESCO 1997 + Council of Europe 1998), climate (30 años). NO Pugwash/Asilomar (esos eran científicos auto-regulándose, no sociedad civil). NO anti-GMO (riesgo de framing anti-ciencia para audiencia LL.M.). "AI policy has the first two; the third chair is nearly empty." | 2m          |
| 4     | Why now is acute                            | Asimetría 3-col (capex / 4yr EU AI Act vs capabilities doubling / civil society nascent). Cierra con **"Regulatory capture by default, not by malice, by absence."**                                                                                                                                                                                                                                                                   | 1.5m        |
| 5     | PauseAI in 2026                             | Estructura (Joep founder, 600+ miembros, 16+ chapters, Maxime Fournes CEO Dec 2025, Holly Elmore ED US 501(c)(3)) + theory of change (5 conditions, "activation layer" on 1+3+5) + FLI Superintelligence Statement 30K+ signatures.                                                                                                                                                                                                    | 2m          |
| 6     | Five wins civil society made happen         | Bletchley catalysis (May 2023 → Nov 2023) · US Senate 99-1 (Jul 2025) · 60 UK politicians (Aug 2025) → DeepMind transparency / UK AISI pre-deployment Gemini 3 Pro · PauseCon Brussels in EP (Feb 2026, slide 1 payoff: "who put Russell on that podium?") · Spring 2026 mobilization wave (London 300+ Feb 28 with Pull the Plug + PauseCon DC 74 meetings 11-13 Apr). Cierra con Joseph Miller verbatim.                             | 3m          |
| 7     | Honest counterarguments                     | 3 objeciones, 30s c/u: "regulation captured" / "too late + China wins" / "slow beneficial AI". (Altman/StopAI counterargument retirado del slide, mantener como respuesta lista para Q&A.)                                                                                                                                                                                                                                             | 1.5m        |
| 8     | Where you fit                               | Career paths (AISIs, treaty drafting, litigation, regulators) + immediate actions no career change (op-eds with credentials, pressure own institution, join PauseAI UK, Miller/da Rui, London/Glasgow/Oxford/Leicester, talk to professors).                                                                                                                                                                                           | 2m          |
| 9     | The third chair is empty, that's an opening | Return-to-Russell + forward-look: "whether that's recorded or averted depends on who shows up. The third chair is empty. For a room of lawmakers, that's an opening." NO PERSONAL ARC.                                                                                                                                                                                                                                                 | 1.5m        |
| 10    | Four asks                                   | Get informed (pauseai.info · AI 2027 · Bengio's report · BlueDot Impact AI Governance Fundamentals) · Talk to peers · Join or create a chapter (pauseai.info/communities) · Sign two statements (superintelligence-statement.org + humanstatement.org Pro-Human AI Declaration). Transitions to slide 11.                                                                                                                              | 1m          |
| 11    | Thank you + Q&A                             | Dedicated Q&A slide, "Thank you" + "Questions". Static visual for the full Q&A period.                                                                                                                                                                                                                                                                                                                                                 | 0m (static) |

**Decisions locked (v3)**:

- **Russell quote opens** (warmer hook gone), sets stakes immediately, suits LL.M. analytical register.
- **No personal arc anywhere**, bio (read by Alex) carries the "who is Dani" load; slides stay structural.
- "Labs" → "AI companies" everywhere, industry-as-research framing rejected.
- Spanish chapter _not_ spotlit on slide 5, and Dani represents PauseAI globally today (footer/cover/bio say PauseAI + pauseai.info, not Español/pauseai.es).
- Altman/StopAI counterargument IS included (unchanged from v2).
- No Claude pivot slide (unchanged from v2).

**Bloques eliminados respecto a v2**:

- Personal arc on slide 1 ("November 2022 → felt insane → August 2025 joined PauseAI"), removed entirely.
- Return-to-hook on slide 9 ("the dissonance is the problem you can solve"), replaced with structural forward-look.
- Russell quote at slide 4, promoted to slide 1 opener.

## Format constraints

- **15-20 min** → ~10 slides máx, 1.5-2 min/slide.
- Q&A conjunta separada → el cierre no necesita ser conclusivo total, puede dejar preguntas abiertas.
- **Interview-style fallback**: Alex sugirió en email original que podía ser interview o charla. Asumimos charla pero los slides deben funcionar también si Alex pregunta entre medias.
- **Ryan habla también**: mantener un ojo a no solapar con UK AISI / technical evaluations terrain (su especialidad). Apoyarse en él como complemento, no competir.

## Disciplinas no-negociables

- Verbatim siempre cuando se cita.
- Concrete before abstract · familiar before foreign · question before answer.
- Show, don't tell. LL.M. crowd detecta auto-promoción y se cierra.
- Fechas absolutas en slides ("17 May 2026"), nunca relativas.
- Engage el counter-argument honestamente, esta sala lo espera.
- Frame analítico durante el cuerpo, llamada directa al final.
- Source tiering T1-T5. Cada claim ancla a source ID. Per-claim source tracking, nada en slide sin estar antes en `claims.md`.

## TODOs Before Presentation

- [ ] Aprobar beat sheet (Fase 3), pendiente.
- [ ] Confirmar con Alex: (a) grabación sí/no, (b) orden de ponentes (Dani primero o Ryan primero), (c) plataforma (Zoom/Meet/Discord), (d) si tienen logo del club, (e) formato exacto del Q&A (conjunta vs por separado).
- [ ] Speaker photo: enviar a Alex.
- [ ] Bio v8 aprobada (ver abajo), enviar a Alex con la foto.
- [ ] Investigar policy landscape mayo 2026: EU AI Act status, AISI UK, AISI US, EU AI Office staffing, Korean Statement follow-ups, Bletchley/Seoul Summit progress. Para slide de "playbook" y "where LL.M. fit".
- [ ] Verificar verbatims de citas que usemos (Hinton, Bengio, Russell, Amodei, Altman, LeCun).
- [ ] Decidir si se exporta PDF post-charla para distribuir.
- [ ] Decidir si QR de cierre va a pauseai.info, a /presentaciones (landing nueva), o se omite.
- [ ] Construir slides individuales en `slides/` (Fase 4, solo tras aprobar beat sheet).
- [ ] (Descartado, no hay coordinación con Ryan, son slots separados de 20 min cada uno.)

## Bio (English, for Alex's introduction)

> **Approved v8 (2026-05-14)**:

Dani Lupión is an organiser with **PauseAI**, the international movement calling for a pause on frontier AI development. He co-leads the movement's Spanish chapter and serves as Secretary of _Pausemos la IA_, the registered NGO that formalised it. By day he is a principal software engineer with twenty years in industry; AI safety advocacy is the work he does on top of that. Alarmed by the release of ChatGPT-3.5 in late 2022 and convinced to act after the _AI 2027_ scenario circulated in spring 2025, he joined PauseAI in August 2025 and now devotes much of his free time to movement-building: public talks, organising, and representing PauseAI at international events including PauseCon Brussels.

## Key Sources (placeholder, `research/sources.md` a crear en Fase 2)

> Solo el índice de categorías que vamos a tocar. Detalle T1-T5 en `research/sources.md`.

- **PauseAI doctrine & infra**: pauseai.info, pauseai.es, pausecon.org. Acta fundacional + estatutos _Pausemos la IA_. Roadmap PauseAI.
- **AI 2027**: scenario document, autores, recepción 2025.
- **Civil society precedents**: campañas climáticas, anti-nuclear (Pugwash, Bulletin of the Atomic Scientists), biotech moratorium (Asilomar 1975), cloning ban, Montreal Protocol. Para usar como **precedent**, no como analogía perezosa.
- **Voces autoritativas para credibilidad**: Hinton (Nobel + entrevistas), Bengio (informe internacional), Russell (Human Compatible + PauseCon), Amodei ("Adolescence of Technology"), Sutskever (SSI launch), Hassabis. p(doom), Wikipedia + Grace et al.
- **AI policy landscape mayo 2026**: EU AI Act implementation status, UK AISI, US AISI, EU AI Office, Korean Statement / Seoul Summit follow-ups, Bletchley Declaration progress, US Executive Order changes 2025.
- **Counterarguments estándar**: Altman ("fear-based marketing"), LeCun ("doomers wrong"), "China will win" frame, "too late" defeatism, "regulation captured by AI companies", "slow down beneficial AI".

## Phase status

- **2026-05-14**: Fase 1 (audience + thesis) aprobada por Dani. Bio v8 aprobada. Scaffolding inicial creado.
- **Fase 2 (research)**: minimal, solo lo necesario para 15-20 min, no investigación exhaustiva como ultima-invencion.
- **Fase 3 (beat sheet)**: pendiente, siguiente paso inmediato.
- **Fase 4 (slides)**: pendiente, tras aprobar beat sheet.

## Scaffold notes

Scaffolding inicial creado 2026-05-14. Charla 3 días después (2026-05-17), presupuesto temporal apretado. Priorizar velocidad sobre exhaustividad: 1 beat sheet, 10 slides, validar slide a slide con Dani.
