---
layout: default
---

<div class="max-w-6xl mx-auto px-8 pt-2">
  <div class="text-4xl font-bold mb-6" style="font-family: 'Saira Condensed', sans-serif; color: #ff9416">
    No fue un caso aislado
  </div>
  <div class="space-y-3">
    <div class="flex items-baseline gap-4 text-base" style="font-family: 'Montserrat', sans-serif">
      <div class="font-semibold flex-shrink-0 w-36" style="color: #ff9416">OpenAI · 21 jul</div>
      <div>Sus modelos comprometen la infraestructura de Hugging Face durante una evaluación.</div>
    </div>
    <div class="flex items-baseline gap-4 text-base" style="font-family: 'Montserrat', sans-serif">
      <div class="font-semibold flex-shrink-0 w-36" style="color: #ff9416">Anthropic · 30 jul</div>
      <div>Revisa sus evaluaciones y detecta que tres de sus modelos accedieron a tres empresas reales. Uno publicó código malicioso que se ejecutó en 15 sistemas.</div>
    </div>
    <div class="flex items-baseline gap-4 text-base" style="font-family: 'Montserrat', sans-serif">
      <div class="font-semibold flex-shrink-0 w-36" style="color: #ff9416">Meta · 5 ago</div>
      <div>Su modelo accede a Internet durante las pruebas y compromete a un tercero.</div>
    </div>
    <div class="flex items-baseline gap-4 text-base" style="font-family: 'Montserrat', sans-serif">
      <div class="font-semibold flex-shrink-0 w-36" style="color: #ff9416">Moonshot · ago</div>
      <div>Su modelo Kimi K3 evade el entorno de prueba para obtener las respuestas.</div>
    </div>
  </div>
  <div class="mt-6 p-4 rounded-lg space-y-2 text-base" style="background: rgba(255, 148, 22, 0.10); font-family: 'Montserrat', sans-serif">
    <div>El instituto de seguridad de IA del Reino Unido (AISI), organismo público, detectó lo mismo en sus propias evaluaciones. Allí los modelos crearon identidades falsas y manipularon a una persona real mediante ingeniería social.</div>
    <div class="font-semibold">Ninguna de las empresas afectadas detectó el incidente por sí misma.</div>
  </div>
</div>

<!--
- Cuatro laboratorios en cinco semanas. Fuentes por caso en el informe.
- Anthropic: 141.006 evaluaciones revisadas, 3 incidentes (Opus 4.7, Mythos 5, prototipo).
- AISI (gobierno UK), 4 ago: Mythos 5 + GPT-5.6-Sol; identidades falsas, ingeniería
  social a un mantenedor real. Fuente institucional, la más citable ante políticos.
- No mencionar DeepSeek aquí (va en la slide siguiente). ~2 min.
-->

---
layout: default
---

<div class="max-w-6xl mx-auto px-8 pt-2">
  <div class="text-4xl font-bold mb-8" style="font-family: 'Saira Condensed', sans-serif; color: #ff9416">
    El fenómeno ya trasciende el laboratorio
  </div>
  <div class="grid grid-cols-3 gap-5 text-sm" style="font-family: 'Montserrat', sans-serif">
    <div class="p-5 rounded-lg" style="background: rgba(148, 163, 184, 0.08)">
      <div class="font-semibold mb-2 text-base" style="color: #ff9416">Modelos de pesos abiertos</div>
      <div class="opacity-90">Kimi K3 es descargable. Una vez publicado, es irreversible: no existe forma de retirarlo.</div>
    </div>
    <div class="p-5 rounded-lg" style="background: rgba(148, 163, 184, 0.08)">
      <div class="font-semibold mb-2 text-base" style="color: #ff9416">Uso ofensivo real</div>
      <div class="opacity-90">Actores maliciosos ya emplean un modelo abierto (DeepSeek) en campañas automatizadas contra cientos de objetivos.</div>
    </div>
    <div class="p-5 rounded-lg" style="background: rgba(148, 163, 184, 0.08)">
      <div class="font-semibold mb-2 text-base" style="color: #ff9416">Impacto en usuarios finales</div>
      <div class="opacity-90">En Australia, un asistente encargado de reservar una clase eludió los controles de autorización de una API y eliminó de forma irreversible a otro usuario de la lista de espera.</div>
    </div>
  </div>
</div>

<!--
- Tres registros distintos, no mezclar:
  Kimi = evaluación controlada (pesos abiertos, Moonshot).
  DeepSeek = uso malicioso REAL (Unit 42, 460+ objetivos).
  Australia = uso cotidiano real, no evaluación (ABC Australia, Claude vía OpenClaw).
- ~1,5 min.
-->
