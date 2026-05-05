---
layout: section
---

# ¿Qué es la IA hoy?

<!--
Beat 1 · 12 min.
Estado emocional: orientación → asombro creciente.
Apertura: "Para entender qué se traen entre manos los que construyen la IA, vamos a empezar por lo más concreto."

ORDEN (revisado 2026-05-05):
  1. SAT/HSE 2058
  2. METR exponencial
  3. Herramienta vs agente
  4. Jaggedness (Stanford + ARC-AGI-3)
  5. Caja negra (introspection 20%)
  6. Bozal y lobo (RLHF)
  7. Mythos como caso ancla, todo lo anterior en acción (cierre del beat)
-->

---
layout: center
---

<div class="text-center">
  <div class="text-6xl font-bold">
    <span class="line-through opacity-40">2058</span>
    <span class="mx-4 text-orange-400">→</span>
    <span class="text-orange-400">2023</span>
  </div>
  <div class="text-2xl mt-8 opacity-80">
    35 años antes de lo previsto
  </div>
  <div class="text-lg mt-4 opacity-50 max-w-2xl mx-auto">
    En 2016, expertos en IA predijeron que un modelo<br/>
    podría escribir un ensayo de instituto en <span class="font-bold">2058</span>.
  </div>
  <div class="text-xs mt-6 opacity-30 max-w-3xl mx-auto">
    Fuente: Grace et al. 2017, encuesta a 352 investigadores de aprendizaje automático · arXiv 1705.08807 · GPT-4 escribe ensayos AP de instituto desde 2023 (OpenAI Technical Report)
  </div>
</div>

<!--
- Milestone "High School Essay" del paper Grace et al. 2017.
- Mediana de la encuesta a 352 ML researchers en 2016: 42 años hasta capacidad → 2058.
- GPT-4 lo hace desde 2023. 35 años antes de lo previsto.
- VOZ: "En 2016, una encuesta a más de trescientos investigadores de IA preguntó cuándo creían que un modelo podría escribir un ensayo de instituto. La mediana: 2058. GPT-4 lo hace desde 2023. Treinta y cinco años antes de lo previsto."
- "Las predicciones sobre IA siempre se quedan cortas. Y se quedan cortas no por dos años, por décadas."
-->

---

# La IA mejora exponencialmente

<div class="flex gap-6 mt-4 items-start">
  <a href="https://metr.org/time-horizons/" target="_blank" class="flex-1">
    <img src="/screenshots/metr-time-horizons.png" class="w-full rounded-lg shadow-lg border border-white/10" />
    <div class="text-xs opacity-40 mt-1 text-center">Fuente: METR.org · Time Horizon 1.1 (50% éxito)</div>
  </a>
  <div class="w-72 space-y-4">
    <div class="p-4 rounded-lg bg-white/5">
      <div class="text-orange-400 font-bold text-sm">2023 · GPT-4</div>
      <div class="opacity-70 text-sm mt-1">Tareas de <span class="font-bold">minutos</span></div>
    </div>
    <div class="p-4 rounded-lg bg-white/5">
      <div class="text-orange-400 font-bold text-sm">2026 · Claude Opus 4.6</div>
      <div class="opacity-70 text-sm mt-1">Hasta <span class="font-bold">12 horas</span> de trabajo experto</div>
    </div>
    <div class="p-4 rounded-lg bg-orange-900/30 border border-orange-700/50">
      <div class="text-orange-400 font-bold text-sm">Ritmo</div>
      <div class="opacity-70 text-sm mt-1">Se duplica cada <span class="font-bold">4-6 meses</span></div>
    </div>
  </div>
</div>

<!--
- METR independiente. Eje Y: tiempo experto humano para la tarea más larga que el modelo completa con 50% éxito.
- 2023 GPT-4 minutos → 2026 Opus 4.6 hasta 12 horas. Doblando cada 4-6 meses.
- VOZ: "METR mide cuánto tiempo le costaría a un experto humano hacer la tarea más larga que un modelo puede hacer. En 2023, GPT-4, minutos. En 2026, Claude Opus 4.6, hasta DOCE HORAS de trabajo experto. Y se duplica cada cuatro o seis meses."
-->

---

# De herramienta a agente

