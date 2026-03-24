// ============================================================
//  BLOCKIVIA — RESULTADOS
//  Calcula el perfil del usuario y renderiza el gráfico.
// ============================================================

function calculateProfile(answers) {
  // Acumula scores por categoría
  const scores = { riesgo: 0, cripto: 0, tech: 0 };

  SURVEY_SECTIONS.forEach(section => {
    section.questions.forEach(q => {
      if (q.type === 'text') return;
      const selected = answers[q.id];
      if (!selected) return;
      const opt = q.options.find(o => o.id === selected);
      if (!opt || !opt.score) return;
      Object.entries(opt.score).forEach(([cat, val]) => {
        scores[cat] = (scores[cat] || 0) + val;
      });
    });
  });

  // Normalizar a 0-100 (máximos posibles por categoría)
  const maxScores = { riesgo: 5, cripto: 11, tech: 12 };
  const normalized = {};
  Object.keys(scores).forEach(cat => {
    const raw = Math.max(0, scores[cat]);
    normalized[cat] = Math.round((raw / (maxScores[cat] || 1)) * 100);
  });

  // Buscar perfil que aplica
  const profile = PROFILES.find(p => p.condition(scores)) || PROFILES[PROFILES.length - 1];

  return { profile, normalized, raw: scores };
}

function renderResults(answers) {
  const { profile, normalized } = calculateProfile(answers);

  // -- Badge de perfil --
  const badge = document.getElementById('result-badge');
  badge.style.setProperty('--profile-color', profile.color);
  document.getElementById('result-profile-title').textContent = profile.title;
  document.getElementById('result-profile-desc').textContent = profile.description;

  // -- Gráfico de barras --
  const chartBars = document.getElementById('chart-bars');
  const categories = [
    { key: 'cripto',  label: '₿ Cripto',    color: '#f5c400' },
    { key: 'tech',    label: '🤖 Tech & IA', color: '#00f5c4' },
    { key: 'riesgo',  label: '🛡️ Seguridad', color: '#00b4f5' }
  ];

  chartBars.innerHTML = categories.map(cat => `
    <div class="chart-row">
      <div class="chart-label">${cat.label}</div>
      <div class="chart-track">
        <div class="chart-fill" data-pct="${normalized[cat.key] || 0}"
             style="background: ${cat.color};"></div>
      </div>
      <div class="chart-pct">${normalized[cat.key] || 0}%</div>
    </div>
  `).join('');

  animateChartBars();
}
