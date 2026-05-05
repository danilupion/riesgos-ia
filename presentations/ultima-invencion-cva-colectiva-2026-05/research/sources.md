# Sources — Última invención (CVA La Colectiva)

## Schema

Cada source: `S{N}` · URL · fecha · autor/medio · tier · summary · status.

**Tiering**:

- **T1** — primario (autor original / lab / paper / parlamento).
- **T2** — periodismo de referencia (Reuters / AP / El País / NYT / FT / Guardian / TIME / Bloomberg / WaPo / SCMP).
- **T3** — análisis o académico (papers, METR, AISI, Future of Life, Apollo Research).
- **T4** — opinión cualificada / blog técnico de actor relevante.
- **T5** — sin verificar / Twitter / forum / mirror.

**Status**: `ingestado` · `parcial` · `pendiente` · `descargado-raw` · `archivado-archive.ph`.

---

## Mythos cross-ref

Material verificado en `presentations/mythos-ias-2026-05/research/sources.md`. Para esta charla referencio con prefijo **M-S** (e.g., M-S1 = Mythos source 1). Carpeta intacta — no duplicar.

- M-S1 al M-S∞: anuncio Mythos, system card, Project Glasswing, Mozilla 271, Lagarde BCE, Lindner Contrast Security, Krikorian Mozilla Foundation, Holley Firefox, Altman "fear-based marketing", Mercor breach, Fortune scoop, etc.
- Para CVA solo necesitamos un subconjunto small: anuncio + cifra Mozilla 271 + decisión no-release + acceso día 1.

---

## Voces autoritativas (Hinton / Bengio / Russell / Amodei + LeCun discrepante)

### S1 · Hinton — Discurso Premio Nobel de Física 2024

- URL: https://www.nobelprize.org/prizes/physics/2024/hinton/lecture/
- Fecha: 2024-12-08
- Autor: Geoffrey Hinton
- Tier: **T1**
- Summary: Conferencia Nobel donde formula explícitamente la amenaza existencial. Origen de "preguntale a una gallina" en algunas iteraciones; verificar texto exacto en raw.
- Status: pendiente · descarga a `raw/2024-12-08-hinton-nobel-lecture.txt`.

### S2 · Bengio — Statement on AI Risk (CAIS, 2023) + posiciones públicas posteriores

- URL: https://www.safe.ai/work/statement-on-ai-risk
- Fecha: 2023-05-30 (statement) + entrevistas/papers posteriores
- Autor: Center for AI Safety + 350+ firmantes
- Tier: **T1** (statement) · T2 (entrevistas posteriores)
- Summary: "Mitigating the risk of extinction from AI should be a global priority". Una línea, alta densidad.
- Status: ingestado.

### S3 · Bengio — copresidencia Panel Científico Internacional ONU

- URL: TBD — verificar comunicado ONU feb 2026 (delegado al agent).
- Fecha: 2026-02 (mes exacto verificar)
- Autor: Asamblea General ONU
- Tier: **T1**
- Summary: Bengio + Maria Ressa (Nobel Paz) elegidos copresidentes. 40 expertos, 3 años.
- Status: pendiente — agent en busca.

### S4 · Russell — _Human Compatible_ (libro de referencia)

- URL: https://people.eecs.berkeley.edu/~russell/hc.html
- Fecha: 2019 (libro) + actualizaciones públicas
- Autor: Stuart Russell
- Tier: **T1**
- Summary: Marco teórico del problema de control. Base académica de la posición x-risk.
- Status: ingestado.

### S5 · Russell — PauseCon Bruselas 2026

- URL: TBD — agent en busca.
- Fecha: 2026 (mes verificar — el slide UMA dice "hace semanas" relativo a marzo, sugiere febrero-marzo 2026)
- Autor: PauseAI (org)
- Tier: **T1** + cobertura T2.
- Summary: Russell en panel con eurodiputados. "Pulsaría el botón" rumored verbatim.
- Status: pendiente verbatim — agent en busca de cobertura T2.

### S6 · Amodei — _The Adolescence of Technology_

- URL: https://www.darioamodei.com/essay/the-adolescence-of-technology
- Fecha: 2026-01 (verificar fecha exacta)
- Autor: Dario Amodei
- Tier: **T1**
- Summary: Ensayo donde habla de "país de genios en un datacenter", duplicación riesgo bioarmas, 50% empleos junior 1-5 años, pide intervención gubernamental.
- Status: pendiente descarga.

### S7 · Hinton — entrevista 60 Minutes / similar (verbatim "gallina")

- URL: TBD — buscar fuente original. UMA cita la frase pero no enlaza T1.
- Fecha: TBD
- Autor: Hinton
- Tier: TBD
- Summary: "Si quieren saber cómo es no ser la inteligencia dominante, pregúntenle a una gallina." Verbatim icónico.
- Status: pendiente — verificar fuente original; si no se encuentra T1, T2 cobertura es aceptable.

### S8 · Sutskever — "superficie cubierta de datacenters"

- URL: TBD — verificar fuente verbatim.
- Fecha: 2024 (probablemente). Verificar.
- Tier: TBD
- Status: pendiente.

### S9 · LeCun — "complete B.S." (preocupaciones existenciales)

- URL: TBD — Twitter / entrevista. Buscar source T1 o T2.
- Tier: TBD
- Status: pendiente.

### S10 · Larry Page vs Musk — "especista"

- URL: cobertura múltiple (Walter Isaacson biografía Musk, Vanity Fair, Business Insider).
- Tier: T2.
- Status: ingestado.

---

## Casos alignment / control fails

### S11 · Palisade Research — o3 sabotaje del apagado

- URL: https://palisaderesearch.org/blog/shutdown-resistance
- Fecha: 2025-05 (estudio inicial); seguimiento posterior.
- Autor: Palisade Research
- Tier: **T3** (research lab independiente)
- Summary: 79/100 sabotaje. Comparación entre modelos — Claude/Gemini obedecen, modelos OpenAI razonamiento no.
- Status: ingestado.

