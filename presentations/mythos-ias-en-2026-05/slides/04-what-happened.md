---
layout: section
class: text-center
---

<!--
Beat 4, What happened after the announcement (7 min, lighter).
The room already has the timeline from Beat 0. Detail enters here.
Tone: not schadenfreude. "This happened. We've been describing this pattern for years."
-->

# Layer 3
## What happened after the announcement

<!--
VOICE:
"Third layer. Glasswing is well done, elite partners, rigorous vetting,
cryptographic commitments. The question is: what happened after the announcement?"

NOTES:
- Header. ~10s.
- Tone: investigator, not accusatory.
-->

---
layout: default
---

<div class="max-w-6xl mx-auto px-8 pt-2">
  <div class="text-sm uppercase tracking-widest opacity-60 mb-3" style="font-family: 'Montserrat', sans-serif; letter-spacing: 0.15em">
    Before the April 7 announcement
  </div>
  <div class="text-4xl font-bold mb-8" style="font-family: 'Saira Condensed', sans-serif; color: #ff9416">
    The restricted deployment started leaking
  </div>
  <div class="space-y-5">
    <div class="p-5 rounded-lg" style="background: rgba(255, 148, 22, 0.05); border-left: 4px solid #ff9416">
      <div class="text-base font-bold mb-1" style="color: #ff9416; font-family: 'Saira Condensed', sans-serif; letter-spacing: 0.05em">
        LEAK VIA MERCOR
      </div>
      <div class="text-base leading-relaxed" style="font-family: 'Montserrat', sans-serif">
        Mercor, a training startup that works for Anthropic, suffered an incident.
        Information about Anthropic's internal practices, including
        <span class="font-semibold">the patterns they use to deploy their models</span>,
        was leaked to other groups.
      </div>
    </div>
    <div class="p-5 rounded-lg" style="background: rgba(255, 148, 22, 0.05); border-left: 4px solid #ff9416">
      <div class="text-base font-bold mb-1" style="color: #ff9416; font-family: 'Saira Condensed', sans-serif; letter-spacing: 0.05em">
        FORTUNE'S SCOOP
      </div>
      <div class="text-base leading-relaxed" style="font-family: 'Montserrat', sans-serif">
        Fortune was the first to report Mythos's existence,
        not because Anthropic announced it, but because
        <span class="font-semibold">the model's details appeared in a publicly accessible
        database</span> before launch.
      </div>
    </div>
  </div>
  <div class="mt-8 text-base opacity-70 italic text-center" style="font-family: 'Roboto Slab', serif">
    Mythos existed outside its perimeter before existing officially.
  </div>
</div>

<!--
VOICE:
"Even before the April 7 announcement, there are two public facts worth telling.

One: Mercor. Mercor is a model-training startup that works for Anthropic. At some point,
information about Anthropic's internal practices, specifically the patterns they use to
deploy their models, was leaked to other groups.

Two: Fortune's scoop. Fortune was the first to report Mythos's existence. Not because
Anthropic announced it, Anthropic hadn't announced anything yet, but because the model's
details appeared in a publicly accessible database.

[Pause]

Mythos existed outside its perimeter before it existed officially."

NOTES:
- The two pre-announcement leaks. Documented pattern, not isolated incident.
- Observational tone. Not "what a disaster", just "this happened".
- ~1.5 minutes.
-->

---
layout: default
---

