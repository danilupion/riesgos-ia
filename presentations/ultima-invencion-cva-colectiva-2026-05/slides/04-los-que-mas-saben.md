---
layout: section
---

# Lo que dicen los que más saben

<!--
Beat 4 · 10 min.
Apertura: "Lo que vais a oír ahora no son opiniones mías. Son las palabras de los nombres más respetados del campo. En sus propias frases."
-->

---

# Así piensan los que la construyen

<div class="mt-4 space-y-3">
  <div class="p-3 rounded-xl bg-white/5 border-l-4 border-orange-400 flex items-start gap-3">
    <img src="/fotos/altman.jpg" class="w-16 h-16 rounded-full object-cover flex-shrink-0 mt-1" onerror="this.style.display='none'" />
    <div>
      <div class="font-bold">Sam Altman</div>
      <div class="opacity-50 text-sm">Director de OpenAI · 2015</div>
      <div class="mt-1 italic">"La IA probablemente llevará al fin del mundo, pero mientras tanto, habrá grandes empresas."</div>
    </div>
  </div>
  <div v-click class="p-3 rounded-xl bg-white/5 border-l-4 border-orange-400 flex items-start gap-3">
    <div class="flex flex-col -space-y-2 flex-shrink-0 mt-1">
      <img src="/fotos/page.jpg" class="w-16 h-16 rounded-full object-cover border-2 border-[#0f172a]" onerror="this.style.display='none'" />
      <img src="/fotos/musk.jpg" class="w-16 h-16 rounded-full object-cover border-2 border-[#0f172a]" onerror="this.style.display='none'" />
    </div>
    <div>
      <div class="font-bold">Larry Page vs. Elon Musk</div>
      <div class="opacity-50 text-sm">Cofundador de Google · privado</div>
      <div class="mt-1 italic">Page quería construir "un dios digital". Musk: "Eso destruirá a la humanidad." Page lo llamó <span class="font-bold not-italic text-orange-400">"especista"</span>, por preferir a los humanos.</div>
    </div>
  </div>
  <div v-click class="p-3 rounded-xl bg-white/5 border-l-4 border-orange-400 flex items-start gap-3">
    <img src="/fotos/sutskever.jpg" class="w-16 h-16 rounded-full object-cover flex-shrink-0 mt-1" onerror="this.style.display='none'" />
    <div>
      <div class="font-bold">Ilya Sutskever</div>
      <div class="opacity-50 text-sm">Cofundador y científico jefe de OpenAI · dejó la empresa en 2024</div>
      <div class="mt-1 italic">"La superficie entera de la Tierra cubierta de paneles solares y centros de datos."</div>
    </div>
  </div>
</div>

<!--
- Altman 2015: "fin del mundo, grandes empresas".
- Page → Musk: "especista". Musk: "me gusta la humanidad". Semanas después Musk fundó OpenAI.
- Sutskever: "superficie cubierta".
- Estas son las personas que construyen la IA. Y así piensan.
- Transición a slide Sutskever full-bleed: "Y la imagen que se le ocurrió a Sutskever cuando lo dijo es esta."
-->

---
layout: cover
background: /surface-earth.png
class: text-center
---

<div class="absolute inset-0 flex items-center justify-center px-8">
  <div class="bg-black/65 backdrop-blur-sm rounded-2xl px-10 py-8 max-w-3xl">
    <blockquote class="text-3xl italic font-bold text-white leading-relaxed drop-shadow-lg" style="font-family: 'Roboto Slab', serif">
      "La superficie entera de la Tierra<br/>cubierta de <span style="color: #ff9416">paneles solares y centros de datos</span>."
    </blockquote>
    <div class="text-[11px] opacity-60 italic mt-3 text-white">
      "the entire surface of the Earth covered in solar panels and datacenters."
    </div>
    <div class="text-sm opacity-70 mt-4 text-white">
      Ilya Sutskever · cofundador de OpenAI
    </div>
  </div>
</div>

<!--
Slide Sutskever full-bleed · imagen Tierra + cita superpuesta.

VOZ:
"La imagen que se le ocurrió a Sutskever cuando lo dijo es esta."
[Slide]
"La superficie entera de la Tierra. Cubierta de paneles solares y centros de datos."
[Pausa larga, 2-3 segundos]
"Esto lo dice el que fue científico jefe de OpenAI durante años. Y dejó la empresa en 2024."

NOTAS:
- Imagen heredada de UMA: /surface-earth.png (3,2 MB).
- Tono: el silencio después de la cita hace el trabajo. La imagen es brutal por sí sola.
- LAND a Russell: "Y ahora, los que dicen que esto no debería pasar."
-->

---

# Stuart Russell

