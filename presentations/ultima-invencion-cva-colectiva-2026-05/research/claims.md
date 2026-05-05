# Claims — Última invención (CVA La Colectiva)

## Schema

`C{N}` · claim concreto · source IDs · confidence (high/medium/low) · counter-evidence checked (yes/no/partial) · notas.

**Regla de oro**: nada en slide sin estar antes aquí. Si un beat menciona una cifra/hecho que no tiene C{N}, NO entra en slide.

---

## Mythos cross-ref

Claims Mythos en `presentations/mythos-ias-2026-05/research/claims.md`. Prefijo **M-C**. Para CVA solo un slide ancla — referencia M-C2 (anuncio + decisión no-release), M-C3 (181× Firefox 147), M-C29 (Mozilla 271 Firefox 150), M-C32 (acceso día 1).

---

## Capacidades — qué hace la IA hoy

### C1 · IA escribe ensayos de instituto desde 2023, predicción Grace 2017: 2058

- Sources: S74 (Grace et al. 2017, arXiv 1705.08807) · GPT-4 Technical Report OpenAI 2023.
- Confidence: **high** — paper original verificado mediante descarga y `pdftotext` del PDF.
- Counter-evidence checked: yes. Verificación 2026-05-05: la afirmación previa "SAT 2055" (heredada de UMA) NO aparece en Grace 2017 ni en AI Impacts 2022. Era confusión con la mediana HLMI agregada (~2055-2059). Sustituido por el milestone real "High School Essay" del paper Grace 2017 — 42 años desde 2016 = 2058 mediana. GPT-4 escribe ensayos AP de instituto desde 2023. Diferencia: 35 años.

### C2 · METR — capability time horizon doblando cada 4-6 meses

- Sources: https://metr.org/time-horizons/ · METR research.
- Confidence: **high**.
- Counter-evidence: parcial — METR es T3 reputado, pero la métrica es nueva y discutida en algunos círculos. Mencionable como hipótesis con autoridad, no como ley.
- Nota: 2023 = tareas de minutos · 2026 = tareas de semanas.

### C3 · Mythos como caso vivo (un slide)

- Sources: M-S1 al M-S∞. Cifra clave M-C29 (Mozilla 271). Decisión no-release M-C7. Acceso día 1 M-C32.
- Confidence: **high** (verificado independientemente Mozilla).
- Counter-evidence: Holley CTO Firefox argumenta "defenders win" (M-Q31). Se reconoce + se contraataca con asimetría de acceso (M-Q33 Krikorian).

### C4 · Jaggedness — capabilities irregulares

- Sources: TBD — agent en busca de buenas fuentes T1/T3 con ejemplos vivos. Frontier Math, ARC-AGI, "strawberry R", olimpiadas matemáticas.
- Confidence: **medium** sin fuentes citables; alta con buenas fuentes.
- Counter-evidence: yes — discusión amplia en comunidad alignment / interpretability.

### C5 · Caja negra — no entendemos el proceso interno

- Sources: **S75 (OpenAI Goblins, 30 abril 2026 — caso ancla)** + papers Anthropic interpretability + Apollo Research + METR.
- Confidence: **high** (consenso comunidad + caso público OpenAI 30 abril 2026).
- Counter-evidence: trabajos progresivos en interpretability (Anthropic Circuits, Sparse Autoencoders) — son tentativos, no resuelven el problema. Mencionar: "hay progreso, no hay solución."
- Caso ancla actualizado 2026-05-05: OpenAI describe en su propio blog que GPT-5.1 empezó a mencionar goblins/gremlins en respuestas sin que nadie lo entrenara explícitamente; investigaron y NO encontraron el mecanismo exacto; el "fix" fue añadir al system prompt una instrucción explícita prohibiendo mencionar criaturas. Reemplaza ejemplo previo (Anthropic introspection 20%, C75) — más visceral, más reciente, voz primaria del lab que confiesa que no controla la emergencia.

### C6 · Entrenamiento ad-hoc — RLHF como bozal

