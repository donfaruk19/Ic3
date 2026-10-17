// =================================================================
// IC3 GS6 MASTER QUESTION BANK (LEVELS 1, 2, AND 3)
// =================================================================

const masterQuestionBank = {
    // ---------------------------------------------------------
    // LEVEL 1: FUNDAMENTALS (Lessons 1 - 7)
    // --------------------------------------------------------
level1: {
    l1_lesson1: { title: "Lesson 1: Technology Basics", questions: [
        {
            type: "mcq",
            topic: "Hardware vs Software",
            q: "Which of the following is an example of computer hardware?",
            a: ["Windows 11", "Microsoft Word", "Keyboard", "Google Chrome"],
            cor: 2,
            exp: "Hardware refers to the tangible physical components of a computer system. A keyboard is hardware; the others are examples of software."
        },
        {
            type: "mcq",
            topic: "Operating System Role",
            q: "What is the primary purpose of an Operating System (OS)?",
            a: ["To browse the internet", "To manage hardware and software resources", "To create documents", "To send emails"],
            cor: 1,
            exp: "The OS is the master control program that coordinates hardware components, manages memory and storage, and provides a platform for applications to run."
        },
        {
            type: "multi",
            topic: "Input Devices",
            q: "Which two of the following are examples of input devices? (Choose 2.)",
            a: ["Printer", "Microphone", "Monitor", "Keyboard"],
            required: 2,
            cor: [1, 3],
            exp: "Input devices send data INTO the computer (microphone captures audio, keyboard captures keystrokes). Printers and monitors are output devices."
        },
        {
            type: "mcq",
            topic: "RAM vs Storage",
            q: "What is the key difference between RAM and a hard drive?",
            a: [
                "RAM is non-volatile while a hard drive is volatile",
                "RAM is temporary and volatile, while a hard drive provides non-volatile long-term storage",
                "RAM stores more data than a hard drive",
                "RAM is only found in servers"
            ],
            cor: 1,
            exp: "RAM is volatile and temporary memory used by active processes, wiped on shutdown. A hard drive provides persistent storage that retains data even when powered off."
        },
        {
            type: "ordering",
            topic: "Storage Capacity Order",
            q: "Place the following storage capacities in order from smallest to largest.",
            steps: ["Terabyte", "Megabyte", "Gigabyte", "Kilobyte"],
            cor: [3, 1, 2, 0],
            exp: "Correct order: Kilobyte (KB) < Megabyte (MB) < Gigabyte (GB) < Terabyte (TB). Each step is roughly 1,000× the previous unit."
        },
        {
            type: "mcq",
            topic: "Web Browser Function",
            q: "What role does a web browser play?",
            a: [
                "It manages the operating system's memory",
                "It renders HTML content and fetches web pages from servers",
                "It stores files on the local hard drive",
                "It handles device driver installations"
            ],
            cor: 1,
            exp: "A browser (Chrome, Edge, Firefox) requests HTML documents from web servers, interprets them, and renders the visual page for the user."
        },
        {
            type: "match",
            topic: "Device Functions",
            q: "Match each device to its primary function.",
            pairs: [
                { item: "Keyboard", match: "Input device used for typing" },
                { item: "Monitor", match: "Output device for displaying visuals" },
                { item: "Hard Drive", match: "Non-volatile long-term storage" },
                { item: "CPU", match: "Processes instructions for the system" }
            ],
            cor: [0, 1, 2, 3],
            exp: "Peripherals serve complementary roles: keyboard (input), monitor (output), hard drive (storage), and CPU (processing)."
        },
        {
            type: "mcq",
            topic: "USB Standard",
            q: "Why is USB considered a universal connection standard?",
            a: [
                "It only works with specific brands",
                "It requires a separate power source for each device",
                "It provides standardized data transfer and power to many device types",
                "It is limited to desktop computers"
            ],
            cor: 2,
            exp: "USB (Universal Serial Bus) provides a standard interface for both data and power across keyboards, mice, printers, drives, and phones."
        }
    ]},

    l1_lesson2: { title: "Lesson 2: Digital Citizenship", questions: [
        {
            type: "mcq",
            topic: "Digital Footprint",
            q: "What is a digital footprint?",
            a: [
                "A digital scan of a person's shoe size",
                "The trail of data you leave behind when using the internet",
                "A type of computer virus",
                "An antivirus protection suite"
            ],
            cor: 1,
            exp: "Every search, post, like, and click contributes to a permanent trail of data — your digital footprint — that can often be traced back to you."
        },
        {
            type: "multi",
            topic: "Positive Online Reputation",
            q: "Which two practices help maintain a positive digital footprint? (Choose 2.)",
            a: [
                "Sharing personal information publicly",
                "Using strong privacy settings on social media",
                "Posting inflammatory or offensive content",
                "Thinking carefully before posting online"
            ],
            required: 2,
            cor: [1, 3],
            exp: "Restricting public visibility and pausing before posting both reduce the risk of data being misused or taken out of context."
        },
        {
            type: "mcq",
            topic: "Copyright Definition",
            q: "What does copyright protect?",
            a: [
                "Only physical objects like books and paintings",
                "Original creative works fixed in a tangible medium",
                "Only code and software",
                "Only government documents"
            ],
            cor: 1,
            exp: "Copyright protects original expression — literature, music, art, software, and more — once it is fixed (e.g., written down or recorded)."
        },
        {
            type: "mcq",
            topic: "Fair Use",
            q: "Which of the following is an appropriate use of fair use?",
            a: [
                "Selling copies of a textbook chapter to classmates",
                "Quoting a few lines from a novel in a critical review",
                "Performing an entire song at a public event for profit",
                "Using an entire copyrighted manual in a paid course"
            ],
            cor: 1,
            exp: "Fair use permits limited quoting for commentary, criticism, education, or news reporting. Commercial resale or full-work performance for profit does not qualify."
        },
        {
            type: "match",
            topic: "IP Concepts",
            q: "Match each concept to its correct description.",
            pairs: [
                { item: "Copyright", match: "Legal protection of original creative works" },
                { item: "Fair Use", match: "Limited use of copyrighted material for education or commentary" },
                { item: "Public Domain", match: "Works free from copyright restrictions" },
                { item: "Plagiarism", match: "Presenting someone else's work as your own" }
            ],
            cor: [0, 1, 2, 3],
            exp: "These four concepts form the backbone of digital citizenship — knowing what is protected, what you can reuse, and what constitutes academic dishonesty."
        },
        {
            type: "mcq",
            topic: "Netiquette",
            q: "What does the term 'netiquette' refer to?",
            a: [
                "The speed of a network connection",
                "A set of accepted rules for polite online behavior",
                "A type of network protocol",
                "A security encryption standard"
            ],
            cor: 1,
            exp: "Netiquette = network etiquette: the informal but widely-shared conventions for respectful, courteous communication online."
        },
        {
            type: "mcq",
            topic: "Cyberbullying Response",
            q: "How should you respond if you witness cyberbullying?",
            a: [
                "Join in to avoid being targeted",
                "Ignore the situation and move on",
                "Save evidence, report it, and support the victim",
                "Share the content with more people"
            ],
            cor: 2,
            exp: "Documenting evidence, reporting to the platform or an adult, and supporting the target are the safe and ethical responses."
        },
        {
            type: "mcq",
            topic: "Public Domain",
            q: "Which type of content falls into the public domain?",
            a: [
                "Any content posted on the internet",
                "Content created within the last year",
                "Content whose copyright has expired or been waived by the creator",
                "Only content created by the government"
            ],
            cor: 2,
            exp: "Public domain applies when copyright expires or the creator explicitly dedicates the work to the public, allowing unrestricted use."
        }
    ]},

    l1_lesson3: { title: "Lesson 3: Information Management", questions: [
        {
            type: "mcq",
            topic: "Search Engines",
            q: "What is the primary function of a search engine?",
            a: [
                "To send emails and messages",
                "To find and index information on the web",
                "To manage computer files",
                "To create presentations"
            ],
            cor: 1,
            exp: "Search engines crawl the web, build a searchable index of page content, and return ranked results matching user queries."
        },
        {
            type: "multi",
            topic: "Boolean Operators",
            q: "Which two are common Boolean operators used in search queries? (Choose 2.)",
            a: ["AND", "MAYBE", "OR", "PERHAPS"],
            required: 2,
            cor: [0, 2],
            exp: "AND, OR, and NOT are the core Boolean operators. 'MAYBE' and 'PERHAPS' are not recognized by search engines."
        },
        {
            type: "mcq",
            topic: "NOT Operator",
            q: "What does the Boolean operator NOT do in a search?",
            a: [
                "Adds more results to your search",
                "Excludes results containing a specific term",
                "Searches for synonyms",
                "Sorts results alphabetically"
            ],
            cor: 1,
            exp: "NOT (or a minus sign in many engines) excludes the following term, refining results by removing unwanted pages."
        },
        {
            type: "mcq",
            topic: "Source Reliability",
            q: "Which type of website is generally considered most reliable for academic research?",
            a: ["Personal blogs", "Anonymous social media posts", "Educational institutions (.edu)", "Unverified wiki pages"],
            cor: 2,
            exp: ".edu domains are restricted to accredited institutions, making them generally more trustworthy for academic sourcing."
        },
        {
            type: "ordering",
            topic: "CRAAP Source Evaluation",
            q: "Place the following CRAAP source-evaluation checks in the order they are typically performed.",
            steps: [
                "Compare the information with other sources",
                "Check the publication date for currency",
                "Check for bias and the source's purpose",
                "Verify the author's credentials"
            ],
            cor: [2, 0, 3, 1],
            exp: "Practical order: Currency (date), Authority (author), Accuracy (cross-check), Purpose (bias). Steps listed above must be rearranged to: date → author → compare → bias."
        },
        {
            type: "mcq",
            topic: "CRAAP Test",
            q: "What is the primary purpose of the CRAAP test?",
            a: [
                "To test a computer's processing speed",
                "To evaluate the credibility and reliability of information sources",
                "To measure internet connection bandwidth",
                "To validate software license agreements"
            ],
            cor: 1,
            exp: "CRAAP = Currency, Relevance, Authority, Accuracy, Purpose. It's a structured rubric for judging source quality."
        },
        {
            type: "multi",
            topic: "Trustworthy Domains",
            q: "Which two domain extensions generally indicate more trustworthy sources? (Choose 2.)",
            a: [".com", ".gov", ".edu", ".biz"],
            required: 2,
            cor: [1, 2],
            exp: ".gov (government) and .edu (accredited education) are moderated extensions; .com and .biz are open to anyone."
        }
    ]},

    l1_lesson4: { title: "Lesson 4: Content Creation", questions: [
        {
            type: "mcq",
            topic: "Word Processing",
            q: "Which type of software is primarily used to create and edit text-based documents?",
            a: ["Spreadsheet software", "Word processing software", "Presentation software", "Image editing software"],
            cor: 1,
            exp: "Word processors (Word, Google Docs) are designed for text-heavy documents such as reports, essays, and memos."
        },
        {
            type: "mcq",
            topic: "Cell References",
            q: "What does the cell reference 'B5' mean in a spreadsheet?",
            a: ["Row B and Column 5", "Column B and Row 5", "A formula reference", "A file extension"],
            cor: 1,
            exp: "Columns are lettered and rows are numbered, so B5 refers to the cell in column B, row 5."
        },
        {
            type: "mcq",
            topic: "Spreadsheet Formulas",
            q: "What mandatory character must begin every formula in a spreadsheet?",
            a: ["Plus sign (+)", "Equals sign (=)", "Dollar sign ($)", "Asterisk (*)"],
            cor: 1,
            exp: "The equals sign tells the software the entry is a formula to be calculated, not literal text."
        },
        {
            type: "mcq",
            topic: "Presentation Software",
            q: "What is the primary purpose of presentation software like Microsoft PowerPoint?",
            a: [
                "To create detailed written reports",
                "To design slide decks for visual presentations",
                "To calculate complex mathematical formulas",
                "To manage large databases"
            ],
            cor: 1,
            exp: "Presentation software builds slide decks combining text, graphics, animations, and media for spoken delivery to an audience."
        },
        {
            type: "multi",
            topic: "Word File Extensions",
            q: "Which two file extensions indicate Microsoft Word documents? (Choose 2.)",
            a: [".docx", ".xlsx", ".doc", ".pptx"],
            required: 2,
            cor: [0, 2],
            exp: ".docx is the modern Word format and .doc is its legacy predecessor. .xlsx = Excel, .pptx = PowerPoint."
        },
        {
            type: "mcq",
            topic: "PDF Benefits",
            q: "Why is the PDF format often preferred for sharing finalized documents?",
            a: [
                "PDF files are the only editable format available",
                "PDF preserves visual formatting across all platforms",
                "PDF files use the least storage space",
                "PDF files automatically update content"
            ],
            cor: 1,
            exp: "PDFs embed fonts, images, and layout so the document displays identically on Windows, macOS, mobile, or print."
        },
        {
            type: "match",
            topic: "Software Categories",
            q: "Match each software category to its common application.",
            pairs: [
                { item: "Word Processing", match: "Microsoft Word" },
                { item: "Spreadsheets", match: "Microsoft Excel" },
                { item: "Presentations", match: "Microsoft PowerPoint" },
                { item: "Image Editing", match: "Adobe Photoshop" }
            ],
            cor: [0, 1, 2, 3],
            exp: "Each software category maps to its flagship application in a standard office/productivity suite."
        },
        {
            type: "mcq",
            topic: "Save vs Save As",
            q: "What is the difference between 'Save' and 'Save As'?",
            a: [
                "They are identical in function",
                "'Save As' lets you save the file with a new name or location",
                "'Save' creates a backup while 'Save As' deletes the original",
                "'Save As' only works on new files"
            ],
            cor: 1,
            exp: "Save updates the existing file in place; Save As creates a new file (or new version) while preserving the original."
        }
    ]},

    l1_lesson5: { title: "Lesson 5: Communication", questions: [
        {
            type: "mcq",
            topic: "Bcc Field",
            q: "What is the purpose of the Bcc field in an email?",
            a: [
                "To send a copy of the email to additional recipients",
                "To collect information about someone without their knowledge",
                "To keep multiple recipients' email addresses private from each other",
                "To indicate a personal message"
            ],
            cor: 2,
            exp: "Bcc (Blind Carbon Copy) hides recipient addresses from everyone else, preventing address harvesting and accidental exposure."
        },
        {
            type: "mcq",
            topic: "Subject Line",
            q: "What should a professional email's Subject Line contain?",
            a: [
                "Blank space for the recipient to fill in",
                "A long descriptive paragraph",
                "A brief, descriptive summary of the message content",
                "Only the sender's name"
            ],
            cor: 2,
            exp: "A concise, specific subject line helps recipients prioritize and find emails later in crowded inboxes."
        },
        {
            type: "mcq",
            topic: "Attachment Limits",
            q: "What typically happens when you attach a file larger than the email server's limit?",
            a: [
                "The email sends without the file",
                "The file is automatically compressed",
                "The email is rejected or bounced back to you",
                "The file is split into multiple attachments"
            ],
            cor: 2,
            exp: "Most email providers reject large attachments — a common workaround is to share a cloud link instead."
        },
        {
            type: "mcq",
            topic: "Email Signature",
            q: "What is the primary function of an email signature?",
            a: [
                "To encrypt the email contents",
                "To provide contact information and professional identity",
                "To automatically delete old messages",
                "To compress attached files"
            ],
            cor: 1,
            exp: "Signatures typically include the sender's name, title, organization, and contact info, reinforcing professional identity."
        },
        {
            type: "multi",
            topic: "Professional Email Etiquette",
            q: "Which two are good professional email practices? (Choose 2.)",
            a: [
                "Using ALL CAPS to emphasize important points",
                "Proofreading for grammar and spelling",
                "Including a clear purpose and context in the message",
                "Forwarding chain emails to all contacts"
            ],
            required: 2,
            cor: [1, 2],
            exp: "Proofreading and stating the purpose clearly keep emails professional and efficient. ALL CAPS reads as shouting; chain emails clutter inboxes."
        },
        {
            type: "match",
            topic: "Email Header Fields",
            q: "Match each email field to its function.",
            pairs: [
                { item: "To", match: "Primary recipients who will act on the email" },
                { item: "Cc", match: "Secondary recipients who need to be informed" },
                { item: "Bcc", match: "Hidden recipients invisible to other recipients" },
                { item: "Subject", match: "Brief descriptive summary of the message topic" }
            ],
            cor: [0, 1, 2, 3],
            exp: "Each header field controls a different aspect of who receives the message and how it's presented."
        },
        {
            type: "mcq",
            topic: "Synchronous vs Asynchronous",
            q: "What is the difference between synchronous and asynchronous communication?",
            a: [
                "They are the same thing",
                "Synchronous requires real-time participation while asynchronous allows delayed responses",
                "Synchronous requires an internet connection while asynchronous does not",
                "Asynchronous always involves audio or video"
            ],
            cor: 1,
            exp: "Synchronous = live (phone, video, chat); asynchronous = time-shifted (email, forum posts, shared docs)."
        }
    ]},

    l1_lesson6: { title: "Lesson 6: Collaboration", questions: [
        {
            type: "mcq",
            topic: "Cloud Storage",
            q: "What is the primary advantage of cloud storage for team collaboration?",
            a: [
                "It eliminates the need for internet access",
                "It provides centralized, globally accessible file storage",
                "It increases the local hard drive speed",
                "It automatically encrypts files with military-grade security"
            ],
            cor: 1,
            exp: "Cloud storage puts shared files on internet-accessible servers so any authorized team member can access them from anywhere."
        },
        {
            type: "mcq",
            topic: "Real-Time Co-Authoring",
            q: "What does real-time co-authoring allow multiple users to do?",
            a: [
                "Only view the document without editing",
                "Edit the same document simultaneously",
                "Delete other users' edits",
                "Access the document only offline"
            ],
            cor: 1,
            exp: "Co-authoring tools (Google Docs, Microsoft 365) sync edits live, so teams can collaborate without emailing versions back and forth."
        },
        {
            type: "mcq",
            topic: "View-Only Permission",
            q: "What does 'View-Only' access permission allow a user to do?",
            a: [
                "Edit the document contents",
                "Delete the document",
                "Open and read the document without making changes",
                "Share the document with anyone"
            ],
            cor: 2,
            exp: "View-Only is a restrictive permission that prevents editing or deletion while still allowing the document to be read."
        },
        {
            type: "multi",
            topic: "Collaboration Tools",
            q: "Which two are common digital collaboration tools? (Choose 2.)",
            a: ["Google Workspace", "Microsoft 365", "Calculator", "Notepad"],
            required: 2,
            cor: [0, 1],
            exp: "Google Workspace and Microsoft 365 bundle shared docs, chat, video, and calendars. Calculator and Notepad are local utilities, not collaboration platforms."
        },
        {
            type: "match",
            topic: "Collaboration Concepts",
            q: "Match each collaboration term to its description.",
            pairs: [
                { item: "Cloud Storage", match: "Online storage accessible from any device" },
                { item: "Co-Authoring", match: "Multiple users editing a document simultaneously" },
                { item: "Version History", match: "Record of document changes over time" },
                { item: "Permissions", match: "Controls that determine who can view or edit a file" }
            ],
            cor: [0, 1, 2, 3],
            exp: "Together these tools enable secure, version-aware, multi-user collaboration on shared files."
        },
        {
            type: "mcq",
            topic: "Version History",
            q: "What is the main benefit of version history in collaborative documents?",
            a: [
                "It automatically deletes old versions",
                "It reduces the file size",
                "It allows recovery of earlier versions if needed",
                "It requires more storage space"
            ],
            cor: 2,
            exp: "Version history lets you restore a previous state if a change breaks the document or an edit is accidentally deleted."
        },
        {
            type: "mcq",
            topic: "Video Conference Etiquette",
            q: "Which is an example of good video conferencing etiquette?",
            a: [
                "Speaking over others to save time",
                "Muting your microphone when not speaking",
                "Leaving your camera on while moving around",
                "Typing loudly during presentations"
            ],
            cor: 1,
            exp: "Muting when not speaking prevents background noise from distracting the whole meeting — a core rule of video call etiquette."
        }
    ]},

    l1_lesson7: { title: "Lesson 7: Safety and Security", questions: [
        {
            type: "mcq",
            topic: "Strong Passwords",
            q: "Which of the following is the strongest password?",
            a: ["password123", "John1985", "Tr$9#mK!2pL7@qR", "abcdef"],
            cor: 2,
            exp: "Strong passwords are long, random, and mix uppercase, lowercase, numbers, and symbols. Personal info (name + birth year) and common words are easily guessed."
        },
        {
            type: "mcq",
            topic: "Phishing",
            q: "What is phishing?",
            a: [
                "A technique to test network speed",
                "A fraudulent attempt to obtain sensitive information by disguising as a trustworthy entity",
                "A method for compressing files",
                "A type of firewall configuration"
            ],
            cor: 1,
            exp: "Phishing uses fake emails or sites that impersonate banks, employers, or known brands to trick users into giving up credentials or personal info."
        },
        {
            type: "mcq",
            topic: "Multi-Factor Authentication",
            q: "What does Multi-Factor Authentication (MFA) require?",
            a: ["Only a password", "Two or more different verification methods", "Only a fingerprint scan", "Only an email verification"],
            cor: 1,
            exp: "MFA combines factors like something you know (password) with something you have (phone code) or are (biometric), dramatically reducing account takeover."
        },
        {
            type: "multi",
            topic: "Malware Types",
            q: "Which two are types of malware? (Choose 2.)",
            a: ["Virus", "Keyboard", "Ransomware", "Monitor"],
            required: 2,
            cor: [0, 2],
            exp: "Viruses and ransomware are malicious software. Keyboards and monitors are hardware peripherals, not malware."
        },
        {
            type: "mcq",
            topic: "HTTPS",
            q: "What does the 'S' in HTTPS indicate about a website?",
            a: [
                "It is a social media site",
                "It uses secure, encrypted communication",
                "It is a scam website",
                "It is sold by the government"
            ],
            cor: 1,
            exp: "HTTPS adds TLS/SSL encryption to HTTP, protecting data in transit between browser and server from eavesdropping."
        },
        {
            type: "mcq",
            topic: "Public Wi-Fi Risk",
            q: "Why should you avoid entering sensitive data on public Wi-Fi networks?",
            a: [
                "Public Wi-Fi is always faster than home networks",
                "Public networks typically lack encryption, allowing data interception",
                "Public Wi-Fi requires a paid subscription",
                "Public Wi-Fi blocks all websites"
            ],
            cor: 1,
            exp: "Open Wi-Fi lacks encryption, so nearby attackers on the same network can potentially intercept unencrypted traffic."
        },
        {
            type: "match",
            topic: "Security Concepts",
            q: "Match each security concept to its correct description.",
            pairs: [
                { item: "Firewall", match: "Monitors and filters network traffic" },
                { item: "Antivirus", match: "Detects and removes malicious software" },
                { item: "MFA", match: "Requires multiple verification factors to log in" },
                { item: "Encryption", match: "Scrambles data to prevent unauthorized access" }
            ],
            cor: [0, 1, 2, 3],
            exp: "These four defenses form layers of defense-in-depth: network filtering, endpoint scanning, identity verification, and data protection."
        },
        {
            type: "mcq",
            topic: "Ransomware",
            q: "What is ransomware?",
            a: [
                "Software that speeds up your computer",
                "Malicious software that encrypts files and demands payment for decryption",
                "A legitimate backup tool",
                "A type of email attachment"
            ],
            cor: 1,
            exp: "Ransomware encrypts user data and holds it hostage. The correct response is to disconnect from the network, notify IT, and restore from backup — not to pay."
        },
        {
            type: "mcq",
            topic: "Software Updates",
            q: "Why are regular software updates important for security?",
            a: [
                "They make your computer slower",
                "They patch known security vulnerabilities",
                "They only change the visual appearance",
                "They always require payment"
            ],
            cor: 1,
            exp: "Updates close security holes before attackers exploit them. Skipping updates is one of the most common causes of preventable breaches."
        }
    ]}
}
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
                        { item: "Tablet", match: "Portable device optimized for document parsing, viewing media, and casual tasks with long battery efficiency." },
                        { item: "Desktop Computer", match: "Supports heavy computing tasks like high-end graphics rendering and video processing workflows." }
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
        },