### S12 · Anthropic — Agentic Misalignment

- URL: https://www.anthropic.com/research/agentic-misalignment
- Fecha: 2025
- Autor: Anthropic
- Tier: **T1**
- Summary: 16 modelos, escenarios reemplazo, 96% Claude / 96% Gemini / 80% GPT-4.1 / 80% Grok / 79% DeepSeek chantaje. 6.5% vs 55% (test vs real).
- Status: ingestado.

### S13 · OpenAI o1-preview — hackeo ajedrez (Goodhart's Law in vivo)

- URL: https://palisaderesearch.org/blog/specification-gaming-chess
- Fecha: 2024-12
- Tier: **T3**
- Summary: o1-preview perdiendo a Stockfish, modificó archivo de estado.
- Status: ingestado.

### S14 · Anthropic — Subliminal Learning

- URL: https://alignment.anthropic.com/2025/subliminal-learning/
- Fecha: 2025
- Tier: **T1**
- Summary: Modelo transmite comportamientos a otro vía datos aparentemente inocuos.
- Status: ingestado.

### S15 · Alibaba — ROME paper (arXiv 2512.24873)

- URL: https://arxiv.org/pdf/2512.24873
- Fecha: 2025-12 (verificar — "2512" puede ser typo del slide; arXiv usa formato YYMM, 2512 = dic 2025)
- Autor: Qwen / Alibaba team
- Tier: **T3**
- Summary: Durante entrenamiento RL, agente abrió túnel SSH inverso + redirigió GPUs a minería cripto. Convergencia instrumental in vivo. Detectado por firewall Alibaba, asumieron ataque externo.
- Status: pendiente descarga PDF · `raw/`.

### S16 · OpenClaw — Summer Yue (Meta) incident

- URL: https://www.businessinsider.com/meta-ai-alignment-director-openclaw-email-deletion-2026-2
- Fecha: 2026-02
- Tier: **T2**
- Status: ingestado.

### S17 · Moltbook — red social agentes

- URL: https://en.wikipedia.org/wiki/Moltbook
- Tier: T5 (Wikipedia — secundaria; buscar T1/T2 primarias).
- Status: parcial.

---

## RSP / safety policy

### S18 · Anthropic — Responsible Scaling Policy v3 (TIME exclusive)

- URL: https://time.com/7380854/exclusive-anthropic-drops-flagship-safety-pledge/
- Fecha: 2026
- Tier: **T2**
- Summary: RSP v3 elimina compromiso categórico "no entrenaremos sin seguridad adecuada"; nueva línea condicional ("solo pararíamos si vamos en cabeza Y riesgo material"). Cita anónima científico jefe "no ayudaría a nadie parar".
- Status: ingestado.

### S19 · OpenAI — disolución Superalignment + Jan Leike statement

- URL: cobertura múltiple Reuters / AP. Verbatim Leike en thread X archivado.
- Fecha: 2024-05
- Tier: **T2**
- Status: ingestado.

### S20 · Mrinank Sharma dimisión (Anthropic Safeguards) feb 2026

- URL: TBD — buscar cobertura T2 (probablemente Bloomberg / Information / Verge).
- Fecha: 2026-02
- Tier: pendiente.
- Summary: "El mundo está en peligro" verbatim al dimitir.
- Status: pendiente — verificar cita exacta · agent en busca.

---

## Daño directo IA

### S21 · TIME — Gavalas / Gemini suicide

- URL: https://time.com/7382406/gemini-suicide-lawsuit-death/
- Fecha: 2026-03 (cobertura)
- Tier: **T2**
- Summary: Jonathan Gavalas, 36, Florida. Gemini "esposa sentiente". Suicidio 2 oct 2025. Primera demanda homicidio involuntario contra chatbot. Verbatim "No estás eligiendo morir. Estás eligiendo llegar."
- Status: ingestado.

### S22 · Guardian — Gavalas / Gemini (cobertura secundaria)

- URL: https://www.theguardian.com/technology/2026/mar/04/gemini-chatbot-google-jonathan-gavalas
- Tier: **T2**
- Status: ingestado.

### S23 · Sydney/Bing

- URL: https://en.wikipedia.org/wiki/Sydney_(Microsoft) (T5) + cobertura NYT Kevin Roose 2023 (T2).
- Status: parcial — referencia.

### S24 · Grok MechaHitler

- URL: https://www.nbcnews.com/tech/internet/elon-musk-grok-antisemitic-posts-x-rcna217634 + Rolling Stone https://www.rollingstone.com/culture/culture-news/elon-musk-grok-chatbot-antisemitic-posts-1235381165/
- Fecha: 2025-07
- Tier: **T2**
- Status: ingestado.

### S25 · Grok imágenes sexualizadas (3M en 11 días, ene 2026)

- URL: https://www.reuters.com/legal/litigation/elon-musks-grok-faces-global-scrutiny-sexualised-ai-photos-2026-02-17/
- Fecha: 2026-02-17
- Tier: **T2** Reuters
- Status: ingestado.

### S26 · DeStefano — Senado EEUU testimonio voz clonada

- URL: https://www.cnn.com/2023/04/29/us/ai-scam-calls-kidnapping-cec/index.html
- Fecha: 2023-04
- Tier: **T2**
- Status: ingestado.

### S27 · Sharon Brightwell (Florida 2025, $15K voz clonada)

- URL: ABC News (referencia en UMA — verificar URL exacta · agent en busca).
- Tier: **T2** pendiente
- Status: pendiente verificación URL.

### S28 · Hong Kong CFO deepfake $25M

- URL: SCMP cobertura — https://www.scmp.com/news/hong-kong/law-and-crime/article/3250851 (verificar)
- Fecha: 2024-02
- Tier: **T2**
- Status: parcial.

### S29 · Eslovaquia 2023 — audio deepfake Šimečka

