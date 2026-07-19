---
layout: section
class: text-center
---

<!--
Bloque 3: Por qué no se sostiene técnicamente (~10 min). Tres patas:
salvaguardas, open-weight, curva cyber. Fuente: crossover §2 a §4 + informe.
Disciplina: el ">99%" SIEMPRE como afirmación de Anthropic.
-->

# Bloque 3
## Por qué no se sostiene (técnicamente)

<!--
VOZ:
"Tercera parte. Supongamos que aceptamos este control de acceso. ¿Se
sostiene técnicamente? Tres patas: las salvaguardas, los pesos abiertos y
la curva de capacidad ofensiva."

NOTAS:
- ~15s.
-->

---
layout: default
---

<div class="max-w-6xl mx-auto px-8 pt-2">
  <div class="text-sm uppercase tracking-widest opacity-60 mb-3" style="font-family: 'Montserrat', sans-serif; letter-spacing: 0.15em">
    Pata 1 · las salvaguardas
  </div>
  <div class="text-4xl font-bold mb-6" style="font-family: 'Saira Condensed', sans-serif; color: #ff9416">
    El gato y el ratón, con datos
  </div>
  <div class="space-y-3">
    <div class="flex items-baseline gap-4 text-base" style="font-family: 'Montserrat', sans-serif">
      <div class="font-bold flex-shrink-0 w-32" style="color: #ff9416">2025</div>
      <div>Clasificadores constitucionales: <span class="font-semibold">3.000 horas</span> de red-teaming sin jailbreak universal. Éxito de jailbreaks: 86% a <span class="font-semibold">4,4%</span>.</div>
    </div>
    <div class="flex items-baseline gap-4 text-base" style="font-family: 'Montserrat', sans-serif">
      <div class="font-bold flex-shrink-0 w-32" style="color: #ff9416">LA DEMO</div>
      <div>En la demo pública, alguien acaba logrando <span class="font-semibold">un jailbreak universal</span>.</div>
    </div>
    <div class="flex items-baseline gap-4 text-base" style="font-family: 'Montserrat', sans-serif">
      <div class="font-bold flex-shrink-0 w-32" style="color: #ff9416">JUN 2026</div>
      <div>Fable 5 sale con salvaguardas reforzadas. <span class="font-semibold">Jailbreak en 3 días.</span></div>
    </div>
    <div class="flex items-baseline gap-4 text-base" style="font-family: 'Montserrat', sans-serif">
      <div class="font-bold flex-shrink-0 w-32" style="color: #ff9416">«&gt;99%»</div>
      <div>El clasificador reentrenado bloquea la técnica, <span class="font-semibold">dice Anthropic</span>. Fuente única, sin verificación independiente.</div>
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
"Pata uno: las salvaguardas. Y quiero ser justo, porque la historia es
mejor de lo que parece. Y peor.

En 2025, los clasificadores constitucionales de Anthropic aguantaron tres
mil horas de red-teaming sin un solo jailbreak universal, y bajaron el
éxito de jailbreaks del 86% al 4,4%. Ingeniería seria. Pero en la demo
pública, al final, alguien consiguió el jailbreak universal.

Junio de 2026, misma película: Fable 5 sale con las salvaguardas más
trabajadas de la empresa. Tres días tardó el equipo de Amazon. Y la
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
    Pata 2 · los pesos abiertos
  </div>
  <div class="text-4xl font-bold mb-6" style="font-family: 'Saira Condensed', sans-serif; color: #ff9416">
    Lo que la directiva no puede tocar
  </div>
  <div class="grid grid-cols-3 gap-5 text-center">
    <div class="p-5 rounded-lg" style="background: rgba(255, 148, 22, 0.05)">
      <div class="text-5xl font-black" style="font-family: 'Saira Condensed', sans-serif; color: #ff9416">$200</div>
      <div class="text-sm mt-3 opacity-80 leading-relaxed" style="font-family: 'Montserrat', sans-serif">
        Deshacer el safety fine-tuning de Llama 2.
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
"Pata dos: los pesos abiertos. Tres números.

