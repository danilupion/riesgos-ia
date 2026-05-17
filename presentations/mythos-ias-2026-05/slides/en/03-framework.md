---
layout: section
class: text-center
---

<!--
Beat 3, The framework that changed (7 min). Structural curiosity.
The room starts to see the pattern. DO NOT editorialize, cite and let it sit.
"I don't tell you what to think of that. I show you the data."
-->

# Layer 2
## The framework that changed

<!--
VOICE:
"Second layer. Anthropic has a framework to classify the risk of its models.
They call it the Responsible Scaling Policy, RSP.

I'll tell you what happened to that framework just before Mythos."

NOTES:
- Header slide. ~10s.
- More analytical tone than Beat 2. Investigator mode.
-->

---
layout: default
---

<div class="max-w-5xl mx-auto px-8 pt-2">
  <div class="text-sm uppercase tracking-widest opacity-60 mb-1" style="font-family: 'Montserrat', sans-serif; letter-spacing: 0.15em">
    Before we go on, what is an ASL
  </div>
  <div class="text-3xl font-bold mb-2" style="font-family: 'Saira Condensed', sans-serif; color: #ff9416">
    AI Safety Level
  </div>
  <div class="text-sm opacity-70 mb-4" style="font-family: 'Roboto Slab', serif; font-style: italic">
    The five levels Anthropic uses to classify the risk of its models.
  </div>
  <div class="space-y-2 text-sm" style="font-family: 'Montserrat', sans-serif">
    <div class="flex items-baseline gap-4 p-2 rounded-lg" style="background: rgba(148, 163, 184, 0.05)">
      <div class="font-bold flex-shrink-0 w-20" style="color: #94a3b8; font-family: 'Saira Condensed', sans-serif; letter-spacing: 0.05em">ASL-1</div>
      <div class="opacity-90">No measurable risk. <span class="opacity-60">Systems prior to the current frontier.</span></div>
    </div>
    <div class="flex items-baseline gap-4 p-2 rounded-lg" style="background: rgba(148, 163, 184, 0.05)">
      <div class="font-bold flex-shrink-0 w-20" style="color: #94a3b8; font-family: 'Saira Condensed', sans-serif; letter-spacing: 0.05em">ASL-2</div>
      <div class="opacity-90">Frontier capabilities, limited risk. <span class="opacity-60">Models like Claude 3.5 or GPT-4: very capable, but no decisive advantage over a human expert with good tools.</span></div>
    </div>
    <div class="flex items-baseline gap-4 p-3 rounded-lg" style="background: rgba(255, 148, 22, 0.12); border-left: 4px solid #ff9416">
      <div class="font-bold flex-shrink-0 w-20" style="color: #ff9416; font-family: 'Saira Condensed', sans-serif; letter-spacing: 0.05em">ASL-3</div>
      <div>
        <span class="font-semibold">Significant uplift to people without technical training</span>
        <span class="opacity-80"> for creating chemical, biological, radiological or nuclear weapons (CBRN). Or for executing autonomous cyberattacks.</span>
        <div class="text-xs opacity-70 mt-1 italic">Opus 4.6 was deployed under this level.</div>
      </div>
    </div>
    <div class="flex items-baseline gap-4 p-2 rounded-lg" style="background: rgba(148, 163, 184, 0.05)">
      <div class="font-bold flex-shrink-0 w-20" style="color: #94a3b8; font-family: 'Saira Condensed', sans-serif; letter-spacing: 0.05em">ASL-4</div>
      <div class="opacity-90">Significant uplift to states with their CBRN programs. <span class="opacity-60">Or capacity to automate AI research: the model improving itself with no humans in the loop.</span></div>
    </div>
    <div class="flex items-baseline gap-4 p-2 rounded-lg" style="background: rgba(148, 163, 184, 0.05)">
      <div class="font-bold flex-shrink-0 w-20" style="color: #94a3b8; font-family: 'Saira Condensed', sans-serif; letter-spacing: 0.05em">ASL-5</div>
      <div class="opacity-90">Capabilities drastically beyond human level. <span class="opacity-60">Threshold where loss of human control over the system stops being hypothetical.</span></div>
    </div>
  </div>
  <div class="mt-3 text-xs opacity-50 text-center" style="font-family: 'Montserrat', sans-serif">
    Framework defined and self-assigned by Anthropic. It is not a regulator's standard.
  </div>
