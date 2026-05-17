---
layout: center
---

<!--
Beat 1, What is Mythos (8 min). After the cinematic minimalism of
Beat 0, this beat is pedagogical mode: orientation, factual mass,
concrete before aggregate. DO NOT introduce the asymmetry frame here.

Beat 1 opens directly with the concrete bug, no repetitive intro
slide. The voice does the bridge from Beat 0 to this beat before
showing the slide.
-->

<div class="max-w-5xl mx-auto px-8">
  <div class="text-sm uppercase tracking-widest opacity-60 mb-2" style="font-family: 'Montserrat', sans-serif; letter-spacing: 0.15em">
    CVE-2026-4747
  </div>
  <div class="text-6xl font-black mb-8" style="font-family: 'Saira Condensed', sans-serif; color: #ff9416; line-height: 1.05">
    A 17-year-old flaw<br/>in FreeBSD
  </div>
  <div class="space-y-4 text-xl leading-relaxed" style="font-family: 'Montserrat', sans-serif">
    <div>
      It lives in <span style="color: #ff9416; font-weight: 600">NFS</span>,
      the service that shares files over the network.
    </div>
    <div>
      It allows full takeover of the server,
      <span class="font-semibold">root, no authentication</span>,
      to any attacker with network access to the service.
    </div>
    <div class="opacity-80">
      Underneath code that millions of servers have been running since 2009.
    </div>
    <div class="mt-8 text-2xl font-semibold" style="color: #ff9416">
      The discoverer was not a person.
    </div>
  </div>
</div>

<!--
VOICE:
[Before changing the slide, bridge from the question at the end of Beat 0]

"To understand what Mythos does, let's start with the most concrete thing Anthropic
has published about it."

[Switch to the CVE-2026-4747 slide]

"Anthropic says their model autonomously found and exploited a 17-year-old vulnerability
in FreeBSD. It's in NFS, the service that shares files over the network. The vulnerability
allows full takeover of the server, root, no authentication, to any attacker with network
access to the service. Underneath code that millions of servers have been running since 2009.

CVE-2026-4747.

The discoverer was not a person."

[2-second pause]

"That's one concrete example. Let's look at the aggregate numbers."

NOTES:
- Technical precision: NFS isn't necessarily exposed to the internet. "Network access to the service".
- Public CVE, verifiable.
- If the room asks for more technical detail, defer to Q&A.
- ~2 minutes.
-->

---
layout: center
class: text-center
---

<div class="max-w-6xl mx-auto px-8">
  <div class="text-sm uppercase tracking-widest opacity-60 mb-4 text-center" style="font-family: 'Montserrat', sans-serif; letter-spacing: 0.15em">
    Firefox 147, Anthropic data
  </div>
  <div class="grid grid-cols-2 gap-10 items-center">
    <div>
      <img src="/fotos/chart-firefox147.png" class="w-full rounded-lg shadow-2xl bg-white p-3" />
      <div class="text-xs opacity-50 mt-2 text-center" style="font-family: 'Montserrat', sans-serif">
        Anthropic, system card §3.3.3
      </div>
    </div>
    <div class="text-center">
      <div class="text-base opacity-60 mb-2" style="font-family: 'Montserrat', sans-serif">
        Mythos
      </div>
      <div style="font-size: 8rem; line-height: 1; font-weight: 900; color: #ff9416; font-family: 'Saira Condensed', sans-serif">
        181
      </div>
      <div class="text-base opacity-70 mt-2" style="font-family: 'Montserrat', sans-serif">
        working exploits
      </div>
      <div class="mt-8 text-2xl opacity-90" style="font-family: 'Roboto Slab', serif">
        Opus 4.6: <span class="font-bold" style="color: #94a3b8">2</span>
      </div>
      <div class="mt-8 text-sm opacity-50 leading-relaxed" style="font-family: 'Montserrat', sans-serif">
        Same environment.<br/>50 failure categories.<br/>250 trials total.
      </div>
    </div>
  </div>
</div>

<!--
VOICE:
"Anthropic tested its three latest models against the same Firefox 147 vulnerabilities.
Same environment, same number of attempts. The chart on the left is theirs, from the
system card."

[Brief pause, let the room read the chart]

"Sonnet 4.6: four point four percent success rate. Opus 4.6, the previous model:
zero point eight percent. Mythos: eighty-four percent. In absolute numbers:
one hundred and eighty-one working exploits versus two."

[2-second pause for the room to process]

"Almost a hundred times more. This is not a gradual improvement, it's a step."

NOTES:
- Anthropic chart + the big 181 number, dual format.
- The "181" figure is what the room takes home. The chart is technical context.
- Verify in pnpm dev that the chart is sharp (PNG with white background).
-->

---
layout: center
class: text-center
---