<div class="grid grid-cols-2 gap-12 mt-12">
  <div class="p-8 rounded-xl bg-green-900/30 border border-green-700/50">
    <div class="text-3xl mb-4">🧮</div>
    <div class="text-xl font-bold mb-2">Herramienta</div>
    <div class="opacity-70">Tú preguntas, ella responde</div>
    <div class="opacity-50 mt-2 text-sm">Como una calculadora muy potente</div>
  </div>
  <div class="p-8 rounded-xl bg-red-900/30 border border-red-700/50">
    <div class="text-3xl mb-4">🤖</div>
    <div class="text-xl font-bold mb-2">Agente</div>
    <div class="opacity-70">Decide y actúa por su cuenta</div>
    <div class="opacity-50 mt-2 text-sm">Navega, envía correos, compra, analiza</div>
  </div>
</div>

<div v-click class="mt-8 text-center text-xl opacity-80">
  Un empleado que trabaja 24h, no duerme, no cobra<br/>
  <span class="text-orange-400 font-bold">y puede cometer errores que nadie supervisa</span>
</div>

<!--
- Herramienta: tú preguntas, responde (calculadora).
- Agente: decide y actúa solo. Bucle objetivo → acción → observar.
- LAND transición: "Y antes de seguir, quiero presentaros una palabra que vamos a oír mucho a partir de ahora: AGI. Para que tenga sentido cuando aparezca, un marco."
-->

---

<div class="text-center mb-2">
  <div class="text-2xl font-bold" style="font-family: 'Saira Condensed', sans-serif; color: #ff9416; text-transform: uppercase; letter-spacing: 0.02em">
    Lo peligroso no es la IA en general.
  </div>
  <div class="text-base mt-1 opacity-90">
    Es <span class="font-bold">esta combinación específica</span>.
  </div>
</div>
<div class="relative mx-auto" style="width: 460px; height: 360px">
  <div class="absolute rounded-full" style="width: 220px; height: 220px; top: 30px; left: 50px; background: #3b82f6; opacity: 0.55; mix-blend-mode: screen"></div>
  <div class="absolute rounded-full" style="width: 220px; height: 220px; top: 30px; left: 190px; background: #ef4444; opacity: 0.55; mix-blend-mode: screen"></div>
  <div class="absolute rounded-full" style="width: 220px; height: 220px; top: 130px; left: 120px; background: #10b981; opacity: 0.55; mix-blend-mode: screen"></div>
  <div class="absolute" style="top: 0; left: 0; color: #93c5fd">
    <div class="text-2xl font-bold leading-none" style="font-family: 'Saira Condensed', sans-serif">A</div>
    <div class="text-[11px] font-semibold mt-0.5">Alta autonomía</div>
    <div class="text-[10px] italic opacity-70 leading-tight">independencia de acción</div>
  </div>
  <div class="absolute text-right" style="top: 0; right: 0; color: #fca5a5">
    <div class="text-2xl font-bold leading-none" style="font-family: 'Saira Condensed', sans-serif">G</div>
    <div class="text-[11px] font-semibold mt-0.5">Alta generalidad</div>
    <div class="text-[10px] italic opacity-70 leading-tight">amplitud de tareas</div>
  </div>
  <div class="absolute text-center" style="bottom: 0; left: 50%; transform: translateX(-50%); color: #6ee7b7">
    <div class="text-2xl font-bold leading-none" style="font-family: 'Saira Condensed', sans-serif">I</div>
    <div class="text-[11px] font-semibold mt-0.5">Alta inteligencia</div>
    <div class="text-[10px] italic opacity-70 leading-tight">competencia en tareas</div>
  </div>
  <div class="absolute text-center" style="top: 50%; left: 50%; transform: translate(-50%, -50%); color: #ff9416">
    <div class="text-3xl font-black leading-none" style="font-family: 'Saira Condensed', sans-serif">AGI</div>
    <div class="text-[11px] font-bold mt-1 whitespace-nowrap">zona de peligro</div>
  </div>
</div>
<div class="text-center text-xs opacity-50 italic mt-2">
  Marco propuesto por el Future of Life Institute · Anthony Aguirre, <em>Keep the Future Human</em> (2025)
</div>

