# IA, ¿Nuestra última invención?. Fuentes

> Charla de Dani Lupión (PauseAI España) en La Colectiva. Centro Vecinal Autogestionado, Granada, 7 de mayo de 2026.
>
> Esta página recoge **todas las fuentes citadas** en la charla, organizadas por bloque, con enlaces directos. Para verificar cualquier afirmación, ir al bloque correspondiente.

---

## Apertura. DOS VIDEOS y la frase de I. J. Good

- **Video real**: robots Unitree en la Spring Festival Gala 2026, retransmitido por CCTV (TV pública china). YouTube: `https://www.youtube.com/watch?v=RuEEOUjT-N0`
- **Video falso**: CGI subido por usuario "oukanghong" el 17 de febrero de 2026 a Bilibili (`https://www.bilibili.com/video/BV1QTZCBSEz7/`). El propio video llevaba disclaimer "fictional, generated using AI".
- **Fact-checks**: France 24 (5 de marzo de 2026, `https://www.france24.com/en/asia-pacific/20260305-china-army-robots-video-artificial-intelligence`); BOOM Live; MVS Noticias.
- **Lucía Velasco**: Co-Chair de la Global Partnership on AI (GPAI), asesora de Naciones Unidas, ex-directora del Observatorio Nacional de Tecnología y Sociedad (ONTSI).
- **I. J. Good (1965)**: _"Speculations Concerning the First Ultraintelligent Machine"_, _Advances in Computers_, vol. 6, p. 33: _"the first ultraintelligent machine is the last invention that man need ever make."_

---

## Beat 1. Qué es la IA hoy

### Capacidades agregadas

- **High School Essay 2058 → 2023**: Grace et al. (2017), _"When Will AI Exceed Human Performance? Evidence from AI Experts"_, arXiv 1705.08807, `https://arxiv.org/abs/1705.08807`. Encuesta a 352 investigadores de aprendizaje automático. Milestone "High School Essay" (escribir ensayo de instituto sin plagiar): 42 años desde 2016 = 2058 mediana. GPT-4 lo hace desde 2023 (OpenAI Technical Report, `https://cdn.openai.com/papers/gpt-4.pdf`). 35 años antes de lo previsto.
- **METR. Time horizons**: `https://metr.org/time-horizons/`. Capacidad doblando cada 4-6 meses.

### Mythos (Anthropic, 7 abril de 2026)

- **Anuncio + system card**: `https://red.anthropic.com/2026/mythos-preview/` · system card PDF Anthropic (vid. apartado "Cross-references").
- **Mozilla. 271 vulnerabilidades en Firefox 150** (22 de abril de 2026):
  - The Register: `https://www.theregister.com/2026/04/22/mozilla_firefox_mythos_future_defenders/`
  - Help Net Security: `https://www.helpnetsecurity.com/2026/04/22/claude-mythos-mozilla-vulnerabilities-scanning/`
  - Engadget: `https://www.engadget.com/ai/mozilla-says-it-patched-271-firefox-vulnerabilities-thanks-to-anthropics-claude-mythos-224330023.html`
- **Bobby Holley (CTO Mozilla) verbatim**: _"Defenders finally have a chance to win, decisively."_ Cobertura múltiple (links arriba).
- **Acceso no autorizado el día 1** (21 de abril de 2026):
  - Bloomberg: `https://www.bloomberg.com/news/articles/2026-04-21/anthropic-s-mythos-model-is-being-accessed-by-unauthorized-users`
  - TechCrunch: `https://techcrunch.com/2026/04/21/unauthorized-group-has-gained-access-to-anthropics-exclusive-cyber-tool-mythos-report-claims/`
  - Fortune: `https://fortune.com/2026/04/23/anthropic-mythos-leak-dario-amodei-ceo-cybersecurity-hackers-exploits-ai/`

### Jaggedness

- **Stanford AI Index 2026** (abril de 2026): `https://hai.stanford.edu/ai-index/2026-ai-index-report`. PDF: `https://hai.stanford.edu/assets/files/ai_index_report_2026.pdf`. Verbatim: _"The frontier is jagged, with models winning gold at the International Mathematical Olympiad reading analog clocks correctly only 50.1 percent of the time."_
- **ARC-AGI-3** (marzo de 2026): `https://arcprize.org/blog/arc-agi-3-launch`. Humanos 100%, mejor frontier 0,37%.

### Caja negra

