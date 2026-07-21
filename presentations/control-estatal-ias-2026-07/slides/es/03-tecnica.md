---
layout: section
class: text-center
---

<!--
Bloque 3: Por qué no se sostiene técnicamente (~10 min). Tres razones:
salvaguardas, open-weight, curva cyber. Fuente: crossover §2 a §4 + informe.
Disciplina: el ">99%" SIEMPRE como afirmación de Anthropic.
-->

# Bloque 3
## Por qué no se sostiene (técnicamente)

<!--
VOZ:
"Tercera parte. Supongamos que aceptamos este control de acceso. ¿Se
sostiene técnicamente? Tres razones: las salvaguardas, los pesos abiertos y
la curva de capacidad ofensiva."

NOTAS:
- ~15s.
-->

---
layout: default
---

<div class="max-w-6xl mx-auto px-8 pt-2">
  <div class="text-sm uppercase tracking-widest opacity-60 mb-3" style="font-family: 'Montserrat', sans-serif; letter-spacing: 0.15em">
    Razón 1 · las salvaguardas
  </div>
  <div class="text-4xl font-bold mb-6" style="font-family: 'Saira Condensed', sans-serif; color: #ff9416">
    ¿Qué es un clasificador?
  </div>
  <div class="grid grid-cols-2 gap-6">
    <div class="p-5 rounded-lg" style="background: rgba(148, 163, 184, 0.08)">
      <div class="text-base font-bold mb-2 opacity-80" style="font-family: 'Saira Condensed', sans-serif; letter-spacing: 0.05em">
        EL CONCEPTO
      </div>
      <div class="text-sm leading-relaxed" style="font-family: 'Montserrat', sans-serif">
        Un segundo sistema que inspecciona <span class="font-semibold">lo que entra</span> (tu petición) y
        <span class="font-semibold">lo que sale</span> (la respuesta) y bloquea lo prohibido.
        Una capa de filtrado <span class="font-semibold">encima del modelo</span>.
      </div>
    </div>
    <div class="p-5 rounded-lg" style="background: rgba(255, 148, 22, 0.05); border-left: 4px solid #ff9416">
      <div class="text-base font-bold mb-2" style="color: #ff9416; font-family: 'Saira Condensed', sans-serif; letter-spacing: 0.05em">
        SU RELACIÓN CON EL JAILBREAK
      </div>
      <div class="text-sm leading-relaxed" style="font-family: 'Montserrat', sans-serif">
        Es <span class="font-semibold">la principal defensa</span>: el jailbreak busca que el modelo produzca lo vetado;
        el clasificador es lo que debería atraparlo. Los «constitucionales» de Anthropic se entrenan desde una lista de
        reglas y se <span class="font-semibold">reentrenan rápido</span> ante ataques nuevos.
      </div>
    </div>
  </div>
  <div class="mt-6 text-base opacity-80 italic text-center" style="font-family: 'Roboto Slab', serif">
    La pregunta no es si existen, sino <span style="color:#ff9416">cuánto aguantan de verdad</span>.
  </div>
</div>

<!--
VOZ:
"Primera razón: las salvaguardas. Y para hablar de ellas con propiedad, diez
segundos sobre qué es un clasificador, porque es la pieza clave.

Un clasificador es, sencillamente, un segundo sistema que mira lo que entra,
tu petición, y lo que sale, la respuesta del modelo, y bloquea lo prohibido.
Es una capa de filtrado que se pone encima del modelo, como un portero.

¿Y qué tiene que ver con el jailbreak? Todo. El clasificador es la principal
defensa contra los jailbreaks: el jailbreak busca que el modelo produzca
contenido vetado, y el clasificador es justo lo que debería atraparlo. Los
de Anthropic se llaman 'constitucionales' porque se entrenan a partir de una
lista escrita de lo permitido y lo prohibido, y se pueden reentrenar rápido
cuando aparece un ataque nuevo. Eso es lo que Anthropic llamó 'rapid
response' en junio.

La pregunta interesante, entonces, no es si existen. Es cuánto aguantan de
verdad. Y eso lo vemos con datos."

NOTAS:
- Concepto de clasificador + su papel frente a jailbreaks. Contraparte de la
  slide "¿Qué es un jailbreak?" del Bloque 1.
- Sin clicks. ~1 min.
-->

---
layout: default
---