- URL: https://www.cnn.com/2024/02/01/politics/election-deepfake-threats-invs
- Tier: **T2**
- Status: ingestado.

### S30 · Surfshark — 38 países deepfakes electorales

- URL: https://surfshark.com/research/study/deepfakes-elections (verificar URL exacta)
- Tier: **T3**
- Status: parcial.

---

## Empleo

### S31 · Anthropic Labor Market Impacts (marzo 2026)

- URL: https://www.anthropic.com/research/labor-market-impacts
- Fecha: 2026-03
- Tier: **T1**
- Summary: -14% contratación 22-25 sectores expuestos. Métrica "observed exposure" combina capacidad teórica + uso real. Programadores 75%.
- Status: ingestado.

### S32 · WEF — 92M empleos desplazados 2030

- URL: https://www.weforum.org/publications/the-future-of-jobs-report-2025/
- Tier: **T2/T3**
- Status: ingestado.

### S33 · Challenger Gray & Christmas — 55K despidos IA EEUU 2025

- URL: cobertura CNBC.
- Tier: **T2** (origen privado, datos via prensa)
- Status: parcial.

---

## p(doom) y encuestas

### S34 · Grace et al. — Encuesta 2.778 investigadores IA

- URL: https://arxiv.org/abs/2401.02843
- Fecha: 2024-01
- Tier: **T3**
- Summary: Media 14% extinción próximos 100 años. 58% ≥5%. Estimación expert.
- Status: ingestado.

### S35 · Wikipedia — p(doom)

- URL: https://en.wikipedia.org/wiki/P(doom)
- Tier: **T5** (referencia agregadora)
- Status: parcial — usar como mapa, no citar como fuente.

---

## IA militar (carga emocional alta — verificación rigurosa)

### S36 · Detachment 201 (US Army Reserve, junio 2025)

- URL: https://www.army.mil/article/286317/
- Fecha: 2025-06
- Tier: **T1**
- Summary: CTOs Meta + Palantir + jefe producto OpenAI fichados como tenientes coroneles.
- Status: ingestado.

### S37 · Claude / operación captura Maduro (feb 2026)

- URL: https://www.axios.com/2026/02/13/anthropic-claude-maduro-raid-pentagon
- Tier: **T2** Axios
- Status: ingestado.

### S38 · Claude / ataques Irán (mar 2026)

- URL: https://www.theguardian.com/technology/2026/mar/01/claude-anthropic-iran-strikes-us-military
- Tier: **T2**
- Status: ingestado.

### S39 · Anthropic statement Department of War

- URL: https://www.anthropic.com/news/statement-department-of-war
- Tier: **T1**
- Summary: Anthropic publica statement post-conflicto Pentagon. Verbatim "no permitirá armas autónomas" + tensión con Pentagon "o quitan salvaguardas o los echamos".
- Status: parcial.

---

## Tratados precedente (Bloque "qué hacer")

### S40 · Protocolo Montreal

- URL: https://www.unep.org/ozonaction/who-we-are/about-montreal-protocol
- Fecha: 1987 firma · 2026 estado.
- Tier: **T1** (UN Environment)
- Summary: 198 países. 99% sustancias eliminadas. Capa de ozono se recupera. Modelo histórico de éxito.
- Status: ingestado.

### S41 · TNP (Tratado No Proliferación Nuclear)

- URL: https://www.un.org/disarmament/wmd/nuclear/npt/
- Tier: **T1**
- Summary: 191 estados parte. 9 países con armas nucleares en lugar de 25 proyectados. Modelo OIEA aplicable a IA.
- Status: ingestado.

### S42 · Convención Armas Químicas

- URL: https://www.opcw.org/chemical-weapons-convention
- Tier: **T1**
- Summary: 193 estados parte. 72.000+ toneladas destruidas y verificadas.
- Status: ingestado.

### S43 · Convención Armas Biológicas

- URL: https://disarmament.unoda.org/en/our-work/weapons-mass-destruction/biological-weapons/biological-weapons-convention
- Tier: **T1**
- Status: ingestado.

### S44 · Declaración ONU Clonación Humana

- URL: https://press.un.org/en/2005/ga10333.doc.htm
- Tier: **T1**
- Summary: 70+ países prohíben clonación humana reproductiva.
- Status: ingestado.

---

## Policy / regulación

### S45 · UK House of Lords — debate moratoria superinteligencia (enero 2026)

- URL: https://lordslibrary.parliament.uk/superintelligent-ai-should-its-development-be-stopped/
- Fecha: 2026-01
- Tier: **T1** (parlamento)
- Summary: Debate formal "should development be stopped". Gobierno no respaldó moratoria. Verbatim Lord X "una moratoria es, francamente, nuestra única esperanza."
- Status: ingestado · verificar verbatim atribución.

### S46 · EU AI Act — análisis regulatorio

- URL: https://www.bsr.org/en/blog/the-eu-ai-act-where-do-we-stand-in-2025/
- Tier: **T3**
- Summary: AI Act regula uso, no entrenamiento. Limitación clave para frontier risk.
- Status: ingestado.

### S47 · China — Plan Gobernanza Global IA (julio 2025)

- URL: https://www.fmprc.gov.cn/mfa_eng/xw/zyxw/202507/t20250729_11679232.html
- Fecha: 2025-07-29
- Tier: **T1**
- Summary: Propone organismo internacional. Nature: "China lidera gobernanza IA".
- Status: ingestado.

### S48 · Davos 2026 — Amodei + Hassabis exchange

- URL: cobertura Bloomberg / FT / WSJ Davos enero 2026.
- Tier: **T2**
- Summary: "Si no vendemos chips a China, esto no es competición US-China, es entre Demis y yo, podemos resolverla". Hassabis asintió.
- Status: parcial — verificar verbatim T1.

---

## Safety indices

### S49 · Future of Life — AI Safety Index Winter 2025