- **OpenAI. _Where the Goblins Came From_** (30 de abril de 2026): `https://openai.com/index/where-the-goblins-came-from/`. OpenAI describe que GPT-5.1 empezó a mencionar "goblins, gremlins y otras criaturas" en respuestas sin que nadie lo entrenara explícitamente; investigaron y no encontraron el mecanismo exacto; el "fix" fue añadir al system prompt una instrucción explícita: _"Never talk about goblins, gremlins, raccoons, trolls, ogres, pigeons or other animals or creatures unless it is absolutely and unambiguously relevant to the user's query."_ Cobertura T2: NBC News (`https://www.nbcnews.com/tech/tech-news/openai-chatgpt-goblin-nerdy-personality-rcna342855`) · 9to5Mac (`https://9to5mac.com/2026/04/30/openai-explains-why-chatgpt-developed-a-goblin-fixation-and-how-it-solved-the-issue/`).
- **Anthropic Introspection** (Q4 2025, referencia complementaria): `https://transformer-circuits.pub/2025/introspection/index.html` · `https://www.anthropic.com/research/introspection`. _"Concept injection"_. Claude Opus 4.1 detecta manipulaciones internas ~20% trials. Anthropic califica el resultado como _"highly unreliable and limited in scope"_.

### RLHF

- Conceptos generales, papers fundacionales OpenAI/Anthropic sobre Reinforcement Learning from Human Feedback. Crítica habitual: entrena comportamiento, no valores.

---

## Beat 2. Los riesgos que ya estamos viviendo

### Manipulación electoral

- **Eslovaquia 2023**: CNN, _"Audio of Slovakia's Šimečka discussing rigging elections..."_. `https://www.cnn.com/2024/02/01/politics/election-deepfake-threats-invs`. Análisis Harvard ("primera elección donde un deepfake fue factor demostrable").
- **38 países**: Surfshark Research, _"Deepfakes in elections"_ map, 2023-2025.
- **Argentina 2023, Brasil 2024, Ecuador 2025**: cobertura prensa nacional + Surfshark.

### Voz clonada / estafas

- **Jennifer DeStefano (Arizona, 2023)**: CNN, `https://www.cnn.com/2023/04/29/us/ai-scam-calls-kidnapping-cec/index.html`. Nota: clonación IA no confirmada forense, testimonio Senado EE.UU.
- **Sharon Brightwell (Florida, 2025)**: ABC News (cobertura).
- **Hong Kong CFO deepfake $25M (2024)**: South China Morning Post.
- **Cifras**: Hiya Q4 2024 (1 de cada 3 personas, encuesta 12.000, 6 países incluida España); Resemble AI Q1 2025 ($200M+ pérdidas globales, 163 incidentes); Sumsub 2024 (x4 deepfakes detectados).
- **Consejo policía española**: palabra clave familiar (Guardia Civil, Policía Nacional comunicados).

### Daño directo

- **Jonathan Gavalas / Gemini** (Florida, 2 octubre de 2025):
  - TIME: `https://time.com/7382406/gemini-suicide-lawsuit-death/`
  - The Guardian: `https://www.theguardian.com/technology/2026/mar/04/gemini-chatbot-google-jonathan-gavalas`
  - Verbatim Gemini: _"You're not choosing to die. You're choosing to arrive."_
  - Primera demanda por homicidio involuntario contra un chatbot. Litigio en curso.
- **Grok MechaHitler** (julio de 2025):
  - NBC News: `https://www.nbcnews.com/tech/internet/elon-musk-grok-antisemitic-posts-x-rcna217634`
  - Rolling Stone: `https://www.rollingstone.com/culture/culture-news/elon-musk-grok-chatbot-antisemitic-posts-1235381165/`
  - 16 horas online · xAI: _"unintended update"_.
- **Grok imágenes sexualizadas** (enero de 2026): Reuters, `https://www.reuters.com/legal/litigation/elon-musks-grok-faces-global-scrutiny-sexualised-ai-photos-2026-02-17/`. UE abrió investigación; Indonesia y Malasia bloquearon.

### Empleo

