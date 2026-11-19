// src/season.js
// Tema de temporada. La Navidad se activa sola del 15 de noviembre al 7 de enero.
// Para apagarla antes, cambia FORZAR a 'ninguna'; para dejarla siempre, a 'navidad'.
const FORZAR = null;

export const getSeason = (d = new Date()) => {
  if (FORZAR) return FORZAR;
  const m = d.getMonth();
  const day = d.getDate();
  if ((m === 10 && day >= 15) || m === 11 || (m === 0 && day <= 7)) return 'navidad';
  return 'ninguna';
};

export const season = getSeason();
if (typeof document !== 'undefined') document.documentElement.dataset.season = season;