</div>

<!--
VOICE:
"Before we go on, a quick note. What is an ASL?

ASL stands for AI Safety Level. It's the framework Anthropic, until very recently,
used to classify the risk of its models. Five levels. I'll read them quickly; the
one to retain especially is level three."

[Slide reading, slow so it sinks in]

"Level one: no measurable risk. Systems prior to the current frontier.

Level two: frontier capabilities, limited risk. Models like Claude 3.5 or GPT-4 lived
here. Very capable, yes, but no decisive advantage over a human expert with good
tools.

Level three, the one to remember: significant uplift to people without technical
training to create chemical, biological, radiological or nuclear weapons. CBRN.
Or to execute autonomous cyberattacks. Opus 4.6, the model before Mythos, was
deployed under this level. That means Anthropic admits its production model can
provide uplift to someone without scientific training to manufacture a weapon of
mass destruction.

Level four: significant uplift to states with their CBRN programs. Or capacity
to automate AI research. The latter is the scenario where the model improves itself
without humans in the loop.

Level five: capabilities drastically beyond human level. Anthropic defines it as
the threshold where loss of human control over the system stops being hypothetical."

[Pause]

"One more thing, at the bottom. This framework is defined by Anthropic. Assigned by
Anthropic. It is not a regulator's standard. The company examines itself.

Keep ASL-3 in mind, the one Anthropic assigned to Opus 4.6. Let's go to the next slide."

NOTES:
- Pedagogical slide, ~90 seconds. The room needs it to understand what's coming.
- Definitions simplified for civil society but pointing to the most alarming data
  point: explicit CBRN at ASL-3, model self-improvement at ASL-4, loss of control
  at ASL-5.
- Highlight ASL-3 visually because it's the reference that appears in the next
  slides (Opus 4.6 vs Mythos).
- Key closing line: self-regulation framework, not a regulatory standard. Lands
  the power asymmetry.
- If anyone asks for detail in Q&A: these are RSP v2.x definitions. Under RSP v3.0
  (which is what comes in the next slide), Anthropic has retired the terminology,
  but the conceptual distinctions remain present.
-->

---
layout: center
class: text-center
---

<div class="max-w-5xl mx-auto px-8">
  <div class="text-sm uppercase tracking-widest opacity-60 mb-12" style="font-family: 'Montserrat', sans-serif; letter-spacing: 0.15em">
    Mentions of the term "AI Safety Level"
  </div>
  <div class="grid grid-cols-2 gap-12 items-center">
    <div>
      <div class="text-base opacity-60 mb-2" style="font-family: 'Montserrat', sans-serif">
        Opus 4.6 system card
      </div>
      <div class="text-xs opacity-40 mb-3" style="font-family: 'Montserrat', sans-serif">
        February 2026
      </div>
      <div style="font-size: 9rem; line-height: 1; font-weight: 900; color: #ff9416; font-family: 'Saira Condensed', sans-serif">
        61
      </div>
    </div>
    <div>
      <div class="text-base opacity-60 mb-2" style="font-family: 'Montserrat', sans-serif">
        Mythos system card
      </div>
      <div class="text-xs opacity-40 mb-3" style="font-family: 'Montserrat', sans-serif">
        April 2026
      </div>
      <div style="font-size: 9rem; line-height: 1; font-weight: 900; color: #94a3b8; font-family: 'Saira Condensed', sans-serif">
        3
      </div>
    </div>
  </div>
  <div class="mt-12 text-base opacity-50 italic" style="font-family: 'Roboto Slab', serif">
    Same company. Same kind of document. Two months apart.
  </div>
</div>

