// =================================================================
// IC3 GS6 ENGINE — v4.0
// =================================================================

const SESSION_KEY = 'ic3gs6_exam_session';
const PREF_KEY = 'ic3gs6_prefs';

let session = {
    mode: "training",
    currentTrack: null,
    selectedModule: null,
    currentIdx: 0,
    questions: [],
    userAnswers: [],
    flags: [],
    revealed: [],
    showSolutions: false,
    reviewMode: false,
    reviewFilter: 'all',
    timerPaused: false,
    timerId: null,
    timeRemaining: 0,
    startTime: 0,
    perItemTimes: [],
    currentItemStart: 0,
    getCurrentQuestion: function() { return this.questions[this.currentIdx] || null; }
};

let prefs = {
    fontScale: 1,
    highContrast: false,
    autoAdvance: false,
    sound: false
};

document.addEventListener("DOMContentLoaded", function() {
    loadPrefs();
    applyPrefs();

    window.UI = {
        dashScreen: document.getElementById('dashboard-screen'),
        workScreen: document.getElementById('workspace-screen'),
        setupScreen: document.getElementById('setup-screen'),
        examContainer: document.getElementById('exam-container'),
        revealContainer: document.getElementById('reveal-container'),
        optionsContainer: document.getElementById('options-container'),
        interactiveContainer: document.getElementById('interactive-container'),
        qText: document.getElementById('question-text'),
        progressIndicator: document.getElementById('progress-indicator'),
        progressFill: document.getElementById('exam-progress-fill'),
        timer: document.getElementById('exam-timer'),
        modeBadge: document.getElementById('exam-mode-badge'),
        candidateDisplay: document.getElementById('exam-candidate-display'),
        prevBtn: document.getElementById('prev-btn'),
        nextBtn: document.getElementById('next-btn'),
        flagBtn: document.getElementById('flag-btn'),
        pauseBtn: document.getElementById('pause-btn'),
        reviewAllBtn: document.getElementById('review-all-btn'),
        navGrid: document.getElementById('navigator-grid'),
        navToggle: document.getElementById('nav-toggle'),
        navigatorPanel: document.getElementById('exam-navigator'),
        trainingStats: document.getElementById('training-stats'),
        reviewScreen: document.getElementById('review-screen'),
        reviewSummary: document.getElementById('review-summary'),
        reviewGrid: document.getElementById('review-grid'),
        resultScreen: document.getElementById('result-screen'),
        candidateNameInput: document.getElementById('candidate-name'),
        moduleSelect: document.getElementById('module-select'),
        modeSelect: document.getElementById('mode-select'),
        reportName: document.getElementById('report-candidate-name'),
        reportScore: document.getElementById('report-final-score'),
        reportOutcome: document.getElementById('report-outcome-text'),
        reportTime: document.getElementById('report-time'),
        reportAttempted: document.getElementById('report-attempted'),
        reportPerItem: document.getElementById('report-peritem'),
        analysisBody: document.getElementById('analysisTableBody'),
        reviewBody: document.getElementById('reviewTableBody'),
        reviewTableContainer: document.getElementById('review-table-container'),
        showSolutionsWrap: document.getElementById('show-solutions-wrap'),
        reviewFilterBar: document.getElementById('review-filter-bar'),
        modalOverlay: document.getElementById('modal-overlay'),
        modalTitle: document.getElementById('modal-title'),
        modalBody: document.getElementById('modal-body'),
        modalActions: document.getElementById('modal-actions'),
        settingsDrawer: document.getElementById('settings-drawer'),
        autosave: document.getElementById('autosave-indicator')
    };

    wireEvents();
});

function wireEvents() {
    if (UI.nextBtn) UI.nextBtn.addEventListener("click", handleNext);
    if (UI.prevBtn) UI.prevBtn.addEventListener("click", handlePrev);
    if (UI.flagBtn) UI.flagBtn.addEventListener("click", toggleFlag);
    if (UI.pauseBtn) UI.pauseBtn.addEventListener("click", togglePause);
    if (UI.reviewAllBtn) UI.reviewAllBtn.addEventListener("click", openReview);
    if (UI.navToggle) UI.navToggle.addEventListener("click", () => {
        UI.navigatorPanel.classList.toggle('collapsed');
        document.querySelector('.exam-main')?.classList.toggle('nav-collapsed');
    });
    document.getElementById("setup-form").addEventListener("submit", (e) => {
        e.preventDefault();
        deployExamSandbox();
    });
    document.addEventListener('keydown', (e) => {
        if (UI.modalOverlay && !UI.modalOverlay.classList.contains('hidden')) return;
        if (!UI.examContainer || UI.examContainer.classList.contains('hidden')) return;
        if (e.target.matches('input,select,textarea')) return;
        if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
            if (!UI.nextBtn.disabled) { e.preventDefault(); handleNext(); }
        } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
            if (!UI.prevBtn.disabled) { e.preventDefault(); handlePrev(); }
        } else if (e.key.toLowerCase() === 'f') {
            e.preventDefault(); toggleFlag();
        } else if (e.key.toLowerCase() === 'r' && e.key.length === 1) {
            e.preventDefault(); openReview();
        } else if (e.key.toLowerCase() === 'p') {
            e.preventDefault(); if (session.mode === 'testing') togglePause();
        } else if (e.key === '?') {
            e.preventDefault(); showShortcuts();
        }
    });
    // review filter buttons
    document.querySelectorAll('#review-filter-bar [data-filter]').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('#review-filter-bar [data-filter]').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            session.reviewFilter = btn.dataset.filter;
            renderReviewTable();
        });
    });
}

// =================================================================
// PREFS
// =================================================================
function loadPrefs() {
    try {
        const s = localStorage.getItem(PREF_KEY);
        if (s) prefs = { ...prefs, ...JSON.parse(s) };
    } catch (e) {}
    const fc = document.getElementById('toggle-contrast');
    const fa = document.getElementById('toggle-autoadvance');
    const fs = document.getElementById('toggle-sound');
    if (fc) fc.checked = prefs.highContrast;
    if (fa) fa.checked = prefs.autoAdvance;
    if (fs) fs.checked = prefs.sound;
}
function savePrefs() { try { localStorage.setItem(PREF_KEY, JSON.stringify(prefs)); } catch (e) {} }
function applyPrefs() {
    document.documentElement.style.setProperty('--font-scale', prefs.fontScale);
    document.body.classList.toggle('high-contrast', prefs.highContrast);
    document.querySelectorAll('.font-size-controls button').forEach(b => {
        b.classList.toggle('active', parseFloat(b.dataset.font) === prefs.fontScale);
    });
}
function setFontScale(v) { prefs.fontScale = v; applyPrefs(); savePrefs(); }
function setHighContrast(v) { prefs.highContrast = v; applyPrefs(); savePrefs(); }
function setAutoAdvance(v) { prefs.autoAdvance = v; savePrefs(); }
function setSound(v) { prefs.sound = v; savePrefs(); }
function openSettings() { UI.settingsDrawer.classList.add('open'); }
function closeSettings() { UI.settingsDrawer.classList.remove('open'); }

