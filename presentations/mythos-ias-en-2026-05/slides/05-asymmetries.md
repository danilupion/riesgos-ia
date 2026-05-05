---
layout: section
class: text-center
---

<!--
Beat 5, The asymmetries this produces (12 min). The longest one.
Three sub-beats: your router · your bank · your market.
This is where everything lands. The room must feel that the asymmetry is in their pocket.
NOT operational, educational. Pattern and gap, not recipes.
-->

# The asymmetries
## Three maps, one on top of the other

<div class="text-base opacity-70 mt-8" style="font-family: 'Roboto Slab', serif; font-style: italic">
  Your home. Your bank. Your market.
</div>

<!--
VOICE:
"So far, this is the story of a lab and a model. The next twelve minutes are something
different. They are about three asymmetries this produces.

I'll lay out three maps, one on top of the other. The first is your home.
The second, your bank. The third, your job market.

None of the three has the typical Spanish citizen on the right side."

NOTES:
- Header slide. Pivot to the personal mode.
- ~30 seconds.
-->

---
layout: default
---

<!-- ===== 5a, YOUR ROUTER ===== -->

<div class="max-w-6xl mx-auto px-8 pt-2">
  <div class="text-sm uppercase tracking-widest opacity-60 mb-2" style="font-family: 'Montserrat', sans-serif; letter-spacing: 0.15em">
    Map 1 · Your router
  </div>
  <div class="grid grid-cols-2 gap-8 mt-8">
    <div>
      <div class="text-base font-bold mb-3" style="color: #ff9416; font-family: 'Saira Condensed', sans-serif; letter-spacing: 0.05em">
        WHO IS IN GLASSWING
      </div>
      <div class="space-y-1 text-sm" style="font-family: 'Montserrat', sans-serif">
        <div class="opacity-90">Amazon Web Services</div>
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
        <div class="opacity-50 italic mt-2">+ ~40 additional organizations not listed</div>
      </div>
    </div>
    <div>
      <div class="text-base font-bold mb-3" style="color: #94a3b8; font-family: 'Saira Condensed', sans-serif; letter-spacing: 0.05em">
        WHO MAKES YOUR HOME ROUTER
      </div>
      <div class="space-y-2 text-sm" style="font-family: 'Montserrat', sans-serif">
        <div><span class="font-semibold">Movistar / O2</span> <span class="opacity-70">, MitraStar · Askey</span></div>
        <div><span class="font-semibold">Vodafone</span> <span class="opacity-70">, Sercomm · ZTE</span></div>
        <div><span class="font-semibold">Orange</span> <span class="opacity-70">, Sagemcom · Arcadyan · ZTE</span></div>
        <div><span class="font-semibold">Digi</span> <span class="opacity-70">, ZTE</span></div>
        <div><span class="font-semibold">MásMóvil</span> <span class="opacity-70">, ZTE</span></div>
      </div>
      <div class="mt-6 text-base font-bold" style="color: #ff9416; font-family: 'Saira Condensed', sans-serif">
        Intersection with Glasswing: none.
      </div>
    </div>
  </div>
</div>

<!--
VOICE:
"Map one. Your router.

On the left, the twelve launch partners of Glasswing. Plus about forty additional
organizations not publicly listed.

On the right, the manufacturers of the routers that the main Spanish ISPs install in
homes. Movistar and O2: MitraStar and Askey. Vodafone: Sercomm and ZTE. Orange:
Sagemcom, Arcadyan, ZTE. Digi and MásMóvil: ZTE.

[Pause]

Intersection between the two sides: none. No manufacturer of the router you have at
home appears on the Glasswing partner list."

NOTES:
- Verified data (C57). If anyone asks, sources in bandaancha.
- "Intersection", a technical word but accessible. Makes the point mathematically.
- ~1.5 minutes.
-->

---
layout: center
class: text-center
---