<!--
VOICE:
"If you open the Opus 4.6 system card, the previous model, released in February,
and search for the term 'AI Safety Level', you find sixty-one mentions.

If you open the Mythos system card, you find three."

[2-second pause]

"Same company. Same kind of document. Two months apart. Three appearances instead
of sixty-one."

NOTES:
- Quantifiable and reproducible figure (I verified it with grep).
- Don't editorialize. The room draws its own conclusion.
- ~1 minute.
-->

---
layout: default
---

<div class="max-w-6xl mx-auto px-8 pt-1">
  <div class="text-sm uppercase tracking-widest opacity-60 mb-3" style="font-family: 'Montserrat', sans-serif; letter-spacing: 0.15em">
    Each system card's abstract
  </div>
  <div class="grid grid-cols-2 gap-6">
    <div class="p-5 rounded-lg" style="background: rgba(255, 148, 22, 0.05); border: 1px solid rgba(255, 148, 22, 0.2)">
      <div class="text-sm font-bold mb-2" style="color: #ff9416; font-family: 'Saira Condensed', sans-serif">
        OPUS 4.6, FEBRUARY 2026
      </div>
      <blockquote class="text-sm leading-relaxed" style="font-family: 'Roboto Slab', serif">
        Informed by the testing described here,
        we have deployed Claude Opus 4.6 under the
        <span style="color: #ff9416; font-weight: 700; background: rgba(255, 148, 22, 0.15); padding: 2px 4px; border-radius: 3px">
          AI Safety Level 3 Deployment and Security Standard
        </span>.
      </blockquote>
    </div>
    <div class="p-5 rounded-lg" style="background: rgba(148, 163, 184, 0.05); border: 1px solid rgba(148, 163, 184, 0.2)">
      <div class="text-sm font-bold mb-2" style="color: #94a3b8; font-family: 'Saira Condensed', sans-serif">
        MYTHOS, APRIL 2026
      </div>
      <blockquote class="text-sm leading-relaxed" style="font-family: 'Roboto Slab', serif">
        The large increase in capabilities of Claude Mythos Preview
        has led us to decide not to make it generally available.
        Instead, we are using it as part of a defensive cybersecurity
        program with a limited group of partners.
      </blockquote>
      <div class="mt-2 text-xs opacity-50 italic" style="font-family: 'Montserrat', sans-serif">
        There is no parallel sentence about AI Safety Level.
      </div>
    </div>
  </div>
  <div v-click class="mt-6">
    <div class="text-xs uppercase tracking-widest opacity-60 mb-2" style="font-family: 'Montserrat', sans-serif; letter-spacing: 0.15em">
      The Mythos system card itself explains it
    </div>
    <blockquote class="text-base leading-relaxed pl-5" style="font-family: 'Roboto Slab', serif; border-left: 4px solid #ff9416">
      Under previous versions of our RSP, we were required to determine whether each model
      required the mitigations associated with a particular
      <span class="opacity-60 line-through">"AI Safety Level"</span>
      for a given threat model.
      <span class="font-semibold" style="color: #ff9416">
        Under RSP v3.0, we no longer use the term "AI Safety Levels"
        for these thresholds.
      </span>
    </blockquote>
    <div class="mt-2 text-xs opacity-50 pl-5 italic" style="font-family: 'Montserrat', sans-serif">
      "We no longer use the term 'AI Safety Levels' for these thresholds." · Mythos system card §2.1.1
    </div>
  </div>
</div>

<!--
VOICE (with click reveal):

[Visible from the start: both abstracts side by side]

"This is best seen in the abstracts of the two documents.

In the Opus 4.6 abstract, literal sentence: 'we have deployed Claude Opus 4.6 under
the AI Safety Level 3 Deployment and Security Standard'. A classification within the
framework. ASL-3.

In the Mythos abstract, parallel sentence: 'the large increase in capabilities has
led us to decide not to make it generally available'. A decision, not a classification.
The classification within the framework does not appear."

[2-second pause]

"Why does it disappear?"

[CLICK, the explanatory quote appears below]

