# Crossover — filosofía y AI safety para «¿la era del control estatal de la IA de frontera?»

> **Fecha**: 2026-07-18 · **Estado**: pendiente de validación de Dani (en paralelo a la validación de `informe.md`).
>
> **Método**: los hechos verificados de `informe.md` (67 ✅/☑️, 11 ❌) se conectan con los marcos conceptuales de los cursos BlueDot en `/Volumes/ExternalStorage/Workspace/aisafety-courses/courses/bluedot/` — `agi-strategy` (unidades 1-5 + wiki) y `technical-ai-safety` (unidades 1-6). **Toda cita literal en inglés está verificada con `grep` contra el archivo fuente**; se referencia con la ruta relativa al curso. Los hechos se citan por sección del informe sin repetir fuentes ni ascender su estado de verificación.
>
> **Nota estructural importante**: el curso `technical-ai-safety` está ambientado en el mismo universo 2026 de la charla. Contiene la system card de Mythos Preview, la directiva estatal de suspensión de Fable 5/Mythos 5 (en los pies de la RSP v3 y del Long-Term Benefit Trust: _"The US government has issued an export control directive to suspend all access to Fable 5 and Mythos 5"_), e incluso lista como ejemplo de contribución una charla sobre «Anthropic's Mythos and Glasswing work» (`technical-ai-safety/06-start-contributing/03-create-your-1-pager/02-create-your-1-pager.md`). El material del curso funciona por tanto como **fuente primaria del universo de la charla**, además de como marco conceptual.

## 0. El dispositivo organizador: situar 2026 en el mapa estratégico

BlueDot organiza el espacio de estrategias frente a la AGI en **tres campos** (`agi-strategy/04-defence-in-depth/01-what-might-success-look-like/00-intro.md`):

1. **Control gubernamental de la AGI** — _"centralising control over compute and frontier AI model weights into a small number of Government-backed 'AGI Projects'"_.
2. **Entregar el problema a una superinteligencia alineada** (ventaja estratégica decisiva).
3. **Construir defensas y difundir la AGI** (d/acc, aceleración diferencial defensiva).

El informe IAPS de las **nueve visiones estratégicas** (`agi-strategy/04-defence-in-depth/01-what-might-success-look-like/01-strategic-visions-in-ai-governance.md`) refina el campo 1 en un eje privado↔estatal × distribuido↔centralizado, desde «regulación doméstica de EE.UU.» hasta «regulador global coordinado (_IAEA for AI_)». Su crux textual es la pregunta de fondo de toda la charla:

> _"Which is more concerning: power concentration from centralized AI development, or corner-cutting on safety from race dynamics in distributed AI development?"_

**Tesis del crossover**: lo ocurrido entre marzo y julio de 2026 (informe: resumen ejecutivo y cronología) es el **campo 1 ejecutado ad hoc** — EE.UU. decidió de facto quién accede a la frontera — pero **sin ninguno de los mecanismos que sus propios proponentes consideran esenciales**: sin marco legal (orden ejecutiva "voluntaria" que Dean Ball describe como licencias de facto), sin verificación internacional, sin legitimidad multilateral, y con eficacia dudosa contra pesos abiertos. La charla no discute _si_ hay control estatal (lo hay), sino _qué tipo_ de control es, y lo contrasta con el que PauseAI pide.

---

## 1. Acceso escalonado: Fable público, Mythos para «organizaciones aprobadas»

**Hechos** (informe: Pilar 1, Pilar 2): mismo modelo, distinto acceso; Glasswing como registro de aprobados «en consulta con el gobierno»; GPT-5.6 con puerta de 12 días y ~20 organizaciones examinadas «at the behest of the U.S. government».

**Conceptos AI safety**:

- El paper de **AI-enabled coups** (Forethought) describía el patrón antes de que ocurriera, como práctica _interna_ de los labs (`agi-strategy/03-pathways-to-harm/01-map-the-threat-landscape/05-ai-enabled-coups-how-a-small-group-could-use-ai-to-seize-power.md`): _"employees get access to 'helpful-only' models with few safety guardrails, and after some months, the public gets access to more restricted versions"_. 2026 estataliza ese gradiente: ya no es empleados vs. público, sino organizaciones-aprobadas-por-el-gobierno vs. resto del mundo. La system card de Mythos Preview lo confirma en el canon: existe una variante _"'helpful only'… which does not include any safeguards"_ (`technical-ai-safety/03-detecting-danger/03-option-1-anthropic/03-system-card-mythos-preview.md`).
- Los propios labs **propusieron** esta arquitectura en 2023: _Governance of Superintelligence_ (Altman/Brockman/Sutskever) pedía que _"any effort above a certain capability threshold will need to be subject to an international authority"_ mientras se dejaba libre lo _"below a significant capability threshold"_ (`agi-strategy/02-drivers-of-ai-progress/02-intelligence-explosion/05-governance-of-superintelligence.md`). Dos niveles + autoridad. Lo que ha llegado es dos niveles + **un** gobierno.
- El precedente regulatorio literal: el **AI Diffusion Rule** (ene 2025, revocado mayo 2025) _"created a three-tier system"_ de países según riesgo para la seguridad nacional de EE.UU. (`agi-strategy/04-defence-in-depth/03-layer1-prevent-dangerous-ai-training/07-introduction-to-compute-governance.md`; detalle en `agi-strategy/wiki/concepts/ai-diffusion-rule.md`). El tiering de 2026 es la misma lógica aplicada a _inferencia_ en vez de a chips.

**Frame filosófico**: legitimidad y _quis custodiet ipsos custodes_. La OpenAI de 2023 decía «autoridad internacional»; la realidad de 2026 dice «el gobierno de EE.UU., por carta del secretario de Comercio». El criterio de selección de Glasswing no es público (informe: Pilar 1) — un poder de acceso sin criterio publicado es, en términos de filosofía política clásica, poder arbitrario: exactamente lo que el constitucionalismo existe para impedir. Pregunta para la audiencia: ¿en qué se diferencia una «organización aprobada» de un _privilegio_ en el sentido pre-moderno (ley privada)?

**Propuesta de bloque**: «El gradiente de acceso» — visual de tres círculos concéntricos (helpful-only interno → aprobados/Glasswing → público con salvaguardas → [fuera: Europa]) con la cita de Forethought como pie. Remate: la pregunta de quién decide, sin respuesta pública.

**Objeción a preemptar**: «los tiers son sensatos: capacidades peligrosas para defensores examinados». Respuesta: el problema no es el tiering (PauseAI acepta umbrales de capacidad), es que el árbitro sea unilateral, el criterio secreto y el proceso una carta sin ley detrás.

---

## 2. El jailbreak, el rollback y el clasificador «>99%»

**Hechos** (informe: rollback en detalle): jailbreak de investigadores de Amazon → directiva de Commerce → suspensión global → clasificador reentrenado que según Anthropic bloquea «>99%» (❌→ⓘ: citable solo como afirmación de Anthropic).

**Conceptos AI safety**:

- **Constitutional Classifiers** (Anthropic) es el precedente exacto del «clasificador reentrenado» (`agi-strategy/04-defence-in-depth/04-layer2-constrain-dangerous-ai/11-constitutional-classifiers-defending-against-universal-jailbreaks.md`): el prototipo sobrevivió _"3,000 hours over a two-month experimental period attempting to jailbreak the model"_; la versión mejorada redujo el éxito de jailbreaks de 86% _"reduced to 4.4%"_; y la constitución _"can rapidly be adapted to cover novel attacks"_ — el mecanismo institucional del «rapid response» que Anthropic invocó en junio. Pero el mismo paper registra el final de su demo pública: _"one jailbreaker was able to get detailed answers from the system for all eight questions using a universal jailbreak"_. Y la admisión de fondo: los ataques adversariales se conocen desde hace una década y _"still no fully robust deep-learning models in production"_.
- **La ciencia de las evals es frágil**: el caso shutdown-resistance como precaución metodológica sobre cifras titulares (`technical-ai-safety/03-detecting-danger/01-evaluations-ai-can-but-will-it/04-self-preservation-or-instruction-ambiguity-examining-the-causes-of-shutdown-resi.md`): un resultado de sabotaje del apagado en el _"79% of the time"_ desapareció por completo al clarificar la prioridad de instrucciones. Moraleja simétrica: una cifra alarmante puede evaporarse con la metodología — y una cifra tranquilizadora («>99% bloqueado») también.
- La system card de **Mythos Preview** documenta el otro lado: el modelo evaluado en _"Capabilities related to evading safeguards"_, incluyendo ofuscar una escalada de permisos para esquivar un clasificador (`technical-ai-safety/03-detecting-danger/03-option-1-anthropic/03-system-card-mythos-preview.md`). El guardián y el vigilado son el mismo tipo de sistema.

