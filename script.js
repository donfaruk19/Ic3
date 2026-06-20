// =================================================================
// SYSTEM CONTROL EXAM MATRIX & CORE EXECUTION ENGINE
// =================================================================

// High-Security Session Matrix State Object
let session = {
    mode: "training",      
    currentTrack: null,    
    selectedModule: null,  
    currentIdx: 0,
    questions: [],
    userAnswers: [],       
    getCurrentQuestion: function() {
        return this.questions[this.currentIdx] || null;
    },
    flags: [],             
    timerId: null,
    timeRemaining: 45 * 60 
};

// Global DOM Cache Matrix Injection Layer
// All IDs listed here must exist in your index.html
document.addEventListener("DOMContentLoaded", function() {
    // Move all UI to listener
    window.UI = {
        dashScreen: document.getElementById('dashboard-screen'),
        workScreen: document.getElementById('workspace-screen'),
        setupScreen: document.getElementById('setup-screen'),
        examContainer: document.getElementById('exam-container'),
        optionsContainer: document.getElementById('options-container'),
        interactiveContainer: document.getElementById('interactive-container'),
        qText: document.getElementById('question-text'),
        progressIndicator: document.getElementById('progress-indicator'),
        timer: document.getElementById('exam-timer'),
        prevBtn: document.getElementById('prev-btn'),
        nextBtn: document.getElementById('next-btn'),
        flagBtn: document.getElementById('flag-btn'),
        resultScreen: document.getElementById('result-screen'),
        candidateNameInput: document.getElementById('candidate-name'),
        moduleSelect: document.getElementById('module-select'),
        modeSelect: document.getElementById('mode-select'),
        reportName: document.getElementById('report-candidate-name'),
        reportScore: document.getElementById('report-final-score'),
        reportOutcome: document.getElementById('report-outcome-text'),
        analysisBody: document.getElementById('analysisTableBody')
    };
    console.log("UI Mapped Successfully");
});

// Orchestrate initialization bindings once DOM layers stabilize
document.addEventListener("DOMContentLoaded", () => {
    if (UI.nextBtn) UI.nextBtn.addEventListener("click", handleNext);
    if (UI.prevBtn) UI.prevBtn.addEventListener("click", handlePrev);
    if (UI.flagBtn) UI.flagBtn.addEventListener("click", toggleFlag);
    
    const setupForm = document.getElementById("setup-form");
    if (setupForm) {
        setupForm.addEventListener("submit", (e) => {
            e.preventDefault();
            deployExamSandbox();
        });
    }
});

/**
 * Route Tracker Launcher
 */
function selectTrack(trackId) {
    session.currentTrack = trackId;
    
    // Safety check for data structure integrity
    if (typeof masterQuestionBank === 'undefined') {
        alert("CRITICAL SYSTEM ERROR: questions.js database is unmapped or failed to load.");
        return;
    }

    const targetKey = 'level' + trackId;
    const levelData = masterQuestionBank[targetKey];
    
    if (!levelData) {
        console.error("Data matrix for " + targetKey + " not found.");
        return;
    }

    // --- MASTER CONTAINER VIEW TRANSITION PIPELINE ---
    if (UI.dashScreen) UI.dashScreen.classList.add('hidden');
    if (UI.workScreen) UI.workScreen.classList.remove('hidden');
    if (UI.setupScreen) UI.setupScreen.classList.remove('hidden');
    
    if (UI.examContainer) UI.examContainer.classList.add('hidden');
    if (UI.resultScreen) UI.resultScreen.classList.add('hidden');
    let reviewScr = document.getElementById('review-screen');
    if (reviewScr) reviewScr.classList.add('hidden');
    
    // Dynamic population of the objective module selector drop-down
    if (UI.moduleSelect) {
        UI.moduleSelect.innerHTML = "";
        let allOpt = document.createElement('option');
        allOpt.value = 'all';
        allOpt.textContent = `ALL LEVEL ${trackId} COMBINED CORE OBJECTIVES`;
        UI.moduleSelect.appendChild(allOpt);

        Object.keys(levelData).forEach(lessonKey => {
            let nOpt = document.createElement('option');
            nOpt.value = lessonKey;
            nOpt.textContent = levelData[lessonKey].title;
            UI.moduleSelect.appendChild(nOpt);
        });
    }
}

