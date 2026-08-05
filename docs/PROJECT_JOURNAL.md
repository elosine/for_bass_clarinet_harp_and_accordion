# Project Journal — for bass clarinet, harp, and accordion

> One file. Seven sections. Everything important lives here.
> §2 is read at every session start — keep it ~40 lines max; trim old sessions to one line each.

---

## §1 Quick-Start

- Repo is pre-code (PM kit only, as of 2026-08-01). The architecture map grows here as code lands.
- The system in one line, the three chunks, and the full concept map: see `docs/PLAN.md`.
- Prior pieces (read-only reference): #1 `string_quartet_no1-composer`, #2 `composition_for_two_pianos_and_two_percussion`.

### Map of piece #2 (0c survey, 2026-08-01) — what chunk 1 inherits

- **Composer app:** `public/composer.html` — **621 KB single file**. Timeline (zones, markers, curves, sets, cells), property panels, piano-keyboard entry, cell builder, 8 MIDI models (ostinato, oneShot, A-R, ASR, flocking, imitation, threeBody, SATP). Documented pain: adding one MIDI model = **7 touch points** in this one file (`docs/MIDI_PREVIEW_ZONE.md`).
- **Composer data (the seam):** `composer_data/FinalComposerScoreDraft.json` (4.7 MB) — source of truth chunk 2's pipeline consumes, object-by-object.
- **Instrument knowledge:** `docs/instrument_map.json` — 143 KB, **82 instruments**, articulations, routing, **ccMappings, patternRules**; runtime API `InstrumentRegistry` (list/resolve/getRouting/getCapabilities). `docs/INSTRUMENT_MAP_PLAN.md` = six scenarios ≈ this piece's stated vision, phases partially built.
- **Reaper today:** live = Web MIDI → **loopMIDI virtual ports** (exact-name matching); batch = `scripts/export_reaper_midi.js` → .mid folder + manifest → `reaper_scripts/import_midi_by_track_name.lua` (replace-in-place by track name). **No programmatic track/FX/CC setup — that's the 1b gap.**
- **Cell engine:** three-axis realization (`realizeCellEvents`: phrasing/repeat/ordering + speed/volume behavior curves) integrated into all 8 generators. Algorithms solid; UI workflow was the clunk.
- **Conversion (chunk 2):** 7-stage pipeline (classify→translate→layout→size→render→emit→route) in `scripts/score_tools/` + `tools/notation_studio/engine/`; Coords placement system; STANDARDS/GLYPH_REGISTRY discipline. Docs: `THREE_SCORES.md` (read first — three-scores paradigm), `AI_ONBOARDING.md`.
- **Performance (chunk 3):** subtractive build from workshop substrate (`public/index.html`, 2.2 MB) → `builds/performance/` on :3001; keep-list in piece #2's `AI_ONBOARDING.md` convention 10.
- **Lineage:** gen 1 = workshop did everything (SQ1); gen 2 = composer.html split out but became its own monolith; gen 3 (this piece) = modular rebuild.

---

## §2 Resume Here