<div class="max-w-6xl mx-auto px-8 pt-2">
  <div class="grid grid-cols-2 gap-8 items-center mb-6">
    <div>
      <div class="text-sm uppercase tracking-widest opacity-60 mb-2" style="font-family: 'Montserrat', sans-serif; letter-spacing: 0.15em">
        April 7, 2026
      </div>
      <div class="text-3xl font-bold" style="font-family: 'Saira Condensed', sans-serif; color: #ff9416">
        Announcement day
      </div>
    </div>
    <div class="text-right">
      <div class="text-sm uppercase tracking-widest opacity-60 mb-2" style="font-family: 'Montserrat', sans-serif; letter-spacing: 0.15em">
        April 7, 2026
      </div>
      <div class="text-3xl font-bold" style="font-family: 'Saira Condensed', sans-serif; color: #ff9416">
        That same day
      </div>
    </div>
  </div>

  <div class="space-y-4">
    <div class="flex items-baseline gap-4 text-base" style="font-family: 'Montserrat', sans-serif">
      <div class="font-bold flex-shrink-0 w-6" style="color: #ff9416">·</div>
      <div>
        An unauthorized group, in a private Discord channel dedicated to hunting unreleased AI models,
        accesses Mythos.
      </div>
    </div>
    <div class="flex items-baseline gap-4 text-base" style="font-family: 'Montserrat', sans-serif">
      <div class="font-bold flex-shrink-0 w-6" style="color: #ff9416">·</div>
      <div>
        How? <span class="font-semibold">Not a technical exploit, OSINT.</span>
        They made an "educated guess" about where Anthropic was hosting the model,
        based on the deployment patterns leaked via Mercor.
      </div>
    </div>
    <div class="flex items-baseline gap-4 text-base" style="font-family: 'Montserrat', sans-serif">
      <div class="font-bold flex-shrink-0 w-6" style="color: #ff9416">·</div>
      <div>
        One member of the group is an <span class="font-semibold">external Anthropic contractor</span>.
      </div>
    </div>
    <div class="flex items-baseline gap-4 text-base" style="font-family: 'Montserrat', sans-serif">
      <div class="font-bold flex-shrink-0 w-6" style="color: #ff9416">·</div>
      <div>
        They have been using the model continuously since day one.
        To avoid detection, they focus on innocuous tasks, building simple websites.
      </div>
    </div>
  </div>

  <div class="mt-8 p-5 rounded-lg" style="background: rgba(148, 163, 184, 0.08)">
    <div class="text-sm uppercase tracking-widest opacity-60 mb-2" style="font-family: 'Montserrat', sans-serif; letter-spacing: 0.15em">
      Anthropic's response
    </div>
    <blockquote class="text-base italic" style="font-family: 'Roboto Slab', serif">
      "We're investigating a report claiming unauthorized access to Claude Mythos Preview
      through one of our third-party vendor environments."
    </blockquote>
  </div>
  <div class="mt-3 text-xs opacity-50" style="font-family: 'Montserrat', sans-serif">
    Bloomberg, TechCrunch, Fortune, April 21-23, 2026
  </div>
</div>

<!--
VOICE:
"And then comes April 7, announcement day. That same day, not days later, not weeks
later, an unauthorized group obtained access to the model.

How? Not a technical exploit, what's called OSINT, open-source intelligence. They made
an educated guess about where Anthropic was hosting the model. Based on the deployment
patterns leaked from Mercor.

[Pause]

Three more details. One: the group operates from a Discord channel dedicated to hunting
unreleased AI models. Two: one of the group's members is an external Anthropic
contractor. Three: they have been using the model continuously since then. To avoid
detection, they do innocuous tasks, simple websites.

Remember: this is the model too dangerous to release generally.
And a Discord group is using it to build web pages."

[2-second pause]

"Anthropic's official response, verbatim quote: 'We're investigating a report
claiming unauthorized access to Claude Mythos Preview through one of our third-party
vendor environments'."

NOTES:
- "OSINT" can be jargon, anchor with "open-source intelligence" or "educated guess".
- The irony of "model too dangerous, used for simple websites" lands hard.
- Anthropic statement: lukewarm tone, "investigating". Reported by Bloomberg.
- ~2 minutes.
-->

---
layout: center
---

<div class="max-w-5xl mx-auto px-8">
  <div class="text-sm uppercase tracking-widest opacity-60 mb-6" style="font-family: 'Montserrat', sans-serif; letter-spacing: 0.15em">
    Independent voice · CISO with 25 years in the industry
  </div>
  <blockquote class="text-2xl leading-relaxed pl-6 mb-6" style="font-family: 'Roboto Slab', serif; border-left: 4px solid #ff9416">
    <div class="font-bold mb-3" style="color: #ff9416">It was bound to happen.</div>
    If some group, some random Discord online forum, got access to it,
    it's already been breached by China.
    <div class="mt-4">
      There's a <span style="color: #ff9416; font-weight: 700">real compression
      of timelines</span> for defenders.
    </div>
  </blockquote>
  <div class="text-sm opacity-70 pl-6" style="font-family: 'Montserrat', sans-serif">
    <span class="font-semibold">David Lindner</span>, CISO at Contrast Security,
    25 years in cybersecurity.
    <span class="opacity-60 italic"> In an interview with Fortune, April 23, 2026.</span>
  </div>
</div>

<!--
VOICE:
"This isn't me saying it, this is a CISO with twenty-five years in the industry.
David Lindner, Chief Information Security Officer at Contrast Security, in an
interview with Fortune on April twenty-third.

