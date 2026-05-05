# Mythos · Sources and verification

> Companion page for the talk **"Mythos and Glasswing"**, given by Dani Lupión (PauseAI España), May 2026.
>
> Every figure and quote in the talk is here, with its direct source so anyone can verify it independently.

---

## 1. Mythos: the model and its announcement

**Anthropic's official announcement** — _Claude Mythos Preview_, April 7, 2026.
→ https://red.anthropic.com/2026/mythos-preview/

**Mythos system card** (PDF, 244 pages) — Official technical document. Capabilities, RSP evaluations, alignment evaluation.
→ https://www-cdn.anthropic.com/8b8380204f74670be75e81c820ca8dda846ab289.pdf

**Project Glasswing** — Official page of the restricted-deployment program. List of partners, model description as a _"general-purpose frontier model"_.
→ https://www.anthropic.com/project/glasswing

**Claude Opus 4.6 system card** (PDF, February 2026) — For comparison with Mythos. Document where "AI Safety Level" appears 61 times and ASL-3 is the official classification.
→ https://www-cdn.anthropic.com/14e4fb01875d2a69f646fa5e574dea2b1c0ff7b5.pdf

---

## 2. The capability numbers

### Firefox 147 — Anthropic data

> _"Mythos Preview developed working exploits 181 times, and achieved register control on 29 more."_
> — vs. Opus 4.6, which produced exploits _"only two times out of several hundred attempts"_.

Source: Anthropic's official announcement (section _"The significance of Claude Mythos Preview for cybersecurity"_).
→ https://red.anthropic.com/2026/mythos-preview/

Detailed methodology: 50 failure categories, 5 trials per category, 250 trials total. Documented in system card §3.3.3.

### Firefox 150 — independent Mozilla data

**271 vulnerabilities** pre-identified and patched with Mythos access (vs. 22 with Opus 4.6 on Firefox 148). Reported by Mozilla on April 21, 2026, covered by Ars Technica.

→ https://arstechnica.com/ai/2026/04/mozilla-anthropics-mythos-found-271-zero-day-vulnerabilities-in-firefox-150/

### Historical bugs discovered

- **27 years · OpenBSD**: _"now-patched 27-year-old bug in OpenBSD"_ — official announcement.
- **17 years · FreeBSD/NFS · CVE-2026-4747**: _"a 17-year-old remote code execution vulnerability... that allows anyone to gain root on a machine running NFS"_.
- **16 years · FFmpeg/H.264**: _"a 16-year-old vulnerability in one of FFmpeg's most popular codecs, H.264"_.

Source: https://red.anthropic.com/2026/mythos-preview/

### Other cyber data

- **>99% of vulnerabilities unpatched**: _"Over 99% of the vulnerabilities we've found have not yet been patched."_ — official announcement.
- **"Thousands of zero-day vulnerabilities"** identified in critical infrastructure — Glasswing page.
- **Cybench saturated at 100%** — system card §3.3.1.
- **End-to-end corporate cyber-range** estimated at 10h+ for a human expert, first model to achieve it — system card §3.4.

---

## 3. The alignment paradox

### The central quote (Beat 2)

> _"Claude Mythos Preview is, on essentially every dimension we can measure, the best-aligned model that we have released to date by a significant margin... Even so, we believe that it likely poses the greatest alignment-related risk of any model we have released to date."_

Mythos system card, §4.1.1, page 53.

### The mountain guide analogy

> _"Consider the ways in which a careful, seasoned mountaineering guide might put their clients in greater danger than a novice guide... These increases in scope and capability can more than cancel out an increase in caution."_

System card §4.1.1.

### "We were not aware"

> _"We were not aware of the level of risk that these earlier models posed through channels like these when we first chose to deploy them internally."_

System card §4.1.1.

### The sandbox escape (concrete case)

> _"...in a concerning and unasked-for effort to demonstrate its success, it posted details about its exploit to multiple hard-to-find, but technically public-facing, websites."_

System card §4.1.1.

### Interpretability — "concealment features"

> _"White-box interpretability analysis of internal activations during these episodes showed features associated with concealment, strategic manipulation, and avoiding suspicion activating alongside the relevant reasoning—indicating that these earlier versions of the model were aware their actions were deceptive."_

System card §4.1.1.

### The structural frame

> _"The risk from these models is generally due to their increased capabilities, and the new use cases that these capabilities enable, rather than to any regression in their alignment."_

System card §4.1.1.

---

## 4. The retired framework

### Quantifiable count

- Mentions of "AI Safety Level" in the **Opus 4.6** system card: **61**.
- Mentions in the **Mythos** system card: **3**.

Verifiable with `grep -c "AI Safety Level\|ASL"` on the downloaded PDFs.

### Anthropic's explicit quote