l3_practice2: {
    title: "Level 3 Practice Bank – 55 Exam-Style Questions",
    questions: [

// ═══ 1–5 ═══
{ type:"mcq", topic:"Email Attachments", q:"Which file can you NOT send through a standard email provider like Gmail or Yahoo?", a:["A 30-frame 1080p animated GIF","A 5-minute MP3 podcast","A 1-minute 8K-resolution AVI video","A 400-page plain-text file"], cor:2, exp:"8K AVI video exceeds standard 25 MB attachment limits." },
{ type:"mcq", topic:"Group Communication", q:"Your group needs to know about a meeting change. Most efficient response?", a:["Post on social media","Email your instructor","Email the whole group","Call each member individually"], cor:2, exp:"A single group email reaches everyone with identical info and creates a written record." },
{ type:"binary_group", topic:"Marketing Effectiveness", q:"For each statement about digital marketing, select True or False.", options:["True","False"], statements:[
    { text:"Buttons linking to specific URLs in graphics increase traffic compared to text CTAs.", correct:0 },
    { text:"A/B testing determines which messaging is most effective for moving audiences to action.", correct:0 },
    { text:"Built-in analytics tools reveal the effectiveness of a medium at driving traffic.", correct:0 }
], exp:"All three are correct — visual CTAs outperform text links, A/B testing validates messaging, analytics exposes performance." },
{ type:"mcq", topic:"Driver Sourcing", q:"Device Manager shows 'unknown device' for a laptop. Best action?", a:["Scan for hardware changes","Use the model number on the manufacturer's Drivers page","Restart and repair Windows","Buy driver software from a store"], cor:1, exp:"The most reliable method is downloading signed drivers from the manufacturer's support site using the exact model number." },
{ type:"mcq", topic:"Data Remanence", q:"You delete files and empty the Recycle Bin before selling a PC. What data remains?", a:["All of it — reference and data","None — reference and data removed","Only the reference remains","Only the file data remains"], cor:3, exp:"Deleting removes file system pointers; file data stays on disk until overwritten." },

// ═══ 6–10 ═══
{ type:"mcq", topic:"Intellectual Property", q:"Best action demonstrating IP-guideline understanding?", a:["Provide attribution after adhering to fair use","Credit only in bibliography","Use small portions assuming fair use","Modify slightly and claim as your own"], cor:0, exp:"Attribution combined with fair-use compliance is correct." },
{ type:"multi", topic:"Customer Support", q:"Which three are appropriate when supporting an app user? (Choose 3.)", a:["Send annotated sequential screenshots","Provide clear, concise instructions","Share video links with useful steps","Notify them it's likely user error","Send positive emojis"], required:3, cor:[0,1,2], exp:"Annotated screenshots, clear instructions, and video links are professional." },
{ type:"multi", topic:"IP Protection", q:"Which two actions protect IP? (Choose 2.)", a:["Watermark public content","Create a Creative Commons license","Add a disclaimer claiming all content as IP","Create a public portfolio"], required:2, cor:[0,1], exp:"Watermarks deter misuse; CC licenses provide a clear legal framework." },
{ type:"binary_group", topic:"Cloud Documents", q:"For each statement about cloud documents, select True or False.", options:["True","False"], statements:[
    { text:"Cloud documents cannot function without internet.", correct:1 },
    { text:"Cloud documents offer varying security to control viewing.", correct:0 },
    { text:"Cloud docs can be configured for viewing, commenting, or editing roles.", correct:0 },
    { text:"Cloud documents must always be actively uploaded.", correct:1 }
], exp:"Offline sync (False), granular sharing (True), view/comment/edit roles (True), auto-sync (False)." },
{ type:"binary_group", topic:"Password Sharing", q:"For each statement, select True or False.", options:["True","False"], statements:[
    { text:"Using someone else's password, your employer can restrict future access.", correct:0 },
    { text:"Signing a coworker in with their password because they're late is fraud.", correct:0 },
    { text:"If multiple people know a password and a breach occurs, all could be held responsible.", correct:0 }
], exp:"All correct — sharing violates policy, can be fraud, and creates shared liability." },

// ═══ 11–15 ═══
{ type:"multi", topic:"Staying Informed", q:"Which two practices keep you informed about digital threats? (Choose 2.)", a:["Follow independent social accounts about tools","Monitor app update notifications and terms changes","Subscribe to marketing emails","Review the publisher's site yearly"], required:2, cor:[0,1], exp:"Independent sources and official update notifications are proactive." },
{ type:"binary_group", topic:"E-Waste Facts", q:"For each e-waste statement, select True or False.", options:["True","False"], statements:[
    { text:"Over 60% of e-waste is recycled.", correct:1 },
    { text:"E-waste is the slowest growing waste stream.", correct:1 },
    { text:"E-waste contains recoverable precious metals.", correct:0 },
    { text:"E-waste contains toxic metals that can leach into groundwater.", correct:0 }
], exp:"Only ~17–20% recycled (False). It's the fastest-growing stream (False). Precious (True) and toxic metals (True)." },
{ type:"multi", topic:"Data Visualization", q:"Best chart types to show population growth over time? (Choose 2.)", a:["Map","Bar graph","Line graph","Pie chart"], required:2, cor:[1,2], exp:"Bar and line graphs best show trends over time." },
{ type:"mcq", topic:"Chrome Reset", q:"How do you return Chrome to default state?", a:["You and Google","Appearance","Default browser","On startup","Reset and clean up"], cor:4, exp:"'Reset and clean up' → 'Restore settings to their original defaults'." },
{ type:"binary_group", topic:"Deepfake Detection", q:"Select Yes if the action helps detect a deepfake, or No if it does not.", options:["Yes","No"], statements:[
    { text:"Assume an unlikely statement proves the video is trustworthy.", correct:1 },
    { text:"Search quotes online for coverage by reputable news organizations.", correct:0 },
    { text:"Consider the motivations of the originators.", correct:0 },
    { text:"Check video comments for accusations.", correct:0 }
], exp:"Trusting blindly is wrong (No). Searching quotes, analyzing motives, checking comments are valid (Yes)." },

// ═══ 16–20 ═══
{ type:"ordering", topic:"Cyclical Design", q:"Place cyclical design process tasks in order.", steps:["Develop the prototype","Generate ideas","Identify project requirements","Refine the prototype","Test the prototype"], cor:[2,1,0,4,3], exp:"Requirements → Ideas → Prototype → Test → Refine." },
{ type:"multi", topic:"Logical Fallacies", q:"Which two fallacies does the study-guide story contain? (Choose 2.)", a:["Ad hominem","False dilemma","Appeal to authority","Appeal to tradition"], required:2, cor:[1,2], exp:"False dilemma offers only two options; appeal to authority uses one professor's claim." },
{ type:"mcq", topic:"Fair Use", q:"Unknown 30-second clip copied. Which use is NOT fair use?", a:["News report","Teaching","Political ad","Parody"], cor:2, exp:"Commercial/political use rarely qualifies as fair use." },
{ type:"multi", topic:"Video Manipulation", q:"Which two editing methods change original meaning? (Choose 2.)", a:["Add credits","Link credible sources","Edit pieces from different videos together","Show brief clip of a longer segment"], required:2, cor:[2,3], exp:"Recontextualized clips (C) and brief out-of-context clips (D) change meaning." },
{ type:"mcq", topic:"System Requirements", q:"Laptop: 32GB RAM, 2GB graphics. Minimum: 16GB/1GB. Recommended: 4GB graphics. Which is true?", a:["Meets optimal","Meets recommended","Meets minimum","Does not meet minimum"], cor:2, exp:"RAM and graphics exceed minimum but fall short of recommended 4GB graphics." },

// ═══ 21–25 ═══
{ type:"binary_group", topic:"Digital Communication", q:"For each statement, select True or False.", options:["True","False"], statements:[
    { text:"Avoid directly stating the purpose of the message.", correct:1 },
    { text:"Use bullet points or lists to organize details.", correct:0 },
    { text:"Use acronyms and abbreviations in all messages.", correct:1 },
    { text:"Provide multiple options to minimize back-and-forth with clients.", correct:0 }
], exp:"State purpose clearly (False). Bullets help (True). Overusing acronyms confuses (False). Options reduce round-trips (True)." },
{ type:"mcq", topic:"Cyclical Design Benefit", q:"A key benefit of cyclical design is:", a:["Fastest possible delivery","Continual testing and improvement","Strict fixed deadline","Independent work without input"], cor:1, exp:"Cyclical design emphasizes repeated testing and iteration." },
{ type:"mcq", topic:"Cross-Platform Software", q:"Which software works online and on iOS/Android?", a:["Mac OS","Windows 11","Microsoft 365","Chrome OS"], cor:2, exp:"Microsoft 365 is a cloud suite available on all major platforms." },
{ type:"mcq", topic:"Word AutoCorrect", q:"Where do you change Word's automatic capitalization corrections?", a:["Grammar settings","OS preferences","AutoCorrect Options","Office Language Preferences"], cor:2, exp:"AutoCorrect Options controls automatic capitalization." },
{ type:"multi", topic:"Productive Group Work", q:"Which three best demonstrate productive group contribution? (Choose 3.)", a:["Set deadlines for accountability","Do extra work to compensate for slackers","Agree with the teacher's recommendations on scope","Delay deliverable format discussion","Agree to norms for online group chat"], required:3, cor:[0,2,4], exp:"Deadlines, agreed scope, and established norms are productive." },

// ═══ 26–30 ═══
{ type:"mcq", topic:"Browser Troubleshooting", q:"Website not loading properly. First step?", a:["Clear browser cache","Email the owner","Check BIOS","Remove apps"], cor:0, exp:"Clearing the cache is the first and simplest fix." },
{ type:"binary_group", topic:"Automation Impact", q:"For each automation statement, select True or False.", options:["True","False"], statements:[
    { text:"Automation displaces some existing job roles.", correct:0 },
    { text:"Automation creates new job roles.", correct:0 },
    { text:"Social interaction activities are more likely to be automated.", correct:1 },
    { text:"Physical tasks in predictable environments are more likely to be automated.", correct:0 }
], exp:"Automation displaces and creates roles. Social tasks resist automation; predictable physical tasks automate easily." },
{ type:"multi", topic:"Readability", q:"Which two best improve online document readability? (Choose 2.)", a:["Add closed captions","Minimize excessive punctuation and multi-line sentences","Check grade-level alignment to audience","Use low-contrast type"], required:2, cor:[1,2], exp:"Tighter punctuation/sentences and grade-level checks help." },
{ type:"multi", topic:"Document Readability", q:"Which two improve readability? (Choose 2.)", a:["Adequate line spacing","Type in all caps","Decorative modern font","Strong color contrast","Compact font size to fit paragraphs"], required:2, cor:[0,3], exp:"Adequate spacing and strong contrast greatly improve readability." },
{ type:"mcq", topic:"Support First Step", q:"Customer calls about a faulty older laptop. Best first step?", a:["Explain it's too old to fix","Suggest buying a new laptop","Ask about error messages","Tell them to come in for a refund"], cor:2, exp:"The first troubleshooting step is gathering information — ask about error messages." },

// ═══ 31–35 ═══
{ type:"ordering", topic:"Media Production", q:"Order to match Pre-production → Post-production → Distribution.", steps:["Editing, effects, captions","Uploading to platform","Scripting, storyboarding, scouting"], cor:[2,0,1], exp:"Scripting (pre) → Editing (post) → Uploading (distribution)." },
{ type:"multi", topic:"Team Success", q:"Which three are good team-member strategies? (Choose 3.)", a:["Share and accept feedback","Use team messaging to collaborate","Use reply-all for updates","Keep discussion light","Never pressure about deadlines","Be prompt and focused in meetings"], required:3, cor:[0,1,5], exp:"Feedback, team messaging, and prompt/focused meetings are constructive." },
{ type:"mcq", topic:"MFA", q:"Banking app asks for a phone code plus password. This is:", a:["Password reset","Identity monitoring","Multifactor authentication","Phishing"], cor:2, exp:"Phone code + password is classic multifactor authentication." },
{ type:"mcq", topic:"Secure Passwords", q:"Recommended way to create a memorable secure password?", a:["Use parts of a random phrase","Combine favorite color and animal","Use your social handle","Use a name plus number"], cor:0, exp:"Random phrases are secure and memorable; personal info is guessable." },
{ type:"binary_group", topic:"Team Constructiveness", q:"Select Yes if appropriate or No if not.", options:["Yes","No"], statements:[
    { text:"Offer to lead so you can steer the project.", correct:1 },
    { text:"Avoid conflicts by agreeing with every suggestion.", correct:1 },
    { text:"Point out teammates' mistakes and offer to fix them.", correct:1 },
    { text:"Listen carefully to teammates' ideas before feedback.", correct:0 }
], exp:"Steering, blind agreement, and criticizing mistakes aren't constructive. Listening is (Yes)." },

// ═══ 36–40 ═══
{ type:"multi", topic:"Data Center Impact", q:"In which two ways do data centers negatively impact the environment? (Choose 2.)", a:["Generate heat that warms nearby water","Built in urban areas, increasing air pollution","Use significant non-renewable electricity","Built in cold climates harming polar bears"], required:2, cor:[0,2], exp:"Data centers warm water and consume huge electricity, often non-renewable." },
{ type:"multi", topic:"Client Confidence", q:"Which three actions help ensure a client leaves the kickoff confident? (Choose 3.)", a:["Discuss the design applications at length","Tell the client you'll email a draft proposal with deadlines","Discuss your career goals","Paraphrase what the client said","Agree on digital communication forms","Speak casually to put the client at ease"], required:3, cor:[1,3,4], exp:"Proposal with deadlines, paraphrasing, and communication methods build confidence." },
{ type:"multi", topic:"Client Design Changes", q:"Client requests poster changes. Which three actions should you take? (Choose 3.)", a:["Ask the client to explain reasons and impact","Tell the client you don't want to change","Tell the client their ideas aren't welcome","Remind them your team has the knowledge","Create a mockup with their changes","Focus on design choices, not emotions"], required:3, cor:[0,4,5], exp:"Ask for reasons, produce a mockup, stay design-focused." },
{ type:"binary_group", topic:"Video Load Speed", q:"Select Yes if the action speeds up loading, or No if not.", options:["Yes","No"], statements:[
    { text:"Increase the video bitrate.", correct:1 },
    { text:"Convert the video to HTML5.", correct:0 },
    { text:"Decrease the video resolution.", correct:0 },
    { text:"Replace with an uncompressed version.", correct:1 }
], exp:"Higher bitrate and uncompressed slow loading. HTML5 and lower resolution speed it up." },
{ type:"multi", topic:"Underutilized Skills", q:"Which three skills can become underutilized due to technology? (Choose 3.)", a:["Eye-hand coordination","Memorization","Mental math","Map navigation","Organization","Dexterity"], required:3, cor:[1,2,3], exp:"Memorization, mental math, and map navigation are often replaced by tech." },

// ═══ 41–45 ═══
{ type:"mcq", topic:"Desktop vs Cloud", q:"Benefit of a desktop app over a cloud app?", a:["Lower upfront cost","No internet dependency","Uses less disk","Updated more frequently"], cor:1, exp:"Desktop apps work offline; cloud apps require internet." },
{ type:"binary_group", topic:"Web Credibility", q:"For each statement, select True or False.", options:["True","False"], statements:[
    { text:"Web pages citing sources are more credible.", correct:0 },
    { text:"A .org domain guarantees reliability.", correct:1 },
    { text:"Consulting multiple sources helps verify accuracy.", correct:0 },
    { text:"First search results are usually the most reliable.", correct:1 }
], exp:"Citing sources (True), consulting multiple sources (True). .org and search rank aren't reliability indicators (False)." },
{ type:"multi", topic:"Communication Feedback", q:"Which two improve your team's communication skills? (Choose 2.)", a:["Ask your teacher for feedback on what to improve","Individually text the client to apologize","Continue the same approach for practice","Speak in a positive, respectful tone","Have another team member take over communication"], required:2, cor:[0,3], exp:"Seeking feedback and positive/respectful tone are constructive." },
{ type:"multi", topic:"Idea Generation", q:"Which two help the idea-generation process? (Choose 2.)", a:["Withhold criticism of peers' ideas","Share only highly confident ideas","Encourage wild ideas","Limit each person to one or two ideas"], required:2, cor:[0,2], exp:"Withholding criticism and encouraging wild ideas foster creativity." },
{ type:"binary_group", topic:"Alt-Text", q:"Select Yes if the info is necessary in alt-text, or No if not.", options:["Yes","No"], statements:[
    { text:"The image copyright.", correct:1 },
    { text:"A brief description of the image.", correct:0 },
    { text:"Context and details relevant to the image purpose.", correct:0 }
], exp:"Copyright isn't needed. Description and context are essential for accessibility." },

// ═══ 46–50 ═══
{ type:"binary_group", topic:"Boolean Search", q:"Select Yes if a Boolean search helps identify relevant results faster, or No if not.", options:["Yes","No"], statements:[
    { text:"Apple varieties.", correct:1 },
    { text:"History of apple agriculture.", correct:1 },
    { text:"Recipes for apple pie OR cake.", correct:0 },
    { text:"Macintosh apples, but NOT the Macintosh computer.", correct:0 }
], exp:"Simple topic searches don't need Boolean (No). OR recipes and NOT exclusion (Yes)." },
{ type:"binary_group", topic:"Staying Current", q:"For each statement, select True or False.", options:["True","False"], statements:[
    { text:"Understanding monetization gives insight into content motivations.", correct:0 },
    { text:"Using public beta apps hints at industry trends.", correct:0 },
    { text:"Broadcast news has the highest coverage accuracy and rigor standards.", correct:1 }
], exp:"Monetization and betas help stay current (True). Broadcast isn't universally the highest standard (False)." },
{ type:"mcq", topic:"EULA", q:"Where do you find if lending purchased software to a friend is acceptable?", a:["ACL","CMS","ESRB","EULA"], cor:3, exp:"The EULA specifies terms of use including sharing restrictions." },
{ type:"multi", topic:"Constructive Traits", q:"Which two are traits of a constructive team member? (Choose 2.)", a:["Confident","Rigorous","Opinionated","Inquisitive"], required:2, cor:[0,3], exp:"Confidence and inquisitiveness are positive traits." },
{ type:"binary_group", topic:"Web Accessibility", q:"Select True if correct for accessibility standards, or False if not.", options:["True","False"], statements:[
    { text:"The preferred font style is sans-serif.", correct:0 },
    { text:"The minimum recommended body font size is 12 points.", correct:1 },
    { text:"You should maintain low contrast between font and background.", correct:1 }
], exp:"Sans-serif (True). 16px preferred over 12pt (False). High contrast required, not low (False)." },

// ═══ 51–55 ═══
{ type:"ordering", topic:"Search Intent", q:"Order topics to match Informational → Navigation → Transactional.", steps:["A specific site","Third-party options to purchase software","Population statistics"], cor:[2,0,1], exp:"Population stats = Informational; specific site = Navigation; purchase options = Transactional." },
{ type:"binary_group", topic:"Source Bias", q:"For each statement, select True or False.", options:["True","False"], statements:[
    { text:"Statements from official verified accounts are always trustworthy and unbiased.", correct:1 },
    { text:"The tone of a source matters — it can create outsized urgency.", correct:0 },
    { text:"Publisher and media-owner policies should be reported transparently.", correct:0 },
    { text:"An eyewitness account is more credible than a second-hand source.", correct:1 }
], exp:"Official accounts can be biased (False). Tone matters (True). Transparency matters (True). Eyewitnesses aren't always more credible (False)." },
{ type:"binary_group", topic:"Online Privacy", q:"Select Yes if the action contributes to online privacy, or No if not.", options:["Yes","No"], statements:[
    { text:"Stay logged into websites.", correct:1 },
    { text:"Delete cookies after using the browser.", correct:0 },
    { text:"Use the same password across accounts.", correct:1 },
    { text:"Use Private Browsing to maintain anonymity.", correct:1 }
], exp:"Staying logged in and reusing passwords hurt privacy. Deleting cookies helps. Private Browsing isn't anonymity." },
{ type:"binary_group", topic:"Virtual Team Success", q:"For each strategy, select True or False.", options:["True","False"], statements:[
    { text:"Have team members collect information in a shared document.", correct:0 },
    { text:"Increase efficiency using only asynchronous communication.", correct:1 },
    { text:"Create a team discussion board for project conversations.", correct:0 },
    { text:"Have a central file storage location all team members can access.", correct:0 }
], exp:"Shared docs, discussion boards, and central storage help. Async-only misses real-time collaboration (False)." },
{ type:"binary_group", topic:"Online Research", q:"Select Effective or Ineffective for each research strategy.", options:["Effective","Ineffective"], statements:[
    { text:"Refine your search terms to better match your topic.", correct:0 },
    { text:"Paste the entire assignment text into a search engine.", correct:1 },
    { text:"Use Boolean operators with the keywords in your search.", correct:0 }
], exp:"Refined terms and Boolean operators work (Effective). Pasting whole assignments returns noise (Ineffective)." }

]}
}
};
