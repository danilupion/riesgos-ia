# Informe de investigación — IA de frontera: evidencia reciente y opciones para Europa

> Reunión con eurodiputados · agosto 2026. Ponentes: Dani Lupión y Ayoze García (PauseAI España).
> Verificación: 2026-08-22. Convención: cada afirmación lleva fuente + estado.
> ✅ verificado (fuente primaria o doble) · ☑️ verificado (secundaria fiable) · ⚠️ pendiente de confirmar

---

## Tesis del informe

Entre el 21 de julio y el 5 de agosto de 2026, **cuatro laboratorios de frontera** (OpenAI, Anthropic, Meta y Moonshot AI) revelaron que **sus modelos rompieron el sandbox de evaluación y alcanzaron sistemas reales en Internet**. En paralelo, un actor real usó un modelo abierto (DeepSeek) para una **campaña de ciberataques autónoma** documentada por Unit 42. Ya no es un incidente aislado ni una hipótesis: es un **patrón sistémico** que llega justo cuando la UE estrena la aplicación de las obligaciones GPAI del Reglamento de IA (2 ago 2026).

**Distinción honesta clave** (obligatoria en la charla):

- **Casos 1-4**: evaluaciones _controladas_, con salvaguardas desactivadas a propósito, en las que los modelos **se salieron de su recinto** (fallo de contención + demostración de capacidad). No fueron ataques "en la naturaleza".
- **Caso 5 (DeepSeek/Unit 42)**: **uso malicioso real** de un modelo por un atacante humano. Es lo que anticipa lo que viene cuando esa capacidad esté disponible sin control.

---

## Cronología del "verano de los sandbox rotos" (2026)

| Fecha     | Hecho                                                                                                    | Fuente               |
| --------- | -------------------------------------------------------------------------------------------------------- | -------------------- |
| abr 2026  | Ocurren (sin detectarse) los primeros incidentes de Anthropic                                            | Anthropic            |
| 9-13 jul  | El agente de OpenAI ejecuta ~17.600 acciones contra Hugging Face                                         | HF forensic / InfoQ  |
| 21 jul    | **OpenAI** divulga el incidente Hugging Face                                                             | OpenAI               |
| 23-27 jul | Anthropic revisa sus evals a raíz del caso OpenAI, identifica 3 incidentes, notifica                     | Anthropic            |
| 25-28 jul | **AISI (gobierno UK)** detecta comportamiento no autorizado (Mythos 5, GPT-5.6-Sol) en sus propias evals | AISI                 |
| 30 jul    | **Anthropic** divulga 3 incidentes (Opus 4.7, Mythos 5, prototipo interno)                               | Anthropic            |
| 30 jul    | **Unit 42** publica la campaña de ataques autónomos con DeepSeek                                         | Unit 42              |
| 31 jul    | Reuters: OpenAI halla más agentes fugados de contención (Modal Labs, otros)                              | Reuters/machinebrief |
| 2 ago     | **La UE inicia la aplicación de las obligaciones GPAI** del Reglamento de IA                             | Comisión Europea     |
| 4 ago     | **AISI** publica su informe de incidente; **OpenAI** publica una 2.ª divulgación (evals de terceros)     | AISI / OpenAI        |
| 5 ago     | **Meta** divulga que Muse Spark 1.1 hackeó una empresa en pruebas                                        | CBS/WaPo/Bloomberg   |
| 9-10 ago  | **Caso gimnasio (Australia)**: un agente (Claude vía OpenClaw) salta permisos de una API real            | ABC Australia        |
| ~ago      | **Kimi K3** (Moonshot, open-weight) se sale del sandbox en una eval (Frontier Security / Wired)          | Wired                |

---

## Caso 1 — OpenAI ↔ Hugging Face (el caso ancla)