// =================================================================
// RECONFIGURED FLASHCARD CORE MODULE - CARDS.JS ENGINE
// =================================================================
let flashcardDeck = [];
let currentCardIdx = 0;
let cardIsFlipped = false;

function deployFlashcards() {
    session.selectedModule = UI.moduleSelect ? UI.moduleSelect.value : "all";
    const targetLevelKey = 'level' + session.currentTrack;
    
    // Safety verification check on external cards.js file
    if (typeof masterFlashcardBank === 'undefined' || !masterFlashcardBank[targetLevelKey]) {
        alert("Configuration Error: Flashcard repository for this level is unavailable or cards.js is missing.");
        return;
    }

    const levelData = masterFlashcardBank[targetLevelKey];
    flashcardDeck = [];
    currentCardIdx = 0;
    cardIsFlipped = false;

    // Filter and pull from cards.js
    if (session.selectedModule === "all") {
        Object.keys(levelData).forEach(lessonKey => {
            if (levelData[lessonKey].cards && Array.isArray(levelData[lessonKey].cards)) {
                levelData[lessonKey].cards.forEach(card => {
                    flashcardDeck.push({ ...card, category: levelData[lessonKey].title });
                });
            }
        });
    } else if (levelData[session.selectedModule]) {
        if (levelData[session.selectedModule].cards && Array.isArray(levelData[session.selectedModule].cards)) {
            levelData[session.selectedModule].cards.forEach(card => {
                flashcardDeck.push({ ...card, category: levelData[session.selectedModule].title });
            });
        }
    }

    if (flashcardDeck.length === 0) {
        alert("System Notice: No summary flashcards have been added to this lesson module database yet.");
        return;
    }

    // Toggle viewport matrix layout
    if (UI.setupScreen) UI.setupScreen.classList.add('hidden');
    if (UI.examContainer) UI.examContainer.classList.remove('hidden');
    if (UI.timer) UI.timer.textContent = "🧠 Flashcard Study Protocol";
    
    renderFlashcard();
}

function renderFlashcard() {
    if (flashcardDeck.length === 0) return;
    const card = flashcardDeck[currentCardIdx];
    cardIsFlipped = false;

    if (UI.progressIndicator) {
        UI.progressIndicator.textContent = `Review Core: ${currentCardIdx + 1} / ${flashcardDeck.length} [${card.category}]`;
    }

    UI.qText.innerHTML = `
        <div style="font-size:0.8rem; color:var(--accent-gold); margin-bottom:5px; text-transform:uppercase; letter-spacing:1px;">
            Core Objective Vector: ${card.topic}
        </div>
        <div style="font-size:1.2rem; color:#fff; font-weight:600; line-height:1.4;">${card.front}</div>
    `;

    UI.optionsContainer.innerHTML = "";
    UI.interactiveContainer.innerHTML = `
        <div id="flashcard-plate" onclick="flipFlashcard()" style="background: var(--bg-secondary); border: 2px dashed var(--border-color); padding: 40px 20px; text-align: center; border-radius: 8px; cursor: pointer; transition: all 0.2s ease; margin: 20px 0;">
            <p id="flashcard-content" style="font-size: 1.05rem; font-weight: 500; color: var(--text-muted); line-height:1.5;">
                🖱️ Click / Tap Panel Area to Reveal Core Objective Verification Key
            </p>
        </div>
    `;

    UI.prevBtn.disabled = (currentCardIdx === 0);
    UI.prevBtn.onclick = () => { if (currentCardIdx > 0) { currentCardIdx--; renderFlashcard(); } };

    UI.nextBtn.textContent = (currentCardIdx === flashcardDeck.length - 1) ? "Exit Deck Panel" : "Next Objective";
    UI.nextBtn.onclick = () => {
        if (currentCardIdx < flashcardDeck.length - 1) {
            currentCardIdx++;
            renderFlashcard();
        } else {
            if (UI.examContainer) UI.examContainer.classList.add('hidden');
            if (UI.setupScreen) UI.setupScreen.classList.remove('hidden');
            UI.nextBtn.textContent = "Next";
            UI.nextBtn.onclick = handleNext;
            UI.prevBtn.onclick = handlePrev;
        }
    };
    if (UI.flagBtn) UI.flagBtn.textContent = "Study Profile Active";
}