<div class="max-w-5xl mx-auto px-8">
  <div class="text-sm uppercase tracking-widest opacity-60 mb-12" style="font-family: 'Montserrat', sans-serif; letter-spacing: 0.15em">
    The structural pattern
  </div>
  <div class="grid grid-cols-3 gap-4 items-center">
    <div class="p-6 rounded-lg" style="background: rgba(255, 148, 22, 0.08); border: 1px solid rgba(255, 148, 22, 0.3)">
      <div class="text-base font-bold mb-2" style="color: #ff9416; font-family: 'Saira Condensed', sans-serif">STEP 1</div>
      <div class="text-sm leading-relaxed" style="font-family: 'Montserrat', sans-serif">
        A Mythos-class model finds
        a flaw in the firmware
        of a home router.
      </div>
    </div>
    <div v-click="1" class="text-center text-3xl" style="color: #ff9416">→</div>
    <div v-click="1" class="p-6 rounded-lg" style="background: rgba(255, 148, 22, 0.08); border: 1px solid rgba(255, 148, 22, 0.3)">
      <div class="text-base font-bold mb-2" style="color: #ff9416; font-family: 'Saira Condensed', sans-serif">STEP 2</div>
      <div class="text-sm leading-relaxed" style="font-family: 'Montserrat', sans-serif">
        Attacker exploits.
        The router gives them control
        of the local network.
      </div>
    </div>
  </div>
  <div v-click="2" class="mt-4 text-3xl text-center" style="color: #ff9416">↓</div>
  <div v-click="2" class="mt-4">
    <div class="p-6 rounded-lg max-w-2xl mx-auto" style="background: rgba(255, 148, 22, 0.08); border: 1px solid rgba(255, 148, 22, 0.3)">
      <div class="text-base font-bold mb-2" style="color: #ff9416; font-family: 'Saira Condensed', sans-serif">STEP 3</div>
      <div class="text-sm leading-relaxed" style="font-family: 'Montserrat', sans-serif">
        From the local network: traffic redirection, credential capture,
        update poisoning, vector to the computers and phones in the home.
      </div>
    </div>
  </div>
  <div v-click="3" class="mt-10 text-base opacity-70 italic max-w-3xl mx-auto" style="font-family: 'Roboto Slab', serif">
    The manufacturer is NOT in Glasswing. It received no prior defensive analysis.
  </div>
</div>

<!--
VOICE (with click reveal in three steps):

[STEP 1 visible from the start]

"The pattern is simple, and deliberately abstract, I don't want to give you the recipe.

Step one: a Mythos-class model finds a flaw in the router firmware. Something that is
exactly what Mythos did with FreeBSD-NFS."

[CLICK 1, → arrow + STEP 2 appear]

"Step two: an attacker with access to that capability exploits it. Takes control of
the router."

[CLICK 2, ↓ arrow + STEP 3 appear]

"Step three: from the router, they control the local network. And from there, traffic
redirection, credential capture, update poisoning, they have a vector to the computers
and phones on that network. Your home."

[Pause, then CLICK 3, the closing line appears]

"The manufacturer of your router is not in Glasswing. It received no prior defensive
analysis. What happens, happens."

NOTES:
- Click reveal in 3 steps: STEP 1 visible, click 1 = STEP 2 + arrow,
  click 2 = STEP 3 + arrow, click 3 = punch line about Glasswing.
- "Deliberately abstract", make the pedagogical discipline explicit.
- Each click accompanies a concrete sentence. The room processes each step.
- ~1 minute.
-->


---
layout: default
---

