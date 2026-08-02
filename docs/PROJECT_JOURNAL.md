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

**Last session:** *2026-08-01 (session 1, Claude Code)* —
- Framed the revision (3 chunks); Composer concept map + PM kit built (adapted from piece #2's protocol); 0c survey of prior repos → map in §1.
- Spine S1–S8 adopted, **S2 (Instrument map v3) first, harp first**. S2.1 (source inventory) done: IRCAM SI2 (harp+accordion) + PP2 installed (`C:\Program Files\UVISoundBanks\`); Xsample bass clarinet installed to `C:\Users\jwloy\Documents\Xsample Sample Library\Xsample_Collection\` (Kontakt 8); all three manuals in `docs/manuals/`. PP2 entries in piece #2's map = schema template for S2.2. `reaperAutomation` repo noted as S5 context (OSC-only; bridge will need ReaScript).
- **D6 (Reaper session storage & backups)** decided & built: `reaper/instrument_rack.rpp` in repo; rack walkthrough **R1 (create/save) ✅, R2 (auto-save prefs) ✅**.
- Workflow rules added to HOW_WE_WORK: go/no-go before long processes · cite IDs with names · name-the-need before disk searches. §5.1 Sound Research playbook written (research escalation ladder, incl. video-frame analysis method).

**Next up:** **R3 (harp track)** — composer was mid-step, instructions already given: TRACK → [Insert virtual instrument on new track...] → UVI Workstation VST3 (answer **No** to multi-out) → Soundbanks → IRCAM Solo Instruments 2 → **WIN+SHIFT+S the harp patch tree and paste to AI** → load keyswitch harp, confirm sound, name track `'Harp SI2'`, CTRL+S. Then R4 accordion · R5 bass clarinet · R6 loopMIDI wiring. After the rack: S2.2 (schema draft, PP2 entries + SI2 manual harp chapter).
**Mid-goal:** playable rack — three named sounding tracks reachable via loopMIDI, committed. **S2 gate:** harp capability queries answered from the map, audition-verified.

**Open at session end:** —

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

**Composer facilitates:** approving yt-dlp/ffmpeg installs (or downloading videos manually to a research folder), screenshots of plugin UIs, ears for audition passes.

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