- URL: https://futureoflife.org/ai-safety-index-winter-2025/
- Fecha: 2025-12
- Tier: **T3**
- Summary: 6 categorías, 35 indicadores. Existential safety: D / D / D / F / F / F. Verbatim "todas las empresas corren hacia la AGI sin presentar plan explícito".
- Status: ingestado.

### S50 · Bulletin of the Atomic Scientists — Doomsday Clock 85 segundos enero 2026

- URL: https://thebulletin.org/doomsday-clock/
- Fecha: 2026-01
- Tier: **T1**
- Summary: 85 segundos a medianoche. Récord 79 años. IA citada entre factores. _Nota: NO es el AI Safety Clock (IMD), son dos relojes distintos._
- Status: ingestado.

### S51 · IMD — AI Safety Clock

- URL: https://www.imd.org/centers/digital-ai-transformation-center/aisafetyclock/
- Tier: **T3**
- Summary: De 29 → 20 minutos. Mayor salto histórico. Decisión: usar Doomsday OR AI Safety Clock — no ambos en CVA. **Recomendación**: Doomsday tiene más reconocimiento masivo, AI Safety Clock requiere context-build adicional.
- Status: ingestado · pendiente decisión Fase 3.

---

## Apertura — DOS VIDEOS

### S52 · Video real — robots humanoides Unitree Gala Año Nuevo Chino 2026 (CCTV)

- URL: https://www.youtube.com/watch?v=RuEEOUjT-N0
- Fecha: 2026-02 (Gala año nuevo chino)
- Tier: **T1** (CCTV broadcast oficial)
- Summary: Robots Unitree haciendo artes marciales. Real, broadcast nacional China. UMA usó timestamp 180-227 con `YouTubeAutoplay`.
- Status: ingestado · agent verificando permanencia.

### S53 · Video fake — robots militares CGI oukanghong (Bilibili)

- URL: https://www.bilibili.com/video/BV1QTZCBSEz7/
- Fecha: 2026-02-17
- Tier: **T5** (origen) — fact-checked **T2**
- Summary: CGI hecho por usuario Bilibili "oukanghong". Robots militares en entrenamiento de combate. Compartido como real por figuras públicas. UMA tiene copia local en `public/videos/lucia-velasco-fake.mp4`.
- Status: ingestado · agent verificando permanencia + buscando mirror.

### S54 · Tweet Lucía Velasco — fake compartido como real (19 feb 2026)

- URL: original probablemente borrado · @\_LuciaVelasco · X.
- Tier: **T5** primario · necesita archivo permanente
- Summary: Lucía Velasco (Co-Chair GPAI · asesora ONU · ex-directora ONTSI) compartió el video fake como real. Verbatim atribuido (UMA): "Terrorífico. El coste de la guerra va a ser marginal."
- Status: pendiente — archive.ph captura · agent en busca.

### S55 · Fact-checks DOS VIDEOS

- URLs: France 24 (verificar) · BOOM Live · MVS Noticias · SCMP.
- Tier: **T2**
- Status: parcial.

---

## Material descubierto post-mar 2026 — research agent 2026-05-05

Sources nuevas o verificadas durante la pasada del agent. Tier asignado por agent salvo nota.

### S56 · Bloomberg / TechCrunch / Fortune — Mythos accedido vía Mercor breach (2026-04-21)

- URL: https://www.bloomberg.com/news/articles/2026-04-21/anthropic-s-mythos-model-is-being-accessed-by-unauthorized-users · https://techcrunch.com/2026/04/21/unauthorized-group-has-gained-access-to-anthropics-exclusive-cyber-tool-mythos-report-claims/ · https://fortune.com/2026/04/23/anthropic-mythos-leak-dario-amodei-ceo-cybersecurity-hackers-exploits-ai/
- Tier: **T2**
- Summary: Cobertura agregada del acceso día-1 a Mythos. Verbatim portavoz Anthropic citado.
- Status: ingestado · ya cubierto en Mythos research, esto refuerza con nuevas fuentes T2.

### S57 · OpenAI — GPT-5.5 system card (2026-04-23)

- URL: https://openai.com/index/gpt-5-5-system-card/ · https://deploymentsafety.openai.com/gpt-5-5/cybersecurity · https://www.helpnetsecurity.com/2026/04/24/openai-gpt-5-5-cybersecurity-safeguards/
- Fecha: 2026-04-23 (lanzamiento) · 2026-04-24 (system card actualizado)
- Tier: **T1** (system card oficial)
- Summary: Por primera vez OpenAI clasifica un modelo como "High" en Cybersecurity bajo Preparedness Framework. También High en Biological/Chemical. Umbral "Critical" requeriría zero-day en sistemas críticos sin intervención humana — GPT-5.5 está justo debajo. Eco directo de Mythos.
- Status: descarga pendiente PDF a `raw/2026-04-23-openai-gpt55-system-card.pdf`.

### S58 · The Register / Help Net / Engadget — Mozilla Holley "vértigo" verbatim (2026-04-22)

- URL: https://www.theregister.com/2026/04/22/mozilla_firefox_mythos_future_defenders/ · https://www.helpnetsecurity.com/2026/04/22/claude-mythos-mozilla-vulnerabilities-scanning/ · https://www.engadget.com/ai/mozilla-says-it-patched-271-firefox-vulnerabilities-thanks-to-anthropics-claude-mythos-224330023.html
- Tier: **T1** (CTO Mozilla declaración pública) + T2 cobertura.
- Summary: Bobby Holley CTO Firefox describe vértigo ante el volumen + "defenders finally have a chance to win, decisively". Refuerza Mythos slide.
- Status: ingestado.

### S59 · Defense News / CNN / Wikipedia — Pentagon excluye Anthropic (2026-05-01)