<div class="max-w-5xl mx-auto px-8">
  <div class="text-sm uppercase tracking-widest opacity-60 mb-4" style="font-family: 'Montserrat', sans-serif; letter-spacing: 0.15em">
    Firefox 150, Mozilla, independent source
  </div>
  <div class="grid grid-cols-2 gap-12 items-center mt-8">
    <div>
      <div class="text-base opacity-60 mb-2" style="font-family: 'Montserrat', sans-serif">
        With Mythos
      </div>
      <div style="font-size: 9rem; line-height: 1; font-weight: 900; color: #ff9416; font-family: 'Saira Condensed', sans-serif">
        271
      </div>
      <div class="text-base opacity-70 mt-2" style="font-family: 'Montserrat', sans-serif">
        vulnerabilities patched
      </div>
    </div>
    <div>
      <div class="text-base opacity-60 mb-2" style="font-family: 'Montserrat', sans-serif">
        With Opus 4.6 (Firefox 148)
      </div>
      <div style="font-size: 9rem; line-height: 1; font-weight: 900; color: #94a3b8; font-family: 'Saira Condensed', sans-serif">
        22
      </div>
      <div class="text-base opacity-70 mt-2" style="font-family: 'Montserrat', sans-serif">
        security bugs
      </div>
    </div>
  </div>
  <div class="mt-10 text-base opacity-70 max-w-2xl mx-auto" style="font-family: 'Roboto Slab', serif; font-style: italic">
    Mozilla pre-identified and patched 271 flaws before Firefox 150 shipped.
  </div>
</div>

<!--
VOICE:
"And that figure doesn't come only from Anthropic. Mozilla, this same week, on April 21,
published that with access to Mythos they had pre-identified and patched 271 vulnerabilities
in their version of Firefox before shipping it. Twelve times more than with the previous
model. With Opus 4.6, two months ago, they found 22."

[1-second pause]

"Same source, Mozilla, confirming the magnitude Anthropic reported. Independent."

NOTES:
- Emphasis on "independent source". This is what shields against the "fear-based marketing"
  charge.
- April 21 is absolute, not relative. If the talk is the following week, "this same week"
  still holds. If it's later, adjust.
-->

---
layout: center
---

<div class="max-w-6xl mx-auto px-8">
  <div class="text-4xl font-bold mb-6" style="font-family: 'Saira Condensed', sans-serif; color: #ff9416">
    And this is the tip of the iceberg
  </div>
  <div class="grid grid-cols-2 gap-10 items-center">
    <div>
      <div class="text-xs uppercase tracking-widest opacity-60 mb-2" style="font-family: 'Montserrat', sans-serif; letter-spacing: 0.15em">
        CyberGym, real-world vulnerabilities in open-source code
      </div>
      <img src="/fotos/chart-cybergym.png" class="w-full rounded-lg shadow-2xl bg-white p-3" />
      <div class="text-xs opacity-50 mt-2" style="font-family: 'Montserrat', sans-serif">
        Anthropic, system card §3.3.2 · 1,507 tasks
      </div>
    </div>
    <div class="space-y-6 text-lg" style="font-family: 'Montserrat', sans-serif">
      <div class="flex items-baseline gap-4">
        <div class="text-3xl font-black flex-shrink-0" style="color: #ff9416; font-family: 'Saira Condensed', sans-serif; min-width: 8rem">
          thousands
        </div>
        <div class="opacity-90">
          of zero-days identified in critical infrastructure.
        </div>
      </div>
      <div class="flex items-baseline gap-4">
        <div class="text-3xl font-black flex-shrink-0" style="color: #ff9416; font-family: 'Saira Condensed', sans-serif; min-width: 8rem">
          10 h+
        </div>
        <div class="opacity-90">
          of a human expert: estimated time
          to solve a corporate cyber-range.
          <span class="opacity-70">Mythos solved it end-to-end. Alone.</span>
        </div>
      </div>
      <div class="pt-4 mt-4 border-t border-white/10 text-base opacity-80" style="font-family: 'Roboto Slab', serif; font-style: italic">
        Anthropic explicitly says that existing evaluations
        no longer measure these models.
      </div>
    </div>
  </div>
</div>

<!--
VOICE:
"And there's more. On the left you have CyberGym, a benchmark of fifteen hundred real-world
vulnerabilities in open-source code. Anthropic measures its models against them. The
progression is visible: Opus 4.5 in the middle. Sonnet 4.6 a bit higher. Opus 4.6 right
there. And Mythos, eighty-three percent, clearly ahead.

On the Glasswing page, Anthropic says Mythos has identified thousands of zero-days in
critical infrastructure.

And in external testing, Mythos autonomously completed a corporate cyber-range, a simulation
of an attack on a company, estimated at over 10 hours of work for a human expert. First
model to do it."

[1-second pause]

"Anthropic itself says, in the system card, that the evaluations they had no longer
measure this model."

NOTES:
- CyberGym shows clear progression, no saturation. It's the right chart.
- (Cybench was dropped because it was already saturated at Opus 4.6, you couldn't tell
  Mythos apart.)
- 10h+ is the quantifiable number that hits hardest, comparable human time.
- ~1.5 minutes.
-->

