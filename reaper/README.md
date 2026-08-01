# Reaper — instrument rack

One session: **`instrument_rack.rpp`** — hosts the piece's sample instruments
(UVI Workstation: IRCAM Solo Instruments 2 harp & accordion; Kontakt 8: Xsample
bass clarinet), addressed via **live MIDI** (loopMIDI) from the composer app.
No timeline audio — Reaper acts as the sound-module rack. The `.rpp` is plain
text: versioned in git, readable/writable by AI.

- **Committed:** the `.rpp`, this README.
- **Ignored:** `*.rpp-bak` (Reaper auto-backups — crash recovery), `*.reapeaks`, `media/`.
- **Backups:** Reaper auto-save (local) → git commits at chunk wraps → git push (always asked).

Decision: journal §4 **D6**. Deferred there too: self-made samples (likely small
enough for plain git; LFS available if they grow — sample-player setup gets its
own walkthrough if/when), and audio-render storage (decided when we render).
