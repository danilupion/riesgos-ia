# CLAUDE.md — Mythos and Glasswing (English version)

## Presentation Overview

Talk by Dani Lupión (PauseAI España) on Anthropic's Claude Mythos Preview and Project Glasswing: emerging offensive capabilities, mass zero-day discovery, and the transitional window between attacker and defender.

This is the **English translation** of `mythos-ias-2026-05` (the Spanish version delivered at AISafety España). The content is a straight translation: Spain-specific evidence (Spanish ISPs/banks, El País, BCE focus, Lagarde quote) is preserved as a case study illustrating structural asymmetry under EU/US fragmentation — not localized for a US/UK audience.

## Key Details

- **Speaker**: Dani Lupión
- **Format**: Talk + Q&A (duration TBC)
- **Audience**: English-speaking AI safety community — familiar with concepts like emergence, alignment, dual-use. Technically sophisticated.
- **Duration**: TBD
- **Date**: May 2026
- **Venue**: TBD (template assumes AISafety España footer; swap if presenting elsewhere)
- **Language**: English
- **Tone**: Technical but accessible, factual, no hedging. AI safety + policy implications angle.

## Branding

- **Assets** (in `public/logos/`): `logo.png` (PauseAI icon), `logo-completo.png` (horizontal banner)
- **Footer**: PauseAI logo + pauseai.es (left), AISafety España (right) — change `global-bottom.vue` if presenting elsewhere.
- **Theme**: dark (navy #0f172a background, orange #ff9416 accent)

## Narrative Arc

1. Opening: the concrete finding (27-year-old OpenBSD bug, thousands of zero-days).
2. What Mythos is and why it matters.
3. Key point: untrained, emergent capabilities.
4. Glasswing as response: controlled defensive deployment.
5. The transitional window — attacker/defender asymmetry.
6. Implications for alignment and policy.
7. What the AI safety community can do.
8. Q&A.

## TODOs Before Presenting

- [ ] Confirm exact duration and format with organizers.
- [ ] Update footer in `global-bottom.vue` if not presenting at AISafety España.
- [ ] Regenerate QR codes for the English URL (`pauseai.es/presentaciones/mythos-ias-en-2026-05`). Current PNGs in `public/qr-mythos.png` and `public/qr-share.png` were generated for the Spanish URL.
- [ ] Verify all source citations. Spanish-press sources (El País) are kept untranslated in URLs but referenced with English titles in the source slide.

## Key Sources

### Anthropic — Mythos / Glasswing

- https://red.anthropic.com/2026/mythos-preview/
- https://www-cdn.anthropic.com/8b8380204f74670be75e81c820ca8dda846ab289.pdf
- https://www.anthropic.com/project/glasswing

See `sources.md` for the full list (translated from `fuentes.md` in the Spanish version).

## Scaffold notes

English version scaffolded 2026-05-05 from `mythos-ias-2026-05` (Spanish, May 2026 talk at AISafety España). Slide structure and click reveals mirror the Spanish version exactly; only prose was translated. The `research/` directory was left empty in this version — see the Spanish version's `research/` for beat sheets, claims, kill chains, and Q&A preparation.

Dev: `cd presentations/mythos-ias-en-2026-05 && pnpm dev` (port 3046).
