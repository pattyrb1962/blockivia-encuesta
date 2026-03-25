// ============================================================
//  BLOCKIVIA — LÓGICA DE LA ENCUESTA v2
// ============================================================

const STATE = {
  sectionIndex: 0,
  questionIndex: 0,
  answers: {},
  phase: 'welcome'
};

document.addEventListener('DOMContentLoaded', () => {
  setupThemeToggle();
  updateProgress(0);
  showScreen('screen-welcome');
  document.getElementById('btn-start').addEventListener('click', startSurvey);
});

// ── Tema ────────────────────────────────────────────────────
function setupThemeToggle() {
  const btn = document.getElementById('theme-toggle');
  const label = document.getElementById('toggle-label');
  btn.addEventListener('click', () => {
    document.body.classList.toggle('light');
    const isLight = document.body.classList.contains('light');
    btn.querySelector('.toggle-icon').textContent = isLight ? '🌙' : '☀️';
    label.textContent = isLight ? 'Oscuro' : 'Claro';
  });
}

// ── Progreso ─────────────────────────────────────────────────
function updateProgress(pct) {
  document.getElementById('progress-fill').style.width = pct + '%';
}

function calcProgress() {
  const total = SURVEY_SECTIONS.reduce((acc, s) => acc + s.questions.length, 0);
  let done = 0;
  for (let si = 0; si < STATE.sectionIndex; si++) {
    done += SURVEY_SECTIONS[si].questions.length;
  }
  done += STATE.questionIndex;
  return Math.round((done / total) * 100);
}

// ── Flujo ────────────────────────────────────────────────────
function startSurvey() {
  STATE.sectionIndex = 0;
  STATE.questionIndex = 0;
  showSectionIntro();
}

function showSectionIntro() {
  const section = SURVEY_SECTIONS[STATE.sectionIndex];
  document.getElementById('si-emoji').textContent = section.emoji;
  document.getElementById('si-label').textContent = `Sección ${STATE.sectionIndex + 1} de ${SURVEY_SECTIONS.length}`;
  document.getElementById('si-title').textContent = section.title;
  document.getElementById('si-desc').textContent = section.description;
  updateProgress(calcProgress());
  showScreen('screen-section-intro');
}

function startSection() {
  STATE.questionIndex = 0;
  showCurrentQuestion();
}

function showCurrentQuestion() {
  const section = SURVEY_SECTIONS[STATE.sectionIndex];
  const q = section.questions[STATE.questionIndex];

  document.getElementById('q-section-name').textContent = section.title;
  document.getElementById('q-num').textContent = STATE.questionIndex + 1;
  document.getElementById('q-total').textContent = section.questions.length;
  document.getElementById('q-text').textContent = q.text;

  updateProgress(calcProgress());

  const body = document.getElementById('q-body');
  if (q.type === 'single') {
    body.innerHTML = renderOptions(q);
    const prev = STATE.answers[q.id];
    if (prev) {
      const btn = body.querySelector(`[data-opt="${prev}"]`);
      if (btn) btn.classList.add('selected');
    }
    body.querySelectorAll('.option-btn').forEach(btn => {
      btn.addEventListener('click', () => selectOption(q.id, btn.dataset.opt, body));
    });
  } else if (q.type === 'text') {
    body.innerHTML = renderTextInput(q);
    const ta = body.querySelector('textarea');
    ta.value = STATE.answers[q.id] || '';
    ta.addEventListener('input', () => handleTextInput(q, ta));
  }

  const btnBack = document.getElementById('btn-back');
  btnBack.style.display = (STATE.sectionIndex === 0 && STATE.questionIndex === 0) ? 'none' : 'flex';
  btnBack.onclick = goBack;

  const btnNext = document.getElementById('btn-next');
  btnNext.onclick = goNext;
  updateNextBtn(q);

  showScreen('screen-question');
}

function renderOptions(q) {
  const keys = ['A','B','C','D','E'];
  return `<div class="options-list">
    ${q.options.map((opt, i) => `
      <button class="option-btn" data-opt="${opt.id}">
        <span class="option-key">${keys[i]}</span>
        <span>${opt.text}</span>
      </button>
    `).join('')}
  </div>`;
}

function renderTextInput(q) {
  return `<div class="text-input-wrap">
    <textarea placeholder="${q.placeholder}" maxlength="400"></textarea>
    <div class="word-count" id="wc">0 / ${q.maxWords} palabras</div>
  </div>`;
}

function selectOption(qId, optId, container) {
  STATE.answers[qId] = optId;
  container.querySelectorAll('.option-btn').forEach(b => b.classList.remove('selected'));
  const sel = container.querySelector(`[data-opt="${optId}"]`);
  if (sel) { sel.classList.add('selected'); pulseElement(sel); }
  updateNextBtn(getCurrentQuestion());
}

function handleTextInput(q, ta) {
  const words = ta.value.trim().split(/\s+/).filter(Boolean).length;
  const wc = document.getElementById('wc');
  wc.textContent = `${words} / ${q.maxWords} palabras`;
  wc.classList.toggle('over', words > q.maxWords);
  STATE.answers[q.id] = ta.value;
  updateNextBtn(q);
}

function updateNextBtn(q) {
  const btn = document.getElementById('btn-next');
  btn.disabled = q.type === 'text' ? false : !STATE.answers[q.id];
}

function getCurrentQuestion() {
  return SURVEY_SECTIONS[STATE.sectionIndex].questions[STATE.questionIndex];
}

// ── Navegación ───────────────────────────────────────────────
function goNext() {
  const section = SURVEY_SECTIONS[STATE.sectionIndex];
  if (STATE.questionIndex < section.questions.length - 1) {
    STATE.questionIndex++;
    showCurrentQuestion();
  } else if (STATE.sectionIndex < SURVEY_SECTIONS.length - 1) {
    STATE.sectionIndex++;
    showSectionIntro();
  } else {
    finishSurvey();
  }
}

function goBack() {
  if (STATE.questionIndex > 0) {
    STATE.questionIndex--;
    showCurrentQuestion();
  } else if (STATE.sectionIndex > 0) {
    STATE.sectionIndex--;
    STATE.questionIndex = SURVEY_SECTIONS[STATE.sectionIndex].questions.length - 1;
    showCurrentQuestion();
  } else {
    showScreen('screen-welcome');
  }
}

// ── Finalizar ────────────────────────────────────────────────
async function finishSurvey() {
  renderResults(STATE.answers);
  showScreen('screen-results');
  updateProgress(100);
  await submitToSheets(STATE.answers);
}

window.startSection = startSection;
