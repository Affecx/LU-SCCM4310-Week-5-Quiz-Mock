(function () {
  'use strict';
  const E = window.QuizEngine;
  const STORAGE = 'sccm4310-shareable-mocks-v1';
  const app = document.querySelector('#app');
  const esc = s => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  let state = { version: 1, custom: [], attempts: [] }, view = 'home', selected = null, storageOK = true, toastTimer;
  const bundled = window.BUNDLED_QUIZZES.map(E.validate);
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE));
    if (saved && saved.version === 1 && Array.isArray(saved.custom) && Array.isArray(saved.attempts)) {
      saved.custom.forEach(E.validate);
      state = saved;
    }
  } catch (_) { storageOK = false; }
  function save() {
    try { localStorage.setItem(STORAGE, JSON.stringify(state)); }
    catch (_) { storageOK = false; notify('Browser saving is unavailable. Keep this tab open and export your results.'); }
  }
  function notify(text) {
    document.querySelector('#notice').textContent = text;
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => { document.querySelector('#notice').textContent = ''; }, 5500);
  }
  function allQuizzes() { return [...bundled, ...state.custom]; }
  function quiz(id) { return allQuizzes().find(q => q.id === id); }
  function attempt(id) { return state.attempts.find(a => a.id === id); }
  function attemptsFor(id) { return state.attempts.filter(a => a.quizId === id); }
  function activeFor(id) { return attemptsFor(id).find(a => a.status === 'in_progress'); }
  function id() { return window.crypto?.randomUUID?.() || `${Date.now()}-${Math.random().toString(36).slice(2)}`; }
  function date(ms) { return new Date(ms).toLocaleString(undefined, { day: 'numeric', month: 'short', hour: '2-digit', minute: '2-digit' }); }
  function answeredCount(q, a) { return q.questions.filter((x, i) => x.parts.every((p, j) => !!a.answers[`${i}-${j}`])).length; }
  function finish(a, automatic = false) {
    if (a.status !== 'in_progress') return;
    a.status = 'completed';
    a.finishedAt = automatic ? a.deadline : (a.timed ? Math.min(Date.now(), a.deadline) : Date.now());
    a.autoSubmitted = automatic;
    a.result = E.grade(quiz(a.quizId), a.answers);
    save();
  }
  function expire() {
    let changed = false;
    state.attempts.forEach(a => {
      if (a.status === 'in_progress' && a.timed && Date.now() >= a.deadline && quiz(a.quizId)) {
        finish(a, true); changed = true;
      }
    });
    return changed;
  }
  function start(quizId, timed) {
    const active = activeFor(quizId);
    if (active) { openAttempt(active.id); return; }
    const now = Date.now();
    const a = { id: id(), quizId, status: 'in_progress', timed, startedAt: now, deadline: timed ? now + 3600000 : null, answers: {}, flags: {} };
    state.attempts.push(a); save(); openAttempt(a.id);
  }
  function openAttempt(attemptId) {
    selected = attemptId; view = 'quiz'; render(); window.scrollTo(0, 0);
  }
  function statusBadge(a) {
    if (!a) return '<span class="badge">Not started</span>';
    return a.status === 'completed' ? '<span class="badge complete">Completed</span>' : '<span class="badge progress">In progress</span>';
  }
  function home() {
    const completed = state.attempts.filter(a => a.status === 'completed');
    const inProgress = state.attempts.filter(a => a.status === 'in_progress');
    const best = completed.length ? Math.max(...completed.map(a => a.result.total)) + '/50' : '—';
    app.innerHTML = `<section class="hero"><div class="eyebrow">Digital Systems · Week 5</div><h1>A little practice.<br>A clearer picture.</h1><p class="lead">Choose a mock, take your time or race the clock, and see what needs another look. Each test covers information coding, Boolean logic and ARM assembly.</p></section>
      ${!storageOK ? '<div class="notice">Saving is unavailable in this browser. Keep the tab open and use Export results before closing.</div>' : ''}
      <section class="summary" aria-label="Your progress"><div class="stat"><strong>${completed.length}</strong><span class="small">Completed attempts</span></div><div class="stat"><strong>${inProgress.length}</strong><span class="small">In progress</span></div><div class="stat"><strong>${best}</strong><span class="small">Best mark</span></div></section>
      <div class="row section-label"><h2>Choose your next mock</h2><span class="small">18 questions · 50 marks · optional 60-minute timer</span></div><div class="cards">${allQuizzes().map(q => {
        const attempts = attemptsFor(q.id), last = attempts[attempts.length - 1], active = activeFor(q.id);
        const done = attempts.filter(a => a.status === 'completed'), latest = done[done.length - 1];
        return `<article class="card">${statusBadge(active || last)}<h2>${esc(q.title)}</h2><p class="small">${esc(q.description || 'Additional practice mock.')}</p><div class="meta"><div><span class="small">Latest mark</span><strong>${latest ? latest.result.total + '/50' : '—'}</strong></div><div><span class="small">${active ? 'Answered' : 'Latest timing'}</span><strong>${active ? answeredCount(q, active) + '/18' : latest ? (latest.timed ? E.duration(E.elapsed(latest)) : 'Untimed') : '—'}</strong></div></div>
          <div class="actions">${active ? `<button data-action="open" data-id="${active.id}">Resume${active.timed ? ' timed' : ''}</button>` : `<button data-action="start" data-quiz="${q.id}">Start untimed</button><button class="secondary" data-action="timed" data-quiz="${q.id}">60 min</button>`}${latest ? `<button class="subtle" data-action="open" data-id="${latest.id}">Review latest →</button>` : ''}</div></article>`;
      }).join('')}</div>
      <section class="history"><div class="row section-label"><h2>Your attempt history</h2><button class="secondary" data-action="export">Export results</button></div>${state.attempts.length ? `<div class="panel scroll"><table><thead><tr><th>Test / started</th><th>Status</th><th>Mark</th><th>Mode / time</th><th></th></tr></thead><tbody>${[...state.attempts].reverse().map(a => `<tr><td><strong>${esc(quiz(a.quizId)?.title || 'Imported mock')}</strong><br><span class="small">${date(a.startedAt)}</span></td><td>${statusBadge(a)}</td><td>${a.status === 'completed' ? a.result.total + '/50' : answeredCount(quiz(a.quizId), a) + '/18 answered'}</td><td>${a.timed ? 'Timed · ' + E.duration(E.elapsed(a)) + (a.autoSubmitted ? '<br><span class="small">Time expired</span>' : '') : 'Untimed'}</td><td><button class="subtle" data-action="open" data-id="${a.id}">${a.status === 'completed' ? 'Review' : 'Resume'} →</button></td></tr>`).join('')}</tbody></table></div>` : '<p class="empty">Your first attempt will appear here. New copies start with a clean history.</p>'}</section>
      <section class="panel" style="margin-top:25px"><div class="row"><div><h2>Ready for a fresh set?</h2><p class="small">Copy the ready-made prompt into Claude or Codex, then import the JSON response here.</p></div><button class="secondary" data-action="generate">Create a new mock →</button></div></section>`;
  }
  const ALLOWED = new Set(['P','BR','PRE','CODE','TABLE','CAPTION','THEAD','TBODY','TFOOT','TR','TH','TD','STRONG','EM','UL','OL','LI']);
  const DROP = new Set(['SCRIPT','STYLE','IFRAME','OBJECT','EMBED','SVG','MATH','LINK','META']);
  function safePrompt(html) {
    const template = document.createElement('template'); template.innerHTML = html;
    const out = document.createElement('div');
    function copy(node, parent) {
      if (node.nodeType === 3) { parent.append(document.createTextNode(node.textContent)); return; }
      if (node.nodeType !== 1 || DROP.has(node.tagName)) return;
      let target = parent;
      if (ALLOWED.has(node.tagName)) { target = document.createElement(node.tagName.toLowerCase()); parent.append(target); }
      [...node.childNodes].forEach(n => copy(n, target));
    }
    [...template.content.childNodes].forEach(n => copy(n, out));
    return out.innerHTML;
  }
  function quizPage() {
    const a = attempt(selected); if (!a) { view = 'home'; home(); return; }
    const q = quiz(a.quizId), done = a.status === 'completed', result = done ? a.result : null;
    app.innerHTML = `<div class="row"><button class="subtle" data-action="home">← All mocks</button><span class="small">${esc(q.title)} · ${done ? 'Review' : a.timed ? 'Timed attempt' : 'Untimed attempt'}</span></div>
      <div class="hero"><div class="eyebrow">${done ? 'Attempt complete' : 'Practice in progress'}</div><h1>${esc(q.title)}</h1><p class="lead">${done ? 'Review your answers and the worked explanations below.' : 'Two sections, 25 marks each. Answers save as you type. Returning to the dashboard keeps this attempt open.'}</p></div>
      ${done ? `<section class="panel" id="result"><div class="row"><div><div class="score">${result.total}<span> / 50 · ${result.total * 2}%</span></div><p>Information coding & logic: <strong>${result.sections[0]}/25</strong> · ARM: <strong>${result.sections[1]}/25</strong></p><p class="small">${a.timed ? `Timed · ${E.duration(E.elapsed(a))} elapsed${a.autoSubmitted ? ' · Automatically submitted at 60 minutes' : ''}` : 'Untimed attempt'} · ${date(a.finishedAt)}</p></div><div class="actions"><button data-action="start" data-quiz="${q.id}">Try again untimed</button><button class="secondary" data-action="timed" data-quiz="${q.id}">Try timed</button></div></div><p class="small">Each part is marked independently. These are practice marks, not official grade boundaries.</p></section>` : `<details class="panel"><summary>Answer format & timing</summary><p>Use exactly the requested widths and prefixes. Hexadecimal letters may be either case. ARM instructions must be lowercase; spaces around commas are flexible. Boolean answers use ASCII primes, alphabetical variables inside terms, no spaces or AND dots; term order may vary.</p><p>Draggable blanks also have keyboard-accessible dropdowns. The timer keeps running if you leave this page; saved answers are submitted at its deadline, or when the page is next opened. There is no pause. Untimed attempts have no deadline.</p></details>`}
      <div class="quiz-layout"><aside class="panel"><strong>Quiz navigation</strong><div id="clock">${done ? 'Submitted' : a.timed ? '' : 'Untimed'}</div><p class="small" id="progress"></p><div class="qnav">${q.questions.map((x, i) => `<a href="#q${i + 1}" data-nav="${i}" aria-label="Question ${i + 1}">${i + 1}</a>`).join('')}</div><p class="small">Green: all parts answered<br>Amber outline: flagged</p>${!done ? '<button data-action="submit">Submit & review</button>' : '<button class="secondary" data-action="home">Back to dashboard</button>'}<div id="submit-confirm" class="hidden"><p class="small" id="unanswered"></p><div class="actions"><button data-action="finish">Submit now</button><button class="secondary" data-action="cancel-submit">Keep working</button></div></div></aside><div id="questions">${q.questions.map((x, i) => {
        const heading = i === 0 || i === 9 ? `<h2 class="section-label">${i === 0 ? 'Section 1 · Coding & logic' : 'Section 2 · ARM assembly'} <span class="marks">25 marks</span></h2>` : '';
        return `${heading}<section class="panel question" id="q${i + 1}"><div class="qhead row"><h2>Q${i + 1}. ${esc(x.title)}</h2><span class="marks">${x.parts.reduce((n, p) => n + p.marks, 0)} marks</span><label class="flag"><input type="checkbox" data-flag="${i}" ${a.flags[i] ? 'checked' : ''}> Flag</label></div><div class="qprompt">${safePrompt(x.prompt)}</div>${x.parts.map((p, j) => {
          const key = `${i}-${j}`, value = a.answers[key] || '', disabled = done ? 'disabled' : '';
          let input;
          if (p.kind === 'drop') input = `<div class="chips" aria-label="Draggable choices">${p.options.map(o => `<span class="chip" draggable="${!done}" data-value="${esc(o)}">${esc(o)}</span>`).join('')}</div><select data-answer="${key}" aria-label="${esc(p.label)}" ${disabled}><option value="">Choose an answer…</option>${p.options.map(o => `<option ${value === o ? 'selected' : ''}>${esc(o)}</option>`).join('')}</select>`;
          else if (p.options) input = p.options.map(o => `<label class="choice"><input type="radio" name="${key}" data-answer="${key}" value="${esc(o)}" ${value === o ? 'checked' : ''} ${disabled}> ${esc(o)}</label>`).join('');
          else input = `<input type="text" data-answer="${key}" aria-label="${esc(p.label)}" value="${esc(value)}" autocomplete="off" autocapitalize="off" spellcheck="false" ${disabled}>`;
          const score = done ? result.questions[i].parts[j] : null;
          return `<fieldset><legend>${j + 1}. ${esc(p.label)} <span class="marks">(${p.marks} ${p.marks === 1 ? 'mark' : 'marks'})</span></legend>${input}${done ? `<div class="feedback ${score.correct ? '' : 'bad'}"><strong>${score.earned}/${p.marks} · ${score.correct ? 'Correct' : value ? 'Incorrect' : 'Unanswered'}</strong>${!score.correct ? `<div>Correct answer: <code>${esc(p.answer)}</code></div>` : ''}</div>` : ''}</fieldset>`;
        }).join('')}${done ? `<div class="feedback"><strong>Explanation</strong><p>${esc(x.why)}</p></div>` : ''}</section>`;
      }).join('')}${!done ? '<div class="actions"><button data-action="submit-bottom">Submit & review</button></div>' : ''}</div></div>`;
    updateQuizProgress(); updateClock();
  }
  function updateQuizProgress() {
    if (view !== 'quiz') return;
    const a = attempt(selected), q = quiz(a.quizId);
    document.querySelector('#progress').textContent = `${answeredCount(q, a)}/18 fully answered`;
    q.questions.forEach((x, i) => {
      const link = document.querySelector(`[data-nav="${i}"]`);
      link.classList.toggle('answered', x.parts.every((p, j) => !!a.answers[`${i}-${j}`]));
      link.classList.toggle('flagged', !!a.flags[i]);
    });
  }
  function updateClock() {
    if (view !== 'quiz') return;
    const a = attempt(selected), node = document.querySelector('#clock');
    if (!node || a.status === 'completed' || !a.timed) return;
    const remaining = Math.max(0, a.deadline - Date.now());
    node.textContent = E.duration(remaining); node.classList.toggle('timer-low', remaining < 300000);
  }
  function generator() {
    app.innerHTML = `<section class="hero"><div class="eyebrow">Fresh questions, same format</div><h1>Create your next mock.</h1><p class="lead">Use the prepared prompt with Claude or Codex. Import the JSON answer here and it will appear beside the bundled tests, with its own marks and history.</p></section><div class="split"><section class="panel"><h2>Three simple steps</h2><ol class="steps"><li><strong>Copy the prompt below.</strong> Paste it into a new Claude or Codex chat.</li><li><strong>Save the response as a .json file.</strong> Request JSON only, with all 18 questions and answers.</li><li><strong>Import that file.</strong> We check the structure and the 25+25 mark split before adding it.</li></ol><p class="small">The prompt defines the topics, question types, answer formats and worked explanations. Check a generated answer key before relying on a new mock; import validation checks structure, not mathematical correctness.</p><label for="quiz-file"><strong>Import a generated quiz (.json)</strong></label><input id="quiz-file" class="file-input" type="file" accept=".json,application/json"><p id="import-status" role="status" class="small"></p></section><section class="panel"><h2>Ready-made generation prompt</h2><p class="small">Nothing is sent to an AI service by this app. You choose where to paste the prompt.</p><div class="actions"><button data-action="copy-prompt">Copy prompt</button><button class="secondary" data-action="download-prompt">Download prompt</button></div><p><label for="prompt" class="small">Prompt text (select and copy if clipboard access is unavailable)</label></p><textarea id="prompt" class="prompt" readonly>${esc(window.GENERATION_PROMPT)}</textarea></section></div><section class="panel"><h2>Adding a quiz permanently to a shared copy</h2><p class="small">Import adds it to this browser. To include it in the folder for everyone, save it in <code>quizzes/</code>, run <code>python3 scripts/build_data.py</code> and share the folder again. See README.md for the full instructions. Export a generated quiz below if you need its JSON again.</p>${state.custom.length ? state.custom.map(q => `<div class="row"><span>${esc(q.title)}</span><button class="subtle" data-action="export-quiz" data-quiz="${q.id}">Download JSON →</button></div>`).join('') : '<p class="small">Imported mocks will appear here.</p>'}</section>`;
  }
  function download(filename, content, type = 'application/json') {
    const url = URL.createObjectURL(new Blob([content], { type })), link = document.createElement('a');
    link.href = url; link.download = filename; link.click(); setTimeout(() => URL.revokeObjectURL(url), 1000);
  }
  function render() { expire(); if (view === 'quiz') quizPage(); else if (view === 'generate') generator(); else home(); }
  function saveAnswer(target) {
    if (view !== 'quiz') return;
    const a = attempt(selected); if (a.status !== 'in_progress') return;
    if (a.timed && Date.now() >= a.deadline) { finish(a, true); render(); return; }
    if (target.dataset.answer !== undefined) a.answers[target.dataset.answer] = target.value;
    else if (target.dataset.flag !== undefined) a.flags[target.dataset.flag] = target.checked;
    else return;
    save(); updateQuizProgress();
  }
  app.addEventListener('input', e => saveAnswer(e.target));
  app.addEventListener('change', async e => {
    if (e.target.id !== 'quiz-file') { saveAnswer(e.target); return; }
    const file = e.target.files[0]; if (!file) return;
    const output = document.querySelector('#import-status');
    try {
      if (file.size > 2000000) throw new Error('Choose a JSON file smaller than 2 MB.');
      const added = E.validate(JSON.parse(await file.text()));
      added.id = `custom-${id()}`;
      state.custom.push(added); save(); view = 'home'; render(); window.scrollTo(0, 0); notify(`Added ${added.title}. Ready to start.`);
    } catch (err) { output.textContent = `Could not import: ${err.message}`; }
  });
  app.addEventListener('dragstart', e => { if (e.target.dataset.value !== undefined) e.dataTransfer.setData('text/plain', e.target.dataset.value); });
  app.addEventListener('dragover', e => { if (e.target.tagName === 'SELECT' && !e.target.disabled) e.preventDefault(); });
  app.addEventListener('drop', e => {
    const target = e.target;
    if (target.tagName !== 'SELECT' || target.disabled) return;
    e.preventDefault(); const value = e.dataTransfer.getData('text/plain');
    if ([...target.options].some(o => o.value === value)) { target.value = value; saveAnswer(target); }
  });
  document.addEventListener('click', async e => {
    const button = e.target.closest('[data-action]'); if (!button) return;
    const action = button.dataset.action;
    if (action === 'home' || action === 'generate') { view = action; selected = null; render(); window.scrollTo(0, 0); }
    else if (action === 'start' || action === 'timed') start(button.dataset.quiz, action === 'timed');
    else if (action === 'open') openAttempt(button.dataset.id);
    else if (action === 'submit' || action === 'submit-bottom') {
      const a = attempt(selected), count = answeredCount(quiz(a.quizId), a);
      document.querySelector('#unanswered').textContent = `${count}/18 questions fully answered. Submit this attempt and reveal the answers?`;
      document.querySelector('#submit-confirm').classList.remove('hidden');
      document.querySelector('#submit-confirm').scrollIntoView({ behavior: 'smooth', block: 'center' });
    } else if (action === 'cancel-submit') document.querySelector('#submit-confirm').classList.add('hidden');
    else if (action === 'finish') { finish(attempt(selected)); render(); window.scrollTo(0, 0); }
    else if (action === 'export') {
      download('digital-systems-results.json', JSON.stringify({ exportedAt: new Date().toISOString(), attempts: state.attempts.map(a => ({ ...a, quizTitle: quiz(a.quizId)?.title })) }, null, 2));
      notify('Results exported. Keep this file for your own records.');
    } else if (action === 'download-prompt') download('NEW_MOCK_PROMPT.md', window.GENERATION_PROMPT, 'text/markdown');
    else if (action === 'export-quiz') download(`${button.dataset.quiz}.json`, JSON.stringify(quiz(button.dataset.quiz), null, 2));
    else if (action === 'copy-prompt') {
      try { await navigator.clipboard.writeText(window.GENERATION_PROMPT); notify('Prompt copied. Paste it into Claude or Codex.'); }
      catch (_) { const box = document.querySelector('#prompt'); box.focus(); box.select(); notify('Prompt selected. Press Ctrl+C or Cmd+C to copy.'); }
    }
  });
  render();
  setInterval(() => { if (expire()) render(); else updateClock(); }, 1000);
  document.addEventListener('visibilitychange', () => { if (document.visibilityState === 'visible' && expire()) render(); });
})();