**Last session:** *2026-08-05 (session 4, Claude Code)* — **Bass clarinet survey opened.**
- R5 rack built (track "Bass Clarinet XS", port `BassCl`, Kontakt 8 + elastic `Bass Clarinet.nki`, omni). XC0a first-contact ✓.
- **XC1 SEAM TEST PASSED**: preset #1 MW crossfade seamless — "like an actual player doing a crescendo." **Standing recipe: sustained BC dynamics = CC1 curves** (re-check per MW preset as adopted). Xsample crossfade > UVI's.
- Research haul: 2 more Xsample PDFs archived+extracted; **full Controller Overview mined** (CC#0 function space, CC#82 RR control, **CC#68/24 legato slur→gliss depth**, phrase-mode aleatoric engine, ¼-st bend config, pure tunings); VI-Control sweep (LPF-as-diminuendo tip; developer active on VI-C); factory preset list w/ zero-based CC#0 values confirmed.
- Composer MO sharpened (COMPOSER_LOG 2026-08-05): gesture tools need **continuous intensity axes per sound** (flutter depth, multiphonic crunch, accent strength) drawable as curves. Survey style: exhaustive for first few presets, less time on routine confirmations.

*Session 1–3 (2026-08-01…04), one line each:* S1: PM kit + plan + prior-repo survey + spine adopted (Claude Code). S2: rack R1–R3 + SB0–SB1 + monitoring saga + quirks ledger + Ordinario CC battery (Claude Code). S3: G1 gesture capture (Keystation bugs fixed) + SB3 Explorer + full 16-technique harp survey + full accordion survey + phrases/motives pipeline (Claude Code).

**Next up — CLEAR RESTART POINT:** **XC-F0, the flutter series** — exhaustive protocol fully spec'd in `XSAMPLE_BASSCL_map.md` §6b (range scan → velocity → full CC sweep → #16 velocity variant → **#15 morph test** → #29 inverted → legato/gliss taste → optional Info-Pane peek). First action on resume: post the XC-F0 rundown + listening guide, composer says `'go'`. After flutter: **multiphonics full inventory** (composer priority #1), then remaining presets, exhaustive style for the first few.
**Mid-goal:** all three instruments surveyed → S2.2 schema draft with three libraries of evidence (the switching abstraction's three cases: UVI channels · keyswitches · Xsample CC#0).

**Open at session end:** —

**Standing context (compressed):** Harp survey COMPLETE (`SI2_harp_presets.md` §5b–d) · Accordion survey COMPLETE (`SI2_accordion_map.md` §5) · BC seam test PASSED — CC1-curve recipe standing. Test protocol: rundown + listening guide → `'go'` → 3 s lead-in → sound; lightning rounds may auto-fire after verdicts. Gestural tools deferred to composition time (continuous-intensity-axes note in COMPOSER_LOG); **standing AI watch** for architecture-before-composition (PLAN watch list). Sandbox: Explorer + phrases/motives working; capture strip on hold (taxonomy). Quirks live in SAMPLER_QUIRKS.md.

**Open questions:**
- **0d** — per-chunk reuse: fresh vs copy-forward (likely fresh for chunk 1, copy for chunk 3).
- **0b** — composer's pain list from piece #2; drops in any time.
- Premiere / deadline date not yet stated.
- Chunk 3 assumption unverified: same performance model as piece #2 (synced screens)?
- Composer meta-note: planning should keep getting more broken-down and human-centric — refine continuously.

**Blockers:** none.

---

## §3 Principles

*(Lessons learned — mistakes never to repeat. Numbered, append-only.)*

1. **Check Reaper input monitoring before blaming the instrument.** *(2026-08-02)* Armed + input-assigned + yellow MIDI flicker ≠ monitored: with the monitor toggle off, live input never reaches the FX chain and every plugin setting looks correct while producing silence. Speaker icon next to record-arm; `.rpp` `REC` line 3rd field. Full quirks: `docs/SAMPLER_QUIRKS.md`.
2. **When a working reference exists, diff the files — don't iterate guesses.** *(2026-08-02)* The silent-rack bug survived ~10 speculative fixes; it fell in one minute of comparing the working track's `.rpp` chunk against the broken one. Plain-text project files (D6) make this cheap — use it early, not last.

---

## §4 Decisions

*(Append-only: ID, date, decision, why, what was rejected.)*

- **D1** *(2026-08-01)* — **Adopt piece #2's session-protocol structure, trimmed; add `PLAN.md` with stable IDs.** *Why:* the session skills are already wired to it and it's proven over ~57 sessions; the stable-ID plan is the one piece it lacked. *Rejected:* a from-scratch 4-file kit — its DECISIONS.md and ARCHITECTURE.md folded into this journal's §4/§1 per the one-file principle.
- **D2** *(2026-08-01)* — **The Sandbox is the front door for new sounds.** What's built there seeds both graphic-object design and MIDI generation. *Why:* piece #2's cell builder split one creative act into three manual acts (build cell → configure object → wire playback); the sandbox collapses them into one act seen from three angles.
- **D3** *(2026-08-01)* — **Engine vs. palette separation is a standing mandate, not a project.** Architecture piece-agnostic; palette piece-specific data. *Why:* future openness for piece #4 without building abstractions from too few data points now.
- **D4** *(2026-08-01)* — **Every ported workflow is re-examined, not re-implemented.** Test: fewest manual steps between intention and hearing it. *Why:* piece #2 accepted inefficiencies to keep composing; this piece addresses them.
- **D5** *(2026-08-01)* — **Minimal-reading protocol.** Orient from docs; no unprompted codebase scans; name the question before reading; high bar for subagents/background work. *Why:* session starts grew expensive as piece #2's repo grew; docs-first orientation caps that cost.
- **D6** *(2026-08-01)* — **Reaper session lives in the repo, committed.** `reaper/instrument_rack.rpp`: instruments-only rack (no timeline audio), addressed by live MIDI from the composer app. Media/renders/auto-backups gitignored. Backup layers: Reaper auto-save (local crash recovery) → git commits at chunk wraps → asked pushes. *Why:* `.rpp` is plain text — versionable, diffable, and AI-readable/writable (a session-inspection channel that predates any ReaScript bridge). *Deferred:* self-made samples (probably small enough for plain git; LFS available) and audio-render storage — decided when they arrive.
- **D7** *(2026-08-01)* — **Notation-first identity: the true identity of every sound/technique/motive is its performer-facing musical description; MIDI is a rendering, never the reference.** An identity record reads like *"Harp Palm Strike · which strings · how hard"* — parameters in musical vocabulary (dynamics as `pp`/`ff`, not velocities). Two projections render it: **notation** (primary — what the performer reads) and **MIDI/sample realization** (demo/audition — including any CC tricks or hacks needed to approximate the live sound; hacks live in the rendering recipe, never in the identity). Translation flows identity → MIDI only. *Why:* pieces #1–2 used MIDI as the database and inferred notation from it (e.g. velocity → dynamic marks) — backwards; the demo approximation was steering the musical truth. *Reversed from:* piece #1/#2 practice. *Implication:* instrument-map entries (S2.2 schema) pair technique identities with notation hooks AND per-bank realization recipes; chunk-2 conversion reads identities directly instead of inferring from MIDI.

---

## §5 Playbooks

*(Compact how-to cards per work mode: What / Process / References / Gotchas. Added as modes emerge — say "this feels like a new area, let's make a playbook.")*

### §5.1 Sound Research (mapping a sample library)

**What:** Getting full, trusted knowledge of a sample instrument into `instrument_map` — articulations, keyswitches, CCs, time-varying control, quirks, hacks.

**Escalation ladder** (cheap → expensive; stop as soon as the question is answered):
1. **Official manual / patch list** — raw PDFs live in `docs/manuals/`; distilled knowledge goes in the map, never only in chat.
2. **Forum & thread sweep** — VI-Control (the hub for sample-library detective work), Reddit, KVR. AI does this solo via web search/fetch.
3. **YouTube transcript** — captions pulled as text (yt-dlp) and mined for method descriptions.
4. **Frame-level video analysis** — AI can't watch video but CAN read still frames as images: download video → extract frames (ffmpeg, every N sec or at flagged timestamps) → AI reads screen content (CC lanes, knob labels, channel numbers) cross-referenced against the transcript. This is the piece-#2 "string-technique detective work," systematized.
5. **Hands-on probing** — instrument loaded in Reaper: enumerate host-exposed parameters via ReaScript (works for Kontakt & UVI); send MIDI probes sweeping CCs/keyswitches; composer's ears verify (S2.4 pattern). Ground truth.
6. **Hacks/fudges** — when a sound needs a workaround, the workaround gets recorded in the map entry itself, not in memory.

**CC/control probe protocol** (per patch; documentation runs concurrently — added 2026-08-03):
1. **Enumerate candidates** from docs, cheapest first: library manual (global + per-patch sections) · library-specific conventions (e.g. Xsample: CC#0 = articulation select, MW woven into dynamics per-preset, top-of-keyboard layer switches) · standard set always tested: velocity, CC1, CC7, CC11, CC64, pitch bend, aftertouch, CC120/123.
2. **Completeness check without rabbit-holing (UVI et al.):** the host's parameter list for the plugin instance (Reaper [Param] button / ReaScript enumeration) lists every host-exposed control — if a control exists but no CC is documented, it appears there and is MIDI-learnable. That bounds "did we miss a channel?" definitively.
3. **Scripted probe battery** — AI sends (hold-note + CC ramp / discrete values / bend sweep / cut messages), composer listens; one-word verdicts: nothing / volume / timbre / mode-switch / artifact.
4. **Record** in the instrument's deep-map doc as a per-patch "responds to" table; timbre-relevant findings → TIMBRE_VOCAB. **Every finding carries a scope tag**: `engine` (identical across the library — presumed from first patch, cheaply confirmed per patch), `group` (a patch family shares it), `patch` (bespoke to one patch). Rendering recipes read the scope: engine controls get wired once; group/patch controls per technique.
5. **Escalate to community research (ladder rungs 2–4) only when** a patch under-delivers vs. its live technique. Hacks/combinations are sound-driven, not survey-driven: hunted when the composer wants a specific sound (their stated MO), not cataloged up front.

**Limitations:** AI cannot hear audio or watch motion video; audio verification is composer's ears (or scripted spectral comparison in extreme cases). `.nki`/`.ufs` internals are proprietary — knowledge comes from docs, UI, host-exposed parameters, and probing, not file parsing.

**Gotchas:** *(accumulates)*

---

## §6 Done

- 2026-08-01 — **0a** PM kit instantiated.
- 2026-08-01 — **0c** orientation survey of prior repos (map → §1).
- 2026-08-01 — **S2.1** source inventory: all three libraries installed & verified, manuals in `docs/manuals/`.
- 2026-08-01 — **R1–R2** Reaper rack created in-repo with backup layers configured (D6).

---

## §7 Human Notes

*(The composer's own to-dos and reminders. Reviewed at every session end.)*

**Active:**

**Completed:**