<div class="max-w-5xl mx-auto px-8 pt-4">
  <div class="text-sm uppercase tracking-widest opacity-60 mb-3" style="font-family: 'Montserrat', sans-serif; letter-spacing: 0.15em">
    Three operational details for the typical Spanish user
  </div>
  <div class="space-y-4 mt-6">
    <div class="p-5 rounded-lg" style="background: rgba(255, 148, 22, 0.05); border-left: 4px solid #ff9416">
      <div class="text-base font-bold mb-1" style="color: #ff9416; font-family: 'Saira Condensed', sans-serif">You don't choose the router</div>
      <div class="text-base opacity-90" style="font-family: 'Montserrat', sans-serif">
        The ISP gives it to you. Most users don't even know who makes it.
      </div>
    </div>
    <div class="p-5 rounded-lg" style="background: rgba(255, 148, 22, 0.05); border-left: 4px solid #ff9416">
      <div class="text-base font-bold mb-1" style="color: #ff9416; font-family: 'Saira Condensed', sans-serif">Silent EOL</div>
      <div class="text-base opacity-90" style="font-family: 'Montserrat', sans-serif">
        When a device stops receiving manufacturer support, it's still deployed in thousands of homes.
        Nobody warns you.
      </div>
    </div>
    <div class="p-5 rounded-lg" style="background: rgba(255, 148, 22, 0.05); border-left: 4px solid #ff9416">
      <div class="text-base font-bold mb-1" style="color: #ff9416; font-family: 'Saira Condensed', sans-serif">The ISP controls the updates</div>
      <div class="text-base opacity-90" style="font-family: 'Montserrat', sans-serif">
        When there's a patch, if there is one, the ISP decides when to deploy it. Not you.
      </div>
    </div>
  </div>
  <div class="mt-8 text-base font-semibold" style="font-family: 'Roboto Slab', serif">
    AWS, Apple, Google, Microsoft protect their services with Mythos.
    <span style="color: #ff9416">Your home router doesn't benefit from any of those analyses.</span>
  </div>
</div>

<!--
VOICE:
"And to wrap up this first map, three operational realities for the typical Spanish
user worth keeping in mind.

One: you don't choose the router. The ISP gives it to you. Most people don't even know
who makes it.

Two: end-of-life is silent. When a device stops receiving manufacturer support, it's
still deployed in thousands of homes. Nobody warns you.

Three: the ISP controls the updates. When there's a patch, if there is one, the ISP
decides when to deploy it. Not you.

[Pause]

AWS, Apple, Google, Microsoft are protecting their services with Mythos, patching
vulnerabilities before attackers find them. Your home router doesn't benefit from any
of those analyses."

NOTES:
- Reflection. The room sits with "wait, my router..."
- ~1 minute.
- Closes Map 1.
-->

---
layout: default
---

<!-- ===== 5b, YOUR BANK ===== -->

<div class="max-w-6xl mx-auto px-8 pt-2">
  <div class="text-sm uppercase tracking-widest opacity-60 mb-2" style="font-family: 'Montserrat', sans-serif; letter-spacing: 0.15em">
    Map 2 · Your bank
  </div>
  <div class="text-3xl font-bold mb-6" style="font-family: 'Saira Condensed', sans-serif; color: #ff9416">
    On one side of the Atlantic
  </div>
  <div class="grid grid-cols-2 gap-6">
    <div class="p-5 rounded-lg" style="background: rgba(74, 222, 128, 0.06); border-left: 4px solid #4ade80">
      <div class="text-base font-bold mb-3" style="color: #4ade80; font-family: 'Saira Condensed', sans-serif; letter-spacing: 0.05em">
        UNITED STATES · ACTIVE ACCESS
      </div>
      <div class="space-y-2 text-base" style="font-family: 'Montserrat', sans-serif">
        <div>· <span class="font-semibold">JPMorgan Chase</span>, Glasswing launch partner.</div>
        <div>· <span class="font-semibold">Goldman Sachs, Citigroup, Bank of America, Morgan Stanley</span>, testing Mythos.</div>
        <div>· The <span class="font-semibold">Treasury Secretary</span> summoned bankers in April to push defensive use.</div>
      </div>
    </div>
    <div class="p-5 rounded-lg" style="background: rgba(255, 148, 22, 0.06); border-left: 4px solid #ff9416">
      <div class="text-base font-bold mb-3" style="color: #ff9416; font-family: 'Saira Condensed', sans-serif; letter-spacing: 0.05em">
        EUROZONE · NO ACCESS
      </div>
      <div class="space-y-2 text-base" style="font-family: 'Montserrat', sans-serif">
        <div>· The <span class="font-semibold">ECB summoned, two weeks ago</span>, the risk officers of the significant banks, including the <span class="font-semibold">four Spanish ones</span>: Santander, BBVA, CaixaBank, Sabadell.</div>
        <div>· Asked for <span class="font-semibold">contingency plans</span>.</div>
        <div>· European banks <span class="font-semibold">have no access</span>. Lagarde has called for it. UK gets it "imminently".</div>
        <div>· The <span class="font-semibold">Bank of Spain</span> already asked institutions for adoption plans.</div>
      </div>
    </div>
  </div>
  <div class="mt-6 text-sm opacity-60 italic text-center" style="font-family: 'Roboto Slab', serif">
    Sources: Glasswing announcement · Bloomberg · El País 04-29-2026
  </div>
