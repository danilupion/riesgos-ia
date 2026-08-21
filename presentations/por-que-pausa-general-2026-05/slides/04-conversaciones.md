---
layout: default
---

<h1 class="text-5xl mb-8 transition-all duration-500" :class="$clicks >= 1 ? 'opacity-30' : ''">HAY CONVERSACIONES MUY IMPORTANTES POR TENER</h1>

<!-- Preguntas abiertas -->
<div
  class="transition-all duration-500"
  :class="$clicks >= 1 ? 'opacity-0 h-0 overflow-hidden' : ''"
>
  <div class="flex flex-col gap-5 text-xl">
    <div>¿Podemos transmitir nuestros <b>valores éticos</b> a los modelos de IA?</div>
    <div>¿Quién tendrá la <b>soberanía</b> en este nuevo mundo?</div>
    <div>¿Es seguro <b>convivir con una especie más inteligente</b> y capaz que nosotros?</div>
    <div>¿Una IA puede tener <b>intenciones ocultas</b>?</div>
    <div>¿Es posible <b>controlar</b> a una Superinteligencia?</div>
    <div>¿Qué sucede si dos <b>potencias mundiales enfrentadas</b> usan la IA sin barreras?</div>
  </div>
</div>

<!-- Reflexión -->
<div v-click class="flex flex-col gap-6 text-2xl leading-snug max-w-3xl mt-2">
  <p>Aún estamos aprendiendo a estudiar el comportamiento de estos nuevos compañeros.</p>
  <p>Estamos incorporando la IA en nuestra sociedad <b>mucho más rápido de lo que estamos entendiéndola</b>.</p>
</div>

<!--
- Lánzalas como preguntas reales, no retóricas: son líneas de investigación abiertas en seguridad de IA.
- Soberanía, control de una superinteligencia, intenciones ocultas (engaño/deceptive alignment), carrera entre potencias.
- Clic: el remate — desplegamos la IA más rápido de lo que la entendemos. Ese desfase es el riesgo de fondo.
-->
