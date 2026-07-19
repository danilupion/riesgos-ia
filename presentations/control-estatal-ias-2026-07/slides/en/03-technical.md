---
layout: section
class: text-center
---

<!--
Block 3: Why it doesn't hold technically (~10 min). Three legs:
safeguards, open-weight, cyber curve. Source: crossover §2 to §4 + report.
Discipline: the ">99%" ALWAYS as Anthropic's claim.
-->

# Block 3
## Why it doesn't hold (technically)

<!--
VOICE:
"Part three. Suppose we accept this access control. Does it hold
technically? Three legs: the safeguards, the open weights, and the
offensive capability curve."

NOTES:
- ~15s.
-->

---
layout: default
---

<div class="max-w-6xl mx-auto px-8 pt-2">
  <div class="text-sm uppercase tracking-widest opacity-60 mb-3" style="font-family: 'Montserrat', sans-serif; letter-spacing: 0.15em">
    Leg 1 · the safeguards
  </div>
  <div class="text-4xl font-bold mb-6" style="font-family: 'Saira Condensed', sans-serif; color: #ff9416">
    Cat and mouse, with data
  </div>
  <div class="space-y-3">
    <div class="flex items-baseline gap-4 text-base" style="font-family: 'Montserrat', sans-serif">
      <div class="font-bold flex-shrink-0 w-32" style="color: #ff9416">2025</div>
      <div>Constitutional Classifiers: <span class="font-semibold">3,000 hours</span> of red-teaming without a universal jailbreak. Jailbreak success: 86% to <span class="font-semibold">4.4%</span>.</div>
    </div>
    <div class="flex items-baseline gap-4 text-base" style="font-family: 'Montserrat', sans-serif">
      <div class="font-bold flex-shrink-0 w-32" style="color: #ff9416">THE DEMO</div>
      <div>In the public demo, someone eventually lands <span class="font-semibold">a universal jailbreak</span>.</div>
    </div>
    <div class="flex items-baseline gap-4 text-base" style="font-family: 'Montserrat', sans-serif">
      <div class="font-bold flex-shrink-0 w-32" style="color: #ff9416">JUN 2026</div>
      <div>Fable 5 ships with reinforced safeguards. <span class="font-semibold">Jailbroken in 3 days.</span></div>
    </div>
    <div class="flex items-baseline gap-4 text-base" style="font-family: 'Montserrat', sans-serif">
      <div class="font-bold flex-shrink-0 w-32" style="color: #ff9416">">99%"</div>
      <div>The retrained classifier blocks the technique, <span class="font-semibold">says Anthropic</span>. Single source, no independent verification.</div>
    </div>
  </div>
  <div v-click class="mt-6 p-5 rounded-lg" style="background: rgba(148, 163, 184, 0.08)">
    <blockquote class="text-base italic" style="font-family: 'Roboto Slab', serif">
      "To our knowledge there are still <span class="font-semibold" style="color:#ff9416">no fully robust deep-learning models</span> in production."
    </blockquote>
    <div class="text-sm opacity-50 mt-2" style="font-family: 'Montserrat', sans-serif">Sharma et al. (Anthropic), after 10 years of adversarial attacks</div>
  </div>
</div>

<!--
VOICE:
"Leg one: the safeguards. And I want to be fair, because the story is
better than it looks. And worse.

In 2025, Anthropic's constitutional classifiers withstood three thousand
hours of red-teaming without a single universal jailbreak, and cut
jailbreak success from 86% to 4.4%. Serious engineering. But in the public
demo, in the end, someone got the universal jailbreak.

June 2026, same movie: Fable 5 ships with the company's most polished
safeguards. Amazon's team needed three days. And the response was the
usual one: retrain the classifier, which now, says Anthropic, blocks the
technique in more than 99% of attempts. Notice I say 'says Anthropic': the
figure exists only on their page.

[CLICK]

The honest sentence is the one from their own researchers: after ten years
of adversarial attacks, there is no fully robust deep learning model in
production. None.

And the epistemological nuance: 'blocks 99% of known attempts' speaks
about the past. The security that matters is about future attacks."

NOTES:
- Quote verbatim (verified): Constitutional Classifiers.
- ">99%" = ❌→ⓘ in report: ONLY as a claim.
- If asked about fragile evals: shutdown-resistance case, 79% that
  evaporates when instructions are clarified (for Q&A).
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
  <span style="color: #ff9416">Mythos would not need Glasswing.</span>
</div>