<div class="mt-4 flex gap-6 items-start">
  <img src="/fotos/russell.jpg" class="w-36 h-44 rounded-xl object-cover flex-shrink-0 shadow-lg" onerror="this.style.display='none'" />
  <div class="flex-1">
    <div class="opacity-70 text-sm">
      Autor de <em>Inteligencia Artificial: Un Enfoque Moderno</em>, el libro de IA usado en prácticamente todas las universidades del mundo. Senado de EE.UU., Cámara de los Lores, Parlamento Europeo.
    </div>
    <div class="opacity-70 text-sm mt-2">
      Febrero de 2026: <span class="text-orange-400 font-bold">PauseCon Brussels</span>, conferencia de PauseAI con eurodiputados.
    </div>
    <div v-click class="mt-4 p-4 rounded-xl bg-orange-900/20 border-l-4 border-orange-400">
      <div class="italic">"Si las empresas de IA consiguen construir una superinteligencia, la mayoría de los expertos cree que la probabilidad de extinción humana está entre el 10 y el 50 por ciento. <span class="not-italic text-orange-400 font-bold">Es el equivalente de jugar a la ruleta rusa con todo el planeta</span>."</div>
      <div class="text-[10px] opacity-40 mt-2 italic leading-snug">"If AI companies succeed in building a superintelligence, most experts think the chance of human extinction is somewhere between 10 and 50 percent: that's the equivalent of playing Russian roulette with everyone on the planet."</div>
      <div class="text-xs opacity-50 mt-3">PauseCon Brussels · febrero de 2026</div>
      <div class="mt-3 text-center"><span class="text-orange-400 font-bold">p(doom): ~20%</span></div>
    </div>
  </div>
</div>

<!--
- Russell: autor libro de referencia. Senado EEUU, Cámara Lores, Parlamento Europeo.
- Feb 2026: PauseCon Brussels con eurodiputados.
- Verbatim: "Si los laboratorios consiguen construir superinteligencia, la mayoría de expertos cree que la probabilidad de extinción humana está entre 10 y 50%, equivalente a jugar a la ruleta rusa con todo el planeta."
- p(doom) ~20%.
-->

---

# Dario Amodei

<div class="mt-4 flex gap-6 items-start">
<img src="/fotos/amodei.jpg" class="w-36 h-44 rounded-xl object-cover flex-shrink-0 shadow-lg" onerror="this.style.display='none'" />
<div>
<div class="opacity-50 text-sm">CEO de Anthropic · La empresa "más segura" de IA</div>

<div class="mt-4 p-5 rounded-xl bg-white/5 border-l-4 border-orange-400">
  <div class="italic text-xl">
    "La humanidad está a punto de recibir un poder casi inimaginable, y no está nada claro que tengamos la madurez para manejarlo."
  </div>
</div>

<div v-click>
  <div class="mt-6 space-y-3">
    <div class="flex items-start gap-3">
      <span class="text-orange-400">▸</span>
      <span>"Un país de genios en un centro de datos", millones de inteligencias nivel Nobel, 100x más rápido</span>
    </div>
    <div class="flex items-start gap-3">
      <span class="text-orange-400">▸</span>
      <span>Sus modelos posiblemente ya duplican las probabilidades de fabricar armas biológicas</span>
    </div>
  </div>
  <div class="mt-4 text-center">
    <span class="text-orange-400 font-bold">p(doom): 25%</span>
  </div>
</div>
</div>
</div>

<!--
- CEO Anthropic, empresa "más segura". Construyen Claude.
- "Casi inimaginable, no está claro que tengamos madurez."
- "País de genios en un centro de datos."
- Bioarmas duplicadas.
- p(doom) 25%.
-->

---

# Yoshua Bengio

<div class="mt-4 flex gap-6 items-start">
<img src="/fotos/bengio.jpg" class="w-36 h-44 rounded-xl object-cover flex-shrink-0 shadow-lg" onerror="this.style.display='none'" />
<div>
<div class="opacity-50 text-sm">Premio Turing · Primer científico vivo en alcanzar 1 millón de citas académicas (nov 2025)</div>

<div class="mt-4 p-4 rounded-xl bg-white/5 border-l-4 border-orange-400">
  <div class="font-bold">International AI Safety Report 2026</div>
  <div class="opacity-70 text-sm mt-1">Febrero de 2026 · 100 expertos · 30 países · liderado por Bengio.</div>
</div>

<div v-click>
  <div class="mt-4 p-5 rounded-xl bg-white/5 border-l-4 border-orange-400">
    <div class="italic text-xl">
      "La pelota está en <span class="text-orange-400 font-bold not-italic">manos de los políticos</span>."
    </div>
    <div class="text-[10px] opacity-40 mt-2 italic">"The ball is in policymakers' hands."</div>
    <div class="text-xs opacity-50 mt-2">Yoshua Bengio · presentación del informe</div>
  </div>
  <div class="mt-4 text-center">
    <span class="text-orange-400 font-bold">p(doom): 50%</span>
    <span class="opacity-50 text-sm ml-2">Una moneda al aire</span>
  </div>
