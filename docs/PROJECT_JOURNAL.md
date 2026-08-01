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
- Framed the big revision: three chunks (Composer rewrite / Conversion revision / Performance minor mods).
- Built the Composer concept map: 5 subsystems + two-entrance loop → now permanent in `PLAN.md`.
- Instantiated the PM kit (PLAN, this journal, HOW_WE_WORK, SESSION_PROTOCOL, CLAUDE.md), adapted from piece #2's proven protocol so `/session-start` & `/session-end` work unchanged.

**Next up:** **S2** — instrument map v3, harp first. S2.1 findings (2026-08-01):
- **IRCAM Solo Instruments 2** (UVI) — owned, installed: `C:\Program Files\UVISoundBanks\IRCAM Solo Instruments 2.ufs` (9.9 GB). Covers **harp AND accordion**.
- **Bass clarinet = Xsample** (license pending, ~1–2 days); host **Kontakt 8** (installed, VST3). UVI Workstation VST3 also installed.
- UVI precedent in piece #2's map: `muted_piano`/`harmonics_piano` = **IRCAM Prepared Piano 2** entries (also installed) → schema/quirks template for S2.2. Composer recalls per-bank quirks + occasional hacks to reach sounds.
- No manuals on disk → next sub-step: download IRCAM SI2 manual/patch list into `docs/manuals/`.
- `C:\Users\jwloy\GitHub\reaperAutomation` = voice→OSC transport-control project (Claude intent parser, phone PWA). Context for S5/1b; OSC alone can't do track/instrument setup — bridge will need ReaScript.
- Later (S2 tail or parallel): pure instrumental research on harp/accordion extended techniques, beyond what the banks offer.
0b (pain list) still open, drops in any time.

**Open at session end:** Spine S1–S8 adopted, S2 moved first (composer's call). Planning style note from composer: break plans down further and keep them human-centric — refine gradually, no big changes yet.

**Open questions:**
- **0d** — per-chunk reuse: fresh vs copy-forward (likely fresh for chunk 1, copy for chunk 3).
- Premiere / deadline date not yet stated.
- Chunk 3 assumption unverified: same performance model as piece #2 (synced screens)?

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

---

## §7 Human Notes

*(The composer's own to-dos and reminders. Reviewed at every session end.)*

**Active:**

**Completed:**