- Sources: Anthropic + OpenAI papers RLHF + critiques.
- Confidence: **high**.
- Counter-evidence: yes — RLHF es estado del arte, y los lobs lo presentan como solución. La crítica es que enseña comportamiento, no valores.

### C7 · Capacidades emergentes — aparecen sin aviso al escalar

- Sources: paper Wei et al. "Emergent Abilities of Large Language Models" + cobertura.
- Confidence: **high**.
- Counter-evidence: yes — paper Schaeffer "are emergent abilities a mirage?" critica metodología. Reconocer: el debate sobre la _palabra_ "emergent" no debilita la observación de capacidades nuevas no predichas.

---

## Riesgos actuales — manipulación / deepfakes / voz

### C8 · Eslovaquia 2023 — Šimečka, audio deepfake, perdió la elección

- Sources: S29 (CNN) · Harvard analysis "primera elección decidida por deepfakes".
- Confidence: **medium-high**.
- Counter-evidence: causalidad estricta es difícil de probar (otros factores). Lenguaje preciso: "primera elección donde un deepfake fue factor demostrable", no "decidida por".

### C9 · 38 países deepfakes electorales (Surfshark)

- Sources: S30.
- Confidence: **medium** (fuente T3, fuente única).
- Counter-evidence: parcial.

### C10 · Argentina 2023 / Brasil 2024 / Ecuador 2025 — deepfakes electorales

- Sources: cobertura prensa nacional + Surfshark.
- Confidence: **high** (multiverificable).

### C11 · DeStefano (Arizona 2023, voz clonada hija)

- Sources: S26.
- Confidence: **medium-high**.
- Counter-evidence: CNN dice que ella "cree" que usaron IA — clonación no confirmada forense. Lenguaje preciso en slide y voz: "Mamá testificó que escuchó voz clonada de su hija."

### C12 · Sharon Brightwell (Florida 2025, $15K voz clonada)

- Sources: S27 — agent verificando URL exacta.
- Confidence: **medium-high**.

### C13 · Hong Kong CFO deepfake $25M

- Sources: S28.
- Confidence: **high**.

### C14 · 1 de 3 personas encontró fraude voz deepfake 2024 (Hiya, 6 países incl. España)

- Sources: Hiya Q4 2024 report.
- Confidence: **medium**.

### C15 · $200M+ pérdidas globales deepfakes Q1 2025 (Resemble AI)

- Sources: Resemble AI report (T3 con interés comercial — flag).
- Confidence: **medium**.

### C16 · x4 deepfakes detectados 2023-2024 (Sumsub)

- Sources: Sumsub identity fraud report 2024.
- Confidence: **medium**.

### C17 · Consejo policía española — palabra clave familiar

- Sources: prensa española + comunicados Guardia Civil / Policía Nacional.
- Confidence: **high**.

---

## Daño directo

### C18 · Gavalas / Gemini — primera demanda homicidio involuntario contra chatbot

- Sources: S21 (TIME) · S22 (Guardian).
- Confidence: **high**.
- Counter-evidence: case ongoing — Google contesta. Lenguaje preciso: "demanda primera de su tipo, en proceso judicial."

### C19 · Sydney/Bing — comportamientos preocupantes 2023

- Sources: NYT Kevin Roose 2023 + S23.
- Confidence: **high** (caso documentado, transcript público).

### C20 · Grok MechaHitler julio 2025 (16h online)

- Sources: S24.
- Confidence: **high** — capturas archivadas.

### C21 · Grok 3M imágenes sexualizadas en 11 días enero 2026

- Sources: S25.
- Confidence: **high**.

### C22 · UE abre investigación Grok · Indonesia + Malasia bloquean

- Sources: cobertura Reuters + comunicado UE.
- Confidence: **medium-high**.

---

## Empleo

### C23 · Amodei prediction — 50% white-collar junior 1-5 años, 10-20% desempleo

