# PLAN — for bass clarinet, harp, and accordion

> **The living plan.** Rules:
> - **IDs are stable and never reused.** Reordering = moving lines; dropping = status change. Never renumber — journal and decision entries reference these IDs.
> - Order = position in file. Status: `todo` · `doing` · `done` · `dropped` · `deferred`.
> - Every item keeps a one-line ***why*** so motivation survives context loss.
> - Verbs: *"show me the plan for 1"* · *"mark 1b done"* · *"move 1c after 1d"* · *"drop 2a"* · *"break 1e down further"* · *"defer 3b"*.

---

## The system in one line

A notation program whose primitives are the composer's sounds: draw objects in a score the way you'd draw notes in bars — but every mark knows its instrument, its technique, its MIDI, and its Reaper routing.

## The three big chunks

| Chunk | Verdict from pieces #1–2 | This time |
|---|---|---|
| **1 Composer** | Lots worth keeping, logic needs revisiting | More or less a rewrite |
| **2 Conversion** (composer data → performance score) | Big headway made on piece #2 | Substantial revision |
| **3 Performance interface** | Mostly done | Minor modifications |

---

## 0. Meta / project setup — `doing`

- **0a — PM kit** (plan, journal, protocol, CLAUDE.md) — `done 2026-08-01`
  *Why:* never re-derive the plan; cheap session starts; decisions survive context loss.
- **0b — Composer's pain list from piece #2** (from memory, no code) — `todo`
  *Why:* it is the requirements doc for the rewrite; only the composer has it.
- **0c — Orientation pass over the two prior repos** (one pass; output = one-page map) — `done 2026-08-01`
  *Why:* a cheap map makes all later reading targeted instead of exploratory. → Map lives in journal §1.
- **0d — Per-chunk reuse decision:** fresh start vs copy-forward from piece #2 — `todo`
  *Why:* wrong default drags the whole rewrite; likely answer differs per chunk (fresh for 1, copy for 3).

## 1. Composer (rewrite) — `doing`

### Build order — the spine (adopted 2026-08-01; reorder allowed at any step boundary)

S-IDs are stable; order = position. Each step gets its own broken-down plan (sub-items added here) before implementation.

- **S2 — Instrument map v3** — `doing` *(moved first per composer, 2026-08-01)*
  Carry piece #2's 82-instrument map forward; extend schema for time-varying control (CCs, keyswitches, pedaling); map bass clarinet, harp, accordion. One instrument end-to-end first (harp) as the template. → feeds 1a.
  - **S2.1 — Source inventory** — `done 2026-08-01` (SI2 + PP2 installed & manuals in `docs/manuals/`; Kontakt 8 + UVI Workstation present; Xsample bass clarinet license pending)
  - **S2.2 — Schema draft** — `todo` — extend map schema for time-varying control; shown on one harp technique; PP2 entries as template. **Must embody D7/M3:** entries are identity records (musical vocabulary) with two attached renderings — notation hooks + per-bank MIDI realization recipes (incl. hacks)
  - **S2.3 — Harp deep map** — `todo` — full harp entry from manual + patch data (16 presets inventoried → `docs/SI2_harp_presets.md`); composer spot-checks
    - **S2.3a — Velocity→timbre probe map** (rendering side) — `todo` — SI2 harp plucks change timbre by velocity layer; probe per register and chart which velocity ranges give which timbres, so specific timbres are dialable. Tool: patch's Expression → Constant velocity value.
    - **S2.3b — Real-harp timbre-by-dynamic reference** (identity side, per D7) — `todo` — what a live harp's timbre does from `ppp`→`fff` across registers; informs notation choices. Kept separate from S2.3a: the sample map is a recipe, the real-instrument map is truth.
  - **S2.4 — Audition verification** — `doing` — Reaper `instrument_rack.rpp` build (step-by-step with composer, per D6 Reaper session storage & backups), then loopMIDI + AI MIDI probes, composer's ears confirm.
    Rack-build walkthrough steps (R-prefix, to avoid collision with spine S-numbers): R1 create/save project `done` · R2 auto-save prefs `done` · R3 harp track `done 2026-08-02` (Harp Ordinario, slot A1 set to `A*` omni, port `Harp`, monitoring ON — see SAMPLER_QUIRKS.md) · R4 accordion track `deferred` (until sandbox needs it) · R5 bass clarinet track `deferred` (NB: a Kontakt 8 track already exists in the rack — contents TBC) · R6 loopMIDI wiring → folded into SB0
  - **S2.5 — Query gate** — `todo` — real composer questions answered from the map = S2-harp done; then accordion, then bass clarinet, same steps cheaper
