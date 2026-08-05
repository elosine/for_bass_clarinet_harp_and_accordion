// Proto rendering-recipe config (seeds instrument_map v3 — PLAN S2.2, D7).
// Model: INSTRUMENT (one rack track / UVI instance / loopMIDI port) → TECHNIQUES
// (parts in that instance; slot number = receive channel, per SAMPLER_QUIRKS.md).
// Routing is a BACKEND concern: the UI shows labels only.
//
// RACK SETUP (one-time, saved in instrument_rack.rpp): load each preset into the
// UVI slot matching its channel below, IN THIS ORDER. Slot label must be its fixed
// channel (A1, A2, …), NOT A*/omni — omni slots swallow every channel.
const INSTRUMENTS = {
  harp_si2: {
    label: "Harp (IRCAM SI2)",
    port: "Harp",           // loopMIDI port, exact name (case-sensitive)
    rangeLow: 23,           // concert harp compass B0–G#7; sampled zone may be narrower
    rangeHigh: 104,
    techniques: [
      { key: "ord",        label: "Ordinario",             channel: 1  },
      { key: "ord_soft",   label: "Ordinario Soft",        channel: 2  },
      { key: "ord_hard",   label: "Ordinario Hard",        channel: 3  },
      { key: "damped",     label: "Damped",                channel: 4  },
      { key: "bisb",       label: "Bisbigliando",          channel: 5  },
      { key: "bisb_stick", label: "Bisbigliando w/ Stick", channel: 6  },
      // Live-real range: metal strings ∩ pedal-connected ≈ E1–G1 (28–31); bottom C/D
      // strings usually have no pedal discs (harpist-verify). Sandbox allows B0–G1
      // (manual's boundary) pending that verification. Patch itself sounds everywhere
      // via Expand Range (synthetic, D7 tag) — true samples ≈ UVI D#2–F3 zone.
      { key: "buzz_pedal", label: "Buzzing Pedal",         channel: 7, rangeLow: 23, rangeHigh: 31 },
      { key: "gliss_ks",   label: "Glissando Modes KS",    channel: 8  },
      { key: "harm_fing",  label: "Harmonic Fingering",    channel: 9  },
      // White zone observed 2026-08-04: UVI C3-C6 = MIDI 60-96; tan = Expand transposition
      { key: "harm_wood",  label: "Harmonic in Wood",      channel: 10, rangeLow: 60, rangeHigh: 96 },
      { key: "near_board", label: "Near the Board",        channel: 11 },
      { key: "near_pegs",  label: "Near the Pegs",         channel: 12 },
      { key: "pizz_bartok",label: "Pizzicato Bartok",      channel: 13 },
      { key: "scratch",    label: "Scratch w/ Nail",       channel: 14 },
      // True mapped zone observed 2026-08-04: UVI D1-F2 = MIDI 38-53 (sci D2-F3); no expand
      { key: "tap_stick",  label: "Tap w/ Stick",          channel: 15, rangeLow: 38, rangeHigh: 53 },
      { key: "xylophonic", label: "Xylophonic",            channel: 16 },
    ],
  },

  accordion_si2: {
    label: "Accordion (IRCAM SI2)",
    port: "Accordion",   // loopMIDI port — create + enable in Reaper before use (R4)
    rangeLow: 36,        // provisional; true zones observed during survey
    rangeHigh: 96,
    techniques: [
      { key: "ord",        label: "Ordinario",              channel: 1  },
      { key: "staccato",   label: "Staccato",               channel: 2  },
      { key: "fortepiano", label: "Fortepiano",             channel: 3  },
      { key: "registers",  label: "Ordinario Registers",    channel: 4  },
      { key: "reg_comb1",  label: "Register Combinaison 1", channel: 5  },
      { key: "reg_comb2",  label: "Register Combinaison 2", channel: 6  },
      { key: "backwards",  label: "Backwards",              channel: 7  },
      { key: "fx",         label: "FX",                     channel: 8  },
      { key: "cresc_decr", label: "Cresc & Decresc",        channel: 9  },
      { key: "ks_wheel",   label: "Classical KS (Wheel)",   channel: 10 },
    ],
  },
};

// Hardware capture input. Keystation 88 MK3 exposes "Keystation 88 MK3" (keys) and
// "MIDIIN2 (Keystation 88 MK3)" (DAW control — never bind). See SAMPLER_QUIRKS.md.
const INPUT_MATCH = /keystation/i;
const INPUT_EXCLUDE = /^MIDIIN\d+/i;