"The Mythos system card itself explains it. Page fifteen, section two-point-one.
I quote verbatim:

'Under previous versions of our RSP, we were required to determine whether each model
required the mitigations associated with a particular AI Safety Level for a given
threat model. Under RSP v3.0, we no longer use the term AI Safety Levels for these
thresholds.'"

[2-second pause]

"Anthropic has just retired, their word, the terminology with which they classified
their models. They say it themselves."

NOTES:
- Click reveal: setup (parallel abstracts) + question "why?" in voice + click that
  delivers the answer directly from the system card itself.
- "AI Safety Level" struck through in the lower block, visual of the term being retired.
- Powerful side-by-side visual for the abstracts; verbatim quote to close.
- ~2 min total.
-->


---
layout: default
---

<div class="max-w-6xl mx-auto px-8 pt-2">
  <div class="text-sm uppercase tracking-widest opacity-60 mb-6" style="font-family: 'Montserrat', sans-serif; letter-spacing: 0.15em">
    When the framework changed
  </div>
  <div class="space-y-1">
    <div class="flex items-center gap-6 p-4 rounded-lg" style="background: rgba(148, 163, 184, 0.08)">
      <div class="text-xl font-bold w-40 flex-shrink-0" style="color: #94a3b8; font-family: 'Saira Condensed', sans-serif">
        FEB 2026
      </div>
      <div class="flex-1 text-base" style="font-family: 'Montserrat', sans-serif">
        Anthropic adopts <span class="font-semibold">RSP v3.0</span>, the framework drops the term "AI Safety Levels".
      </div>
    </div>
    <div class="flex items-center gap-6 p-4 rounded-lg" style="background: rgba(148, 163, 184, 0.08)">
      <div class="text-xl font-bold w-40 flex-shrink-0" style="color: #94a3b8; font-family: 'Saira Condensed', sans-serif">
        FEB 2026
      </div>
      <div class="flex-1 text-base" style="font-family: 'Montserrat', sans-serif">
        Release of <span class="font-semibold">Opus 4.6</span>, classified under the previous framework, ASL-3.
      </div>
    </div>
    <div class="flex items-center gap-6 p-4 rounded-lg" style="background: rgba(255, 148, 22, 0.08)">
      <div class="text-xl font-bold w-40 flex-shrink-0" style="color: #ff9416; font-family: 'Saira Condensed', sans-serif">
        APR 2026
      </div>
      <div class="flex-1 text-base" style="font-family: 'Montserrat', sans-serif">
        Anthropic updates to <span class="font-semibold">RSP v3.1</span>.
      </div>
    </div>
    <div class="flex items-center gap-6 p-4 rounded-lg" style="background: rgba(255, 148, 22, 0.08)">
      <div class="text-xl font-bold w-40 flex-shrink-0" style="color: #ff9416; font-family: 'Saira Condensed', sans-serif">
        APR 2026
      </div>
      <div class="flex-1 text-base" style="font-family: 'Montserrat', sans-serif">
        Release of <span class="font-semibold">Mythos</span>, first system card published under the new RSP.
      </div>
    </div>
  </div>
  <blockquote class="mt-8 text-lg italic pl-6" style="font-family: 'Roboto Slab', serif; border-left: 4px solid #ff9416">
    "This determination involves judgment calls."
  </blockquote>
</div>

<!--
VOICE:
"The full timeline.

February 2026: Anthropic adopts version 3.0 of its Responsible Scaling Policy.
That same month, they release Opus 4.6, still classified under the previous framework, as ASL-3.

April 2026: Anthropic updates the framework to version 3.1. That same month,
they release Mythos, the first system card published under the new RSP. And in it, ASL
is no longer used for the thresholds.

And the new RSP itself says something more. The risk determination stops being binary,
'you cross the threshold or you don't', and becomes, Anthropic's verbatim phrase, 'a
judgment call'."

[2-second pause]

NOTES:
- Visual chronology. The temporal coincidence is documented.
- "Judgment calls" is the key phrase of the change.
- ~1.5 minutes.
-->