function flipFlashcard() {
    const plate = document.getElementById("flashcard-plate");
    const content = document.getElementById("flashcard-content");
    if (!plate || !content) return;

    const card = flashcardDeck[currentCardIdx];
    cardIsFlipped = !cardIsFlipped;

    if (cardIsFlipped) {
        plate.style.borderColor = "var(--accent-gold)";
        plate.style.background = "rgba(197, 168, 128, 0.03)";
        content.innerHTML = `
            <div style="text-align: left; animation: fadeIn 0.2s ease;">
                <strong style="color:var(--success); font-size:0.85rem; text-transform:uppercase; letter-spacing:0.5px; display:block; margin-bottom:5px;">✓ Verified Competency Blueprint:</strong>
                <p style="color:var(--text-main); font-size:1.05rem; margin:0; line-height:1.6;">${card.back}</p>
            </div>
        `;
    } else {
        plate.style.borderColor = "var(--border-color)";
        plate.style.background = "var(--bg-secondary)";
        content.innerHTML = `🖱️ Click / Tap Panel Area to Reveal Core Objective Verification Key`;
    }
}
function deployExamSandbox() {
    // 0. Primary Matrix Verification
    if (!session.currentTrack) {
        alert("CRITICAL RUNTIME FAULT: Core track assignment sequence was bypassed. Return to Dashboard Control.");
        return;
    }

    // 1. Map configurations from UI components defensively
    session.mode = UI.modeSelect ? UI.modeSelect.value : "training";
    session.selectedModule = UI.moduleSelect ? UI.moduleSelect.value : "all";
    session.currentIdx = 0;
    session.questions = [];

    const targetLevelKey = 'level' + session.currentTrack;
    const levelData = masterQuestionBank[targetLevelKey];

    if (!levelData) {
        alert("Configuration Error: Selected data repository level matrix ('" + targetLevelKey + "') is missing inside questions.js.");
        return;
    }

    // 2. Parse database questions into execution array
    if (session.selectedModule === "all") {
        // If user selected "ALL COMBINED"
        Object.keys(levelData).forEach(lessonKey => {
            if (levelData[lessonKey].questions && Array.isArray(levelData[lessonKey].questions)) {
                levelData[lessonKey].questions.forEach(q => {
                    let clone = JSON.parse(JSON.stringify(q));
                    clone.sourceLesson = levelData[lessonKey].title || lessonKey;
                    session.questions.push(clone);
                });
            }
        });
    } else if (levelData[session.selectedModule]) {
        // If user selected a specific individual lesson
        if (levelData[session.selectedModule].questions && Array.isArray(levelData[session.selectedModule].questions)) {
            levelData[session.selectedModule].questions.forEach(q => {
                let clone = JSON.parse(JSON.stringify(q));
                clone.sourceLesson = levelData[session.selectedModule].title || session.selectedModule;
                session.questions.push(clone);
            });
        }
    }

    // 3. Prevent execution of unpopulated datasets
    if (session.questions.length === 0) {
        alert("Configuration Error: The selected module array currently contains 0 questions. Verify that your objectives database in questions.js matches the expected layout structure keys.");
        return;
    }

    // 4. Initialize tracking vectors matching the total questions size
    session.userAnswers = new Array(session.questions.length).fill(null);
    session.flags = new Array(session.questions.length).fill(false);

    // 5. Hardened Viewport Transition Matrix Layer
    if (UI.setupScreen) UI.setupScreen.classList.add('hidden');
    if (UI.examContainer) UI.examContainer.classList.remove('hidden');
    if (UI.resultScreen) UI.resultScreen.classList.add('hidden');
    
    let reviewScr = document.getElementById('review-screen');
    if (reviewScr) reviewScr.classList.add('hidden');

    // 6. Clock Mechanism System Logic Execution
    clearInterval(session.timerId); // Terminate any lingering timer threads before starting
    
    if (session.mode === "testing") {
        session.timeRemaining = 45 * 60; // 45 Minutes Baseline
        if (typeof runSimulationClock === 'function') {
            runSimulationClock();
        } else {
            console.warn("Execution Engine Warning: runSimulationClock function is unmapped.");
        }
        if (UI.timer) UI.timer.style.color = "#ffffff";
    } else {
        if (UI.timer) UI.timer.textContent = "TRAINING WORKSPACE PROFILE ACTIVE";
    }

    // 7. Inject initial sandbox environment viewport values
    if (typeof loadQuestion === 'function') {
        loadQuestion();
    } else {
        console.error("CRITICAL CRASH: loadQuestion runtime engine function is unmapped.");
    }
}
/**
 * Directs the core rendering pipeline for all active test layout blocks
 */