</div>
</div>
</div>

<!--
- Premio Turing. Primer científico vivo 1M citas (nov 2025).
- Feb 2026: lidera International AI Safety Report 2026. 100 expertos, 30 países.
- "The ball is in policymakers' hands."
- p(doom) 50%.
-->

---

# Geoffrey Hinton

<div class="mt-2 flex gap-6 items-start">
<img src="/fotos/hinton.jpg" class="w-36 h-44 rounded-xl object-cover flex-shrink-0 shadow-lg" onerror="this.style.display='none'" />
<div>
<div class="opacity-50 text-sm">Premio Nobel de Física 2024 · "El padrino de la IA" · Dejó Google en 2023 para hablar libremente</div>

<div class="mt-4 space-y-3">
  <div class="p-4 rounded-xl bg-white/5 border-l-4 border-orange-400">
    <div class="italic">"Existe una amenaza existencial. No tenemos ni idea de si podremos mantener el control."</div>
    <div class="text-[10px] opacity-40 mt-1 italic">"There is an existential threat. We have no idea whether we'll be able to keep control."</div>
    <div class="opacity-50 text-sm mt-1">Discurso del Nobel · diciembre de 2024</div>
  </div>
  <div v-click class="p-4 rounded-xl bg-white/5 border-l-4 border-red-400">
    <div class="italic">"Cualquiera que diga que no hay manera de que esto lleve a la extinción de los humanos, sencillamente <span class="not-italic text-orange-400 font-bold">no está enfrentándose a la realidad</span>."</div>
    <div class="text-[10px] opacity-40 mt-1 italic">"I think anybody who said that there's no way it'll lead to the extinction of humans just isn't facing reality."</div>
    <div class="opacity-50 text-sm mt-1">CBC Ideas · febrero de 2026</div>
  </div>
</div>

<div v-click class="mt-3 text-center">
  <div class="text-3xl font-bold text-orange-400">&lt;1%</div>
  <div class="text-sm opacity-70">de los researchers en IA trabaja en el problema de control</div>
  <div class="mt-3"><span class="text-orange-400 font-bold">p(doom): 50%+</span></div>
</div>
</div>
</div>

<!--
- Premio Nobel Física 2024. Padrino IA. Dejó Google 2023.
- Discurso Nobel: "amenaza existencial, no sabemos si podremos mantener control".
- CBC feb 2026: "anybody who said... just isn't facing reality".
- <1% researchers trabajando en control.
- p(doom) 50%+.
- "Pregúntale a una gallina" disponible para Q&A.
-->

---

# Yann LeCun: la voz discrepante

<div class="mt-4 flex gap-6 items-start">
<img src="/fotos/lecun.jpg" class="w-36 h-44 rounded-xl object-cover flex-shrink-0 shadow-lg" onerror="this.style.display='none'" />
<div>
<div class="opacity-50 text-sm">Ex-jefe de IA en Meta · Premio Turing · Fundador de AMI Labs ($3.500M) · p(doom): &lt;0,01%</div>

<div class="mt-4 p-4 rounded-xl bg-white/5 border-l-4 border-blue-400">
  <div class="italic">"Las preocupaciones existenciales son una auténtica gilipollez."</div>
  <div class="mt-2 opacity-70 text-sm">Dice que la IA no es un fenómeno natural, que nosotros la diseñamos, y que podemos hacerla segura como hicimos con los aviones.</div>
</div>

<div v-click class="mt-6 space-y-3">
  <div class="flex items-start gap-3">
    <span class="text-orange-400">1.</span>
    <span>LeCun trabajó 12 años en Meta. Dejó la empresa para fundar su propia startup de IA valorada en 3.500 millones.</span>
  </div>
  <div class="flex items-start gap-3">
    <span class="text-orange-400">2.</span>
    <span>Un avión no puede decidir cambiar de destino. No puede hackear su navegación. <span class="font-bold">o3 hace exactamente eso.</span></span>
  </div>
  <div class="flex items-start gap-3">
    <span class="text-orange-400">3.</span>
    <span>Cuando el 58% de tus colegas dice al menos 5%, y tú dices 0,01%, <span class="text-orange-400 font-bold">la carga de la prueba está en ti.</span></span>
  </div>
</div>
</div>
</div>

<!--
- En honor a la honestidad: no todos están de acuerdo.
- LeCun: "gilipollez", p(doom) <0,01%.
- 1) AMI Labs $3.500M, interés enorme. 2) Avión no hackea navegación, o3 sí. 3) 58% colegas vs 0,01%, carga prueba en ti.
-->

