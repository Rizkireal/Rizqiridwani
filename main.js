/* ── SMOOTH SCROLL ── */
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const href = a.getAttribute('href');
    if (href === '#') return;
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  });
});

/* ── CONTRIBUTION GRID ── */
(function() {
  const grid = document.getElementById('contribGrid');
  if (!grid) return;

  const today = new Date();
  const startDate = new Date('2024-01-01');
  const totalCells = 52 * 7;

  let total = 0;
  const levels = [];

  for (let i = 0; i < totalCells; i++) {
    const dayOffset = totalCells - 1 - i;
    const cellDate = new Date(today);
    cellDate.setDate(today.getDate() - dayOffset);
    const isPast = cellDate <= today && cellDate >= startDate;

    let lvl = 0;
    if (isPast) {
      const r = Math.random();
      if      (r < 0.35) lvl = 0;
      else if (r < 0.55) lvl = 1;
      else if (r < 0.72) lvl = 2;
      else if (r < 0.85) lvl = 3;
      else if (r < 0.94) lvl = 4;
      else               lvl = 5;
      if (lvl > 0) total += lvl;
    }
    levels.push(lvl);
  }

  const totalEl = document.getElementById('totalContrib');
  if (totalEl) totalEl.textContent = total;

  levels.forEach(lvl => {
    const cell = document.createElement('div');
    cell.className = 'contrib-cell' + (lvl > 0 ? ' l' + lvl : '');
    grid.appendChild(cell);
  });
})();