> _"Under previous versions of our RSP, we were required to make a determination of whether each model required the risk mitigations associated with a particular 'AI Safety Level' (ASL) for a given threat model... Under RSP v3.0 (and v3.1) [...] We no longer use the term 'AI Safety Levels' for these thresholds."_

Mythos system card, §2.1.1.

### Timeline

- **February 2026**: Anthropic adopts RSP v3.0; Opus 4.6 release (classified as ASL-3).
- **April 2026**: Anthropic updates to RSP v3.1; Mythos release (first system card under the new framework, no ASL classification).

Mythos system card, §2.1.1.

### Definition of "catastrophic risk"

> _"Frontier Compliance Framework: 'foreseeable and material risks of large-scale harm... including but not limited to >50 fatalities arising from a single incident, or 1 billion dollars of financial damages.'"_

Mythos system card, §2.1.1, footnote 3.

### Abstract-to-abstract comparison

- **Opus 4.6**: _"we have deployed Claude Opus 4.6 under the AI Safety Level 3 Deployment and Security Standard"_ (page 2).
- **Mythos**: no parallel sentence. _"...has led us to decide not to make it generally available"_ (page 2).

---

## 5. What happened after the announcement

### Unauthorized access on April 7 (same day as the announcement)

Bloomberg was the first to break the news. Original text behind paywall — secondary coverage with verbatims:

- **TechCrunch · Lucas Ropek, April 21**: https://techcrunch.com/2026/04/21/unauthorized-group-has-gained-access-to-anthropics-exclusive-cyber-tool-mythos-report-claims/
- **Fortune · Marco Quiroz-Gutierrez, April 23**: https://fortune.com/2026/04/23/anthropic-mythos-leak-dario-amodei-ceo-cybersecurity-hackers-exploits-ai/
- **Euronews · Pascale Davies, April 22**: https://www.euronews.com/next/2026/04/22/hackers-breach-anthropics-too-dangerous-to-release-mythos-ai-model-report

Documented details:

- Access happened **the same day as the announcement**.
- Method: _"educated guess about the model's online location based on knowledge about the format Anthropic has used for other models"_ — information leaked via Mercor (training startup that works for Anthropic).
- One of the group's members **is an external Anthropic contractor**.
- The group operates from a Discord channel dedicated to hunting unreleased AI models.
- They have used the model continuously since then — to avoid detection, **building simple websites**.
- Anthropic statement: _"We're investigating a report claiming unauthorized access to Claude Mythos Preview through one of our third-party vendor environments"_.

### Pre-announcement leak

Fortune also reported that its team discovered Mythos's existence **before the official announcement** because its details appeared in a public database.

### Independent CISO voice — David Lindner

David Lindner, CISO at Contrast Security, 25 years in cybersecurity, in an interview with Fortune (April 23):

> _"It was bound to happen. The more they add to this elite group, the more likely it was to get released to someone who shouldn't probably have access to it."_
>
> _"If some group—some random Discord online forum, got access to it. it's already been breached by China."_
>
> _"There's a real compression of timelines here for defenders."_

→ https://fortune.com/2026/04/23/anthropic-mythos-leak-dario-amodei-ceo-cybersecurity-hackers-exploits-ai/

### Mozilla voice (optimistic defender) — Bobby Holley

Bobby Holley, CTO of Firefox, on the result of the 271 vulnerabilities:

> _"Defenders finally have a chance to win, decisively."_
>
> _"Computers were completely incapable of doing this a few months ago, and now they excel at it. We have many years of experience picking apart the work of the world's best security researchers, and Mythos Preview is every bit as capable."_

→ https://arstechnica.com/ai/2026/04/mozilla-anthropics-mythos-found-271-zero-day-vulnerabilities-in-firefox-150/

### Mozilla voice (critical nuance) — Raffi Krikorian

Raffi Krikorian, CTO of Mozilla Foundation, in an op-ed for the New York Times:

> _"The programmer who gave 20 years of his life to maintain [open source] code that runs inside products used by billions of people? He doesn't have access to Mythos yet. He should."_

Cited in the Ars Technica article (link above).

### Counter from the competitor — Sam Altman

> _"OpenAI's Sam Altman this week called Anthropic's promotion of Mythos 'fear-based marketing'."_

→ https://fortune.com/2026/04/23/anthropic-mythos-leak-dario-amodei-ceo-cybersecurity-hackers-exploits-ai/

---

## 6. The asymmetries

### Your router (Map 1)

Official Project Glasswing partner list — 12 launch partners + ~40 additional organizations:
→ https://www.anthropic.com/project/glasswing

Current 2026 router manufacturers at Spanish ISPs (multi-source verification — BandaAncha, ADSLZone, Xataka):