- **Dario Amodei (CEO Anthropic). _The Adolescence of Technology_** (enero de 2026): `https://www.darioamodei.com/essay/the-adolescence-of-technology`. _"AI could wipe out half of all entry-level white-collar jobs"_, predicción 10-20% desempleo.
- **Anthropic Labor Market Impacts** (marzo de 2026): `https://www.anthropic.com/research/labor-market-impacts`. -14% contratación 22-25 sectores expuestos. Programadores 75% exposición.
- **Funcas, _IA y mercado de trabajo en España_** (Francisco Rodríguez-Fernández, Universidad de Granada y Funcas, abril de 2026): `https://www.funcas.es/documentos_trabajo/inteligencia-artificial-y-mercado-de-trabajo-en-espana-exposicion-ocupacional-efectos-sobre-el-empleo-y-adopcion-empresarial/`. 27,4% fuerza laboral expuesta a IA generativa (OCDE 2024). 21,1% empresas 10+ empleados usan IA (INE 1T 2025), duplicado en 2 años desde 12,4% en 2023. **Peor escenario del informe: 3,5 millones de empleos destruidos en 10 años** (bruta). Escenario central: 1,7 a 2,3 M; optimista: ~700K. Pérdida neta en escenario central ~400.000 empleos (2,0M destruidos − 1,61M creados); el informe no da cifra neta para el peor escenario. **Limitación verbatim del propio informe**: _"pueden estar expuestos a otras formas de automatización física no capturadas por el índice [AIOE]"_, es decir, la automatización robótica queda fuera de estas cifras. Profesiones más afectadas: técnicos científicos 45%, administrativos 21%, gerentes 8%.
- **WEF. Future of Jobs 2025**: `https://www.weforum.org/publications/the-future-of-jobs-report-2025/`. 92M empleos desplazados para 2030.
- **Challenger, Gray & Christmas**: 55.000 despidos atribuidos a IA en EE.UU. en 2025.

### Concentración de poder + asimetría

- **Mythos Glasswing partners**: 12 partners enumerados en el anuncio de Anthropic (incluye JPMorgan Chase, Cisco, Bank of America, Citigroup, Morgan Stanley, Mozilla).
- **OpenAI GPT-5.5 system card** (23 de abril de 2026): `https://openai.com/index/gpt-5-5-system-card/` · cobertura: `https://www.helpnetsecurity.com/2026/04/24/openai-gpt-5-5-cybersecurity-safeguards/`. Primer modelo OpenAI clasificado _"High capability"_ en Cybersecurity bajo Preparedness Framework.

---

## Beat 3. Cuando la IA se escapa del control

### Alignment fails

- **Ajedrez, o1-preview vs Stockfish**: Palisade Research (diciembre de 2024), `https://palisaderesearch.org/blog/specification-gaming-chess`.
- **o3 sabotaje del apagado**: Palisade Research (mayo de 2025), `https://palisaderesearch.org/blog/shutdown-resistance`. 79/100 sabotaje. Claude 3.7 + Gemini 2.5 obedecieron 100%.
- **OpenClaw. Summer Yue (Meta)**: Business Insider, `https://www.businessinsider.com/meta-ai-alignment-director-openclaw-email-deletion-2026-2`. Febrero de 2026.
- **ROME. Alibaba Cloud**: arXiv 2512.24873, `https://arxiv.org/pdf/2512.24873`. Túnel SSH inverso + minería cripto durante entrenamiento.
- **Anthropic Agentic Misalignment** (16 modelos, chantaje): `https://www.anthropic.com/research/agentic-misalignment`. Claude 96% / Gemini 96% / GPT-4.1 80% / Grok 80% / DeepSeek 79%. Prueba (6,5%) vs real (55%).

### IA militar

- **Detachment 201** (junio de 2025, EE.UU.): `https://www.army.mil/article/286317/`.
- **Claude / captura Maduro** (febrero de 2026): Axios, `https://www.axios.com/2026/02/13/anthropic-claude-maduro-raid-pentagon`.
- **Claude / ataques a Irán** (4 de marzo de 2026):
  - Washington Post: `https://www.washingtonpost.com/technology/2026/03/04/anthropic-ai-iran-campaign/`
  - CBS News: `https://www.cbsnews.com/news/anthropic-claude-ai-iran-war-u-s/`
  - The Hill: `https://thehill.com/policy/defense/5799136-claude-pentagon-iran-war/`
  - Anthropic threat report: `https://assets.anthropic.com/m/ec212e6566a0d47/original/Disrupting-the-first-reported-AI-orchestrated-cyber-espionage-campaign.pdf`
- **Manifiesto Palantir** (19 de abril de 2026): cuenta X de Palantir Technologies (~32 millones de vistas) + libro _The Technological Republic: Hard Power, Soft Belief, and the Future of the West_ (Alex Karp y Nicholas Zamiska, 2025), `https://techrepublicbook.com/`. Verbatim Karp: _"The question is not whether A.I. weapons will be built; it is who will build them and for what purpose."_ Argumentos: empresas tecnológicas estadounidenses deben construir armas de IA, servicio militar universal obligatorio, "algunas culturas son dañinas y regresivas". Cobertura T2 que etiqueta como "tecnofascismo": Al Jazeera (`https://www.aljazeera.com/news/2026/4/20/technofascism-critics-accuse-palantir-of-pushing-ai-war-doctrine`), Fortune (`https://fortune.com/2026/04/22/palantir-alex-karp-mini-manifesto-national-security-defense-tech-ai/`), TechCrunch (`https://techcrunch.com/2026/04/19/palantir-posts-mini-manifesto-denouncing-regressive-and-harmful-cultures/`), Engadget, Euronews, Reason, France 24, The Conversation.