// =================================================================
// MODAL
// =================================================================
function showModal({ title, body, actions }) {
    UI.modalTitle.textContent = title;
    UI.modalBody.innerHTML = body;
    UI.modalActions.innerHTML = '';
    actions.forEach(a => {
        const b = document.createElement('button');
        b.className = a.class || 'btn-secondary';
        b.textContent = a.label;
        b.onclick = () => { UI.modalOverlay.classList.add('hidden'); a.onClick && a.onClick(); };
        UI.modalActions.appendChild(b);
    });
    UI.modalOverlay.classList.remove('hidden');
}
function showConfirm(msg, onConfirm, opts = {}) {
    showModal({
        title: opts.title || 'Confirm',
        body: `<p>${msg}</p>`,
        actions: [
            { label: 'Cancel', class: 'btn-secondary' },
            { label: opts.confirmLabel || 'Confirm', class: opts.danger ? 'btn-danger' : 'btn-primary', onClick: onConfirm }
        ]
    });
}
function showAlert(msg, opts = {}) {
    showModal({
        title: opts.title || 'Notice',
        body: `<p>${msg}</p>`,
        actions: [{ label: 'OK', class: 'btn-primary' }]
    });
}

// =================================================================
// KEYBOARD SHORTCUTS
// =================================================================
function showShortcuts() {
    showModal({
        title: 'Keyboard Shortcuts',
        body: `
            <div class="shortcuts-grid">
                <div class="shortcut-item"><span>Previous item</span><span class="shortcut-key">←</span></div>
                <div class="shortcut-item"><span>Next item</span><span class="shortcut-key">→</span></div>
                <div class="shortcut-item"><span>Mark for review</span><span class="shortcut-key">F</span></div>
                <div class="shortcut-item"><span>Open review</span><span class="shortcut-key">R</span></div>
                <div class="shortcut-item"><span>Pause timer</span><span class="shortcut-key">P</span></div>
                <div class="shortcut-item"><span>Show help</span><span class="shortcut-key">?</span></div>
            </div>`,
        actions: [{ label: 'Close', class: 'btn-primary' }]
    });
}

// =================================================================
// SESSION PERSISTENCE
// =================================================================
function saveSession() {
    if (!session.questions.length) return;
    try {
        const data = {
            version: 4,
            timestamp: Date.now(),
            track: session.currentTrack,
            module: session.selectedModule,
            mode: session.mode,
            questions: session.questions,
            userAnswers: session.userAnswers,
            flags: session.flags,
            revealed: session.revealed,
            currentIdx: session.currentIdx,
            timeRemaining: session.timeRemaining,
            startTime: session.startTime,
            perItemTimes: session.perItemTimes,
            candidate: UI.candidateNameInput?.value || ''
        };
        localStorage.setItem(SESSION_KEY, JSON.stringify(data));
        flashAutosave();
    } catch (e) { console.warn('Save failed', e); }
}

function loadSession() {
    try {
        const raw = localStorage.getItem(SESSION_KEY);
        if (!raw) return null;
        const data = JSON.parse(raw);
        if (data.version !== 4) return null;
        // Sessions older than 24 hours are stale
        if (Date.now() - data.timestamp > 24 * 60 * 60 * 1000) { localStorage.removeItem(SESSION_KEY); return null; }
        return data;
    } catch (e) { return null; }
}

function clearSavedSession() {
    localStorage.removeItem(SESSION_KEY);
    showAlert('Saved session cleared.', { title: 'Cleared' });
}

function flashAutosave() {
    if (!UI.autosave) return;
    UI.autosave.classList.add('show');
    clearTimeout(UI.autosave._t);
    UI.autosave._t = setTimeout(() => UI.autosave.classList.remove('show'), 1200);
}

function resumeSession(data) {
    session.currentTrack = data.track;
    session.selectedModule = data.module;
    session.mode = data.mode;
    session.questions = data.questions;
    session.userAnswers = data.userAnswers;
    session.flags = data.flags;
    session.revealed = data.revealed || new Array(data.questions.length).fill(false);
    session.currentIdx = data.currentIdx;
    session.timeRemaining = data.timeRemaining;
    session.startTime = data.startTime;
    session.perItemTimes = data.perItemTimes || new Array(data.questions.length).fill(0);
    session.currentItemStart = Date.now();

    UI.dashScreen.classList.add('hidden');
    UI.workScreen.classList.remove('hidden');
    UI.setupScreen.classList.add('hidden');
    UI.reviewScreen.classList.add('hidden');
    UI.resultScreen.classList.add('hidden');
    UI.examContainer.classList.remove('hidden');
    UI.navigatorPanel.classList.remove('collapsed');
    document.querySelector('.exam-main')?.classList.remove('nav-collapsed');

    if (UI.candidateNameInput) UI.candidateNameInput.value = data.candidate || 'Guest Candidate';
    if (UI.candidateDisplay) UI.candidateDisplay.textContent = data.candidate || 'Guest Candidate';
    if (UI.modeBadge) UI.modeBadge.textContent = session.mode === 'testing' ? 'Testing' : 'Training';
    if (UI.pauseBtn) UI.pauseBtn.style.display = session.mode === 'testing' ? '' : 'none';

    session.timerPaused = false;
    if (session.mode === 'testing') runSimulationClock();
    else runTrainingClock();
    loadQuestion();
}

