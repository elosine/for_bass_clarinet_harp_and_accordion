# UX / Look-and-Feel Notes

> **Methodology:** capture friction as it happens, fix it in focused sessions later —
> never polish in the moment. Composer says **"UX note: …"** in chat at any time; AI
> appends it here with date + context. Periodically we run a dedicated usability pass
> over the open list. Guiding principle: the sandbox (and eventually the composer app)
> should be intuitive with **no unnecessary decisions** in the UI.

## Open

- *2026-08-02 · sandbox v0* — **Velocity: allow direct type-in** alongside the spinner (deferred, composer).
- *2026-08-02 · sandbox v0* — **Capture strip for next rebuild:** band buttons (v1/v2/v3 per current instrument) + free-text comment box + ENTER-to-save → JSON; feeds TIMBRE_VOCAB.md.
- *2026-08-02 · sandbox v0 · composer, for next rebuild (approved, not urgent):*
  - Title → **"Virtual Instrument Sandbox"**
  - Dropdown label → just **"Harp Ordinario"**
  - **Redact all explanatory hint text**: the routing-resolves-in-background note, the
    click-a-key/SPACE hint line, the "stopgap — to be redacted" tag. UI carries no
    self-commentary; that lives in docs.
  - Look & feel otherwise approved for now.

- *2026-08-02 · sandbox v0* — **Note-length box is a stopgap.** Replace with a
  low-decision control: presets (short / medium / long), or contextual inference from
  the technique being probed. Slated for redaction.
- *2026-08-02 · sandbox v0* — **Routing must never surface in the UI.** Port/channel
  resolve in the background from the instrument choice (`sandbox/instruments.js`).
  Standing rule for everything built after this.

## Resolved

*(moves here with date + what shipped)*
