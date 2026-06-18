// =================================================================
// IC3 GS6 LEVEL 3 EXAM DATA MATRIX
// =================================================================
const level3Modules = {
    lesson1: {
        title: "Hardware Specifications & Troubleshooting Mechanics",
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
                cor: [2, 0, 1, 4, 3],
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
                cor: [1, 4, 3, 0, 2],
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
                q: "Which of the following workstation architectures natively supports external peripheral arrays and features modular upgrades to boost lifespan performance?",
                a: ["Smartphone", "Desktop Computer", "Tablet"],
                cor: 1,
                exp: "Desktop computers use standardized internal spaces and PCI-e layouts, allowing operators to safely update RAM, drives, and processing units."
            }
        ]
    },
    lesson2: {
        title: "Information Assessment, Fallacies & Media Verification",
        questions: [
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
            },
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
                q: "An operator wants to send sensitive registration data from a personal device while at a corporate workspace. Which route ensures the data is not cached on corporate mail exchange nodes?",
                a: [
                    "Transmit via personal phone using the corporate enterprise mail profile.",
                    "Transmit via corporate laptop using a personal webmail access portal.",
                    "Transmit via personal phone utilizing a secure personal webmail profile.",
                    "Transmit via corporate laptop utilizing the corporate enterprise mail client account."
                ],
                cor: 2,
                exp: "Using a personal device over a personal data profile keeps private information off company hardware and corporate email filtering databases."
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
                q: "An employee spots a potential lottery phishing lure containing a payload link. To whom should this incident be reported to block further network-level impact?",
                a: ["The upstream Internet Service Provider (ISP) network security desk.", "The verification site endpoint listed inside the link canvas.", "The localized regional state lottery administration office.", "No action is needed; purge the message cleanly from storage."],
                cor: 0,
                exp: "Reporting malicious domains to ISPs or security desks helps block the traffic at the gateway, protecting other endpoints on the network."
            },
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
            }
        ]
    },
    lesson3: {
        title: "Digital Content Creation, Metrics & Media Standards",
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
            }
        ]
    }
};