function promptResume() {
    const saved = loadSession();
    if (!saved) return false;
    const ago = Math.round((Date.now() - saved.timestamp) / 60000);
    showModal({
        title: 'Resume Session',
        body: `<p>We found an unfinished <strong>${saved.mode}</strong> session (Level ${saved.track}${saved.module !== 'all' ? ', ' + saved.module : ''}) started <strong>${ago} minute${ago === 1 ? '' : 's'}</strong> ago.</p><p style="margin-top:12px;color:var(--cp-text-muted);">Item ${saved.currentIdx + 1} of ${saved.questions.length} · ${saved.userAnswers.filter(a => a !== null).length} answered</p><p style="margin-top:12px;">Would you like to resume?</p>`,
        actions: [
            { label: 'Start Fresh', class: 'btn-secondary', onClick: () => { localStorage.removeItem(SESSION_KEY); } },
            { label: 'Resume', class: 'btn-primary', onClick: () => resumeSession(saved) }
        ]
    });
    return true;
}

// =================================================================
// HELPERS
// =================================================================
function shuffleArray(arr) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}
function randomizeQuestion(q) {
    if (q.type === "mcq" || q.type === "single") {
        const order = shuffleArray(q.a.map((_, i) => i));
        q.a = order.map(i => q.a[i]);
        q.cor = order.indexOf(q.cor);
    } else if (q.type === "multi") {
        const order = shuffleArray(q.a.map((_, i) => i));
        q.a = order.map(i => q.a[i]);
        q.cor = q.cor.map(c => order.indexOf(c));
    } else if (q.type === "binary_group" && Array.isArray(q.statements)) {
        q.statements = shuffleArray(q.statements);
    }
    return q;
}

function playTone(correct) {
    if (!prefs.sound) return;
    try {
        const ctx = new (window.AudioContext || window.webkitAudioContext)();
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.connect(gain); gain.connect(ctx.destination);
        osc.frequency.value = correct ? 660 : 220;
        gain.gain.setValueAtTime(0.08, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.2);
        osc.start(); osc.stop(ctx.currentTime + 0.2);
    } catch (e) {}
}

// =================================================================
// TRACK SELECT
// =================================================================
function selectTrack(trackId) {
    session.currentTrack = trackId;
    if (typeof masterQuestionBank === 'undefined') { showAlert("questions.js not loaded.", { title: 'Error' }); return; }
    const levelData = masterQuestionBank['level' + trackId];
    if (!levelData) { console.error("No data for level" + trackId); return; }

    UI.dashScreen.classList.add('hidden');
    UI.workScreen.classList.remove('hidden');
    UI.setupScreen.classList.remove('hidden');
    UI.examContainer.classList.add('hidden');
    UI.reviewScreen.classList.add('hidden');
    UI.resultScreen.classList.add('hidden');

    UI.moduleSelect.innerHTML = "";
    const allOpt = document.createElement('option');
    allOpt.value = 'all';
    allOpt.textContent = `🎯 ALL LEVEL ${trackId} OBJECTIVES (Combined)`;
    UI.moduleSelect.appendChild(allOpt);
    Object.keys(levelData).forEach(k => {
        const o = document.createElement('option');
        o.value = k;
        o.textContent = levelData[k].title;
        UI.moduleSelect.appendChild(o);
    });
}

// =================================================================
// FLASHCARDS
// =================================================================
let flashcardDeck = [], currentCardIdx = 0, cardIsFlipped = false;

function deployFlashcards() {
    session.selectedModule = UI.moduleSelect ? UI.moduleSelect.value : "all";
    const targetLevelKey = 'level' + session.currentTrack;
    if (typeof masterFlashcardBank === 'undefined' || !masterFlashcardBank[targetLevelKey]) {
        showAlert("Flashcards unavailable for this level.", { title: 'Error' }); return;
    }
    const levelData = masterFlashcardBank[targetLevelKey];
    flashcardDeck = []; currentCardIdx = 0; cardIsFlipped = false;
    if (session.selectedModule === "all") {
        Object.keys(levelData).forEach(k => {
            if (levelData[k].cards) levelData[k].cards.forEach(c => flashcardDeck.push({ ...c, category: levelData[k].title }));
        });
    } else if (levelData[session.selectedModule]?.cards) {
        levelData[session.selectedModule].cards.forEach(c => flashcardDeck.push({ ...c, category: levelData[session.selectedModule].title }));
    }
    if (flashcardDeck.length === 0) { showAlert("No flashcards for this selection."); return; }
    UI.setupScreen.classList.add('hidden');
    UI.examContainer.classList.remove('hidden');
    UI.navigatorPanel.classList.add('collapsed');
    document.querySelector('.exam-main')?.classList.add('nav-collapsed');
    UI.timer.textContent = "🧠 FLASHCARD";
    if (UI.modeBadge) UI.modeBadge.textContent = "Study";
    document.querySelector('.exam-actions-top').style.display = 'none';
    renderFlashcard();
}

function renderFlashcard() {
    if (!flashcardDeck.length) return;
    const card = flashcardDeck[currentCardIdx];
    cardIsFlipped = false;
    UI.progressIndicator.textContent = `Card ${currentCardIdx + 1} of ${flashcardDeck.length} · ${card.category}`;
    UI.progressFill.style.width = `${((currentCardIdx + 1) / flashcardDeck.length) * 100}%`;
    UI.qText.innerHTML = `<div style="font-size:0.78rem;color:var(--cp-warning);letter-spacing:1px;text-transform:uppercase;margin-bottom:8px;">${card.topic}</div><div style="font-size:1.2rem;line-height:1.5;">${card.front}</div>`;
    UI.revealContainer.innerHTML = "";
    UI.optionsContainer.innerHTML = "";
    UI.interactiveContainer.innerHTML = `
        <div id="flashcard-plate" onclick="flipFlashcard()" style="background:var(--cp-surface-alt);border:2px dashed var(--cp-border);padding:45px 20px;text-align:center;border-radius:10px;cursor:pointer;margin:20px 0;">
            <p id="flashcard-content" style="margin:0;color:var(--cp-text-muted);">🖱️ Click to reveal the answer</p>
        </div>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-top:20px;">
            <button id="study-prev-btn" class="btn-secondary" ${currentCardIdx === 0 ? 'disabled' : ''}>← Previous</button>
            <button id="study-next-btn" class="btn-primary">${currentCardIdx === flashcardDeck.length - 1 ? 'Finish Session' : 'Next →'}</button>
        </div>`;
    document.getElementById('study-prev-btn').onclick = () => { if (currentCardIdx > 0) { currentCardIdx--; renderFlashcard(); } };
    document.getElementById('study-next-btn').onclick = () => {
        if (currentCardIdx < flashcardDeck.length - 1) { currentCardIdx++; renderFlashcard(); }
        else { terminateStudyInterface(); }
    };
}
function flipFlashcard() {
    const plate = document.getElementById("flashcard-plate");
    const content = document.getElementById("flashcard-content");
    if (!plate || !content) return;
    cardIsFlipped = !cardIsFlipped;
    const card = flashcardDeck[currentCardIdx];
    if (cardIsFlipped) {
        plate.style.borderColor = "var(--cp-warning)";
        plate.style.background = "var(--cp-warning-bg)";
        content.innerHTML = `<div style="text-align:left;"><strong style="color:var(--cp-success);font-size:0.8rem;letter-spacing:1px;text-transform:uppercase;display:block;margin-bottom:8px;">✓ Answer</strong><p style="margin:0;color:var(--cp-text);line-height:1.6;">${card.back}</p></div>`;
    } else {
        plate.style.borderColor = "var(--cp-border)";
        plate.style.background = "var(--cp-surface-alt)";
        content.innerHTML = "🖱️ Click to reveal the answer";
    }
}
function terminateStudyInterface() {
    UI.examContainer.classList.add('hidden');
    UI.setupScreen.classList.remove('hidden');
    UI.navigatorPanel.classList.remove('collapsed');
    document.querySelector('.exam-main')?.classList.remove('nav-collapsed');
    document.querySelector('.exam-actions-top').style.display = '';
}

