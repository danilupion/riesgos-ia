---
layout: default
---

<div class="grid grid-cols-2 gap-12 h-full items-center">

  <!-- Lista de daños: aparece en el clic 1, se atenúa en el clic 2 -->
  <div
    v-click="1"
    class="transition-all duration-500"
    :class="$clicks >= 2 ? 'opacity-25' : ''"
  >
    <div class="flex flex-col gap-3 text-xl">
      <div>Estafas personalizadas</div>
      <div>Noticias falsas</div>
      <div>Pérdida de control</div>
      <div>Aplicaciones militares</div>
      <div>Ciberdelitos</div>
      <div>Terrorismo (bioarmas…)</div>
      <div>Pérdida de la privacidad</div>
      <div>Aumento de la desigualdad</div>
      <div class="opacity-50">…</div>
    </div>
  </div>

  <!-- Columna derecha -->
  <div>
    <!-- Estado inicial: el aviso -->
    <div
      class="text-xl leading-snug transition-all duration-500"
      :class="$clicks >= 2 ? 'opacity-0 h-0 overflow-hidden' : ''"
    >
      Pero somos mucho menos conscientes de los <span class="t-red font-bold">daños</span> que puede acarrear.
    </div>

    <!-- Estado final: no se trata de prohibir -->
    <div v-click="2">
      <p class="text-lg leading-snug opacity-90">TODOS estos retos, estos escenarios, merecen un tiempo de debate, contemplación, y diseñarse desde la opinión pública y el consenso de los expertos.</p>
      <h2 class="text-4xl my-5">NO SE TRATA DE PROHIBIR</h2>
      <p class="text-lg leading-snug opacity-90">Se trata de incorporar la IA en nuestra sociedad de la forma más segura y justa posible.</p>
    </div>
  </div>

</div>

<!--
- Enumera algunos daños sin leerlos todos: personalizados, informativos, militares, de control…
- Clic final = el matiz que desarma el "sois tecnófobos": NO pedimos prohibir.
- Pedimos tiempo de debate y consenso para incorporar la IA de forma segura y justa.
-->
