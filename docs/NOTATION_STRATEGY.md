# Notation Strategy — the rhythmic-notation spectrum

> Composer's thinking, dictated 2026-08-03, lightly organized, voice preserved. This is
> the seed document for performance-score notation decisions (chunks 2–3). AI weighs in
> when invited — for now this captures the thinking. Related: Gesture Loop's future
> timing→notated-rhythm layer (PLAN, S4); first test case at bottom.

---

## The spectrum

### End A — Complexist traditional (à la Ferneyhough)

Different time signatures and barring, complex tuplets, sometimes several nested. Groups
like the Arditti Quartet have developed a performance approach that fluidly interprets
this — **the notation practice and performance practice are somewhat interlocked**.

**Cons:**
- Takes a lot of work; specialized skills (though increasingly standard)
- **It is a counting-based system** — the performer must get very good at mathematically
  complex counting. Even though the music doesn't *sound* pulsed, from the performer's
  perspective it lives in a pulse grid. It changes the way you play things.

**Pros:**
- **Fine "digital" resolution of detail, mostly of timbre**: precise rhythmic units to
  which different timbres can be applied per unit — e.g. a set of rapid partials, each
  articulated with a slightly different accent, bowing technique, bow pressure
- **Phrasing tools**: grouping by bar, by time signature, or by beams — phrasing becomes
  much easier
- **Pulse-grid gravity**: downbeats can be felt; "just before the downbeat" vs "a little
  less before" are meaningful, playable distinctions. Notes take on a different character
  played inside a grid vs outside one. (Not something to do away with — an advantage to
  keep available.)

### End B — Scrolling cursor + pixel-resolution marks (composer's experiments; Cage-adjacent)

Scrolling cursor; one-pixel-wide lines indicating onsets — pixel resolution supplies the
rhythmic precision. **Reactive, not counted**: the performer isn't locked into a pulse.

**Pros:**
- No counting; no complex-math mental load
- Pixel-fine timing resolution
- **The mechanics (animated cursor) make continuous tempo phenomena easy**: accelerations,
  decelerations, rapid tempo changes — "delta changes" that are hard to represent in
  traditional notation — with mathematically complex articulations on top
- Tried mitigation that partially restores grid-gravity: **visual beat grid + lines
  placed just-before/just-after beats, toggleable on/off** — a grid to react to

**Cons (largely the mirror image):**
- Phrasing and grouping of notes are hard
- **Performers dislike the scrolling metaphor** — a karaoke / follow-the-bouncing-ball
  feel; hard to locate a performance practice or strategy in it (vs. Arditti↔Ferneyhough
  interlock)
- Loses moment-by-moment crafting of timbre/articulation detail

## Midpoints tried or considered

1. **Proportional traditional** — beams/stems/noteheads, but spaced proportionally in
   time; manipulations possible within that.
2. **Mixed-mode score** — traditional notation passages intermixed with animated-cursor /
   bouncing-ball / onset-line gestures; **the cursor stops during a traditional passage
   and resumes after it**.
3. **Performer-optional scroll** — for this piece: sections of traditional notation where
   the performer can toggle the scroll off (it disappears at the passage, reappears at
   the timeline's presumed end of the passage).

## Design goal

Not one idealized solution — **a broad range of solutions across the spectrum**, with the
tools (animated cursors, proportional notation, onset lines, toggleable grids …) able to
serve each strategy. Push the system further than the previous pieces.

## The per-phrase decision (framework to develop)

When a phrase moves from sandbox to performance score, decide per phrase: traditional /
hybrid / graphic? **What characteristics of a phrase lend it to one approach over
another?** (Density? Timbral per-note detail? Tempo fluidity? Grid-relatedness?)

**Test case #1:** `sandbox/motives/first-capture.json` — the first saved harp phrase.
When it gets inserted into a performance score, run this decision explicitly and start
the framework from it.
