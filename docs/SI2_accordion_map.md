# SI2 Accordion — Deep Map (S2.3, second instrument)

> Seeded 2026-08-04 from the manual ahead of the survey. Performer: Pascal Contet.
> The accordion is the anti-harp: **sustaining, bellows-driven — continuous dynamics
> are its native language.** Expression modes matter so much here that UVI ships the
> KS masters in BOTH variants: `…KS Vel` (velocity-fixed dynamics) and `…KS Wheel`
> (CC1/mod-wheel = the bellows).

## 1 · Patch inventory (manual)

Individual: Fortepiano · Ordinario Registers · Ordinario · Staccato · Backwards · FX ·
Register Combinaison 1 · Register Combinaison 2 · Crescendo & Decrescendo
KS masters (×2 each, Vel/Wheel): `_Accordion Classical KS` · `_Accordion Extended KS` ·
`_Accordion Transitions KS`

## 2 · Keyswitch maps (manual p.34–35; UVI note names)

| Patch | Keyswitches |
|---|---|
| **Classical KS** | Ordinario C-1 · Sforzando C#-1 · Staccato D-1 |
| **Ordinario Registers** | DBL1 C-1 · DBL2 C#-1 · DBL3 D-1 · DBL4 D#-1 · DBL5 E-1 *(five register combinations — organ-stop timbres)* |
| **Extended KS** | Register Combination 1 C-1 · Register Combination 2 C#-1 · Backwards D-1 |
| **Transitions KS** | Ordinario C-1 · Crescendo C#-1 · Crescendo-to-Decrescendo D-1 · Decrescendo D#-1 |
| **Crescendo & Decrescendo** | Crescendo C-1 · Cresc-to-Decresc C#-1 · Decrescendo D-1 |
| **FX** | Bellowshake C0 · Breath C#0 · Difference Tone D0 · Key Click D#0 · Tap on Body E0 |

## 3 · Rack plan — track "Accordion SI2", loopMIDI port `Accordion` (R4)

| Slot/Ch | Preset | Why |
|---|---|---|
| A1 | Accordion Ordinario | baseline |
| A2 | Accordion Staccato | articulation sibling |
| A3 | Accordion Fortepiano | attack-shape sibling |
| A4 | Accordion Ordinario Registers | DBL1–5 via KS — the registration palette |
| A5 | Accordion Register Combinaison 1 | |
| A6 | Accordion Register Combinaison 2 | |
| A7 | Accordion Backwards | reversed samples (synthetic-flavored — classify on hearing) |
| A8 | Accordion FX | bellowshake/breath/difference-tone/key-click/tap via KS |
| A9 | Accordion Crescendo & Decrescendo | recorded dynamic transitions via KS |
| A10 | `_Accordion Classical KS Wheel` | **the bellows-mode flagship** — CC1-driven dynamics |

Setup per part: fixed channel (never A*), OUTPUT Main Out, **IR Reverb OFF**.
Track: input `Accordion` port / All channels / armed + monitoring. (Port needs creating in
loopMIDI + Reaper Preferences → MIDI Devices → Reset all → enable input.)

## 4 · Survey protocol (accordion priorities — designed before hearing)

- **AC0 — meet Ordinario (A1):** one held note ~8 s — does it sustain indefinitely?
  Then vel 40/85/120 — banding or louder-only *at attack*?
- **AC1 — range check:** wide climb; find true zone + any Expand-Range tan.
- **AC2 — THE BELLOWS TEST (A10 Wheel patch):** held chord + **CC1 contour** — expect
  genuine crescendo *through* the note with **timbre change** (reed intensity), not just
  volume. Then same shape via CC7 on A1 for comparison. Verdict: does CC1 sound like
  dynamics, CC7 like a fader? *(This distinction defines the accordion's rendering
  recipes and is honest per D7 — the bellows is real.)*
- **AC3 — registers (A4):** same note through DBL1→5 keyswitches — five timbres;
  vocabulary capture per register. Identity note: registration is performer-real,
  notated as register markings.
- **AC4 — recorded transitions (A9):** the three KS layers vs. an AC2-style CC1-made
  crescendo — which is more musical/usable?
- **AC5 — FX pass (A8):** five keyswitched effects, one listen each.
- **Lightning** for A2/A3/A5/A6/A7. Engine checks (CC120, CC64, bend) presumed from harp;
  spot-confirm CC64 (on a sustaining instrument it = hold, much more consequential).

## 5 · Findings

*(filled during the survey)*
