# SI2 Harp — Deep Map (S2.3)

> The harp as the sample library presents it: presets, keyswitch maps, everything
> modifiable, technique descriptions, notation guidance, constraints. Sources: UVI
> browser (composer screenshots, 2026-08-02) + SI2 manual (extracted text in
> `docs/manuals/extracted/`). Timbre bands live in `TIMBRE_VOCAB.md`; quirks in
> `SAMPLER_QUIRKS.md`.

---

## 1 · Presets (16 individual + 2 KS masters)

Individual presets (browser inventory):
Bisbigliando with Stick · Bisbigliando · Buzzing Pedal · Damped · Glissando Modes KS ·
Harmonic Fingering · Harmonic in Wood · Near the Board · Near the Pegs ·
Ordinario Hard · Ordinario Soft · Ordinario · Pizzicato Bartok · Scratch with Nail ·
Tap with Stick · Xylophonic

**KS master patches** (manual patch list — underscore-prefixed, bundle techniques
behind keyswitches): **`_Harp Classical KS`** · **`_Harp Extended KS`**

## 2 · Keyswitch maps (manual p.37; UVI note names, middle C = C3)

**_Harp Classical KS** — red keys:
| Key | Technique |
|---|---|
| C-1 | Ordinario |
| C#-1 | Ordinario Soft |
| D-1 | Ordinario Hard |
| D#-1 | Damped |
| E-1 | Bisbigliando |
| F-1 | Xylophonic |
| C0 | Glissando Menu |
| C#0 | Glissando with Stick |
| D0 | Glissando with Pedal |

**_Harp Extended KS** — red keys:
| Key | Technique |
|---|---|
| C-1 | Bisbigliando with Stick |
| C#-1 | Pizzicato Bartok |
| D-1 | Near the Board |
| D#-1 | Near the Board with Nail |
| E-1 | Near the Peg |
| F-1 | Harmonic in Wood |
| F#-1 | Tap with Stick |
| G-1 | Scratch with Nail |
| G#-1 | Buzzing Pedal |
| A-1 | Glissando Menu |
| A#-1 | Glissando with Stick |
| B-1 | Glissando with Pedal |

Keyboard color legend (all SI2): **red** = keyswitches · **blue** = string-select
(strings family only) · **yellow** = extended range (beyond the real instrument) ·
**gray** = unmapped.

## 3 · Manipulation surface (what can be modified, per patch)

**At trigger time:**
- **Velocity** → timbre bands (v1–v3 for Ordinario — `TIMBRE_VOCAB.md`)

**Continuous / re-routable dynamics — the Expression system:**
- **Expression Mode** selects what drives volume+timbre:
  - *Velocity* (default) — with **Constant** checkbox + value for fixed-velocity probing
  - *Modwheel* (CC1) — **continuous dynamic/timbre control decoupled from velocity**
  - *Poly Aftertouch*
  - *MPE* — Y or Z axis for dynamics, X for pitch
- **Dynamic → Amount + Curve** — depth + draggable remap of the dynamics response
  (applies to all expression modes)

**Sound shaping:**
- **Timbre → Color knob** — "shifts tonal colour based on adjacent samples" (a real
  timbre manipulator; CC-assignability to be probed)
- **Amplitude → Attack / Release** — envelope; Release governs tail on note-off
- **Equalizer** (Bass/Mid/Treble ±15 dB) · **IR Reverb** (keep OFF/dry per D7)

**Structural:**
- **Play Mode**: Polyphonic · Monophonic · Legato · Poly Legato · **Portamento**
  ("classic glissando or stepped portamento") · Poly Portamento — with Time, Range,
  Auto fade-detect, and portamento-on-sustain-pedal switching
- **Expand Range** — unlocks yellow keys beyond the real instrument
- **Stretch** — listed in interface map; meaning TBD (open probe)

## 4 · Techniques — descriptions & suggested notation (manual p.69, "Playing Techniques and Suggested Notation")

- **Bisbigliando** — rapid alternation on two enharmonically-tuned strings, equal
  pitches in these samples. Notation: small note in parentheses + "bisb." + wavy line.
