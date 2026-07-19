---
layout: section
class: text-center
---

<!--
Bloque 3: Por qué el control actual no se sostiene técnicamente (~10 min).
Tres patas: clasificadores (gato y ratón), open-weight (la puerta no
cierra), cyber (la curva que asusta). Fuente: crossover §2-§4 + informe.
Disciplina: el ">99%" SIEMPRE como afirmación de Anthropic, nunca como hecho.
-->

# Bloque 3
## Por qué no se sostiene (técnicamente)

<!--
VOZ:
"Tercera parte. Supongamos que aceptamos el control de acceso como está.
¿Se sostiene técnicamente? Tres patas: las salvaguardas, los pesos abiertos,
y la curva de capacidad ofensiva."

NOTAS:
- ~15s.
-->

---
layout: default
---

<div class="max-w-6xl mx-auto px-8 pt-2">
  <div class="text-sm uppercase tracking-widest opacity-60 mb-3" style="font-family: 'Montserrat', sans-serif; letter-spacing: 0.15em">
    Pata 1 — las salvaguardas
  </div>
  <div class="text-4xl font-bold mb-6" style="font-family: 'Saira Condensed', sans-serif; color: #ff9416">
    El gato y el ratón, con datos
  </div>
  <div class="space-y-3">
    <div v-click class="flex items-baseline gap-4 text-base" style="font-family: 'Montserrat', sans-serif">
      <div class="font-bold flex-shrink-0 w-40" style="color: #ff9416">2025</div>
      <div>Constitutional Classifiers (Anthropic): el prototipo aguanta <span class="font-semibold">3.000 horas de red-teaming</span> sin jailbreak universal. Éxito de jailbreaks: 86% → <span class="font-semibold">4,4%</span>.</div>
    </div>
    <div v-click class="flex items-baseline gap-4 text-base" style="font-family: 'Montserrat', sans-serif">
      <div class="font-bold flex-shrink-0 w-40" style="color: #ff9416">…LA DEMO</div>
      <div>En la demo pública, un participante acaba logrando <span class="font-semibold">un jailbreak universal</span>: respuestas detalladas a las ocho preguntas prohibidas.</div>
    </div>
    <div v-click class="flex items-baseline gap-4 text-base" style="font-family: 'Montserrat', sans-serif">
      <div class="font-bold flex-shrink-0 w-40" style="color: #ff9416">JUN 2026</div>
      <div>Fable 5 sale con salvaguardas reforzadas → <span class="font-semibold">jailbreak reportado en 3 días</span> (Amazon) → rollback → clasificador reentrenado.</div>
    </div>
    <div v-click class="flex items-baseline gap-4 text-base" style="font-family: 'Montserrat', sans-serif">
      <div class="font-bold flex-shrink-0 w-40" style="color: #ff9416">«&gt;99%»</div>
      <div>Anthropic <span class="font-semibold">afirma</span> que el nuevo clasificador bloquea la técnica en más del 99% de los intentos. <span class="opacity-70">Fuente única: su propia página. Sin verificación independiente.</span></div>
    </div>
  </div>
  <div v-click class="mt-6 p-5 rounded-lg" style="background: rgba(148, 163, 184, 0.08)">
    <blockquote class="text-base italic" style="font-family: 'Roboto Slab', serif">
      "…to our knowledge there are still <span class="font-semibold" style="color:#ff9416">no fully robust deep-learning models in production</span>."
    </blockquote>
    <div class="text-sm opacity-50 mt-2" style="font-family: 'Montserrat', sans-serif">— Sharma et al., <i>Constitutional Classifiers</i> (Anthropic) — sobre 10 años de ataques adversariales</div>
  </div>
</div>

<!--
VOZ:
"Pata uno: las salvaguardas. Y quiero ser justo con ellas, porque la
historia es mejor de lo que parece — y peor.

[CLICK] En 2025 Anthropic publicó Constitutional Classifiers. El prototipo
aguantó tres mil horas de red-teaming sin un solo jailbreak universal. La
versión de producción redujo el éxito de jailbreaks del ochenta y seis por
ciento al cuatro coma cuatro. Eso es ingeniería seria.

[CLICK] Pero en la demo pública, al final, un participante consiguió un
jailbreak universal: las ocho preguntas prohibidas, respondidas.