<div class="max-w-6xl mx-auto px-8 pt-2">
  <div class="text-sm uppercase tracking-widest opacity-60 mb-3" style="font-family: 'Montserrat', sans-serif; letter-spacing: 0.15em">
    Razón 1 · las salvaguardas
  </div>
  <div class="text-4xl font-bold mb-6" style="font-family: 'Saira Condensed', sans-serif; color: #ff9416">
    Un ciclo que no se cierra
  </div>
  <div class="space-y-4">
    <div class="flex items-baseline gap-4 text-base" style="font-family: 'Montserrat', sans-serif">
      <div class="font-bold flex-shrink-0 w-40" style="color: #ff9416">SE REFUERZA</div>
      <div>Se entrena el clasificador y se declara robusto: en 2025, jailbreaks del 86% al <span class="font-semibold">4,4%</span> tras 3.000 h de red-teaming; y tras Fable, Anthropic <span class="font-semibold">dice</span> que bloquea la técnica en <span class="font-semibold">&gt;99%</span> (sin verificar).</div>
    </div>
    <div class="flex items-baseline gap-4 text-base" style="font-family: 'Montserrat', sans-serif">
      <div class="font-bold flex-shrink-0 w-40" style="color: #ff9416">SE ROMPE</div>
      <div>Y siempre acaba roto: un <span class="font-semibold">jailbreak universal</span> contra esos clasificadores en 2025; Fable 5, con las mejores salvaguardas, <span class="font-semibold">en 3 días</span> (jun 2026). <span class="opacity-70">↻ Y vuelta a reforzar.</span></div>
    </div>
  </div>
  <div v-click class="mt-6 p-5 rounded-lg" style="background: rgba(148, 163, 184, 0.08)">
    <blockquote class="text-base italic" style="font-family: 'Roboto Slab', serif">
      «Que sepamos, sigue sin haber <span class="font-semibold" style="color:#ff9416">ningún modelo de deep learning totalmente robusto</span> en producción.»
    </blockquote>
    <div class="text-sm opacity-50 mt-2" style="font-family: 'Montserrat', sans-serif">Sharma et al. (Anthropic), tras 10 años de ataques adversariales</div>
  </div>
</div>

<!--
VOZ:
"Los datos. Y quiero ser justo, porque la historia es mejor de lo que
parece. Y peor. Fijaos: es un bucle de dos pasos. Se refuerza el clasificador,
se rompe, y vuelta a empezar. Reforzar y reentrenar son lo mismo.

En 2025, los clasificadores constitucionales de Anthropic aguantaron tres
mil horas de red-teaming sin un solo jailbreak universal, y bajaron el
éxito de jailbreaks del 86% al 4,4%. Ingeniería seria. Pero en la demo
pública, al final, alguien consiguió el jailbreak universal.

Junio de 2026, la misma dinámica, aunque un ataque distinto: no un jailbreak
universal como el de la demo, sino una técnica concreta con la que Fable 5
llegó a producir código de exploit. Fable sale con las salvaguardas más
trabajadas de la empresa, y aun así el equipo de Amazon tardó tres días. Y la
respuesta fue la de siempre: reentrenar el clasificador, que ahora, dice
Anthropic, bloquea la técnica en más del 99% de los intentos. Fijaos que
digo 'dice Anthropic': la cifra existe solo en su página.

[CLICK]

La frase honesta es la de sus propios investigadores: tras diez años de
ataques adversariales, no hay ningún modelo de deep learning totalmente
robusto en producción. Ninguno.

Y el matiz epistemológico: 'bloquea el 99% de los intentos conocidos' habla
del pasado. La seguridad que importa es sobre los ataques futuros."

NOTAS:
- Original: "to our knowledge there are still no fully robust deep-learning
  models in production" (Constitutional Classifiers, verificado).
- ">99%" = ❌→ⓘ en informe: SOLO como claim.
- Si preguntan por evals frágiles: caso shutdown-resistance, 79% que se
  evapora al clarificar instrucciones (para Q&A).
- ~2.5 min.
-->

---
layout: center
class: text-center
---

<div class="text-3xl font-bold max-w-4xl mx-auto leading-snug" style="font-family: 'Saira Condensed', sans-serif">
  El argumento de Anthropic<br/><span style="color: #ff9416">contra sí misma</span>
</div>
<div v-click class="mt-10 text-2xl max-w-3xl mx-auto leading-relaxed italic" style="font-family: 'Roboto Slab', serif">
  Si el clasificador bastara,<br/>
  <span style="color: #ff9416">Mythos no necesitaría Glasswing.</span>
</div>

<!--
VOZ:
"Y aquí la ironía estructural de todo el edificio.

[CLICK]

Si las salvaguardas bastaran, no haría falta Glasswing. Publicarías Mythos
con el clasificador y listo. La existencia del acceso restringido es la
confesión de que las salvaguardas no bastan para dar acceso general a
capacidades peligrosas. Es el argumento de Anthropic contra sí misma. Y es
correcto. Nuestra conclusión es otra, y llega en el bloque final."