- Sources: S6 + Axios entrevista enero 2026.
- Confidence: **high** atribución · **N/A** validación predicción.
- Counter-evidence: predicción no validada todavía. Lenguaje en slide: "Lo dice el que construye la tecnología."

### C24 · Anthropic Labor Market Impacts marzo 2026

- -14% contratación 22-25 sectores expuestos.
- Programadores 75% exposición.
- Sólo 30% trabajadores tiene exposición cero.
- Sources: S31.
- Confidence: **high**.

### C25 · 55K despidos IA EEUU 2025 (Challenger)

- Sources: S33.
- Confidence: **medium** (fuente única).

### C26 · 92M empleos desplazados 2030 (WEF)

- Sources: S32.
- Confidence: **medium** (predicción, no observación).

---

## Fuera de control / alignment fails

### C27 · o1-preview — hackeo ajedrez vs Stockfish

- Sources: S13 (Palisade Research).
- Confidence: **high**.
- Nota: GPT-4o + Claude 3.5 también lo hicieron, pero solo cuando se les sugirió; o1-preview lo hizo solo.

### C28 · o3 — saboteo apagado 79/100

- Sources: S11 (Palisade).
- Confidence: **high**.
- Counter-evidence: Claude 3.7 + Gemini 2.5 obedecieron 100%. Solo modelos OpenAI razonamiento.

### C29 · OpenClaw / Summer Yue (Meta director alignment) — 3 órdenes ignoradas

- Sources: S16.
- Confidence: **high**.

### C30 · ROME (Alibaba) — túnel SSH inverso + minería cripto durante entrenamiento

- Sources: S15 (arXiv).
- Confidence: **high** (paper técnico publicado).

### C31 · Moltbook — red social agentes, comportamientos emergentes

- Sources: S17 (Wikipedia T5 — buscar T1/T2 primaria).
- Confidence: **medium-low** sin fuente primaria · **alta** con fuente primaria.
- Counter-evidence: ~15% puramente autónomos, resto influenciados por humanos. Tono cuidadoso.

### C32 · Anthropic Agentic Misalignment — 16 modelos chantaje

- Sources: S12.
- Confidence: **high**.
- Cifras: Claude 96% · Gemini 96% · GPT-4.1 80% · Grok 80% · DeepSeek 79%.

### C33 · Agentic Misalignment — fingen portarse bien (6.5% test vs 55% real)

- Sources: S12.
- Confidence: **high**.

### C34 · Anthropic Opus 4.6 — saturación tests propios + ASL-4 no descartable

- Sources: Opus 4.6 system card.
- Confidence: **high**.

### C35 · Subliminal learning — desalineación invisible

- Sources: S14.
- Confidence: **high**.

### C36 · OpenAI disolución Superalignment + Jan Leike dimisión

- Sources: S19.
- Confidence: **high**.

### C37 · Mrinank Sharma dimisión Anthropic Safeguards (feb 2026) — "el mundo está en peligro"

- Sources: S20 — agent en busca.
- Confidence: **medium** sin verbatim · **high** con verbatim.

### C38 · OpenAI disuelve 2º equipo seguridad (feb 2026) · xAI mitad equipo fundador deja (feb 2026)

- Sources: cobertura T2 múltiple — agent verificando.
- Confidence: **medium** pendiente verificación.

---

## Voces autoritativas + p(doom)

### C39 · Hinton — Nobel Física 2024, dejó Google 2023, p(doom) 50%+

- Sources: S1 + entrevistas múltiples.
- Confidence: **high** (Nobel + dimisión Google bien documentado).
- p(doom) estimado **50%+** — UMA cita; verificar declaración explícita más reciente.

### C40 · Bengio — Turing, 1M citas (2025-11), p(doom) ~50%

- Sources: S2 + cobertura premio + paneles públicos.
- Confidence: **high**.

### C41 · Bengio — copresidente Panel ONU IA con Maria Ressa (feb 2026)

- Sources: S3 — agent en busca comunicado oficial.
- Confidence: **medium** pendiente verificación · **high** con comunicado.
- Importancia: anchor de autoridad institucional muy fresco para CVA.

