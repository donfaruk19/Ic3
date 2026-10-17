// =================================================================
// IC3 GS6 ENGINE — v2.0 (GMetrix-style + binary_group support)
// =================================================================

let session = {
    mode: "training",
    currentTrack: null,
    selectedModule: null,
    currentIdx: 0,
    questions: [],
    userAnswers: [],
    flags: [],
    timerId: null,
    timeRemaining: 45 * 60,
    getCurrentQuestion: function() { return this.questions[this.currentIdx] || null; }
};

document.addEventListener("DOMContentLoaded", function() {
    window.UI = {
        dashScreen: document.getElementById('dashboard-screen'),
        workScreen: document.getElementById('workspace-screen'),
        setupScreen: document.getElementById('setup-screen'),
        examContainer: document.getElementById('exam-container'),
        optionsContainer: document.getElementById('options-container'),
        interactiveContainer: document.getElementById('interactive-container'),
        qText: document.getElementById('question-text'),
        progressIndicator: document.getElementById('progress-indicator'),
        progressFill: document.getElementById('exam-progress-fill'),
        timer: document.getElementById('exam-timer'),
        modeBadge: document.getElementById('exam-mode-badge'),
        prevBtn: document.getElementById('prev-btn'),
        nextBtn: document.getElementById('next-btn'),
        flagBtn: document.getElementById('flag-btn'),
        navGrid: document.getElementById('navigator-grid'),
        navToggle: document.getElementById('nav-toggle'),
        navigatorPanel: document.getElementById('exam-navigator'),
        resultScreen: document.getElementById('result-screen'),
        candidateNameInput: document.getElementById('candidate-name'),
        moduleSelect: document.getElementById('module-select'),
        modeSelect: document.getElementById('mode-select'),
        reportName: document.getElementById('report-candidate-name'),
        reportScore: document.getElementById('report-final-score'),
        reportOutcome: document.getElementById('report-outcome-text'),
        reportTime: document.getElementById('report-time'),
        analysisBody: document.getElementById('analysisTableBody'),
        reviewBody: document.getElementById('reviewTableBody')
    };
});

