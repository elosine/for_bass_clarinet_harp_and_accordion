// Proto rendering-recipe config — the embryo of instrument_map v3 (PLAN S2.2, D7).
// Routing (port/channel) is a BACKEND concern: the UI only ever shows instrument
// labels; picking an instrument resolves everything else from here.
const INSTRUMENTS = {
  harp_si2: {
    label: "Harp — IRCAM SI2 (Ordinario)",
    port: "Harp",     // loopMIDI port, exact name (case-sensitive — SAMPLER_QUIRKS.md)
    channel: 1,       // UVI part slot A1 (currently A*/omni, so channel is forgiving)
    // Playable range in MIDI numbers. PROVISIONAL — S2.3 locks this from manual + probing.
    // Concert harp truth: ~B0 (23) to G#7 (104). Silent edge keys = mapped-zone truth.
    rangeLow: 24,     // C1 scientific
    rangeHigh: 103,   // G7 scientific
  },
};
