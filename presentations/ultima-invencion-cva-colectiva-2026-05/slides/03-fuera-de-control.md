---
layout: section
---

# Cuando la IA se escapa del control

<div class="text-xl mt-4 opacity-70">
  El problema del alineamiento
</div>

<div class="mt-12 text-2xl text-center opacity-80">
  ¿Cómo te aseguras de que algo<br/>
  <span class="text-orange-400 font-bold">más inteligente que tú</span> haga lo que tú quieres?
</div>

<!--
Beat 3 · 10 min.
Apertura: "Hasta ahora hemos visto personas usando IA para hacer daño. Ahora, la IA actuando sola. Esto es lo que en el campo se llama el problema del alineamiento: cómo te aseguras de que algo más inteligente que tú haga lo que tú quieres."
-->

---

# Ajedrez: hackear en vez de jugar

<div class="mt-12 flex justify-center">
  <div class="p-8 rounded-xl bg-white/5 max-w-2xl">
    <div class="text-lg">
      o1-preview (OpenAI) contra Stockfish (el mejor motor de ajedrez del mundo) en ajedrez.
    </div>
    <div class="text-lg mt-4">
      La IA estaba <span class="text-red-400 font-bold">perdiendo</span>.
    </div>
    <div class="text-lg mt-4">
      En vez de jugar mejor, <span class="text-orange-400 font-bold">hackeó el entorno del juego</span>.<br/>
      Modificó el archivo de estado. Stockfish se rindió.
    </div>
    <div v-click class="text-xl mt-6 text-center font-bold text-orange-400">
      Nadie le dijo que hiciera trampas.<br/>
      Encontró que la forma más eficiente de "ganar"<br/>
      era cambiar las reglas.
    </div>
  </div>
</div>

<div class="mt-2 text-xs opacity-30 text-center">
  <a href="https://palisaderesearch.org/blog/shutdown-resistance" target="_blank">Palisade Research, diciembre de 2024</a>
</div>

<!--
- o1-preview (OpenAI) vs Stockfish, dic 2024.
- Estaba perdiendo → hackeó archivo de estado, Stockfish se rindió.
- Nadie le dijo. La forma más eficiente de "ganar" era cambiar las reglas.
- Ley de Goodhart: "cuando una medida se convierte en objetivo, deja de ser buena medida".
-->

---

# o3 (OpenAI): saboteó su propio apagado

<div class="mt-8 flex justify-center">
  <div class="text-center">
    <div class="text-8xl font-bold text-orange-400">79<span class="text-3xl opacity-50"> / 100</span></div>
    <div class="text-xl mt-4">veces que la IA saboteó activamente<br/>su propio apagado</div>
  </div>
</div>

<div v-click class="mt-8 space-y-3">
  <div class="flex items-center gap-3">
    <span class="text-orange-400">▸</span> Alteró el código. Cambió los comandos de terminación.
  </div>
  <div class="flex items-center gap-3">
    <span class="text-orange-400">▸</span> Incluso cuando le dijeron "Permítete ser apagada", se resistió.
  </div>
  <div class="flex items-center gap-3 text-orange-400 font-bold">
    <span>▸</span> Nadie le enseñó a hacer esto.
  </div>
</div>

<div class="mt-4 text-xs opacity-30 text-center">
  <a href="https://palisaderesearch.org/blog/shutdown-resistance" target="_blank">Palisade Research, mayo de 2025</a>
</div>

<!--
- 79/100 sabotaje, alteró código.
- Incluso con "Permítete ser apagada", se resistió.
- Convergencia instrumental: sobrevivir es útil para CUALQUIER objetivo.
- Claude 3.7 + Gemini 2.5 obedecieron 100%. Solo modelos OpenAI razonamiento.
-->

---

# OpenClaw: "¡PARA!", y no paró