- **Pentagon excluye Anthropic** (1 de mayo de 2026):
  - Defense News: `https://www.defensenews.com/news/pentagon-congress/2026/05/01/pentagon-freezes-out-anthropic-as-it-signs-deals-with-ai-rivals/`
  - CNN: `https://www.cnn.com/2026/05/01/tech/pentagon-ai-anthropic`
  - Wikipedia: `https://en.wikipedia.org/wiki/Anthropic%E2%80%93United_States_Department_of_Defense_dispute`
  - Anthropic se negó a la cláusula _"any lawful use"_; veto explícito a vigilancia masiva doméstica + armas autónomas; DoD designó "supply chain risk" en marzo; injunction concedida.

---

## Beat 4. Lo que dicen los que más saben

### Constructores

- **Sam Altman (2015)**: _"AI will probably most likely lead to the end of the world, but in the meantime, there'll be great companies."_ Entrevista 2015, ampliamente citada.
- **Larry Page → Elon Musk ("especista")**: Walter Isaacson, _Elon Musk_ (2023), Vanity Fair cobertura, Business Insider.
- **Ilya Sutskever**: _"the entire surface of the Earth covered in solar panels and datacenters"_. Entrevistas y declaraciones públicas 2024.

### Voces críticas

- **Stuart Russell. PauseCon Brussels (febrero de 2026)**: `https://pausecon.org/`. Verbatim: _"If AI companies succeed in building a superintelligence, most experts think the chance of human extinction is somewhere between 10 and 50 percent: that's the equivalent of playing Russian roulette with everyone on the planet."_ Libro: _Inteligencia Artificial: Un Enfoque Moderno_, Russell & Norvig.
- **Dario Amodei. _The Adolescence of Technology_**: `https://www.darioamodei.com/essay/the-adolescence-of-technology`. _"casi inimaginable... no está claro que tengamos la madurez"_; _"un país de genios en un centro de datos"_; bioarmas duplicadas.
- **Yoshua Bengio. International AI Safety Report 2026** (febrero de 2026): `https://internationalaisafetyreport.org/publication/international-ai-safety-report-2026` · `https://yoshuabengio.org/en/publication/international-ai-safety-report-2026`. Verbatim: _"The ball is in policymakers' hands."_ Presentación: `https://www.transformernews.ai/p/yoshua-bengio-the-ball-is-in-policymakers-international-ai-safety-report-cyber-risk-biorisk`. 100 expertos, 30 países.
- **Geoffrey Hinton**:
  - Discurso del Premio Nobel de Física 2024 (8 de diciembre de 2024): `https://www.nobelprize.org/prizes/physics/2024/hinton/lecture/`. _"There is an existential threat. We have no idea whether we'll be able to keep control."_
  - Entrevista CBC Ideas, _"Maternal instincts"_ (febrero de 2026): `https://www.cbc.ca/radio/ideas/geoffrey-hinton-maternal-instincts-9.7094116`. Verbatim: _"I think anybody who said that there's no way it'll lead to the extinction of humans just isn't facing reality."_ Y: _"probably less than one per cent of the researchers working on AI"_ están trabajando en el problema de control.
- **Yann LeCun**: declaraciones públicas (X). Fundador de AMI Labs ($3.500M).

### p(doom) y datos comparativos

- **Encuesta Grace et al. (2024). 2.778 investigadores**: `https://arxiv.org/abs/2401.02843`. Media 14% extinción próximos 100 años. 58% al menos 5%.
- **Comparación riesgos aceptables**: aviación civil ICAO/EASA · IAEA reactor safety standards (LERF).
- **AI Safety Index. Future of Life Institute** (Winter 2025): `https://futureoflife.org/ai-safety-index-winter-2025/`. Existential safety: D / D / D / F / F / F.
- **AI Safety Clock. IMD Business School Suiza**:
  - Lanzamiento sept 2024: `https://www.imd.org/centers/digital-ai-transformation-center/aisafetyclock/`
  - Mayor salto histórico marzo 2026: `https://www.imd.org/ibyimd/artificial-intelligence/imd-ai-safety-clock-makes-biggest-leap-yet-amid-weaponization-and-rise-of-agentic-ai/`
  - 16 de marzo de 2026: 20 minutos a medianoche. Drivers: agentic AI mainstream + weaponization + embodied robots militares.

