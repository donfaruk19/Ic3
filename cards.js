// =================================================================
// IC3 GS6 MASTER FLASHCARD REPOSITORY (LEVELS 1, 2, AND 3)
// =================================================================

const masterFlashcardBank = {
    // ---------------------------------------------------------
    // LEVEL 1: FOUNDAMENTALS (Lessons 1 - 7)
    // ---------------------------------------------------------
    level1: {
        l1_lesson1: {
            title: "Lesson 1: Technology Basics",
            cards: [
                {
                    topic: "Hardware & Software",
                    front: "What is the structural difference between hardware and software components?",
                    back: "Hardware refers to the tangible physical components of a device (CPU, RAM, Storage). Software consists of intangible digital code, instructions, and applications that command the hardware."
                },
                {
                    topic: "Operating Systems",
                    front: "What is the primary role of an Operating System (OS) in computer architecture?",
                    back: "The OS acts as the core intermediary system layer that manages hardware resources, executes applications, and provides the user interface."
                }
            ]
        },
        l1_lesson2: {
            title: "Lesson 2: Digital Citizenship",
            cards: [
                {
                    topic: "Digital Footprint",
                    front: "What constitutes a user's permanent digital footprint online?",
                    back: "The traceable trail of data, public posts, search history, cookies, and uploaded content left behind by an individual's online activities."
                },
                {
                    topic: "Netiquette Standards",
                    front: "What is a core tenet of online communication etiquette (Netiquette)?",
                    back: "Treating digital interactions with the same professional respect as face-to-face contact, including avoiding hostile language (flaming) and respecting others' privacy."
                }
            ]
        },
        l1_lesson3: {
            title: "Lesson 3: Information Management",
            cards: [
                {
                    topic: "Search Operators",
                    front: "How do boolean operators like AND, OR, and NOT alter search database queries?",
                    back: "AND narrows results by requiring all terms; OR broadens results by accepting any term; NOT filters out unwanted concepts entirely."
                },
                {
                    topic: "Source Evaluation",
                    front: "What is the primary purpose of cross-referencing information online?",
                    back: "To verify the reliability, currency, factuality, and lack of systemic bias in an online source before using or sharing its data."
                }
            ]
        },
        l1_lesson4: {
            title: "Lesson 4: Content Creation",
            cards: [
                {
                    topic: "Application Types",
                    front: "What are word processors, spreadsheets, and presentation applications specifically optimized to produce?",
                    back: "Word Processors optimize text-based files; Spreadsheets process numerical calculations and data tables; Presentation software builds sequential visual slides."
                },
                {
                    topic: "File Extensions",
                    front: "What do file format extensions like .docx, .xlsx, and .pdf indicate to a operating system?",
                    back: "They define the internal layout structure of the file and instruct the system which matching software application is required to open it safely."
                }
            ]
        },
        l1_lesson5: {
            title: "Lesson 5: Communication",
            cards: [
                {
                    topic: "Email Components",
                    front: "What is the functional difference between the To, Cc, and Bcc fields in an email?",
                    back: "To is for direct action items; Cc (Carbon Copy) is for keeping stakeholders informed; Bcc (Blind Carbon Copy) keeps recipient email addresses hidden from others."
                },
                {
                    topic: "Synchronous vs Asynchronous",
                    front: "What is the operational difference between synchronous and asynchronous digital communication channels?",
                    back: "Synchronous channels happen live in real-time (e.g., video calls). Asynchronous communication elements are time-delayed (e.g., emails or forum posts)."
                }
            ]
        },
        l1_lesson6: {
            title: "Lesson 6: Collaboration",
            cards: [
                {
                    topic: "Cloud Collaboration",
                    front: "What is a major structural benefit of using cloud storage suites like OneDrive or Google Drive for teams?",
                    back: "It provides a single central source of truth where multiple authorized users can co-author, view, and comment on assets at the same time."
                }
            ]
        },
        l1_lesson7: {
            title: "Lesson 7: Safety and Security",
            cards: [
                {
                    topic: "Password Security",
                    front: "What attributes construct a highly secure administrative credential baseline?",
                    back: "A length of at least 12–14 characters combining uppercase letters, lowercase letters, numbers, and specialized characters, avoiding any personal identifying details."
                },
                {
                    topic: "Malware Basics",
                    front: "What defines malicious software (Malware), and what is its goal?",
                    back: "Any software written to exploit, disrupt, damage, or gain unauthorized administrative access to an endpoint system or network layout."
                }
            ]
        }
    },

    // ---------------------------------------------------------
    // LEVEL 2: WORKING KNOWLEDGE (Lessons 8 - 14)
    // ---------------------------------------------------------
    level2: {
        l2_lesson8: {
            title: "Lesson 8: Technology Basics",
            cards: [
                {
                    topic: "Audio Routing Paths",
                    front: "How do you re-route desktop sound feeds when peripherals fail to auto-switch from internal speakers to headphones?",
                    back: "Navigate to the OS Output Device settings interface and manually select the explicit physical or wireless headphone hardware channel."
                },
                {
                    topic: "Display Configurations",
                    front: "Which hardware setting directly counters strong solar reflection or screen glare when working outdoors?",
                    back: "Increasing the output Backlight Brightness configuration manually, which allows the screen illumination to overpower ambient light and lower visual strain."
                }
            ]
        },
        l2_lesson9: {
            title: "Lesson 9: Digital Citizenship",
            cards: [
                {
                    topic: "AI Asset Copyright",
                    front: "Who retains legal intellectual property rights for media assets generated entirely by an AI engine?",
                    back: "No one. Copyright protection protocols strictly mandate human authorship. Assets designed purely by automated machine models belong to the public domain."
                },
                {
                    topic: "Intellectual Property Rights",
                    front: "When can an external graphic file found on a public domain portal be re-shared safely?",
                    back: "When it carries a public domain mark, appropriate Creative Commons licenses, or when explicit permission vectors have been granted by the original creator."
                }
            ]
        },
        l2_lesson10: {
            title: "Lesson 10: Information Management",
            cards: [
                {
                    topic: "Identifying Biased Sources",
                    front: "Which evaluation metrics point directly to potential ideological or structural bias in an online article?",
                    back: "Investigating the explicit corporate or political funding sources of the publisher, and tracking the author's professional ties to lobbying groups."
                }
            ]
        },
        l2_lesson11: {
            title: "Lesson 11: Content Creation",
            cards: [
                {
                    topic: "Macro Implementations",
                    front: "What is the main workflow advantage of implementing application macros?",
                    back: "Macros record and compress repetitive or complex command sequences into a single executable trigger, saving time and removing human input errors."
                },
                {
                    topic: "Version Archives",
                    front: "What is the technical utility of tracking iterative document versions?",
                    back: "It creates a historical log of system-state copies, allowing administrators or content creators to safely roll back changes if an edit breaks things."
                }
            ]
        },
        l2_lesson12: {
            title: "Lesson 12: Communication",
            cards: [
                {
                    topic: "Bcc Mass Distributions",
                    front: "Why do professional organizations mandate using the Bcc field during external mass messaging campaigns?",
                    back: "To protect user privacy by masking individual email addresses, preventing leaks and stopping recipients from accidentally choosing 'Reply All'."
                }
            ]
        },
        l2_lesson13: {
            title: "Lesson 13: Collaboration",
            cards: [
                {
                    topic: "Feedback Protocols",
                    front: "What rules define proper digital critique and review methods in a shared workspace?",
                    back: "Using proper spelling and grammar, ensuring critiques focus on the objective requirements, and staying constructive while avoiding informal emojis or hostile remarks."
                }
            ]
        },
        l2_lesson14: {
            title: "Lesson 14: Safety and Security",
            cards: [
                {
                    topic: "Digital Wallet Safety",
                    front: "What core mechanism makes mobile payments (like Apple Pay or Google Pay) secure at point-of-sale terminals?",
                    back: "They enforce two-factor hardware authentication (biometrics/passcodes) and pass temporary cryptographic tokens instead of sharing your actual credit card numbers."
                }
            ]
        }
    },

    // ---------------------------------------------------------
    // LEVEL 3: MASTERY & ADVANCED CONTROLS (Lessons 15 - 21)
    // ---------------------------------------------------------
    level3: {
        l3_lesson15: {
            title: "Lesson 15: Technology Basics",
            cards: [
                {
                    topic: "Advanced File Permissions",
                    front: "What is the structural difference between Read, Write, and Execute file system permissions?",
                    back: "Read allows viewing file contents; Write grants rights to modify or overwrite structural code data; Execute lets the operating system run the file as an active process."
                },
                {
                    topic: "Virtualization Principles",
                    front: "What is the system engineering advantage of implementing Virtual Machines (VMs)?",
                    back: "VMs isolate multiple guest operating systems on top of a single physical server's hardware, maximizing resource use and keeping environments separate for testing threats."
                }
            ]
        },
        l3_lesson16: {
            title: "Lesson 16: Digital Citizenship",
            cards: [
                {
                    topic: "Creative Commons Matrices",
                    front: "What restrictions do the 'NC' and 'ND' modifiers apply under Creative Commons licensing frameworks?",
                    back: "NC (Non-Commercial) bans any use that aims for commercial profit or financial gain. ND (No-Derivatives) requires that the work be shared in its original form without any edits or remixes."
                }
            ]
        },
        l3_lesson17: {
            title: "Lesson 17: Information Management",
            cards: [
                {
                    topic: "Database Queries",
                    front: "What differentiates a relational database system from flat-file storage layouts?",
                    back: "Relational databases index data across multiple linked tables using unique keys (Primary/Foreign), whereas flat files store raw entries sequentially in a single plain text array."
                }
            ]
        },
        l3_lesson18: {
            title: "Lesson 18: Content Creation",
            cards: [
                {
                    topic: "Advanced Scripting & Functions",
                    front: "How do nested relational logic lookup functions (like VLOOKUP or XLOOKUP) work inside spreadsheet architectures?",
                    back: "They evaluate a target search value in one row or column, query down an index array, and pull back the matching value from the same location in a linked row or column."
                }
            ]
        },
        l3_lesson19: {
            title: "Lesson 19: Communication",
            cards: [
                {
                    topic: "Encrypted Communication Channels",
                    front: "How does asymmetric end-to-end encryption (E2EE) protect communication in transit across networks?",
                    back: "It encrypts data at the source using the recipient's public key, making it unreadable to network sniffers. The message can only be decrypted at the destination using the recipient's matching private key."
                }
            ]
        },
        l3_lesson20: {
            title: "Lesson 20: Collaboration",
            cards: [
                {
                    topic: "Version Conflicts & Merges",
                    front: "How do version control repository engines automatically resolve parallel code modifications?",
                    back: "By tracking change histories down to the specific line. If changes don't overlap, they merge automatically; if lines collide, the system highlights a merge conflict for manual verification."
                }
            ]
        },
        l3_lesson21: {
            title: "Lesson 21: Safety and Security",
            cards: [
                {
                    topic: "Incident Escalation Pathways",
                    front: "To whom should a network endpoint operator immediately report a live phishing attack vector or network intrusion alert?",
                    back: "To the institutional IT Security Desk or Network Security Operations Center (SOC) to block traffic at the gateway, isolate endpoints, and prevent wider network impact."
                }
            ]
        }
    }
};