// =================================================================
// EXAM DEPLOYMENT
// =================================================================
function deployExamSandbox() {
    if (!session.currentTrack) { showAlert("No track selected."); return; }
    session.mode = UI.modeSelect.value;
    session.selectedModule = UI.moduleSelect.value;
    session.currentIdx = 0;
    session.questions = [];
    session.perItemTimes = [];

    const levelData = masterQuestionBank['level' + session.currentTrack];
    if (!levelData) { showAlert("Level data missing."); return; }

    if (session.selectedModule === "all") {
        Object.keys(levelData).forEach(k => {
            (levelData[k].questions || []).forEach(q => {
                const clone = JSON.parse(JSON.stringify(q));
                clone.sourceLesson = levelData[k].title;
                session.questions.push(clone);
            });
        });
    } else if (levelData[session.selectedModule]?.questions) {
        levelData[session.selectedModule].questions.forEach(q => {
            const clone = JSON.parse(JSON.stringify(q));
            clone.sourceLesson = levelData[session.selectedModule].title;
            session.questions.push(clone);
        });
    }
    if (!session.questions.length) { showAlert("This module has 0 questions."); return; }

    if (session.mode === "testing") {
        session.questions = shuffleArray(session.questions);
        session.questions.forEach(q => randomizeQuestion(q));
    }

    session.userAnswers = new Array(session.questions.length).fill(null);
    session.flags = new Array(session.questions.length).fill(false);
    session.revealed = new Array(session.questions.length).fill(false);
    session.perItemTimes = new Array(session.questions.length).fill(0);
    session.currentItemStart = Date.now();
    session.showSolutions = false;
    session.reviewMode = false;
    session.reviewFilter = 'all';
    session.timerPaused = false;
    session.startTime = Date.now();

    UI.setupScreen.classList.add('hidden');
    UI.examContainer.classList.remove('hidden');
    UI.reviewScreen.classList.add('hidden');
    UI.resultScreen.classList.add('hidden');
    UI.navigatorPanel.classList.remove('collapsed');
    document.querySelector('.exam-main')?.classList.remove('nav-collapsed');
    document.querySelector('.exam-actions-top').style.display = '';
    UI.optionsContainer.classList.remove('locked');

    if (UI.modeBadge) UI.modeBadge.textContent = session.mode === "testing" ? "Testing" : "Training";
    if (UI.candidateDisplay) UI.candidateDisplay.textContent = UI.candidateNameInput.value || "Guest Candidate";
    if (UI.pauseBtn) UI.pauseBtn.style.display = session.mode === "testing" ? "" : "none";
    if (UI.trainingStats) UI.trainingStats.style.display = session.mode === "training" ? "" : "none";
    UI.timer.classList.remove('warn-15', 'warn-5', 'warn-1', 'paused');

    clearInterval(session.timerId);
    if (session.mode === "testing") {
        const perItem = 60, minSec = 600, maxSec = 45 * 60;
        session.timeRemaining = Math.min(maxSec, Math.max(minSec, session.questions.length * perItem));
        runSimulationClock();
    } else {
        session.timeRemaining = 0;
        UI.timer.textContent = "⏱ 00:00";
        runTrainingClock();
    }
    loadQuestion();
    saveSession();
}

// =================================================================
// RENDERING
// =================================================================
function loadQuestion() {
    const q = session.getCurrentQuestion();
    if (!q) return;
    const idx = session.currentIdx;

    // record time spent on previous item
    if (session.currentItemStart && session.perItemTimes[idx] !== undefined) {
        // add elapsed to current item tracking (approximate)
    }
    session.currentItemStart = Date.now();

    UI.qText.textContent = q.q;
    UI.revealContainer.innerHTML = "";
    UI.optionsContainer.innerHTML = "";
    UI.optionsContainer.classList.remove('locked');
    UI.interactiveContainer.innerHTML = "";
    document.getElementById("runtime-feedback")?.remove();

    UI.progressIndicator.textContent = `Item ${idx + 1} of ${session.questions.length}`;
    UI.progressFill.style.width = `${((idx + 1) / session.questions.length) * 100}%`;

    UI.flagBtn.textContent = session.flags[idx] ? "★ Marked for Review" : "Mark for Review";
    UI.flagBtn.classList.toggle('flagged', session.flags[idx]);

    if (session.mode === "training" && !session.revealed[idx]) {
        const rb = document.createElement("button");
        rb.className = "reveal-btn";
        rb.textContent = "👁 Reveal Correct Answer";
        rb.onclick = () => { session.revealed[idx] = true; loadQuestion(); };
        UI.revealContainer.appendChild(rb);
    }

    switch (q.type) {
        case "mcq": case "single": renderMCQ(q); break;
        case "multi": renderMultiSelect(q); break;
        case "ordering": renderOrdering(q); break;
        case "match": renderMatching(q); break;
        case "binary_group": renderBinaryGroup(q); break;
        default:
            UI.optionsContainer.innerHTML = `<p style="color:var(--cp-danger);">Unsupported type: ${q.type}</p>`;
    }

    if (session.revealed[idx]) {
        UI.optionsContainer.classList.add('locked');
        showAnswerReveal(q);
    }

    UI.prevBtn.disabled = idx === 0;
    UI.nextBtn.textContent = idx === session.questions.length - 1 ? "Review & Submit ▶" : "Next ▶";
    updateNavigator();
    updateTrainingStats();
}

