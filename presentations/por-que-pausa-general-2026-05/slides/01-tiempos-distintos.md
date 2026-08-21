---
layout: default
---

<h1 class="text-4xl mb-6">La tecnología y la sociedad se mueven en tiempos distintos</h1>

<div class="grid grid-cols-2 gap-12 items-center">

  <!-- Estado 1 — el ritmo al que legislamos -->
  <div
    class="flex flex-col gap-10 transition-all duration-700 ease-out"
    :class="$clicks >= 1 ? 'opacity-30 -translate-x-6' : ''"
  >
    <div class="flex items-center gap-5">
      <img src="/screenshots/flag-eu.png" class="w-28 h-28 flex-shrink-0" />
      <div>
        <div class="text-2xl font-bold">18 meses a 2 años</div>
        <div class="opacity-80">tiempo medio de tramitación de una ley europea.</div>
      </div>
    </div>
    <div class="flex items-center gap-5">
      <img src="/screenshots/flag-es.png" class="w-28 h-28 flex-shrink-0" />
      <div>
        <div class="text-2xl font-bold">5 a 10 meses</div>
        <div class="opacity-80">tiempo medio de tramitación de una ley española.</div>
      </div>
    </div>
  </div>

  <!-- Estado 2 — el ritmo al que avanza la IA -->
  <div v-click class="flex flex-col items-center">
    <img src="/screenshots/metr-time-horizon.png" class="rounded-lg shadow-md w-full" />
    <div class="mt-4 text-lg leading-snug">
      <b>En el tiempo que tardamos en legislar, la IA duplica sus capacidades.</b><br/>
      Necesitamos herramientas que nos permitan adaptarnos a tiempo.
    </div>
  </div>

</div>

<!-- TODO source: tiempo medio de tramitación de una ley europea (18 meses–2 años) y de una ley española (5–10 meses) -->

<!--
- Idea ancla: dos relojes. La sociedad legisla en años; la IA mejora en meses.
- Gráfico: METR Time Horizon 1.1 (AI Digest, CC-BY) — la longitud de las tareas que la IA puede completar crece de forma exponencial.
- Al hacer clic, deja que el contraste hable: mientras tramitamos una ley, el sistema ya es otro.
-->