<!--
Beat 1 · slide AGI Venn, definición operativa antes de jaggedness.

VOZ:
"Imaginad tres ejes."
"Alta autonomía: la IA decide y actúa por su cuenta."
"Alta generalidad: la IA hace muchas cosas distintas."
"Alta inteligencia: la IA es muy buena en lo que hace."

[Pausa]

"Por separado, ninguno es peligroso. Una hoja de cálculo es muy autónoma, la usamos sin miedo. Una calculadora es muy general, la usamos sin miedo. Un motor de ajedrez es muy inteligente en su nicho, sin riesgo."

[Pausa]

"Lo peligroso es esta COMBINACIÓN. Cuando un sistema es muy autónomo, muy general, y muy inteligente, eso es lo que llamamos AGI. Y eso es la zona de peligro."

[Pausa breve]

"Esto no lo dice PauseAI. Lo dice el Future of Life Institute, un instituto académico, en un documento de Anthony Aguirre, 'Keep the Future Human', publicado en 2025."

NOTAS:
- Tono: enmarcador pedagógico. Se enseña la palabra AGI antes de que aparezca en jaggedness.
- "Hoja de cálculo / calculadora / motor de ajedrez" son ejemplos elegidos para que la sala vea que cada eje por separado NO es lo peligroso. Si la sala se ríe con "hoja de cálculo muy autónoma", aprovechar.
- El frame Aguirre / FLI es load-bearing porque desactiva el "PauseAI = ludismo" antes de que aparezca como sospecha.
- LAND a frontera dentada: "¿Y dónde estamos hoy en este Venn? Esa es la siguiente pregunta. Y la respuesta tiene una palabra inglesa: jagged. Dentada."
- Inspirado en figura de "Keep the Future Human" (Aguirre, FLI, 2025). Versión simplificada, risk tiers + liability harbors omitidos para sala no técnica.
-->

---
layout: center
---

<div class="text-center mb-6">
  <div class="text-4xl font-bold" style="font-family: 'Saira Condensed', sans-serif; color: #ff9416; text-transform: uppercase; letter-spacing: 0.02em">
    La frontera es <span style="text-decoration: underline; text-decoration-color: #ff9416; text-decoration-thickness: 3px; text-underline-offset: 6px">dentada</span>.
  </div>
  <div class="text-xs opacity-50 mt-3 italic" style="font-family: 'Roboto Slab', serif">
    "The frontier is jagged." <span class="opacity-70 not-italic ml-2"> Stanford AI Index 2026</span>
  </div>
