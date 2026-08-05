# Xsample Bass Clarinet — Deep Map (S2.3, third instrument)

> Seeded 2026-08-04 from: 3-page product manual, **Notation Key Word Overview** +
> **AIL Extended Scripting** PDFs (archived + extracted in `docs/manuals/`), the
> developer's legato tutorial video (composer-supplied transcript), and a VI-Control
> sweep. Host: **Kontakt 8** (not UVI — different world entirely, see SAMPLER_QUIRKS).
> **Composer priority (2026-08-04): ALL sounds get developed — multiphonics and
> flutter tongue get FULL survey treatment, not lightning.**

## 1 · Articulations (13; layers × round-robin from product table)

senza vibrato (3×3) · natural vibrato (3×3) · slow cresc/decresc (1×3) · staccato (3*2×3) ·
flutter tongue (2×3) · slap tongue (1) · **multiphonics (1)** · glissandi (1) ·
air noises (1) · key noises (1) · breath noises (1) · playing noises (1) · undefined tones (1)

## 2 · Patches

| Patch | Nature | Presets |
|---|---|---|
| `Bass Clarinet.nki` (**elastic**) | freely configurable; **primary for the rack** | 29 factory (CC#0 1–29): incl. triple tongue 16T, portato, secco, accent, vibrato variants, MW-inverted combos, **Senza Vibrato + Flutter Tongue Velocity X MW** (mid-note flutter crossfade?) |
| `Bassclarinet play.nki` (fixed) | shared KS layout across AIL winds | 11 (CC#0 0–10) |
| `Bassclarinet score.nki` (fixed) | 2 velocity layers (≤80 / >80, or top-key switches A#7/B7) | CC#0 0–16 |

## 3 · Control system (deepest of our three libraries)

- **CC#0 = articulation selector**: presets 1–88 → values 0–87; **individual keyswitches
  reachable as CC#0 88–117**; special functions at 126/127. Keyswitches also physical:
  bottom A0–G1; layer switches top A#7/B7 (score patch).
- **CC#1 (MW) = continuous dynamics** on "MW" presets ("seamless ppp→fff by crossfade" —
  seam quality vs UVI = star question). "Velocity" presets = attack-fixed. Combos:
  *Velocity X MW*, *MW inverted*, *MW Shape* (wheel shapes short notes).
- **CC#4 (foot controller)** — drives filters/LFO options (elastic).
- **Filters**: F1/F2 with controller combos — e.g. F2 driven by CC#1 in shapes (/, /\, \).
  VI-Control tip: **the low-pass filter is a great dynamic-shaping tool — natural
  diminuendi on long notes, expression on legato/attacks.**
- **Routing options**: MW→AT, AT→PB, Velocity→AT (elastic per-slot).
- **Pitch bend range editable in ¼-semitone steps up to ±1 octave** (value 24 = octave) —
  **quarter-tone capability built in.**
- **Modulators**: LFOs (pitch+amp, controller-drivable), random detune, envelope shapers.
- **True legato** on all long styles (samples + script). Developer's own tip (legato
  tutorial video): **use velocity-based presets for legato improvisation to avoid
  crossfade phasing**; MW presets phase-risk during legato.

## 3b · Controller Overview — the definitive CC map (Extended Scripting doc p.22–23)

**Preset Mode — global, always live:**
| CC | Function |
|---|---|
| **CC#0** 0–87 | switch Presets 1–88 |
| **CC#0** 88–117 | switch Keyswitch-Bank presets 1–30 |
| **CC#0** 118/119/120 | select Keyswitch Bank 1/2/3 |
| **CC#0** 121 | Toggle Mode · **122** Slide & Trill Mode |
| **CC#0** 126/127 | Preset Mode on / Phrase Mode on |
| **CC#1, CC#2, CC#4, AT** | **"various" — per-preset/slot assignments** (the answer to "what changes per preset") |
| **CC#82** | Round-robin behavior (ranges select: on-repetition / off / random / always / indiv. / Instrument 1 / Instrument 2 / Ensemble) |
| **CC#91–95** | Ensemble-mode params (voices, pan width, alive, detune, delay) |
| **CC#28** | Timer (e.g. breathing; 0 = off) |
| **CC#68** | **Legato off (0) / on (127)** · **CC#24 = legato intensity: slur → glissando** |

**Phrase Mode (CC#0=127) — a whole second machine:** CC#31 volume · #32 transpose ·
#33 speed · #34 retrigger · #35 reverse · #100 sound selection · **aleatoric engine**:
CC#87 preset+aleatoric on/off, #88 sound %, #89/#90 durations, #91 note %, #92 velocity %,
#93/#94 move-legato + intensity, #95 absorption, #96/#97 attack/decay.

**Keyboard function keys (elastic):** A0–B0 velocity-sensitive — low vel = KS bank
select 1–3; high vel: A0 = **tune-base-note mode (pure tunings!)**, A#0 = toggle mode,
B0 = trill & slide mode. C1–A1 = 10 keyswitches × 3 banks. A#7 = preset/phrase toggle.

**How to expose per-preset CC assignments** (the "various" set): (1) elastic GUI — click
the blue sound-slot buttons with **Kontakt's Info Pane on**, hover shows each control's
function per slot; (2) Kontakt message line names presets on switch; (3) our probe
battery confirms by ear. Between the three, nothing can hide.

## 4 · Community / developer intel (rung 2)

- Hans Josef Winkler (developer) is **active on VI-Control** — direct questions possible.
- LPF-as-diminuendo trick (above). Round-robin "Instrument 1/2" anti-phase trick exists
  in the strings — pattern may apply if we ever double.
- Xsample AIL praised as core + extended library; extended techniques "not described"
  systematically — our survey fills that gap for our own use.

## 5 · Rack plan sketch (R5 — to finalize at build)

Track "BassCl SI2"→ no — **"Bass Clarinet XS"**, loopMIDI port `BassCl`, **Kontakt 8**
instance. Likely ONE part: `Bass Clarinet.nki` (elastic) — articulation switching via
CC#0/keyswitches INSIDE the patch (unlike UVI's channel-per-technique). This exercises
the third switching mechanism; rendering recipes must speak CC#0 here.
Open at build: Kontakt octave-display convention (pin it); which factory presets loaded
into which slots if multiple needed; stereo/mono switch; Room Walker OFF.

## 6 · Survey protocol sketch (XC-series)

- **XC0** meet: senza vibrato — sustain, layers, legato-overlap behavior
- **XC1** switching: CC#0 preset changes vs keyswitches — latency, statefulness
- **XC2** THE SEAM TEST: MW swell on *Senza Vibrato MW* — is "seamless" real (vs UVI phasey)?
- **XC3** **MULTIPHONICS — full treatment** (composer priority): inventory what's there
  (pitches? fingerings? how mapped?), character per note, dynamics behavior
- **XC4** **FLUTTER — full treatment** (composer priority): 2 layers, MW weave presets,
  the *Velocity X MW* combo (flutter crossfade mid-note?), flutter↔senza transitions
- **XC5** legato: overlap notes on long styles; velocity-preset vs MW-preset phasing check
- **XC6** glissandi + undefined tones + noises (lightning)
- **XC7** quarter-tone check: PB range setting + a ¼-tone bend by ear

## 6b · FLUTTER PROTOCOL — exhaustive (XC-F series; composer directive 2026-08-05)

> "Relatively exhaustive for the first few: velocity response, ALL CC messages affecting
> the sound, range — documented in the database." Each test short; spec → 'go' → sound.

- **XC-F0 — Meet & range scan** (preset **#5 Flutter Tongue MW**, CC#0=4): CC1 healthy,
  notes stepped across the keyboard to find mapped edges. → range + character words.
- **XC-F1 — Velocity response** (still #5): one note at vel 30/60/90/120, CC1 fixed —
  what does velocity govern on an MW preset (attack? nothing?).
- **XC-F2 — Full CC sweep battery**: held flutter note; one controller per pass:
  **CC1 · CC2 · CC4 · aftertouch · CC7 · pitch bend** (~8 s each, one-word verdicts) —
  the empirical per-preset control map. Key question: does anything deepen the flutter
  itself (rate/intensity) vs. just dynamics?
- **XC-F3 — Velocity variant** (**#16 Flutter Velocity**, CC#0=15): 4 velocities —
  banding? Then CC1 check (expect inert).
- **XC-F4 — THE MORPH** (**#15 Senza+Flutter Velocity X MW**, CC#0=14): held note,
  CC1 0→127→0 — does it crossfade senza↔flutter continuously (= the "flutter depth"
  axis, curve-drawable)? Repeat at two velocities to decode the "Vel X MW" division
  of labor.
- **XC-F5 — Inverted variant** (**#29 Flutter Vel + MW inverted**, CC#0=28): quick —
  what does inversion mean in practice?
- **XC-F6 — Legato + gliss-depth taste**: overlapped flutter notes (scripted legato on
  flutter?); one CC#68=127 + CC#24 sweep pass (slur→gliss depth) on flutter.
- **XC-F7 — Info-Pane peek** (composer, optional): screenshot slots for #5/#15 to
  confirm empirical CC map.
- All findings → §7 + TIMBRE_VOCAB (flutter section).

## 7 · Findings

**XC0a (2026-08-05):** rack proven — CC#0 selection + notes sound, sustains, real bass
clarinet. CC1 pre-set needed on MW presets (at 0 = near silence).

**XC1 — SEAM TEST, preset #1 Senza Vibrato MW (2026-08-05): SEAMLESS ✓**
Composer: "very realistic, like an actual player doing a crescendo — the expected timbre
changes as more or less breath came in." **STANDING RECIPE: sustained BC dynamics =
CC1 curves** (animated curves will map directly). Caveat: seam re-checked per MW preset
as adopted — functionality may vary. (Xsample crossfade quality > UVI's phasey seam.)