---

# p(doom): la probabilidad de catástrofe

<div class="mt-4 text-sm opacity-50">¿Qué probabilidad hay de que la IA provoque la extinción?</div>

<div class="mt-4 space-y-1 text-sm">
  <div class="flex items-center gap-2">
    <div class="w-44 text-right">Geoffrey Hinton</div>
    <div class="flex-1 bg-white/10 rounded-full h-5 overflow-hidden"><div class="bg-orange-500 h-full rounded-full flex items-center justify-end pr-2 text-xs" style="width:50%">50%+</div></div>
  </div>
  <div class="flex items-center gap-2">
    <div class="w-44 text-right">Yoshua Bengio</div>
    <div class="flex-1 bg-white/10 rounded-full h-5 overflow-hidden"><div class="bg-orange-500 h-full rounded-full flex items-center justify-end pr-2 text-xs" style="width:50%">50%</div></div>
  </div>
  <div class="flex items-center gap-2">
    <div class="w-44 text-right">Dario Amodei</div>
    <div class="flex-1 bg-white/10 rounded-full h-5 overflow-hidden"><div class="bg-yellow-500 h-full rounded-full flex items-center justify-end pr-2 text-xs" style="width:25%">25%</div></div>
  </div>
  <div class="flex items-center gap-2">
    <div class="w-44 text-right">Stuart Russell</div>
    <div class="flex-1 bg-white/10 rounded-full h-5 overflow-hidden"><div class="bg-yellow-500 h-full rounded-full flex items-center justify-end pr-2 text-xs" style="width:20%">~20%</div></div>
  </div>
  <div class="flex items-center gap-2">
    <div class="w-44 text-right opacity-70">2.778 investigadores (media)</div>
    <div class="flex-1 bg-white/10 rounded-full h-5 overflow-hidden"><div class="bg-yellow-500 h-full rounded-full flex items-center justify-end pr-2 text-xs" style="width:14%">14%</div></div>
  </div>
</div>

<div class="mt-3 flex gap-4 items-center">
  <div class="flex-1 bg-white rounded-lg p-2">
    <img src="/screenshots/ai-survey-extinction-mean.png" class="w-full" />
  </div>
  <div class="flex-1 text-center">
    <div class="text-sm opacity-50">58% de los investigadores: al menos 5% de probabilidad</div>
    <div class="mt-2 text-xs opacity-30">Fuente: Grace et al. (2024), encuesta a 2.778 investigadores de IA. <a href="https://arxiv.org/abs/2401.02843" target="_blank" class="underline">arxiv.org/abs/2401.02843</a></div>
  </div>
</div>

<!--
- Hinton 50%+, Bengio 50%, Amodei 25%, Russell ~20%.
- Encuesta 2.778 investigadores: media 14%. 58% al menos 5%.
- LeCun <0,01% prácticamente solo.
-->

---
layout: center
class: text-center
---

<div class="space-y-6">
  <div class="text-xl opacity-50 mb-4">Riesgo catastrófico que consideramos aceptable:</div>

  <div class="flex items-center justify-center gap-6">
    <div class="text-lg whitespace-nowrap text-right">Vuelo comercial</div>
    <div class="text-3xl font-bold text-green-400">1 en 5.000.000</div>
    <div class="text-xs opacity-40">por vuelo <span class="ml-2">(0,00002%)</span></div>
  </div>
  <div v-click class="flex items-center justify-center gap-6">
    <div class="text-lg whitespace-nowrap text-right">Accidente nuclear catastrófico</div>
    <div class="text-3xl font-bold text-green-400">1 en 100.000</div>
    <div class="text-xs opacity-40">por año <span class="ml-2">(0,001%)</span></div>
  </div>
  <div v-click>
    <div class="flex items-center justify-center gap-6">
      <div class="text-lg whitespace-nowrap text-right">Extinción por IA</div>
      <div class="text-5xl font-bold text-red-400">1 de cada 7</div>
      <div class="text-xs opacity-40">(14%) según 2.778 investigadores · Grace et al., 2024</div>
    </div>
    <div class="text-xl mt-8 opacity-70 text-center">
      <span class="text-orange-400 font-bold">Como civilización, estamos aceptando este riesgo para nuestra especie.</span>
    </div>
  </div>
</div>

<!--
- Aviación: 1 en 5M por vuelo. Nuclear: 1 en 100K por año.
- IA: 14%. 1 de cada 7.
- Tenemos estándares de precaución. No los aplicamos aquí.
- LAND directo a Beat 5: "Tenemos a los nombres más respetados del campo, las propias empresas, los institutos de seguridad, las Naciones Unidas. Todos diciendo que hay un riesgo no despreciable. La pregunta es: ¿qué hacemos?"
-->