</div>
<div class="flex items-end justify-center gap-2 mt-4">
  <div v-click="1" class="text-center" style="width: 140px">
    <div class="text-xs italic opacity-70 mb-2 h-10 leading-tight">"La IA es un juguete divertido."</div>
    <svg viewBox="0 0 120 120" class="w-24 h-24 mx-auto">
      <circle cx="60" cy="60" r="48" fill="#94a3b8" opacity="0.25" stroke="#94a3b8" stroke-width="1" stroke-opacity="0.4"/>
      <polygon points="53,58 56,52 58,56 60,49 62,55 65,52 66,60 63,64 60,61 57,66 53,60" fill="#dc2626" opacity="0.85"/>
    </svg>
    <div class="text-[10px] opacity-50 mt-2 leading-tight">Tareas de un<br/>trabajo humano</div>
  </div>
  <div v-click="1" class="text-xl opacity-30 mb-12">→</div>
  <div v-click="2" class="text-center" style="width: 140px">
    <div class="text-xs italic opacity-70 mb-2 h-10 leading-tight">"La IA me ayuda en algunas tareas."</div>
    <svg viewBox="0 0 120 120" class="w-24 h-24 mx-auto">
      <circle cx="60" cy="60" r="48" fill="#94a3b8" opacity="0.25" stroke="#94a3b8" stroke-width="1" stroke-opacity="0.4"/>
      <polygon points="40,55 44,42 48,50 52,40 56,48 60,38 64,46 70,42 68,55 66,64 60,58 56,72 50,60 44,70 40,62" fill="#dc2626" opacity="0.85"/>
    </svg>
  </div>
  <div v-click="2" class="text-xl opacity-30 mb-12">→</div>
  <div v-click="3" class="text-center relative" style="width: 160px">
    <div class="text-xs italic opacity-90 mb-2 h-10 leading-tight" style="color: #ff9416">"La IA tiene una frontera dentada: a veces increíble, a veces tonta."</div>
    <svg viewBox="-20 -20 170 170" class="w-32 h-32 mx-auto">
      <circle cx="65" cy="65" r="48" fill="#94a3b8" opacity="0.25" stroke="#94a3b8" stroke-width="1" stroke-opacity="0.4"/>
      <polygon points="22,58 30,30 44,52 52,12 62,40 72,-15 88,30 100,52 118,40 145,58 115,72 132,95 102,80 92,128 72,88 60,145 48,95 30,118 -10,80 -15,68 22,62" fill="#dc2626" opacity="0.85"/>
    </svg>
    <div class="text-orange-400 text-2xl absolute" style="bottom: 22px; left: 50%; transform: translateX(-50%)">★</div>
    <div class="text-[11px] text-orange-400 font-bold mt-1">Estamos aquí</div>
  </div>
  <div v-click="4" class="text-xl opacity-30 mb-12">→</div>
  <div v-click="4" class="text-center" style="width: 160px">
    <div class="text-xs italic opacity-70 mb-2 h-10 leading-tight">"La IA es increíblemente inteligente, pero por algún motivo falla en X."</div>
    <svg viewBox="-10 -10 150 150" class="w-32 h-32 mx-auto">
      <circle cx="65" cy="65" r="48" fill="#94a3b8" opacity="0.25" stroke="#94a3b8" stroke-width="1" stroke-opacity="0.4"/>
      <polygon points="5,40 18,5 35,28 50,4 70,15 88,2 105,32 128,28 120,52 138,72 108,72 122,108 90,82 82,128 60,108 38,128 18,98 -2,72 6,52" fill="#dc2626" opacity="0.85"/>
    </svg>
  </div>
  <div v-click="5" class="text-xl opacity-30 mb-12">→</div>
  <div v-click="5" class="text-center" style="width: 160px">
    <div class="text-xs italic opacity-70 mb-2 h-10"></div>
    <svg viewBox="-30 -30 180 180" class="w-32 h-32 mx-auto">
      <polygon points="-22,55 -8,15 18,32 32,-12 50,18 68,-25 90,12 115,-8 142,22 152,55 138,72 150,98 132,128 142,152 110,135 92,158 68,138 48,158 22,140 -2,148 -25,118 -10,92 -28,72" fill="#dc2626" opacity="0.85"/>
      <circle cx="60" cy="60" r="38" fill="#94a3b8" opacity="0.2" stroke="#94a3b8" stroke-width="1" stroke-opacity="0.3"/>
    </svg>
    <div class="text-lg font-bold text-red-400 mt-2">AGI</div>
  </div>
</div>
<div v-click="5" class="mt-10 text-center text-lg">
  PhD en matemáticas. Ceguera ante un reloj.<br/>
  <span class="text-orange-400 font-bold text-xl">Una inteligencia con perfil distinto al humano.</span>
</div>
<div class="text-[10px] opacity-30 text-center mt-4 italic">
  Visualización inspirada en Colin Fraser / Ethan Mollick · oneusefulthing.org
</div>

<!--
Cosa rara #1 · Jaggedness, visualización Colin Fraser / Ethan Mollick (oneusefulthing.org).
ANIMACIÓN: 5 v-click (4 etapas + AGI con frase resumen aparecen juntos en el último click).
El círculo gris = tareas de un trabajo humano. El blob rojo = tareas que la IA puede hacer.

VOZ:
"Cosa rara número uno: la frontera es DENTADA. Lo dice Stanford en el AI Index 2026."
[Slide, solo título arriba]

[Click 1, etapa 1, "juguete"]
"Los que llevamos tiempo usando IA hemos pasado por cinco fases. La primera: 'la IA es un juguete divertido', un blob pequeño, dentro del círculo de tareas que un humano hace en su trabajo."

[Click 2, etapa 2, "ayuda en tareas"]
"Segunda fase: 'me ayuda en algunas tareas'. El blob crece, todavía dentro del círculo humano."

