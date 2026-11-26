/* Original background score for The Wrath of Rath, synthesized live with the Web Audio API.
   Warm, whimsical small-town orchestra with a sneaky detective edge. No samples, no borrowed melodies.
   Off until the visitor turns it on. Exposes window.RathMusic. */
(() => {
  "use strict";
  const AC = window.AudioContext || window.webkitAudioContext;
  if (!AC) { window.RathMusic = null; return; }

  const midi = (n) => 440 * Math.pow(2, (n - 69) / 12);
  const _ = null;

  /* ---------------- Score ----------------
     Steps are eighth notes, 8 per bar.            */

  // A: "sneaky" (D minor, walking pizzicato bass, staccato clarinet)
  const A = {
    bass: [
      [38, 41, 45, 41], [38, 40, 41, 42], [34, 38, 41, 38], [33, 37, 40, 37],
      [38, 41, 45, 41], [31, 34, 38, 34], [34, 38, 33, 37], [38, 33, 38, _],
    ],
    mel: [
      [_, _, 69, _, 70, 69, _, _], [_, _, 69, _, 70, 72, 70, 69],
      [_, _, 65, _, 67, 69, _, _], [64, _, _, _, 61, 64, 69, _],
      [_, _, 74, _, 72, 70, 69, _], [67, _, 70, _, 74, _, 72, 70],
      [69, _, _, 65, 64, _, 61, _], [62, _, _, _, _, _, _, _],
    ],
    bells: { "3:0": 81, "7:4": 86 },
  };
  // B: "adventure" (F major, legato clarinet over warm pizzicato)
  const B = {
    bass: [
      [41, 45, 48, 45], [36, 40, 43, 40], [38, 41, 45, 41], [34, 38, 41, 38],
      [41, 45, 48, 45], [40, 43, 48, 43], [34, 38, 41, 38], [33, 37, 40, 33],
    ],
    // [bar, step, note, lengthInSteps]
    mel: [
      [0, 0, 72, 4], [0, 4, 69, 2], [0, 6, 72, 2],
      [1, 0, 76, 6], [1, 6, 74, 2],
      [2, 0, 74, 2], [2, 2, 72, 2], [2, 4, 69, 4],
      [3, 0, 70, 4], [3, 4, 74, 4],
      [4, 0, 77, 4], [4, 4, 76, 2], [4, 6, 74, 2],
      [5, 0, 72, 8],
      [6, 0, 70, 2], [6, 2, 72, 2], [6, 4, 74, 2], [6, 6, 77, 2],
      [7, 0, 76, 4], [7, 4, 73, 4],
    ],
    bells: { "0:0": 84, "4:0": 89 },
  };
  // Quiet: the ending (F major, slow pads and a soft bell arpeggio)
  const Q = {
    chords: [[53, 57, 60], [50, 53, 57], [46, 50, 53], [48, 52, 55]], // F, Dm, Bb, C
    arp: [[77, 72, 69, 72], [74, 69, 65, 69], [74, 70, 65, 70], [76, 72, 67, 72]],
  };

  /* ---------------- Engine ---------------- */
  let ctx = null, master = null, bus = null, noise = null;
  let on = false, mood = "sneaky", pendingMood = null;
  let step = 0, nextTime = 0, timer = null, ducked = false;
  const BASE_VOL = 0.32;
  const listeners = new Set();

  function setup() {
    ctx = new AC();
    master = ctx.createGain();
    master.gain.value = 0;
    const comp = ctx.createDynamicsCompressor();
    comp.threshold.value = -18; comp.ratio.value = 3;
    // A touch of room: short feedback delay.
    bus = ctx.createGain();
    const delay = ctx.createDelay(); delay.delayTime.value = 0.19;
    const fb = ctx.createGain(); fb.gain.value = 0.22;
    const wet = ctx.createGain(); wet.gain.value = 0.18;
    const tone = ctx.createBiquadFilter(); tone.type = "lowpass"; tone.frequency.value = 2400;
    bus.connect(master);
    bus.connect(delay); delay.connect(tone); tone.connect(fb); fb.connect(delay); tone.connect(wet); wet.connect(master);
    master.connect(comp); comp.connect(ctx.destination);
    // Noise buffer for brushes.
    noise = ctx.createBuffer(1, ctx.sampleRate * 0.5, ctx.sampleRate);
    const d = noise.getChannelData(0);
    for (let i = 0; i < d.length; i++) d[i] = Math.random() * 2 - 1;
  }

  const env = (g, t, peak, attack, decay) => {
    g.gain.setValueAtTime(0.0001, t);
    g.gain.exponentialRampToValueAtTime(peak, t + attack);
    g.gain.exponentialRampToValueAtTime(0.0001, t + attack + decay);
  };

  function pluck(note, t, vel = 1, bright = 1800, decay = 0.38) {
    const o = ctx.createOscillator(), o2 = ctx.createOscillator();
    const f = ctx.createBiquadFilter(), g = ctx.createGain();
    o.type = "sawtooth"; o2.type = "triangle";
    o.frequency.value = midi(note); o2.frequency.value = midi(note) * 1.002;
    f.type = "lowpass"; f.Q.value = 2;
    f.frequency.setValueAtTime(bright, t); f.frequency.exponentialRampToValueAtTime(260, t + decay);
    env(g, t, 0.28 * vel, 0.006, decay);
    o.connect(f); o2.connect(f); f.connect(g); g.connect(bus);
    o.start(t); o2.start(t); o.stop(t + decay + 0.05); o2.stop(t + decay + 0.05);
  }

  function clarinet(note, t, dur, vel = 1) {
    const o = ctx.createOscillator(), f = ctx.createBiquadFilter(), g = ctx.createGain();
    const lfo = ctx.createOscillator(), lfoGain = ctx.createGain();
    o.type = "square"; o.frequency.value = midi(note);
    lfo.frequency.value = 5.2; lfoGain.gain.value = midi(note) * 0.004;
    lfo.connect(lfoGain); lfoGain.connect(o.frequency);
    f.type = "lowpass"; f.frequency.value = 1300; f.Q.value = 0.7;
    const peak = 0.07 * vel, rel = Math.min(0.12, dur * 0.4);
    g.gain.setValueAtTime(0.0001, t);
    g.gain.exponentialRampToValueAtTime(peak, t + 0.035);
    g.gain.setValueAtTime(peak, t + Math.max(0.04, dur - rel));
    g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    o.connect(f); f.connect(g); g.connect(bus);
    o.start(t); lfo.start(t); o.stop(t + dur + 0.02); lfo.stop(t + dur + 0.02);
  }

  function bell(note, t, vel = 1) {
    [[1, 0.09], [2.76, 0.03], [5.4, 0.012]].forEach(([ratio, amp]) => {
      const o = ctx.createOscillator(), g = ctx.createGain();
      o.type = "sine"; o.frequency.value = midi(note) * ratio;
      env(g, t, amp * vel, 0.004, ratio === 1 ? 1.6 : 0.6);
      o.connect(g); g.connect(bus); o.start(t); o.stop(t + 1.7);
    });
  }

  function brush(t, vel = 1) {
    const s = ctx.createBufferSource(), f = ctx.createBiquadFilter(), g = ctx.createGain();
    s.buffer = noise; f.type = "bandpass"; f.frequency.value = 5200; f.Q.value = 0.8;
    env(g, t, 0.05 * vel, 0.01, 0.16);
    s.connect(f); f.connect(g); g.connect(bus); s.start(t); s.stop(t + 0.2);
  }

  function timpani(note, t, vel = 1) {
    const o = ctx.createOscillator(), g = ctx.createGain();
    o.type = "sine";
    o.frequency.setValueAtTime(midi(note) * 1.5, t);
    o.frequency.exponentialRampToValueAtTime(midi(note), t + 0.08);
    env(g, t, 0.5 * vel, 0.005, 0.9);
    o.connect(g); g.connect(bus); o.start(t); o.stop(t + 1);
  }

  function pad(notes, t, dur) {
    notes.forEach((n) => {
      [-4, 4].forEach((cents) => {
        const o = ctx.createOscillator(), f = ctx.createBiquadFilter(), g = ctx.createGain();
        o.type = "triangle"; o.frequency.value = midi(n); o.detune.value = cents;
        f.type = "lowpass"; f.frequency.value = 900;
        g.gain.setValueAtTime(0.0001, t);
        g.gain.exponentialRampToValueAtTime(0.03, t + dur * 0.35);
        g.gain.exponentialRampToValueAtTime(0.0001, t + dur + 0.6);
        o.connect(f); f.connect(g); g.connect(bus); o.start(t); o.stop(t + dur + 0.7);
      });
    });
  }

  const bpm = () => (mood === "quiet" ? 70 : 100);
  const stepDur = () => 60 / bpm() / 2;

  function playStep(i, t) {
    const sd = stepDur();
    const s = i % 8;
    if (mood === "quiet") {
      const bar = Math.floor(i / 8) % 4;
      if (s === 0) pad(Q.chords[bar], t, sd * 8);
      if (s % 2 === 0) bell(Q.arp[bar][s / 2], t, 0.55);
      return;
    }
    const bar = Math.floor(i / 8) % 16;
    const sec = bar < 8 ? A : B;
    const b = bar % 8;
    if (s % 2 === 0) { const n = sec.bass[b][s / 2]; if (n) pluck(n, t, 1, 1500, sec === A ? 0.3 : 0.45); }
    if (sec === A) {
      const n = A.mel[b][s];
      if (n) clarinet(n, t, sd * 0.7, 0.9);
    } else {
      B.mel.forEach(([mb, ms, n, len]) => { if (mb === b && ms === s) clarinet(n, t, sd * len * 0.95, 1); });
    }
    const bl = sec.bells[`${b}:${s}`];
    if (bl) bell(bl, t, 0.8);
    if (s === 2 || s === 6) brush(t, 1);
    else if (s % 2 === 1) brush(t, 0.35);
  }

  function tick() {
    while (nextTime < ctx.currentTime + 0.15) {
      // Change mood only on a bar line.
      if (pendingMood && step % 8 === 0) { mood = pendingMood; pendingMood = null; step = 0; }
      playStep(step, nextTime);
      nextTime += stepDur();
      step++;
    }
  }

  function targetVol() { return on ? BASE_VOL * (ducked ? 0.25 : 1) * (mood === "quiet" ? 0.9 : 1) : 0; }
  function ramp(v, secs) {
    const t = ctx.currentTime;
    master.gain.cancelScheduledValues(t);
    master.gain.setValueAtTime(Math.max(0.0001, master.gain.value), t);
    master.gain.exponentialRampToValueAtTime(Math.max(0.0001, v), t + secs);
  }

  function start() {
    if (!ctx) setup();
    if (ctx.state === "suspended") ctx.resume();
    on = true;
    step = 0;
    nextTime = ctx.currentTime + 0.08;
    clearInterval(timer);
    timer = setInterval(tick, 25);
    ramp(targetVol(), 1.2);
    emit();
  }
  function stop() {
    on = false;
    if (ctx) ramp(0.0001, 0.6);
    setTimeout(() => { if (!on) { clearInterval(timer); timer = null; } }, 700);
    emit();
  }
  const emit = () => listeners.forEach((fn) => fn(on));

  document.addEventListener("visibilitychange", () => {
    if (!ctx || !on) return;
    if (document.hidden) ctx.suspend(); else { ctx.resume(); nextTime = ctx.currentTime + 0.08; }
  });

  window.RathMusic = {
    toggle() { on ? stop() : start(); return on; },
    isOn: () => on,
    onChange(fn) { listeners.add(fn); },
    setMood(m) {
      if (m === mood && !pendingMood) return;
      if (!on || !ctx) { mood = m; return; }
      pendingMood = m;
      // Dip briefly across the change so the switch feels like a breath, not a cut.
      ramp(BASE_VOL * 0.4, 0.8);
      setTimeout(() => { if (on) ramp(targetVol(), 2.5); }, 1400);
    },
    duck(v) { ducked = !!v; if (ctx && on) ramp(targetVol(), 0.4); },
    /* A short dramatic hit for reveals. "big" adds the third hit. Skipped in quiet mode. */
    stinger(big = false) {
      if (!on || !ctx || mood === "quiet") return;
      const t = ctx.currentTime + 0.03;
      pluck(38, t, 1.2, 1200, 0.25); pluck(50, t, 0.8, 1600, 0.25);
      pluck(38, t + 0.2, 1.2, 1200, 0.25); pluck(50, t + 0.2, 0.8, 1600, 0.25);
      if (big) { timpani(38, t + 0.45); clarinet(63, t + 0.45, 0.7, 1.2); clarinet(57, t + 0.45, 0.7, 0.9); }
    },
  };
})();