function renderMCQ(q) {
    const saved = session.userAnswers[session.currentIdx];
    q.a.forEach((text, index) => {
        const btn = document.createElement("button");
        btn.type = "button";
        btn.className = "option-btn" + (saved === index ? " selected" : "");
        btn.innerHTML = `<span class="opt-letter">${String.fromCharCode(65 + index)}</span><span class="opt-text">${text}</span>`;
        btn.onclick = () => {
            session.userAnswers[session.currentIdx] = index;
            document.querySelectorAll(".option-btn").forEach((b, i) => b.classList.toggle("selected", i === index));
            updateNavigator();
            updateTrainingStats();
            saveSession();
            if (session.mode === "training") {
                triggerImmediateFeedback(index === q.cor, q.exp);
                playTone(index === q.cor);
                if (prefs.autoAdvance && index === q.cor && session.currentIdx < session.questions.length - 1) {
                    setTimeout(() => handleNext(), 800);
                }
            }
        };
        UI.optionsContainer.appendChild(btn);
    });
    if (session.mode === "training" && saved !== null && saved !== undefined) {
        triggerImmediateFeedback(saved === q.cor, q.exp);
    }
}

function renderMultiSelect(q) {
    let chosen = session.userAnswers[session.currentIdx] || [];
    UI.optionsContainer.innerHTML = `<p class="group-hint">Select ${q.required || 'all that apply'} option${(q.required || 2) > 1 ? 's' : ''}:</p>`;
    q.a.forEach((text, index) => {
        const row = document.createElement("div");
        row.className = "option-btn multi" + (chosen.includes(index) ? " selected" : "");
        row.innerHTML = `<span class="opt-check">${chosen.includes(index) ? '✓' : ''}</span><span class="opt-letter">${String.fromCharCode(65 + index)}</span><span class="opt-text">${text}</span>`;
        row.onclick = () => {
            const pos = chosen.indexOf(index);
            if (pos === -1) chosen.push(index); else chosen.splice(pos, 1);
            session.userAnswers[session.currentIdx] = [...chosen];
            row.classList.toggle("selected");
            row.querySelector(".opt-check").textContent = chosen.includes(index) ? '✓' : '';
            updateNavigator();
            updateTrainingStats();
            saveSession();
            if (session.mode === "training" && chosen.length === (q.required || 0)) {
                const pass = [...chosen].sort().join(',') === [...q.cor].sort().join(',');
                triggerImmediateFeedback(pass, q.exp);
                playTone(pass);
            }
        };
        UI.optionsContainer.appendChild(row);
    });
}

function renderOrdering(q) {
    let answers = session.userAnswers[session.currentIdx] || new Array(q.steps.length).fill("");
    UI.optionsContainer.innerHTML = `<p class="group-hint">Assign the correct sequence number to each step:</p>`;
    q.steps.forEach((stepText, index) => {
        const row = document.createElement("div");
        row.className = "order-row";
        const sel = document.createElement("select");
        sel.className = "order-select";
        sel.innerHTML = '<option value="">-</option>' + q.steps.map((_, i) => `<option value="${i}" ${answers[index] === i ? 'selected' : ''}>${i + 1}</option>`).join('');
        sel.onchange = () => {
            answers[index] = sel.value === "" ? "" : Number(sel.value);
            session.userAnswers[session.currentIdx] = answers;
            updateNavigator();
            updateTrainingStats();
            saveSession();
            if (session.mode === "training" && !answers.includes("")) {
                const pass = JSON.stringify(answers) === JSON.stringify(q.cor);
                triggerImmediateFeedback(pass, q.exp);
                playTone(pass);
            }
        };
        row.innerHTML = `<span class="order-text">${stepText}</span>`;
        row.appendChild(sel);
        UI.optionsContainer.appendChild(row);
    });
    if (session.mode === "training" && session.userAnswers[session.currentIdx] && !session.userAnswers[session.currentIdx].includes("")) {
        triggerImmediateFeedback(JSON.stringify(session.userAnswers[session.currentIdx]) === JSON.stringify(q.cor), q.exp);
    }
}

function renderMatching(q) {
    const uniqueOptions = [];
    const seen = new Set();
    q.pairs.forEach(p => { if (!seen.has(p.match)) { seen.add(p.match); uniqueOptions.push(p.match); } });
    const correctIndices = q.pairs.map(p => uniqueOptions.indexOf(p.match));

    let links = session.userAnswers[session.currentIdx] || {};
    UI.optionsContainer.innerHTML = `<p class="group-hint">Select the correct match for each item:</p>`;
    q.pairs.forEach((pair, idx) => {
        const row = document.createElement("div");
        row.className = "match-row";
        const label = document.createElement("div");
        label.className = "match-label";
        label.textContent = pair.item;
        const sel = document.createElement("select");
        sel.className = "match-select";
        sel.innerHTML = '<option value="">-- Select --</option>' +
            uniqueOptions.map((opt, oi) => `<option value="${oi}" ${links[idx] === oi ? 'selected' : ''}>${opt}</option>`).join('');
        sel.onchange = () => {
            links[idx] = sel.value === "" ? undefined : Number(sel.value);
            session.userAnswers[session.currentIdx] = links;
            updateNavigator();
            updateTrainingStats();
            saveSession();
            if (session.mode === "training") {
                const ready = Object.keys(links).length === q.pairs.length && !Object.values(links).includes(undefined);
                if (ready) {
                    const pass = q.pairs.every((p, i) => links[i] === correctIndices[i]);
                    triggerImmediateFeedback(pass, q.exp);
                    playTone(pass);
                }
            }
        };
        row.appendChild(label);
        row.appendChild(sel);
        UI.optionsContainer.appendChild(row);
    });
    if (session.mode === "training" && session.userAnswers[session.currentIdx]) {
        const saved = session.userAnswers[session.currentIdx];
        const ready = Object.keys(saved).length === q.pairs.length && !Object.values(saved).includes(undefined);
        if (ready) triggerImmediateFeedback(q.pairs.every((p, i) => saved[i] === correctIndices[i]), q.exp);
    }
}

