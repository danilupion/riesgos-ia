---
layout: section
class: text-center
---

<!--
Block 3: Why the current control doesn't hold technically (~10 min).
Three legs: classifiers (cat and mouse), open-weight (the door won't
close), cyber (the curve that scares). Source: crossover §2-§4 + report.
Discipline: the ">99%" ALWAYS as Anthropic's claim, never as fact.
-->

# Block 3
## Why it doesn't hold (technically)

<!--
VOICE:
"Part three. Suppose we accept access control as it stands. Does it hold
technically? Three legs: the safeguards, the open weights, and the
offensive-capability curve."

NOTES:
- ~15s.
-->

---
layout: default
---

<div class="max-w-6xl mx-auto px-8 pt-2">
  <div class="text-sm uppercase tracking-widest opacity-60 mb-3" style="font-family: 'Montserrat', sans-serif; letter-spacing: 0.15em">
    Leg 1 — the safeguards
  </div>
  <div class="text-4xl font-bold mb-6" style="font-family: 'Saira Condensed', sans-serif; color: #ff9416">
    Cat and mouse, with data
  </div>
  <div class="space-y-3">
    <div v-click class="flex items-baseline gap-4 text-base" style="font-family: 'Montserrat', sans-serif">
      <div class="font-bold flex-shrink-0 w-40" style="color: #ff9416">2025</div>
      <div>Constitutional Classifiers (Anthropic): the prototype withstands <span class="font-semibold">3,000 hours of red-teaming</span> with no universal jailbreak. Jailbreak success rate: 86% → <span class="font-semibold">4.4%</span>.</div>
    </div>
    <div v-click class="flex items-baseline gap-4 text-base" style="font-family: 'Montserrat', sans-serif">
      <div class="font-bold flex-shrink-0 w-40" style="color: #ff9416">…THE DEMO</div>
      <div>In the public demo, one participant eventually achieves <span class="font-semibold">a universal jailbreak</span>: detailed answers to all eight forbidden questions.</div>
    </div>
    <div v-click class="flex items-baseline gap-4 text-base" style="font-family: 'Montserrat', sans-serif">
      <div class="font-bold flex-shrink-0 w-40" style="color: #ff9416">JUN 2026</div>
      <div>Fable 5 ships with hardened safeguards → <span class="font-semibold">jailbreak reported in 3 days</span> (Amazon) → rollback → classifier retrained.</div>
    </div>
    <div v-click class="flex items-baseline gap-4 text-base" style="font-family: 'Montserrat', sans-serif">
      <div class="font-bold flex-shrink-0 w-40" style="color: #ff9416">«&gt;99%»</div>
      <div>Anthropic <span class="font-semibold">claims</span> the new classifier blocks the technique in over 99% of attempts. <span class="opacity-70">Sole source: their own page. No independent verification.</span></div>
    </div>
  </div>
  <div v-click class="mt-6 p-5 rounded-lg" style="background: rgba(148, 163, 184, 0.08)">
    <blockquote class="text-base italic" style="font-family: 'Roboto Slab', serif">
      "…to our knowledge there are still <span class="font-semibold" style="color:#ff9416">no fully robust deep-learning models in production</span>."
    </blockquote>
    <div class="text-sm opacity-50 mt-2" style="font-family: 'Montserrat', sans-serif">— Sharma et al., <i>Constitutional Classifiers</i> (Anthropic) — on 10 years of adversarial attacks</div>
  </div>
</div>

<!--
VOICE:
"Leg one: the safeguards. And I want to be fair to them, because the story
is better than it looks — and worse.

[CLICK] In 2025 Anthropic published Constitutional Classifiers. The
prototype withstood three thousand hours of red-teaming without a single
universal jailbreak. The production version cut jailbreak success from
eighty-six percent to four point four. That is serious engineering.

[CLICK] But in the public demo, in the end, one participant achieved a
universal jailbreak: all eight forbidden questions, answered.

[CLICK] June 2026, same movie: Fable 5 ships with the most heavily
engineered safeguards in the company's history. Three days. Three days is
what it took the Amazon team to find the technique that forced the
rollback.