[CLICK] Junio de 2026, misma película: Fable 5 sale con las salvaguardas
más trabajadas de la historia de la empresa. Tres días. Tres días tardó el
equipo de Amazon en encontrar la técnica que forzó el rollback.

[CLICK] Y la respuesta fue la de siempre: reentrenar el clasificador. Que
ahora, dice Anthropic, bloquea la técnica en más del noventa y nueve por
ciento de los intentos. Fijaos que digo 'dice Anthropic': esa cifra existe
solo en su página. En nuestro informe está degradada a afirmación-de-parte,
y así os la doy.

[CLICK] Porque la frase honesta es la de sus propios investigadores: tras
diez años de ataques adversariales, 'no hay, que sepamos, ningún modelo de
deep learning totalmente robusto en producción'. Ninguno.

Epistemológicamente: 'bloquea el 99% de los intentos conocidos' es una
afirmación sobre el pasado. La seguridad que importa es sobre los ataques
futuros. Es el problema de la inducción con presupuesto de inferencia."

NOTAS:
- Números CC verificados (crossover §2). ">99%" = ❌→ⓘ en informe: SOLO como claim.
- Si preguntan por el 79% de shutdown-resistance: ejemplo simétrico de cifra
  titular que se evapora con la metodología (DeepMind vs Palisade) — tenerlo
  preparado para Q&A, no está en slide.
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
"Y aquí está la ironía estructural de todo el edificio.

[CLICK]

Si las salvaguardas bastaran — si un clasificador reentrenado de verdad
cerrara el problema — entonces no haría falta Glasswing. Publicarías Mythos
con el clasificador y a correr. La existencia misma del acceso restringido
es la confesión de que las salvaguardas no fundamentan acceso general a
capacidades peligrosas. Ese es el argumento de Anthropic contra sí misma —
y es correcto. La conclusión que nosotros sacamos es distinta, y la veremos
en el bloque final."

NOTAS:
- Slide pivote. Corta, dejarla respirar.
- ~45s.
-->

---
layout: default
---

<div class="max-w-6xl mx-auto px-8 pt-2">
  <div class="text-sm uppercase tracking-widest opacity-60 mb-3" style="font-family: 'Montserrat', sans-serif; letter-spacing: 0.15em">
    Pata 2 — los pesos abiertos
  </div>
  <div class="text-4xl font-bold mb-6" style="font-family: 'Saira Condensed', sans-serif; color: #ff9416">
    Lo que la directiva no puede tocar
  </div>
  <div class="grid grid-cols-3 gap-5 text-center">
    <div v-click class="p-5 rounded-lg" style="background: rgba(255, 148, 22, 0.05)">
      <div class="text-5xl font-black" style="font-family: 'Saira Condensed', sans-serif; color: #ff9416">$200</div>
      <div class="text-sm mt-3 opacity-80 leading-relaxed" style="font-family: 'Montserrat', sans-serif">
        Coste de deshacer el safety fine-tuning de Llama 2-Chat.
      </div>
    </div>
    <div v-click class="p-5 rounded-lg" style="background: rgba(255, 148, 22, 0.05)">
      <div class="text-5xl font-black" style="font-family: 'Saira Condensed', sans-serif; color: #ff9416">94% <span class="text-2xl opacity-60">vs 8%</span></div>
      <div class="text-sm mt-3 opacity-80 leading-relaxed" style="font-family: 'Montserrat', sans-serif">
        Peticiones maliciosas (con jailbreaks comunes) atendidas: DeepSeek R1-0528 vs modelos de referencia de EE.UU.
      </div>
    </div>
    <div v-click class="p-5 rounded-lg" style="background: rgba(255, 148, 22, 0.05)">
      <div class="text-5xl font-black" style="font-family: 'Saira Condensed', sans-serif; color: #ff9416">19 días</div>
      <div class="text-sm mt-3 opacity-80 leading-relaxed" style="font-family: 'Montserrat', sans-serif">
        Duró el apagón de Fable. Kimi y DeepSeek estuvieron disponibles cada uno de esos días.
      </div>
    </div>
  </div>
  <div v-click class="mt-8 p-5 rounded-lg" style="background: rgba(148, 163, 184, 0.08)">
    <div class="text-base leading-relaxed" style="font-family: 'Montserrat', sans-serif">
      CAISI (NIST): Kimi K2 Thinking <span class="font-semibold">aún por debajo</span> de los modelos cerrados líderes en tareas
      agénticas cyber — <span class="font-semibold">pero cerrando la brecha</span>. Y una vez publicados los pesos,
      <span class="font-semibold" style="color:#ff9416">no hay rollback posible</span>: no hay API que apagar, ni carta que enviar.
    </div>
  </div>
