// =================================================================
// IC3 GS6 MASTER QUESTION BANK (LEVELS 1, 2, AND 3)
// =================================================================

const masterQuestionBank = {
    // ---------------------------------------------------------
    // LEVEL 1: FUNDAMENTALS (Lessons 1 - 7)
    // ---------------------------------------------------------
    level1: {
        l1_lesson1: { title: "Lesson 1: Technology Basics", questions: [
            // PASTE YOUR LEVEL 1 LESSON 1 QUESTIONS HERE
        ]},
        l1_lesson2: { title: "Lesson 2: Digital Citizenship", questions: [
            // PASTE YOUR LEVEL 1 LESSON 2 QUESTIONS HERE
        ]},
        l1_lesson3: { title: "Lesson 3: Information Management", questions: [
            // PASTE YOUR LEVEL 1 LESSON 3 QUESTIONS HERE
        ]},
        l1_lesson4: { title: "Lesson 4: Content Creation", questions: [
            // PASTE YOUR LEVEL 1 LESSON 4 QUESTIONS HERE
        ]},
        l1_lesson5: { title: "Lesson 5: Communication", questions: [
            // PASTE YOUR LEVEL 1 LESSON 5 QUESTIONS HERE
        ]},
        l1_lesson6: { title: "Lesson 6: Collaboration", questions: [
            // PASTE YOUR LEVEL 1 LESSON 6 QUESTIONS HERE
        ]},
        l1_lesson7: { title: "Lesson 7: Safety and Security", questions: [
            // PASTE YOUR LEVEL 1 LESSON 7 QUESTIONS HERE
        ]}
    },

    // ---------------------------------------------------------
    // LEVEL 2: WORKING KNOWLEDGE (Lessons 8 - 14)
    // ---------------------------------------------------------
level2: {
        l2_lesson8: { title: "Lesson 8: Technology Basics", questions: [
            {
                type: "single",
                topic: "Audio Settings",
                q: "You are in a loud room. You connect headphones to your computer so you can hear the audio better, but sound still comes through the computer speakers instead of the headphones. You need the computer audio to come through the headphones instead of the speakers. What should you do?",
                a: [
                    "Manage input devices.",
                    "Mute your computer speakers.",
                    "Manage output devices.",
                    "Configure Ease of Access audio settings."
                ],
                cor: 2,
                exp: "To route system audio feeds dynamically to external peripherals like headphones, you must manage and select the appropriate hardware within the Output Device properties workspace."
            },
            {
                type: "multi",
                topic: "Keyboard Home Row",
                q: "Which two keys are part of the \"home row\" on a standard keyboard? (Choose 2.)",
                a: ["B", "D", "K", "Q", "X", "Y"],
                required: 2,
                cor: [1, 2],
                exp: "On a standard alphanumeric QWERTY layout, the resting home row keys are A, S, D, F, G, H, J, K, L, and ;."
            },
            {
                type: "match",
                topic: "Hardware Profiles: Printers",
                q: "Move each advantage from the list on the left to the corresponding printer type on the right.",
                pairs: [
                    { item: "Documents are dry to the touch when printed", match: "Laser Printer" },
                    { item: "Environmentally friendly", match: "General Unassigned Benefit" },
                    { item: "Good for printing high-quality photographs", match: "Inkjet Printer" },
                    { item: "Suitable for mass-printing documents at a low cost", match: "Laser Printer" }
                ],
                cor: [1, 2, 0, 1],
                exp: "Laser printers leverage heated fusion to secure instantly dry powder outputs for high-volume text. Inkjet printer variants run fine fluid ink streams ideal for photograph color replication accuracy."
            },
            {
                type: "mcq",
                topic: "Display Hardware Configuration",
                q: "You are working on your laptop computer in a sunny outside area. You need to minimize eyestrain. Which monitor setting should you adjust?",
                a: ["Contrast", "Sharpness", "Scale", "Brightness"],
                cor: 3,
                exp: "Upregging output brightness allows the display backlight to overcome ambient solar glare, significantly decreasing visual strain on the user."
            }
        ]},
        l2_lesson9: { title: "Lesson 9: Digital Citizenship", questions: [
            {
                type: "mcq",
                topic: "AI Copyright",
                q: "Who owns the copyright to content that is generated solely by Artificial Intelligence (AI)?",
                a: [
                    "The developer who wrote the code for the AI model that generated the content.",
                    "The company that publishes and maintains the AI model servers.",
                    "The person who wrote the prompt used to generate the content.",
                    "No one - all AI-generated content is automatically in the public domain."
                ],
                cor: 3,
                exp: "Copyright law generally requires human authorship; work created completely by an AI without human intervention cannot be copyrighted and falls into the public domain."
            },
            {
                type: "mcq",
                topic: "Content Distribution Rights",
                q: "When is it appropriate to post someone else's content online?",
                a: [
                    "If it has already been shared by others",
                    "When it is a positive message",
                    "With permission, or if posted publicly",
                    "Anytime, because it's already online"
                ],
                cor: 2,
                exp: "You must secure clear licensing rights, explicitly verified permission vectors, or confirm the asset resides transparently inside public domain listings before republishing."
            }
        ]},
        l2_lesson10: { title: "Lesson 10: Information Management", questions: [
            {
                type: "match",
                topic: "Evaluating Source Bias",
                q: "You need to assess whether the content of an online article is biased. Select Yes if the aspect helps check bias, or No if it does not.",
                pairs: [
                    { item: "Article funding source", match: "Yes" },
                    { item: "Article publication date", match: "No" },
                    { item: "Education level of the author", match: "No" },
                    { item: "Connections of the author to political organizations", match: "Yes" }
                ],
                cor: [0, 1, 1, 0],
                exp: "Funding sources and external political affiliations directly flag ideological bias. Conversely, timeline checks or specific academic credentials assess validity and domain authority, not direct functional slant."
            }
        ]},
        l2_lesson11: { title: "Lesson 11: Content Creation", questions: [
            {
                type: "mcq",
                topic: "Software Macros",
                q: "What is one advantage of using macros in software programs?",
                a: [
                    "They provide cloud storage services.",
                    "They automate repetitive tasks.",
                    "They automatically correct spelling errors.",
                    "They store files online automatically."
                ],
                cor: 1,
                exp: "Macros are pre-recorded sequences of tasks or commands that allow users to run complex or highly repetitive sequences instantly with one click."
            },
            {
                type: "mcq",
                topic: "File Versioning",
                q: "What is a primary purpose of file versioning?",
                a: [
                    "To identify the date the file was created.",
                    "To identify the file as a non-final release, or draft.",
                    "To enable users to recover earlier copies of the file.",
                    "To enable multiple users to collaborate on the file content."
                ],
                cor: 2,
                exp: "File versioning archives historically timestamped iterative logs, making it simple to restore or roll back to historical states if revisions break functionality."
            },
            {
                type: "mcq",
                topic: "Document Management",
                q: "What is the best way to monitor edits made in a document?",
                a: [
                    "Keep a separate document to note all changes made.",
                    "Manually highlight all changes after editing.",
                    "Use a different color for every edit.",
                    "Turn on Track Changes before you start editing the document."
                ],
                cor: 3,
                exp: "Enabling standard 'Track Changes' protocols builds persistent markup streams tracking all additions and adjustments inside the document workspace natively."
            },
            {
                type: "multi",
                topic: "File Naming Conventions",
                q: "You are designing a poster for a client. As you work, you periodically save new versions of your file to keep track of your changes and design ideas. Which two groups of files demonstrate good file naming conventions? (Choose 2.)",
                a: [
                    "poster_original.psd, poster_cropped.psd, poster_grayscale.psd",
                    "poster_draft1.psd, poster_draft2.psd, poster_FINAL.psd",
                    "myposter.psd, newposter.psd, poster.psd",
                    "poster.psd, poster copy.psd, poster copy 2.psd"
                ],
                required: 2,
                cor: [0, 1],
                exp: "Professional taxonomy structures use precise descriptive context tags (Group A) or clearly ordered numerical sequences tracking progress iterations logically (Group B)."
            }
        ]},
        l2_lesson12: { title: "Lesson 12: Communication", questions: [
            {
                type: "mcq",
                topic: "Email Bcc Field",
                q: "What is the purpose of the Bcc field of an email message?",
                a: [
                    "To indicate that a reply is optional.",
                    "To collect information about someone without them knowing.",
                    "To keep multiple recipients' email addresses private from each other.",
                    "To indicate that the message is personal."
                ],
                cor: 2,
                exp: "The Blind Carbon Copy (Bcc) structure completely hides the explicit identities and emails of listed recipients from each other to enforce privacy."
            }
        ]},
        l2_lesson13: { title: "Lesson 13: Collaboration", questions: [
            {
                type: "match",
                topic: "Digital Feedback Etiquette",
                q: "A team of people are digitally collaborating on a project and need to provide feedback digitally. Select Yes if the behavior follows digital etiquette standards or No if it does not.",
                pairs: [
                    { item: "Correct other people whenever their opinions and ideas are wrong.", match: "No" },
                    { item: "Give fair criticism and constructive feedback, but phrase it respectfully.", match: "Yes" },
                    { item: "Use abbreviations, slang, and emojis to give your comments more personality.", match: "No" },
                    { item: "Use good grammar and spelling so your comments are clear and easy to understand.", match: "Yes" }
                ],
                cor: [1, 0, 1, 0],
                exp: "Professional digital feedback typically requires clear, formal communication rather than informal slang, confrontational corrections, or overused emojis."
            },
            {
                type: "multi",
                topic: "Remote Meeting Etiquette",
                q: "You lead a team of people of differing beliefs, backgrounds, and ages. You plan to host a remote meeting using a videoconferencing tool to brainstorm ideas for a new project. You need to demonstrate good digital etiquette. Which two actions should you take? (Choose 2.)",
                a: [
                    "Use features such as Raise Hand to provide opportunities for all team members to participate",
                    "Keep the team focused and avoid conflicts by limiting discussion to a list of only your own ideas.",
                    "Privately offer to help a team member with no videoconferencing experience become familiar with the controls before the meeting",
                    "Ask a team member with a strong accent to respond through the chat box so they can be clearly understood by the rest of the team."
                ],
                required: 2,
                cor: [0, 2],
                exp: "Digital meeting etiquette relies on open, interactive features like 'Raise Hand' and resolving technological or experience differences through private onboarding before calls."
            },
            {
                type: "match",
                topic: "Digital Collaboration Core Concepts",
                q: "You have become part of a team that uses collaboration. For each statement about collaboration, select True or False.",
                pairs: [
                    { item: "Individual input and creative decision-making will be limited.", match: "False" },
                    { item: "Members share ideas to come up with solutions.", match: "True" },
                    { item: "Everyone in the group will have the same perspectives for the project.", match: "False" }
                ],
                cor: [1, 0, 1],
                exp: "Collaboration connects varied backgrounds and ideas to find cross-functional answers, supporting individual input instead of limiting it."
            }
        ]},
        l2_lesson14: { title: "Lesson 14: Safety and Security", questions: [
            {
                type: "mcq",
                topic: "Digital Wallet Advantage",
                q: "What is an advantage of using a digital wallet such as Apple Pay or Google Pay?",
                a: [
                    "Encourages you to shop around for the best price.",
                    "Builds your credit history.",
                    "Gives you free access to Apple TV or YouTube Premium.",
                    "Requires you to authorize every transaction."
                ],
                cor: 3,
                exp: "Digital wallets demand discrete verification tokens (e.g., biometric thumbprints or entry codes) before processing localized payments safely."
            },
            {
                type: "multi",
                topic: "Internet Challenges",
                q: "You learn about a potentially fun new internet challenge. For which two reasons should teenagers avoid participating in the challenge? (Choose 2.)",
                a: [
                    "Even seemingly harmless challenges, like the sunburn tattoo or cinnamon challenges, can cause serious harm that requires medical attention.",
                    "During puberty, the teen brain is flooded with hormones that make it seek out rewards, such as \"likes\" or followers.",
                    "The teen brain isn't finished developing yet, so teens often have a hard time thinking through all the possible consequences of their actions.",
                    "Their friends all want them to participate in the challenge."
                ],
                required: 2,
                cor: [0, 2],
                exp: "Seemingly non-threatening digital trends can hide severe physical hazards; developmental stages require teenagers to exercise caution, as risk-assessment pathways are still maturing."
            },
            {
                type: "match",
                topic: "Security & File Management Terms",
                q: "Move each term from the list to its correct description match.",
                pairs: [
                    { item: "The ability to view the contents of a file but not modify it", match: "Read-Only File" },
                    { item: "Settings that determine who can read, write, or execute a file", match: "File Permission" },
                    { item: "The process of encoding data to prevent unauthorized access", match: "Encryption" },
                    { item: "A file that can be viewed and modified by users with the appropriate permissions", match: "Read-Write File" },
                    { item: "A security feature that restricts file access to users who enter the correct access code", match: "Password Protection" }
                ],
                cor: [0, 1, 2, 3, 4],
                exp: "These variables determine specific object privileges, cryptographic protection limits, and identity tracking workflows across file systems."
            }
        ]}
    },

    // ---------------------------------------------------------
    // LEVEL 3: ADVANCED UNDERSTANDING (Lessons 15 - 21)
    // ---------------------------------------------------------
    level3: {
        l3_lesson15: { 
            title: "Lesson 15: Technology Basics", 
            questions: [
                {
                    type: "mcq",
                    q: "To which of the following hardware specifications does 4 GHz refer?",
                    a: [
                        "The number of pixels a screen can show.",
                        "The speed at which the hard drive retrieves data.",
                        "The speed at which the processor executes instructions.",
                        "The amount of data that can be held in the computer's memory."
                    ],
                    cor: 2,
                    exp: "Gigahertz (GHz) measures the clock speed of a Central Processing Unit (CPU), showing how many billions of instruction cycles it runs per second."
                },
                {
                    type: "ordering",
                    q: "Place the troubleshooting steps in the proper order to resolve a system fault.",
                    steps: [
                        "Analyze what might be causing the problem.",
                        "Determine the most likely cause by testing possible causes.",
                        "Define the problem by describing the issue as specifically as possible.",
                        "Verify the resolution of the problem and that no new issues exist.",
                        "Apply each solution systematically."
                    ],
                    cor: [1, 2, 0, 4, 3],
                    exp: "Proper diagnostic order requires you to isolate the problem description, map potential points of failure, verify through test actions, rectify, and then double-check system stability."
                },
                {
                    type: "mcq",
                    q: "Which of the following statements regarding software licensing are NOT true?",
                    a: [
                        "A software license governs how you install and use the software.",
                        "You can share your copy with friends only if you do not charge a fee.",
                        "Licenses are based on the number of devices the software will be installed on.",
                        "Software with Creative Commons and Public Domain licenses are available for free."
                    ],
                    cor: 1,
                    exp: "Sharing copies of commercial or proprietary applications with third parties without authorization violates copyright law, regardless of whether capital is exchanged."
                },
                {
                    type: "multi",
                    q: "In which two areas can you usually find and modify a software program's default configurations and operational settings?",
                    a: [
                        "About section of the Help menu",
                        "Options section of the File menu",
                        "Properties section of the File menu",
                        "Preferences section of the Edit menu"
                    ],
                    required: 2,
                    cor: [1, 3],
                    exp: "Most modern productivity platforms categorize architectural application variables inside File > Options or via Edit > Preferences panels."
                },
                {
                    type: "ordering",
                    q: "Put the following digital storage metric sizes in sequence, ordered from smallest to largest capacity.",
                    steps: ["Terabyte", "Kilobyte", "Petabyte", "Gigabyte", "Megabyte"],
                    cor: [3, 0, 4, 2, 1],
                    exp: "The proper data capacity progression scale runs: Kilobyte (KB) < Megabyte (MB) < Gigabyte (GB) < Terabyte (TB) < Petabyte (PB)."
                },
                {
                    type: "mcq",
                    q: "If an enterprise deployment network application requires 2 billion bytes of storage allocation space, it would be written rounded as:",
                    a: ["2 KB", "2 GB", "2 TB", "2 PB"],
                    cor: 1,
                    exp: "1 Gigabyte is equivalent to 1 billion bytes. Therefore, 2 billion bytes matches a 2 GB storage footprint."
                },
                {
                    type: "multi",
                    q: "Which two options must be carefully evaluated when determining the overall system hardware procurement specifications for an operational device?",
                    a: [
                        "System performance requirements for all baseline applications.",
                        "Common workflow features shared across team tools.",
                        "The operational footprint of the host Operating System.",
                        "Software patch version numbering conventions.",
                        "Factory included application display defaults."
                    ],
                    required: 2,
                    cor: [0, 2],
                    exp: "Hardware baseline requirements depend on the combined needs of your operational system applications and the foundational host operating environment."
                },
                {
                    type: "mcq",
                    q: "The four primary factors to evaluate when assessing software requirements include structural features, user workflow, project cost, and component ______.",
                    a: ["functionality", "popularity", "activities", "integration"],
                    cor: 3,
                    exp: "Integration tracks how cleanly a target application interfaces with existing database infrastructures, enterprise web tools, and legacy systems."
                },
                {
                    type: "match",
                    q: "Draw a line to match the physical device profile classification on the left to its operational role on the right.",
                    pairs: [
                        { item: "Smartphone", match: "Cellular network connectivity, built-in camera, and voice calls without Wi-Fi." },
                        { item: "Desktop Computer", match: "Supports heavy computing tasks like high-end graphics rendering and video processing workflows." },
                        { item: "Tablet", match: "Portable device optimized for document parsing, viewing media, and casual tasks with long battery efficiency." }
                    ],
                    exp: "Desktop nodes manage resource-heavy workloads, smartphones provide modular remote field communications, and tablets serve as mobile access viewpoints."
                },
                {
                    type: "mcq",
                    q: "What technical problem occurs on a workstation when the host operating system engages in excessive 'page swapping' (thrashing) within virtual memory allocations?",
                    a: [
                        "The CPU physical core clock rate dynamically scales upward to match demand.",
                        "System responsiveness drops drastically because mechanical or flash drive access is exponentially slower than native RAM.",
                        "The motherboard isolates the primary power phase rail and activates low-power safe recovery.",
                        "The contents of the secondary application configuration matrix are entirely purged."
                    ],
                    cor: 1,
                    exp: "Virtual memory uses secondary storage as overflow space when physical RAM is exhausted. Thrashing occurs when the OS spends more time shuffling page data between disk and memory than executing software threads, killing system throughput."
                }
            ]
        },
        l3_lesson16: { 
            title: "Lesson 16: Digital Citizenship", 
            questions: [
                {
                    type: "mcq",
                    q: "An employee publishes internal medical status updates regarding a teammate on a public company portal without explicit permission. What privacy violation was committed?",
                    a: ["Intrusion", "False Light", "Public Disclosure of Private Facts", "Misappropriation"],
                    cor: 2,
                    exp: "Public disclosure of private facts occurs when confidential, sensitive personal data (such as health or medical info) is shared across unvetted networks without user consent."
                },
                {
                    type: "mcq",
                    q: "Which of the following procedural behaviors does NOT compromise or expose your online privacy?",
                    a: [
                        "Linking multiple profiles to a unified Google account setup.",
                        "Allowing third-party tracking networks to store long-term browser cookies.",
                        "Maintaining permanent logged-in persistence states on open platforms.",
                        "Purging and clearing local browser session history caches regularly."
                    ],
                    cor: 3,
                    exp: "Clearing session data regularly limits long-term tracking files, removes tracking artifacts, and improves endpoint browser security posture."
                },
                {
                    type: "mcq",
                    q: "Identify the valid scenario where it is operationally secure and authorized to share system login credentials.",
                    a: [
                        "When leaving on vacation and instructing a peer to review system alerts.",
                        "Sharing household entertainment platform subscription keys with family members.",
                        "Utilizing a dedicated, non-privileged product demonstration account assigned to a sales team.",
                        "Authorizing a close friend to place orders using a personal commercial account profile."
                    ],
                    cor: 2,
                    exp: "Shared sandbox demonstration profiles do not handle private data or system access, making them acceptable for team-wide use."
                },
                {
                    type: "mcq",
                    q: "An investigator discovers a target published a peer's private personal contact identifiers and home address details on public networks to prompt harassment. This is:",
                    a: ["catfishing", "doxing", "broadcasting", "spoofing"],
                    cor: 1,
                    exp: "Doxing is malicious documentation leakage involving names, cell lines, or geo-locations onto public spaces to compromise a target's physical security."
                },
                {
                    type: "multi",
                    q: "Which two operational actions are the most effective strategies for staying informed about emerging digital tools and technologies?",
                    a: [
                        "Subscribing to and parsing articles from reputable tech threat intelligence and news networks.",
                        "Generating weekly project status updates for leadership review cycles.",
                        "Participating exclusively in user assistance forums for novice system users.",
                        "Reviewing local application preferences menus periodically.",
                        "Enrolling in accredited technical or engineering courses annually."
                    ],
                    required: 2,
                    cor: [0, 4],
                    exp: "Reviewing professional tech journalism and participating in ongoing education ensures technical workflows stay updated against obsolescence."
                },
                {
                    type: "mcq",
                    q: "What digital dynamic occurs when optimization algorithms continuously feed content that aligns with an analyst's past habits, isolating them from alternative information streams?",
                    a: ["Data Decentralization Loop", "Filter Bubble / Echo Chamber", "Network Latency Sync Error", "Architectural Redundancy Model"],
                    cor: 1,
                    exp: "Filter bubbles isolate individuals from diverse perspectives by continuously matching user feeds to their past behavioral tracking history."
                }
            ]
        },
        l3_lesson17: { 
            title: "Lesson 17: Information Management", 
            questions: [
                {
                    type: "mcq",
                    q: "An analyst needs to check if a public-domain vector image has duplicate higher-resolution iterations available online. Which index engine should be used?",
                    a: ["TinEye.com", "Shazam.com", "Snopes.com", "AllSides.com"],
                    cor: 0,
                    exp: "TinEye is an optimized reverse-image lookup framework that scans for duplicate images across global indices to find higher resolutions and match iterations."
                },
                {
                    type: "multi",
                    q: "Select the valid logical operators explicitly used by query indexing engines to filter database and search parameters.",
                    a: ["INCLUDES", "AND", "OR", "EQUAL TO", "NOT", "IF"],
                    required: 3,
                    cor: [1, 2, 4],
                    exp: "The core standard Boolean operations used by indexing tools are AND (intersection), OR (union), and NOT (exclusion)."
                },
                {
                    type: "mcq",
                    q: "When an article presents weak, broken, or misdirected logic to validate a point, the document contains a(n):",
                    a: ["Sociopolitical Bias", "Commercial Bias", "Logical Fallacy", "Inferential Bias"],
                    cor: 2,
                    exp: "A logical fallacy is an error in reasoning that undermines the structural validity of an argument within informational materials."
                },
                {
                    type: "mcq",
                    q: "When a team analyst gathers information and highlights evidence that strictly matches a preferred hypothesis while disregarding conflicting research data, what bias is occurring?",
                    a: ["Sunk Cost Blindness", "Confirmation Bias", "Ad Hominem Divergence", "Availability Fallacy"],
                    cor: 1,
                    exp: "Confirmation bias occurs when an individual filters information to fit their pre-existing beliefs, ignoring balanced factual counter-points."
                },
                {
                    type: "mcq",
                    q: "Which query syntax properly instructs an indexing engine to isolate PDF files found only on official United States government web nodes?",
                    a: ["site:.gov + file:.pdf", "site:gov filetype:pdf", "domain:gov type:pdf", "search:gov/extensions:pdf"],
                    cor: 1,
                    exp: "The 'site:' modifier restricts queries to specific domains, while 'filetype:' filters for matching document formats."
                },
                {
                    type: "mcq",
                    q: "What is the core practice of 'Lateral Reading' when cross-examining an unfamiliar online media publisher's reliability?",
                    a: ["Reading from the absolute top of the source layout page straight down to the footer notes before closing the tab.",
                        "Opening separate browser tabs to research independent third-party sources and analysis regarding that author or organization.",
                        "Analyzing font choice, design elements, and image resolution values directly on the landing dashboard.",
                        "Checking if the domain layout incorporates a standard privacy statement or modern contact widget."],
                    cor: 1,
                    exp: "Lateral reading means looking outside the publication's own site to discover how independent media critics, watchdogs, or reference networks evaluate their credibility."
                },
                {
                    type: "mcq",
                    q: "During a technical forum debate, a speaker distorts an opponent's defense architecture to make it appear weak and easily compromised, then attacks that caricature. What fallacy was committed?",
                    a: ["False Dilemma (Either-Or)", "Straw Man Fallacy", "Slippery Slope Progression", "Circular Restatement"],
                    cor: 1,
                    exp: "A Straw Man fallacy occurs when an opponent's actual argument is misrepresented or exaggerated to make it an easier target for refutation."
                }
            ]
        },
        l3_lesson18: { 
            title: "Lesson 18: Content Creation", 
            questions: [
                {
                    type: "match",
                    q: "Match the following data presentation formats to their correct analytical role.",
                    pairs: [
                        { item: "Line Graph", match: "Shows how data points change over specified timelines." },
                        { item: "Pie Chart", match: "Shows simple part-to-whole percentage proportions." },
                        { item: "Scatter Chart", match: "Maps correlation values and distribution density across data sets." },
                        { item: "Table", match: "Organizes raw relational categories for exact cell cross-comparisons." }
                    ],
                    exp: "Line graphs track historical trends over time, pie charts split static percentages, scatter fields highlight distribution anomalies, and tables store exact data."
                },
                {
                    type: "multi",
                    q: "Which specific statements accurately describe the characteristics of a Raster (Bitmap) media asset?",
                    a: [
                        "Images are mapped out via a fixed coordinates matrix grid of pixels.",
                        "Scaling the asset upward often causes visible pixelation artifacts.",
                        "Asset resolution quality stays uniform across diverse screen sizes.",
                        "It serves as the native processing target format for tools like Adobe Photoshop.",
                        "Mathematical equations and vectors determine line coordinates."
                    ],
                    required: 3,
                    cor: [0, 1, 3],
                    exp: "Raster files map pixels across a fixed grid. Resizing them stretches the pixels and degrades sharpness, unlike vector files which calculate scale mathematically."
                },
                {
                    type: "mcq",
                    q: "Which configuration adjustment helps visually impaired users distinguish foreground assets from background layers?",
                    a: ["Opacity", "Transparency", "Contrast", "Emphasis"],
                    cor: 2,
                    exp: "High contrast settings increase the visual separation between foreground text elements and the background plate, which helps users with low vision read on-screen text."
                },
                {
                    type: "mcq",
                    q: "Which option represents an authorized use of copyrighted audio content without a formal sync license?",
                    a: ["Adding the audio track as background music for a public social video profile.", "Downloading an offline copy from unvetted channels to avoid payment gates.", "Embedding the media file as the primary theme audio inside a commercial presentation deck.", "Playing the physical audio copy using personal gear privately among friends."],
                    cor: 3,
                    exp: "Private, non-commercial playback among a small circle of friends does not constitute public performance or synchronization infringement."
                },
                {
                    type: "multi",
                    q: "Which three statements define the operational advantages or properties of Vector-based media configurations?",
                    a: [
                        "Graphics are mapped mathematically using anchors, paths, arcs, and geometric coordinates.",
                        "Assets can be scaled infinitely higher without generating pixelation or loss of line sharpness.",
                        "They are the ideal standard choice for recording detailed real-world photographic scenery.",
                        "They maintain a lightweight storage footprint for corporate icons, wireframes, and logos.",
                        "They undergo permanent format destruction if moved onto solid-state environments."
                    ],
                    required: 3,
                    cor: [0, 1, 3],
                    exp: "Vector assets use geometric formulas rather than static pixel matrices. This means they scale cleanly without bloating storage files, making them ideal for logos and layouts."
                },
                {
                    type: "mcq",
                    q: "An online presentation template is marked with a Creative Commons 'CC BY-NC-ND' designation. What boundaries must an operator honor to use this asset legally?",
                    a: ["Revamp the visual layout freely, use it inside paid ad campaigns, and erase author tags.",
                        "Credit the original creator, limit use to non-commercial environments, and construct no derivative variations.",
                        "Redistribute the material for business profits provided the base file packaging standard is changed.",
                        "Deploy the content across external marketing channels while skipping author attribution loops."],
                    cor: 1,
                    exp: "Credit the original creator, limit use to non-commercial environments, and construct no derivative variations."
                }
            ]
        },
        l3_lesson19: { 
            title: "Lesson 19: Communication", 
            questions: [
                {
                    type: "mcq",
                    q: "When formatting a critical report or slide deck intended for executive leadership review, which typography layout choice best preserves professional readability?",
                    a: ["Filling every slide with long paragraphs of descriptive text to ensure no detail is skipped.",
                        "Deploying high-contrast font combinations, consistent heading hierarchies, and parsing data into concise bullet parameters.",
                        "Mixing three distinct text animations and bright color sweeps on every new line entry.",
                        "Placing a low-contrast abstract wallpaper directly behind the primary informational blocks."],
                    cor: 1,
                    exp: "Effective presentations use clean layout hierarchies, high-contrast text combinations, and concise, legible text blocks to ensure readability."
                },
                {
                    type: "mcq",
                    q: "What is the primary technical objective of providing alternative text ('Alt Text') markup strings for image elements in web documents?",
                    a: ["To shield the asset file structure from unauthorized scrapers using basic encryption hooks.",
                        "To supply assistive screen readers with a spoken text description of the graphic for visually impaired users.",
                        "To force the underlying layout engine to multiply image dimensions on high-resolution monitors.",
                        "To embed localized GPS tracking fields inside the image element's root metadata layers."],
                    cor: 1,
                    exp: "Alt text provides descriptive content for images, ensuring screen reader engines can articulate graphic meanings to visually impaired users."
                },
                {
                    type: "mcq",
                    q: "In professional video engineering, what is the core functional difference between a codec and a container format?",
                    a: ["The codec outlines the display skin design, while the container establishes file license fees.",
                        "The codec compresses and decompresses raw media tracks, while the container packages the audio, video, and subtitle elements into one standardized file wrapper.",
                        "The container modifies local optical lens focus variables, while the codec acts as a hardware processing chip.",
                        "The codec manages cloud distribution pipelines, while the container runs exclusively inside local memory structures."],
                    cor: 1,
                    exp: "Codecs (such as H.264 or AV1) encode and decode raw video and audio streams, whereas containers (like .MP4 or .MKV) act as files that bundle these separate tracks together."
                },
                {
                    type: "mcq",
                    q: "What is the primary reason for outputting finalized tech manuals or project reports in Portable Document Format (PDF) rather than standard text formats?",
                    a: ["PDF files allow any viewer to modify primary text layout parameters without specialized tools.",
                        "PDF files preserve visual formatting, typography choices, and image positioning identically across all operating platforms and hardware configurations.",
                        "PDF files skip the need for file compression algorithms during storage transfers.",
                        "PDF elements allow the document to run system hardware drivers directly from the paragraph blocks."],
                    cor: 1,
                    exp: "The PDF specification is a post-layout document format designed to display assets identically on any operating system, screen size, or device type."
                },
                {
                    type: "mcq",
                    q: "When adjusting audio settings for an instructional training module, increasing the digital sample rate results in:",
                    a: ["A significant compression of the overall audio file size footprint on disk.",
                        "More frequent digital snapshots of the analog sound wave per second, capturing higher frequencies with greater fidelity.",
                        "An automatic decrease in microphone physical recording levels.",
                        "The transformation of the acoustic stream into a mathematical vector asset layout."],
                    cor: 1,
                    exp: "The sample rate determines the number of audio snapshots taken per second. Higher sample rates capture sound wave frequencies more accurately, improving audio fidelity at the cost of larger file sizes."
                }
            ]
        },
        l3_lesson20: { 
            title: "Lesson 20: Collaboration", 
            questions: [
                {
                    type: "mcq",
                    q: "What is the primary function of utilizing Object Versioning within cloud infrastructure?",
                    a: [
                        "To generate notifications and audit logs for file metadata modifications.",
                        "To retrieve and restore data objects that were accidentally deleted or overwritten.",
                        "To lock application configurations across a multi-region deployment field.",
                        "To apply unique envelope encryption keys onto static objects at rest."
                    ],
                    cor: 1,
                    exp: "Object Versioning retains a history of changes for each file, protecting data from accidental deletion or malicious overwrite attacks."
                },
                {
                    type: "mcq",
                    q: "When collaborating with a team in a cloud word processor, which utility records all text insertions, adjustments, and deletions for subsequent owner approval?",
                    a: ["Macro Automation Scripting tools", "Track Changes / Suggesting Mode", "Strict Folder Access Encryption", "Metadata Tagging Fields"],
                    cor: 1,
                    exp: "Track Changes or Suggesting mode acts as an audit trail that highlights collaborative edits without overwriting the text permanently until approved."
                },
                {
                    type: "mcq",
                    q: "An analyst configures the cell formula '=B$2 * C2' in a spreadsheet application and replicates it down to the next row. What text structure appears in the new cell?",
                    a: ["=B$3 * C3", "=B$2 * C3", "=B2 * C2", "=B$2 * C2"],
                    cor: 1,
                    exp: "The dollar sign ($) creates an absolute row reference, locking row 2 in place. The relative reference (C2) updates dynamically to C3 when moved down to the next row."
                },
                {
                    type: "mcq",
                    q: "Which spreadsheet configuration constraint keeps cell inputs confined to whole integers between 1 and 50, automatically blocking text or out-of-bounds input values?",
                    a: ["Conditional Formatting rules", "Data Validation settings", "AutoFilter indexing arrays", "Pivot Table cross-summaries"],
                    cor: 1,
                    exp: "Data validation allows authors to enforce data types, numerical ranges, and custom rules on cell inputs, maintaining data integrity."
                },
                {
                    type: "mcq",
                    q: "Which tracking chart visualizes a complex project layout by detailing task lengths, individual completion markers, and dependencies across a horizontal timeline?",
                    a: ["Venn Diagram matrix", "Gantt Chart", "Pie Progression metric", "Mind Map configuration"],
                    cor: 1,
                    exp: "Gantt charts display tasks, milestones, and workflow dependencies on a timeline, helping teams track project schedules."
                }
            ]
        },
        l3_lesson21: { 
            title: "Lesson 21: Safety and Security", 
            questions: [
                {
                    type: "multi",
                    q: "An analyst is evaluating a suspect video statement found on open networks. Which two methods or structural signs are most effective for identifying a deepfake video?",
                    a: [
                        "Verifying that the file properties list standard high-definition resolution profiles.",
                        "Inspecting for visual artifacts along edge lines, erratic blinking rhythms, and inconsistent facial shadows.",
                        "Executing basic keyword query terms of the speaker's name inside general public directories.",
                        "Running a frame-by-frame analysis to detect audio-to-video synchronization anomalies or unnatural light shifts.",
                        "Checking if the source media element runs correctly across different open video applications."
                    ],
                    required: 2,
                    cor: [1, 3],
                    exp: "Forensic video assessment isolates geometric blending anomalies on the face, lighting inconsistencies, and microscopic audio sync deviations typical of AI synthesis engines."
                },
                {
                    type: "match",
                    q: "Match the network identity tracing/tracking tracking variable to its correct operational description.",
                    pairs: [
                        { item: "First-party Cookie", match: "Created and cached by the direct site you are visiting to preserve state logs, cart structures, and system profile identities." },
                        { item: "Third-party Cookie", match: "Embedded by independent marketing networks to build an analytical behavior profile across completely different domains." },
                        { item: "Incognito Profile Mode", match: "Ensures the host browser purges temporary session data, tracking cookies, and local history lines as soon as the window closes." }
                    ],
                    exp: "First-party cookies manage direct interaction logs; third-party elements cross domain boundaries for profiling; incognito settings clear local session data."
                },
                {
                    type: "mcq",
                    q: "A network operator flags a suspicious email domain variant 'rnicrosoft.com' designed to mimic 'microsoft.com' by relying on letter combinations. This deceptive strategy is known as:",
                    a: ["Doxing", "Typosquatting", "Man-in-the-Middle Injection", "Data Exfiltration Layout"],
                    cor: 1,
                    exp: "Typosquatting targets users who make typographical errors or fail to spot subtle visual character replacements (like 'r' and 'n' mimicking 'm') in fraudulent links."
                },
                {
                    type: "mcq",
                    q: "An employee spots a potential lottery phishing lure containing a payload link. To whom should this incident be reported to block further network-level impact?",
                    a: ["The upstream Internet Service Provider (ISP) network security desk.", "The verification site endpoint listed inside the link canvas.", "The localized regional state lottery administration office.", "No action is needed; purge the message cleanly from storage."],
                    cor: 0,
                    exp: "Reporting malicious domains to ISPs or security desks helps block the traffic at the gateway, protecting other endpoints on the network."
                },
                {
                    type: "multi",
                    q: "Most web utilities collect telemetry or data profiles. Which two functional documents are standard for disclosing telemetry collection policies and securing user consent?",
                    a: [
                        "Privacy Policy Document",
                        "Development Release Notes",
                        "Disclaimer Notice Form",
                        "End User License Agreement (EULA)",
                        "Accessibility Compliance Report"
                    ],
                    required: 2,
                    cor: [0, 3],
                    exp: "Privacy Policies define the collection, processing, and storage of telemetry, while the EULA handles the runtime legal usage terms."
                }
            ]
        }
    }
};