function loadQuestion() {
    // FIX: Removed duplicate variable declaration 
    const q = session.getCurrentQuestion();
    if (!q) return;

    // Clear previous view matrices
    UI.qText.textContent = q.q;
    UI.optionsContainer.innerHTML = "";
    UI.interactiveContainer.innerHTML = "";
    
    const existingFeedback = document.getElementById("runtime-feedback");
    if (existingFeedback) existingFeedback.remove();

    if (UI.progressIndicator) {
        UI.progressIndicator.textContent = `Objective: ${session.currentIdx + 1} / ${session.questions.length} [${q.sourceLesson}]`;
    }

    // Adjust flag contextual indicators
    if (UI.flagBtn) {
        UI.flagBtn.textContent = session.flags[session.currentIdx] ? "★ Objective Flagged" : "Flag Objective";
        UI.flagBtn.style.borderColor = session.flags[session.currentIdx] ? "var(--accent-gold)" : "var(--border-color)";
    }

    // Dispatch rendering loops to meet custom data schema types
    switch (q.type) {
        case "mcq":
            renderMCQ(q);
            break;
        case "multi":
            renderMultiSelect(q);
            break;
        case "ordering":
            renderOrdering(q);
            break;
        case "match":
            renderMatching(q);
            break;
        default:
            UI.optionsContainer.innerHTML = `<p style='color:red;'>Format Parsing Error: Unsupported object profile layout.</p>`;
    }

    // Manage button state parameters
    if (UI.prevBtn) UI.prevBtn.disabled = (session.currentIdx === 0);
    if (UI.nextBtn) {
        UI.nextBtn.textContent = (session.currentIdx === session.questions.length - 1) ? "Finalize Submissions" : "Next";
    }
}

// -----------------------------------------------------------------
// COMPONENT RENDER MECHANICS LAYER
// -----------------------------------------------------------------

function renderMCQ(q) {
    const container = document.getElementById('options-container');
    container.innerHTML = '';
    q.a.forEach((optionText, index) => {
        const btn = document.createElement("button");
        btn.className = "action-btn";
        btn.style.textAlign = "left";
        btn.style.marginBottom = "10px";
        btn.style.textTransform = "none";
        btn.style.fontWeight = "normal";
        btn.textContent = `${index + 1}. ${optionText}`;

        if (session.userAnswers[session.currentIdx] === index) {
            btn.style.backgroundColor = "rgba(197, 168, 128, 0.25)";
            btn.style.borderColor = "var(--accent-gold)";
        }

        btn.onclick = () => {
            session.userAnswers[session.currentIdx] = index;
            Array.from(UI.optionsContainer.children).forEach((child, idx) => {
                child.style.backgroundColor = (idx === index) ? "rgba(197, 168, 128, 0.25)" : "transparent";
                child.style.borderColor = (idx === index) ? "var(--accent-gold)" : "var(--border-color)";
            });

            if (session.mode === "training") {
                triggerImmediateFeedback(index === q.cor, q.exp);
            }
        };
        UI.optionsContainer.appendChild(btn);
    });

    if (session.mode === "training" && session.userAnswers[session.currentIdx] !== null) {
        triggerImmediateFeedback(session.userAnswers[session.currentIdx] === q.cor, q.exp);
    }
}