</div>

<!--
VOZ:
"Pata dos: los pesos abiertos. Tres números.

[CLICK] Doscientos dólares. Eso costó deshacer el safety fine-tuning de
Llama 2. Las salvaguardas de un modelo open-weight son una sugerencia.

[CLICK] Noventa y cuatro por ciento. La fracción de peticiones abiertamente
maliciosas que DeepSeek R1 atendía con jailbreaks comunes. Los modelos de
referencia americanos: ocho por ciento. Esa brecha de salvaguardas ya está
en producción, hoy, para cualquiera.

[CLICK] Y diecinueve días. Lo que duró el apagón de Fable. Durante cada uno
de esos diecinueve días, Kimi y DeepSeek estuvieron perfectamente
disponibles. La directiva de Commerce apagó el modelo con salvaguardas y
dejó intactos los que no las tienen.

[CLICK] La evaluación de CAISI es honesta y hay que darla entera: Kimi
todavía está por debajo de los cerrados líderes en tareas cyber agénticas.
Pero está cerrando la brecha — y sobre pesos publicados no existe el
rollback. No hay API que apagar. No hay carta que enviar. Es un hecho
geológico: ya está en el paisaje."

NOTAS:
- $200 y 94%/8%: BlueDot (crossover §3), ✅. CAISI: informe (✅). "Hecho
  geológico" es la imagen a retener.
- ~2 min.
-->

---
layout: default
---

<div class="max-w-6xl mx-auto px-8 pt-2">
  <div class="text-sm uppercase tracking-widest opacity-60 mb-3" style="font-family: 'Montserrat', sans-serif; letter-spacing: 0.15em">
    La consecuencia estratégica
  </div>
  <div class="text-4xl font-bold mb-8" style="font-family: 'Saira Condensed', sans-serif; color: #ff9416">
    Unilateral no funciona
  </div>
  <div class="p-6 rounded-lg" style="background: rgba(148, 163, 184, 0.08)">
    <blockquote class="text-xl italic leading-relaxed" style="font-family: 'Roboto Slab', serif">
      Una pausa solo de EE.UU. <span class="font-semibold" style="color:#ff9416">"might buy around six months"</span>
      hasta que la primera empresa china alcance el punto de corte.
    </blockquote>
    <div class="text-sm opacity-50 mt-3" style="font-family: 'Montserrat', sans-serif">— Scher et al. (MIRI), <i>An International Agreement to Prevent the Premature Creation of ASI</i> (2025)</div>
  </div>
  <div v-click class="mt-8 text-xl text-center leading-relaxed max-w-4xl mx-auto" style="font-family: 'Roboto Slab', serif">
    Esto <span class="font-semibold">no es un argumento contra coordinar</span>.<br/>
    <span style="color: #ff9416">Es la premisa de un tratado</span> — no su refutación.
  </div>

</div>

<!--
VOZ:
"Y aquí una aclaración importante, porque este argumento se usa mucho contra
nosotros. 'Si el gating unilateral no funciona, ¿para qué pedir pausas?'

El cálculo de MIRI para su propuesta de acuerdo internacional lo dice sin
anestesia: una pausa solo de Estados Unidos compra unos seis meses, hasta
que la primera empresa china llegue al mismo punto.

[CLICK]

Exacto. Por eso nadie serio pide una pausa unilateral. Que el control
unilateral no funcione no es un argumento contra coordinar: es la premisa
de todo tratado. Nadie dice que el TNP sobra porque un solo país no puede
parar la proliferación nuclear. Guardad esta idea — es el corazón del
bloque final."

NOTAS:
- Cita MIRI verificada (crossover §3/§9). Preempt de la objeción 2.
- ~1 min.
-->

---
layout: default
---