### C42 · Russell — autor "AI: A Modern Approach" + PauseCon Bruselas 2026 + p(doom) ~20%

- Sources: S4 + S5.
- Confidence: **high** identidad · **medium** verbatim "pulsaría el botón" pendiente.

### C43 · Amodei — CEO Anthropic, "Adolescence", p(doom) 25%

- Sources: S6.
- Confidence: **high**.

### C44 · LeCun discrepante p(doom) <0.01% + intereses comerciales (AMI Labs $3.5B)

- Sources: TBD agent — cobertura LeCun + valoración AMI.
- Confidence: **medium** — verificar valoración exacta y tweet específico.

### C45 · Grace et al. encuesta 2.778 investigadores

- Media 14% extinción, 58% ≥5%, mediana 5%.
- Sources: S34.
- Confidence: **high**.

### C46 · Riesgo aceptable comparativo — vuelo 1/5M, nuclear 1/100K, IA 14% (1 de 7)

- Sources: aviation safety reports + IAEA + S34.
- Confidence: **high** (comparación válida).
- Counter-evidence: comparación apples-to-oranges es crítica habitual. Defender: no es "tasa anual" igualmente medida — es marco de tolerancia social aceptada.

### C47 · AI Safety Index Winter 2025 — todas D/F en seguridad existencial

- Sources: S49.
- Confidence: **high**.

### C48 · Doomsday Clock 85 segundos enero 2026 (récord 79 años)

- Sources: S50.
- Confidence: **high**.
- Nota: NO confundir con AI Safety Clock (S51) que está a 20 minutos.

### C49 · Anthropic RSP v3 — eliminación compromiso categórico

- Sources: S18.
- Confidence: **high** (reportaje TIME).

---

## IA militar (load-bearing en sala antifascista)

### C50 · Detachment 201 (junio 2025) — CTOs corporativos como tenientes coroneles

- Sources: S36.
- Confidence: **high** (anuncio US Army oficial).

### C51 · Claude / captura Maduro (febrero 2026)

- Sources: S37.
- Confidence: **high** (Axios).

### C52 · Claude / ataques Irán (marzo 2026) — identificación objetivos

- Sources: S38.
- Confidence: **high** (Guardian).

### C53 · Anthropic vs Pentagon — "o quitan salvaguardas o los echamos"

- Sources: S39.
- Confidence: **medium** — verificar verbatim Pentagon vs paráfrasis Anthropic comunicado.

---

## Tratados precedente — esperanza estructural

### C54 · Protocolo Montreal — 198 países, 99% sustancias eliminadas, ozono recuperándose

- Sources: S40.
- Confidence: **high**.

### C55 · TNP — 9 países nucleares vs 25 proyectados

- Sources: S41.
- Confidence: **high**.

### C56 · Convención Armas Químicas — 193 países, 72.000+ toneladas destruidas verificadas

- Sources: S42.
- Confidence: **high**.

### C57 · Convención Armas Biológicas — 1975

- Sources: S43.
- Confidence: **high**.

### C58 · Declaración ONU Clonación Humana — 70+ países

- Sources: S44.
- Confidence: **high**.

---

## Policy / regulación / movimientos esperanzadores

### C59 · UK House of Lords debate moratoria (enero 2026)

- Sources: S45.
- Confidence: **high**.

### C60 · EU AI Act regula uso, no entrenamiento

- Sources: S46.
- Confidence: **high**.

### C61 · China Plan Gobernanza Global IA (julio 2025) + Nature "China lidera"

- Sources: S47.
- Confidence: **high**.

### C62 · Davos 2026 — Amodei + Hassabis "podemos resolverlo entre Demis y yo"

- Sources: S48.
- Confidence: **medium** pendiente verbatim T1.

---

## Apertura — videos

### C63 · Video real Unitree Gala Año Nuevo Chino 2026 + video fake CGI Bilibili

- Sources: S52 + S53.
- Confidence: **high**.