---
layout: center
---

<div class="max-w-5xl mx-auto px-8">
  <div class="text-sm uppercase tracking-widest opacity-60 mb-6" style="font-family: 'Montserrat', sans-serif; letter-spacing: 0.15em">
    And the new RSP defines "catastrophic risk" like this
  </div>
  <blockquote class="text-xl leading-relaxed pl-6 mb-6" style="font-family: 'Roboto Slab', serif; border-left: 4px solid #ff9416">
    Foreseeable and material risks of large-scale harm from the most advanced models,
    including, but not limited to:
  </blockquote>
  <div class="grid grid-cols-2 gap-6 mt-6">
    <div class="text-center p-6 rounded-lg" style="background: rgba(255, 148, 22, 0.1); border: 1px solid rgba(255, 148, 22, 0.3)">
      <div style="font-size: 5rem; line-height: 1; font-weight: 900; color: #ff9416; font-family: 'Saira Condensed', sans-serif">
        50+
      </div>
      <div class="text-base mt-2 opacity-90" style="font-family: 'Montserrat', sans-serif">
        fatalities in a single incident
      </div>
    </div>
    <div class="text-center p-6 rounded-lg" style="background: rgba(255, 148, 22, 0.1); border: 1px solid rgba(255, 148, 22, 0.3)">
      <div style="font-size: 5rem; line-height: 1; font-weight: 900; color: #ff9416; font-family: 'Saira Condensed', sans-serif">
        $1B+
      </div>
      <div class="text-base mt-2 opacity-90" style="font-family: 'Montserrat', sans-serif">
        in financial damages
      </div>
    </div>
  </div>
  <div class="mt-8 text-sm opacity-50 italic" style="font-family: 'Roboto Slab', serif">
    Below these thresholds, it doesn't fall under the "catastrophic risk" category.
  </div>
</div>

<!--
VOICE:
"And the new RSP defines what 'catastrophic risk' is like this. I quote their definition:
'foreseeable and material risks of large-scale harm from the most advanced models,
including, but not limited to, more than fifty fatalities in a single incident, or one
billion dollars in financial damages'.

Fifty fatalities. Or one billion dollars.

Below those thresholds, it doesn't fall under the catastrophic risk category in their
new framework."

[2-second pause]

NOTES:
- Striking data point. The room sits with: "wait, 49 fatalities isn't officially
  catastrophic?".
- "Including, but not limited to", Anthropic leaves the door open to other criteria.
  Don't editorialize.
- ~1.5 minutes.
-->

---
layout: center
class: text-center
---

<div class="max-w-3xl mx-auto px-8">
  <div class="text-2xl leading-relaxed font-light" style="font-family: 'Roboto Slab', serif">
    We have
    <div class="my-3"><span style="color: #ff9416; font-weight: 700">a qualitatively new model</span>,</div>
    <div class="my-3">an <span style="color: #ff9416; font-weight: 700">alignment paradox</span> confessed by Anthropic,</div>
    <div class="my-3">and a <span style="color: #ff9416; font-weight: 700">measurement framework that changes</span> just in time.</div>
  </div>
  <div class="mt-12 text-2xl font-semibold" style="font-family: 'Montserrat', sans-serif">
    How do they manage the deployment?
  </div>
</div>

<!--
VOICE:
"Let's take stock.

We have a qualitatively new model, capable of finding and exploiting vulnerabilities
at a speed that existing evaluations no longer measure.

We have an alignment paradox confessed by Anthropic itself, the best-aligned model
and at the same time the riskiest one, according to them, due to the pace of capabilities.

And we have a measurement framework that changes just in time, the terminology with
which this kind of risk was classified has been retired, and the thresholds that replace
it are now 'judgment calls'.

Three layers. The next logical question is:

How do they manage the deployment of this model?"

[Direct transition to Beat 4]

NOTES:
- Recap + bridge to Beat 4.
- "Just in time", deliberate phrasing, raises the suspicion without asserting it.
  The room completes it.
- ~1 minute.
-->
