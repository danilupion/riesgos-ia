# CLAUDE.md — El por qué de la pausa — PauseAI en español

## Presentation Overview

Presentación introductoria de PauseAI España que expone el porqué de pausar el desarrollo de la IA de frontera: el desajuste entre la velocidad de la tecnología y la capacidad de la sociedad para legislar y adaptarse, las conversaciones urgentes que debemos tener, el consenso científico sobre el riesgo y qué pide PauseAI.

## Key Details

- **Ponente**: Álvaro Torres
- **Formato**: Charla divulgativa con apoyo visual, de uso general (no atada a un evento concreto).
- **Audiencia**: Público general, sin conocimientos técnicos previos sobre IA.
- **Duración**: Aproximadamente 30 minutos.
- **Fecha**: Mayo 2026
- **Lugar**: Presentación de uso general de PauseAI en español, reutilizable en distintos contextos y sedes.
- **Tono**: Audaz, directo y divulgativo; factual y con ejemplos concretos; sin tecnicismos innecesarios y sin alarmismo gratuito, pero sin suavizar el mensaje.

## Branding

- **Assets** (en `public/logos/`): `logo.png` (icono PauseAI), `logo-completo.png` (banner horizontal)
- **Footer**: PauseAI logo + pauseai.es (izquierda)
- **Theme**: light (fondo crema #f5f3ed, acento orange #ff6f1f; paleta del deck: teal #15a39b, rojo #e5342a, amarillo #f9b233)

## Arco narrativo

Arranca con el desajuste de ritmos entre tecnología y sociedad, muestra que la IA avanza más rápido de lo que podemos legislar, aclara que no se trata de prohibir sino de tener conversaciones urgentes, se apoya en el consenso científico y en los firmantes, y cierra con qué pide PauseAI y cómo participar.

## Session Structure

1. **Portada** — El por qué de la pausa.
2. **Tiempos distintos** — la sociedad legisla en años; la IA mejora en meses (gráfico METR).
3. **Adaptarnos ¿a qué?** — ventajas frente a daños; hacen falta herramientas para lo segundo.
4. **Los daños** — lista de riesgos → "No se trata de prohibir".
5. **Conversaciones importantes** — preguntas abiertas de seguridad de IA.
6. **Sectores** — dónde se incorpora ya la IA; debe ser una decisión colectiva.
7. **La comunidad científica está de acuerdo** — no es opinión, es consenso.
8. **+137.000 firmas** — consenso transversal (Statement on Superintelligence).
9. **Qué pedían los firmantes** — moratoria condicionada (consenso + aceptación pública).
10. **Sea cual sea tu opinión** — necesitamos hablar, necesitamos una PAUSA.
11. **Dónde entra PauseAI** — cierre y llamada a la acción.

## Interactive Moments

Varias diapositivas son _builds_ del Figma original, reconstruidos con clics nativos de Slidev (`v-click` + clases ligadas a `$clicks`), no imágenes estáticas:

1. **Tiempos distintos** (slide 01): al hacer clic, los ritmos de legislación se atenúan y entra el gráfico METR.
2. **Adaptarnos ¿a qué?** (slide 02): se revelan ventajas (teal), daños (rojo) y la síntesis.
3. **Los daños** (slide 03): aparece la lista de riesgos y luego se atenúa para dar paso a "No se trata de prohibir".
4. **Conversaciones** (slide 04): las preguntas dan paso a la reflexión final.
5. **Sea cual sea tu opinión** (slide 09) y **Dónde entra PauseAI** (slide 10): revelados por clic.

## TODOs Before Presentation

- [ ] Verificar todas las fuentes marcadas con `TODO source:` en slides/
- [ ] Revisar imagenes en `public/screenshots/unsorted/` y archivar o mover
- [ ] Preparar videos/demos si el guion los requiere
- [ ] Generar QR code a pauseai.es en `public/qr-pauseai.png`

## Key Sources

- **Gráfico de capacidades**: METR — _Measuring AI Ability to Complete Long Tasks_ (Time Horizon 1.1), vía AI Digest (CC-BY).
- **Declaración y firmas**: _Statement on Superintelligence_ (Future of Life Institute, 2025). Verificar la cifra exacta (+137.000) y el texto literal traducido.
- **Tiempos de tramitación legislativa** (UE 18 meses–2 años / España 5–10 meses): pendiente de fuente — ver `TODO source` en `slides/01-tiempos-distintos.md`.

## Migration notes

Esta presentacion fue inicialmente importada con la skill `new-presentation` desde `/Users/danilupion/Downloads/pausa.pdf`.
Fecha de importacion: 2026-05-24.