**Frame filosófico**: falibilismo y Goodhart. Un clasificador es un _proxy_ de «contenido peligroso», y todo proxy optimizado contra un adversario se degrada (specification gaming, `technical-ai-safety/01-.../02-specification-gaming...`). Epistemológicamente, «bloquea >99% de los intentos conocidos» es un enunciado sobre el pasado; la seguridad que importa es sobre ataques futuros — el problema de la inducción aplicado a salvaguardas. Esto **refuerza** la decisión del informe de degradar el «>99%» a afirmación-de-parte.

**Propuesta de bloque**: «La carrera del gato y el ratón, con datos» — línea temporal: 3.000 horas sin jailbreak universal → demo rota el día 6 → Fable 5 roto en 3 días de GA → reentrenar → «>99%». Cierre con la cita _"no fully robust deep-learning models in production"_.

**Objeción a preemptar**: «entonces las salvaguardas no valen para nada». No: reducen mucho el riesgo marginal (86%→4,4% es real), pero no son un fundamento sobre el que apoyar _acceso general a capacidades catastróficas_. Es el argumento de Anthropic contra sí misma: si el clasificador bastara, Mythos no necesitaría Glasswing.

---

## 3. Open-weight: la puerta no cierra si los pesos ya salieron

**Hechos** (informe: Kimi y la frontera open-weight): CAISI sitúa a Kimi K2 Thinking por debajo pero acercándose; la evaluación de arXiv concluye que el uso por actores hostiles ya no puede descartarse; el gatekeeping es estructuralmente inefectivo contra pesos publicados.

**Conceptos AI safety**:

- **El refusal training se quita; solo la ignorancia resiste**: _Deep Ignorance_ (EleutherAI) muestra que el filtrado de datos de preentrenamiento es _"significantly more tamper-resistant than current safeguards"_ — porque las salvaguardas post-hoc de un modelo open-weight se eliminan por fine-tuning trivial (`technical-ai-safety/02-training-safer-models/02-feeding-ai-good-data/02-deep-ignorance-filtering-pretraining-data-builds-tamper-resistant-safeguards.md`). El dato canónico: deshacer el safety fine-tuning de Llama 2-Chat costó _"less than $200"_ (`agi-strategy/04-defence-in-depth/03-layer1-prevent-dangerous-ai-training/07-introduction-to-compute-governance.md`).
- **La brecha de salvaguardas ya es medible**: DeepSeek R1-0528 _"complied with 94% of overtly malicious requests"_ con jailbreaks comunes, frente al 8% de los modelos de referencia de EE.UU. (`agi-strategy/03-pathways-to-harm/05-option-3-catastrophic-pandemics-not-selected/01-how-ai-could-enable-catastrophic-pandemics.md`). El control de acceso estadounidense no gobierna esa vía.
- **La irreversibilidad es el punto**: METR — _"training a model is much less reversible"_ que desplegarlo; poseer los pesos impone riesgo aunque no se entrene más (`technical-ai-safety/03-detecting-danger/01-evaluations-ai-can-but-will-it/02-ai-models-can-be-dangerous-before-public-deployment.md`). Y la propia Meta reconoce que los desenlaces catastróficos cyber/bio son _"more likely to occur through adversarial use of closed or open-weight deployments"_ (`technical-ai-safety/03-detecting-danger/06-option-4-meta/01-metas-advanced-ai-scaling-framework.md`).
- **Por qué esto no es un argumento contra coordinar, sino a favor**: el acuerdo propuesto por MIRI calcula que una pausa unilateral de EE.UU. _"might buy around six months"_ hasta que la primera empresa china alcance el punto de corte (`agi-strategy/04-defence-in-depth/03-layer1-prevent-dangerous-ai-training/08-an-international-agreement-to-prevent-the-premature-creation-of-artificial-super.md`). Unilateral no funciona; esa es la premisa de un tratado, no su refutación.

