# Project Journal — for bass clarinet, harp, and accordion

> One file. Seven sections. Everything important lives here.
> §2 is read at every session start — keep it ~40 lines max; trim old sessions to one line each.

---

## §1 Quick-Start

- Repo is pre-code (PM kit only, as of 2026-08-01). The architecture map grows here as code lands.
- The system in one line, the three chunks, and the full concept map: see `docs/PLAN.md`.
- Prior pieces (read-only reference): #1 `string_quartet_no1-composer`, #2 `composition_for_two_pianos_and_two_percussion`.

---

## §2 Resume Here

**Last session:** *2026-08-01 (session 1, Claude Code)* —
- Framed the big revision: three chunks (Composer rewrite / Conversion revision / Performance minor mods).
- Built the Composer concept map: 5 subsystems + two-entrance loop → now permanent in `PLAN.md`.
- Instantiated the PM kit (PLAN, this journal, HOW_WE_WORK, SESSION_PROTOCOL, CLAUDE.md), adapted from piece #2's proven protocol so `/session-start` & `/session-end` work unchanged.

**Next up:** **0b** — composer's pain list from piece #2 (from memory, no code reading). Then **0c** orientation pass over the prior repos.

**Open at session end:** —

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

---

## §5 Playbooks

*(Compact how-to cards per work mode: What / Process / References / Gotchas. Added as modes emerge — say "this feels like a new area, let's make a playbook.")*

---

## §6 Done

- 2026-08-01 — **0a** PM kit instantiated.

---

## §7 Human Notes

*(The composer's own to-dos and reminders. Reviewed at every session end.)*

**Active:**

**Completed:**
