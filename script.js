// =================================================================
// IC3 GS6 ENGINE — v3.0 
// =================================================================

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
    timerPaused: false,
    timerId: null,
    timeRemaining: 0,
    getCurrentQuestion: function() { return this.questions[this.currentIdx] || null; }
};

document.addEventListener("DOMContentLoaded", function() {
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
        analysisBody: document.getElementById('analysisTableBody'),
        reviewBody: document.getElementById('reviewTableBody'),
        reviewTableContainer: document.getElementById('review-table-container'),
        showSolutionsWrap: document.getElementById('show-solutions-wrap')
    };
});

document.addEventListener("DOMContentLoaded", () => {
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
        if (!UI.examContainer || UI.examContainer.classList.contains('hidden')) return;
        if (e.target.matches('input,select,textarea')) return;
        if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
            if (!UI.nextBtn.disabled) { e.preventDefault(); handleNext(); }
        } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
            if (!UI.prevBtn.disabled) { e.preventDefault(); handlePrev(); }
        } else if (e.key.toLowerCase() === 'f') {
            toggleFlag();
        }
    });
});

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
    if (q.type === "mcq") {
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
    // ordering & match: leave as-is (semantic order matters)
    return q;
}

// =================================================================
// TRACK SELECT
// =================================================================
function selectTrack(trackId) {
    session.currentTrack = trackId;
    if (typeof masterQuestionBank === 'undefined') { alert("CRITICAL: questions.js not loaded."); return; }
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
        alert("Flashcards unavailable for this level."); return;
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
    if (flashcardDeck.length === 0) { alert("No flashcards for this selection."); return; }
    UI.setupScreen.classList.add('hidden');
    UI.examContainer.classList.remove('hidden');
    UI.navigatorPanel.classList.add('collapsed');
    document.querySelector('.exam-main')?.classList.add('nav-collapsed');
    UI.timer.textContent = "🧠 FLASHCARD MODE";
    if (UI.modeBadge) UI.modeBadge.textContent = "Study";
    UI.nextBtn.style.display = 'none';
    UI.prevBtn.style.display = 'none';
    UI.flagBtn.style.display = 'none';
    if (UI.pauseBtn) UI.pauseBtn.style.display = 'none';
    if (UI.reviewAllBtn) UI.reviewAllBtn.style.display = 'none';
    renderFlashcard();
}

function renderFlashcard() {
    if (!flashcardDeck.length) return;
    const card = flashcardDeck[currentCardIdx];
    cardIsFlipped = false;
    UI.progressIndicator.textContent = `Flashcard ${currentCardIdx + 1} of ${flashcardDeck.length} · ${card.category}`;
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
    UI.nextBtn.style.display = '';
    UI.prevBtn.style.display = '';
    UI.flagBtn.style.display = '';
    if (UI.reviewAllBtn) UI.reviewAllBtn.style.display = '';
    UI.navigatorPanel.classList.remove('collapsed');
    document.querySelector('.exam-main')?.classList.remove('nav-collapsed');
}

// =================================================================
// EXAM DEPLOYMENT
// =================================================================
function deployExamSandbox() {
    if (!session.currentTrack) { alert("No track selected."); return; }
    session.mode = UI.modeSelect.value;
    session.selectedModule = UI.moduleSelect.value;
    session.currentIdx = 0;
    session.questions = [];

    const levelData = masterQuestionBank['level' + session.currentTrack];
    if (!levelData) { alert("Level data missing."); return; }

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
    if (!session.questions.length) { alert("This module has 0 questions."); return; }

    // Randomize in testing mode
    if (session.mode === "testing") {
        session.questions = shuffleArray(session.questions);
        session.questions.forEach(q => randomizeQuestion(q));
    }

    // Init tracking
    session.userAnswers = new Array(session.questions.length).fill(null);
    session.flags = new Array(session.questions.length).fill(false);
    session.revealed = new Array(session.questions.length).fill(false);
    session.showSolutions = false;
    session.reviewMode = false;
    session.timerPaused = false;

    UI.setupScreen.classList.add('hidden');
    UI.examContainer.classList.remove('hidden');
    UI.reviewScreen.classList.add('hidden');
    UI.resultScreen.classList.add('hidden');
    UI.navigatorPanel.classList.remove('collapsed');
    document.querySelector('.exam-main')?.classList.remove('nav-collapsed');
    UI.optionsContainer.classList.remove('locked');

    if (UI.modeBadge) {
        UI.modeBadge.textContent = session.mode === "testing" ? "Testing" : "Training";
        UI.modeBadge.classList.toggle('testing', session.mode === "testing");
    }
    if (UI.candidateDisplay) UI.candidateDisplay.textContent = UI.candidateNameInput.value || "Guest Candidate";
    if (UI.pauseBtn) UI.pauseBtn.style.display = session.mode === "testing" ? "" : "none";
    if (UI.pauseBtn) UI.pauseBtn.textContent = "⏸ Pause";
    UI.timer.classList.remove('paused', 'warning');

    clearInterval(session.timerId);
    if (session.mode === "testing") {
        // Certiport-style scaling: ~60s per item, clamped 10–45 min
        const perItem = 60, minSec = 600, maxSec = 45 * 60;
        session.timeRemaining = Math.min(maxSec, Math.max(minSec, session.questions.length * perItem));
        runSimulationClock();
    } else {
        session.timeRemaining = 0;
        UI.timer.textContent = "⏱ 00:00";
        runTrainingClock();
    }
    loadQuestion();
}