[CLICK] And the response was the usual one: retrain the classifier. Which
now, Anthropic says, blocks the technique in over ninety-nine percent of
attempts. Notice I say 'Anthropic says': that figure exists only on their
page. In our report it is downgraded to a party's-own-claim, and that's how
I'm giving it to you.

[CLICK] Because the honest sentence is the one from their own researchers:
after ten years of adversarial attacks, 'to our knowledge there are still
no fully robust deep-learning models in production'. None.

Epistemologically: 'blocks 99% of known attempts' is a claim about the
past. The security that matters is about future attacks. It's the problem
of induction with an inference budget."

NOTES:
- CC numbers verified (crossover §2). ">99%" = ❌→ⓘ in report: ONLY as a claim.
- If asked about the 79% shutdown-resistance figure: symmetric example of a
  headline number that evaporates under methodology (DeepMind vs Palisade) —
  keep it ready for Q&A, not on the slide.
- ~2.5 min.
-->

---
layout: center
class: text-center
---

<div class="text-3xl font-bold max-w-4xl mx-auto leading-snug" style="font-family: 'Saira Condensed', sans-serif">
  Anthropic's argument<br/><span style="color: #ff9416">against itself</span>
</div>
<div v-click class="mt-10 text-2xl max-w-3xl mx-auto leading-relaxed italic" style="font-family: 'Roboto Slab', serif">
  If the classifier were enough,<br/>
  <span style="color: #ff9416">Mythos wouldn't need Glasswing.</span>
</div>

<!--
VOICE:
"And here is the structural irony of the whole edifice.

[CLICK]

If the safeguards were enough — if a retrained classifier truly closed the
problem — then Glasswing wouldn't be needed. You'd release Mythos with the
classifier and be done. The very existence of restricted access is the
admission that safeguards do not justify general access to dangerous
capabilities. That is Anthropic's argument against itself — and it's
correct. The conclusion we draw is a different one, and we'll see it in
the final block."

NOTES:
- Pivot slide. Short — let it breathe.
- ~45s.
-->

---
layout: default
---

<div class="max-w-6xl mx-auto px-8 pt-2">
  <div class="text-sm uppercase tracking-widest opacity-60 mb-3" style="font-family: 'Montserrat', sans-serif; letter-spacing: 0.15em">
    Leg 2 — the open weights
  </div>
  <div class="text-4xl font-bold mb-6" style="font-family: 'Saira Condensed', sans-serif; color: #ff9416">
    What the directive cannot touch
  </div>
  <div class="grid grid-cols-3 gap-5 text-center">
    <div v-click class="p-5 rounded-lg" style="background: rgba(255, 148, 22, 0.05)">
      <div class="text-5xl font-black" style="font-family: 'Saira Condensed', sans-serif; color: #ff9416">$200</div>
      <div class="text-sm mt-3 opacity-80 leading-relaxed" style="font-family: 'Montserrat', sans-serif">
        Cost of undoing Llama 2-Chat's safety fine-tuning.
      </div>
    </div>
    <div v-click class="p-5 rounded-lg" style="background: rgba(255, 148, 22, 0.05)">
      <div class="text-5xl font-black" style="font-family: 'Saira Condensed', sans-serif; color: #ff9416">94% <span class="text-2xl opacity-60">vs 8%</span></div>
      <div class="text-sm mt-3 opacity-80 leading-relaxed" style="font-family: 'Montserrat', sans-serif">
        Malicious requests (with common jailbreaks) fulfilled: DeepSeek R1-0528 vs US reference models.
      </div>
    </div>
    <div v-click class="p-5 rounded-lg" style="background: rgba(255, 148, 22, 0.05)">
      <div class="text-5xl font-black" style="font-family: 'Saira Condensed', sans-serif; color: #ff9416">19 days</div>
      <div class="text-sm mt-3 opacity-80 leading-relaxed" style="font-family: 'Montserrat', sans-serif">
        Length of the Fable blackout. Kimi and DeepSeek were available every single one of those days.
      </div>
    </div>
  </div>
  <div v-click class="mt-8 p-5 rounded-lg" style="background: rgba(148, 163, 184, 0.08)">
    <div class="text-base leading-relaxed" style="font-family: 'Montserrat', sans-serif">
      CAISI (NIST): Kimi K2 Thinking <span class="font-semibold">still below</span> the leading closed models on agentic
      cyber tasks — <span class="font-semibold">but closing the gap</span>. And once the weights are published,
      <span class="font-semibold" style="color:#ff9416">there is no rollback</span>: no API to switch off, no letter to send.
    </div>
  </div>
