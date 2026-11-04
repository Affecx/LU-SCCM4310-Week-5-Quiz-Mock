/* Pure validation, marking and time helpers; shared by the app and checks. */
(function (root) {
  'use strict';
  const KINDS = new Set(['text', 'hex', 'asm', 'boolean', 'drop']);
  function normalize(value, part) {
    if (part.kind === 'hex') return value.toLowerCase();
    if (part.kind === 'asm') return value.replace(/\s+/g, ' ').replace(/\s*,\s*/g, ',').trim();
    if (part.kind === 'boolean') return value.split('+').sort().join('+');
    return value;
  }
  function correct(value, part) {
    return [part.answer, ...(part.accept || [])].some(a => normalize(value, part) === normalize(a, part));
  }
  function grade(quiz, answers) {
    let sections = [0, 0];
    const questions = quiz.questions.map((q, i) => {
      const parts = q.parts.map((p, j) => {
        const ok = correct(answers[`${i}-${j}`] || '', p);
        return { correct: ok, earned: ok ? p.marks : 0, possible: p.marks };
      });
      const earned = parts.reduce((n, p) => n + p.earned, 0);
      sections[i < 9 ? 0 : 1] += earned;
      return { earned, possible: q.parts.reduce((n, p) => n + p.marks, 0), parts };
    });
    return { total: sections[0] + sections[1], sections, questions };
  }
  function validate(quiz) {
    const fail = message => { throw new Error(message); };
    const string = (s, max) => typeof s === 'string' && s.length > 0 && s.length <= max;
    if (!quiz || typeof quiz !== 'object' || Array.isArray(quiz)) fail('The file must contain one quiz object.');
    if (!string(quiz.id, 80) || !/^[a-z0-9-]+$/.test(quiz.id)) fail('Quiz id must use lowercase letters, numbers and hyphens.');
    if (!string(quiz.title, 120)) fail('Supply a title of 1–120 characters.');
    if (quiz.description !== undefined && (typeof quiz.description !== 'string' || quiz.description.length > 1000)) fail('Description must be text under 1,001 characters.');
    if (!Array.isArray(quiz.questions) || quiz.questions.length !== 18) fail('A mock must contain exactly 18 questions.');
    const totals = [0, 0];
    quiz.questions.forEach((q, i) => {
      const prefix = `Question ${i + 1}: `;
      if (!q || !string(q.title, 200) || !string(q.prompt, 18000) || !string(q.why, 12000)) fail(prefix + 'supply title, prompt and explanation (why).');
      if (!Array.isArray(q.parts) || q.parts.length < 1 || q.parts.length > 12) fail(prefix + 'supply 1–12 parts.');
      q.parts.forEach(p => {
        if (!p || !string(p.label, 1500) || !string(p.answer, 1500)) fail(prefix + 'each part needs a label and a nonempty answer.');
        if (!Number.isInteger(p.marks) || p.marks < 1 || p.marks > 25) fail(prefix + 'marks must be positive integers.');
        if (p.kind !== undefined && !KINDS.has(p.kind)) fail(prefix + 'unknown answer kind.');
        if (p.options !== undefined && p.options !== null) {
          if (!Array.isArray(p.options) || p.options.length < 2 || p.options.length > 20 || !p.options.every(s => string(s, 1500)) || new Set(p.options).size !== p.options.length) fail(prefix + 'options must be 2–20 distinct text values.');
          if (!p.options.includes(p.answer)) fail(prefix + 'correct answer must be one of the options.');
        }
        if (p.kind === 'drop' && !Array.isArray(p.options)) fail(prefix + 'drop parts require options.');
        if (p.accept !== undefined && (!Array.isArray(p.accept) || p.accept.length > 20 || !p.accept.every(s => string(s, 1500)))) fail(prefix + 'accept must be a list of answer strings.');
        totals[i < 9 ? 0 : 1] += p.marks;
      });
    });
    if (totals[0] !== 25 || totals[1] !== 25) fail(`Sections must each total 25 marks; this file has ${totals[0]} and ${totals[1]}.`);
    return quiz;
  }
  function elapsed(attempt, now = Date.now()) {
    const end = attempt.finishedAt || (attempt.timed ? Math.min(now, attempt.deadline) : now);
    return Math.max(0, end - attempt.startedAt);
  }
  function duration(ms) {
    const seconds = Math.floor(Math.max(0, ms) / 1000);
    return `${Math.floor(seconds / 60)}:${String(seconds % 60).padStart(2, '0')}`;
  }
  const api = { normalize, correct, grade, validate, elapsed, duration };
  root.QuizEngine = api;
  if (typeof module !== 'undefined' && module.exports) module.exports = api;
})(typeof window === 'undefined' ? globalThis : window);