function renderBinaryGroup(q) {
    let answers = session.userAnswers[session.currentIdx] || new Array(q.statements.length).fill(null);
    UI.optionsContainer.innerHTML = `<p class="group-hint">For each statement, select <strong>${q.options.join("</strong> or <strong>")}</strong>:</p>`;
    q.statements.forEach((stmt, idx) => {
        const row = document.createElement("div");
        row.className = "statement-row";
        const text = document.createElement("div");
        text.className = "statement-text";
        text.textContent = stmt.text;
        const btns = document.createElement("div");
        btns.className = "statement-btns";
        q.options.forEach((label, optIdx) => {
            const b = document.createElement("button");
            b.type = "button";
            b.className = "binary-btn" + (answers[idx] === optIdx ? " selected" : "");
            b.textContent = label;
            b.onclick = () => {
                answers[idx] = optIdx;
                session.userAnswers[session.currentIdx] = [...answers];
                btns.querySelectorAll(".binary-btn").forEach((bb, i) => bb.classList.toggle("selected", i === optIdx));
                updateNavigator();
                updateTrainingStats();
                saveSession();
                if (session.mode === "training" && !answers.includes(null)) {
                    const pass = answers.every((a, i) => a === q.statements[i].correct);
                    triggerImmediateFeedback(pass, q.exp);
                    playTone(pass);
                }
            };
            btns.appendChild(b);
        });
        row.appendChild(text);
        row.appendChild(btns);
        UI.optionsContainer.appendChild(row);
    });
    if (session.mode === "training" && session.userAnswers[session.currentIdx] && !session.userAnswers[session.currentIdx].includes(null)) {
        const saved = session.userAnswers[session.currentIdx];
        triggerImmediateFeedback(saved.every((a, i) => a === q.statements[i].correct), q.exp);
    }
}

function triggerImmediateFeedback(isCorrect, explanationText) {
    document.getElementById("runtime-feedback")?.remove();
    const box = document.createElement("div");
    box.id = "runtime-feedback";
    box.className = "feedback-box " + (isCorrect ? "correct" : "wrong");
    box.innerHTML = `<strong>${isCorrect ? "✓ Correct" : "✗ Incorrect"}</strong><p>${explanationText || ""}</p>`;
    UI.optionsContainer.parentNode.insertBefore(box, UI.interactiveContainer.nextSibling);
}

function showAnswerReveal(q) {
    document.getElementById("runtime-feedback")?.remove();
    let answerText = "";
    if (q.type === "mcq" || q.type === "single") {
        answerText = `${String.fromCharCode(65 + q.cor)}. ${q.a[q.cor]}`;
    } else if (q.type === "multi") {
        answerText = q.cor.map(i => `${String.fromCharCode(65 + i)}. ${q.a[i]}`).join("<br>");
    } else if (q.type === "binary_group") {
        answerText = q.statements.map(s => `• "${s.text}" → <strong>${q.options[s.correct]}</strong>`).join("<br>");
    } else if (q.type === "ordering") {
        answerText = q.cor.map((position, stepIndex) => ({ position, text: q.steps[stepIndex] })).sort((a, b) => a.position - b.position).map((item, i) => `${i + 1}. ${item.text}`).join("<br>");
    } else if (q.type === "match") {
        answerText = q.pairs.map(p => `• ${p.item} → <strong>${p.match}</strong>`).join("<br>");
    }
    const box = document.createElement("div");
    box.id = "runtime-feedback";
    box.className = "feedback-box revealed";
    box.innerHTML = `<strong>👁 Correct Answer Revealed</strong><div style="margin:8px 0;line-height:1.7;color:var(--cp-text);">${answerText}</div>${q.exp ? `<p style="margin-top:10px;padding-top:10px;border-top:1px solid var(--cp-border);font-size:0.88rem;">${q.exp}</p>` : ""}`;
    UI.optionsContainer.parentNode.insertBefore(box, UI.interactiveContainer.nextSibling);
}

// =================================================================
// NAVIGATOR + STATS
// =================================================================
function isAnswerCorrect(q, idx) {
    const ans = session.userAnswers[idx];
    if (ans === null || ans === undefined) return false;
    if (q.type === "mcq" || q.type === "single") return ans === q.cor;
    if (q.type === "multi") return [...ans].sort().join(',') === [...q.cor].sort().join(',');
    if (q.type === "ordering") return Array.isArray(ans) && !ans.includes("") && JSON.stringify(ans) === JSON.stringify(q.cor);
    if (q.type === "match") {
        const uniq = [], seen = new Set();
        q.pairs.forEach(p => { if (!seen.has(p.match)) { seen.add(p.match); uniq.push(p.match); } });
        const ci = q.pairs.map(p => uniq.indexOf(p.match));
        return q.pairs.every((_, i) => ans[i] === ci[i]);
    }
    if (q.type === "binary_group") return Array.isArray(ans) && ans.length === q.statements.length && ans.every((a, i) => a === q.statements[i].correct);
    return false;
}

function isAnswered(idx) {
    const q = session.questions[idx];
    const ans = session.userAnswers[idx];
    if (ans === null || ans === undefined) return false;
    if (q.type === "mcq" || q.type === "single") return ans !== null;
    if (q.type === "multi") return Array.isArray(ans) && ans.length > 0;
    if (q.type === "ordering") return Array.isArray(ans) && !ans.includes("");
    if (q.type === "match") return Object.keys(ans).length === q.pairs.length && !Object.values(ans).includes(undefined);
    if (q.type === "binary_group") return Array.isArray(ans) && ans.length === q.statements.length && !ans.includes(null);
    return false;
}

function updateNavigator() {
    if (!UI.navGrid) return;
    UI.navGrid.innerHTML = "";
    session.questions.forEach((_, idx) => {
        const btn = document.createElement("button");
        btn.type = "button";
        btn.className = "nav-cell";
        btn.textContent = idx + 1;
        if (idx === session.currentIdx) btn.classList.add("current");
        if (isAnswered(idx)) btn.classList.add("answered");
        if (session.flags[idx]) btn.classList.add("flagged");
        btn.onclick = () => { session.currentIdx = idx; loadQuestion(); };
        UI.navGrid.appendChild(btn);
    });
}