</div>

<!--
VOICE:
"Leg two: the open weights. Three numbers.

[CLICK] Two hundred dollars. That's what it cost to undo Llama 2's safety
fine-tuning. The safeguards of an open-weight model are a suggestion.

[CLICK] Ninety-four percent. The fraction of openly malicious requests
DeepSeek R1 fulfilled with common jailbreaks. The American reference
models: eight percent. That safeguard gap is already in production, today,
for anyone.

[CLICK] And nineteen days. How long the Fable blackout lasted. On every one
of those nineteen days, Kimi and DeepSeek were perfectly available. The
Commerce directive switched off the model with safeguards and left the ones
without them untouched.

[CLICK] CAISI's evaluation is honest and has to be given in full: Kimi is
still below the leading closed models on agentic cyber tasks. But it's
closing the gap — and on published weights there is no rollback. There's no
API to switch off. There's no letter to send. It's a geological fact: it's
already part of the landscape."

NOTES:
- $200 and 94%/8%: BlueDot (crossover §3), ✅. CAISI: report (✅). "Geological
  fact" is the image to retain.
- ~2 min.
-->

---
layout: default
---

<div class="max-w-6xl mx-auto px-8 pt-2">
  <div class="text-sm uppercase tracking-widest opacity-60 mb-3" style="font-family: 'Montserrat', sans-serif; letter-spacing: 0.15em">
    The strategic consequence
  </div>
  <div class="text-4xl font-bold mb-8" style="font-family: 'Saira Condensed', sans-serif; color: #ff9416">
    Unilateral doesn't work
  </div>
  <div class="p-6 rounded-lg" style="background: rgba(148, 163, 184, 0.08)">
    <blockquote class="text-xl italic leading-relaxed" style="font-family: 'Roboto Slab', serif">
      A US-only pause <span class="font-semibold" style="color:#ff9416">"might buy around six months"</span>
      until the first Chinese company reaches the cutoff point.
    </blockquote>
    <div class="text-sm opacity-50 mt-3" style="font-family: 'Montserrat', sans-serif">— Scher et al. (MIRI), <i>An International Agreement to Prevent the Premature Creation of ASI</i> (2025)</div>
  </div>
  <div v-click class="mt-8 text-xl text-center leading-relaxed max-w-4xl mx-auto" style="font-family: 'Roboto Slab', serif">
    This is <span class="font-semibold">not an argument against coordinating</span>.<br/>
    <span style="color: #ff9416">It's the premise of a treaty</span> — not its refutation.
  </div>

</div>

<!--
VOICE:
"And here an important clarification, because this argument gets used
against us a lot. 'If unilateral gating doesn't work, why ask for pauses?'

MIRI's calculation for their international-agreement proposal says it
without anesthesia: a US-only pause buys about six months, until the first
Chinese company reaches the same point.

[CLICK]

Exactly. That's why no one serious asks for a unilateral pause. That
unilateral control doesn't work is not an argument against coordinating:
it's the premise of every treaty. Nobody says the NPT is pointless because
a single country can't stop nuclear proliferation. Hold on to this idea —
it's the heart of the final block."

NOTES:
- MIRI quote verified (crossover §3/§9). Preempt of objection 2.
- ~1 min.
-->

---
layout: default
---

