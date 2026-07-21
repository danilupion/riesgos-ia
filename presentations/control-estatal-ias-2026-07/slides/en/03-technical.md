---
layout: section
class: text-center
---

<!--
Block 3: Why it doesn't hold technically (~10 min). Three reasons:
safeguards, open-weight, cyber curve. Source: crossover §2 to §4 + report.
Discipline: the ">99%" ALWAYS as Anthropic's claim.
-->

# Block 3
## Why it doesn't hold (technically)

<!--
VOICE:
"Part three. Suppose we accept this access control. Does it hold
technically? Three reasons: the safeguards, the open weights, and the
offensive capability curve."

NOTES:
- ~15s.
-->

---
layout: default
---

<div class="max-w-6xl mx-auto px-8 pt-2">
  <div class="text-sm uppercase tracking-widest opacity-60 mb-3" style="font-family: 'Montserrat', sans-serif; letter-spacing: 0.15em">
    Reason 1 · the safeguards
  </div>
  <div class="text-4xl font-bold mb-6" style="font-family: 'Saira Condensed', sans-serif; color: #ff9416">
    What is a classifier?
  </div>
  <div class="grid grid-cols-2 gap-6">
    <div class="p-5 rounded-lg" style="background: rgba(148, 163, 184, 0.08)">
      <div class="text-base font-bold mb-2 opacity-80" style="font-family: 'Saira Condensed', sans-serif; letter-spacing: 0.05em">
        THE CONCEPT
      </div>
      <div class="text-sm leading-relaxed" style="font-family: 'Montserrat', sans-serif">
        A second system that inspects <span class="font-semibold">what goes in</span> (your prompt) and
        <span class="font-semibold">what comes out</span> (the answer) and blocks what's disallowed.
        A filtering layer <span class="font-semibold">on top of the model</span>.
      </div>
    </div>
    <div class="p-5 rounded-lg" style="background: rgba(255, 148, 22, 0.05); border-left: 4px solid #ff9416">
      <div class="text-base font-bold mb-2" style="color: #ff9416; font-family: 'Saira Condensed', sans-serif; letter-spacing: 0.05em">
        ITS RELATION TO THE JAILBREAK
      </div>
      <div class="text-sm leading-relaxed" style="font-family: 'Montserrat', sans-serif">
        It's <span class="font-semibold">the main defense</span>: the jailbreak tries to make the model produce the banned content;
        the classifier is what should catch it. Anthropic's "constitutional" ones train from a list of
        rules and can be <span class="font-semibold">retrained fast</span> against new attacks.
      </div>
    </div>
  </div>
  <div class="mt-6 text-base opacity-80 italic text-center" style="font-family: 'Roboto Slab', serif">
    The question isn't whether they exist, but <span style="color:#ff9416">how much they really withstand</span>.
  </div>
</div>

<!--
VOICE:
"Reason one: the safeguards. And to talk about them properly, ten seconds on
what a classifier is, because it's the key piece.

A classifier is, simply, a second system that looks at what goes in, your
prompt, and what comes out, the model's answer, and blocks what's
disallowed. It's a filtering layer placed on top of the model, like a
bouncer.

And what does it have to do with the jailbreak? Everything. The classifier
is the main defense against jailbreaks: the jailbreak tries to make the
model produce banned content, and the classifier is exactly what should
catch it. Anthropic's are called 'constitutional' because they train from a
written list of what's allowed and disallowed, and they can be retrained
fast when a new attack appears. That's what Anthropic called 'rapid
response' in June.

So the interesting question isn't whether they exist. It's how much they
really withstand. And that we see with data."

NOTES:
- The classifier concept + its role against jailbreaks. Counterpart to the
  "What is a jailbreak?" slide in Block 1.
- No clicks. ~1 min.
-->

---
layout: default
---

<div class="max-w-6xl mx-auto px-8 pt-2">
  <div class="text-sm uppercase tracking-widest opacity-60 mb-3" style="font-family: 'Montserrat', sans-serif; letter-spacing: 0.15em">
    Reason 1 · the safeguards
  </div>
  <div class="text-4xl font-bold mb-6" style="font-family: 'Saira Condensed', sans-serif; color: #ff9416">
    A cycle that never closes
  </div>
  <div class="space-y-4">
    <div class="flex items-baseline gap-4 text-base" style="font-family: 'Montserrat', sans-serif">
      <div class="font-bold flex-shrink-0 w-40" style="color: #ff9416">REINFORCED</div>
      <div>The classifier is trained and declared robust: in 2025, jailbreaks from 86% to <span class="font-semibold">4.4%</span> after 3,000 hours of red-teaming; and after Fable, Anthropic <span class="font-semibold">says</span> it blocks the technique <span class="font-semibold">&gt;99%</span> (unverified).</div>
    </div>
    <div class="flex items-baseline gap-4 text-base" style="font-family: 'Montserrat', sans-serif">
      <div class="font-bold flex-shrink-0 w-40" style="color: #ff9416">BROKEN</div>
      <div>And it always ends up broken: a <span class="font-semibold">universal jailbreak</span> against those classifiers in 2025; Fable 5, with the best safeguards, <span class="font-semibold">in 3 days</span> (Jun 2026). <span class="opacity-70">↻ And back to reinforcing.</span></div>
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
"The data. And I want to be fair, because the story is better than it looks.
And worse. Notice: it's a two-step loop. The classifier is reinforced, it
breaks, and back to the start. Reinforcing and retraining are the same thing.