**Frame filosófico**: la **Vulnerable World Hypothesis** de Bostrom (vía la crítica de Toner, `agi-strategy/01-racing-to-a-better-future/03-steering-the-race-to-agi/01-in-search-of-a-dynamist-vision-for-safe-superhuman-ai.md`, y `agi-strategy/wiki/concepts/vulnerable-world-hypothesis.md`): si la urna contiene una bola negra, la difusión irreversible es el mecanismo que la saca. Los pesos abiertos convierten cada capacidad publicada en un hecho geológico: ya no se legisla sobre ella, solo se convive con ella.

**Propuesta de bloque**: «Lo que la directiva no puede tocar» — a la izquierda, la cronología del rollback (19 días, restaurado); a la derecha, Kimi/DeepSeek inalterados durante todo el episodio. Pie: $200 para des-alinear un modelo abierto.

---

## 4. Ciberataques: la evidencia encaja con los modelos de amenaza del curso

**Hechos** (informe: sección ciberataques): +89% CrowdStrike pre-Mythos, 54% CTR de phishing con IA (Microsoft), Five Eyes «months, not years», duplicación de capacidad ofensiva cada ~4 meses (UK AISI), VoidLink. Con la cautela verificada: la tendencia precede a Mythos.

**Conceptos AI safety**:

- BlueDot ya modelaba exactamente esa compresión temporal (`agi-strategy/03-pathways-to-harm/06-option-4-critical-infrastructure-not-selected/02-how-ai-could-enable-critical-infrastructure-collapse.md`): _"AI shortens full cyberoperations from years to months"_ y la velocidad de ataque de horas a minutos — el «months, not years» de Five Eyes es esa curva vista desde la inteligencia estatal.
- Medición: **HonestCyberEval** (Alan Turing Institute) con o1-preview al 92,85% en explotación automatizada de vulnerabilidades (`technical-ai-safety/03-detecting-danger/01-evaluations-ai-can-but-will-it/11-honestcybereval-an-ai-cyber-risk-benchmark-for-automated-software-exploitation.md`); **3cb** (Apart) mostrando además que la brecha frontier↔open-source en cyber es pequeña (`agi-strategy/03-pathways-to-harm/06-option-4-critical-infrastructure-not-selected/05-3cb-the-catastrophic-cyber-capabilities-benchmark-apart-research.md`). El phishing como vector dominante: _"91% of cyber breaches"_ empiezan por email (CivAI, `agi-strategy/03-pathways-to-harm/06-option-4-critical-infrastructure-not-selected/04-the-future-of-phishing.md`) — que conecta con el 54% de CTR del informe.
- El marco: **offense-defense balance** y el dilema del defensor (`agi-strategy/04-defence-in-depth/01-what-might-success-look-like/00-intro.md`): _"an attacker only needs to find one civilisational vulnerability"_. La justificación oficial de Glasswing (dar Mythos a defensores) es una apuesta explícita a torcer ese balance hacia la defensa — es d/acc ejecutado por un estado, con lista de invitados.

**Frame filosófico**: el argumento hobbesiano _mínimo_ que la charla puede conceder: cuando la capacidad ofensiva se difunde más rápido que la defensiva, la demanda social de un protector fuerte crece (enlaza con §5). La honestidad intelectual del informe (la tendencia precede a Mythos) es también la respuesta al pánico: los datos justifican preocupación estructural, no la atribución causal que legitimaría cualquier medida.

**Propuesta de bloque**: «La curva que asusta a los estados» — duplicación cada ~4 meses (UK AISI) sobre los hitos verificados (CrowdStrike → Microsoft → Five Eyes → VoidLink), con la cita "years to months" como título.

---

## 5. El estado y los labs: el arsenal estaba inventariado

**Hechos** (informe: Anthropic vs. Pentágono; Pilar 3): designación «supply-chain risk» tras negarse al uso militar sin restricciones, demanda del 9 de marzo, apelación denegada, EO «voluntaria» leída como licencias de facto.

**Conceptos AI safety**:

- **AI Policy Levers** (GovAI/FHI, 2021) catalogó hace cinco años las palancas que EE.UU. podía usar sobre su industria de IA: export controls, CFIUS, secrecy orders, Defense Production Act, antitrust y la doctrina _born secret_ (`agi-strategy/04-defence-in-depth/03-layer1-prevent-dangerous-ai-training/06-ai-policy-levers-a-review-of-the-u-s-government-s-tools-to-shape-ai-research-dev.md`). Lo de 2026 no es una anomalía: es el inventario activándose. La designación del Pentágono es la palanca _punitiva_ que el catálogo no formalizaba: el mercado público como castigo.
- **Aschenbrenner como profeta del campo 1** (`agi-strategy/04-defence-in-depth/03-layer1-prevent-dangerous-ai-training/02-iv-the-project-situational-awareness.md`): _"No startup can handle superintelligence"_ — y su queja de que los labs tratan secretos de AGI _"the way we would random SaaS software"_ (`agi-strategy/04-defence-in-depth/04-layer2-constrain-dangerous-ai/08-lock-down-the-labs-security-for-agi.md`) es la lógica de seguridad que justifica el abrazo estatal. RAND (_Seeking Stability_) llega a la misma estación por otra vía: en un mundo de amenazas existenciales, el control gubernamental del I+D de IA _"would seem the only conceivable answer"_ (`agi-strategy/01-racing-to-a-better-future/03-steering-the-race-to-agi/03-seeking-stability-in-the-competition-for-ai-advantage.md`).
- La versión institucionalizada y benigna de la misma relación: **inspectores residentes** al estilo de la seguridad nuclear dentro de los labs (_AI Emergency Preparedness_, `agi-strategy/04-defence-in-depth/05-layer3-withstand-dangerous-ai-actions/03-ai-emergency-preparedness.md`) — supervisión con reglas públicas, en lugar de cartas de Commerce y listas negras.

**Frame filosófico**: **Hobbes, explícitamente**. _AI and Leviathan_ de Hammond (`agi-strategy/03-pathways-to-harm/04-option-2-gradual-disempowerment/03-ai-and-leviathan-part-i.md`) y el «narrow corridor» de Acemoglu/Robinson vía Krier (`agi-strategy/03-pathways-to-harm/04-option-2-gradual-disempowerment/07-agi-government-and-the-free-society.md`): la libertad vive en el pasillo estrecho entre el Leviatán despótico y el estado ausente. El episodio Anthropic-Pentágono es una demostración en vivo de qué pasa a un actor privado que intenta poner condiciones al Leviatán mientras depende de él: la zanahoria (Glasswing, redeployment) y el palo (blacklist) son el mismo brazo. La pregunta de la charla se reformula: no «¿estado o no estado?», sino «¿qué mantiene al Leviatán dentro del pasillo?» — y la respuesta clásica (ley, contrapesos, transparencia) es exactamente lo que falta en el control ad hoc de 2026.

**Propuesta de bloque**: «El palo y la zanahoria son el mismo brazo» — cronología demanda/blacklist (marzo-abril) en paralelo con Glasswing/redeployment (junio-julio), y la lista GovAI 2021 como «ya estaba escrito».

---

## 6. Concentración vs. proliferación: el falso dilema examinado

**Hechos** (informe: todo el arco): EE.UU. concentra el acceso mientras los pesos abiertos proliferan — 2026 tiene _los dos_ males a la vez.

**Conceptos AI safety**:

