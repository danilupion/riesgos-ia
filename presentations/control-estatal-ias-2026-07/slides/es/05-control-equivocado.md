---
layout: section
class: text-center
---

<!--
Bloque 5: el clímax (~7 min). La tesis completa: control estatal sí, pero
el equivocado. Tabla de contraste eje por eje, la objeción Drago/Laine
respondida, síntesis. Fuente: crossover §9 + objeciones consolidadas.
-->

# Bloque 5
## Control estatal, sí. Pero el equivocado.

<!--
VOZ:
"Última parte. Volvamos a la pregunta del título — y respondámosla entera."

NOTAS:
- ~10s.
-->

---
layout: default
---

<div class="max-w-6xl mx-auto px-8 pt-2">
  <div class="text-sm uppercase tracking-widest opacity-60 mb-3" style="font-family: 'Montserrat', sans-serif; letter-spacing: 0.15em">
    Lo que un control bien hecho pediría — según la propia literatura
  </div>
  <div class="text-4xl font-bold mb-6" style="font-family: 'Saira Condensed', sans-serif; color: #ff9416">
    El contraste, eje por eje
  </div>
  <table class="w-full text-sm" style="font-family: 'Montserrat', sans-serif">
    <thead>
      <tr class="text-left uppercase tracking-wider" style="font-family: 'Saira Condensed', sans-serif; letter-spacing: 0.08em">
        <th class="pb-3 opacity-60 font-normal">Eje</th>
        <th class="pb-3 opacity-80" style="color:#94a3b8">El control de 2026</th>
        <th class="pb-3" style="color:#ff9416">Lo que pide PauseAI</th>
      </tr>
    </thead>
    <tbody class="align-top">
      <tr v-click class="border-t" style="border-color: rgba(148,163,184,0.15)">
        <td class="py-2 pr-4 opacity-60">Base legal</td>
        <td class="py-2 pr-4">EO «voluntaria», cartas, directivas</td>
        <td class="py-2 font-semibold">Tratado ratificado</td>
      </tr>
      <tr v-click class="border-t" style="border-color: rgba(148,163,184,0.15)">
        <td class="py-2 pr-4 opacity-60">Alcance</td>
        <td class="py-2 pr-4">Unilateral (EE.UU.)</td>
        <td class="py-2 font-semibold">Multilateral, incluida China</td>
      </tr>
      <tr v-click class="border-t" style="border-color: rgba(148,163,184,0.15)">
        <td class="py-2 pr-4 opacity-60">Criterio de acceso</td>
        <td class="py-2 pr-4">No público (Glasswing)</td>
        <td class="py-2 font-semibold">Umbrales públicos de cómputo/capacidad</td>
      </tr>
      <tr v-click class="border-t" style="border-color: rgba(148,163,184,0.15)">
        <td class="py-2 pr-4 opacity-60">Verificación</td>
        <td class="py-2 pr-4">Ninguna — prerrogativa</td>
        <td class="py-2 font-semibold">Tracking de chips, inspección, comisión</td>
      </tr>
      <tr v-click class="border-t" style="border-color: rgba(148,163,184,0.15)">
        <td class="py-2 pr-4 opacity-60">Eficacia vs. open-weight</td>
        <td class="py-2 pr-4">Nula (Kimi intacto)</td>
        <td class="py-2 font-semibold">El umbral aplica al <i>entrenamiento</i>, no solo al acceso</td>
      </tr>
      <tr v-click class="border-t" style="border-color: rgba(148,163,184,0.15)">
        <td class="py-2 pr-4 opacity-60">Legitimidad</td>
        <td class="py-2 pr-4">Quien tiene la palanca</td>
        <td class="py-2 font-semibold">Quien firma y se somete a inspección</td>
      </tr>
    </tbody>
  </table>
</div>

<!--
VOZ:
"Esta tabla es la charla entera en una slide.

[CLICK] Base legal: lo que hay son cartas y una orden ejecutiva 'voluntaria';
lo que pedimos es un tratado ratificado. [CLICK] Alcance: unilateral contra
multilateral — incluida China, porque sin China son seis meses de nada,
como vimos. [CLICK] Criterio: Glasswing es opaco; un umbral de cómputo es
un número público que cualquiera puede auditar. [CLICK] Verificación:
ninguna contra tracking de chips e inspección — el modelo IAEA. [CLICK]
Open-weight: el control de acceso llega tarde por definición; un umbral de
entrenamiento actúa antes de que los pesos existan. [CLICK] Y legitimidad:
la del que tiene la palanca, contra la del que firma y se deja
inspeccionar.

No es una tabla de 'estado malo, tratado bueno'. Es la misma intuición —
la frontera es demasiado peligrosa para gestionarla con salvaguardas y
mercado — implementada con y sin los mecanismos que la hacen legítima y
eficaz."