</div>

<!--
VOICE:
"Map two. Your bank. On one side of the Atlantic.

US side, active access: JPMorgan Chase is a Glasswing launch partner. Goldman Sachs,
Citigroup, Bank of America and Morgan Stanley are testing Mythos. And the Treasury
Secretary summoned US bankers in April to push defensive use.

[Pause]

European side, no access: the European Central Bank summoned, two weeks ago, the risk
officers of the eurozone's significant banks, and here are the four Spanish ones:
Santander, BBVA, CaixaBank and Sabadell. What did it summon them for? To ask for
contingency plans against Mythos.

But European banks don't have access to the model. Lagarde has called for it. Anthropic
says it will open access to UK companies imminently, no date for the eurozone. The Bank
of Spain has already asked Spanish institutions for technology adoption plans.

[Pause]

Three weeks during which the US side uses the tool defensively. Three weeks the European
side does not have."

NOTES:
- Green for US (access, "temporary winners"), orange for EU/ES (no access).
- "Two weeks ago" refers to the ECB summoning, exact date is not public.
- ~2 minutes.
-->

---
layout: center
---

<div class="max-w-6xl mx-auto px-8">
  <div class="text-sm uppercase tracking-widest opacity-60 mb-6 text-center" style="font-family: 'Montserrat', sans-serif; letter-spacing: 0.15em">
    And the public European assessment of all this
  </div>
  <div class="grid grid-cols-2 gap-8 items-center">
    <div>
      <img src="/fotos/lagarde.jpg" class="w-full h-auto rounded-lg shadow-2xl border border-white/10" />
      <div class="mt-2 text-xs opacity-40 text-right" style="font-family: 'Montserrat', sans-serif">
        © MEDEF · CC BY-SA 2.0
      </div>
    </div>
    <div>
      <blockquote class="text-xl leading-relaxed pl-6" style="font-family: 'Roboto Slab', serif; border-left: 4px solid #ff9416">
        It's a good example of
        <span style="color: #ff9416; font-weight: 700">a responsible company</span>
        suddenly thinking: "This could be really good, but if it falls into the wrong hands, it could be really bad."
      </blockquote>
      <div class="mt-4 text-sm opacity-70 pl-6" style="font-family: 'Montserrat', sans-serif">
        Christine Lagarde, ECB, April 29, 2026
      </div>
      <div class="mt-8 pl-6 text-base font-semibold leading-relaxed" style="font-family: 'Roboto Slab', serif">
        The opening question.
      </div>
      <div class="pl-6 text-base opacity-90" style="font-family: 'Roboto Slab', serif; font-style: italic">
        Now with three layers of data on the table.
      </div>
    </div>
  </div>
</div>

<!--
VOICE:
"And here, at the end of the second map, we recover the quote we opened this talk
with.

[Slide reading, slow]

'It's a good example of a responsible company suddenly thinking: this could be really
good, but if it falls into the wrong hands, it could be really bad.'

Christine Lagarde. April twenty-ninth.

[3-second pause]

Now you have the three layers of data the President of the ECB had on the table when
she said that. The alignment paradox confessed by Anthropic. The framework retired
just in time. The day-1 leak.

[Pause]

A responsible company? The room decides."