// =================================================================
// QUESTION RENDERING
// =================================================================
function loadQuestion() {
    const q = session.getCurrentQuestion();
    if (!q) return;
    const idx = session.currentIdx;

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

    // Reveal button — training mode only
    if (session.mode === "training" && !session.revealed[idx]) {
        const rb = document.createElement("button");
        rb.className = "reveal-btn";
        rb.textContent = "👁 Reveal Correct Answer";
        rb.onclick = () => { session.revealed[idx] = true; loadQuestion(); };
        UI.revealContainer.appendChild(rb);
    }

    switch (q.type) {
        case "mcq": renderMCQ(q); break;
        case "multi": renderMultiSelect(q); break;
        case "ordering": renderOrdering(q); break;
        case "match": renderMatching(q); break;
        case "binary_group": renderBinaryGroup(q); break;
        case "single": renderMCQ(q); break; // legacy alias
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
            if (session.mode === "training") triggerImmediateFeedback(index === q.cor, q.exp);
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
            if (session.mode === "training" && chosen.length === (q.required || 0)) {
                const pass = [...chosen].sort().join(',') === [...q.cor].sort().join(',');
                triggerImmediateFeedback(pass, q.exp);
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
            if (session.mode === "training" && !answers.includes("")) {
                triggerImmediateFeedback(JSON.stringify(answers) === JSON.stringify(q.cor), q.exp);
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
            if (session.mode === "training") {
                const ready = Object.keys(links).length === q.pairs.length && !Object.values(links).includes(undefined);
                if (ready) triggerImmediateFeedback(q.pairs.every((p, i) => links[i] === correctIndices[i]), q.exp);
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
                if (session.mode === "training" && !answers.includes(null)) {
                    triggerImmediateFeedback(answers.every((a, i) => a === q.statements[i].correct), q.exp);
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
    if (q.type === "mcq") {
        answerText = `${String.fromCharCode(65 + q.cor)}. ${q.a[q.cor]}`;
    } else if (q.type === "multi") {
        answerText = q.cor.map(i => `${String.fromCharCode(65 + i)}. ${q.a[i]}`).join("<br>");
    } else if (q.type === "binary_group") {
        answerText = q.statements.map(s => `&bull; "${s.text}" → <strong>${q.options[s.correct]}</strong>`).join("<br>");
    } else if (q.type === "ordering") {
        answerText = q.cor
            .map((position, stepIndex) => ({ position, text: q.steps[stepIndex] }))
            .sort((a, b) => a.position - b.position)
            .map((item, i) => `${i + 1}. ${item.text}`)
            .join("<br>");
    } else if (q.type === "match") {
        answerText = q.pairs.map(p => `&bull; ${p.item} → <strong>${p.match}</strong>`).join("<br>");
    }
    const box = document.createElement("div");
    box.id = "runtime-feedback";
    box.className = "feedback-box revealed";
    box.innerHTML = `<strong>👁 Correct Answer Revealed</strong><div style="margin:8px 0;line-height:1.7;color:var(--cp-text);">${answerText}</div>${q.exp ? `<p style="margin-top:10px;padding-top:10px;border-top:1px solid var(--cp-border);font-size:0.88rem;">${q.exp}</p>` : ""}`;
    UI.optionsContainer.parentNode.insertBefore(box, UI.interactiveContainer.nextSibling);
}

// =================================================================
// NAVIGATOR + PROGRESS
// =================================================================
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
function toggleFlag() { session.flags[session.currentIdx] = !session.flags[session.currentIdx]; loadQuestion(); }

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
// REVIEW PHASE
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
        <div class="review-stat"><span>Total Items</span><strong>${total}</strong></div>
        <div class="review-stat answered"><span>Answered</span><strong>${answered}</strong></div>
        <div class="review-stat ${unanswered > 0 ? 'warning' : ''}"><span>Unanswered</span><strong>${unanswered}</strong></div>
        <div class="review-stat flagged"><span>Marked for Review</span><strong>${flagged}</strong></div>
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
    if (unanswered > 0 && !confirm(`You have ${unanswered} unanswered item(s). Submit anyway?`)) return;
    session.reviewMode = false;
    UI.reviewScreen.classList.add('hidden');
    processSystemReport();
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
            alert("Time's up. Submitting your exam.");
            processSystemReport();
            return;
        }
        const m = Math.floor(session.timeRemaining / 60);
        const s = session.timeRemaining % 60;
        UI.timer.textContent = `⏱ ${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
        UI.timer.classList.toggle('warning', session.timeRemaining < 300 && !session.timerPaused);
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
// RESULTS + SCORING
// =================================================================
function processSystemReport() {
    clearInterval(session.timerId);
    let totalCorrect = 0;
    const analyticsMap = {};
    const reviewRows = [];

    session.questions.forEach((q, idx) => {
        const answer = session.userAnswers[idx];
        let correct = false;
        let userDisplay = "—", correctDisplay = "—";

        if (answer !== null && answer !== undefined) {
            if (q.type === "mcq" || q.type === "single") {
                if (answer === q.cor) { correct = true; userDisplay = `${String.fromCharCode(65 + answer)}. ${q.a[answer]}`; }
                else userDisplay = `${String.fromCharCode(65 + answer)}. ${q.a[answer]}`;
            } else if (q.type === "multi" && Array.isArray(answer)) {
                correct = [...answer].sort().join(',') === [...q.cor].sort().join(',');
                userDisplay = answer.map(i => String.fromCharCode(65 + i)).join(', ') || "—";
            } else if (q.type === "ordering" && Array.isArray(answer)) {
                correct = JSON.stringify(answer) === JSON.stringify(q.cor);
                userDisplay = answer.map(n => n === "" ? "—" : n + 1).join(' → ');
            } else if (q.type === "match" && typeof answer === 'object') {
                const uniq = [], seen = new Set();
                q.pairs.forEach(p => { if (!seen.has(p.match)) { seen.add(p.match); uniq.push(p.match); } });
                const correctIndices = q.pairs.map(p => uniq.indexOf(p.match));
                correct = q.pairs.every((_, i) => answer[i] === correctIndices[i]);
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
        reviewRows.push({ num: idx + 1, correct, userDisplay, correctDisplay, q: q.q });
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
    if (UI.reportTime) {
        UI.reportTime.textContent = session.mode === "testing"
            ? `${mins}m ${secs.toString().padStart(2,'0')}s remaining`
            : `${mins}m ${secs.toString().padStart(2,'0')}s elapsed`;
    }
    if (UI.reportAttempted) {
        const att = session.questions.filter((_, i) => isAnswered(i)).length;
        UI.reportAttempted.textContent = `${att} / ${session.questions.length}`;
    }

    if (UI.reportOutcome) {
        UI.reportOutcome.textContent = pass ? "PASS — CERTIFICATION BENCHMARK MET" : "FAIL — RETRY REQUIRED";
        UI.reportOutcome.className = "outcome-badge " + (pass ? "pass" : "fail");
    }

    UI.analysisBody.innerHTML = "";
    Object.keys(analyticsMap).forEach(domain => {
        const m = analyticsMap[domain];
        const p = Math.round((m.points / m.scale) * 100);
        const tr = document.createElement("tr");
        tr.innerHTML = `<td>${domain}</td><td style="text-align:right;color:${p >= 70 ? 'var(--cp-success)' : 'var(--cp-danger)'};font-weight:600;">${m.points} / ${m.scale} (${p}%)</td>`;
        UI.analysisBody.appendChild(tr);
    });

    // Hide detailed solutions in testing mode until user clicks "Show Detailed Solutions"
    const showDetailed = session.mode === "training" || session.showSolutions;
    UI.reviewTableContainer.classList.toggle('hidden', !showDetailed);
    UI.showSolutionsWrap.classList.toggle('hidden', showDetailed);
    if (showDetailed) {
        UI.reviewBody.innerHTML = reviewRows.map(r => `
            <tr class="${r.correct ? 'review-correct' : 'review-wrong'}">
                <td>Q${r.num}</td>
                <td>${r.q.substring(0, 70)}${r.q.length > 70 ? '…' : ''}</td>
                <td>${r.userDisplay}</td>
                <td style="color:var(--cp-success);">${r.correctDisplay}</td>
                <td>${r.correct ? '✅' : '❌'}</td>
            </tr>`).join('');
    } else {
        UI.reviewBody.innerHTML = "";
    }
}

function showDetailedSolutions() {
    session.showSolutions = true;
    processSystemReport();
}

function returnToDashboard() {
    if (!confirm("Exit the current session?")) return;
    clearInterval(session.timerId);
    UI.workScreen.classList.add('hidden');
    UI.dashScreen.classList.remove('hidden');
    session.currentTrack = null;
}