<!--
VOICE:
"And here is the structural irony of the whole edifice.

[CLICK]

If safeguards were enough, Glasswing would not be needed. You would ship
Mythos with the classifier and be done. The existence of restricted access
is the confession that safeguards are not enough to grant general access
to dangerous capabilities. It is Anthropic's argument against itself. And
it is correct. Our conclusion is a different one, and it arrives in the
final block."

NOTES:
- Pivot slide. Let it breathe.
- ~45s.
-->

---
layout: default
---

<div class="max-w-6xl mx-auto px-8 pt-2">
  <div class="text-sm uppercase tracking-widest opacity-60 mb-3" style="font-family: 'Montserrat', sans-serif; letter-spacing: 0.15em">
    Leg 2 · the open weights
  </div>
  <div class="text-4xl font-bold mb-6" style="font-family: 'Saira Condensed', sans-serif; color: #ff9416">
    What the directive cannot touch
  </div>
  <div class="grid grid-cols-3 gap-5 text-center">
    <div class="p-5 rounded-lg" style="background: rgba(255, 148, 22, 0.05)">
      <div class="text-5xl font-black" style="font-family: 'Saira Condensed', sans-serif; color: #ff9416">$200</div>
      <div class="text-sm mt-3 opacity-80 leading-relaxed" style="font-family: 'Montserrat', sans-serif">
        Undoing Llama 2's safety fine-tuning.
      </div>
    </div>
    <div class="p-5 rounded-lg" style="background: rgba(255, 148, 22, 0.05)">
      <div class="text-5xl font-black" style="font-family: 'Saira Condensed', sans-serif; color: #ff9416">94% <span class="text-2xl opacity-60">vs 8%</span></div>
      <div class="text-sm mt-3 opacity-80 leading-relaxed" style="font-family: 'Montserrat', sans-serif">
        Malicious requests fulfilled: DeepSeek R1 versus US models.
      </div>
    </div>
    <div class="p-5 rounded-lg" style="background: rgba(255, 148, 22, 0.05)">
      <div class="text-5xl font-black" style="font-family: 'Saira Condensed', sans-serif; color: #ff9416">19 days</div>
      <div class="text-sm mt-3 opacity-80 leading-relaxed" style="font-family: 'Montserrat', sans-serif">
        Of Fable blackout. Kimi and DeepSeek, available every single one.
      </div>
    </div>
  </div>
  <div v-click class="mt-8 p-5 rounded-lg" style="background: rgba(148, 163, 184, 0.08)">
    <div class="text-base leading-relaxed" style="font-family: 'Montserrat', sans-serif">
      CAISI (NIST): Kimi <span class="font-semibold">still below</span> the leading closed models on cyber tasks,
      <span class="font-semibold">but closing the gap</span>. And for published weights
      <span class="font-semibold" style="color:#ff9416">there is no rollback</span>.
    </div>
  </div>
</div>

<!--
VOICE:
"Leg two: the open weights. Three numbers.

Two hundred dollars: what it cost to undo Llama 2's safety fine-tuning.
The safeguards of an open model are a suggestion.

Ninety-four percent: the openly malicious requests DeepSeek fulfilled with
common jailbreaks. The American models: eight.

And nineteen days of Fable blackout, during which Kimi and DeepSeek were
perfectly available. The directive switched off the model with safeguards
and left the ones without them untouched.

[CLICK]

CAISI's assessment is honest and I give it in full: Kimi is still below
the leading closed models on cyber tasks. But it is closing the gap. And
for published weights there is no rollback: there is no API to switch off
and no letter to send. It is a geological fact. It is already part of the
landscape."

NOTES:
- $200 and 94%/8%: BlueDot, ✅ (crossover §3). CAISI: report ✅.
- "Geological fact" is the image to retain.
- ~2 min.
-->

---
layout: default
---

<div class="max-w-6xl mx-auto px-8 pt-2">
  <div class="text-4xl font-bold mb-8" style="font-family: 'Saira Condensed', sans-serif; color: #ff9416">
    Unilateral does not work
  </div>
  <div class="p-6 rounded-lg" style="background: rgba(148, 163, 184, 0.08)">
    <blockquote class="text-xl italic leading-relaxed" style="font-family: 'Roboto Slab', serif">
      A US-only pause <span class="font-semibold" style="color:#ff9416">"might buy around six months"</span>,
      until the first Chinese company reaches the same point.
    </blockquote>
    <div class="text-sm opacity-50 mt-3" style="font-family: 'Montserrat', sans-serif">Scher et al. (MIRI), international agreement proposal (2025)</div>
  </div>
  <div v-click class="mt-8 text-xl text-center leading-relaxed max-w-4xl mx-auto" style="font-family: 'Roboto Slab', serif">
    This is not an argument against coordination.<br/>
    <span style="color: #ff9416">It is the premise of every treaty.</span>
  </div>