NOTES:
- Callback to Beat 0. Closure of the emotional arc started at the beginning.
- Lagarde photo reappears, the room remembers it.
- "The room decides", explicit that we're NOT telling them what to think.
- This is probably the most loaded slide of the talk.
- ~2 minutes.
-->

---
layout: default
---

<div class="max-w-5xl mx-auto px-8 pt-4">
  <div class="text-sm uppercase tracking-widest opacity-60 mb-2" style="font-family: 'Montserrat', sans-serif; letter-spacing: 0.15em">
    And between your account and the attacker
  </div>
  <div class="text-3xl font-bold mb-6" style="font-family: 'Saira Condensed', sans-serif; color: #ff9416">
    There's not just your bank
  </div>
  <div class="space-y-4 text-base" style="font-family: 'Montserrat', sans-serif">
    <div>
      Under PSD2, the European regulation, two-factor authentication has been mandatory since 2019.
      It combines two factors from three categories:
      <span class="opacity-80">something you know (PIN, password), something you have (phone, SMS, push), something you are (fingerprint, face).</span>
    </div>
    <div class="p-5 rounded-lg" style="background: rgba(255, 148, 22, 0.06); border-left: 4px solid #ff9416">
      <div class="text-sm font-semibold mb-2" style="color: #ff9416; font-family: 'Saira Condensed', sans-serif; letter-spacing: 0.05em">
        THE STRUCTURAL POINT
      </div>
      <div class="text-base leading-relaxed">
        Any 2FA depends on the
        <span class="font-semibold">integrity of the device</span>
        where you receive the second factor.
      </div>
      <div class="mt-3 text-base leading-relaxed opacity-90">
        If the attacker controls the device
        <span class="opacity-70">(router → network → device, Map 1)</span>,
        the whole chain falls. Doesn't matter if the bank uses SMS, push or biometrics.
      </div>
    </div>
    <div class="mt-4 text-base font-semibold" style="font-family: 'Roboto Slab', serif">
      Your bank does its part well. But its part is not the only one.
      <span style="color: #ff9416">Mythos operates over the whole chain.</span>
    </div>
  </div>
</div>

<!--
VOICE:
"A technical note before closing this map. Between your bank account and a possible
attacker there's not just your bank.

Under the European PSD2 regulation, two-factor authentication has been mandatory since
2019. It combines two factors from three categories: something you know, something you
have, something you are. PIN, phone, fingerprint.

[Pause]

And here comes the structural point. Any two-factor authentication, whether SMS, push to
an app, or biometrics, depends on the integrity of the device where you receive the
second factor.

If the attacker controls the device, and here we go back to the first map, router,
network, device, the whole chain falls. Doesn't matter if your bank uses SMS, push or
biometrics. The bank's part evaporates when the device is compromised.

[Pause]

Your bank does its part well. But its part is not the only one. And Mythos operates
over the whole chain."

NOTES:
- Technical close of Map 2.
- Structural argument without naming specific banks. Validity doesn't depend on which
  method each institution uses: the point is that ALL 2FA depends on the device.
- Explicit connection with Map 1: the chain composes, the device is the shared link.
- ~1.5 minutes.
-->

---
layout: section
class: text-center
---

<!-- ===== 5c, YOUR MARKET ===== -->

<div class="max-w-4xl mx-auto px-8">
  <div class="text-sm uppercase tracking-widest opacity-60 mb-4" style="font-family: 'Montserrat', sans-serif; letter-spacing: 0.15em">
    Map 3 · Your market
  </div>
  <div class="text-5xl font-bold leading-tight" style="font-family: 'Saira Condensed', sans-serif; color: #ff9416">
    And here we leave<br/>cybersecurity.
  </div>
</div>

<!--
VOICE:
"Map three. And here we leave cybersecurity."

[Pause]

NOTES:
- Sub-beat 5c header. ~10 seconds.
- "We leave cybersecurity", conceptual pivot. The room pays attention.
-->

---
layout: center
---

