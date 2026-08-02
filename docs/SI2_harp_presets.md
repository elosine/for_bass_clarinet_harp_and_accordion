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

## 6 · Open probes

1. Exact mapped range per preset (silent-edge scan; provisional C1–G7 in sandbox config)
2. **Color knob**: audible effect on Ordinario? CC-assignable (UVI MIDI learn / host automation)?
3. **Modwheel expression mode** on a plucked sound — what does it actually control mid-note?
4. **Stretch** parameter — what is it?
5. Velocity band edges (v1/v2/v3) per register — refine as notes get used
6. **KS patches vs parts-per-technique** — rack routing strategy decision (KS = many
   techniques on one channel via red keys; parts = simultaneous techniques on separate
   channels). Likely answer: both, chosen per compositional need. → affects rendering recipes