function updateTrainingStats() {
    if (!UI.trainingStats || session.mode !== "training") return;
    let correct = 0, incorrect = 0, total = 0;
    session.questions.forEach((q, i) => {
        if (isAnswered(i)) { total++; if (isAnswerCorrect(q, i)) correct++; else incorrect++; }
    });
    UI.trainingStats.innerHTML = `
        <span class="stat-correct">✓ ${correct}</span>
        <span class="stat-wrong">✗ ${incorrect}</span>
        <span class="stat-total">${total}/${session.questions.length}</span>
    `;
}

// =================================================================
// NAVIGATION + FLAG + PAUSE
// =================================================================
function handleNext() {
    if (session.currentIdx < session.questions.length - 1) {
        session.currentIdx++;
        loadQuestion();
    } else {
        openReview();
    }
}
function handlePrev() { if (session.currentIdx > 0) { session.currentIdx--; loadQuestion(); } }
function toggleFlag() {
    session.flags[session.currentIdx] = !session.flags[session.currentIdx];
    loadQuestion();
    saveSession();
}

function togglePause() {
    if (session.mode !== "testing") return;
    if (session.timerPaused) {
        session.timerPaused = false;
        runSimulationClock();
        UI.pauseBtn.textContent = "⏸ Pause";
        UI.timer.classList.remove('paused');
    } else {
        session.timerPaused = true;
        clearInterval(session.timerId);
        UI.pauseBtn.textContent = "▶ Resume";
        UI.timer.classList.add('paused');
    }
}

// =================================================================
// REVIEW
// =================================================================
function openReview() {
    session.reviewMode = true;
    UI.examContainer.classList.add('hidden');
    UI.reviewScreen.classList.remove('hidden');

    const total = session.questions.length;
    const answered = session.questions.filter((_, i) => isAnswered(i)).length;
    const flagged = session.flags.filter(Boolean).length;
    const unanswered = total - answered;

    UI.reviewSummary.innerHTML = `
        <div class="review-stat"><span>Total</span><strong>${total}</strong></div>
        <div class="review-stat answered"><span>Answered</span><strong>${answered}</strong></div>
        <div class="review-stat ${unanswered > 0 ? 'warning' : ''}"><span>Unanswered</span><strong>${unanswered}</strong></div>
        <div class="review-stat flagged"><span>Marked</span><strong>${flagged}</strong></div>
    `;

    UI.reviewGrid.innerHTML = "";
    session.questions.forEach((_, i) => {
        const btn = document.createElement("button");
        btn.className = "review-cell";
        btn.textContent = i + 1;
        if (isAnswered(i)) btn.classList.add("answered");
        if (session.flags[i]) btn.classList.add("flagged");
        btn.onclick = () => { session.currentIdx = i; closeReview(); loadQuestion(); };
        UI.reviewGrid.appendChild(btn);
    });
}

function closeReview() {
    session.reviewMode = false;
    UI.reviewScreen.classList.add('hidden');
    UI.examContainer.classList.remove('hidden');
}

function submitFinalExam() {
    const unanswered = session.questions.filter((_, i) => !isAnswered(i)).length;
    const doSubmit = () => {
        session.reviewMode = false;
        UI.reviewScreen.classList.add('hidden');
        processSystemReport();
    };
    if (unanswered > 0) {
        showConfirm(`You have <strong>${unanswered}</strong> unanswered item(s). Submit anyway?`, doSubmit, { title: 'Submit Exam', confirmLabel: 'Submit' });
    } else {
        doSubmit();
    }
}