</div>

<!--
VOICE:
"One clarification, because this argument is used against us a lot: 'if
unilateral control does not work, why ask for pauses?'

MIRI's calculation says it without anesthesia: a US-only pause buys around
six months.

[CLICK]

Exactly. That is why no serious person asks for a unilateral pause. That
unilateral does not work is the premise of every treaty, not its
refutation. Nobody says the nuclear non-proliferation treaty is pointless
because a single country cannot stop proliferation. Keep this idea for the
final block."

NOTES:
- Quote verbatim (verified): MIRI.
- Preempt of objection 2 from the crossover.
- ~1 min.
-->

---
layout: default
---

<div class="max-w-6xl mx-auto px-8 pt-2">
  <div class="text-sm uppercase tracking-widest opacity-60 mb-3" style="font-family: 'Montserrat', sans-serif; letter-spacing: 0.15em">
    Leg 3 · offensive capability
  </div>
  <div class="text-4xl font-bold mb-6" style="font-family: 'Saira Condensed', sans-serif; color: #ff9416">
    The curve that scares states
  </div>
  <div class="space-y-3">
    <div class="flex items-baseline gap-4 text-base" style="font-family: 'Montserrat', sans-serif">
      <div class="font-bold flex-shrink-0 w-32" style="color: #ff9416">FEB</div>
      <div>CrowdStrike, before Mythos: AI-assisted operations <span class="font-semibold">+89% year over year</span>.</div>
    </div>
    <div class="flex items-baseline gap-4 text-base" style="font-family: 'Montserrat', sans-serif">
      <div class="font-bold flex-shrink-0 w-32" style="color: #ff9416">APR</div>
      <div>Microsoft: AI-generated phishing, <span class="font-semibold">54% click rate</span>. Traditional: 12%.</div>
    </div>
    <div class="flex items-baseline gap-4 text-base" style="font-family: 'Montserrat', sans-serif">
      <div class="font-bold flex-shrink-0 w-32" style="color: #ff9416">JUN</div>
      <div>Five Eyes: models that overwhelm defenses are <span class="font-semibold">"months, not years"</span> away. UK AISI: offensive capability <span class="font-semibold">doubles every ~4 months</span>.</div>
    </div>
    <div class="flex items-baseline gap-4 text-base" style="font-family: 'Montserrat', sans-serif">
      <div class="font-bold flex-shrink-0 w-32" style="color: #ff9416">JUL</div>
      <div>Check Point: working exploits <span class="font-semibold">within hours</span> of a vulnerability being published.</div>
    </div>
  </div>
  <div v-click class="mt-6 p-5 rounded-lg" style="background: rgba(148, 163, 184, 0.08)">
    <div class="text-base leading-relaxed" style="font-family: 'Montserrat', sans-serif">
      Two honest caveats: the trend <span class="font-semibold">predates Mythos</span> (blaming it is not supported).
      And being older <span class="font-semibold">does not make it less serious</span>.
    </div>
  </div>
</div>

<!--
VOICE:
"Leg three: the curve that explains why states are nervous.

February, before Mythos: 89% more adversarial AI operations than the year
before. April: AI-generated phishing gets 54% of clicks; traditional, 12.
June: the Five Eyes warn that models able to overwhelm defenses are months,
not years, away, and the UK institute estimates that offensive capability
doubles every four months. July: working exploits within hours of a
vulnerability being published.

And one detail: that 'months, not years' is the same curve the AI safety
literature had been modeling for a year: 'AI shortens cyberoperations from
years to months'.

[CLICK]

Two honest caveats. One: the trend predates Mythos. Attributing the
escalation to these models is not supported by the data, and whoever sells
it to you that way is selling smoke. Two: being older does not make it
less serious. It justifies structural concern. It does not justify any
measure whatsoever."

NOTES:
- All ✅ (report: cyberattacks). BlueDot original: "AI shortens full
  cyberoperations from years to months".
- Do NOT use ransomware +20%/+43% (refuted 0-3). In Q&A: only Q2 2026,
  2,279 victims, +43% (GuidePoint).
- ~2 min. Block total: ~10 min.
-->
