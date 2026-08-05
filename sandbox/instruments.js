// Proto rendering-recipe config (seeds instrument_map v3 — PLAN S2.2, D7).
// Routing is a BACKEND concern: the UI only ever shows instrument labels.
const INSTRUMENTS = {
  // Multi-part rack: slot number = receive channel (SAMPLER_QUIRKS.md). A1 must be a
  // FIXED channel (not A*/omni) once siblings occupy A2/A3, or A1 swallows their notes.
  harp_si2_ordinario: {
    label: "Harp Ordinario",
    port: "Harp",     // loopMIDI port, exact name (case-sensitive — SAMPLER_QUIRKS.md)
    channel: 1,       // UVI part slot A1
    // Concert harp compass B0–G#7 (MIDI 23–104). SI2's sampled zone may be narrower —
    // silent edge keys = mapped-zone truth (open probe #1 in the deep map).
    rangeLow: 23,
    rangeHigh: 104,
  },
  harp_si2_ordinario_soft: {
    label: "Harp Ordinario Soft",
    port: "Harp",
    channel: 2,       // UVI part slot A2
    rangeLow: 23,
    rangeHigh: 104,
  },
  harp_si2_ordinario_hard: {
    label: "Harp Ordinario Hard",
    port: "Harp",
    channel: 3,       // UVI part slot A3
    rangeLow: 23,
    rangeHigh: 104,
  },
};

// Hardware capture input (G1). Matched against Web MIDI input device names.
// Keystation 88 MK3 exposes TWO ports: "Keystation 88 MK3" (the keys) and
// "MIDIIN2 (Keystation 88 MK3)" (DAW-control — no notes). Exclude the latter.
const INPUT_MATCH = /keystation/i;
const INPUT_EXCLUDE = /^MIDIIN\d+/i;