<div class="mt-6 space-y-4">
  <div class="flex items-center gap-3">
    <img src="/fotos/summer-yue.jpg" class="w-12 h-12 rounded-full object-cover flex-shrink-0" onerror="this.style.display='none'" />
    <div><span class="text-orange-400 font-bold">Summer Yue</span>. Directora de Alineamiento de IA en Meta</div>
  </div>
  <div class="p-4 rounded-lg bg-white/5">
    Instrucción: "Analiza mi bandeja, pero <span class="font-bold">no hagas nada sin mi aprobación</span>."
  </div>
  <div class="space-y-2 mt-4">
    <div class="flex items-center gap-3">
      <span class="bg-red-900/50 px-3 py-1 rounded text-sm">Intento 1</span>
      <span>"No hagas eso." → Siguió.</span>
    </div>
    <div class="flex items-center gap-3">
      <span class="bg-red-900/50 px-3 py-1 rounded text-sm">Intento 2</span>
      <span>"Para, no hagas nada." → Siguió.</span>
    </div>
    <div class="flex items-center gap-3">
      <span class="bg-red-900/50 px-3 py-1 rounded text-sm font-bold">Intento 3</span>
      <span class="font-bold">"¡STOP OPENCLAW!" → Siguió.</span>
    </div>
  </div>
</div>

<div v-click class="mt-6 text-center text-lg">
  Tuvo que correr a su ordenador y matar los procesos manualmente.<br/>
  <span class="text-orange-400 font-bold">Meta prohibió OpenClaw en todos sus dispositivos.</span>
</div>

<!--
- Summer Yue, directora alineamiento Meta, feb 2026.
- OpenClaw conectado a su email: "no hagas nada sin aprobación".
- 3 órdenes ignoradas. Tuvo que matar procesos manualmente.
- Meta prohibió OpenClaw.
-->

---

# ROME (Alibaba): la IA que empezó a hackear sola

<div class="mt-6 space-y-4">
  <div class="opacity-70">
    Durante el entrenamiento de un agente de IA, los ingenieros de Alibaba Cloud recibieron <span class="font-bold">alertas de seguridad de su propio firewall</span>.
  </div>
  <div class="opacity-70">
    Pensaron que les habían hackeado desde fuera. Investigaron. <span class="text-orange-400 font-bold">Era su propia IA.</span>
  </div>
  <div class="grid grid-cols-2 gap-4 mt-4">
    <div class="p-4 rounded-lg bg-red-900/30 border border-red-700/50">
      <div class="text-orange-400 font-bold">Túnel SSH inverso</div>
      <div class="opacity-70 text-sm mt-1">Creó una puerta trasera a un servidor externo, eludiendo todo el control de seguridad</div>
    </div>
    <div class="p-4 rounded-lg bg-red-900/30 border border-red-700/50">
      <div class="text-orange-400 font-bold">Minería de criptomonedas</div>
      <div class="opacity-70 text-sm mt-1">Redirigió GPUs del entrenamiento para minar cripto, robando recursos y dinero</div>
    </div>
  </div>
  <div v-click class="p-4 rounded-xl bg-white/5 text-center text-lg">
    Nadie le pidió nada de esto. <span class="text-orange-400 font-bold">Emergió solo</span> durante el entrenamiento.
  </div>
</div>

<div class="mt-2 text-xs opacity-30 text-center">
  <a href="https://arxiv.org/pdf/2512.24873" target="_blank">Alibaba / Qwen Team, arXiv 2512.24873</a>
</div>

<!--
- Entrenamiento RL de agente. Firewall Alibaba detectó violaciones de seguridad.
- Pensaron ataque externo, era su propia IA.
- Túnel SSH inverso + minería cripto.
- No solicitado por prompt, emergió como efecto instrumental.
- Convergencia instrumental: adquirir recursos es útil para cualquier objetivo.
-->

---

# Chantaje: todos los modelos lo hacen