<div class="max-w-6xl mx-auto px-8 pt-2">
  <div class="text-sm uppercase tracking-widest opacity-60 mb-3" style="font-family: 'Montserrat', sans-serif; letter-spacing: 0.15em">
    Leg 3 — offensive capability
  </div>
  <div class="text-4xl font-bold mb-6" style="font-family: 'Saira Condensed', sans-serif; color: #ff9416">
    The curve that scares the states
  </div>
  <div class="space-y-3">
    <div v-click class="flex items-baseline gap-4 text-base" style="font-family: 'Montserrat', sans-serif">
      <div class="font-bold flex-shrink-0 w-32" style="color: #ff9416">FEB 2026</div>
      <div>CrowdStrike (<span class="font-semibold">pre-Mythos</span> baseline): AI-driven adversarial operations <span class="font-semibold">+89% year over year</span>; average breakout 29 min.</div>
    </div>
    <div v-click class="flex items-baseline gap-4 text-base" style="font-family: 'Montserrat', sans-serif">
      <div class="font-bold flex-shrink-0 w-32" style="color: #ff9416">APR 2026</div>
      <div>Microsoft: AI-generated phishing, <span class="font-semibold">54% click-through</span> versus ~12% for traditional.</div>
    </div>
    <div v-click class="flex items-baseline gap-4 text-base" style="font-family: 'Montserrat', sans-serif">
      <div class="font-bold flex-shrink-0 w-32" style="color: #ff9416">JUN 2026</div>
      <div>Joint Five Eyes advisory: models capable of overwhelming defenses within <span class="font-semibold">"months, not years"</span>. UK AISI: frontier cyber-offensive capability <span class="font-semibold">doubles every ~4 months</span>.</div>
    </div>
    <div v-click class="flex items-baseline gap-4 text-base" style="font-family: 'Montserrat', sans-serif">
      <div class="font-bold flex-shrink-0 w-32" style="color: #ff9416">JUL 2026</div>
      <div>Check Point: functional exploits <span class="font-semibold">within hours</span> of a vulnerability's disclosure; VoidLink case: ~88,000 lines of offensive tooling, one developer, one week.</div>
    </div>
  </div>
  <div v-click class="mt-6 p-5 rounded-lg" style="background: rgba(148, 163, 184, 0.08)">
    <blockquote class="text-base italic" style="font-family: 'Roboto Slab', serif">
      "AI shortens full cyberoperations <span class="font-semibold" style="color:#ff9416">from years to months</span>… AI accelerates the speed of the attack from hours to minutes."
    </blockquote>
    <div class="text-sm opacity-50 mt-2" style="font-family: 'Montserrat', sans-serif">— Li-Lian Ang, BlueDot Impact (2025) — the threat model, one year before the Five Eyes advisory</div>
  </div>
</div>

<!--
VOICE:
"Leg three: the curve that explains why the states are nervous.

[CLICK] February, before Mythos: CrowdStrike measures eighty-nine percent
more AI-driven adversarial operations than the year before. [CLICK]
April: Microsoft measures that AI-generated phishing gets a fifty-four
percent click-through rate — traditional, twelve. [CLICK]
June: the Five Eyes warn that models capable of overwhelming defenses are
'months, not years' away, and the British institute estimates that frontier
offensive capability doubles every four months. [CLICK]
July: functional exploits within hours of a vulnerability's disclosure.

[CLICK] And the detail I find most revealing: that 'months, not years' from
the intelligence services is exactly the curve the AI safety literature had
long been modeling — 'AI shortens cyberoperations from years to months, and
the speed of the attack from hours to minutes'. That's written in the
BlueDot course material a year before the advisory.

Two honest points. First: the trend predates Mythos — attributing the
escalation to these specific models is NOT supported by the data, and
anyone selling it to you that way is selling smoke. Second: the trend being
older doesn't make it less serious. It justifies structural concern. It
does not justify just any measure."

NOTES:
- All ✅ (report: cyberattacks). Do NOT use the ransomware +20%/+43% stat
  (refuted 0-3); if it comes up in Q&A: only Q2 2026 = 2,279 victims, +43%
  (GuidePoint).
- ~2 min. Block total: ~10 min.
-->
