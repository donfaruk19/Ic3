// =================================================================
// SYSTEM CONTROL TRACK DESK ROUTER
// =================================================================

// High-Security Session Matrix State Object
let session = {
    mode: "training",      // Options: 'training' or 'testing'
    currentTrack: null,    // Selected Track: 2 or 3
    currentIdx: 0,
    questions: [],
    userAnswers: [],
    isLocked: [],
    flags: [],
    getCurrentQuestion: function() {
        return this.questions[this.currentIdx] || null;
    }
};

// Global DOM Cache Matrix Injection Layer
const UI = {
    dashScreen: document.getElementById('dashboard-screen'),
    workScreen: document.getElementById('workspace-screen'),
    examContainer: document.getElementById('exam-container'),
    optionsContainer: document.getElementById('options-container'),
    interactiveContainer: document.getElementById('interactive-container'),
    qText: document.getElementById('question-text'),
    feedback: document.getElementById('feedback-box') || document.createElement('div'),
    submitBtn: document.getElementById('submit-btn'),
    nextBtn: document.getElementById('next-btn'),
    flagBtn: document.getElementById('flag-btn')
};

/**
 * Route Tracker Launcher - Fired by Dashboard Buttons
 * @param {number} trackIdentifier - The selected track (2 or 3)
 */
function selectTrack(trackIdentifier) {
    if (trackIdentifier !== 2 && trackIdentifier !== 3) {
        console.error("Security Alert: Unauthorized track vector access attempted.");
        return;
    }

    // Assign Track Variable
    session.currentTrack = trackIdentifier;
    session.currentIdx = 0;
    
    // Select and format the target question database array
    if (trackIdentifier === 3) {
        // Build Level 3 compilation array from modules
        session.questions = [];
        Object.keys(level3Modules).forEach(modKey => {
            level3Modules[modKey].questions.forEach(q => {
                // Label source for navigation audit trails
                q.sourceLesson = `L3-${modKey.toUpperCase()}`;
                session.questions.push(q);
            });
        });
    } else {
        // Fallback or map to existing Level 2 questions array
        // Assumes your existing Level 2 questions array is stored in "allModules" or "level2Questions"
        session.questions = typeof allModules !== 'undefined' ? parseLegacyModules(allModules) : [];
    }

    if (session.questions.length === 0) {
        alert("Configuration Error: Selected data repository module is unpopulated.");
        return;
    }

    // Initialize state arrays for the current session
    session.userAnswers = new Array(session.questions.length).fill(null);
    session.isLocked = new Array(session.questions.length).fill(false);
    session.flags = [];

    // Switch screen views safely using CSS transitions or layout flags
    UI.dashScreen.classList.add('hidden');
    UI.workScreen.classList.remove('hidden');

    // Trigger core rendering pipeline
    if (typeof loadQuestion === 'function') {
        loadQuestion();
    } else {
        console.error("Critical Engine Error: Core workspace render logic is unmapped.");
    }
}

/**
 * Reset and Return to the Main Dashboard Selection Screen
 */
function returnToDashboard() {
    if (confirm("Are you sure you want to exit the current practice module? Current progress will be saved.")) {
        UI.workScreen.classList.add('hidden');
        UI.dashScreen.classList.remove('hidden');
        session.currentTrack = null;
    }
}

/**
 * Normalizes old module formats into flat, track-ready data structures
 */
function parseLegacyModules(modulesObject) {
    let output = [];
    Object.keys(modulesObject).forEach(key => {
        if (modulesObject[key].questions) {
            modulesObject[key].questions.forEach(q => {
                q.sourceLesson = q.sourceLesson || `L2-${key.toUpperCase()}`;
                output.push(q);
            });
        }
    });
    return output;
}