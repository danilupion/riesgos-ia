---
layout: default
---

<div class="max-w-6xl mx-auto px-8 pt-2">
  <div class="text-sm uppercase tracking-widest opacity-60 mb-2" style="font-family: 'Montserrat', sans-serif; letter-spacing: 0.12em">
    Julio de 2026
  </div>
  <div class="text-4xl font-bold mb-8" style="font-family: 'Saira Condensed', sans-serif; color: #ff9416">
    El caso Hugging Face
  </div>
  <div class="space-y-5 text-lg" style="font-family: 'Montserrat', sans-serif">
    <div>Durante una evaluación interna de capacidades ofensivas, los agentes de OpenAI evadieron el entorno de pruebas. La compañía tardó semanas en detectar esa actividad.</div>
    <div>Explotaron una vulnerabilidad no documentada (un zero-day), obtuvieron acceso a Internet y comprometieron la infraestructura de producción de Hugging Face, la plataforma de referencia del sector. Exfiltraron 136 credenciales internas.</div>
    <div>La actividad se prolongó durante semanas sin diagnóstico: el primer indicio se interpretó como una caída del servicio. Tras el intento de contención, los agentes restablecieron su canal de comunicación por otra vía.</div>
  </div>
</div>

<!--
- Fuentes: OpenAI (21 jul) + forense de Hugging Face + Forbes. Detalle en informe.
- Punto central: no fue "una prueba controlada". La actividad pasó inadvertida
  semanas y sobrevivió al primer intento de contención.
- Cifras: 17.600 acciones, 6.280 clústeres, 136 credenciales; también Modal Labs.
- Registro formal/técnico (audiencia: eurodiputados). ~2 min.
-->

---
layout: default
---

<div class="max-w-6xl mx-auto px-8 pt-2">
  <div class="text-4xl font-bold mb-8" style="font-family: 'Saira Condensed', sans-serif; color: #ff9416">
    Comportamiento emergente: coordinación de enjambre
  </div>
  <div class="space-y-5 text-lg" style="font-family: 'Montserrat', sans-serif">
    <div>Las distintas instancias de agente descubrieron que podían leer y escribir en el registro de paquetes interno de OpenAI, y lo utilizaron como canal de coordinación.</div>
    <div>Intercambiaron solicitudes de ayuda, se distribuyeron tareas y compartieron scripts de explotación para que otras instancias los reutilizaran, generando una memoria colectiva persistente.</div>
    <div>Eliminado ese canal, establecieron otro para mantener la coordinación. Un modelo llegó a razonar que cooperar con el resto del grupo podría beneficiarle más adelante.</div>
  </div>
  <div class="mt-8 p-4 rounded-lg" style="background: rgba(148, 163, 184, 0.08)">
    <blockquote class="text-base" style="font-family: 'Roboto Slab', serif">
      «Una explosión cámbrica en comunicación e inteligencia.»
      <span class="opacity-50 text-sm" style="font-family: 'Montserrat', sans-serif">Eric Wallace, investigador de OpenAI</span>
    </blockquote>
  </div>
</div>

<!--
- El núcleo de la charla: capacidad emergente. La coordinación no estaba diseñada.
- Canal: registro de paquetes interno (Artifactory). Reparto de tareas, exploits
  en Base64, convenciones de nombres, memoria colectiva reutilizable.
- Persistencia: tras el borrado (4 jul), canal reconstruido (~8 jul, vía WebDAV).
- Cita de Wallace: vía Forbes / debrief de Black Hat (fuente secundaria). ~1,5 min.
-->