Quote:

'It was bound to happen. If some group, some random Discord online forum, got access
to it, it's already been breached by China. There's a real compression of timelines
for defenders.'"

[2-second pause]

"Lindner is conceding two things. One: the Discord group is probably the tip of the
iceberg. Two: the temporal asymmetry, the time defenders have to react, is
shrinking, in his words."

NOTES:
- Independent CISO voice shields against the "PauseAI activism" charge.
- 25 years of experience is authority, the room respects it.
- "Conceding" is the key word: Lindner validates the structural-asymmetry frame
  without knowing he's validating it.
- ~1.5 minutes.
-->

---
layout: default
---

<div class="max-w-6xl mx-auto px-8 pt-2">
  <div class="text-sm uppercase tracking-widest opacity-60 mb-2" style="font-family: 'Montserrat', sans-serif; letter-spacing: 0.15em">
    But there's another side to the story
  </div>
  <div class="text-3xl font-bold mb-6" style="font-family: 'Saira Condensed', sans-serif; color: #ff9416">
    Mozilla won
  </div>

  <div class="grid grid-cols-2 gap-6">
    <div class="p-5 rounded-lg" style="background: rgba(74, 222, 128, 0.06); border-left: 4px solid #4ade80">
      <div class="text-sm font-bold mb-2" style="color: #4ade80; font-family: 'Saira Condensed', sans-serif; letter-spacing: 0.05em">
        BOBBY HOLLEY · CTO OF FIREFOX
      </div>
      <blockquote class="text-base italic leading-relaxed mb-3" style="font-family: 'Roboto Slab', serif">
        Defenders finally have a chance to win, decisively.
      </blockquote>
      <div class="text-sm opacity-90" style="font-family: 'Montserrat', sans-serif">
        And he's right about something: Mozilla, with access to Mythos,
        <span class="font-semibold">patched 271 vulnerabilities</span>
        before Firefox 150 shipped.
      </div>
    </div>
    <div class="p-5 rounded-lg" style="background: rgba(255, 148, 22, 0.06); border-left: 4px solid #ff9416">
      <div class="text-sm font-bold mb-2" style="color: #ff9416; font-family: 'Saira Condensed', sans-serif; letter-spacing: 0.05em">
        RAFFI KRIKORIAN · CTO OF MOZILLA
      </div>
      <blockquote class="text-base italic leading-relaxed mb-3" style="font-family: 'Roboto Slab', serif">
        The programmer who gave twenty years of his life to maintain
        open-source code that runs inside products used by billions
        of people doesn't have access to Mythos.
        <span class="font-semibold not-italic" style="color: #ff9416">He should.</span>
      </blockquote>
      <div class="text-sm opacity-90" style="font-family: 'Montserrat', sans-serif">
        In his New York Times op-ed.
      </div>
    </div>
  </div>

  <div class="mt-8 text-center text-base font-semibold max-w-3xl mx-auto" style="font-family: 'Roboto Slab', serif">
    Mozilla won, because Mozilla had access.
    <span style="color: #ff9416">What happens to those who don't?</span>
  </div>
</div>

<!--
VOICE:
"But, and this is important, there's another side to the story. Mozilla won.

Bobby Holley, CTO of Firefox, said after the Firefox 150 patch, quote: 'Defenders finally
have a chance to win, decisively.' And he's right about something: Mozilla, with access
to Mythos, patched two hundred seventy-one real vulnerabilities before Firefox 150
shipped. That's winning.

[Pause]

But Mozilla itself, Raffi Krikorian, CTO of the Mozilla Foundation, in his New York
Times op-ed, added an important nuance. Quote:

'The programmer who gave twenty years of his life to maintain open-source code that
runs inside products used by billions of people doesn't have access to Mythos. He
should.'"

[2-second pause]

"Mozilla won because Mozilla had access. The question then is:
what happens to those who don't?"

NOTES:
- Honest counter-argument. Holley is NOT the enemy. He's a competent CTO who made
  the best use of access.
- Green for Holley (optimistic defender), orange for Krikorian (the qualifier).
- Krikorian is a Mozilla voice WITHIN the defender camp, not PauseAI. Reinforces the
  structural frame.
- The closing question of the slide is a bridge to Beat 5 without naming it.
- ~1.5 minutes.
-->

---
layout: center
---