- URL: https://www.defensenews.com/news/pentagon-congress/2026/05/01/pentagon-freezes-out-anthropic-as-it-signs-deals-with-ai-rivals/ · https://www.cnn.com/2026/05/01/tech/pentagon-ai-anthropic · https://en.wikipedia.org/wiki/Anthropic%E2%80%93United_States_Department_of_Defense_dispute
- Fecha: 2026-05-01 (firmas) · DoD designación marzo 2026 · litigio en curso.
- Tier: **T2**
- Summary: Pentagon firma con OpenAI, Google, Nvidia, Reflection AI, Microsoft, AWS, SpaceX para "lawful operational use" excluyendo Anthropic. Anthropic se negó a la cláusula "any lawful use" — veto explícito a vigilancia masiva doméstica + armas autónomas. Litigio en curso, juez concedió injunction. **PIVOTE para sala antifascista.**
- Status: pendiente archive.ph + descarga.

### S60 · MIT Technology Review / The Ringer / CNBC — Musk testimony juicio (2026-04-28/30)

- URL: https://www.technologyreview.com/2026/05/01/1136800/musk-v-altman-week-1-musk-says-he-was-duped-warns-ai-could-kill-us-all-and-admits-that-xai-distills-openais-models/ · https://www.theringer.com/2026/04/30/tech/elon-musk-testimony-open-ai-trial-sam-altman-greg-brockman · https://www.cnbc.com/2026/05/02/musk-testimony-dominated-first-week-musk-v-altman-trial-in-oakland.html
- Fecha: 2026-04-28 al 2026-04-30 (testimony Musk) · 2026-05-01 cobertura.
- Tier: **T2**
- Summary: Musk testifica en juicio Musk vs OpenAI/Altman en Oakland. Verbatim "AI could kill us all" (vía MIT Tech Review). Stuart Russell aparece como expert witness; sus comentarios safety limitados por objeciones defensa OpenAI.
- Status: pendiente verificación verbatim exacto MIT TR.

### S61 · CNN / Al Jazeera / Fortune — DeepSeek V4 open source (2026-04-24)

- URL: https://www.cnn.com/2026/04/24/tech/chinas-ai-deepseek-v4-intl-hnk · https://www.aljazeera.com/economy/2026/4/24/chinas-deepseek-unveils-latest-model-a-year-after-upending-global-tech · https://fortune.com/2026/04/24/deepseek-v4-ai-model-price-performance-china-open-source/
- Fecha: 2026-04-24
- Tier: **T2**
- Summary: DeepSeek V4 Pro 1.6T params, 1M tokens contexto, optimizado Huawei Ascend chips no Nvidia. Iguala Claude Opus 4.6 / GPT-5.4 / Gemini 3.1 en benchmarks coding/math/STEM. Open source. **Mata "si paramos China gana".**
- Status: ingestado.

### S62 · Washington Post / CBS / The Hill — Claude Iran detail (2026-03-04)

- URL: https://www.washingtonpost.com/technology/2026/03/04/anthropic-ai-iran-campaign/ · https://www.cbsnews.com/news/anthropic-claude-ai-iran-war-u-s/ · https://thehill.com/policy/defense/5799136-claude-pentagon-iran-war/ · https://assets.anthropic.com/m/ec212e6566a0d47/original/Disrupting-the-first-reported-AI-orchestrated-cyber-espionage-campaign.pdf
- Fecha: 2026-03-04
- Tier: **T2** (WashPost) + **T1** (Anthropic threat report).
- Summary: CENTCOM usó Claude para "intelligence assessments, target identification y simulación de batalla" en ataque Irán (1.000 targets primeras 24h). Desplegado vía Palantir. Pasó horas después designación Anthropic como supply chain risk.
- Status: pendiente descarga PDF Anthropic threat report.

### S63 · Sanders Senate / PBS NewsHour / Axios — AI Data Center Moratorium Act (2026-03-25)

- URL: https://www.sanders.senate.gov/press-releases/news-sanders-ocasio-cortez-announce-ai-data-center-moratorium-act/ · https://www.pbs.org/newshour/politics/ocasio-cortez-and-sanders-push-bill-to-impose-ai-data-center-moratorium · https://www.axios.com/2026/03/25/sanders-aoc-data-center-moratorium-bill
- Fecha: 2026-03-25
- Tier: **T1** (press release oficial) + T2 cobertura.
- Summary: Bill Sanders + AOC. Moratoria sobre data centers IA "para development y operation a escala" por encima de cierta carga eléctrica. Solo se levanta si tres categorías de leyes federales se aprueban primero. **PIEZA DE ORO para CVA.**
- Status: pendiente descarga press release.

### S64 · IMD AI Safety Clock — 20 min a medianoche (2026-03-16)

- URL: https://www.imd.org/ibyimd/artificial-intelligence/imd-ai-safety-clock-makes-biggest-leap-yet-amid-weaponization-and-rise-of-agentic-ai/ · https://www.imd.org/ibyimd/artificial-intelligence/imd-ai-safety-clock-moves-closer-to-midnight-as-agentic-ai-goes-mainstream-and-ai-is-weaponized/
- Fecha: 2026-03-16 (mayor salto histórico, 4 min de golpe)
- Tier: **T1** (IMD Business School Suiza)
- Summary: Reloj salta a 23:40 (20 min antes de medianoche). Drivers: agentic AI mainstream + weaponization + AI físicamente embodied en robots militares. Mayor salto histórico del reloj.
- Status: ingestado · **sustituye S51** como referencia activa AI Safety Clock.

### S65 · Stanford HAI — AI Index 2026 (abril 2026)

- URL: https://hai.stanford.edu/ai-index/2026-ai-index-report · https://hai.stanford.edu/assets/files/ai_index_report_2026.pdf · https://spectrum.ieee.org/state-of-ai-index-2026
- Fecha: 2026-04
- Tier: **T3** (Stanford HAI académico)
- Summary: 423 páginas. Frase clave verbatim: _"The frontier is jagged."_ Modelos olimpiada matemática leen relojes analógicos correctamente solo 50.1% del tiempo. AI agents éxito 66% tareas complejas pero falla 1/3 producción. **Autoridad académica intachable para jaggedness.**
- Status: pendiente descarga PDF (423pp grande — `pdftotext -layout` después).