document.addEventListener("DOMContentLoaded", () => {
    if (UI.nextBtn) UI.nextBtn.addEventListener("click", handleNext);
    if (UI.prevBtn) UI.prevBtn.addEventListener("click", handlePrev);
    if (UI.flagBtn) UI.flagBtn.addEventListener("click", toggleFlag);
    if (UI.navToggle) UI.navToggle.addEventListener("click", () => {
        UI.navigatorPanel.classList.toggle('collapsed');
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

function selectTrack(trackId) {
    session.currentTrack = trackId;
    if (typeof masterQuestionBank === 'undefined') {
        alert("CRITICAL: questions.js not loaded.");
        return;
    }
    const targetKey = 'level' + trackId;
    const levelData = masterQuestionBank[targetKey];
    if (!levelData) { console.error("No data for " + targetKey); return; }

    UI.dashScreen.classList.add('hidden');
    UI.workScreen.classList.remove('hidden');
    UI.setupScreen.classList.remove('hidden');
    UI.examContainer.classList.add('hidden');
    UI.resultScreen.classList.add('hidden');

    UI.moduleSelect.innerHTML = "";
    let allOpt = document.createElement('option');
    allOpt.value = 'all';
    allOpt.textContent = `🎯 ALL LEVEL ${trackId} OBJECTIVES (Combined)`;
    UI.moduleSelect.appendChild(allOpt);

    Object.keys(levelData).forEach(lessonKey => {
        let nOpt = document.createElement('option');
        nOpt.value = lessonKey;
        nOpt.textContent = levelData[lessonKey].title;
        UI.moduleSelect.appendChild(nOpt);
    });
}

// =================================================================
// FLASHCARD OVERLAY (unchanged contract)
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
    UI.timer.textContent = "🧠 FLASHCARD MODE";
    if (UI.modeBadge) UI.modeBadge.textContent = "Study";
    UI.nextBtn.style.display = 'none';
    UI.prevBtn.style.display = 'none';
    UI.flagBtn.style.display = 'none';
    renderFlashcard();
}

function renderFlashcard() {
    if (!flashcardDeck.length) return;
    const card = flashcardDeck[currentCardIdx];
    cardIsFlipped = false;
    UI.progressIndicator.textContent = `Flashcard ${currentCardIdx + 1} of ${flashcardDeck.length} · ${card.category}`;
    UI.progressFill.style.width = `${((currentCardIdx + 1) / flashcardDeck.length) * 100}%`;
    UI.qText.innerHTML = `<div style="font-size:0.78rem;color:var(--accent-gold);letter-spacing:1px;text-transform:uppercase;margin-bottom:8px;">${card.topic}</div><div style="font-size:1.2rem;line-height:1.5;">${card.front}</div>`;
    UI.optionsContainer.innerHTML = "";
    UI.interactiveContainer.innerHTML = `
        <div id="flashcard-plate" onclick="flipFlashcard()" style="background:var(--bg-tertiary);border:2px dashed var(--border-color);padding:45px 20px;text-align:center;border-radius:10px;cursor:pointer;margin:20px 0;">
            <p id="flashcard-content" style="margin:0;color:var(--text-muted);">🖱️ Click to reveal the answer</p>
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
        plate.style.borderColor = "var(--accent-gold)";
        plate.style.background = "rgba(212,175,55,0.06)";
        content.innerHTML = `<div style="text-align:left;"><strong style="color:var(--success);font-size:0.8rem;letter-spacing:1px;text-transform:uppercase;display:block;margin-bottom:8px;">✓ Answer</strong><p style="margin:0;color:var(--text-main);line-height:1.6;">${card.back}</p></div>`;
    } else {
        plate.style.borderColor = "var(--border-color)";
        plate.style.background = "var(--bg-tertiary)";
        content.innerHTML = "🖱️ Click to reveal the answer";
    }
}

function terminateStudyInterface() {
    UI.examContainer.classList.add('hidden');
    UI.setupScreen.classList.remove('hidden');
    UI.nextBtn.style.display = '';
    UI.prevBtn.style.display = '';
    UI.flagBtn.style.display = '';
    UI.navigatorPanel.classList.remove('collapsed');
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
                let clone = JSON.parse(JSON.stringify(q));
                clone.sourceLesson = levelData[k].title;
                session.questions.push(clone);
            });
        });
    } else if (levelData[session.selectedModule]?.questions) {
        levelData[session.selectedModule].questions.forEach(q => {
            let clone = JSON.parse(JSON.stringify(q));
            clone.sourceLesson = levelData[session.selectedModule].title;
            session.questions.push(clone);
        });
    }

    if (!session.questions.length) { alert("This module has 0 questions."); return; }

    session.userAnswers = new Array(session.questions.length).fill(null);
    session.flags = new Array(session.questions.length).fill(false);

    UI.setupScreen.classList.add('hidden');
    UI.examContainer.classList.remove('hidden');
    UI.resultScreen.classList.add('hidden');
    UI.navigatorPanel.classList.remove('collapsed');
    if (UI.modeBadge) UI.modeBadge.textContent = session.mode === "testing" ? "Testing" : "Training";
    const cand = document.getElementById('exam-candidate-display');
    if (cand && UI.candidateNameInput) cand.textContent = UI.candidateNameInput.value || "Guest Candidate";

    clearInterval(session.timerId);
    if (session.mode === "testing") {
        session.timeRemaining = 45 * 60;
        runSimulationClock();
    } else {
        session.timeRemaining = 0;
        runTrainingClock();
    }
    loadQuestion();
}

// =================================================================
// RENDERING
// =================================================================
function loadQuestion() {
    const q = session.getCurrentQuestion();
    if (!q) return;

    UI.qText.textContent = q.q;
    UI.optionsContainer.innerHTML = "";
    UI.interactiveContainer.innerHTML = "";
    const oldFb = document.getElementById("runtime-feedback");
    if (oldFb) oldFb.remove();

    UI.progressIndicator.textContent = `Item ${session.currentIdx + 1} of ${session.questions.length}`;
    UI.progressFill.style.width = `${((session.currentIdx + 1) / session.questions.length) * 100}%`;

    UI.flagBtn.textContent = session.flags[session.currentIdx] ? "★ Marked for Review" : "Mark for Review";
    UI.flagBtn.classList.toggle('flagged', session.flags[session.currentIdx]);

    switch (q.type) {
        case "mcq": renderMCQ(q); break;
        case "multi": renderMultiSelect(q); break;
        case "ordering": renderOrdering(q); break;
        case "match": renderMatching(q); break;
        case "binary_group": renderBinaryGroup(q); break;
        default:
            UI.optionsContainer.innerHTML = `<p style="color:var(--error);">Unsupported type: ${q.type}</p>`;
    }

    UI.prevBtn.disabled = session.currentIdx === 0;
    UI.nextBtn.textContent = session.currentIdx === session.questions.length - 1 ? "Finish Test" : "Next ▶";

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
            updateNavigator(); updateProgressBar();
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
            updateNavigator(); updateProgressBar();
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
            updateNavigator(); updateProgressBar();
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
    // Build unique option labels from pairs (prevents answer leak, handles duplicates)
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
            updateNavigator(); updateProgressBar();
            if (session.mode === "training") {
                const ready = Object.keys(links).length === q.pairs.length && !Object.values(links).includes(undefined);
                if (ready) {
                    const pass = q.pairs.every((p, i) => links[i] === correctIndices[i]);
                    triggerImmediateFeedback(pass, q.exp);
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
        if (ready) {
            const pass = q.pairs.every((p, i) => saved[i] === correctIndices[i]);
            triggerImmediateFeedback(pass, q.exp);
        }
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
                updateNavigator(); updateProgressBar();
                if (session.mode === "training" && !answers.includes(null)) {
                    const pass = answers.every((a, i) => a === q.statements[i].correct);
                    triggerImmediateFeedback(pass, q.exp);
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
        const pass = saved.every((a, i) => a === q.statements[i].correct);
        triggerImmediateFeedback(pass, q.exp);
    }
}

function triggerImmediateFeedback(isCorrect, explanationText) {
    const old = document.getElementById("runtime-feedback");
    if (old) old.remove();
    const box = document.createElement("div");
    box.id = "runtime-feedback";
    box.className = "feedback-box " + (isCorrect ? "correct" : "wrong");
    box.innerHTML = `<strong>${isCorrect ? "✓ Correct" : "✗ Incorrect"}</strong><p>${explanationText || ""}</p>`;
    UI.optionsContainer.parentNode.insertBefore(box, UI.interactiveContainer.nextSibling);
}

// =================================================================
// NAVIGATOR + PROGRESS
// =================================================================
function isAnswered(idx) {
    const q = session.questions[idx];
    const ans = session.userAnswers[idx];
    if (ans === null || ans === undefined) return false;
    if (q.type === "mcq") return ans !== null;
    if (q.type === "multi") return Array.isArray(ans) && ans.length > 0;
    if (q.type === "ordering") return Array.isArray(ans) && !ans.includes("");
    if (q.type === "match") return Object.keys(ans).length === q.pairs.length && !Object.values(ans).includes(undefined);
    if (q.type === "binary_group") return Array.isArray(ans) && ans.length === q.statements.length && !ans.includes(null);
    return false;
}

function updateNavigator() {
    if (!UI.navGrid) return;
    UI.navGrid.innerHTML = "";
    session.questions.forEach((q, idx) => {
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

function updateProgressBar() {
    const answered = session.questions.reduce((sum, _, idx) => sum + (isAnswered(idx) ? 1 : 0), 0);
    if (UI.progressFill) UI.progressFill.style.width = `${((session.currentIdx + 1) / session.questions.length) * 100}%`;
}

// =================================================================
// NAVIGATION + FLAG
// =================================================================
function handleNext() {
    if (session.currentIdx < session.questions.length - 1) { session.currentIdx++; loadQuestion(); }
    else { confirmSubmit(); }
}
function handlePrev() { if (session.currentIdx > 0) { session.currentIdx--; loadQuestion(); } }
function toggleFlag() { session.flags[session.currentIdx] = !session.flags[session.currentIdx]; loadQuestion(); }

function confirmSubmit() {
    const unanswered = session.questions.filter((_, i) => !isAnswered(i)).length;
    if (unanswered > 0 && !confirm(`You have ${unanswered} unanswered question(s). Submit anyway?`)) return;
    processSystemReport();
}

// =================================================================
// TIMERS
// =================================================================
function runSimulationClock() {
    clearInterval(session.timerId);
    session.timerId = setInterval(() => {
        session.timeRemaining--;
        if (session.timeRemaining <= 0) {
            clearInterval(session.timerId);
            alert("Time's up. Submitting your exam.");
            processSystemReport(); return;
        }
        const m = Math.floor(session.timeRemaining / 60), s = session.timeRemaining % 60;
        UI.timer.textContent = `⏱ ${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
        UI.timer.classList.toggle('warning', session.timeRemaining < 300);
    }, 1000);
}
function runTrainingClock() {
    clearInterval(session.timerId);
    session.timeRemaining = 0;
    session.timerId = setInterval(() => {
        session.timeRemaining++;
        const m = Math.floor(session.timeRemaining / 60), s = session.timeRemaining % 60;
        UI.timer.textContent = `⏱ ${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
    }, 1000);
}

// =================================================================
// SCORING + RESULTS
// =================================================================
function processSystemReport() {
    clearInterval(session.timerId);
    let totalCorrect = 0;
    let analyticsMap = {};
    let reviewRows = [];

    session.questions.forEach((q, idx) => {
        let answer = session.userAnswers[idx];
        let correct = false;
        let userDisplay = "—", correctDisplay = "—";

        if (answer !== null && answer !== undefined) {
            if (q.type === "mcq" && answer === q.cor) { correct = true; userDisplay = `${String.fromCharCode(65 + answer)}. ${q.a[answer]}`; }
            else if (q.type === "mcq") userDisplay = `${String.fromCharCode(65 + answer)}. ${q.a[answer]}`;
            if (q.type === "multi" && Array.isArray(answer)) {
                correct = [...answer].sort().join(',') === [...q.cor].sort().join(',');
                userDisplay = answer.map(i => String.fromCharCode(65 + i)).join(', ') || "—";
            }
            if (q.type === "ordering" && Array.isArray(answer)) {
                correct = JSON.stringify(answer) === JSON.stringify(q.cor);
                userDisplay = answer.map(n => n === "" ? "—" : n + 1).join(' → ');
            }
            if (q.type === "match" && typeof answer === 'object') {
                const uniqueOptions = [];
                const seen = new Set();
                q.pairs.forEach(p => { if (!seen.has(p.match)) { seen.add(p.match); uniqueOptions.push(p.match); } });
                const correctIndices = q.pairs.map(p => uniqueOptions.indexOf(p.match));
                correct = q.pairs.every((p, i) => answer[i] === correctIndices[i]);
                userDisplay = Object.values(answer).map(v => v === undefined ? "—" : uniqueOptions[v]).join(' · ');
            }
            if (q.type === "binary_group" && Array.isArray(answer)) {
                correct = answer.every((a, i) => a === q.statements[i].correct);
                userDisplay = answer.map((a, i) => a === null ? "—" : q.options[a]).join(' · ');
            }
        }

        if (q.type === "mcq") correctDisplay = `${String.fromCharCode(65 + q.cor)}. ${q.a[q.cor]}`;
        else if (q.type === "multi") correctDisplay = q.cor.map(i => String.fromCharCode(65 + i)).join(', ');
        else if (q.type === "binary_group") correctDisplay = q.statements.map(s => q.options[s.correct]).join(' · ');
        else if (q.type === "ordering") correctDisplay = q.cor.map(n => n + 1).join(' → ');
        else if (q.type === "match") {
            const uniqueOptions = [];
            const seen = new Set();
            q.pairs.forEach(p => { if (!seen.has(p.match)) { seen.add(p.match); uniqueOptions.push(p.match); } });
            correctDisplay = q.pairs.map(p => uniqueOptions.indexOf(p.match)).map(i => uniqueOptions[i]).join(' · ');
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
    UI.resultScreen.classList.remove('hidden');

    UI.reportName.textContent = UI.candidateNameInput.value || "Candidate";
    UI.reportScore.textContent = `${pct}%`;
    UI.reportScore.style.color = pass ? "var(--success)" : "var(--error)";

    const mins = Math.floor(session.timeRemaining / 60), secs = session.timeRemaining % 60;
    if (UI.reportTime) UI.reportTime.textContent = session.mode === "testing" ? `${45 - mins}m ${60 - secs}s` : `${mins}m ${secs}s`;

    if (UI.reportOutcome) {
        UI.reportOutcome.textContent = pass ? "PASS — CERTIFICATION BENCHMARK MET" : "FAIL — RETRY REQUIRED";
        UI.reportOutcome.className = "outcome-badge " + (pass ? "pass" : "fail");
    }

    UI.analysisBody.innerHTML = "";
    Object.keys(analyticsMap).forEach(domain => {
        const m = analyticsMap[domain];
        const p = Math.round((m.points / m.scale) * 100);
        const tr = document.createElement("tr");
        tr.innerHTML = `<td>${domain}</td><td style="text-align:right;color:${p >= 70 ? 'var(--success)' : 'var(--error)'};font-weight:600;">${m.points} / ${m.scale} (${p}%)</td>`;
        UI.analysisBody.appendChild(tr);
    });

    if (UI.reviewBody) {
        UI.reviewBody.innerHTML = reviewRows.map(r => `
            <tr class="${r.correct ? 'review-correct' : 'review-wrong'}">
                <td>Q${r.num}</td>
                <td>${r.q.substring(0, 70)}${r.q.length > 70 ? '…' : ''}</td>
                <td>${r.userDisplay}</td>
                <td style="color:var(--success);">${r.correctDisplay}</td>
                <td>${r.correct ? '✅' : '❌'}</td>
            </tr>`).join('');
    }
}

function returnToDashboard() {
    if (!confirm("Exit the current session?")) return;
    clearInterval(session.timerId);
    UI.workScreen.classList.add('hidden');
    UI.dashScreen.classList.remove('hidden');
    session.currentTrack = null;
}