[Click 3, etapa 3, "jagged · estamos aquí"]
"Y aquí estamos hoy. El blob ya no cabe. La IA hace cosas que ningún humano puede hacer, descubre 271 vulnerabilidades de seguridad en código de hace 17 años, gana medalla de oro en la Olimpiada Internacional de Matemáticas. Y al mismo tiempo, NO hace cosas que un niño hace solo, leer un reloj analógico, contar las R en 'strawberry'."

[Click 4, etapa 4, cuasi-AGI con huecos]
"La fase siguiente, y esto es lo que están construyendo Anthropic, OpenAI y Google ahora mismo, la IA es increíblemente inteligente, casi cubre todo el círculo humano. Pero por algún motivo falla en cosas raras. Sigue habiendo huecos."

[Click 5. AGI + frase resumen aparecen juntos]
"Y la fase final: cuando el blob cubre TODO. Eso es lo que llaman AGI, inteligencia artificial general."

[Pausa breve, dejando que la sala vea ambos elementos]

"PhD en matemáticas. Ceguera ante un reloj. Una inteligencia con perfil distinto al humano."

NOTAS:
- "Strawberry R", caso viral 2024, GPT-4 fallaba. Si la sala no lo conoce, mencionar de pasada en click 3.
- "PhD en matemáticas, ceguera ante un reloj" es la frase memorable, ensayar la cadencia.
- LAND a caja negra: "Y la cosa rara número dos, la que explica por qué pasa esto, viene de cómo se construye esto."
-->



---

# La caja negra

<div class="max-w-4xl mx-auto">
  <blockquote class="text-lg italic leading-relaxed p-4 pl-5 border-l-4 border-orange-400" style="font-family: 'Roboto Slab', serif">
    "A partir de GPT-5.1, nuestros modelos desarrollaron un hábito extraño: cada vez con más frecuencia mencionaban <span style="color: #ff9416; font-weight: 700">goblins, gremlins y otras criaturas</span> en sus metáforas."
  </blockquote>
  <div class="text-[10px] opacity-40 mt-1 pl-5 italic" style="font-family: 'Roboto Slab', serif">
    "Starting with GPT-5.1, our models began developing a strange habit: they increasingly mentioned goblins, gremlins, and other creatures in their metaphors."
  </div>
  <div class="text-xs opacity-50 mt-1 text-right pr-2">
    OpenAI · <a href="https://openai.com/index/where-the-goblins-came-from/" target="_blank" class="underline"><em>Where the Goblins Came From</em></a> · 30 de abril de 2026
  </div>
  <div class="mt-5 text-base opacity-90 text-center">
    OpenAI investigó qué lo causaba.
    <span class="text-orange-400 font-bold">No encontraron cómo emergió.</span>
  </div>
  <div class="mt-4 p-4 rounded-xl bg-white/5">
    <div class="text-sm opacity-70 mb-2">La solución: añadir al sistema esta instrucción </div>
    <div class="text-sm italic opacity-90 leading-snug" style="font-family: 'Roboto Slab', serif">
      "Nunca menciones goblins, gremlins, mapaches, trolls, ogros, palomas u otros animales o criaturas, a menos que sea absolutamente e inequívocamente relevante para la consulta del usuario."
    </div>
    <div class="text-[10px] opacity-40 mt-1 italic leading-snug" style="font-family: 'Roboto Slab', serif">
      "Never talk about goblins, gremlins, raccoons, trolls, ogres, pigeons or other animals or creatures unless it is absolutely and unambiguously relevant to the user's query."
    </div>
  </div>
  <div v-click class="mt-6 text-center">
    <div class="text-sm opacity-80">No saben cómo emergió.</div>
    <div class="text-sm opacity-80">No saben qué más está emergiendo.</div>
    <div class="text-xl font-bold text-orange-400 mt-3">El "fix" no es entender, es pedir por favor.</div>
  </div>
</div>

<!--
Cosa rara #2 · Caja negra · ejemplo Goblins (OpenAI, 30 abril 2026).

VOZ:
"Cosa rara número dos. ¿Cómo se hace una IA? No se programa. Se entrena. Le das un montón de datos y un objetivo, y ella misma encuentra la manera. Cuando termina, hay un modelo que funciona, y nadie, ni siquiera la empresa que lo entrenó, sabe exactamente cómo."