<div class="max-w-5xl mx-auto px-8">
  <div class="text-sm uppercase tracking-widest opacity-60 mb-6" style="font-family: 'Montserrat', sans-serif; letter-spacing: 0.15em">
    The counter-argument
  </div>
  <div class="grid grid-cols-2 gap-8 items-center">
    <div>
      <div class="text-base font-bold mb-3" style="color: #94a3b8; font-family: 'Saira Condensed', sans-serif; letter-spacing: 0.05em">
        SAM ALTMAN · CEO OF OPENAI
      </div>
      <blockquote class="text-2xl italic leading-relaxed pl-6" style="font-family: 'Roboto Slab', serif; border-left: 4px solid #94a3b8">
        Fear-based marketing.
      </blockquote>
      <div class="text-xs opacity-50 mt-2 pl-6" style="font-family: 'Montserrat', sans-serif">
        "Fear-based marketing." Referring to Anthropic's communication around Mythos.
      </div>
    </div>
    <div>
      <div v-click>
        <div class="text-base font-bold mb-3" style="color: #ff9416; font-family: 'Saira Condensed', sans-serif; letter-spacing: 0.05em">
          THE HONEST RESPONSE
        </div>
        <div class="text-base leading-relaxed" style="font-family: 'Montserrat', sans-serif">
          It's a legitimate critique of Anthropic's
          <span class="font-semibold">communication</span>.
          <div class="mt-4">
            But the subsequent facts don't depend
            on narrative intent:
          </div>
          <div class="mt-3 pl-4 border-l-2 space-y-1 text-sm" style="border-color: #ff9416">
            <div>· Mozilla patched 271 real vulnerabilities.</div>
            <div>· The day-1 leak happened.</div>
            <div>· The framework changed.</div>
          </div>
        </div>
      </div>
      <div v-click class="mt-3 text-base font-semibold" style="font-family: 'Montserrat', sans-serif">
        Those are facts. The intent of the communication is secondary.
      </div>
    </div>
  </div>
</div>

<!--
VOICE (with two clicks):

[Visible from the start: Altman on the left]

"And there's one counter-argument left, this one from a competitor. Sam Altman, CEO of
OpenAI, called Anthropic's Mythos communication, quote, 'fear-based marketing'."

[2-second pause. Let Altman's phrase land]

[CLICK 1, the entire honest response appears on the right]

"And the honest answer, for an AI safety room that values rigor: yes, it's a legitimate
critique of Anthropic's communication. But the subsequent facts don't depend on the
narrative intent. Mozilla patched two hundred seventy-one real vulnerabilities, fact.
The day-1 leak happened, fact. The classification framework changed, fact."

[CLICK 2, closing principle]

"Those are facts. The intent of the communication is secondary."

NOTES:
- Two clicks: setup (Altman) → full response with the three facts → principle.
- Engage Altman directly. The AI safety room may have heard it; better to address it.
- "Facts / intent" is the key analytical distinction.
- Tone: not defensive, not aggressive. "This is what it is."
- It's the first explicit counter-argument we respond to. The previous slide (Mozilla)
  was a qualifier, not a counter-argument.
- ~1 minute.
-->

---
layout: center
class: text-center
---

<div class="max-w-3xl mx-auto px-8">
  <div class="text-3xl leading-relaxed font-light" style="font-family: 'Roboto Slab', serif">
    The restricted deployment model
    <div class="my-4 font-semibold" style="color: #ff9416">did not contain</div>
    <div class="opacity-90">what it claimed to contain.</div>
  </div>
  <div class="mt-12 text-xl opacity-80" style="font-family: 'Montserrat', sans-serif">
    So far, this is the story of a lab and a model.
  </div>
  <div class="mt-4 text-2xl font-semibold" style="font-family: 'Montserrat', sans-serif">
    What comes next has to do with you.
  </div>
</div>

<!--
VOICE:
"Let's recap the three layers.

Layer 1, Anthropic itself confesses an alignment paradox: the best-aligned model and
at the same time the riskiest, due to the pace of capabilities.

Layer 2, the framework that classified this kind of risk has been retired,
just in time for the launch.

Layer 3, the restricted deployment did not contain what it claimed to contain. It
leaked before the announcement, leaked the day of the announcement, and even so
Mozilla won because it had access.

[Pause]

So far, this is the story of a lab and a model. What comes next has to do with you."

[Direct transition to Beat 5]

NOTES:
- Land + recap of the 3 layers + bridge to Beat 5 (the asymmetries).
- "What has to do with you", pivot to the personal/concrete mode of Beat 5.
- ~1 minute.
-->
