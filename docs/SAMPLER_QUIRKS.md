# Sampler & Reaper Quirks Ledger

> Hard-won facts about hosting the sample instruments. Interim home — entries migrate
> into `instrument_map` rendering recipes (S2.2/S2.3) as instruments get formally mapped.
> Born 2026-08-02 from the silent-rack debugging session.

## Reaper (host-side)

- **Input monitoring is the #1 silent killer.** A track can be record-armed, input-assigned,
  and showing MIDI activity (yellow meter flicker) while **input monitoring is OFF** — live
  input never reaches the FX chain, the plugin stays deaf, every plugin setting looks correct.
  **Check the speaker icon next to record-arm FIRST.** In the `.rpp`: `REC` line, 3rd field
  (`1` = monitoring on, `0` = off). *(Cost us a full session, 2026-08-02.)*
- **Channel filters stack and can cancel.** Reaper's *Source channel* filter + *Map input to
  channel* + plugin-side channel settings combine. When diagnosing: Source = **All**, Map =
  **off**, plugin = **omni**. Add restrictions only deliberately, one at a time.
- New loopMIDI ports appear only after **Preferences → Audio → MIDI Devices → [Reset all MIDI
  devices]**, then right-click the port → **Enable input**.
- Live MIDI input follows the **focused project tab**.
- **Hardware MIDI inputs are single-client on Windows** — exactly ONE app may open the
  Keystation at a time. Reaper auto-enables new MIDI devices by default → it silently owns
  new hardware and starves Chrome/Web MIDI (symptoms: stuck notes, growing latency, frozen
  tab, browser crash — 2026-08-03). Keep hardware inputs DISABLED in Reaper (sandbox reaches
  Reaper via loopMIDI); uncheck Reaper's auto-enable option. loopMIDI virtual ports are
  multi-client and exempt.
- **Keystation 88 MK3 exposes two ports**: "Keystation 88 MK3" (keys) and "MIDIIN2 (…)"
  (DAW-control — Mackie-style *note messages* on random-looking pitches; never bind it for
  capture).

## UVI Workstation

- **The part's channel is its slot label: `A1`–`A16` = fixed receive channel; `A*` = omni.**
  Cycle with the `< >` arrows beside the label. Parts list lives in **Multi Mode**
  (hamburger ≡ → *Switch To Multi Mode* → SETTINGS tab). There is **no omni dropdown** —
  the label IS the setting.
- **Freshly loaded parts default to `A1` (channel 1 only).** The "it worked in the old
  project" trap: old projects carry `A*` set long ago; any reload silently reverts to A1.
- Part **OUTPUT** column must read **Main Out** on a stereo track (multi-out buses go nowhere
  otherwise).
- Presets sound **only inside their mapped key zone** (yellow keys on UVI's keyboard).
  E.g. PP2 *11 Harmonics* ≈ C3–B3; notes outside are silently ignored.
- SI2 presets ship with **IR Reverb ON** (e.g. TC Large Hall) — switch off for dry rack use;
  room sound belongs to the demo mix, not the instrument identity (D7).

## Kontakt (8)

- Per-instrument **MIDI channel selector incl. Omni** in each loaded instrument's header
  strip. Set Omni for probing; explicit channels for production routing.