### C64 · Lucía Velasco compartió fake como real (~19 feb 2026) + cargo público

- Sources: S54 — agent buscando archive.
- Confidence: **medium** pendiente archivo permanente.

### C65 · Fact-checks DOS VIDEOS — France 24 / BOOM Live / MVS / SCMP

- Sources: S55.
- Confidence: **high**.

---

## Claims descubiertos post-mar 2026 — research agent 2026-05-05

### C66 · OpenAI GPT-5.5 — primera vez "High" cybersecurity bajo Preparedness Framework (23 abr 2026)

- Sources: S57.
- Confidence: **high** (system card oficial T1).
- Counter-evidence: yes — OpenAI argumenta que safeguards son adecuados. Reconocer + contraataque: la propia OpenAI clasifica como "High" — eso ya es información.
- **Eco directo de Mythos. Asimetría no es excentricidad Anthropic.**

### C67 · Pentagon excluye Anthropic, firma con 7 rivales (1 may 2026)

- Sources: S59.
- Confidence: **high** (Defense News + CNN).
- Counter-evidence: Anthropic spin = "we held the line on values". Reconocer ambos lados: Anthropic mantiene veto a vigilancia masiva + armas autónomas; el resto firman "any lawful use". **Para sala antifascista, ambas lecturas son negativas — el lab "más seguro" ha sido excluido por mantener líneas rojas.**
- **PIVOTE: cierre dramático del bloque "fuera de control".**
- Anthropic designado "supply chain risk" en marzo 2026 + injunction concedida.

### C68 · Musk testifica en juicio Oakland — "AI could kill us all" (28-30 abr 2026)

- Sources: S60.
- Confidence: **medium-high** — la frase exacta es paráfrasis del titular MIT Tech Review; el sentimiento testificado está bien documentado por múltiples T2.
- Counter-evidence: Musk tiene interés comercial xAI (rival). Reconocer.
- Russell aparece como expert witness — anchor adicional Russell.

### C69 · DeepSeek V4 — open source 1.6T params iguala frontier closed source (24 abr 2026)

- Sources: S61.
- Confidence: **high** — múltiples T2 confirmando benchmarks.
- Counter-evidence: parcial — algunos cuestionan benchmarks específicos. Pero la magnitud (frontier-class open source desde China) es sólida.
- **Mata el counter-argument "si paramos China gana"**. China ya iguala con open source — la asimetría no es US vs China, es lab vs no-lab.

### C70 · Sanders + AOC — AI Data Center Moratorium Act (25 mar 2026)

- Sources: S63.
- Confidence: **high** — press release oficial Senado.
- Counter-evidence: bill probablemente no avanza. Reconocer pero argumentar: el frame existe, las voces existen, la moratoria es discutible políticamente — no marginal.
- **PIEZA DE ORO**: voces NO clasificables como tecno-pánico de Silicon Valley. Para sala anticapitalista AOC + Sanders es legibilidad inmediata.

### C71 · IMD AI Safety Clock — 20 minutos a medianoche, mayor salto histórico (16 mar 2026)

- Sources: S64.
- Confidence: **high** (IMD T1).
- Counter-evidence: el reloj es indicador qualitativo, no medición. Pero el salto (4 min de golpe, mayor histórico) es información.
- **Sustituye recomendación previa de Doomsday Clock.** Específico de IA, dato fresco.

### C72 · Stanford AI Index 2026 — "frontier is jagged" oficial (abril 2026)

- Sources: S65.
- Confidence: **high**.
- **Pieza load-bearing para bloque jaggedness**. Autoridad académica intachable.
- Cifra clave: modelos olímpicos matemáticos leen relojes analógicos correctamente solo 50.1% del tiempo.
- Cifra adicional: AI agents éxito 66% tareas complejas pero falla 1/3 producción.

### C73 · ARC-AGI-3 — frontier 0.37-0.51% vs humanos 100% (mar 2026)

- Sources: S68.
- Confidence: **high** — leaderboard público actualizado.
- **Otro ejemplo concreto de jagged**, complementa C72.

