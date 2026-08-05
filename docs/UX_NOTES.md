# UX / Look-and-Feel Notes

> **Methodology:** capture friction as it happens, fix it in focused sessions later —
> never polish in the moment. Composer says **"UX note: …"** in chat at any time; AI
> appends it here with date + context. Periodically we run a dedicated usability pass
> over the open list. Guiding principle: the sandbox (and eventually the composer app)
> should be intuitive with **no unnecessary decisions** in the UI.

## Open

- *2026-08-03 · sandbox G1 · composer* — **Velocity color scheme for gesture blocks** ("at
  some point"): color each lane block by velocity — typical scheme, or v-band colors
  (v1/v2/v3) once bands are per-instrument config.

- *2026-08-02 · sandbox* — **Capture strip (SB2):** band buttons (v1/v2/v3 per current
  instrument) + free-text comment box + ENTER-to-save → JSON; feeds TIMBRE_VOCAB.md.
- *2026-08-02 · sandbox* — **Note-length box is a stopgap.** Replace with a low-decision
  control: presets (short / medium / long), or contextual inference from the technique
  being probed. Slated for redaction.
- *2026-08-02 · standing rule* — **Routing must never surface in the UI.** Port/channel
  resolve in the background from the instrument choice (`sandbox/instruments.js`).

## Resolved

- *2026-08-02 (G1 rebuild)* — Title → "Virtual Instrument Sandbox" · dropdown → "Harp
  Ordinario" · all explanatory hint text redacted · velocity direct type-in shipped.