// =================================================================
// TIMERS
// =================================================================
function runSimulationClock() {
    clearInterval(session.timerId);
    session.timerId = setInterval(() => {
        if (session.timerPaused) return;
        session.timeRemaining--;
        if (session.timeRemaining <= 0) {
            clearInterval(session.timerId);
            showAlert("Time's up. Submitting your exam automatically.", { title: 'Time Expired' });
            processSystemReport();
            return;
        }
        const m = Math.floor(session.timeRemaining / 60);
        const s = session.timeRemaining % 60;
        UI.timer.textContent = `⏱ ${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
        UI.timer.classList.toggle('warn-15', session.timeRemaining <= 900 && session.timeRemaining > 300);
        UI.timer.classList.toggle('warn-5', session.timeRemaining <= 300 && session.timeRemaining > 60);
        UI.timer.classList.toggle('warn-1', session.timeRemaining <= 60);
    }, 1000);
}

function runTrainingClock() {
    clearInterval(session.timerId);
    session.timeRemaining = 0;
    session.timerId = setInterval(() => {
        session.timeRemaining++;
        const m = Math.floor(session.timeRemaining / 60);
        const s = session.timeRemaining % 60;
        UI.timer.textContent = `⏱ ${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
    }, 1000);
}

// =================================================================
// RESULTS
// =================================================================
function processSystemReport() {
    clearInterval(session.timerId);
    localStorage.removeItem(SESSION_KEY);

    let totalCorrect = 0;
    const analyticsMap = {};
    const reviewRows = [];

    session.questions.forEach((q, idx) => {
        const answer = session.userAnswers[idx];
        let correct = false, userDisplay = "—", correctDisplay = "—";

        if (answer !== null && answer !== undefined) {
            if (q.type === "mcq" || q.type === "single") {
                userDisplay = `${String.fromCharCode(65 + answer)}. ${q.a[answer]}`;
                if (answer === q.cor) correct = true;
            } else if (q.type === "multi" && Array.isArray(answer)) {
                correct = [...answer].sort().join(',') === [...q.cor].sort().join(',');
                userDisplay = answer.map(i => String.fromCharCode(65 + i)).join(', ') || "—";
            } else if (q.type === "ordering" && Array.isArray(answer)) {
                correct = JSON.stringify(answer) === JSON.stringify(q.cor);
                userDisplay = answer.map(n => n === "" ? "—" : n + 1).join(' → ');
            } else if (q.type === "match" && typeof answer === 'object') {
                const uniq = [], seen = new Set();
                q.pairs.forEach(p => { if (!seen.has(p.match)) { seen.add(p.match); uniq.push(p.match); } });
                const ci = q.pairs.map(p => uniq.indexOf(p.match));
                correct = q.pairs.every((_, i) => answer[i] === ci[i]);
                userDisplay = Object.values(answer).map(v => v === undefined ? "—" : uniq[v]).join(' · ');
            } else if (q.type === "binary_group" && Array.isArray(answer)) {
                correct = answer.every((a, i) => a === q.statements[i].correct);
                userDisplay = answer.map(a => a === null ? "—" : q.options[a]).join(' · ');
            }
        }

        if (q.type === "mcq" || q.type === "single") correctDisplay = `${String.fromCharCode(65 + q.cor)}. ${q.a[q.cor]}`;
        else if (q.type === "multi") correctDisplay = q.cor.map(i => String.fromCharCode(65 + i)).join(', ');
        else if (q.type === "binary_group") correctDisplay = q.statements.map(s => q.options[s.correct]).join(' · ');
        else if (q.type === "ordering") correctDisplay = q.cor.map(n => n + 1).join(' → ');
        else if (q.type === "match") {
            const uniq = [], seen = new Set();
            q.pairs.forEach(p => { if (!seen.has(p.match)) { seen.add(p.match); uniq.push(p.match); } });
            correctDisplay = q.pairs.map(p => uniq[uniq.indexOf(p.match)]).join(' · ');
        }

        if (correct) totalCorrect++;
        const domain = q.sourceLesson || "Baseline";
        if (!analyticsMap[domain]) analyticsMap[domain] = { points: 0, scale: 0 };
        analyticsMap[domain].scale++;
        if (correct) analyticsMap[domain].points++;
        reviewRows.push({ num: idx + 1, correct, userDisplay, correctDisplay, q: q.q, flagged: session.flags[idx] });
    });

    const pct = Math.round((totalCorrect / session.questions.length) * 100);
    const pass = pct >= 70;

    UI.examContainer.classList.add('hidden');
    UI.reviewScreen.classList.add('hidden');
    UI.resultScreen.classList.remove('hidden');

    UI.reportName.textContent = UI.candidateNameInput.value || "Candidate";
    UI.reportScore.textContent = `${pct}%`;
    UI.reportScore.className = "score-display " + (pass ? "pass" : "fail");

    const mins = Math.floor(session.timeRemaining / 60), secs = session.timeRemaining % 60;
    if (UI.reportTime) UI.reportTime.textContent = session.mode === "testing" ? `${mins}m ${secs.toString().padStart(2,'0')}s left` : `${mins}m ${secs.toString().padStart(2,'0')}s elapsed`;
    const att = session.questions.filter((_, i) => isAnswered(i)).length;
    if (UI.reportAttempted) UI.reportAttempted.textContent = `${att} / ${session.questions.length}`;
    if (UI.reportPerItem) {
        const dur = session.mode === "testing" ? (Math.min(45*60, Math.max(600, session.questions.length*60)) - session.timeRemaining) : session.timeRemaining;
        const avg = att > 0 ? Math.round(dur / att) : 0;
        UI.reportPerItem.textContent = `${Math.floor(avg/60)}m ${avg%60}s`;
    }

    if (UI.reportOutcome) {
        UI.reportOutcome.textContent = pass ? "PASS — CERTIFICATION BENCHMARK MET" : "FAIL — RETRY REQUIRED";
        UI.reportOutcome.className = "outcome-badge " + (pass ? "pass" : "fail");
    }

    // domain breakdown with progress bars
    UI.analysisBody.innerHTML = "";
    Object.keys(analyticsMap).forEach(domain => {
        const m = analyticsMap[domain];
        const p = Math.round((m.points / m.scale) * 100);
        const tr = document.createElement("tr");
        tr.innerHTML = `<td>${domain}</td>
            <td><div class="domain-bar-wrap">
                <span style="font-weight:600;min-width:80px;text-align:right;color:${p>=70?'var(--cp-success)':'var(--cp-danger)'};">${m.points}/${m.scale} (${p}%)</span>
                <div class="domain-bar-track"><div class="domain-bar-fill ${p>=70?'pass':'fail'}" style="width:${p}%;"></div></div>
            </div></td>`;
        UI.analysisBody.appendChild(tr);
    });

    session._reviewRows = reviewRows;
    session._showDetailed = session.mode === "training" || session.showSolutions;

    UI.reviewTableContainer.classList.toggle('hidden', !session._showDetailed);
    UI.showSolutionsWrap.classList.toggle('hidden', session._showDetailed);
    UI.reviewFilterBar.style.display = session._showDetailed ? 'flex' : 'none';

    if (session._showDetailed) {
        session.reviewFilter = 'all';
        document.querySelectorAll('#review-filter-bar [data-filter]').forEach(b => b.classList.toggle('active', b.dataset.filter === 'all'));
        renderReviewTable();
    }
}

function renderReviewTable() {
    if (!session._reviewRows) return;
    const filter = session.reviewFilter || 'all';
    const rows = session._reviewRows.filter(r => {
        if (filter === 'incorrect') return !r.correct;
        if (filter === 'flagged') return r.flagged;
        return true;
    });
    UI.reviewBody.innerHTML = rows.length ? rows.map(r => `
        <tr class="${r.correct ? 'review-correct' : 'review-wrong'}">
            <td>Q${r.num}${r.flagged ? ' ★' : ''}</td>
            <td>${r.q.substring(0, 70)}${r.q.length > 70 ? '…' : ''}</td>
            <td>${r.userDisplay}</td>
            <td style="color:var(--cp-success);">${r.correctDisplay}</td>
            <td>${r.correct ? '✅' : '❌'}</td>
        </tr>`).join('') :
        `<tr><td colspan="5" style="text-align:center;padding:24px;color:var(--cp-text-muted);">No items match this filter.</td></tr>`;
}

function showDetailedSolutions() {
    session.showSolutions = true;
    session._showDetailed = true;
    UI.reviewTableContainer.classList.remove('hidden');
    UI.showSolutionsWrap.classList.add('hidden');
    UI.reviewFilterBar.style.display = 'flex';
    session.reviewFilter = 'all';
    document.querySelectorAll('#review-filter-bar [data-filter]').forEach(b => b.classList.toggle('active', b.dataset.filter === 'all'));
    renderReviewTable();
}

function returnToDashboard() {
    const doExit = () => {
        clearInterval(session.timerId);
        UI.workScreen.classList.add('hidden');
        UI.dashScreen.classList.remove('hidden');
        session.currentTrack = null;
    };
    const hasProgress = session.questions.length && session.userAnswers.some(a => a !== null);
    if (hasProgress) {
        showConfirm("Exit the current session? Your progress will be saved and you can resume later.", doExit, { title: 'Exit Exam', confirmLabel: 'Exit & Save' });
    } else {
        doExit();
    }
}

// =================================================================
// STARTUP — Resume prompt
// =================================================================
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        if (!promptResume()) {
            // no saved session — nothing to do, dashboard is ready
        }
    }, 200);
});
