// src/desktop/jingle.js
// Campanitas navideñas: cada clic en un botón toca la siguiente frase de
// "Jingle Bells" (melodía de 1857, dominio público) con un sonido de campana
// hecho con Web Audio, sin archivos de audio.

const N = { C5: 523.25, D5: 587.33, E5: 659.25, F5: 698.46, G5: 783.99, C6: 1046.5 };

// [nota, duración en tiempos]
const phrases = [
  [['E5', 1], ['E5', 1], ['E5', 2]],
  [['E5', 1], ['E5', 1], ['E5', 2]],
  [['E5', 1], ['G5', 1], ['C5', 1.5], ['D5', 0.5], ['E5', 3]],
  [['F5', 1], ['F5', 1], ['F5', 1.5], ['F5', 0.5], ['F5', 1], ['E5', 1], ['E5', 1], ['E5', 0.5], ['E5', 0.5]],
  [['E5', 1], ['D5', 1], ['D5', 1], ['E5', 1], ['D5', 2], ['G5', 2]],
];

const BEAT = 0.17; // segundos por tiempo
let ctx = null;
let next = 0;
let busyUntil = 0;

const KEY = 'sonido';
export const isSoundOn = () => {
  try {
    return localStorage.getItem(KEY) !== 'off';
  } catch {
    return true;
  }
};
export const setSoundOn = (on) => {
  try {
    localStorage.setItem(KEY, on ? 'on' : 'off');
  } catch {
    /* sin acceso a localStorage */
  }
};

const bell = (freq, at, length) => {
  const out = ctx.createGain();
  out.gain.setValueAtTime(0.0001, at);
  out.gain.exponentialRampToValueAtTime(0.22, at + 0.008);
  out.gain.exponentialRampToValueAtTime(0.0001, at + length + 0.6);
  out.connect(ctx.destination);
  // Parciales de campana: fundamental, octava y armónicos brillantes
  [
    [1, 1],
    [2, 0.45],
    [3.01, 0.22],
    [4.2, 0.12],
  ].forEach(([mult, vol]) => {
    const o = ctx.createOscillator();
    const g = ctx.createGain();
    o.type = 'sine';
    o.frequency.value = freq * mult;
    g.gain.value = vol;
    o.connect(g).connect(out);
    o.start(at);
    o.stop(at + length + 0.7);
  });
};

export const playJingle = () => {
  if (!isSoundOn()) return;
  try {
    ctx = ctx || new (window.AudioContext || window.webkitAudioContext)();
    if (ctx.state === 'suspended') ctx.resume();
    const now = ctx.currentTime;
    if (now < busyUntil) return; // no encimar frases
    let t = now + 0.02;
    phrases[next].forEach(([note, beats]) => {
      bell(N[note], t, beats * BEAT);
      t += beats * BEAT;
    });
    busyUntil = t - 0.1;
    next = (next + 1) % phrases.length;
  } catch {
    /* navegador sin Web Audio */
  }
};