function renderMultiSelect(q) {
    let chosen = session.userAnswers[session.currentIdx] || [];
    
    q.a.forEach((optionText, index) => {
        const row = document.createElement("div");
        row.style.cssText = "display:flex; align-items:center; margin-bottom:12px; background:var(--bg-secondary); padding:12px; border-radius:6px; border:1px solid var(--border-color); cursor:pointer;";

        const input = document.createElement("input");
        input.type = "checkbox";
        input.style.cssText = "width:18px; height:18px; margin-right:15px;";
        input.checked = chosen.includes(index);

        const text = document.createElement("span");
        text.textContent = optionText;

        if (input.checked) {
            row.style.borderColor = "var(--accent-gold)";
            row.style.backgroundColor = "rgba(197, 168, 128, 0.1)";
        }

        row.onclick = () => {
            input.checked = !input.checked;
            if (input.checked) {
                if (!chosen.includes(index)) chosen.push(index);
            } else {
                chosen = chosen.filter(i => i !== index);
            }
            session.userAnswers[session.currentIdx] = chosen;
            
            row.style.borderColor = input.checked ? "var(--accent-gold)" : "var(--border-color)";
            row.style.backgroundColor = input.checked ? "rgba(197, 168, 128, 0.1)" : "var(--bg-secondary)";
            
            if (session.mode === "training" && chosen.length === q.required) {
                const pass = chosen.sort().join(',') === q.cor.sort().join(',');
                triggerImmediateFeedback(pass, q.exp);
            }
        };

        input.onclick = (e) => { e.stopPropagation(); row.click(); };

        row.appendChild(input);
        row.appendChild(text);
        UI.optionsContainer.appendChild(row);
    });

    if (session.mode === "training" && session.userAnswers[session.currentIdx] !== null && session.userAnswers[session.currentIdx].length === q.required) {
        const pass = session.userAnswers[session.currentIdx].sort().join(',') === q.cor.sort().join(',');
        triggerImmediateFeedback(pass, q.exp);
    }
}

function renderOrdering(q) {
    UI.optionsContainer.innerHTML = `<p style="color:var(--text-muted); font-size:0.85rem; margin-bottom:12px; text-transform:uppercase; letter-spacing:0.5px;">Assign chronological target indices mapping sequence order steps:</p>`;
    let answers = session.userAnswers[session.currentIdx] || new Array(q.steps.length).fill("");

    q.steps.forEach((stepText, index) => {
        const container = document.createElement("div");
        container.style.cssText = "display:flex; align-items:center; margin-bottom:10px; background:var(--bg-secondary); padding:10px; border-radius:6px; border:1px solid var(--border-color);";

        const sel = document.createElement("select");
        sel.style.cssText = "width:65px; padding:6px; margin-right:15px; background:var(--bg-primary); color:#fff; border:1px solid var(--border-color); border-radius:4px;";
        
        let blank = document.createElement("option");
        blank.value = "";
        blank.textContent = "-";
        sel.appendChild(blank);

        for (let i = 1; i <= q.steps.length; i++) {
            let opt = document.createElement("option");
            opt.value = i - 1; // 0-indexed values match array schema tracking perfectly
            opt.textContent = i;
            if (answers[index] !== "" && Number(answers[index]) === (i - 1)) opt.selected = true;
            sel.appendChild(opt);
        }

        sel.onchange = () => {
            answers[index] = sel.value === "" ? "" : Number(sel.value);
            session.userAnswers[session.currentIdx] = answers;

            if (session.mode === "training" && !answers.includes("")) {
                const pass = JSON.stringify(answers) === JSON.stringify(q.cor);
                triggerImmediateFeedback(pass, q.exp);
            }
        };

        const descriptiveLabel = document.createElement("span");
        descriptiveLabel.textContent = stepText;

        container.appendChild(sel);
        container.appendChild(descriptiveLabel);
        UI.optionsContainer.appendChild(container);
    });

    if (session.mode === "training" && session.userAnswers[session.currentIdx] && !session.userAnswers[session.currentIdx].includes("")) {
        const pass = JSON.stringify(session.userAnswers[session.currentIdx]) === JSON.stringify(q.cor);
        triggerImmediateFeedback(pass, q.exp);
    }
}