<div class="max-w-5xl mx-auto px-8">
  <div class="text-sm uppercase tracking-widest opacity-60 mb-6" style="font-family: 'Montserrat', sans-serif; letter-spacing: 0.15em">
    But first, read this, from the official Glasswing page
  </div>
  <blockquote class="text-2xl leading-relaxed pl-6" style="font-family: 'Roboto Slab', serif; border-left: 4px solid #ff9416">
    Claude Mythos Preview is a
    <span style="color: #ff9416; font-weight: 700">general-purpose frontier model</span>
    from Anthropic, our most capable yet for
    <span style="color: #ff9416; font-weight: 700">coding and agentic tasks</span>.
  </blockquote>
  <div class="mt-6 text-xs opacity-50 pl-6 italic" style="font-family: 'Montserrat', sans-serif">
    "Claude Mythos Preview is a general-purpose frontier model from Anthropic, our most capable yet for coding and agentic tasks."
  </div>
  <div class="mt-10 text-xl font-semibold leading-relaxed text-center" style="font-family: 'Roboto Slab', serif">
    Mythos is not just a cyber tool.
    <div class="mt-2" style="color: #ff9416">It's the most capable Claude for everything.</div>
  </div>
</div>

<!--
VOICE:
"On the official Project Glasswing page, Anthropic describes Mythos like this. I quote
verbatim:

'Claude Mythos Preview is a general-purpose frontier model from Anthropic, our most
capable yet for coding and agentic tasks.'

[2-second pause]

General-purpose frontier model. The most capable they've built. For coding and agents,
which is practically what every professional task today is when you scratch the surface.

Mythos is not just a cyber tool. It's the most capable Claude that exists. For
anything a Claude does well."

NOTES:
- Conceptual pivot. The room processes: "wait, it's not just cyber...?"
- ~1 minute.
-->

---
layout: center
---

<div class="max-w-5xl mx-auto px-8">
  <div class="text-sm uppercase tracking-widest opacity-60 mb-6" style="font-family: 'Montserrat', sans-serif; letter-spacing: 0.15em">
    And the market effect, according to a CISO in El País
  </div>
  <blockquote class="text-xl leading-relaxed pl-6 mb-6" style="font-family: 'Roboto Slab', serif; border-left: 4px solid #ff9416">
    Large companies are going to be forced to ramp up their investments against cybercrime,
    with the need to act much faster than before.
    <div class="mt-4">
      This is going to make
      <span style="color: #ff9416; font-weight: 700">winners of the largest entities
      with the most investment capacity</span>
     ,
      <span style="color: #ff9416; font-weight: 700">while making mid-sized ones suffer</span>.
    </div>
  </blockquote>
  <div class="text-sm opacity-70 pl-6" style="font-family: 'Montserrat', sans-serif">
    <span class="font-semibold">Miguel Ángel Thomas</span>, CISO at NTT DATA.
    <span class="opacity-60 italic"> In an interview with El País, April 29, 2026.</span>
  </div>
</div>

<!--
VOICE:
"And this isn't me saying it. This is Miguel Ángel Thomas, head of cybersecurity at
NTT DATA, in the El País interview from April twenty-ninth.

I quote:

'Large companies are going to be forced to ramp up their investments against cybercrime,
with the need to act much faster than before. This is going to make winners of the
largest entities with the most investment capacity, while making mid-sized ones suffer.'

[Pause]

Spanish technical voice. Concrete prediction. The competitive asymmetry isn't a PauseAI
claim, it's what a CISO tells a reference newspaper."

NOTES:
- Independent Spanish voice. Shields against the activism charge.
- ~1 minute.
-->

---
layout: center
class: text-center
---