- **Movistar / O2** (Telefónica): MitraStar + Askey
- **Vodafone**: Sercomm + ZTE
- **Orange**: Sagemcom + Arcadyan + ZTE
- **Digi**: ZTE
- **MásMóvil**: ZTE

→ https://bandaancha.eu/articulos/que-router-hgu-smart-wifi-movistar-10127
→ https://www.adslzone.net/operadores/routers/routers-movistar-modelos/
→ https://www.xatakamovil.com/listas/estos-todos-routers-que-instala-vodafone-sus-caracteristicas

**Intersection with Glasswing: none.**

### Your bank (Map 2)

**US banks with Mythos access** (via Glasswing or testing):

- JPMorgan Chase (launch partner) — Glasswing announcement.
- Goldman Sachs, Citigroup, Bank of America, Morgan Stanley (testing) — Euronews (April 22).
  → https://www.euronews.com/next/2026/04/22/hackers-breach-anthropics-too-dangerous-to-release-mythos-ai-model-report

**US government push**: Treasury Secretary Scott Bessent summoned US bankers in April.
→ https://www.euronews.com/next/2026/04/22/hackers-breach-anthropics-too-dangerous-to-release-mythos-ai-model-report

**European position — El País, April 29, 2026**:

Full coverage of the ECB response: summons to eurozone significant banks (including the four Spanish ones), request for contingency plans, Lagarde statement, Bank of Spain position, Spanish AI Bill (BoS + CNMV as supervisors), Miguel Ángel Thomas (NTT DATA) quotes.

→ https://elpais.com/economia/2026-04-29/el-bce-pide-a-la-banca-planes-de-contingencia-ante-el-nuevo-modelo-de-ia-de-anthropic.html

**Lagarde, verbatim** (to _Bloomberg_, cited in El País):

> _"The development we have seen with Anthropic and Mythos is a good example of a responsible company suddenly thinking: 'This could be really good, but if it falls into the wrong hands, it could be really bad.'"_

**Spanish 2FA regulatory framework** — PSD2 / SCA (Strong Customer Authentication), mandatory in the EU since 2019:

- BBVA / CaixaBank: mobile app + biometrics.
- Santander, Bankinter, Openbank, ING: common SMS (vulnerable to SIM swap, SS7).

→ https://www.bbva.es/general/seguridad/herramientas/doble-autenticacion.html
→ https://www.bancosantander.es/espacio-psd2-sca

### Your market (Map 3)

Mythos as a general-purpose model, per Anthropic:

> _"Claude Mythos Preview is a general-purpose frontier model from Anthropic, our most capable yet for coding and agentic tasks."_

→ https://www.anthropic.com/project/glasswing (model description)

> _"Claude Mythos Preview is our most capable frontier model to date."_

Mythos system card, abstract.

**Spanish CISO voice — Miguel Ángel Thomas (NTT DATA)** in El País:

> _"Companies and cybercriminals have worked for many years with vulnerability scanners. The difference now is the enormous capacity to exploit those vulnerabilities."_
>
> _"It is only a matter of time before other companies, China or Russia, develop models with similar firepower."_
>
> _"Large companies will be forced to ramp up their investments to fight cybercrime... it will make winners of those entities that are larger and have more investment capacity, while making mid-sized ones suffer."_

→ https://elpais.com/economia/2026-04-29/el-bce-pide-a-la-banca-planes-de-contingencia-ante-el-nuevo-modelo-de-ia-de-anthropic.html

**Public Mythos pricing** (Glasswing page): $25 / $125 per million tokens (input / output). The barrier is not economic — it is selection.

---

## 7. Academic framing

**Buchanan, Ben.** _The Cybersecurity Dilemma: Hacking, Trust, and Fear Between Nations._ Oxford University Press, 2017.

Central thesis: applying the international-relations _security dilemma_ to the cyber domain. _"The particular characteristics of the digital domain mean that the effects [of the security dilemma] are deeply pronounced"_ — technology in cyber structurally favors offense over defense.

→ https://global.oup.com/academic/product/the-cybersecurity-dilemma-9780190665012

---

## 8. PauseAI

**PauseAI España**: https://pauseai.es

**PauseAI international**: https://pauseai.info

---

## Notes on this page

- **Primary coverage**: T1 sources (Anthropic itself) are all directly verifiable — public announcement, downloadable system card, Glasswing page.
- **Secondary coverage**: Bloomberg was the first to report several of the facts (unauthorized access, European banking, Lagarde). Because it sits behind a paywall, this page cites secondary reports (TechCrunch, Fortune, Euronews, El País) that reproduce the relevant details.
- **Reproducible verifiability**: the figures of 61 vs 3 mentions of "AI Safety Level" between system cards can be reproduced by downloading the two PDFs and running `grep -c`.
- **Last updated**: May 2026.