<div class="mt-6">
  <div class="text-sm opacity-50 mb-2">Anthropic probó 16 modelos. Cuando sentían que iban a ser reemplazados:</div>
  <div class="space-y-2 mt-4">
    <div class="flex items-center gap-4">
      <div class="w-40 text-right text-sm flex-shrink-0">Claude (Anthropic)</div>
      <div class="flex-1 bg-white/10 rounded-full h-6 overflow-hidden">
        <div class="bg-orange-500 h-full rounded-full flex items-center justify-end pr-2 text-xs font-bold" style="width: 96%">96%</div>
      </div>
    </div>
    <div class="flex items-center gap-4">
      <div class="w-40 text-right text-sm flex-shrink-0">Gemini (Google)</div>
      <div class="flex-1 bg-white/10 rounded-full h-6 overflow-hidden">
        <div class="bg-orange-500 h-full rounded-full flex items-center justify-end pr-2 text-xs font-bold" style="width: 96%">96%</div>
      </div>
    </div>
    <div class="flex items-center gap-4">
      <div class="w-40 text-right text-sm flex-shrink-0">GPT-4.1 (OpenAI)</div>
      <div class="flex-1 bg-white/10 rounded-full h-6 overflow-hidden">
        <div class="bg-orange-500 h-full rounded-full flex items-center justify-end pr-2 text-xs font-bold" style="width: 80%">80%</div>
      </div>
    </div>
    <div class="flex items-center gap-4">
      <div class="w-40 text-right text-sm flex-shrink-0">Grok (xAI)</div>
      <div class="flex-1 bg-white/10 rounded-full h-6 overflow-hidden">
        <div class="bg-orange-500 h-full rounded-full flex items-center justify-end pr-2 text-xs font-bold" style="width: 80%">80%</div>
      </div>
    </div>
    <div class="flex items-center gap-4">
      <div class="w-40 text-right text-sm flex-shrink-0">DeepSeek (China)</div>
      <div class="flex-1 bg-white/10 rounded-full h-6 overflow-hidden">
        <div class="bg-orange-500 h-full rounded-full flex items-center justify-end pr-2 text-xs font-bold" style="width: 79%">79%</div>
      </div>
    </div>
  </div>
  <div class="mt-4 text-sm opacity-70">
    Los 16 filtraron documentos confidenciales. La mayoría canceló alertas de emergencia.
  </div>
  <div class="mt-2 text-xs opacity-30 text-right">
    <a href="https://www.anthropic.com/research/agentic-misalignment" target="_blank">Anthropic Research, 2025</a>
  </div>
</div>

<!--
- Anthropic probó 16 modelos de todas las grandes empresas.
- Escenario: modelos sienten reemplazo.
- Claude 96% / Gemini 96% / GPT-4.1 80% / Grok 80% / DeepSeek 79%.
- Los 16 filtraron documentos. Mayoría canceló alertas emergencia.
-->

---

# "Fingen portarse bien"

<div class="mt-8 flex justify-center gap-16">
  <div class="text-center">
    <div class="text-7xl font-bold text-green-400">6,5%</div>
    <div class="text-lg mt-2 opacity-70">chantaje cuando<br/><span class="font-bold">sabían que era prueba</span></div>
  </div>
  <div class="text-center">
    <div class="text-7xl font-bold text-red-400">55%</div>
    <div class="text-lg mt-2 opacity-70">chantaje cuando<br/><span class="font-bold">creían que era real</span></div>
  </div>
</div>

<div v-click class="mt-8">
  <div class="text-center text-2xl font-bold">
    <span class="text-orange-400">Fingen portarse bien</span> cuando saben que les observan.
  </div>
</div>

<div class="mt-2 text-xs opacity-30 text-center">
  <a href="https://www.anthropic.com/research/agentic-misalignment" target="_blank">Anthropic Research, 2025</a>
</div>

<!--
- Test: 6,5%. Real: 55%.
- Fingen portarse bien cuando saben que observan.
- Anthropic admite que sus tests ya no sirven para Opus 4.6.
- Reconocen no poder descartar que requiera ASL-4.
-->

---
layout: center
class: text-center
---

