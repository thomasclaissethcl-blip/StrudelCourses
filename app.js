(() => {
  const COURSE = window.COURSE;
  const STORAGE_KEY = 'strudelLabV12State';
  const REQUIRED_SAMPLE_SETUP = "samples('https://raw.githubusercontent.com/tidalcycles/Dirt-Samples/master/strudel.json')";
  const view = document.getElementById('view');
  const branchNav = document.getElementById('branchNav');
  const globalProgressLabel = document.getElementById('globalProgressLabel');
  const globalProgressBar = document.getElementById('globalProgressBar');
  const toast = document.getElementById('toast');

  const flatLessons = COURSE.branches.flatMap(branch =>
    branch.chapters.flatMap(chapter =>
      chapter.lessons.map(lesson => ({ branch, chapter, lesson }))
    )
  );

  const state = loadState();
  let current = {
    branchId: state.lastBranchId || COURSE.branches[0].id,
    lessonId: state.lastLessonId || null
  };

  function loadState() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return { completed: [], codeDrafts: {}, lastBranchId: null, lastLessonId: null };
      const parsed = JSON.parse(raw);
      return {
        completed: Array.isArray(parsed.completed) ? parsed.completed : [],
        codeDrafts: parsed.codeDrafts || {},
        lastBranchId: parsed.lastBranchId || null,
        lastLessonId: parsed.lastLessonId || null
      };
    } catch (error) {
      return { completed: [], codeDrafts: {}, lastBranchId: null, lastLessonId: null };
    }
  }

  function saveState() {
    state.lastBranchId = current.branchId;
    state.lastLessonId = current.lessonId;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    updateProgressUI();
  }

  function showToast(message) {
    toast.textContent = message;
    toast.classList.add('show');
    window.clearTimeout(showToast.timer);
    showToast.timer = window.setTimeout(() => toast.classList.remove('show'), 2200);
  }

  function escapeHtml(value) {
    return String(value)
      .replaceAll('&', '&amp;')
      .replaceAll('<', '&lt;')
      .replaceAll('>', '&gt;')
      .replaceAll('"', '&quot;')
      .replaceAll("'", '&#039;');
  }

  function lessonById(id) {
    return flatLessons.find(item => item.lesson.id === id);
  }

  function branchById(id) {
    return COURSE.branches.find(branch => branch.id === id) || COURSE.branches[0];
  }

  function getBranchLessons(branch) {
    return branch.chapters.flatMap(chapter => chapter.lessons);
  }

  function isCompleted(lessonId) {
    return state.completed.includes(lessonId);
  }

  function markComplete(lessonId) {
    if (!isCompleted(lessonId)) {
      state.completed.push(lessonId);
      saveState();
      renderSidebar();
      showToast('Leçon validée.');
      renderLesson(lessonId);
    }
  }

  function getCompletionRatioForBranch(branch) {
    const lessons = getBranchLessons(branch);
    if (!lessons.length) return 0;
    const done = lessons.filter(lesson => isCompleted(lesson.id)).length;
    return Math.round((done / lessons.length) * 100);
  }

  function updateProgressUI() {
    const total = flatLessons.length;
    const done = state.completed.length;
    const ratio = total ? Math.round((done / total) * 100) : 0;
    globalProgressLabel.textContent = `${ratio} % terminé`;
    globalProgressBar.style.width = `${ratio}%`;
  }

  function renderSidebar() {
    branchNav.innerHTML = COURSE.branches.map(branch => {
      const lessons = getBranchLessons(branch);
      const done = lessons.filter(lesson => isCompleted(lesson.id)).length;
      const active = branch.id === current.branchId ? 'active' : '';
      return `
        <button class="branch-button ${active}" data-branch-id="${branch.id}">
          <span>${escapeHtml(branch.title)}</span>
          <span class="branch-count">${done}/${lessons.length}</span>
          <small>${escapeHtml(branch.role)}</small>
        </button>
      `;
    }).join('');

    branchNav.querySelectorAll('[data-branch-id]').forEach(button => {
      button.addEventListener('click', () => {
        current.branchId = button.dataset.branchId;
        current.lessonId = null;
        saveState();
        renderSidebar();
        renderBranch(current.branchId);
      });
    });
    updateProgressUI();
  }

  function renderHome() {
    const total = flatLessons.length;
    const done = state.completed.length;
    const badges = calculateBadges();
    const firstBranch = COURSE.branches[0];
    view.innerHTML = `
      <section class="hero">
        <p class="kicker">Version ${escapeHtml(COURSE.meta.version)}</p>
        <h2>${escapeHtml(COURSE.meta.title)}</h2>
        <p>${escapeHtml(COURSE.meta.description)}</p>
        <div class="button-row">
          <button id="startCourse">Commencer ou reprendre</button>
          <button class="secondary" id="showProjects">Voir les projets finaux</button>
        </div>
      </section>
      <section class="stats-grid" aria-label="Synthèse de progression">
        <article class="stat-card"><span class="stat-number">${total}</span><strong>micro-leçons</strong><p class="muted">Chaque leçon propose code, consigne, indices et correction.</p></article>
        <article class="stat-card"><span class="stat-number">${done}</span><strong>leçons validées</strong><p class="muted">La progression est stockée dans ce navigateur.</p></article>
        <article class="stat-card"><span class="stat-number">${badges.filter(b => b.earned).length}</span><strong>badges obtenus</strong><p class="muted">Les badges signalent les compétences acquises.</p></article>
      </section>
      <section class="hero">
        <p class="kicker">Carte des parcours</p>
        <div class="map-grid">
          ${COURSE.branches.map(branch => {
            const ratio = getCompletionRatioForBranch(branch);
            return `<article class="chapter-card">
              <h3>${escapeHtml(branch.title)}</h3>
              <p>${escapeHtml(branch.role)}</p>
              <p class="muted">${escapeHtml(branch.unlockCondition)}</p>
              <div class="progress-track" aria-hidden="true"><div style="width:${ratio}%"></div></div>
              <div class="branch-meta"><span class="pill">${ratio} %</span></div>
              <button class="secondary open-branch" data-branch-id="${branch.id}">Ouvrir</button>
            </article>`;
          }).join('')}
        </div>
      </section>
      <section class="hero">
        <p class="kicker">Badges</p>
        <div class="badge-grid">
          ${badges.map(badge => `<article class="badge-card ${badge.earned ? '' : 'locked'}"><strong>${escapeHtml(badge.title)}</strong><p>${escapeHtml(badge.description)}</p><span class="pill ${badge.earned ? 'done' : 'warn'}">${badge.earned ? 'Obtenu' : 'À obtenir'}</span></article>`).join('')}
        </div>
      </section>
    `;
    document.getElementById('startCourse').addEventListener('click', () => {
      const target = current.lessonId ? lessonById(current.lessonId) : null;
      if (target) renderLesson(target.lesson.id);
      else renderBranch(firstBranch.id);
    });
    document.getElementById('showProjects').addEventListener('click', renderProjects);
    view.querySelectorAll('.open-branch').forEach(button => {
      button.addEventListener('click', () => {
        current.branchId = button.dataset.branchId;
        current.lessonId = null;
        saveState();
        renderSidebar();
        renderBranch(current.branchId);
      });
    });
  }

  function renderBranch(branchId) {
    const branch = branchById(branchId);
    current.branchId = branch.id;
    current.lessonId = null;
    saveState();
    const ratio = getCompletionRatioForBranch(branch);
    view.innerHTML = `
      <section class="hero branch-header">
        <p class="kicker">Parcours</p>
        <h2>${escapeHtml(branch.title)}</h2>
        <p>${escapeHtml(branch.role)}</p>
        <div class="branch-meta">
          <span class="pill">${ratio} % terminé</span>
          <span class="pill">${escapeHtml(branch.unlockCondition)}</span>
        </div>
        <div class="content-block">
          <h3>Projet de branche</h3>
          <p>${escapeHtml(branch.finalProject)}</p>
        </div>
      </section>
      ${branch.chapters.map(chapter => renderChapterCard(branch, chapter)).join('')}
      <section class="hero">
        <button class="secondary" id="backHome">Retour à l'accueil</button>
        <button id="showProjectsBottom">Projets finaux</button>
      </section>
    `;
    view.querySelectorAll('[data-lesson-id]').forEach(item => {
      item.addEventListener('click', () => renderLesson(item.dataset.lessonId));
      item.addEventListener('keydown', event => {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault();
          renderLesson(item.dataset.lessonId);
        }
      });
    });
    document.getElementById('backHome').addEventListener('click', renderHome);
    document.getElementById('showProjectsBottom').addEventListener('click', renderProjects);
  }

  function renderChapterCard(branch, chapter) {
    const done = chapter.lessons.filter(lesson => isCompleted(lesson.id)).length;
    return `
      <section class="chapter-card">
        <h3>${escapeHtml(chapter.title)}</h3>
        <p>${escapeHtml(chapter.learningGoal)}</p>
        <span class="pill ${done === chapter.lessons.length ? 'done' : ''}">${done}/${chapter.lessons.length} validées</span>
        <div class="lesson-list">
          ${chapter.lessons.map(lesson => `<div class="lesson-item ${isCompleted(lesson.id) ? 'complete' : ''}" data-lesson-id="${lesson.id}" role="button" tabindex="0">
            <div>
              <div class="lesson-title">${escapeHtml(lesson.title)}</div>
              <div class="lesson-type">${escapeHtml(labelForExerciseType(lesson.exerciseType))}</div>
            </div>
            <span class="pill ${isCompleted(lesson.id) ? 'done' : ''}">${isCompleted(lesson.id) ? 'Validée' : 'À faire'}</span>
          </div>`).join('')}
        </div>
      </section>
    `;
  }

  function labelForExerciseType(type) {
    const labels = {
      modifier_code: 'Modifier un code existant',
      completer_code: 'Compléter un code',
      lire_code: 'Lire un code',
      comparer_patterns: 'Comparer des patterns',
      composer_contraintes: 'Composer sous contraintes',
      mini_performance: 'Mini-performance'
    };
    return labels[type] || type;
  }

  function renderLesson(lessonId) {
    const item = lessonById(lessonId);
    if (!item) return renderHome();
    const { branch, chapter, lesson } = item;
    current.branchId = branch.id;
    current.lessonId = lesson.id;
    saveState();
    renderSidebar();

    const draft = state.codeDrafts[lesson.id] || lesson.starterCode;
    const index = flatLessons.findIndex(entry => entry.lesson.id === lesson.id);
    const prev = flatLessons[index - 1];
    const next = flatLessons[index + 1];

    view.innerHTML = `
      <div class="lesson-layout">
        <section>
          <div class="lesson-header">
            <p class="kicker">${escapeHtml(branch.title)} · ${escapeHtml(chapter.title)}</p>
            <h2>${escapeHtml(lesson.title)}</h2>
            <div class="branch-meta">
              <span class="pill">${escapeHtml(labelForExerciseType(lesson.exerciseType))}</span>
              <span class="pill">${escapeHtml(lesson.estimatedDuration)}</span>
              <span class="pill ${isCompleted(lesson.id) ? 'done' : 'warn'}">${isCompleted(lesson.id) ? 'Validée' : 'À valider'}</span>
            </div>
          </div>

          <div class="content-block">
            <h3>Objectif</h3>
            <p>${escapeHtml(lesson.learningGoal)}</p>
          </div>
          <div class="content-block">
            <h3>Notion</h3>
            <p>${escapeHtml(lesson.concept)}</p>
          </div>
          <div class="content-block callout">
            <h3>Consigne</h3>
            <p>${escapeHtml(lesson.task)}</p>
          </div>
          <div class="content-block">
            <h3>Ce qu'il faut écouter</h3>
            <p>${escapeHtml(lesson.whatToListenFor)}</p>
          </div>
          <details class="details-box">
            <summary>Indice 1</summary>
            <div class="details-content"><p>${escapeHtml(lesson.hintLevel1)}</p></div>
          </details>
          <details class="details-box">
            <summary>Indice 2</summary>
            <div class="details-content"><p>${escapeHtml(lesson.hintLevel2)}</p></div>
          </details>
          <details class="details-box">
            <summary>Correction</summary>
            <div class="details-content"><pre class="pre-code">${escapeHtml(lesson.solution)}</pre><button class="secondary" id="useSolution">Utiliser cette correction</button></div>
          </details>
          <div class="content-block callout warning">
            <h3>Erreur fréquente</h3>
            <p>${escapeHtml(lesson.commonMistake)}</p>
          </div>
          <div class="content-block">
            <h3>À retenir</h3>
            <p>${escapeHtml(lesson.summary)}</p>
          </div>
          <div class="lesson-nav">
            <button class="secondary" id="backToBranch">Retour au parcours</button>
            ${prev ? `<button class="secondary" id="prevLesson">Leçon précédente</button>` : ''}
            ${next ? `<button class="secondary" id="nextLesson">Leçon suivante</button>` : ''}
            <button class="success" id="completeLesson">${isCompleted(lesson.id) ? 'Leçon déjà validée' : 'Valider la leçon'}</button>
          </div>
        </section>
        <section>
          <h3>Zone de pratique</h3>
          <p class="muted">Modifiez le code, copiez-le ou chargez-le dans Strudel. Le bouton charge le code dans Strudel. Lancez ensuite la lecture dans le REPL intégré ou ouvrez l’onglet complet.</p>
          <label class="field-label" for="lessonCode">Code de travail</label>
          <textarea id="lessonCode" class="code-editor" spellcheck="false">${escapeHtml(draft)}</textarea>
          <div id="codeDiagnostics" class="diagnostic-box" aria-live="polite"></div>
          <div class="button-row">
            <button id="copyLessonCode">Copier</button>
            <button class="secondary" id="resetLessonCode">Réinitialiser</button>
            <button id="loadLessonCode">Charger dans Strudel</button>
            <a id="openLessonStrudel" class="button-link" target="_blank" rel="noopener">Ouvrir dans un onglet</a>
          </div>
          <div id="lessonFrameHolder" class="frame-holder placeholder"><p>Chargez le code pour ouvrir le REPL Strudel intégré.</p></div>
        </section>
      </div>
    `;

    const editor = document.getElementById('lessonCode');
    const openLink = document.getElementById('openLessonStrudel');
    const diagnostics = document.getElementById('codeDiagnostics');
    const updateLink = () => {
      const code = editor.value;
      state.codeDrafts[lesson.id] = code;
      openLink.href = strudelUrl(code);
      diagnostics.innerHTML = renderCodeDiagnostics(code);
      saveState();
    };
    editor.addEventListener('input', updateLink);
    updateLink();

    document.getElementById('copyLessonCode').addEventListener('click', () => copyText(editor.value));
    document.getElementById('resetLessonCode').addEventListener('click', () => {
      editor.value = lesson.starterCode;
      updateLink();
      showToast('Code réinitialisé.');
    });
    document.getElementById('loadLessonCode').addEventListener('click', () => loadFrame('lessonFrameHolder', editor.value));
    document.getElementById('useSolution').addEventListener('click', () => {
      editor.value = lesson.solution;
      updateLink();
      showToast('Correction chargée dans la zone de pratique.');
    });
    document.getElementById('backToBranch').addEventListener('click', () => renderBranch(branch.id));
    if (prev) document.getElementById('prevLesson').addEventListener('click', () => renderLesson(prev.lesson.id));
    if (next) document.getElementById('nextLesson').addEventListener('click', () => renderLesson(next.lesson.id));
    document.getElementById('completeLesson').addEventListener('click', () => markComplete(lesson.id));
  }

  function renderCodeDiagnostics(code) {
    const diagnostics = [];
    if (/\.cpm\s*\(/.test(code)) {
      diagnostics.push({ type: 'warn', text: 'Le code utilise .cpm(...). Dans cette version du module, préférez setcpm(BPM/4) en début de code.' });
    }
    if (!/\bsetcpm\s*\(/.test(code) && !/\bsetcps\s*\(/.test(code)) {
      diagnostics.push({ type: 'info', text: 'Aucun tempo explicite détecté. Strudel utilisera son tempo par défaut, ce qui peut brouiller l’exercice.' });
    }
    const hasDirtSamples = /\bs\(\s*['"][^'"]*(bd|sd|hh|cp|oh|breaks125|breaks152|breaks157|breaks165|amencutup|glitch)/.test(code);
    const hasExplicitSampleSetup = code.includes(REQUIRED_SAMPLE_SETUP) || /samples\s*\(\s*['"]github:tidalcycles\/dirt-samples/.test(code);
    if (hasDirtSamples && !hasExplicitSampleSetup) {
      diagnostics.push({ type: 'warn', text: 'Ce code utilise des samples, mais la ligne de chargement Dirt-Samples est absente. Ajoutez samples('https://raw.githubusercontent.com/tidalcycles/Dirt-Samples/master/strudel.json') en première ligne.' });
    }
    if (/\.bank\s*\(/.test(code)) {
      diagnostics.push({ type: 'warn', text: 'Le module n’utilise plus .bank(...) dans les exercices de base, afin de s’appuyer sur la banque Dirt-Samples explicitement chargée.' });
    }
    if (hasDirtSamples && hasExplicitSampleSetup) {
      diagnostics.push({ type: 'ok', text: 'La banque Dirt-Samples est déclarée explicitement. Gardez cette ligne pour rendre le pattern audible.' });
    }
    if (hasDirtSamples) {
      diagnostics.push({ type: 'info', text: 'Les samples sont téléchargés à la demande. Le premier passage peut rester silencieux quelques instants, puis sonner après relance.' });
    }
    if (!diagnostics.length) {
      diagnostics.push({ type: 'ok', text: 'Aucun problème technique évident détecté dans ce code.' });
    }
    return `<ul>${diagnostics.map(item => `<li class="${item.type}">${escapeHtml(item.text)}</li>`).join('')}</ul>`;
  }

  function encodeBase64Utf8(text) {
    const bytes = new TextEncoder().encode(text);
    let binary = '';
    const chunkSize = 0x8000;
    for (let i = 0; i < bytes.length; i += chunkSize) {
      const chunk = bytes.subarray(i, i + chunkSize);
      binary += String.fromCharCode(...chunk);
    }
    return btoa(binary);
  }

  function strudelUrl(code) {
    const encoded = encodeBase64Utf8(code);
    return `https://strudel.cc/#${encodeURIComponent(encoded)}`;
  }

  function loadFrame(holderId, code) {
    const holder = document.getElementById(holderId);
    holder.classList.remove('placeholder');
    holder.innerHTML = `<div class="frame-note">Le code est chargé. Cliquez sur Play dans Strudel. Les exemples à samples contiennent une ligne samples(...). Gardez-la et relancez si le premier passage est silencieux.</div><iframe title="REPL Strudel" src="${strudelUrl(code)}" loading="lazy" allow="autoplay; clipboard-read; clipboard-write; fullscreen"></iframe>`;
    showToast('REPL Strudel chargé. Lancez la lecture dans le REPL.');
  }

  async function copyText(text) {
    try {
      await navigator.clipboard.writeText(text);
      showToast('Code copié.');
    } catch (error) {
      showToast('Copie impossible depuis ce navigateur.');
    }
  }

  function renderProjects() {
    view.innerHTML = `
      <section class="hero">
        <p class="kicker">Synthèse</p>
        <h2>Projets finaux</h2>
        <p>Chaque projet transforme les micro-compétences en une mini-performance autonome.</p>
        <button class="secondary" id="projectsBackHome">Retour à l'accueil</button>
      </section>
      <div class="project-grid">
        ${COURSE.projects.map(project => `<article class="project-card" style="padding:1rem">
          <h3>${escapeHtml(project.title)}</h3>
          <p>${escapeHtml(project.learningGoal)}</p>
          <p class="muted">${escapeHtml(project.deliverable)}</p>
          <pre class="pre-code">${escapeHtml(project.starterCode)}</pre>
          ${project.technicalChecklist ? `<ul class="checklist">${project.technicalChecklist.map(item => `<li>${escapeHtml(item)}</li>`).join('')}</ul>` : ''}
          <div class="button-row">
            <button class="secondary copy-project" data-project-id="${project.id}">Copier</button>
            <a class="button-link" target="_blank" rel="noopener" href="${strudelUrl(project.starterCode)}">Ouvrir dans Strudel</a>
          </div>
        </article>`).join('')}
      </div>
    `;
    document.getElementById('projectsBackHome').addEventListener('click', renderHome);
    view.querySelectorAll('.copy-project').forEach(button => {
      button.addEventListener('click', () => {
        const project = COURSE.projects.find(item => item.id === button.dataset.projectId);
        copyText(project.starterCode);
      });
    });
  }

  function calculateBadges() {
    const completedCount = state.completed.length;
    const isChapterComplete = chapterId => flatLessons
      .filter(item => item.chapter.id === chapterId)
      .every(item => isCompleted(item.lesson.id));
    const isBranchComplete = branchId => flatLessons
      .filter(item => item.branch.id === branchId)
      .every(item => isCompleted(item.lesson.id));

    return COURSE.badges.map(badge => {
      let earned = false;
      if (badge.rule === 'completed >= 1') earned = completedCount >= 1;
      if (badge.rule === 'completed >= 40') earned = completedCount >= 40;
      if (badge.rule.startsWith('chapter ')) earned = isChapterComplete(badge.rule.replace('chapter ', ''));
      if (badge.rule.startsWith('branch ')) earned = isBranchComplete(badge.rule.replace('branch ', ''));
      return { ...badge, earned };
    });
  }

  function renderGlossary(filter = '') {
    const target = document.getElementById('glossaryList');
    const normalized = filter.trim().toLowerCase();
    const entries = COURSE.glossary.filter(entry => {
      return !normalized || entry.term.toLowerCase().includes(normalized) || entry.definition.toLowerCase().includes(normalized);
    });
    target.innerHTML = entries.map(entry => `
      <article class="glossary-term">
        <strong>${escapeHtml(entry.term)}</strong>
        <p>${escapeHtml(entry.definition)}</p>
        <pre class="pre-code">${escapeHtml(entry.example)}</pre>
      </article>
    `).join('') || '<p class="muted">Aucun terme trouvé.</p>';
  }

  function setupDialogs() {
    const glossaryDialog = document.getElementById('glossaryDialog');
    const techHelpDialog = document.getElementById('techHelpDialog');
    const workshopDialog = document.getElementById('workshopDialog');
    const glossarySearch = document.getElementById('glossarySearch');
    const workshopCode = document.getElementById('workshopCode');
    const openWorkshopStrudel = document.getElementById('openWorkshopStrudel');

    document.getElementById('openGlossary').addEventListener('click', () => {
      renderGlossary();
      glossaryDialog.showModal();
      glossarySearch.focus();
    });
    document.getElementById('closeGlossary').addEventListener('click', () => glossaryDialog.close());
    document.getElementById('openTechHelp').addEventListener('click', () => techHelpDialog.showModal());
    document.getElementById('closeTechHelp').addEventListener('click', () => techHelpDialog.close());
    glossarySearch.addEventListener('input', () => renderGlossary(glossarySearch.value));

    const updateWorkshopLink = () => {
      openWorkshopStrudel.href = strudelUrl(workshopCode.value);
    };
    workshopCode.addEventListener('input', updateWorkshopLink);
    updateWorkshopLink();

    document.getElementById('openWorkshop').addEventListener('click', () => {
      updateWorkshopLink();
      workshopDialog.showModal();
    });
    document.getElementById('closeWorkshop').addEventListener('click', () => workshopDialog.close());
    document.getElementById('copyWorkshopCode').addEventListener('click', () => copyText(workshopCode.value));
    document.getElementById('loadWorkshopCode').addEventListener('click', () => loadFrame('workshopFrameHolder', workshopCode.value));
    document.getElementById('resetProgress').addEventListener('click', () => {
      const confirmed = window.confirm('Réinitialiser toute la progression locale ?');
      if (!confirmed) return;
      localStorage.removeItem(STORAGE_KEY);
      state.completed = [];
      state.codeDrafts = {};
      state.lastBranchId = null;
      state.lastLessonId = null;
      current = { branchId: COURSE.branches[0].id, lessonId: null };
      saveState();
      renderSidebar();
      renderHome();
      showToast('Progression réinitialisée.');
    });
  }

  setupDialogs();
  renderSidebar();
  renderHome();
})();