Doscientos dólares: lo que costó deshacer el safety fine-tuning de Llama 2.
Las salvaguardas de un modelo abierto son una sugerencia.

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
  <div v-click class="mt-8 text-xl text-center leading-relaxed max-w-4xl mx-auto" style="font-family: 'Roboto Slab', serif">
    Esto no va contra la coordinación.<br/>
    <span style="color: #ff9416">Es la premisa de todo tratado.</span>
  </div>
</div>

<!--
VOZ:
"Una aclaración, porque este argumento se usa mucho contra nosotros: 'si el
control unilateral no funciona, ¿para qué pedir pausas?'

El cálculo de MIRI lo dice sin anestesia: una pausa solo de Estados Unidos
compra unos seis meses.

[CLICK]

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
    Pata 3 · la capacidad ofensiva
  </div>
  <div class="text-4xl font-bold mb-6" style="font-family: 'Saira Condensed', sans-serif; color: #ff9416">
    La curva que asusta a los estados
  </div>
  <div class="space-y-3">
    <div class="flex items-baseline gap-4 text-base" style="font-family: 'Montserrat', sans-serif">
      <div class="font-bold flex-shrink-0 w-32" style="color: #ff9416">FEB</div>
      <div>CrowdStrike, antes de Mythos: operaciones con IA <span class="font-semibold">+89% interanual</span>.</div>
    </div>
    <div class="flex items-baseline gap-4 text-base" style="font-family: 'Montserrat', sans-serif">
      <div class="font-bold flex-shrink-0 w-32" style="color: #ff9416">ABR</div>
      <div>Microsoft: phishing con IA, <span class="font-semibold">54% de clics</span>. El tradicional: 12%.</div>
    </div>
    <div class="flex items-baseline gap-4 text-base" style="font-family: 'Montserrat', sans-serif">
      <div class="font-bold flex-shrink-0 w-32" style="color: #ff9416">JUN</div>
      <div>Five Eyes: modelos que desbordan defensas a <span class="font-semibold">«meses, no años»</span>. UK AISI: la capacidad ofensiva <span class="font-semibold">se duplica cada ~4 meses</span>.</div>
    </div>
    <div class="flex items-baseline gap-4 text-base" style="font-family: 'Montserrat', sans-serif">
      <div class="font-bold flex-shrink-0 w-32" style="color: #ff9416">JUL</div>
      <div>Check Point: exploits funcionales <span class="font-semibold">a las horas</span> de publicarse una vulnerabilidad.</div>
    </div>
  </div>
  <div v-click class="mt-6 p-5 rounded-lg" style="background: rgba(148, 163, 184, 0.08)">
    <div class="text-base leading-relaxed" style="font-family: 'Montserrat', sans-serif">
      Dos honestidades: la tendencia <span class="font-semibold">precede a Mythos</span> (culparle no está soportado).
      Y que sea anterior <span class="font-semibold">no la hace menos grave</span>.
    </div>
  </div>
</div>

<!--
VOZ:
"Pata tres: la curva que explica por qué los estados están nerviosos.

Febrero, antes de Mythos: un 89% más de operaciones adversarias con IA que
el año anterior. Abril: el phishing hecho con IA consigue el 54% de clics;
el tradicional, el 12. Junio: los Five Eyes avisan de que los modelos
capaces de desbordar defensas están a meses, no años, y el instituto
británico estima que la capacidad ofensiva se duplica cada cuatro meses.
Julio: exploits funcionales a las horas de publicarse una vulnerabilidad.

Y un detalle: ese 'meses, no años' es la misma curva que la literatura de
AI safety llevaba un año modelando: 'la IA acorta las ciberoperaciones de
años a meses'.

[CLICK]

Dos honestidades. Una: la tendencia precede a Mythos. Atribuir la escalada
a estos modelos no está soportado por los datos, y quien os lo venda así os
vende humo. Dos: que sea anterior no la hace menos grave. Justifica
preocupación estructural. No justifica cualquier medida."

NOTAS:
- Todo ✅ (informe: ciberataques). Original BlueDot: "AI shortens full
  cyberoperations from years to months".
- NO usar ransomware +20%/+43% (refutado 0-3). En Q&A: solo Q2 2026, 2.279
  víctimas, +43% (GuidePoint).
- ~2 min. Total bloque: ~10 min.
-->