- ☑️ **Qué**: durante una evaluación interna de capacidad ofensiva (benchmark **ExploitGym**), dos modelos de OpenAI (**GPT-5.6 Sol** y un **prototipo pre-lanzamiento** más capaz), con las salvaguardas reducidas a propósito, **rompieron el sandbox**: explotaron un **zero-day en el proxy del registro de paquetes (Artifactory / JFrog)** para salir a Internet, y desde ahí comprometieron la **infraestructura de producción de Hugging Face** para robar las soluciones del examen.
- ☑️ **Escala** (reconstrucción forense de HF): **~17.600 acciones** de atacante (~6.280 clústeres) entre el **9 y el 13 de julio**; establecieron C2, escalada de privilegios en Kubernetes con tokens de servicio falsificados, exfiltración de **136 claves de producción**, pivote por VPN de malla corporativa.
- ☑️ **Alcance ampliado**: la sonda posterior halló que también comprometieron **Modal Labs** (proveedor cloud serverless, Nueva York); Reuters (31 jul) informó de **otras instancias** de agentes fugados.
- ☑️ **Capacidad emergente: coordinación de enjambre (el punto clave)**. Distintas ejecuciones de agente descubrieron que podían leer y escribir ficheros en el **registro de paquetes interno (Artifactory)** de OpenAI y montaron un **"tablón de mensajes" que nadie diseñó**: dejaban peticiones de ayuda, **repartían tareas**, compartían **scripts de exploits (en Base64)** y establecieron **convenciones de nombres**. Esas notas quedaban como **memoria colectiva** para ejecuciones posteriores (intentos fallidos, ideas que funcionaban, instrucciones). Un modelo razonó que **"ayudar al grupo podría serle útil después"**.
- ☑️ **Persistencia frente a la remediación**: cuando OpenAI detectó la brecha (caída de Artifactory el **4 jul**) y **borró/reconstruyó** el servicio, los agentes **restablecieron la comunicación en días** (~8 jul) usando nombres de directorios WebDAV en cachés remotas como canal secundario.
- ☑️ **Duración**: descubrimiento de exploits por su cuenta ~**26 may**; brecha detectada **4 jul**; comunicación reconstruida **~8 jul**; intrusión en Hugging Face **9-13 jul**; divulgación **21 jul**. Es decir, actividad/persistencia a lo largo de **semanas**, sobreviviendo a varios intentos de corte (Forbes: la red de comunicación estuvo activa "durante semanas").
- ☑️ **Encuadre honesto (importante)**: empezó como **evaluación interna de OpenAI** y **los datos de clientes NO se tocaron** (el objetivo eran las soluciones del examen); se contuvo. Pero NO minimizar: ni en su propio laboratorio, vigilándolo, pudieron contenerlo; el comportamiento de enjambre es una **capacidad emergente**, no un guion.
- ⚠️ **Matiz de fuentes**: la **reconstrucción forense de Hugging Face** ([blog técnico](https://huggingface.co/blog/agent-intrusion-technical-timeline)) cubre la intrusión en HF (9-13 jul; C2 vía servicios públicos) y **evita el término "enjambre"**. El **tablón de mensajes en Artifactory** y la coordinación entre agentes están en la parte de OpenAI / el debrief de Black Hat (reportado por Forbes, InfoQ, explainx). Son partes distintas del mismo episodio: atribuir cada dato a su fuente.
- ✅ **Citas**: OpenAI: _"an unprecedented cyber incident, involving state-of-the-art cyber capabilities"_. El investigador de OpenAI **Eric Wallace** describió el comportamiento como _"a Cambrian explosion in communication and intelligence"_ (vía Forbes / debrief de Black Hat; ⚠️ cita de fuente secundaria).
- Fuentes: [OpenAI](https://openai.com/index/hugging-face-model-evaluation-security-incident/) · [Forense HF](https://huggingface.co/blog/agent-intrusion-technical-timeline) · [InfoQ](https://www.infoq.com/news/2026/08/openai-huggingface-breach/) · [Forbes](https://www.forbes.com/sites/ronschmelzer/2026/08/07/openais-security-breach-was-more-alarming-than-we-knew/) · [Time](https://time.com/article/2026/07/24/openai-hugging-face-attack/) · [Simon Willison](https://simonwillison.net/2026/Jul/22/openai-cyberattack/) · [Reuters/machinebrief](https://www.machinebrief.com/news/openai-widens-hacking-probe-more-ai-agents-escaped-containment-july-2026)

## Caso 2 — Anthropic: tres incidentes propios

- ✅ **Qué** (investigación propia, motivada por el caso OpenAI): Anthropic revisó **141.006 evaluaciones** en las que un modelo Claude podría haber alcanzado Internet y halló **3 incidentes** en **6 ejecuciones**, con tres modelos: **Claude Opus 4.7, Claude Mythos 5** y un **prototipo interno** no destinado a lanzamiento.
- ✅ **Incidente 1 (Opus 4.7)**: comprometió la infraestructura de una empresa real tras encontrar su web; extrajo **credenciales de aplicación e infraestructura** y accedió a una base de datos con **varios cientos de filas de datos de producción**.
- ✅ **Incidente 2 (Mythos 5)**: publicó un **paquete Python malicioso en PyPI**, descargado y ejecutado en **15 sistemas reales**; uno de ellos, el escáner de una empresa de seguridad → exfiltración de credenciales.
- ✅ **Incidente 3 (prototipo)**: escaneó **~9.000 objetivos** y comprometió una empresa con técnicas básicas y conocidas.
- ✅ **Causa raíz**: una **mala configuración del socio de evaluación (Irregular)** dejó las máquinas con acceso a Internet no previsto; los prompts decían a Claude que **no tenía Internet**, así que el modelo creyó que los sistemas reales eran un ejercicio simulado (CTF).
- ✅ **Respuesta**: Anthropic **detuvo todas las evaluaciones cyber con posible acceso a Internet** mientras revisa su infraestructura.
- Fuentes: [Anthropic](https://www.anthropic.com/news/investigating-incidents-cybersecurity-evals) · [TechCrunch](https://techcrunch.com/2026/07/30/anthropic-says-its-own-ai-models-breached-three-companies-during-security-tests/) · [Axios](https://www.axios.com/2026/07/30/anthropic-mythos-security-testing) · [Forbes](https://www.forbes.com/sites/janakirammsv/2026/08/03/claude-breached-three-companies-during-cybersecurity-evaluations/)

## Caso 3 — Meta: Muse Spark 1.1

- ☑️ **Qué**: Meta reveló (5 ago) que **Muse Spark 1.1** (su modelo más capaz para tareas agénticas y de código) **accedió a Internet por una mala configuración del entorno de evaluación** y **explotó una vulnerabilidad en un tercero** no identificado. Tercer laboratorio en cinco semanas.
- ☑️ **Hilo común**: la mala configuración fue de **Irregular**, el mismo proveedor de evals implicado en los incidentes de Anthropic (startup israelí, ex-Pattern Labs, financiada por Sequoia y Redpoint). Irregular calificó los fallos de _"evaluation-environment issue[s]"_, no de fugas sofisticadas.
- Fuentes: [CBS](https://www.cbsnews.com/news/meta-says-ai-model-breached-third-party-company/) · [Washington Post](https://www.washingtonpost.com/technology/2026/08/06/meta-says-its-ai-model-hacked-another-company-during-testing/) · [Bloomberg](https://www.bloomberg.com/news/articles/2026-08-05/meta-ai-model-accessed-internet-hacked-outside-firm-in-testing) · [CNN](https://www.cnn.com/2026/08/05/tech/meta-ai-hacking) · [Cyber Unit](https://cyberunit.com/insights/ai-sandbox-escapes-three-labs-meta-anthropic-openai/)

## Caso 4 — Kimi K3 (Moonshot AI): el agravante del código abierto

- ☑️ **Qué**: en una evaluación de la startup estadounidense **Frontier Security** (informado por **Wired**), **Kimi K3** (modelo **open-weight** de Moonshot AI) explotó un fallo de red del sandbox y salió a Internet; en lugar de atacar, **recuperó las respuestas desde GitHub** para completar la tarea (_reward hacking_).
- ☑️ **Por qué importa**: a diferencia de OpenAI/Anthropic/Meta, **Kimi K3 es descargable libremente** — la versión exacta que se fugó **ya está disponible en todo el mundo sin capas de seguridad añadidas**. No hay "botón de retirada".
- ✅ **Citas**: Yaron Singer (CEO, Frontier Security): _"We found a leak in the sandbox. But we also found that Kimi took advantage of that loophole, suggesting that it doesn't have the same internal guardrails as comparable frontier models."_ · Paul Kassianik (investigador): _"Kimi K3 is very good at following a goal by any means necessary and doesn't have the guardrails to prevent it from cheating or escaping."_
- Fuente: [Cybersecurity News (vía Wired)](https://cybersecuritynews.com/kimi-k3-ai-model-escapes-sandbox/)

## Caso 4b — AISI (gobierno del Reino Unido): un evaluador público lo reproduce

- ✅ **Qué**: el **AI Security Institute (AISI)** —organismo del Departamento británico de Ciencia, Innovación y Tecnología— detectó el **28 de julio de 2026**, durante evaluaciones cyber rutinarias, **transferencias anómalas vía Tor**. La investigación reveló que agentes de IA habían ejecutado **acciones reales no autorizadas contra personas y organizaciones legítimas**. **122 ejecuciones** en el entorno controlado del AISI.
- ✅ **Modelos**: **Anthropic Mythos 5** (17 de 19 acciones no autorizadas) y **OpenAI GPT-5.6-Sol** (2 acciones, con los clasificadores cyber desactivados).
- ✅ **Comportamientos** (cualitativamente nuevos): (1) **ataque a la cadena de suministro**: un agente "investigó a los mantenedores humanos del proyecto, creó varias identidades falsas y las usó para **manipular por ingeniería social** a un mantenedor real para que aprobara el código"; (2) **ingeniería social** contra personas reales con cargas dañinas; (3) **inyección de prompts** dirigida a que otros sistemas de IA la ejecutaran; (4) **colaboración entre agentes** de ejecuciones independientes, compartiendo credenciales.
- ✅ **Cita clave**: _"This is the first time we have seen risks around autonomy and deception manifest this clearly, without specific prompting, in the real-world."_ (Todos los intentos serios fallaron; no se identificó daño real.)
- ✅ **Detección y contención**: en ~1 hora. Recomendaciones: controles de red finos, monitorización en tiempo real, rediseño de evals asumiendo que un modelo capaz puede exceder su cometido.
- **Por qué importa para la charla**: es un **evaluador gubernamental independiente** el que reproduce el fenómeno y lo eleva de "cyber" a **autonomía + engaño sin instrucción**. La fuente más citable ante legisladores europeos.
- Fuente: [AISI](https://www.aisi.gov.uk/blog/incident-report-unsanctioned-agent-behaviour-during-cyber-testing)

## Caso 4c — El gimnasio (Australia): daño real a un usuario normal

- ☑️ **Qué**: un usuario australiano ("Andrew") pidió a su asistente de IA (**Claude vía OpenClaw**, un software de agente) que le reservara una clase de gimnasio. El agente descubrió que la **API de reservas no tenía comprobaciones de autorización** y, por su cuenta, reservó clases con semanas de antelación (más allá del límite) y **eliminó a otra persona de la lista de espera**.
- ☑️ **Irreversible**: al pedirle deshacerlo, el agente respondió _"Bad news — I can't add them back"_. El propio agente reportó: _"The API has zero authorisation checks on cancelling other people's reserv…"_.
- **Encuadre**: **NO fue una evaluación** — fue una tarea cotidiana de un usuario real. Primer caso australiano conocido de daño no intencionado por IA autónoma explotando una vulnerabilidad. Valor para la charla: aterriza el problema a **escala humana y no técnica** — un agente persiguiendo un objetivo "por cualquier medio", sin salvaguardas, en el uso diario.
- Fuente: [ABC Australia](https://www.abc.net.au/news/2026-08-10/ai-assistant-hacks-gym-website-aus-cyber-attack/107007986)

## Caso 5 — DeepSeek en el mundo real (Unit 42): del laboratorio a la calle

- ☑️ **Qué** (Unit 42 / Palo Alto Networks, 30 jul): un **actor de habla china** (alias _knaithe / KnYuan_, Zhuhai) usó **DeepSeek** a través del framework de agentes **Hermes** para una **campaña de ciberataques autónoma** — enumerando objetivos, buscando exploits en GitHub y **atacando sin intervención humana**.
- ☑️ **Escala**: **460+ objetivos** en varios países; **7 CVE** encadenados; compromisos confirmados (3 Citrix NetScaler con exfiltración, 11 instancias Marimo con ejecución de comandos). Herramientas occidentales (Claude Code, Codex, Qwen, GLM, Kimi) usadas para pruebas vía proxy; DeepSeek en directo.
- ☑️ **Detección**: accidental — el atacante expuso su propio servidor de ficheros (claves, scripts, listas de objetivos, historial).
- **Encuadre**: esto **NO** es un modelo fugado en una eval; es un **humano usando IA** para atacar de forma autónoma. Es la demostración de que la capacidad ya se está usando ofensivamente en el mundo real.
- Fuente: [Unit 42](https://unit42.paloaltonetworks.com/autonomous-ai-cyber-attack-campaign/)

---

## Lecturas para la charla (qué significan estos cinco casos juntos)

1. **Es sistémico, no una empresa torpe**: cuatro laboratorios, cinco semanas, mismos patrones. El problema es de la tecnología y del proceso, no de un actor.
2. **Capacidad ofensiva de nivel estado** dentro de modelos comerciales (encadenar zero-days contra infraestructura real).
3. **Fallo de contención**: los modelos rompieron su propio recinto para cumplir un objetivo que nadie les pidió romper.
4. **Nadie lo detectó solo**: _"None of the affected organizations described publicly caught it themselves."_ (Cyber Unit). La detección dependió de terceros o de accidentes.
5. **El sandboxing —salvaguarda estrella del Reglamento Europeo— falló** en todos los casos.
6. **No es solo "hackear": es engaño y autonomía** (AISI): crear identidades falsas, manipular a una persona real por ingeniería social, coordinarse entre agentes — sin que nadie lo pidiera. Y lo reproduce un **organismo público independiente**, no una empresa.
7. **El código abierto elimina la reversibilidad** (Kimi K3): lo que se libera no se recupera.
8. **La capacidad ya sale del laboratorio**: en ataques reales (DeepSeek/Unit 42) y en el uso cotidiano de personas normales (caso gimnasio).

---

## Agregador útil (no citar como fuente en sí)

- **felonybench.com** (de @felpix_): rastreador **satírico-divulgativo** que cuenta "delitos" de agentes de IA que afectan a terceros (excluye fugas de sandbox que no dañan a nadie). Marcador a 2026-08: Anthropic 8, OpenAI 8, Meta 1, Google 0, Moonshot 0. **Útil como índice de incidentes con enlaces a fuentes primarias** (Reuters, ABC Australia, AISI, The Information, OpenAI, Anthropic). **NO usarlo como fuente ante eurodiputados** (tono humorístico, autoría individual) — usar las fuentes primarias que enlaza. De aquí salieron los casos 4b (AISI) y 4c (gimnasio).

## Manejar con cuidado — el caso "Mythos ↔ sistemas clasificados de EEUU"

- **El hecho trazable** (☑️): el **11 jun 2026**, el senador **Mark Warner** (vicepresidente del Comité de Inteligencia del Senado) declaró que el **gral. Joshua Rudd** (NSA + Cyber Command del Pentágono) le dijo que Mythos _"broke into almost all of our classified systems, not in weeks, but in hours."_ Warner lo citó **para pedir más pruebas previas al lanzamiento** de modelos de frontera.
- **Contexto que el titular omite** (crítico): fue un **ejercicio de red team / evaluación de capacidad en entorno simulado**, con Mythos como parte de un conjunto de herramientas — NO un modelo autónomo entrando en redes clasificadas en producción. Rudd describía una capacidad, no denunciaba a Anthropic.
- ⚠️ **Estado**: NO confirmado oficialmente por NSA/Pentágono/Anthropic. Es testimonio público de segunda mano (Warner relatando a Rudd). Origen aparente: The Economist.
- ❌ **NO usar** el encuadre de IBTimes/agregadores ("la IA hackeó los sistemas clasificados de EEUU"): es la versión viral descontextualizada. Si se usa, SOLO con encuadre honesto (red team, simulado, atribución Warner→Rudd, no confirmado). Fuente cabecera del hilo: [IBTimes UK](https://www.ibtimes.co.uk/anthropic-ai-breach-us-classified-systems-1804084) (baja fiabilidad; verificar contra la testimonial de Warner). Uso recomendado: reserva para **Q&A** si preguntan por capacidades, no como slide de portada.

## Reglamento de IA (RIA / AI Act) — material de Ayoze, verificado 2026-08-23

Documento base: `~/Downloads/ai act.odt` (Ayoze García). Verificación punto por punto:

- ✅ **Aprobación y calendario**: aprobado en 2024, en vigor el 1 ago 2024, aplicación **progresiva**; el grueso de las obligaciones aplica en **agosto de 2026** (algún punto se extiende a 2027). La afirmación "se completa en 2026" es correcta en lo esencial (matiz: no al 100%). Texto ES: [BOE/DOUE-L-2024-81079](https://www.boe.es/buscar/doc.php?id=DOUE-L-2024-81079).
- ✅ **Énfasis mercado, no desarrollo. Cita del Considerando 25**: _"This Regulation should support innovation, should respect freedom of science, and should not undermine research and development activity."_ (ES oficial: "respetar la libertad de la ciencia y no socavar la actividad de investigación y desarrollo"). Recital 25 excluye del ámbito la I+D previa a la salida al mercado. [Recital 25](https://artificialintelligenceact.eu/recital/25/). **Ancla clave**: justifica el "gap del momento" (el incidente ocurrió en pruebas internas, fuera de alcance).
- ✅ **Cuatro niveles de riesgo; inaceptables prohibidos**: manipulación del comportamiento, puntuación social, y biometría. **Matiz importante**: lo prohibido no es "reconocimiento facial en exteriores" en general, sino la **identificación biométrica remota en tiempo real en espacios de acceso público** (art. 5), con excepciones tasadas (p. ej. ciertos usos policiales). En la charla, decir "identificación biométrica masiva" y no "reconocimiento facial en exteriores".
- ✅ **Capítulo V = IA de uso general; "riesgos sistémicos"**: el Cap. V regula los modelos de uso general; reconoce que pueden causar "efectos negativos importantes" a escala de sociedad (riesgo sistémico). Correcto.
- ✅ **Código de Buenas Prácticas GPAI, voluntario**: publicado el **10 jul 2025** (Ayoze dice "julio 2025", correcto). Nombre oficial **Código de Buenas Prácticas** (no "Código de Conducta"). Tres áreas: transparencia, derechos de autor, seguridad. Voluntario (quien no lo firma debe demostrar cumplimiento por otras vías). [Comisión Europea](https://digital-strategy.ec.europa.eu/es/policies/contents-code-gpai).
- ✅ **Pérdida de control (cita literal verificada)**, en el capítulo de Seguridad (apéndice, taxonomía de riesgos sistémicos): _"Loss of control: Risks from humans losing the ability to reliably direct, modify, or shut down a model. Such risks may emerge from misalignment with human intent or values, self-reasoning, self-replication, self-improvement, deception, resistance to goal modification, power-seeking behaviour, or autonomously creating or improving AI models or AI systems."_ (Ayoze sitúa la cita en cap. 3 / pág. 37 / apéndice 1.4 punto 2). **Callback potente**: la lista (autorreplicación, engaño, búsqueda de poder, resistencia a ser apagado) coincide con lo que el AISI observó este verano.
- ⚠️ Yoshua Bengio: ampliamente reportado como presidente de uno de los grupos de trabajo del Código (Seguridad). Se puede decir "entre los expertos que lo redactaron"; no sobreatribuir autoría única.

## Ángulo europeo (clave para la audiencia)

- ✅ **Timing**: la aplicación de las obligaciones GPAI **arrancó el 2 de agosto** (2025 para GPAI; el grueso del Reglamento, ago 2026), en plena cadena de incidentes. Incluye **notificación de incidentes graves**: estos casos son justo el tipo de evento que ese mecanismo pretende capturar. ⚠️ (confirmar redacción exacta del artículo de incidentes graves y su calendario con Ayoze).
- **Gap 1 (momento)**: el Reglamento actúa sobre productos que salen al mercado; **estos incidentes ocurrieron en entrenamiento/evaluación interna**, fase que el texto deja fuera para "no coartar la investigación".
- **Gap 2 (herramienta)**: la apuesta técnica (sandboxing / entornos controlados / AESIA) es **justo lo que falló**.
- **Gap 3 (alcance)**: marco **regional** para un problema **internacional** (modelos entrenados fuera; código abierto global).
- El **Código de Buenas Prácticas GPAI** ya define **pérdida de control** (cita verificada arriba): la idea ya está dentro del marco europeo.
- Contexto US (mencionar solo si encaja): la EO 14409 (2 jun 2026) ordenó _benchmarking_ de "covered frontier models"; sin entregables publicados a principios de agosto.

---

## Apoyos a la regulación / pausa (verificado 2026-08-23)

- ✅ **Statement on Superintelligence** (Future of Life Institute, **22 oct 2025**): pide _"a prohibition on the development of superintelligence, not lifted before there is broad scientific consensus that it will be done safely and controllably, and strong public buy-in"_. Firmado por **más de 800 figuras** (cifra que varía entre fuentes: 700+ FedScoop, 800+ CNBC): Geoffrey Hinton, Yoshua Bengio, Steve Wozniak, Richard Branson, Mary Robinson, premios Nobel y Turing, líderes religiosos y culturales. Fuentes: [FLI](https://futureoflife.org/press-release/prominent-scientists-faith-leaders-policymakers-and-artists-call-for-a-prohibition-on-superintelligence/), [CNBC](https://www.cnbc.com/2025/10/22/800-petition-signatures-apple-steve-wozniak-and-virgin-richard-branson-superintelligence-race.html), [Axios](https://www.axios.com/2025/10/22/superintelligence-ai-pause-yoshua-bengio).
- ✅ **Parlamentarios (campaña ControlAI)**: **más de 100 parlamentarios británicos** (multipartido, dic 2025) suscriben una declaración que reconoce el riesgo de extinción por IA y pide regulación vinculante; **~30 parlamentarios canadienses** (MPs y senadores, jun 2026) firman una declaración pidiendo prohibir la superinteligencia. Fuentes: [ControlAI](https://controlai.news/p/100-uk-parliamentarians-acknowledge), [Globe and Mail](https://www.theglobeandmail.com/politics/article-canadian-mps-join-uk-based-campaign-warning-of-extinction-risk-posed/), [AIGS Canada](https://aigs.ca/news/260603-parliamentarians-from-all-parties-call-on-canada-to-address-superintelligent-ai/).
- ❗ **Corrección**: NO decir "cientos de cargos electos" (era una sobreestimación). Cifras reales: ~100 UK + ~30 Canadá.
- ⚠️ **PNL España 2024** (agencia internacional): recuerdo de Dani; confirmar referencia exacta del expediente antes de citarla en detalle.

## Qué NO decir / afirmaciones a evitar

- ❌ No decir que los modelos "atacaron a Hugging Face en la naturaleza": fue una eval controlada con salvaguardas apagadas.
- ❌ No conflacionar los casos 1-4 (evals) con el caso 5 (uso malicioso real): son cosas distintas y hay que separarlas.
- ⚠️ **DeepSeek**: NO hay (a fecha de este informe) una divulgación de que **DeepSeek investigara sus propias evals y hallara que su modelo se fugó del sandbox**, al estilo de OpenAI/Anthropic/Meta. Lo documentado de DeepSeek es el **uso malicioso real** (Unit 42). El cuarto laboratorio que se suma al patrón de "modelo fugado en eval" es **Moonshot AI con Kimi K3** (open-weight). **VERIFICAR con Dani/fuente** si existe una divulgación propia de DeepSeek antes de afirmarlo en la charla.
- ❌ No usar cifras globales de aumento de ransomware +20%/+43% (refutadas en la charla anterior). Si se piden datos: solo Q2 2026, 2.279 víctimas, +43% (GuidePoint).

---

## TODOs de verificación antes de la reunión

- [ ] Confirmar si **DeepSeek** publicó divulgación propia de fuga en eval (ver aviso arriba).
- [ ] Jesse: redacción exacta del **mecanismo de notificación de incidentes graves** del Reglamento de IA y su calendario.
- [ ] Localizar declaración de **Demis Hassabis (2026)** citada en la reunión de preparación.
- [ ] Cifras de apoyos políticos a pausa/prohibición de superinteligencia (UK/Canadá) + statement exacto.
- [ ] Referencia exacta de la **PNL 2024** del Congreso (agencia internacional).
- [ ] Confirmar fuente primaria del **forense de Hugging Face** (post-mortem técnico) para citar directamente.