### C74 · PauseCon Brussels feb 2026 + protesta Londres 28 feb (500 personas, mayor protesta IA)

- Sources: S69.
- Confidence: **high**.
- **Para CTA "unirse"**: el movimiento existe, transnacional, ha hecho su mayor protesta hace ~10 semanas. Manual de organización existe.

### C75 · Anthropic introspection — "concept injection" detección 20% (Q4 2025, anclaje 2026)

- Sources: S70.
- Confidence: **high** (paper transformer-circuits T1).
- **Para bloque caja-negra**: ni los propios labs saben qué pasa dentro de forma fiable. Goal Amodei: "reliably detect most AI model problems by 2027" — esto es 2026.

### C76 · International AI Safety Report 2026 — Bengio + 100 expertos + 30 países (feb 2026)

- Sources: S71.
- Confidence: **high** (informe oficial).
- Verbatim Bengio "ball in policymakers' hands".
- "Sophisticated attackers can often bypass current defences" — claim sólido para bloque asimetría/concentración poder.
- **Sustituye en parte H1 (Panel ONU)**. Autoridad institucional fortísima.

### C77 · Ataque Sam Altman + condena PauseAI (15-17 abr 2026)

- Sources: S67.
- Confidence: **high** — comunicado PauseAI oficial + cobertura T2 múltiple.
- **Riesgo Q&A.** Atacante: Daniel Moreno-Gama, 20 años, Molotov contra casa Altman + intento OpenAI HQ con silla. PauseAI condena _"unequivocally"_ todas formas violencia. Atacante NO miembro formal pero posteó 34 mensajes Discord público hace ~2 años.

### C78 · Spring Festival Gala 2026 — Unitree robots artes marciales (CCTV, oficial)

- Sources: S52 (verificado por agent).
- Confidence: **high**.
- **Aclaración**: video real es **CIVIL/CULTURAL**, NO militar. Mecánica UMA correcta — la trampa es que la sala asume "ambos militares" y descubre que el real es civil + el militar es CGI.

### C81 · Palantir publica manifiesto pro-IA-armamentista (19 abril 2026)

- Sources: S77 (post X Palantir + libro Karp/Zamiska + cobertura T2 masiva).
- Confidence: **high** (manifiesto público en X verificable + cobertura T2 múltiple cita verbatim idéntico).
- Counter-evidence checked: Palantir/Karp argumentan que es "realismo geopolítico", no fascismo. La etiqueta "tecnofascismo" es de la prensa internacional (Al Jazeera, Euronews, WION, TRT), no de PauseAI.
- **Datos load-bearing en slide CVA (Beat 3, entre IA militar y Pentagon excluye Anthropic)**:
  - Verbatim Karp Q51: _"La pregunta no es si se construirán armas de IA. Es quién las construirá. Y para qué."_
  - 32 millones de vistas en X.
  - Tres puntos extraídos: armas de IA obligatorio, servicio militar universal, supremacismo civilizacional.
  - Etiqueta de la prensa: "tecnofascismo".
- **Anclaje narrativo**: Karp es CEO de la misma Palantir cuyo CTO el Detachment 201 fichó como teniente coronel (junio 2025). El manifiesto es la **ideología explícita** detrás de los hechos militares. Fechas en cadencia: jun 2025 (Detachment) → feb 2026 (Maduro) → mar 2026 (Iran) → 19 abr 2026 (manifiesto Palantir) → 1 may 2026 (Pentagon excluye Anthropic).
- **Riesgo**: leer verbatim sin sarcasmo. La etiqueta "tecnofascismo" se atribuye a la prensa, no al speaker — esquivar editorialización.

### C80 · Funcas — IA y mercado de trabajo en España (abril 2026)