<div class="max-w-3xl mx-auto px-8">
  <div class="text-sm uppercase tracking-widest opacity-60 mb-12" style="font-family: 'Montserrat', sans-serif; letter-spacing: 0.15em">
    The open question
  </div>
  <div class="space-y-5 text-2xl leading-relaxed" style="font-family: 'Roboto Slab', serif">
    <div>Which Spanish company works with that tool?</div>
    <div>Which hospital?</div>
    <div>Which university?</div>
    <div>Which media outlet?</div>
    <div>Which government office?</div>
  </div>
  <div class="mt-12 text-lg opacity-70 italic" style="font-family: 'Roboto Slab', serif">
    The barrier is not the price.<br/>
    Public pricing exists:&nbsp;<span class="opacity-90">$25 per million input tokens.</span>
  </div>
  <div class="mt-4 text-xl font-semibold" style="font-family: 'Roboto Slab', serif; color: #ff9416">
    The barrier is the list.
  </div>
</div>

<!--
VOICE:
"And here are the open questions, the ones that close this map.

Which Spanish company works with that tool?

[Pause]

Which hospital?

[Pause]

Which university?

[Pause]

Which media outlet?

[Pause]

Which government office?

[3-second pause]

And one important data point: the barrier to access Mythos is not the price. Anthropic
publishes the pricing, twenty-five dollars per million input tokens. There is a tariff.

The barrier is the list. A list decided in California, with no documented European
participation. If your Spanish company had the budget, it wouldn't have the option to
pay it. Because it isn't being offered."

NOTES:
- The questions WITHOUT answers on screen. Slow reading. The room completes them.
- Marked pauses, they are the interrogation itself.
- "The barrier is the list", key phrase of beat 5c.
- ~1.5 minutes.
-->

---
layout: default
---

<div class="max-w-5xl mx-auto px-8 pt-2">
<div class="text-sm uppercase tracking-widest opacity-60 mb-2" style="font-family: 'Montserrat', sans-serif; letter-spacing: 0.15em">And while we speak</div>
<div class="text-3xl font-bold mb-6" style="font-family: 'Saira Condensed', sans-serif; color: #ff9416">The list is not decided in California alone</div>
<div class="space-y-3 text-base" style="font-family: 'Montserrat', sans-serif">
<div class="flex gap-4 p-3 rounded-lg" style="background: rgba(148, 163, 184, 0.05)">
<div class="flex-shrink-0 w-20 font-bold" style="color: #ff9416; font-family: 'Saira Condensed', sans-serif">Apr 30</div>
<div class="opacity-90">Anthropic proposes expanding Mythos from 50 to <span class="font-semibold">120 organizations</span>. The <span class="font-semibold">White House blocks the expansion</span> on security grounds. <span class="opacity-60 italic text-sm">NY Post / WSJ.</span></div>
</div>
<div class="flex gap-4 p-3 rounded-lg" style="background: rgba(148, 163, 184, 0.05)">
<div class="flex-shrink-0 w-20 font-bold" style="color: #ff9416; font-family: 'Saira Condensed', sans-serif">May 4</div>
<div class="opacity-90">Trump considers <span class="font-semibold">government pre-release review</span> for AI models. Direct reversal of the hands-off stance, motivated by Mythos. The NSA already uses Mythos to audit US government software. <span class="opacity-60 italic text-sm">NYT.</span></div>
</div>
</div>
<div class="mt-6 p-4 rounded-lg" style="background: rgba(255, 148, 22, 0.08); border-left: 4px solid #ff9416">
<div class="text-base leading-relaxed" style="font-family: 'Roboto Slab', serif">
The negotiation goes from <span class="font-semibold">unilateral in California</span> to <span class="font-semibold">bilateral between California and Washington</span>.
<div class="mt-2" style="color: #ff9416; font-weight: 600">Europe doesn't appear at either table.</div>
</div>
</div>
</div>

<!--
VOICE:
"And the list, important, is not static. While we're talking here, it's in motion.

[Pause]

April 30, five days ago. New York Post, citing the Wall Street Journal. Anthropic
proposed expanding Mythos from fifty to a hundred and twenty organizations. The
White House, which has the final word on access to this technology, blocked the
expansion. On security grounds, they say.

[Pause]

May 4, yesterday. New York Times. The Trump administration, which came to power with
a hands-off AI policy, is now considering government pre-release review of models.
I quote the NYT itself, this is literal: 'the non-interventionist policy began to
change last month, after the startup Anthropic announced Mythos'. Mythos has
triggered the regulatory U-turn of the US government. And, additional data point,
the NSA, the National Security Agency, already uses Mythos to audit vulnerabilities
in the government's own software.

