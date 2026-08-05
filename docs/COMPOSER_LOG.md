# Composer Log

## 2026-08-04 — Suspected MO for gestural tools; standing architecture watch

"Not definitive, but suspected MO: I'll probably build gestural tools like the envelopes
and the gesture library **at composition time**. When I sit down to actually write, I'll
think 'I wanted this type of sound here,' go into our tool, play around with a sound or
two, ask for additional tools as I go to make the sandbox more effective — and when I
settle on a sound, capture that gesture in some easily recallable way. Those activities
are deferred until that point. Let's continue building the instrument libraries."

"With the harp, since it's not a sustaining instrument, there's fewer continuous-controller
messages — as a general thing for AI to monitor: **if architectural things should be
thought of before composition time — where I'd otherwise have to go back and redesign —
I want to get ahead of those as much as possible.**"

*(→ Standing AI watch: flag architecture-ahead-of-need decisions before gestural-tool
building begins. G3/G5/SB4 statuses updated to defer-until-composition.)*

> **Standing practice (2026-08-02):** the composer's substantive prompts get captured
> here as dated journal notes — lightly cleaned from speech-to-text, content untouched —
> so the original thinking can be referred back to later. AI appends automatically.

---

## 2026-08-03 — Rhythmic-notation spectrum (→ docs/NOTATION_STRATEGY.md)

Extended dictation on notation strategy: the Ferneyhough↔scrolling-cursor spectrum,
counting-based vs reactive, pros/cons each end, hybrids tried (proportional traditional,
mixed-mode cursor-stops, performer-optional scroll toggle), design goal of a broad
solution range rather than one ideal, and the per-phrase decision framework with
first-capture.json as test case #1. **Full organized text lives in
`docs/NOTATION_STRATEGY.md`** — the seed doc for chunk 2–3 notation decisions. AI weighs
in when invited.

## 2026-08-03 — Groups, continuous strategy, and reusable parameterized units

"Not only change individual notes, but change GROUPS of notes — simple example: grab a
group of notes in a phrase and apply a crescendo; we'll work out the controls (maybe a
curve maker). Decisions needed: velocity for crescendo, or some volume control message."

"Where this moves toward: if I establish a crescendo with, say, a parabolic curve, and
we decide to use a volume control message — then I can SAVE that crescendo as a unit,
as a thing. Apply it elsewhere from a menu, with parameters — over a different length of
time, a different volume range, etc."

*(This is the palette concept surfacing in sandbox form: named, parameterized, reusable
effect-gestures — templates scaled per application. Direct ancestor of the score's
graphic objects: a unit's parameters ARE the object's handles. Also: capture strip on
hold until the composer works out the timbre taxonomy.)*

## 2026-08-03 — Sandbox architecture brain-dump (switching, two branches, fact-checker)

"Gesture window: a cursor so I can pop in where I want; should scroll; eventually a grid;
zoom in/out for sure."

"If I want a phrase to change rapidly between different techniques — every note some
different timbre — we play that fluidly without manual adjustments. Whether that's a
keyswitch, or a quick channel switch with a bunch of tracks loaded, or (like Xsample)
a CC message that changes the articulation patch — it's more the decision architecturally
we need to make. There might be a variety of techniques; continue building infrastructure
and let these crop up when necessary."

"Two branches which may converge. One: an interface for continuous messages — some version
of what I have in the scores, curves, maybe LFOs — to explore the patches that have
continuous-message possibilities. Two: a quick way to flip through and sample the various
timbres — a sample phrase, or play live (decide my MO later), then switch between sounds
as fluidly as possible. Maybe adapt the keyswitch technology on my Keystation 88, or play
a phrase and change individual notes — designating a patch/articulation (or CC message),
but ALSO choosing pre-saved gestures or timbres (a preset save, similar to the phrase save)."

"And a companion facility — a live evaluator, fact-checker — maybe not real time, but I
push a button or do a prompt and it evaluates the playability of a phrase. If I'm asking
for unrealistic performance possibilities, there's a built-in fact checker."

"I suspect first is building out the exploring sandbox so I can preview and understand
all that's available in the sample instrument."

## 2026-08-03 — Two-way AI↔human real-time communication (for the composer interface)

"When we get to the composer interface: I want two-way AI-human real-time communication.
For example, I could say 'load this phrase into the score at time x,' and you would do
so. Then I could say 'look at the fourth note' — you could highlight it in the score and
give me the stats on it (what pitch, what velocity, etc.) somewhere in the interface.
Then I could say 'have a bass clarinet low C at that same time,' and in the bass clarinet
part there would appear some sort of graphic gesture, whatever we decide. Capturing this
note to build in this fluidity when we get back to revising the composer score."

*(Architecture implication for 1e: AI is a first-class score actor — reads AND writes
score state, can highlight/inspect elements, conversational commands operate on musical
addresses ("fourth note", "time x", "bass clarinet part"). The score data model must be
addressable in those terms from day one.)*

## 2026-08-02 — The gesture/sequence vision (Motive Builder germ)

"I can play using my MIDI keyboard a sequence of notes — so some sort of sequencer
device. (Aside, for later: I want timing measurements — improvise rhythms, then use
measurements to tease out how those look as notated rhythms. Keep in background.)
Then apply techniques to the various notes in the chain — choose notes and say 'this
should be plucked closer to the soundboard,' or pitch bend — immediately applied in
the background to the MIDI, and play back. For continuous things akin to crescendo:
select several notes and have the crescendo take place over those notes. Another
later layer: an efficient way to evaluate playability — is it reflecting performer
reality (how quickly can they pitch bend, change string location, etc.). Input: string
of pitches from MIDI, or manually selected; sometimes a single chord, note, or gesture.
Second pass: change the temporal effects per note or per series of notes."

## 2026-08-02 — Sandbox strategy (stated after the KS-menus reconciliation)

"The sandbox will be literally that. Appropriate controls so I can quickly navigate
various settings, in my own preferences — sound-based. Clicking on one of the sound
types and then having the appropriate controls — might be an XY pad, might connect
MIDI devices eventually. I play the sound and the modifications using the UI or my
MIDI inputs. Once I establish the sound I want to use, then I'll investigate — either
via the actual patches and mods I used, or just shoe-leather research — how a live
performer would create that sound, and then develop the notation for that. For the
sandbox, take the sample library as the starting point: each primary sound category,
then the mods."

## 2026-08-02 — First timbre captures; cataloging philosophy

Probing SI2 Harp Ordinario at C1: velocity 112–127 = rattle, more un-harplike, maybe
chime or bell like (inharmonic partials); 111–54 = standard harp sound; 53 and below =
muted, muted attack, like striking glass, a large glass bowl, or like the difference
between sticks and brushes in percussion.

"I'm just trying to catalog the available sounds in the virtual instruments — some sort
of standardized one word just indicating level. This one happened to break out into
about three levels, but others will have potentially more. And then a box that just has
my comments. I'll have to do a re-eval later when I'm actually producing the notation —
it might not translate to velocity or dynamics; [it might be] some plucking technique or
plucking different part of the string. Right now I'm familiarizing and codifying the
instrument libraries themselves. When I get to composing, I'll probably want to produce
a particular sound, and that will drive what sample I use and what velocity — as well as
then re-translating that sound to notation for the live performer, which might actually
exist somewhere else entirely."

"The harp samples are different for the different notes. Instead of going through each
one: keep the three categories, and as I use the notes I can define the ranges as we go
along. If I need additional [timbral] qualifications for different ranges or tessitura,
I can do so at that time."