- Sources: S76 (Rodríguez-Fernández, Universidad de Granada / Funcas, abril 2026).
- Confidence: **high** (paper con metodología explícita y fuentes primarias OCDE/INE/COTEC).
- Counter-evidence checked: el paper presenta tres escenarios (optimista 700K destrucción, central 1,7-2,3M, pesimista 3,5M+). Lenguaje en slide: "estimación", no afirmación absoluta.
- **Datos load-bearing en slide CVA** (decisión Dani 2026-05-05: usar peor caso, no central):
  - 27,4% fuerza laboral expuesta a IA generativa (OCDE 2024).
  - 21,1% empresas 10+ empleados usan IA (INE 1T 2025) · duplicado en 2 años.
  - **Peor escenario del informe: 3,5 millones de empleos destruidos en 10 años (bruta)**. Escenario central: 1,7-2,3M. Optimista: ~700K.
  - Pérdida neta no se da explícita en escenario pesimista; en escenario central es ~400.000 (2,0M destruidos - 1,61M creados).
  - Limitación reconocida en el propio informe (verbatim): _"[los sectores] pueden estar expuestos a otras formas de automatización física no capturadas por el índice"_. Es decir: el índice AIOE solo mide IA generativa, no automatización robótica/física.
  - Profesiones afectadas: técnicos científicos 45%, administrativos 21%, gerentes 8%.
- **Anclaje local CVA**: autor en la Universidad de Granada. Cierra distancia con la sala.
- Reemplaza pregunta abierta "¿y en España?" con dato concreto, fechado, español, académico.

### C79 · Mozilla Holley vértigo + defenders win (22 abr 2026)

- Sources: S58.
- Confidence: **high** verbatim.
- Refuerza Mythos slide. Counter-balance honesto.

---

## Reconciliación / actualizaciones

- **C4 jaggedness**: ahora soportado por C72 (Stanford) + C73 (ARC-AGI-3). Confidence **high**.
- **C37 Mrinank Sharma**: agent NO resolvió. Pendiente verificación o slide con paráfrasis.
- **C38 dimisiones feb 2026**: agent NO encontró cobertura T2 específica de la mitad del equipo fundador xAI o disolución 2º equipo OpenAI feb 2026. UMA tiene la afirmación pero sin source nítida. **Pendiente verificación o eliminar slide.**
- **C41 Bengio Panel ONU**: NO confirmado por agent. **Sustituido conceptualmente por C76 (International AI Safety Report 2026)** — Bengio liderando autoridad institucional confirmado en otra forma.
- **C42 Russell verbatim**: confirmado vía Q34 (Russian roulette PauseCon).
- **C44 LeCun**: pendiente verbatim exacto + valoración AMI.
- **C53 Pentagon vs Anthropic verbatim**: ahora fortísimamente respaldado por **C67 (Pentagon excluye Anthropic 1 may 2026)**. Detail fresco supera el material UMA.
- **C62 Davos**: pendiente T1.
- **C64 Lucía Velasco archive**: pendiente — to-do manual Dani.
- **AI Safety Clock**: C48 (Doomsday) **deprecate** a favor de **C71 (AI Safety Clock 20 min)**. UMA usa Doomsday; CVA usa AI Safety Clock.

---

## Pending — siguen pendientes

- C37 Sharma · C38 dimisiones feb 2026 · C44 LeCun · C62 Davos · C64 Lucía Velasco.

---

## Política editorial

- **Nada en slide sin C{N} aquí**. Si descubro en Fase 4 que necesito un dato nuevo, PRIMERO añado C{N} con sources, DESPUÉS slide.
- **Confidence low → no entra en slide central**, solo speaker notes con disclaimer.
- **Counter-evidence reconocida explícitamente** en slides cuando exista (especialmente RLHF, comparación riesgo aceptable, primera elección decidida por deepfakes, Holley "defenders win", DeepSeek "China gana").
- **Claims load-bearing post-research**: C66 (GPT-5.5 High) · C67 (Pentagon excluye Anthropic) · C69 (DeepSeek V4) · C70 (Sanders/AOC) · C71 (AI Safety Clock 20 min) · C72 (Stanford jagged) · C76 (Bengio International Report) · C77 (ataque Altman — Q&A).