[2-second pause]

What this means: the list stops being unilateral with Anthropic. It is now
bilateral, between San Francisco and Washington. Europe doesn't appear, neither
at one table nor the other."

NOTES:
- Update slide with the two most recent mainstream news items.
- Apr 30 (NY Post) and May 4 (NYT). Datable, citable, establishment press.
- The land raises the stakes of the previous frame: California → California + Washington.
- ~1.5 minutes.
- If the talk date passes May 4-5, check for later updates.
-->

---
layout: center
class: text-center
---

<div class="max-w-4xl mx-auto px-8">
<div class="text-sm uppercase tracking-widest opacity-60 mb-8" style="font-family: 'Montserrat', sans-serif; letter-spacing: 0.15em">And from the Spanish press</div>
<blockquote class="text-3xl leading-relaxed pl-8" style="font-family: 'Roboto Slab', serif; border-left: 4px solid #ff9416; text-align: left">
Those are the rules when the name of your
<span style="color: #ff9416; font-weight: 700">national security</span>
provider is Claude Mythos Preview.
</blockquote>
<div class="mt-6 text-sm opacity-60 italic pl-8 text-left" style="font-family: 'Montserrat', sans-serif">
<span class="font-semibold not-italic">El País</span>, op-ed, May 3, 2026<br/>
Darío García de Viedma + Paula Oliver
</div>
</div>

<!--
VOICE:
"And it's not just me saying this. El País, two days ago, op-ed signed by Darío García
de Viedma and Paula Oliver. I quote the closing sentence, verbatim:

[Slow reading]

'Those are the rules when the name of your national security provider is Claude
Mythos Preview.'"

[3-second pause]

NOTES:
- El País quote as validation from the Spanish establishment. NOT PauseAI.
- The phrase is the literal closing line of the op-ed. Lands hard.
- Long pause after the quote. The room processes that this is not activism.
- ~30 seconds.
-->

---
layout: center
class: text-center
---

<div class="max-w-3xl mx-auto px-8">
  <div class="text-3xl leading-relaxed font-light" style="font-family: 'Roboto Slab', serif">
    These are the
    <span style="color: #ff9416; font-weight: 700">three asymmetries</span>.
  </div>
  <div class="mt-10 text-2xl leading-relaxed" style="font-family: 'Roboto Slab', serif">
    The first two
    <span class="opacity-70 text-xl">(router and bank)</span>
    were already there.
    <div class="mt-2" style="color: #ff9416; font-weight: 600">Mythos makes them decisive.</div>
  </div>
  <div class="mt-8 text-2xl leading-relaxed" style="font-family: 'Roboto Slab', serif">
    The third
    <span class="opacity-70 text-xl">(the market, access by list)</span>
    didn't exist before.
    <div class="mt-2" style="color: #ff9416; font-weight: 600">It created it.</div>
  </div>
</div>

<!--
VOICE:
"These are the three asymmetries.

Your router, in the first map.
Your bank, in the second.
Your market, in the third.

[Pause]

The first two were already there before Mythos. Manufacturer market shares, regulatory
fragmentation, dependence on device integrity. Latent. What Mythos does is turn them
decisive: now the difference between defenders with frontier AI access and defenders
without it is the difference between patching before or after the attacker finds the
bug.

[Pause]

The third, access by list, that one is new. That one wasn't there before. A list
decided between San Francisco and Washington. No European banks, no SMEs, no Spanish
public administration. That asymmetry was created by Mythos."

[2-second pause. Transition to the closing.]

NOTES:
- Land of Beat 5. Precise analytical distinction between pre-existing asymmetries
  amplified vs newly created asymmetry.
- "Makes them decisive" for 1 and 2; "created it" for 3. Honest calibration.
- Marks the end of the analytical journey. What follows is the closing.
- ~1 minute.
-->