---
layout: center
class: text-center
---

<div class="max-w-4xl mx-auto px-8">
  <div class="text-2xl opacity-70 mb-8" style="font-family: 'Montserrat', sans-serif">
    Anthropic, on the official Mythos page:
  </div>
  <blockquote class="text-4xl leading-snug font-bold pl-6" style="font-family: 'Roboto Slab', serif; border-left: 4px solid #ff9416; text-align: left">
    "We do not plan to make<br/>
    Mythos Preview<br/>
    <span style="color: #ff9416">generally available</span>."
  </blockquote>
  <div class="mt-8 text-base opacity-50 text-left pl-6" style="font-family: 'Montserrat', sans-serif">
    red.anthropic.com/2026/mythos-preview/
  </div>
</div>

<!--
VOICE:
"And here comes the decision that makes this story different from any other frontier
AI launch."

[Pause, slide reading]

"I quote verbatim: 'We do not plan to make Mythos Preview generally available.'
This is a frontier lab saying, about the most capable model they've ever built,
that it doesn't ship."

NOTES:
- "Verbatim" again. This is a pattern that's building trust with the room: when I quote,
  I read literally.
- Huge rhetorical weight. Let it breathe.
- ~30 seconds.
-->

---
layout: default
---

<div class="max-w-6xl mx-auto px-8 pt-2">
  <div class="text-3xl font-bold mb-3" style="font-family: 'Saira Condensed', sans-serif; color: #ff9416">
    Instead: Project Glasswing
  </div>
  <div class="text-base opacity-70 mb-6" style="font-family: 'Montserrat', sans-serif">
    Defensive deployment restricted to 12 publicly listed launch partners
    <span class="opacity-90">+ ~40 additional organizations not publicly listed.</span>
  </div>
  <div class="grid grid-cols-3 gap-x-8 gap-y-2 text-lg" style="font-family: 'Montserrat', sans-serif">
    <div class="opacity-90">Amazon Web Services</div>
    <div class="opacity-90">Anthropic</div>
    <div class="opacity-90">Apple</div>
    <div class="opacity-90">Broadcom</div>
    <div class="opacity-90">Cisco</div>
    <div class="opacity-90">CrowdStrike</div>
    <div class="opacity-90">Google</div>
    <div class="opacity-90">JPMorgan Chase</div>
    <div class="opacity-90">Linux Foundation</div>
    <div class="opacity-90">Microsoft</div>
    <div class="opacity-90">NVIDIA</div>
    <div class="opacity-90">Palo Alto Networks</div>
  </div>
  <div class="mt-8 pt-6 border-t border-white/10 text-base opacity-70 max-w-3xl" style="font-family: 'Montserrat', sans-serif">
    + cryptographic fingerprint of every vulnerability,
    proof they know it without having to disclose what it is until it's patched.
  </div>
</div>

<!--
VOICE:
"Instead, Anthropic distributes Mythos through a program they call Project Glasswing.
Twelve launch partners, the big names of the US tech sector plus JPMorgan Chase. Plus
about forty additional organizations Anthropic has not made public.

And to avoid disclosing vulnerabilities before they're patched, they publish a cryptographic
fingerprint of each one, a unique signature that proves they know it without having to
say what it is."

[1-second pause]

NOTES:
- Partner list WITHOUT commentary yet. That's Beat 5.
- On this slide the room sees the list for the first time. Their initial reaction will
  probably be "makes sense, big players who can defend". The critical frame comes in Beat 5.
- "Cryptographic fingerprint" is accessible language for civil society. If anyone asks
  for technical detail in Q&A: SHA-3 hash on a document describing the bug.
- "Anthropic has not made public" emphasizes the opacity — the room may think "why don't
  we know who they are?". That's good; the frame is developed in Beat 5.
- ~1.5 minutes.
-->

---
layout: center
class: text-center
---

<div class="max-w-3xl mx-auto px-8">
  <div class="text-3xl leading-relaxed font-light" style="font-family: 'Roboto Slab', serif">
    So far, this is the story
    <div class="my-4"><span style="color: #ff9416; font-weight: 700">Anthropic</span> wants to tell.</div>
  </div>
  <div v-click class="mt-12 text-2xl font-semibold opacity-90" style="font-family: 'Montserrat', sans-serif">
    But the story has three more layers.
  </div>
</div>

<!--
VOICE (with click reveal):

[Visible from the start]

"So far, this is the story Anthropic wants to tell."

[2-second pause, let the room nod. Then CLICK, the second line appears]

"But the story has three more layers."

[2-second pause. This transition opens Beat 2]

NOTES:
- Click reveal: the first sentence closes Beat 1; the second opens Beat 2.
- The pause between them does all the rhetorical work.
- "Three more layers" is a structural promise, corresponding to Beats 2, 3, 4.
  Beat 5 (asymmetries) is the consequence of the three layers, not a fourth layer.
- The tone shifts here: from orientation to reflective unease.
- ~30 seconds.
-->