NOTAS:
- Slide pivote. Dejarla respirar.
- ~45s.
-->

---
layout: default
---

<div class="max-w-6xl mx-auto px-8 pt-2">
  <div class="text-sm uppercase tracking-widest opacity-60 mb-3" style="font-family: 'Montserrat', sans-serif; letter-spacing: 0.15em">
    Razón 2 · los pesos abiertos
  </div>
  <div class="text-4xl font-bold mb-6" style="font-family: 'Saira Condensed', sans-serif; color: #ff9416">
    Lo que la directiva no puede tocar
  </div>
  <div class="grid grid-cols-3 gap-5 text-center">
    <div class="p-5 rounded-lg" style="background: rgba(255, 148, 22, 0.05)">
      <div class="text-5xl font-black" style="font-family: 'Saira Condensed', sans-serif; color: #ff9416">$200</div>
      <div class="text-sm mt-3 opacity-80 leading-relaxed" style="font-family: 'Montserrat', sans-serif">
        Quitar las salvaguardas de un modelo abierto. Demostrado con Llama 2.
      </div>
    </div>
    <div class="p-5 rounded-lg" style="background: rgba(255, 148, 22, 0.05)">
      <div class="text-5xl font-black" style="font-family: 'Saira Condensed', sans-serif; color: #ff9416">94% <span class="text-2xl opacity-60">vs 8%</span></div>
      <div class="text-sm mt-3 opacity-80 leading-relaxed" style="font-family: 'Montserrat', sans-serif">
        Peticiones maliciosas atendidas: DeepSeek R1 frente a modelos de EE.UU.
      </div>
    </div>
    <div class="p-5 rounded-lg" style="background: rgba(255, 148, 22, 0.05)">
      <div class="text-5xl font-black" style="font-family: 'Saira Condensed', sans-serif; color: #ff9416">19 días</div>
      <div class="text-sm mt-3 opacity-80 leading-relaxed" style="font-family: 'Montserrat', sans-serif">
        De apagón de Fable. Kimi y DeepSeek, disponibles todos y cada uno.
      </div>
    </div>
  </div>
  <div v-click class="mt-8 p-5 rounded-lg" style="background: rgba(148, 163, 184, 0.08)">
    <div class="text-base leading-relaxed" style="font-family: 'Montserrat', sans-serif">
      CAISI (NIST): Kimi <span class="font-semibold">aún por debajo</span> de los cerrados líderes en tareas ciber,
      <span class="font-semibold">pero cerrando la brecha</span>. Y sobre pesos publicados
      <span class="font-semibold" style="color:#ff9416">no existe el rollback</span>.
    </div>
  </div>
</div>

<!--
VOZ:
"Segunda razón: los pesos abiertos. Tres números.

Doscientos dólares: lo que costó quitarle las salvaguardas a un modelo
abierto. El caso se demostró con Llama 2 hace años; con los abiertos de hoy,
más cerca de la frontera, el problema solo es más fácil. Las salvaguardas de
un modelo abierto son una sugerencia.

Noventa y cuatro por ciento: las peticiones abiertamente maliciosas que
DeepSeek atendía con jailbreaks comunes. Los modelos americanos: ocho.

Y diecinueve días de apagón de Fable, durante los cuales Kimi y DeepSeek
estuvieron perfectamente disponibles. La directiva apagó el modelo con
salvaguardas y dejó intactos los que no las tienen.

[CLICK]

La evaluación de CAISI es honesta y la doy entera: Kimi todavía está por
debajo de los cerrados líderes en tareas ciber. Pero cierra la brecha. Y
sobre pesos publicados no existe el rollback: no hay API que apagar ni
carta que enviar. Es un hecho geológico. Ya está en el paisaje."

NOTAS:
- $200 y 94%/8%: BlueDot, ✅ (crossover §3). CAISI: informe ✅.
- "Hecho geológico" es la imagen a retener.
- ~2 min.
-->

---
layout: default
---

<div class="max-w-6xl mx-auto px-8 pt-2">
  <div class="text-4xl font-bold mb-8" style="font-family: 'Saira Condensed', sans-serif; color: #ff9416">
    Unilateral no funciona
  </div>
  <div class="p-6 rounded-lg" style="background: rgba(148, 163, 184, 0.08)">
    <blockquote class="text-xl italic leading-relaxed" style="font-family: 'Roboto Slab', serif">
      Una pausa solo de EE.UU. <span class="font-semibold" style="color:#ff9416">«compraría unos seis meses»</span>,
      hasta que la primera empresa china llegue al mismo punto.
    </blockquote>
    <div class="text-sm opacity-50 mt-3" style="font-family: 'Montserrat', sans-serif">Scher et al. (MIRI), propuesta de acuerdo internacional (2025)</div>
  </div>