In 2025, Anthropic's constitutional classifiers withstood three thousand
hours of red-teaming without a single universal jailbreak, and cut
jailbreak success from 86% to 4.4%. Serious engineering. But in the public
demo, in the end, someone got the universal jailbreak.

June 2026, same dynamic, though a different attack: not a universal jailbreak
like the demo's, but a specific technique with which Fable 5 got as far as
producing working exploit code. Fable ships with the company's most polished
safeguards, and even so Amazon's team needed three days. And the response was
the usual one: retrain the classifier, which now, says Anthropic, blocks the
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
    Reason 2 · the open weights
  </div>
  <div class="text-4xl font-bold mb-6" style="font-family: 'Saira Condensed', sans-serif; color: #ff9416">
    What the directive cannot touch
  </div>
  <div class="grid grid-cols-3 gap-5 text-center">
    <div class="p-5 rounded-lg" style="background: rgba(255, 148, 22, 0.05)">
      <div class="text-5xl font-black" style="font-family: 'Saira Condensed', sans-serif; color: #ff9416">$200</div>
      <div class="text-sm mt-3 opacity-80 leading-relaxed" style="font-family: 'Montserrat', sans-serif">
        Stripping the safeguards off an open model. Demonstrated with Llama 2.
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
"Reason two: the open weights. Three numbers.

Two hundred dollars: what it cost to strip the safeguards off an open model.
It was demonstrated with Llama 2 years ago; with today's open models, closer
to the frontier, it's only easier. The safeguards of an open model are a
suggestion.

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
</div>

<!--
VOICE:
"One clarification, because this argument is used against us a lot: 'if
unilateral control does not work, why ask for pauses?'

MIRI's calculation says it without anesthesia: a US-only pause buys around
six months.

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
    Reason 3 · offensive capability
  </div>
  <div class="text-4xl font-bold mb-5" style="font-family: 'Saira Condensed', sans-serif; color: #ff9416">
    Why states are nervous
  </div>
  <div class="p-5 rounded-lg mb-5 flex items-center gap-6" style="background: rgba(255, 148, 22, 0.08); border-left: 4px solid #ff9416">
    <div class="text-4xl font-black flex-shrink-0" style="font-family: 'Saira Condensed', sans-serif; color: #ff9416">×2 every ~4 months</div>
    <div class="text-base leading-relaxed" style="font-family: 'Montserrat', sans-serif">
      Frontier models' cyberattack capability <span class="font-semibold">doubles every four months</span> (UK AISI). That's the curve.
    </div>
  </div>
  <div class="grid grid-cols-2 gap-4 text-center">
    <div class="p-4 rounded-lg" style="background: rgba(148, 163, 184, 0.08)">
      <div class="text-sm font-bold mb-1" style="color:#ff9416; font-family: 'Saira Condensed', sans-serif">"Months, not years"</div>
      <div class="text-xs opacity-80" style="font-family: 'Montserrat', sans-serif">Until a model overwhelms defenses (Five Eyes warning).</div>
    </div>
    <div class="p-4 rounded-lg" style="background: rgba(148, 163, 184, 0.08)">
      <div class="text-sm font-bold mb-1" style="color:#ff9416; font-family: 'Saira Condensed', sans-serif">Within hours</div>
      <div class="text-xs opacity-80" style="font-family: 'Montserrat', sans-serif">Working exploits after a vulnerability is published (Check Point).</div>
    </div>
  </div>
  <div v-click class="mt-5 p-4 rounded-lg" style="background: rgba(255, 148, 22, 0.05)">
    <div class="text-base leading-relaxed" style="font-family: 'Montserrat', sans-serif">
      Two honest caveats: the trend <span class="font-semibold">predates Mythos</span> (it's not these models' fault), but it's <span class="font-semibold">real and serious</span>.
    </div>
  </div>
</div>

<!--
VOICE:
"Reason three: offensive capability, which is what makes states nervous. And
there's one number that sums it all up: frontier models' cyberattack
capability doubles every four months, per the UK security institute. Every
four months, double. That's the curve.

What does it mean concretely? Two examples. The Five Eyes warn that
a model able to overwhelm defenses is months, not years, away. And there are
already working exploits within hours of a vulnerability being published.
(And in the background, CrowdStrike was already measuring 89% more AI
operations than the year before, even before Mythos.)

It's the same curve the AI safety literature had been modeling for a year:
'AI shortens cyberoperations from years to months'.

[CLICK]

Two honest caveats. One: this trend predates Mythos. Attributing the
escalation to these specific models is not supported by the data, and whoever
sells it to you that way is selling smoke. Two: being older does not make it
less serious. It justifies structural concern. It does not justify any
measure whatsoever."

NOTES:
- All ✅ (report: cyberattacks). BlueDot original: "AI shortens full
  cyberoperations from years to months".
- Do NOT use ransomware +20%/+43% (refuted 0-3). In Q&A: only Q2 2026,
  2,279 victims, +43% (GuidePoint).
- ~2 min. Block total: ~10 min.
-->