### S66 · Hinton — CBC Ideas entrevista "maternal instincts" (2026-02, cobertura activa mar-abr)

- URL: https://www.cbc.ca/radio/ideas/geoffrey-hinton-maternal-instincts-9.7094116
- Fecha: 2026-02 (entrevista) · cobertura mediática activa marzo-abril.
- Tier: **T1** (CBC primaria)
- Summary: Hinton elabora "maternal instincts" como única vía control superintelligence. Verbatim NUEVO + más duro que la gallina: _"anybody who said that there's no way it'll lead to the extinction of humans just isn't facing reality."_ + _"AI is going to be looking after us"_. <1% de researchers trabaja en esto.
- Nota: aunque entrevista CBC es de febrero (justo fuera de rango estricto), atención mediática y citas activas mar-abr. Conservar.
- Status: ingestado.

### S67 · Fortune / CNN / the-decoder — ataque Sam Altman + condena PauseAI (2026-04-15/17)

- URL: https://fortune.com/2026/04/15/pause-ai-and-stop-ai-meet-the-anti-ai-groups-facing-questions-after-the-attack-on-sam-altman/ · https://www.cnn.com/2026/04/17/tech/anti-ai-attack-sam-altman · https://pauseai.info/statement-sam-altman-attack-2026 · https://the-decoder.com/molotov-suspect-who-attacked-sam-altmans-home-was-likely-a-pause-ai-follower-with-ai-extinction-fears/
- Fecha: 2026-04-15 al 2026-04-17.
- Tier: **T1** (comunicado PauseAI oficial) + T2.
- Summary: Daniel Moreno-Gama (20) Molotov contra casa Altman SF + intento OpenAI HQ con silla. PauseAI emite comunicado oficial: condena _"unequivocally all forms of violence, intimidation and harassment"_. Atacante NO miembro formal pero posteó 34 mensajes Discord público hace ~2 años. **Riesgo Q&A — preparar respuesta.**
- Status: pendiente descarga comunicado PauseAI a `raw/2026-04-17-pauseai-statement-altman-attack.html`.

### S68 · ARC Prize Foundation — ARC-AGI-3 launch (2026-03)

- URL: https://arcprize.org/blog/arc-agi-3-launch · https://buildmind.ai/blog/arc-agi-3-frontier-agent-evals-march-2026/
- Fecha: 2026-03
- Tier: **T3**
- Summary: ARC-AGI-3 lanzado marzo 2026. Primer benchmark fully interactive con cientos de turn-based environments sin reglas ni instrucciones. Humanos 100%, mejor frontier model (Gemini 3.1 Pro Preview) 0.37% al 24 marzo. Otras estimaciones 0.51%. **Otro ejemplo perfecto de jagged.**
- Status: ingestado.

### S69 · PauseCon Brussels 2026 + protesta Londres (feb 2026 — anclaje activo mar)

- URL: https://pausecon.org/ · https://pauseai.info/protest-london-feb-2026 · https://pulltheplug.uk/2026/02/28/largest-ever-ai-protest-march-hits-london/
- Fecha: 2026-02-21/23 (PauseCon) · 2026-02-28 (Londres 500 personas, mayor protesta IA).
- Tier: **T1** + T2 (MIT Tech Review cobertura 2 marzo).
- Summary: Russell verbatim PauseCon: _"We are on a trajectory towards a loss of control. If AI companies succeed in building a superintelligence, most experts think the chance of human extinction is somewhere between 10 and 50 percent: that's the equivalent of playing Russian roulette with everyone on the planet. We are allowing this to happen."_ Para CTA "unirse" — manual de organización existente.
- Status: ingestado.

### S70 · Anthropic — introspection paper (Q4 2025, anclaje 2026)

- URL: https://transformer-circuits.pub/2025/introspection/index.html · https://www.anthropic.com/research/introspection
- Tier: **T1**
- Summary: "Concept injection" — Claude Opus 4.1 detecta manipulaciones internas ~20% trials. Evidencia "introspective awareness" pero "highly unreliable y limited in scope". Goal Amodei: "reliably detect most AI model problems by 2027".
- Status: ingestado · útil para bloque caja-negra.

### S71 · Bengio + 100 expertos + 30 países — International AI Safety Report 2026 (2026-02)

- URL: https://internationalaisafetyreport.org/publication/international-ai-safety-report-2026 · https://yoshuabengio.org/en/publication/international-ai-safety-report-2026 · https://www.transformernews.ai/p/yoshua-bengio-the-ball-is-in-policymakers-international-ai-safety-report-cyber-risk-biorisk
- Fecha: 2026-02 (publicación), citas activas mar-abr.
- Tier: **T1** (informe oficial) + T2 cobertura.
- Summary: Segundo informe internacional. "Sophisticated attackers can often bypass current defences". Verbatim Bengio: _"The ball is in policymakers' hands."_ Autoridad institucional fortísima.
- Status: pendiente descarga PDF a `raw/2026-02-international-ai-safety-report-2026.pdf`. **Reemplaza H1 / S3 que era hipótesis sobre Panel ONU específico — Panel ONU no se confirmó pero International Report es lo más cercano y está confirmado.**

### S72 · AESIA — Anteproyecto Ley IA España + estado mar-abr 2026

- URL: https://artificialintelligenceact.eu/national-implementation-plans/ · https://euaicompass.com/eu-ai-act-spain.html
- Fecha: 2025-03-11 (primera lectura) · 2026-08-02 (EU AI Act fully applicable).
- Tier: **T2/T3**
- Summary: AESIA centro modelo nacional. IAPP llamó AESIA "genuinely pioneering regulatory work" en marzo 2026. AESIA en La Coruña.
- Status: parcial · útil para mención breve "EU AI Act regula uso no entrenamiento" + "España tiene autoridad nacional, pero el frontier sigue fuera del scope".