- **Bisbigliando with stick** — metal stick alternating between two enharmonic strings.
- **Buzzing pedal** — pedal held halfway between notches while playing. **Metal strings
  only — up to G1.**
- **Clusters** — sampled in 3 range areas (high/med/low) × 3 dynamic levels.
- **Damped** — flat of hand muffles string + sympathetic resonance immediately after attack.
- **Glissando family** — with stick (slide along string), with pedal (pedal moves during
  resonance), fluido, near-the-board, with nail (notated with nail symbol).
- **Near the board** — plucked at lowest string extremity, by the soundboard. Notate
  "near the board" (= *près de la table*).
- **Near the board with nail** — same position, nail: "close to a plectrum sound."
- **Near the pegs** — plucked at highest extremity.
- **Pizzicato Bartók** — finger joint strikes instrument body right after the pluck.
- **Scratch with nail** — nail scratched along the string length.
- **Tap with stick / Tap on body** — percussive.
- **Harmonic fingering / Harmonic in wood** ("xylharmonic").
- **Xylophonic** — sons xylophoniques.

## 5 · Constraints & identity-side facts

- Buzzing pedal physically limited to metal strings (≤ G1) — composing constraint.
- Bisbigliando samples fix both pitches equal (enharmonic strings) — unequal bisbigliando
  would need two parts or a different realization.
- The manual's notation suggestions are IRCAM's, aligned with French-school practice —
  strong starting point for D7 notation hooks, refined with the performer later.

## 5a · Ordinario Soft / Ordinario / Ordinario Hard — the pluck-manner dimension

Three sibling patches = three **recorded plucking manners** (how firmly/deeply the finger
engages the string), each presumably with its own velocity layers. This makes the harp's
basic timbre space **two-dimensional**:

| Axis | Live meaning | In samples |
|---|---|---|
| **Pluck manner** | gentle/fleshy stroke ↔ ordinary ↔ firm/deep "dug-in" pluck | patch choice: Soft / Ordinario / Hard |
| **Dynamic** | how loud that pluck is | velocity within the patch (v-bands, per TIMBRE_VOCAB) |

Live these correlate but are independent — a harpist can pluck *firmly but quietly*
(intense pp) or *gently but full* (warm mf). The samples honor that independence.

**Notation:** no standardized symbol for pluck manner. Candidate hooks (decide at
notation time, per D7): dynamics doing double duty · articulation marks (tenuto/marcato
family) · explicit text ("dig in", "dolce/flesh"). Identity vocabulary: treat
`pluckManner: soft|ord|hard` as a first-class parameter now; its notation rendering TBD.