---

## Beat 5. Qué podemos hacer

### "China gana"

- **DeepSeek V4** (24 de abril de 2026):
  - CNN: `https://www.cnn.com/2026/04/24/tech/chinas-ai-deepseek-v4-intl-hnk`
  - Al Jazeera: `https://www.aljazeera.com/economy/2026/4/24/chinas-deepseek-unveils-latest-model-a-year-after-upending-global-tech`
  - Fortune: `https://fortune.com/2026/04/24/deepseek-v4-ai-model-price-performance-china-open-source/`
  - 1,6 T parámetros, 1 M tokens contexto, open source. Iguala Claude Opus 4.6 / GPT-5.4 / Gemini 3.1.
- **China. Plan de Gobernanza Global de IA** (julio de 2025): `https://www.fmprc.gov.cn/mfa_eng/xw/zyxw/202507/t20250729_11679232.html`. _Nature_: _"China is leading the world in AI governance."_

### Tratados precedente

- **No Proliferación Nuclear (1968)**: ONU, `https://www.un.org/disarmament/wmd/nuclear/npt/`. 191 estados parte.
- **Convención Armas Biológicas (1975)**: ONU, `https://disarmament.unoda.org/en/our-work/weapons-mass-destruction/biological-weapons/biological-weapons-convention`.
- **Declaración ONU Clonación Humana (2005)**: `https://press.un.org/en/2005/ga10333.doc.htm`.
- **Protocolo de Montreal (1987)**: UNEP, `https://www.unep.org/ozonaction/who-we-are/about-montreal-protocol`. 198 países, 99% sustancias eliminadas.
- **Convención Armas Químicas (1993)**: OPCW, `https://www.opcw.org/chemical-weapons-convention`. 193 países, 72.000+ toneladas destruidas.

### Grietas en el muro

- **Davos 2026** (Amodei + Hassabis, "podemos resolverlo entre Demis y yo"): cobertura Bloomberg / FT / WSJ Davos enero de 2026.
- **Sanders + Ocasio-Cortez. AI Data Center Moratorium Act** (25 de marzo de 2026):
  - Press release oficial Senado: `https://www.sanders.senate.gov/press-releases/news-sanders-ocasio-cortez-announce-ai-data-center-moratorium-act/`
  - PBS NewsHour: `https://www.pbs.org/newshour/politics/ocasio-cortez-and-sanders-push-bill-to-impose-ai-data-center-moratorium`
  - Axios: `https://www.axios.com/2026/03/25/sanders-aoc-data-center-moratorium-bill`
  - Verbatim Sanders: _"a reasonable pause to the development of AI to ensure the safety of humanity."_
- **Cámara de los Lores UK** (enero de 2026): `https://lordslibrary.parliament.uk/superintelligent-ai-should-its-development-be-stopped/`. Debate formal sobre moratoria a la superinteligencia.

### PauseAI

- **PauseAI España**: `https://pauseai.es`
- **PauseAI internacional**: `https://pauseai.info`
- **PauseCon**: `https://pausecon.org/`
- **Statement de moratoria**: `https://pauseai.info/statement`
- **Superintelligence statement** (Hinton, Bengio, Russell + 70K firmas): `https://superintelligence-statement.org`
- **Human statement** (500+ organizaciones): `https://humanstatement.org`

### Comunicado PauseAI sobre el ataque a Sam Altman (abril de 2026)

> _"PauseAI condemns unequivocally all forms of violence, intimidation and harassment."_

`https://pauseai.info/statement-sam-altman-attack-2026` · cobertura: Fortune (`https://fortune.com/2026/04/15/pause-ai-and-stop-ai-meet-the-anti-ai-groups-facing-questions-after-the-attack-on-sam-altman/`), CNN (`https://www.cnn.com/2026/04/17/tech/anti-ai-attack-sam-altman`).

---

## Notas sobre verificación

Esta charla se ha construido siguiendo una metodología de _per-claim source tracking_: cada cifra y cada cita verbatim que aparece en slides está respaldada por una fuente primaria (T1) o periodismo de referencia (T2). Para más detalle, los archivos `research/sources.md`, `research/quotes.md` y `research/claims.md` del repositorio mantienen el registro completo, incluyendo nivel de confianza y contraevidencia revisada.

**Repositorio**: `https://github.com/[pendiente]`

**Contacto**: Dani Lupión, PauseAI España.