NOTAS:
- La columna PauseAI se apoya en: aitreaty.org (umbrales de cómputo con
  ratchet, CERN de safety, APIs seguras, comisión de cumplimiento; "similar
  to the IAEA"), MIRI (FLOP thresholds verificados por tracking de chips),
  Wasil (verificación = el valor del modelo IAEA). Citas verificadas en
  crossover §9 — tenerlas a mano para Q&A.
- ~2 min.
-->

---
layout: default
---

<div class="max-w-6xl mx-auto px-8 pt-2">
  <div class="text-sm uppercase tracking-widest opacity-60 mb-3" style="font-family: 'Montserrat', sans-serif; letter-spacing: 0.15em">
    La objeción seria — y va dirigida a nosotros
  </div>
  <div class="text-4xl font-bold mb-6" style="font-family: 'Saira Condensed', sans-serif; color: #ff9416">
    «Vuestra pausa también concentra poder»
  </div>
  <div class="p-5 rounded-lg mb-5" style="background: rgba(148, 163, 184, 0.08)">
    <div class="text-sm leading-relaxed" style="font-family: 'Montserrat', sans-serif">
      Drago & Laine (<i>The Intelligence Curse</i>) agrupan la propuesta de gobernanza global de
      <span class="font-semibold">PauseAI</span> con el Panopticon de Bostrom y la nacionalización de Aschenbrenner:
      respuestas centralizadoras que podrían <span class="font-semibold">provocar el lock-in que temen</span>.
      Toner: <span class="italic" style="font-family:'Roboto Slab',serif">"if we handle them by massively concentrating power, we haven't succeeded."</span>
    </div>
  </div>
  <div class="space-y-3">
    <div v-click class="flex items-baseline gap-4 text-base" style="font-family: 'Montserrat', sans-serif">
      <div class="font-bold flex-shrink-0 w-8" style="color: #ff9416">1</div>
      <div><span class="font-semibold">Concedemos el riesgo.</span> Por eso el tratado es procedimental — umbrales públicos, verificación mutua, comisión — y no la entrega de la frontera a un ejecutivo.</div>
    </div>
    <div v-click class="flex items-baseline gap-4 text-base" style="font-family: 'Montserrat', sans-serif">
      <div class="font-bold flex-shrink-0 w-8" style="color: #ff9416">2</div>
      <div><span class="font-semibold">Mirad la alternativa real.</span> 2026 demuestra que <i>sin</i> tratado no hay descentralización dinámica: hay concentración ad hoc sin contrapesos — todos los defectos que Drago & Laine temen, ninguna de las salvaguardas.</div>
    </div>
    <div v-click class="flex items-baseline gap-4 text-base" style="font-family: 'Montserrat', sans-serif">
      <div class="font-bold flex-shrink-0 w-8" style="color: #ff9416">3</div>
      <div><span class="font-semibold">La pausa es lo más reversible del menú.</span> Pausar se puede des-pausar. Difundir pesos no se puede des-difundir. Un lock-in reversible no es un lock-in.</div>
    </div>
  </div>
</div>

<!--
VOZ:
"Y ahora la objeción seria — que además va dirigida a nosotros con nombre y
apellido. En la literatura del curse de la inteligencia, Drago y Laine
agrupan la propuesta de PauseAI con el Panopticon de Bostrom y la
nacionalización de Aschenbrenner: dicen que las respuestas centralizadoras
podrían provocar exactamente el lock-in de poder que temen. Y Helen Toner
lo destila: si gestionamos los riesgos concentrando poder masivamente, no
hemos tenido éxito.

Tres respuestas.

[CLICK] Uno: concedemos el riesgo. En serio. Toda gobernanza fuerte puede
degenerar. Precisamente por eso lo que pedimos es procedimental — números
públicos, inspección mutua, una comisión — y no 'entregadle la frontera a
un ejecutivo'.

[CLICK] Dos: mirad la alternativa real, que ya no es hipotética. 2026 es el
experimento: sin tratado no obtienes descentralización dinámica. Obtienes
concentración ad hoc sin contrapesos. La versión con todos los defectos que
Drago y Laine temen y ninguna de las salvaguardas.

[CLICK] Y tres, el argumento que me parece decisivo: la pausa es la medida
más reversible de todo el menú de opciones. Pausar se puede des-pausar
mañana. Difundir pesos no se puede des-difundir nunca. Un lock-in
reversible no es un lock-in — es un semáforo."

NOTAS:
- Preempt central (crossover: objeción 1). El criterio de Toner se usa A
  FAVOR: poder constituido y reversible ≠ poder arbitrario.
- ~2 min.
-->

---
layout: center
class: text-center
---

<div class="text-sm uppercase tracking-widest opacity-60 mb-8" style="font-family: 'Montserrat', sans-serif; letter-spacing: 0.15em">
  La respuesta a la pregunta del título
</div>
<div class="text-4xl font-bold max-w-4xl mx-auto leading-snug" style="font-family: 'Saira Condensed', sans-serif">
  ¿Ha comenzado la era del control estatal<br/>de la IA de frontera?
</div>
<div v-click class="mt-10 text-2xl max-w-4xl mx-auto leading-relaxed" style="font-family: 'Roboto Slab', serif">
  <span style="color: #ff9416">Sí — de facto.</span> Ad hoc, unilateral, sin verificación,<br/>
  sin criterio público, e inefectivo contra los pesos abiertos.
</div>
<div v-click class="mt-8 text-2xl italic max-w-4xl mx-auto" style="font-family: 'Roboto Slab', serif; color: #ff9416">
  El control equivocado — y la ventana para pedir el correcto es ahora.
</div>

<!--
VOZ:
"Así que la respuesta completa a la pregunta del título.

¿Ha comenzado la era del control estatal de la IA de frontera?

[CLICK]

Sí. De facto. Un gobierno decide hoy quién accede a los modelos más capaces
del mundo. Pero es un control ad hoc, unilateral, sin verificación, sin
criterio público — y estructuralmente inefectivo contra la frontera abierta.

[CLICK]

Es el control equivocado. Y esa es exactamente la oportunidad: el tabú de
'los estados no deben tocar la frontera' ya está roto — lo rompió el propio
gobierno americano. La conversación ya no es si gobernar la frontera, sino
cómo. Y la ventana para pedir la versión correcta — tratado, umbrales,
verificación — es ahora, mientras la arquitectura todavía se está
fraguando."

NOTAS:
- La síntesis. "El tabú ya está roto" es el regalo estratégico del episodio.
- ~1.5 min. Total bloque: ~6-7 min.
-->