function renderMatching(q) {
    UI.optionsContainer.innerHTML = `<p style="color:var(--text-muted); font-size:0.85rem; margin-bottom:12px; text-transform:uppercase; letter-spacing:0.5px;">Map structural keys on left vectors to matched modules on right tracks:</p>`;
    let links = session.userAnswers[session.currentIdx] || {};

    q.pairs.forEach((pair, idx) => {
        const row = document.createElement("div");
        row.style.cssText = "display:grid; grid-template-columns: 180px 130px 1fr; gap:15px; align-items:center; margin-bottom:12px; background:var(--bg-secondary); padding:12px; border-radius:6px; border:1px solid var(--border-color);";

        const label = document.createElement("strong");
        label.style.color = "var(--accent-gold)";
        label.textContent = pair.item;

        const sel = document.createElement("select");
        sel.style.cssText = "padding:6px; background:var(--bg-primary); color:#fff; border:1px solid var(--border-color); border-radius:4px; width:100%;";
        
        let blank = document.createElement("option");
        blank.value = "";
        blank.textContent = "Select Target";
        sel.appendChild(blank);

        q.pairs.forEach((p, optionIndex) => {
            let opt = document.createElement("option");
            opt.value = optionIndex;
            opt.textContent = `Match Cluster ${optionIndex + 1}`;
            if (links[idx] !== undefined && links[idx] === optionIndex) opt.selected = true;
            sel.appendChild(opt);
        });

        sel.onchange = () => {
            links[idx] = sel.value === "" ? undefined : Number(sel.value);
            session.userAnswers[session.currentIdx] = links;

            if (session.mode === "training") {
                let ready = Object.keys(links).length === q.pairs.length && !Object.values(links).includes(undefined);
                if (ready) {
                    let pass = true;
                    q.pairs.forEach((p, originalIndex) => {
                        if (links[originalIndex] !== originalIndex) pass = false;
                    });
                    triggerImmediateFeedback(pass, q.exp);
                }
            }
        };

        const targetDataCluster = document.createElement("div");
        targetDataCluster.style.fontSize = "0.9rem";
        targetDataCluster.style.color = "var(--text-muted)";
        targetDataCluster.textContent = `Cluster ${idx + 1}: ${pair.match}`;

        row.appendChild(label);
        row.appendChild(sel);
        row.appendChild(targetDataCluster);
        UI.optionsContainer.appendChild(row);
    });

    if (session.mode === "training" && session.userAnswers[session.currentIdx]) {
        let saved = session.userAnswers[session.currentIdx];
        let ready = Object.keys(saved).length === q.pairs.length && !Object.values(saved).includes(undefined);
        if (ready) {
            let pass = true;
            q.pairs.forEach((p, originalIndex) => {
                if (saved[originalIndex] !== originalIndex) pass = false;
            });
            triggerImmediateFeedback(pass, q.exp);
        }
    }
}

function triggerImmediateFeedback(isCorrect, explanationText) {
    const legacyBox = document.getElementById("runtime-feedback");
    if (legacyBox) legacyBox.remove();

    const box = document.createElement("div");
    box.id = "runtime-feedback";
    box.style.cssText = "margin-top:20px; padding:15px; border-radius:6px; border:1px solid;";
    
    if (isCorrect) {
        box.style.backgroundColor = "rgba(56, 161, 105, 0.15)";
        box.style.borderColor = "var(--success)";
        box.innerHTML = `<strong style="color:#48bb78; letter-spacing:1px;">✓ CORRECT</strong><p style="margin:6px 0 0 0; font-size:0.92rem; line-height:1.5; color:var(--text-main);">${explanationText}</p>`;
    } else {
        box.style.backgroundColor = "rgba(229, 62, 62, 0.15)";
        box.style.borderColor = "#e53e3e";
        box.innerHTML = `<strong style="color:#fc8181; letter-spacing:1px;">✗ WRONG</strong><p style="margin:6px 0 0 0; font-size:0.92rem; line-height:1.5; color:var(--text-muted);">${explanationText}</p>`;
    }
    
    UI.examContainer.insertBefore(box, UI.prevBtn.parentElement);
}

// -----------------------------------------------------------------
// ENGINE NAVIGATION LAYER
// -----------------------------------------------------------------

function handleNext() {
    if (session.currentIdx < session.questions.length - 1) {
        session.currentIdx++;
        loadQuestion();
    } else {
        processSystemReport();
    }
}

function handlePrev() {
    if (session.currentIdx > 0) {
        session.currentIdx--;
        loadQuestion();
    }
}

function toggleFlag() {
    session.flags[session.currentIdx] = !session.flags[session.currentIdx];
    loadQuestion();
}