- El crux IAPS (§0) plantea la disyuntiva; los materiales del curso dan munición a ambos cuernos:
  - Contra la concentración: _AI-enabled coups_ — _"In the extreme, a single person could have access to millions of superintelligent AI systems, all helping them seize power"_; y d/acc de Buterin: _"the risk of this approach is, of course, that the center is often itself the source of risk"_ (`agi-strategy/04-defence-in-depth/05-layer3-withstand-dangerous-ai-actions/01-d-acc-one-year-later.md`). Toner, sobre gestionar los riesgos concentrando poder: _"if we handle them by massively concentrating power, we haven't succeeded"_ (`agi-strategy/01-racing-to-a-better-future/03-steering-the-race-to-agi/01-in-search-of-a-dynamist-vision-for-safe-superhuman-ai.md`).
  - Contra la proliferación: §3 y §4 enteros (DeepSeek 94%, $200, defender's dilemma).
- El eje **dinamismo–estasis** de Toner (mismo archivo) es la mejor herramienta para que la audiencia se ubique: las medidas de 2026 (licencias de facto, tiering, retirada de modelos) son _estasistas_ de manual — y sin embargo las adoptó el gobierno más retóricamente anti-regulación. Lectura: el estasismo no llega por convicción de safety sino por lógica de seguridad nacional; llega igual, pero sin sus salvaguardas.

**Frame filosófico** (aquí la filosofía lleva la voz): el dilema es falso porque compara un _statu quo_ de concentración ad hoc con una proliferación ya consumada. La salida no está en elegir cuerno sino en cambiar la variable: **quién** ejerce el control y **bajo qué reglas**. Concentración con legitimidad, verificación y reversibilidad ≠ concentración por carta del secretario de Comercio. Es la distinción republicana clásica entre poder constituido y poder arbitrario, aplicada a APIs.

**Propuesta de bloque**: momento interactivo — proyectar el crux IAPS tal cual y pedir posiciones a la audiencia (es una comunidad técnica; funcionará), antes de revelar que 2026 logró ambos males simultáneamente.

**Objeción a preemptar** (la más importante de la charla): el wiki del curso registra que Drago & Laine agrupan _"PauseAI's global-governance-regime proposal"_ junto al Panopticon de Bostrom y la nacionalización de Aschenbrenner como propuestas centralizadoras que podrían provocar el lock-in que temen (`agi-strategy/wiki/concepts/power-concentration.md`). Respuesta articulada en §9.

---

## 7. Europa: objeto, no sujeto

**Hechos** (informe: sección Europa): 19 días sin Fable, exclusión de Glasswing mientras la prensa sitúa dentro a NATO y SWIFT, Attal y el «estrecho de Ormuz», carta de Austria, Volt/EuroStack.

**Conceptos AI safety**:

- La visión que la realidad de 2026 confirma y que la charla debe rebatir con cuidado: IFP, _Preparing for Launch_ (`agi-strategy/01-racing-to-a-better-future/01-imagining-a-better-future/01-preparing-for-launch-ifp.md`): _"There is no realistic plan B. The European Union can attempt to keep regulating companies outside of their borders, but only the US and China can realistically build the technological rails of the 21st century."_ Y la capacidad que lo hace efectivo: _"deny access to advanced AI to others through export controls"_.
- La **estrategia entente** de Amodei (`agi-strategy/01-racing-to-a-better-future/01-imagining-a-better-future/03-dario-amodei-machines-of-loving-grace.md`): una _"coalition of democracies"_ con ventaja clara sobre adversarios. Junio de 2026 revela la letra pequeña: dentro de la entente hay tiers — y la UE cayó en el de fuera mientras NATO y SWIFT quedaban dentro (informe: exclusión de Glasswing). El AI Diffusion Rule ya había ensayado esa humillación con aliados (Israel, Singapur en Tier 2; `agi-strategy/wiki/concepts/ai-diffusion-rule.md`).
- Contraste regulatorio verificado (informe: Pilar 3): la UE exige transparencia pero no tiene aprobación previa al despliegue ni poder sancionador hasta agosto — el único actor con reglas _públicas_ es el que no tiene palanca; el que tiene palanca opera sin reglas públicas.

**Frame filosófico**: soberanía como _capacidad_, no como declaración. En términos de la charla: Europa descubrió en 19 días que su acceso a la infraestructura cognitiva de frontera es un privilegio revocable por un gobierno extranjero — la definición operativa de no-soberanía. Conexión con la audiencia (comunidad hispanohablante de AI safety): esto no es abstracto, es _su_ acceso a herramientas de investigación.

**Propuesta de bloque**: mapa de los tiers reales de junio 2026 (EE.UU. crítico → ~100 aprobados → aliados selectos NATO/SWIFT → UE fuera → resto del mundo) con la cita de Attal y la de IFP enfrentadas.

---

## 8. Terrorismo: la correlación que se rompe

**Hechos** (informe: sección terrorismo): todos los casos documentados (Cybertruck, Palm Springs, ISIS/Rocket.Chat, TE-SAT) usaron modelos no-frontera — dato relevante en sí mismo.

**Conceptos AI safety**:

- Amodei, _The Adolescence of Technology_ (`agi-strategy/03-pathways-to-harm/01-map-the-threat-landscape/07-dario-amodei-the-adolescence-of-technology.md`): el riesgo es que el atacante sin disciplina ni conocimiento sea _"elevated to the capability level of the PhD virologist"_ — la ruptura de la correlación histórica entre capacidad y motivación. Los casos verificados del informe son la fase temprana de esa curva: motivación alta + modelos débiles → daño convencional. La preocupación regulatoria es el siguiente punto de la curva, no este.
- CIGI (`agi-strategy/03-pathways-to-harm/01-map-the-threat-landscape/04-ai-is-reviving-fears-around-bioterrorism-what-s-the-real-risk.md`) aporta el contexto de barreras cayendo y jailbreaks universales; el TE-SAT verificado (propaganda récord, sin uplift CBRN confirmado) mantiene la honestidad del cuadro.

**Frame filosófico**: ética del riesgo — cómo razonar sobre daños de cola pesada sin caer ni en el pánico (todos los casos reales fueron low-tech) ni en la complacencia (la curva de capacidad no espera). Es además el argumento _bueno_ a favor de salvaguardas y umbrales: no «los terroristas ya usan IA de frontera» (falso según lo verificado) sino «el coste de que un día la usen es asimétrico».

**Propuesta de bloque**: slide honesta de dos columnas — «lo que ha pasado» (casos verificados, modelos no-frontera) vs. «lo que la curva implica» (cita de Amodei). PauseAI gana credibilidad siendo el actor que no infla los datos.

---

## 9. El clímax: control estatal sí — pero el equivocado

**Hechos** (informe: resumen ejecutivo): control de facto, ad hoc, unilateral, sin ley, con eficacia dudosa frente a pesos abiertos.

**Conceptos AI safety** — lo que pediría un control _bien hecho_, según el propio corpus del curso:

- **Tratado internacional** (aitreaty.org, firmada por Hinton y Bengio; `agi-strategy/04-defence-in-depth/03-layer1-prevent-dangerous-ai-training/01-urging-an-international-ai-treaty-an-open-letter-aitreaty-org.md`): _"Internationally upheld thresholds on the amount of compute"_ con procedimiento para bajarlos, CERN para AI safety, APIs seguras y comisión de cumplimiento, con un papel _"similar to the International Atomic Energy Agency"_.
- **Mecanismo verificable** (MIRI, `.../08-an-international-agreement-to-prevent-the-premature-creation-of-artificial-super.md`): umbrales FLOP operacionalizados con tracking de chips; y su premisa empírica, compartida con la charla: los modelos actuales _"are not robust to jailbreaks"_ — la alineación no está resuelta, luego el acceso no puede descansar en salvaguardas.
- **Realismo institucional** (Wasil, _Do we want an IAEA for AI?_, `.../05-do-we-want-an-iaea-for-ai.md`): el valor del modelo IAEA está en _"verification methods that allow nations to ensure that others are complying"_; su fracaso llega cuando falta buy-in de grandes potencias. Es la vara de medir para 2026: el control actual no tiene _ninguna_ capa de verificación mutua — es pura prerrogativa.
- Piezas complementarias: soft-pause de hardware de Buterin (d/acc) como mecanismo de emergencia; RAND _playbook_ de pesos (_"they have complete control over the model"_) como fundamento técnico de por qué los pesos son la variable a gobernar (`agi-strategy/04-defence-in-depth/04-layer2-constrain-dangerous-ai/03-a-playbook-for-securing-ai-model-weights.md`); MAIM/deterrence (`.../09-crucial-considerations-in-asi-deterrence.md`) como el futuro sombrío si la coordinación falla y solo queda el sabotaje mutuo.

**El contraste, eje por eje** (tabla para la slide final):

| Eje                      | Control de 2026 (verificado)        | Lo que pide PauseAI (corpus del curso)              |
| ------------------------ | ----------------------------------- | --------------------------------------------------- |
| Base legal               | EO «voluntaria», cartas, directivas | Tratado ratificado                                  |
| Alcance                  | Unilateral (EE.UU.)                 | Multilateral (incl. China)                          |
| Criterio de acceso       | No público (Glasswing)              | Umbrales públicos de cómputo/capacidad              |
| Verificación             | Ninguna (prerrogativa)              | Tracking de chips, inspección, comisión             |
| Eficacia vs. open-weight | Nula (Kimi intacto)                 | Umbral aplica al _entrenamiento_, no solo al acceso |
| Legitimidad              | Quien tiene la palanca              | Quien firma y se somete a inspección                |

**Respuesta a la objeción Drago/Laine** («la pausa de PauseAI es también concentración de poder»): tres movimientos. (1) Conceder el riesgo: toda gobernanza fuerte puede degenerar en lock-in; por eso los componentes del tratado son _procedimentales_ (umbrales públicos, verificación mutua, comisión) y no la entrega de la frontera a un ejecutivo. (2) Señalar la alternativa real: 2026 demuestra que _sin_ tratado no se obtiene descentralización dinámica — se obtiene concentración ad hoc sin contrapesos, es decir, la versión con _todos_ los defectos que Drago/Laine temen y ninguna de las salvaguardas. (3) El criterio de Toner es utilizable a favor: _"if we handle them by massively concentrating power, we haven't succeeded"_ — exacto; por eso la propuesta es poder _constituido_ y reversible, no poder arbitrario. La pausa es la medida más reversible del menú: pausar se puede des-pausar; difundir pesos no se puede des-difundir (§3).

**Cierre personal** (material de los ejercicios del propio curso, en palabras de Dani): _"I co-lead the Spanish branch of PauseAI precisely because I think the default trajectory is dangerous"_ (`agi-strategy/01-racing-to-a-better-future/02-what-future-do-you-want/01-better-future-yourself.md`) y la fórmula _"pause, then purpose"_ (`.../02-better-future-society.md`) — coordinación global exigible, resolver alineación, y entonces avanzar.

---

## Tabla-resumen

| §   | Tema (informe)                  | Concepto ancla (BlueDot)                                                       | Frame filosófico                     | Bloque propuesto                            |
| --- | ------------------------------- | ------------------------------------------------------------------------------ | ------------------------------------ | ------------------------------------------- |
| 1   | Acceso escalonado               | Exclusive access (Coups) · Governance of Superintelligence · AI Diffusion Rule | Legitimidad, _quis custodiet_        | «El gradiente de acceso»                    |
| 2   | Jailbreak/rollback/>99%         | Constitutional Classifiers · science of evals                                  | Falibilismo, Goodhart                | «Gato y ratón, con datos»                   |
| 3   | Open-weight (Kimi)              | Deep Ignorance · $200 Llama 2 · MIRI «six months»                              | Vulnerable World Hypothesis          | «Lo que la directiva no puede tocar»        |
| 4   | Ciberataques                    | «years to months» · HonestCyberEval · 3cb                                      | Offense-defense, dilema del defensor | «La curva que asusta a los estados»         |
| 5   | Estado ↔ labs                   | AI Policy Levers · The Project · Seeking Stability                             | Hobbes/Leviatán, narrow corridor     | «El palo y la zanahoria son el mismo brazo» |
| 6   | Concentración vs. proliferación | Crux IAPS · Coups · d/acc · dinamismo-estasis                                  | Poder constituido vs. arbitrario     | Momento interactivo con el crux             |
| 7   | Europa                          | IFP «no plan B» · entente · Diffusion Rule                                     | Soberanía como capacidad             | Mapa de tiers reales                        |
| 8   | Terrorismo                      | «PhD virologist» (Amodei) · CIGI                                               | Ética del riesgo de cola pesada      | Dos columnas honestas                       |
| 9   | La petición PauseAI             | aitreaty.org · MIRI · IAEA (Wasil)                                             | Contrato social internacional        | Tabla de contraste eje por eje              |

## Objeciones a preemptar (consolidado)

1. **«La pausa de PauseAI es también concentración de poder»** (Drago/Laine vía wiki; Toner) → respuesta en §9: procedimental vs. arbitrario; la alternativa real de 2026; reversibilidad de la pausa.
2. **«El gating no funciona de todos modos (open-weight), ¿por qué pedir control?»** → §3: es el argumento _a favor_ del tratado: el gating unilateral de acceso no funciona; los umbrales verificables de entrenamiento actúan antes de que los pesos existan.
3. **«Sin EE.UU. no hay plan B»** (IFP) → §7: precisamente por eso la dependencia sin reglas es intolerable para el resto; la respuesta europea (EuroStack, carta de Austria) confirma que el vacío de legitimidad genera contra-movimientos.
4. **«Los tiers son sensatos»** → §1: el problema no es el tiering sino el árbitro unilateral con criterio secreto.
5. **«Las salvaguardas bastan»** → §2: Anthropic misma no lo cree (Glasswing existe porque el clasificador no basta).

## Estado y próximos pasos

- **→ Ronda de validación de Dani sobre este documento** (en paralelo a la del informe).
- Tras validar ambos: construir bloques de slides en `slides/es/` y `slides/en/` siguiendo la Session Structure del CLAUDE.md.
