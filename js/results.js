// ============================================================
//  BLOCKIVIA — RESULTADOS v2
// ============================================================

function calculateProfile(answers) {
  const scores = { riesgo: 0, cripto: 0, tech: 0, seguridad: 0 };

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

  // Máximos posibles por categoría
  const maxScores = { seguridad: 7, cripto: 9, tech: 12 };
  const normalized = {};
  ['seguridad', 'cripto', 'tech'].forEach(cat => {
    const raw = Math.max(0, scores[cat] || 0);
    normalized[cat] = Math.min(100, Math.round((raw / maxScores[cat]) * 100));
  });

  const profile = PROFILES.find(p => p.condition(scores)) || PROFILES[PROFILES.length - 1];
  return { profile, normalized, raw: scores };
}

function renderResults(answers) {
  const { profile, normalized } = calculateProfile(answers);

  const badge = document.getElementById('result-badge');
  badge.style.setProperty('--profile-color', profile.color);
  document.getElementById('result-profile-title').textContent = profile.title;
  document.getElementById('result-profile-desc').textContent = profile.description;

  const chartBars = document.getElementById('chart-bars');
  const categories = [
    { key: 'seguridad', label: '🛡️ Seguridad', color: '#00b4f5' },
    { key: 'cripto',    label: '₿ Cripto',     color: '#f5c400' },
    { key: 'tech',      label: '🤖 Tech & IA',  color: '#00f5c4' }
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