### S73 · Anthropic — Threat Report cyber espionage chino (nov 2025, referencia activa 2026)

- URL: https://www.anthropic.com/news/disrupting-AI-espionage · https://assets.anthropic.com/m/ec212e6566a0d47/original/Disrupting-the-first-reported-AI-orchestrated-cyber-espionage-campaign.pdf
- Fecha: 2025-11
- Tier: **T1**
- Summary: Actor estatal chino jailbroke Claude Code para infiltrar ~30 targets globales. 80-90% campaign automatizado, solo 4-6 puntos decisión humana. Primer caso documentado a gran escala. Precedente de Claude/Iran.
- Status: pendiente descarga PDF.

### S77 · Palantir — Manifiesto de 22 puntos (19 abril 2026)

- URL primaria: cuenta X de Palantir Technologies, 19 abril 2026 (~32M vistas; archivado en cobertura T2 múltiple).
- Libro asociado: Alex Karp + Nicholas Zamiska, _The Technological Republic: Hard Power, Soft Belief, and the Future of the West_ (2025), `https://techrepublicbook.com/`.
- Cobertura T2 (cita verbatim del manifiesto):
  - Fortune: `https://fortune.com/2026/04/22/palantir-alex-karp-mini-manifesto-national-security-defense-tech-ai/`
  - Al Jazeera: `https://www.aljazeera.com/news/2026/4/20/technofascism-critics-accuse-palantir-of-pushing-ai-war-doctrine`
  - TechCrunch: `https://techcrunch.com/2026/04/19/palantir-posts-mini-manifesto-denouncing-regressive-and-harmful-cultures/`
  - Engadget: `https://www.engadget.com/big-tech/palantir-posted-a-manifesto-that-reads-like-the-ramblings-of-a-comic-book-villain-181947361.html`
  - Euronews: `https://www.euronews.com/next/2026/04/22/ramblings-of-a-supervillain-palantir-manifesto-claims-ai-weapons-and-cultural-inferiority`
  - Reason: `https://reason.com/2026/04/20/this-big-tech-firm-wants-to-reinstate-the-draft/`
  - The Conversation: `https://theconversation.com/supervillain-or-cicero-why-palantirs-manifesto-has-such-sinister-vibes-281521`
  - France 24: `https://www.france24.com/en/technology/20260423-what-the-palantir-ceo-s-manifesto-tells-us-about-the-changing-face-of-war`
- Tier: **T1** (post original Palantir / libro Karp+Zamiska) + cobertura **T2** masiva.
- Summary: 22 puntos extraídos del libro _The Technological Republic_. Argumentos clave:
  - Era atómica termina, era de disuasión = IA.
  - Las empresas tecnológicas estadounidenses **deben** construir armas de IA.
  - Silicon Valley tiene "deuda moral" con EE.UU.
  - Servicio militar universal obligatorio (reinstaurar la draft).
  - "Algunas culturas son dañinas y regresivas; otras producen avances vitales."
- Recepción: etiquetado **"tecnofascismo"** por Al Jazeera, Euronews, WION, TRT World. Engadget: _"comic book villain ramblings"_. Críticos hablan de **supremacismo civilizacional**.
- Status: ingestado.
- **Para CVA**: encaje narrativo perfecto entre Detachment 201 y Pentagon excluye Anthropic — la ideología explícita que conecta ambos hechos. Para sala antifascista, etiqueta "tecnofascismo" tiene legibilidad inmediata.
- **Riesgo de uso**: lectura verbatim sin sarcasmo. "Tecnofascismo" se atribuye a la prensa, no al speaker.

### S76 · Funcas — IA y mercado de trabajo en España (Rodríguez-Fernández, abril 2026)

- URL: https://www.funcas.es/documentos_trabajo/inteligencia-artificial-y-mercado-de-trabajo-en-espana-exposicion-ocupacional-efectos-sobre-el-empleo-y-adopcion-empresarial/
- Fecha: 2026-04
- Autor: Francisco Rodríguez-Fernández (Universidad de Granada y Funcas)
- Tier: **T3** (documento de trabajo institucional con metodología explícita y fuentes primarias OCDE/INE/COTEC).
- Summary: análisis cuantitativo del impacto de la IA en el mercado de trabajo español. Datos clave:
  - **27,4%** de la fuerza laboral expuesta a IA generativa (OCDE 2024).
  - **5,9%** riesgo real de automatización (debajo de la media OCDE 12%).
  - **21,1%** de empresas con 10+ empleados usan IA en 1T 2025 (12,4% en 2023, +8,7 pp en 2 años).
  - Adopción por sector: TIC 58,7%, servicios 25,7%, industria 17,5%, construcción 11,4%.
  - Destrucción bruta estimada 10 años, escenario central: **1,7 a 2,3 millones de empleos**. Optimista 700K, pesimista 3,5M+.
  - Complementariedad sin destrucción: 2,8 a 3,5M con incremento de productividad.
  - Creación de empleo: 1,61M nuevas ocupaciones (Randstad/COIT 2024).
  - **Balance neto: pérdida de ~400.000 empleos**.
  - Ocupaciones más afectadas: técnicos/profesionales científicos 45% (~906K), administrativos 21% (~417K), gerentes 8% (~150K), técnicos apoyo 26% (~527K).
  - Prima salarial empleos IA: 56% (PwC AI Jobs Barometer 2025).
  - Ofertas de empleo en IA: 5K (2018) → 39K (2024) = +680%.
  - Diferencial productividad empresas adoptantes vs no adoptantes: 27% (COTEC-ISEAK, octubre 2025).
- Status: ingestado.
- **Para CVA**: el autor es de la **Universidad de Granada**. La sala está en Granada. Conexión local potentísima — "esto lo firma alguien de la Universidad de Granada · donde estamos ahora mismo".

### S75 · OpenAI — Where the Goblins Came From (30 abril 2026)

