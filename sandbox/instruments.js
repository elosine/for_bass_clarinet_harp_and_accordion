// Proto rendering-recipe config (seeds instrument_map v3 — PLAN S2.2, D7).
// Routing is a BACKEND concern: the UI only ever shows instrument labels.
const INSTRUMENTS = {
  harp_si2_ordinario: {
    label: "Harp Ordinario",
    port: "Harp",     // loopMIDI port, exact name (case-sensitive — SAMPLER_QUIRKS.md)
    channel: 1,       // UVI part slot A1 (currently A*/omni)
    // Concert harp compass B0–G#7 (MIDI 23–104). SI2's sampled zone may be narrower —
    // silent edge keys = mapped-zone truth (open probe #1 in the deep map).
    rangeLow: 23,
    rangeHigh: 104,
  },
};

// Hardware capture input (G1). Matched against Web MIDI input device names.
// Keystation 61 now; Keystation 88 soon — the pattern covers both.
const INPUT_MATCH = /keystation/i;