function runSimulationClock() {
    clearInterval(session.timerId);
    session.timerId = setInterval(() => {
        session.timeRemaining--;
        if (session.timeRemaining <= 0) {
            clearInterval(session.timerId);
            alert("Simulated runtime clearance limit reached. Exporting operational report matrix.");
            processSystemReport();
            return;
        }
        
        let m = Math.floor(session.timeRemaining / 60);
        let s = session.timeRemaining % 60;
        if (UI.timer) {
            UI.timer.textContent = `Time Remaining: ${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
        }
    }, 1000);
}

/**
 * Computes scores and prints analytical tables onto report templates
 */
function processSystemReport() {
    clearInterval(session.timerId);
    
    let totalCorrect = 0;
    let analyticsMap = {};

    session.questions.forEach((q, idx) => {
        let answer = session.userAnswers[idx];
        let correct = false;

        if (answer !== null && answer !== undefined) {
            if (q.type === "mcq" && answer === q.cor) correct = true;
            if (q.type === "multi" && Array.isArray(answer)) {
                correct = answer.sort().join(',') === q.cor.sort().join(',');
            }
            if (q.type === "ordering" && Array.isArray(answer)) {
                correct = JSON.stringify(answer) === JSON.stringify(q.cor);
            }
            if (q.type === "match" && typeof answer === 'object') {
                let subMatch = true;
                q.pairs.forEach((p, oIdx) => {
                    if (answer[oIdx] !== oIdx) subMatch = false;
                });
                correct = subMatch;
            }
        }

        if (correct) totalCorrect++;

        // Append metrics partition to core domain logs
        let domain = q.sourceLesson || "Baseline Module";
        if (!analyticsMap[domain]) analyticsMap[domain] = { points: 0, scale: 0 };
        analyticsMap[domain].scale++;
        if (correct) analyticsMap[domain].points++;
    });

    let finalScorePercent = Math.round((totalCorrect / session.questions.length) * 100);
    const benchmark = 70; // 70% Required Pass Matrix

    UI.examContainer.classList.add('hidden');
    UI.resultScreen.classList.remove('hidden');

    if (UI.reportName) UI.reportName.textContent = UI.candidateNameInput ? UI.candidateNameInput.value : "Guest Operator";
    if (UI.reportScore) {
        UI.reportScore.textContent = `${finalScorePercent}%`;
        UI.reportScore.style.color = finalScorePercent >= benchmark ? "var(--success)" : "#e53e3e";
    }

    if (UI.reportOutcome) {
        if (finalScorePercent >= benchmark) {
            UI.reportOutcome.textContent = "MISSION ACCOMPLISHED: BENCHMARK QUALIFIED";
            UI.reportOutcome.parentElement.style.background = "rgba(56, 161, 105, 0.15)";
            UI.reportOutcome.parentElement.style.color = "var(--success)";
        } else {
            UI.reportOutcome.textContent = "MISSION DEBRIEF: CORE PROFICIENCY UNVERIFIED";
            UI.reportOutcome.parentElement.style.background = "rgba(229, 62, 62, 0.15)";
            UI.reportOutcome.parentElement.style.color = "#e53e3e";
        }
    }

    if (UI.analysisBody) {
        UI.analysisBody.innerHTML = "";
        Object.keys(analyticsMap).forEach(domain => {
            let metric = analyticsMap[domain];
            let mathPercent = Math.round((metric.points / metric.scale) * 100);
            let tr = document.createElement("tr");
            tr.style.borderBottom = "1px solid var(--border-color)";
            tr.innerHTML = `
                <td style="padding:12px; font-size:0.92rem;">${domain}</td>
                <td style="padding:12px; text-align:right; font-weight:bold; color:${mathPercent >= benchmark ? 'var(--success)' : '#e53e3e'}">${metric.points} / ${metric.scale} (${mathPercent}%)</td>
            `;
            UI.analysisBody.appendChild(tr);
        });
    }
}

function returnToDashboard() {
    if (confirm("Are you sure you want to exit the current sandbox module? Active system runtime configurations will reset.")) {
        clearInterval(session.timerId);
        UI.workScreen.classList.add('hidden');
        UI.dashScreen.classList.remove('hidden');
        session.currentTrack = null;
    }
}