**Switching routes (rendering):** (a) three parts on channels 1–3 — per-note channel;
(b) `_Harp Classical KS` keyswitches C-1/C#-1/D-1 — per-note KS on one channel;
(c) sandbox dropdown per patch (probing). Bands per patch to be probed (S2.3a extension:
Soft and Hard likely band differently than Ordinario's v1–v3).

## 5b · Performer-perspective control map — Ordinario (first of the patch-by-patch series)

> Only what a live performer can control **in real time**, paired with its MIDI twin.
> Mix/engineer/config parameters (reverb, EQ, Color, Dynamic curve, expression-mode
> switch) are deliberately excluded — no performer analog.

| # | Performer control (live) | Grain | MIDI twin (this patch) | Status |
|---|---|---|---|---|
| 1 | How hard each pluck — dynamics, shaping cresc/dim across notes | per note | **Velocity** (bands v1/v2/v3) | working |
| 2 | When to damp — étouffé, hand stops the ring | continuous timing | **Note-off moment** (+ Release value as damping speed in the recipe; dedicated *Damped* layer for damped-attack sounds) | working (crude length box) |
| 3 | Pedal motion while string rings — pitch inflection; gliss-with-pedal; half-pedal buzz (metal strings ≤ G1) | continuous | **Pitch bend?** (support/range unprobed) · sampled truth lives in *Glissando with Pedal* / *Buzzing Pedal* layers | probe |
| 4 | Where/how the next pluck happens — position (près de la table ↔ ord. ↔ near pegs), flesh vs nail | per note (discrete, real-time switchable) | **Keyswitch before the note** (KS patches) or channel/part switch | working via KS patches |
| 5 | What keeps ringing — laissez vibrer vs secco, selective damping | per note overlap | Overlapping note-offs / sustain handling | working |
| — | *Synthetic only (no performer twin):* continuous volume during a ringing pluck | continuous | CC1 in Modwheel expression mode | flag as **synthetic** if used |

| 6 | **Chord roll** — spread speed & direction (rolling is the harp default; *non arpeggiato* is the marked case) | per chord | Onset staggering between notes | working (recipe-level) |
| 7 | **Glissando sweep** — finger drag across strings: speed, contour, direction. **The sounding scale comes from the pedal SETUP** (all 7 pedals pre-set → any sweep produces that scale/mode) | continuous sweep; scale = setup-level | Fast note streams; scale = which pitches the stream contains. Sampled alternatives: *Glissando Modes* layers | working (recipe-level) |
| 8 | **Position gradient** — migrating près-de-la-table → ordinario → near-pegs across a passage (live: continuous) | per note | **3-step discrete** via layer switches — a gradient only by stepping | working via KS |

Vibrato note: SI2 implements vibrato as **sampled layers** (vibrato/non-vibrato presets),
not CC rate/depth — CC-continuous vibrato memory is Xsample-strings practice.

### Secco / mute-string (pluck → abrupt palm stop)

Live: pluck rings, palm/hand kills it — notated secco (as in the violin piece). MIDI:
plain note-off obeys the patch **Release** (currently 7.00 = long tail), so duration
alone can't produce secco. Options, in order of preference:
1. **CC120 (All Sound Off) at the damp moment** — instant cut regardless of release;
   piece #2's proven ASR-model technique. → probe UVI's CC120 response.
2. Short-Release recipe (Release ≈ 0) — whole-patch setting; note-off = abrupt stop.
   Fine for a passage that is uniformly secco; needs CC-assignability for per-note use.
3. *Damped* layer = different thing: sampled **damped attack** (muffled from the start),
   not ring-then-stop. Both belong in the vocabulary as distinct identities.
Nuance: real palm damping adds a soft contact thud — a sample cut has none. Accept, or
overlay a low-velocity *Damped* hit at the cut moment (recipe refinement, later).

### Pitch bend — clarified

No separate bend patch: **pitch bend is a channel message** the Ordinario patch should
respond to (bend range unprobed; UVI default typically ±2 st). Live technique on pedal
harp: one hand plucks, **the FOOT moves the pedal** — flat/natural/sharp = 3 notches, so
realistic bend span ≈ ±1 semitone from natural (whole tone flat↔sharp), at foot speed,
stepped or smeared (half-pedal in between = the buzz zone on metal strings). Also: **one
pedal moves ALL strings of that note-letter** (C-pedal bends every ringing C). Synthetic
wheel-bend transposes the sample (timbre artifact, no mechanism noise) — sampled truth
lives in *Glissando with Pedal* / *Buzzing Pedal*. Sandbox: bend control clamped to
harp-realistic range (±2 st max) with pedal-speed smoothing; tag wider bends synthetic.

## 6 · Open probes

1. Exact mapped range per preset (silent-edge scan; provisional C1–G7 in sandbox config)
2. **Color knob**: audible effect on Ordinario? CC-assignable (UVI MIDI learn / host automation)?
3. **Modwheel expression mode** on a plucked sound — what does it actually control mid-note?
4. **Stretch** parameter — what is it?
5. Velocity band edges (v1/v2/v3) per register — refine as notes get used
6. **KS patches vs parts-per-technique** — rack routing strategy decision (KS = many
   techniques on one channel via red keys; parts = simultaneous techniques on separate
   channels). Likely answer: both, chosen per compositional need. → affects rendering recipes
7. **CC120 (All Sound Off) response in UVI** — instant-cut for secco (piece #2 precedent)
8. **Pitch bend response + range on Ordinario** — does it bend, how far, how does it sound
9. **Release knob CC-assignability** — per-note secco without CC120, if learnable