- **S1 — App shell** — `todo` — modular scaffold (server + module structure); *the* architecture decision. → 1e.
- **S3 — MIDI out** — `todo` — port the proven loopMIDI path; first sound from the new app. Needs S1.
- **S4 — Sandbox v1** — `doing` *(pulled forward 2026-08-02 in v0 form, fused with the minimum of S3's MIDI plumbing; first use case = S2.3a harp dynamics→timbre)* — → 1c.
  v0 principle: buttons now, AI-in-the-loop later; spec grows from practical examples; renovation or full rewrite later is expected and fine (M1). Standalone for now; folds into the composer app when S1 exists.
  - **SB0 — MIDI path** — `done 2026-08-02` — loopMIDI port `Harp` → Reaper 'Harp SI2' (monitoring ON — the silent-killer, see SAMPLER_QUIRKS.md + Principles 1–2) → UVI Harp Ordinario at `A*`. Proven end-to-end by AI-scripted probes (winmm P/Invoke sender). Port-per-instrument naming: `Harp`, `Accordion`, `BassCl`; channels = techniques.
  - **SB1 — Probe page v0** — `done 2026-08-02` — keyboard (instrument range), note/MIDI/freq readouts (sci + UVI), auto-pluck velocity spinner + type-in, SPACE re-pluck. Serves at `http://localhost:4600` (`node sandbox/serve.js`).
  - **SB2 — Timbre capture** — `todo` — qualitative descriptor per register×dynamic cell, saved to JSON in the repo → becomes the S2.3a chart; vocabulary later informs S2.3b (notation side, D7). Interim: captures dictated in chat → TIMBRE_VOCAB.md (working).
  - **The Gesture Loop** (capture → annotate → render → audition; composer vision in COMPOSER_LOG 2026-08-02; the Motive Builder germ — data format = identity + compiled rendering, D7 in miniature):
    - **G1 — Capture & replay** — `doing` (built 2026-08-02, awaiting composer test) — Keystation input, live thru to rack, raw high-res timestamps (no quantization — future rhythm-analysis depends on this), minimal-blocks gesture lane, exact replay via scheduled Web MIDI, clear.
    - **G2 — Per-note technique tags** — `todo` — select notes → technique palette (from deep map) → compiled playback (keyswitch/channel/CC120 mechanics backstage). Forces KS-vs-parts decision (deep-map probe #6).
    - **G3 — Span effects** — `todo` — crescendo (dynamic→dynamic via v-bands → velocity ramp), bend contours (harp-realistic clamp ±2 st, synthetic tag beyond).
    - **G4 — Save/load named motives** — `todo` — gesture+annotations JSON → motive library begins.
    - *Later layers (architecture-ready, not scheduled):* timing→notated-rhythm analysis · playability validation (performer-reality constraints per instrument in deep maps; renderer warns).
- **S5 — Reaper bridge v1** — `todo` — programmatic track/routing setup from instrument selection. Needs S2. → 1b.
- **S6 — Timeline + first object end-to-end** — `todo` — place it, play it. Needs S3. → 1e/1d.
- **S7 — Object protocol** — `todo` — formalize from the first object; second object proves it. Needs S6. → 1d.
- **S8 — Palette growth** — `todo` — motives, curve objects, new techniques; driven by actual composing. The loop.

### The five subsystems

- **1a — Instrument Knowledge Base** — `todo`
  Per sample instrument: capabilities (techniques, articulations), time-modifiable parameters, MIDI logistics (channels, CC maps, keyswitches, signal ordering).
  *Why:* replaces the manual research + manual Reaper wiring of piece #2; lets AI answer "what can this instrument do?" and wire it correctly.
- **1b — Reaper Bridge** — `todo`
  Programmatic control of Reaper: loading instruments, track/channel setup, placing MIDI, routing.
  *Why:* the Reaper work was all manual last time and was the major drag.
- **1c — Sandbox / Motive Builder** — `todo`
  Audition & shape sounds inside the composing environment (no round-trip into Reaper's UIs); results stored as named, reusable motives.
  *Why:* successor to piece #2's cell builder / previewers, which were clunky; the sandbox is the front door for new sounds (see D2).
- **1d — Graphic Object System** — `todo`
  Object vocabulary + design protocol (shape, color, rules) + per-object machinery.
  *Why:* consistent, fast creation of new object types instead of one-off builds.
- **1e — Composition UI** — `todo`
  The custom drawing program: score surface (traditional skeleton — systems, bars, players — bent to this process) · piece-specific palette · fast input (place, draw duration, shape change-over-time) · playback & live edit through the Reaper chain.
  *Why:* its quality decides whether the loop feels like composing or operating machinery.
  **Two-way AI↔score interaction** (composer, 2026-08-03 — COMPOSER_LOG): AI is a first-class score actor — "load this phrase at time x" / "highlight the fourth note, show its stats" / "bass clarinet low C at that same time" → gesture appears. Score data model must be addressable in musical terms (note ordinals, times, parts) from day one.

### The loop (the actual product — subsystems exist to make each pass cheaper)

Two entrances: **A sound-first** (sandbox → object) · **B score-first** (straight to placing).

1. **Interrogate** — AI examines instrument → capabilities into knowledge base *(feeds both)*
2. **Play** *(A only)* — build the motive in the sandbox; parameters captured, not just heard
3. **Design** — graphic object per protocol; from entrance A, derived from the sandbox result
4. **Tool** — UI to mouse it in
5. **Wire** — object → MIDI → Reaper setup; placing the object IS the connection
6. **Compose** — draw, hear, iterate; returning to 2 stays cheap

Technique #10 should cost a fraction of technique #1.

## 2. Conversion (composer data → performance score) — `todo`

To be broken down after chunk 1 takes shape. Piece #2 made big headway here; revise, don't rewrite.
*Why last:* conversion pain is usually a symptom of upstream data not carrying what downstream needs — fix chunk 1's output first.

## 3. Performance interface — `todo`

Minor modifications only; carried forward from piece #2.
*Why:* proven in performance; its data format effectively constrains what chunks 1–2 must produce.

---

## Standing mandates (apply to everything)

- **M1 — Re-examine, don't re-implement.** Every ported workflow gets the question: what's the fewest manual steps between intention and hearing it? (see D4)
- **M2 — Engine vs. palette seam.** Architecture piece-agnostic; palette (this piece's objects, instruments, techniques) is piece-specific data. Keep the seam clean; don't build the abstraction now. (see D3)
- **M3 — Notation-first identity.** Every sound/technique/motive's true identity is its performer-facing musical description ("Harp Palm Strike · which strings · how hard"); notation is the primary rendering, MIDI/sample playback is the demo rendering. Identity → MIDI only; never infer notation from MIDI parameters. Hacks to approximate a sound live in the rendering recipe, never in the identity. (see D7 — reverses piece #1/#2 practice)

## Parking lot

- Premiere / deadline date — sets how much shoring-up happens before composing starts.
- Verify chunk 3 assumption: same performance model as piece #2 (synced screens/tablets)?
- Shared library across pieces — deliberately deferred; let it emerge from this third data point.
- PM-kit-as-template for piece #4 — extract after this rhythm is proven, not before.