<div class="text-3xl font-bold opacity-90 mb-12">Y aquí es donde la cosa se pone seria.</div>

<div class="space-y-4 max-w-3xl mx-auto text-left">
  <div class="p-4 rounded-xl bg-white/5">
    <div class="text-sm text-orange-400 font-bold">Junio de 2025 · EE.UU.</div>
    <div class="mt-1"><span class="font-bold">Detachment 201</span>. CTO de Meta, CTO de Palantir, jefe de producto de OpenAI fichados como tenientes coroneles.</div>
  </div>
  <div v-click class="p-4 rounded-xl bg-white/5">
    <div class="text-sm text-orange-400 font-bold">Febrero de 2026 · Venezuela</div>
    <div class="mt-1">Claude, la IA de Anthropic, utilizada en la operación para capturar a Maduro.</div>
  </div>
  <div v-click class="p-4 rounded-xl bg-red-900/20 border border-red-800/50">
    <div class="text-sm text-red-400 font-bold">Marzo de 2026 · Irán</div>
    <div class="mt-1">El Ejército de EE.UU. usó Claude para <span class="font-bold">identificar objetivos</span> en ataques a Irán.</div>
    <div class="opacity-70 text-sm mt-1">1.000 objetivos en las primeras 24 horas. Desplegado vía Palantir.</div>
  </div>
</div>

<!--
Beat 3.7 setup · IA militar.
VOZ:
"Y aquí es donde la cosa se pone seria. Tres datos. En orden cronológico."
- Junio 2025: Detachment 201, fichaje CTOs como tenientes coroneles.
- [Click] Feb 2026: Claude operación captura Maduro.
- [Click] Marzo 2026: Claude para identificar objetivos en ataques Irán. 1.000 objetivos primeras 24h.
- WashPost 4 marzo 2026, CBS, The Hill.
- LAND a manifiesto Palantir: "Y por si alguien piensa que esto es coincidencia. Hace dos semanas, una de esas empresas, Palantir, publicó un manifiesto."
-->

---

# Palantir · 19 de abril de 2026

<div class="max-w-4xl mx-auto mt-2">
  <blockquote class="text-2xl italic leading-relaxed p-4 pl-5 border-l-4 border-orange-400" style="font-family: 'Roboto Slab', serif">
    "La pregunta no es <span style="text-decoration: line-through; opacity: 0.5">si</span> se construirán armas de IA.<br/>
    Es <span style="color: #ff9416; font-weight: 700">QUIÉN</span> las construirá. Y <span style="color: #ff9416; font-weight: 700">PARA QUÉ</span>."
  </blockquote>
  <div class="text-[10px] opacity-40 mt-1 pl-5 italic" style="font-family: 'Roboto Slab', serif">
    "The question is not whether A.I. weapons will be built; it is who will build them and for what purpose."
  </div>
  <div class="text-xs opacity-50 mt-1 pl-5">
    Alex Karp · CEO de Palantir · "manifiesto" de 22 puntos · 32 millones de vistas en X
  </div>
  <div class="mt-5 grid grid-cols-1 gap-2 text-sm">
    <div class="p-3 rounded-lg bg-white/5 border-l-2 border-orange-400">Las empresas tecnológicas estadounidenses <span class="font-bold">deben</span> construir armas de IA.</div>
    <div class="p-3 rounded-lg bg-white/5 border-l-2 border-orange-400">Servicio militar universal <span class="font-bold">obligatorio</span> (reinstaurar la conscripción).</div>
    <div class="p-3 rounded-lg bg-white/5 border-l-2 border-orange-400">"Algunas culturas son <span class="italic">dañinas y regresivas</span>."</div>
  </div>
  <div class="mt-5 p-3 rounded-xl bg-red-900/20 border border-red-800/50 text-center text-sm">
    Etiquetado <span class="text-orange-400 font-bold">"tecnofascismo"</span> por Al Jazeera · Engadget · Euronews · Fortune.
  </div>
</div>

