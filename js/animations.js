// ============================================================
//  BLOCKIVIA — ANIMACIONES
//  Transiciones entre pantallas y efectos visuales.
// ============================================================

function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => {
    s.classList.remove('active');
  });
  const target = document.getElementById(id);
  if (target) {
    target.classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}

function animateChartBars() {
  // Espera un frame para que el DOM esté pintado
  requestAnimationFrame(() => {
    setTimeout(() => {
      document.querySelectorAll('.chart-fill[data-pct]').forEach(bar => {
        const pct = bar.getAttribute('data-pct');
        bar.style.width = pct + '%';
      });
    }, 200);
  });
}

function pulseElement(el) {
  el.style.transform = 'scale(1.04)';
  setTimeout(() => { el.style.transform = ''; }, 200);
}