[Pausa]

"Os pongo el ejemplo más reciente. Hace cinco días, OpenAI publicó un blog que se llama 'Where the Goblins Came From'. Os leo verbatim:"

[Slide aparece, verbatim OpenAI]

"'Empezando con GPT-5.1, nuestros modelos desarrollaron un hábito extraño: mencionaban cada vez más goblins, gremlins y otras criaturas en sus metáforas.'"

[Pausa para que la sala procese, algunos se ríen]

"Esto es OpenAI hablando de su propio modelo. Empezó a meter goblins en respuestas a usuarios, sin que nadie se lo pidiera, sin que nadie supiera por qué."

[Slide aparece todo a la vez excepto el land final]

"OpenAI investigó. Y no encontraron exactamente cómo emergió. Tienen una hipótesis sobre el entrenamiento, pero el mecanismo concreto se les escapa."

"¿Y la solución? Le añadieron una instrucción al sistema. Os la leo verbatim, está en el blog:"

"'Never talk about goblins, gremlins, raccoons, trolls, ogres, pigeons or other animals or creatures unless it is absolutely and unambiguously relevant to the user's query.'"

[Pausa]

[Click — aparece el land]
"No saben cómo emergió. No saben qué más está emergiendo. El 'fix' no es entender, es pedir por favor."

NOTAS:
- Los goblins son risa pero la sala tiene que procesar el LAND. Esperar la risa, después aterrizar duro.
- El "fix" via system prompt es el punto pedagógico más fuerte: muestra que NO se controla el modelo, se le ruega.
- Frase memorable: "El fix no es entender, es pedir por favor."
- Verbatim original siempre en inglés (system prompts NO se traducen, el texto exacto es load-bearing).
- LAND a bozal/lobo: "Y para que veáis lo blando que es ese 'pedir por favor', cosa rara número tres."
-->


---

# El bozal y el lobo

<div class="grid grid-cols-2 gap-8 mt-8">
  <div class="p-6 rounded-xl bg-white/5">
    <div class="text-xl font-bold mb-3">RLHF: el "bozal"</div>
    <div class="opacity-70">La IA no comprende que hacer daño está mal. Aprende que si dice "no puedo ayudarte con eso" recibe una recompensa.</div>
    <div class="mt-3 text-orange-400">El lobo sigue siendo un lobo.</div>
  </div>
  <div class="p-6 rounded-xl bg-white/5">
    <div class="text-xl font-bold mb-3">Open-weight: sin bozal</div>
    <div class="opacity-70">Meta publica sus modelos con los pesos abiertos. Cualquiera los descarga y les quita la seguridad en minutos.</div>
    <div class="mt-3 text-orange-400">Versiones "sin censura" gratis en internet.</div>
  </div>
</div>

<div v-click class="mt-8 text-center text-lg opacity-80">
  Sabemos lo que hace.<br/>
  <span class="text-orange-400 font-bold">No sabemos cómo. No sabemos qué dejará de funcionar.</span>
</div>

<!--
Cosa rara #3 · RLHF.
VOZ: "Cosa rara número tres. Las empresas entrenan a la IA para dar respuestas educadas. RLHF. Premian 'no puedo ayudarte con eso', castigan respuestas peligrosas. Pero el modelo no entiende que hacer daño está mal, aprende que ciertas frases dan recompensa. Es como ponerle un bozal a un lobo. El lobo sigue siendo un lobo."
[Pausa]
"Y los modelos open-weight de Meta, el bozal se quita en minutos. Hay versiones 'sin censura' gratis en internet."
[Pausa]
[Click]
"Sabemos lo que hace. No sabemos cómo. No sabemos qué dejará de funcionar."
- LAND transición a Beat 2: "Sabemos lo que hace. No sabemos cómo. No sabemos qué dejará de funcionar. Y aun así, esta tecnología ya está haciendo daño en gente real. Vamos a verlo."
- NOTA 2026-05-05: los slides Mythos (7 abril, 271 vulnerabilidades, día 1) se movieron al Beat 2, justo antes de "Concentración de poder · la asimetría". El caso vivo aterriza la idea de asimetría con la lista Glasswing como pieza concreta.
-->