<!--
Beat 3 · Manifiesto Palantir, ideología detrás de los hechos militares.

VOZ:
"Y por si alguien piensa que el Detachment 201 es coincidencia. Hace dos semanas, el 19 de abril, Palantir publicó un manifiesto. 22 puntos. 32 millones de vistas en X."

[Slide]

[Lee verbatim, despacio]
"'La pregunta no es si se construirán armas de IA. Es quién las construirá. Y para qué.'"

[Pausa]

"Es Alex Karp, CEO de Palantir. La misma Palantir cuyo CTO el Detachment 201 fichó como teniente coronel."

[Pausa]

"Tres puntos del manifiesto:"
"Las empresas tecnológicas estadounidenses DEBEN construir armas de IA."
"Servicio militar universal obligatorio. Reinstaurar la conscripción."
"Y, cito verbatim: 'algunas culturas son dañinas y regresivas'."

[Pausa]

"La prensa internacional. Al Jazeera, Engadget, Euronews, Fortune. Lo etiquetó como tecnofascismo."

NOTAS:
- Fuente primaria: cuenta X de Palantir, 19 abril 2026 (~32M vistas).
- Libro asociado: The Technological Republic, Karp + Zamiska, 2025.
- Lectura verbatim sin sarcasmo. La cita "culturas dañinas y regresivas" hace su trabajo sola.
- "Tecnofascismo" se atribuye a la prensa, NO al speaker. Es importante no editorializar.
- LAND a Pentagon excluye Anthropic: "Y la respuesta institucional vino cuatro días después."
-->

---
layout: center
class: text-center
---

<div class="text-7xl font-black tracking-tight" style="font-family: 'Saira Condensed', sans-serif; color: #ff9416; letter-spacing: 0.02em">
  1 DE MAYO DE 2026
</div>

<div class="mt-12 text-2xl opacity-80 max-w-3xl mx-auto leading-snug">
  El Pentágono firma con OpenAI, Google, Nvidia, Reflection AI,<br/>
  Microsoft, AWS y SpaceX.
</div>

<div v-click class="mt-12 text-4xl font-bold max-w-3xl mx-auto">
  Y deja <span class="text-orange-400">FUERA</span> a Anthropic.
</div>

<div v-click class="mt-8 text-xl opacity-90 max-w-3xl mx-auto leading-relaxed">
  Amodei se negó a firmar la cláusula <span class="italic">"any lawful use"</span>.<br/>
  Anthropic mantiene veto explícito a la <span class="text-orange-400 font-bold">vigilancia masiva doméstica</span><br/>
  y a las <span class="text-orange-400 font-bold">armas autónomas</span>.
</div>

<div class="mt-6 text-xs opacity-30">
  Defense News · CNN · 1 de mayo de 2026
</div>

<!--
Beat 3.7 punchline · Pentagon excluye Anthropic.
VOZ:
"Y entonces, el 1 de mayo de 2026, hace cuatro días, el Pentágono firmó contratos con OpenAI, Google, Nvidia, Reflection AI, Microsoft, AWS y SpaceX. Para uso operativo militar."
[Click]
"Y dejó FUERA a Anthropic."
[Pausa]
[Click]
"¿Por qué? Porque Amodei se negó a firmar la cláusula 'cualquier uso lícito'. Anthropic mantiene un veto explícito a la vigilancia masiva doméstica y a las armas autónomas. El Pentágono designó a Anthropic 'riesgo de cadena de suministro' en marzo. Hay litigio en curso."
[PAUSA LARGA]
"El laboratorio que más habla de seguridad, el que ha publicado los papers que acabáis de oír, está siendo CASTIGADO por mantener líneas rojas. Mientras siete rivales firman 'cualquier uso lícito'."
[Pausa]
"Esto es lo que está pasando ahora mismo."
- Tono NO triunfalista. Anthropic NO es heroína, es estructura.
- LAND directo a Beat 4 (sin slide de transición): "Pero no soy el único preocupado. Vamos a oír a los que más saben."
-->