<div class="max-w-6xl mx-auto px-8 pt-2">
  <div class="text-sm uppercase tracking-widest opacity-60 mb-3" style="font-family: 'Montserrat', sans-serif; letter-spacing: 0.15em">
    Pata 3 — la capacidad ofensiva
  </div>
  <div class="text-4xl font-bold mb-6" style="font-family: 'Saira Condensed', sans-serif; color: #ff9416">
    La curva que asusta a los estados
  </div>
  <div class="space-y-3">
    <div v-click class="flex items-baseline gap-4 text-base" style="font-family: 'Montserrat', sans-serif">
      <div class="font-bold flex-shrink-0 w-32" style="color: #ff9416">FEB 2026</div>
      <div>CrowdStrike (línea base <span class="font-semibold">pre-Mythos</span>): operaciones adversarias con IA <span class="font-semibold">+89% interanual</span>; breakout medio 29 min.</div>
    </div>
    <div v-click class="flex items-baseline gap-4 text-base" style="font-family: 'Montserrat', sans-serif">
      <div class="font-bold flex-shrink-0 w-32" style="color: #ff9416">ABR 2026</div>
      <div>Microsoft: phishing con IA, <span class="font-semibold">54% de click-through</span> frente a ~12% del tradicional.</div>
    </div>
    <div v-click class="flex items-baseline gap-4 text-base" style="font-family: 'Montserrat', sans-serif">
      <div class="font-bold flex-shrink-0 w-32" style="color: #ff9416">JUN 2026</div>
      <div>Aviso conjunto Five Eyes: modelos capaces de desbordar defensas a <span class="font-semibold">"months, not years"</span>. UK AISI: la capacidad cyber-ofensiva de frontera <span class="font-semibold">se duplica cada ~4 meses</span>.</div>
    </div>
    <div v-click class="flex items-baseline gap-4 text-base" style="font-family: 'Montserrat', sans-serif">
      <div class="font-bold flex-shrink-0 w-32" style="color: #ff9416">JUL 2026</div>
      <div>Check Point: exploits funcionales <span class="font-semibold">a las horas</span> de publicarse una vulnerabilidad; caso VoidLink: ~88.000 líneas de tooling ofensivo, un desarrollador, una semana.</div>
    </div>
  </div>
  <div v-click class="mt-6 p-5 rounded-lg" style="background: rgba(148, 163, 184, 0.08)">
    <blockquote class="text-base italic" style="font-family: 'Roboto Slab', serif">
      "AI shortens full cyberoperations <span class="font-semibold" style="color:#ff9416">from years to months</span>… AI accelerates the speed of the attack from hours to minutes."
    </blockquote>
    <div class="text-sm opacity-50 mt-2" style="font-family: 'Montserrat', sans-serif">— Li-Lian Ang, BlueDot Impact (2025) — el modelo de amenaza, un año antes del aviso de Five Eyes</div>
  </div>
</div>

<!--
VOZ:
"Pata tres: la curva que explica por qué los estados están nerviosos.

[CLICK] Febrero, antes de Mythos: CrowdStrike mide un ochenta y nueve por
ciento más de operaciones adversarias con IA que el año anterior. [CLICK]
Abril: Microsoft mide que el phishing generado con IA consigue un
cincuenta y cuatro por ciento de clics — el tradicional, doce. [CLICK]
Junio: los Five Eyes avisan de que los modelos capaces de desbordar
defensas están a 'meses, no años', y el instituto británico estima que la
capacidad ofensiva de frontera se duplica cada cuatro meses. [CLICK]
Julio: exploits funcionales a las horas de publicarse una vulnerabilidad.

[CLICK] Y el detalle que me parece más revelador: ese 'meses, no años' de
los servicios de inteligencia es exactamente la curva que la literatura de
AI safety llevaba tiempo modelando — 'la IA acorta las ciberoperaciones de
años a meses, y la velocidad de ataque de horas a minutos'. Esto está
escrito en el material del curso de BlueDot un año antes del aviso.

Dos honestidades. Primera: la tendencia precede a Mythos — atribuir la
escalada a estos modelos concretos NO está soportado por los datos, y quien
os lo venda así os está vendiendo humo. Segunda: que la tendencia sea
anterior no la hace menos grave. Justifica preocupación estructural. No
justifica cualquier medida."

NOTAS:
- Todo ✅ (informe: ciberataques). NO usar la stat de ransomware +20%/+43%
  (refutada 0-3); si sale en Q&A: solo Q2 2026 = 2.279 víctimas, +43% (GuidePoint).
- ~2 min. Total bloque: ~10 min.
-->