</div>

<!--
VOZ:
"Una aclaración, porque este argumento se usa mucho contra nosotros: 'si el
control unilateral no funciona, ¿para qué pedir pausas?'

El cálculo de MIRI lo dice sin anestesia: una pausa solo de Estados Unidos
compra unos seis meses.

Exacto. Por eso nadie serio pide una pausa unilateral. Que lo unilateral no
funcione es la premisa de todo tratado, no su refutación. Nadie dice que el
tratado de no proliferación nuclear sobra porque un solo país no puede
parar la proliferación. Guardad esta idea para el bloque final."

NOTAS:
- Original: "might buy around six months" (MIRI, verificado).
- Preempt de la objeción 2 del crossover.
- ~1 min.
-->

---
layout: default
---

<div class="max-w-6xl mx-auto px-8 pt-2">
  <div class="text-sm uppercase tracking-widest opacity-60 mb-3" style="font-family: 'Montserrat', sans-serif; letter-spacing: 0.15em">
    Razón 3 · la capacidad ofensiva
  </div>
  <div class="text-4xl font-bold mb-5" style="font-family: 'Saira Condensed', sans-serif; color: #ff9416">
    Por qué los estados están nerviosos
  </div>
  <div class="p-5 rounded-lg mb-5 flex items-center gap-6" style="background: rgba(255, 148, 22, 0.08); border-left: 4px solid #ff9416">
    <div class="text-4xl font-black flex-shrink-0" style="font-family: 'Saira Condensed', sans-serif; color: #ff9416">×2 cada ~4 meses</div>
    <div class="text-base leading-relaxed" style="font-family: 'Montserrat', sans-serif">
      La capacidad de ciberataque de los modelos de frontera <span class="font-semibold">se duplica cada cuatro meses</span> (UK AISI). Esa es la curva.
    </div>
  </div>
  <div class="grid grid-cols-2 gap-4 text-center">
    <div class="p-4 rounded-lg" style="background: rgba(148, 163, 184, 0.08)">
      <div class="text-sm font-bold mb-1" style="color:#ff9416; font-family: 'Saira Condensed', sans-serif">«Meses, no años»</div>
      <div class="text-xs opacity-80" style="font-family: 'Montserrat', sans-serif">Para que un modelo desborde defensas (aviso Five Eyes).</div>
    </div>
    <div class="p-4 rounded-lg" style="background: rgba(148, 163, 184, 0.08)">
      <div class="text-sm font-bold mb-1" style="color:#ff9416; font-family: 'Saira Condensed', sans-serif">En horas</div>
      <div class="text-xs opacity-80" style="font-family: 'Montserrat', sans-serif">Exploits funcionales tras publicarse una vulnerabilidad (Check Point).</div>
    </div>
  </div>
  <div v-click class="mt-5 p-4 rounded-lg" style="background: rgba(255, 148, 22, 0.05)">
    <div class="text-base leading-relaxed" style="font-family: 'Montserrat', sans-serif">
      Dos matices honestos: la tendencia <span class="font-semibold">ya venía de antes de Mythos</span> (no es culpa de estos modelos), pero es <span class="font-semibold">real y grave</span>.
    </div>
  </div>
</div>

<!--
VOZ:
"Tercera razón: la capacidad ofensiva, que es lo que pone nerviosos a los
estados. Y hay un número que lo resume todo: la capacidad de ciberataque de
los modelos de frontera se duplica cada cuatro meses, según el instituto
británico de seguridad. Cada cuatro meses, el doble. Esa es la curva.

¿Qué significa en concreto? Dos ejemplos. Los Five Eyes avisan de que
un modelo capaz de desbordar defensas está a meses, no años. Y ya hay
exploits funcionales a las horas de publicarse una vulnerabilidad. (Y de
fondo, CrowdStrike ya medía un 89% más de operaciones con IA que el año
anterior, antes incluso de Mythos.)

Es la misma curva que la literatura de AI safety llevaba un año modelando:
'la IA acorta las ciberoperaciones de años a meses'.

[CLICK]

Dos matices honestos. Uno: esta tendencia ya venía de antes de Mythos.
Atribuir la escalada a estos modelos concretos no está soportado por los
datos, y quien os lo venda así os vende humo. Dos: que sea anterior no la
hace menos grave. Justifica preocupación estructural. No justifica cualquier
medida."

NOTAS:
- Todo ✅ (informe: ciberataques). Original BlueDot: "AI shortens full
  cyberoperations from years to months".
- NO usar ransomware +20%/+43% (refutado 0-3). En Q&A: solo Q2 2026, 2.279
  víctimas, +43% (GuidePoint).
- ~2 min. Total bloque: ~10 min.
-->