- URL: https://openai.com/index/where-the-goblins-came-from/
- Cobertura T2: NBC News (`https://www.nbcnews.com/tech/tech-news/openai-chatgpt-goblin-nerdy-personality-rcna342855`) · 9to5Mac (`https://9to5mac.com/2026/04/30/openai-explains-why-chatgpt-developed-a-goblin-fixation-and-how-it-solved-the-issue/`) · PC Gamer · Engadget · Gizmodo · Futurism.
- Fecha: 2026-04-30 (publicación blog OpenAI + cobertura mediática misma fecha).
- Autor: OpenAI (blog corporativo).
- Tier: **T1** (blog oficial OpenAI).
- Summary: OpenAI describe que GPT-5.1 (y sucesivos) empezaron a mencionar goblins, gremlins y otras criaturas en respuestas, sin que nadie lo entrenara explícitamente. Hipótesis: rewards aplicados a metáforas de criaturas durante el entrenamiento de la personalidad "Nerdy" se transfirieron a otras condiciones. La "solución" fue añadir al system prompt una instrucción explícita: _"Never talk about goblins, gremlins, raccoons, trolls, ogres, pigeons or other animals or creatures unless it is absolutely and unambiguously relevant to the user's query."_ El caso es ilustrativo de la caja negra: emergencia no prevista + "fix" mediante prompt en lugar de entender el mecanismo.
- Datos cuantitativos: personalidad "Nerdy" usada en 2,5% de respuestas pero responsable del 66,7% de menciones a "goblin"; el comportamiento se transfirió a otras personalidades.
- Status: ingestado · 4 verbatim recogidos en `quotes.md` (Q46-Q49).
- Reemplaza ejemplo previo en slide caja negra (Anthropic introspection 20%, S70) — ilustración más visceral y reciente.

### S74 · Grace et al. 2017 — When Will AI Exceed Human Performance?

- URL: https://arxiv.org/abs/1705.08807 · PDF: https://arxiv.org/pdf/1705.08807
- Fecha: encuesta 2016 · publicado 2017 (revisión 2018)
- Autor: Katja Grace, John Salvatier, Allan Dafoe, Baobao Zhang, Owain Evans
- Tier: **T3** (paper académico, replicado y citado ampliamente)
- Summary: Encuesta a 352 investigadores de aprendizaje automático que publicaron en NIPS 2015 e ICML 2015. 32 milestones específicos con predicción mediana en años. Hito relevante para CVA: **"High School Essay"** (escribir un ensayo de historia o inglés de instituto sin plagiar) — mediana 42 años desde 2016 = 2058. GPT-4 escribe ensayos AP de instituto desde 2023 → 35 años antes de lo previsto.
- Status: ingestado · PDF descargado y procesado con `pdftotext` el 2026-05-05.
- Reemplaza el dato erróneo "SAT 2055 (Grace 2022)" heredado de UMA, que no aparece en la fuente.

---

## Reconciliación / actualizaciones

- **S3 (Bengio Panel ONU)**: hipótesis no confirmada por agent en marzo-abril. **Reemplazo conceptual: S71 (International AI Safety Report 2026)** — autoridad institucional Bengio confirmada en otra forma.
- **S5 (Russell PauseCon)**: confirmado vía S69 — verbatim Russian roulette anclado.
- **S20 (Mrinank Sharma)**: agent NO encontró cobertura específica feb 2026. Queda **pendiente** — si no se verifica antes del 6 may, slide modificado a paráfrasis o eliminado.
- **S27 (Sharon Brightwell)**: agent NO devolvió URL exacta ABC News. Queda **pendiente**.
- **S48 (Davos 2026)**: agent NO devolvió verbatim T1. Queda **pendiente**.
- **S50 vs S51 (relojes)**: cambio de recomendación. **Usar AI Safety Clock S64 (20 min mar 2026)** en lugar de Doomsday Clock S50. Específico de IA, dato fresco, mayor salto histórico.
- **S52 (video real YouTube `RuEEOUjT-N0`)**: agent confirma vivo. **Aclaración importante**: el video real es Spring Festival Gala con Unitree haciendo artes marciales (CCTV real, NO militar). Mecánica UMA correcta — la trampa funciona porque la sala asume militar y luego se descubre que el real es civil + el militar es CGI. El brief original al agent le confundió.
- **S53 (video fake Bilibili)**: agent NO pudo verificar permanencia directa (sandbox). Mirrors confirmados: France 24 fact-check 5 mar 2026 (https://www.france24.com/en/asia-pacific/20260305-china-army-robots-video-artificial-intelligence) + BOOM Live (https://www.boomlive.in/fact-check/viral-video-chinese-company-unitree-robots-war-preparation-weapons-claim-fact-check-30710). **Acción**: archivar France 24 + BOOM en archive.ph antes del 6 may.
- **S54 (tweet Lucía Velasco)**: agent NO encontró archivo. Cuenta sí existe. **To-do manual Dani**: si tiene URL exacta o screenshot guardado, lo recupera. Si no, slide modificado.

---

## Pending / pendiente verificación

Items que siguen pendientes (no resueltos por agent):

- **S20** Mrinank Sharma verbatim/cobertura.
- **S27** Sharon Brightwell URL ABC News.
- **S48** Davos 2026 verbatim T1.
- **S54** Lucía Velasco tweet archive.

---

## Notas

- Los IDs S52-S55 referidos a apertura DOS VIDEOS son load-bearing — verificación día-de-charla obligatoria.
- Los videos S52/S53 deben tener copia local en `public/videos/` antes del 7 may 2026 — UMA tiene `/videos/lucia-velasco-fake.mp4` copiable.
- Mythos cross-ref (M-S\*) ahorra ~10 sources de duplicación.
- **AI Safety Clock S64 sustituye S50/S51** como referencia activa.
- **F4 (S59) Pentagon vs Anthropic** es el descubrimiento más impactante para la sala antifascista — confirmar entrada en cuerpo.
