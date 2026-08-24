const flashcards = [

    {
        question: "Can you tell us about your experience as an IT Support Specialist?",
        answer: "I have experience providing technical support for users, troubleshooting hardware and software problems, managing Windows environments, Microsoft 365, Active Directory, networking, printers, and various IT systems. My approach is to solve the immediate problem while also looking for the underlying cause so the issue does not keep happening."
    },

    {
        question: "How do you troubleshoot a computer that won't start?",
        answer: "I start with the basics. I check whether the computer is receiving power, inspect the power cable and connections, and look for lights or error messages. If it powers on but does not boot, I determine whether the problem is hardware, Windows, or the boot drive. I may also test peripherals, check BIOS/UEFI, and use hardware diagnostics."
    },

    {
        question: "What steps do you take to resolve network connectivity issues?",
        answer: "First, I determine whether the issue affects one user or multiple users. Then I check the physical connection, Wi-Fi or Ethernet, IP address, gateway, and DNS settings. I use tools such as ipconfig, ping, and nslookup to isolate where the problem is occurring. I also check DHCP, switches, firewalls, and access points when appropriate."
    },

    {
        question: "How do you handle a difficult or non-technical user?",
        answer: "I stay patient and professional and avoid technical terminology that the user may not understand. I listen to what they are experiencing, explain what I am doing in simple terms, and make sure they know I am there to help. I do not take frustration personally."
    },

    {
        question: "What operating systems are you most comfortable supporting?",
        answer: "I am most comfortable supporting Windows 10 and Windows 11, including troubleshooting operating-system issues, user accounts, applications, networking, printers, updates, and security. I also have experience with Windows Server environments and some experience with Linux."
    },

    {
        question: "How do you prioritize multiple support tickets?",
        answer: "I prioritize based on business impact and urgency. An issue affecting an entire organization or a critical system takes priority over an issue affecting one user. I consider the number of people affected, whether critical operations are stopped, security concerns, and deadlines."
    },

    {
        question: "Can you explain the difference between a router and a switch?",
        answer: "A switch primarily connects devices within the same network, such as computers, printers, and servers on a LAN. A router connects different networks and determines where network traffic should go. A business network may use switches internally and a router or firewall to connect to other networks or the Internet."
    },

    {
        question: "What would you do if a user reports slow computer performance?",
        answer: "I determine when the problem occurs and whether it is always slow or only slow with a particular application. I check CPU, RAM, disk usage, available storage, startup applications, background processes, updates, and security alerts. I also determine whether the problem is actually network-related."
    },

    {
        question: "How do you ensure data security while providing support?",
        answer: "I follow security policies and the principle of least privilege. I verify the user's identity before making account changes, avoid exposing passwords or sensitive information, use secure remote-support methods, and make sure data is handled appropriately. I also keep systems updated and remain alert for phishing and malware."
    },

    {
        question: "Describe your experience with remote desktop tools.",
        answer: "I have used remote-support and remote-access tools to troubleshoot computers without physically being at the user's location. Remote access is useful for software problems, configuration issues, and assisting users at different locations. I make sure the connection is authorized and secure."
    },

    {
        question: "What is DNS and why is it important?",
        answer: "DNS stands for Domain Name System. It translates human-readable names into IP addresses that computers use to communicate. DNS is important because users can access services using names instead of remembering IP addresses. DNS is also critical for services such as Active Directory."
    },

    {
        question: "How do you deal with hardware failures?",
        answer: "I identify the failing component through troubleshooting and diagnostics. I check cables, power, connections, error messages, and hardware diagnostics. If necessary, I test with known-good components. Once I identify the failed hardware, I determine whether it should be repaired, replaced, or escalated."
    },

    {
        question: "What steps would you take if a printer is not working?",
        answer: "I determine whether it is a printer-specific problem or a computer/network problem. I check power, cables, paper, toner, error messages, and the printer queue. I verify the correct printer is selected and check the printer's IP address if it is network-connected. I may also restart the print spooler or reinstall the driver."
    },

    {
        question: "How do you document technical issues and solutions?",
        answer: "I document the problem, symptoms, troubleshooting steps, root cause, and final solution. I also record relevant configuration changes and follow-up that may be needed. Good documentation allows another technician to understand what happened and makes recurring problems easier to resolve."
    },

    {
        question: "What is your approach to troubleshooting software issues?",
        answer: "I start by reproducing the problem and determining whether it affects one user or multiple users. I check error messages, application settings, permissions, updates, dependencies, and system resources. I make one change at a time so I know what actually fixed the issue."
    },

    {
        question: "How do you stay updated with new technology and IT trends?",
        answer: "I stay current through technical documentation, vendor resources, online training, IT communities, and hands-on testing. I also pay attention to security updates and changes to technologies used by the organization."
    },

    {
        question: "Describe a time you solved a complex technical problem.",
        answer: "I would describe a real example where I identified a problem, broke it down into smaller components, tested possible causes, isolated the root cause, corrected it, and documented the solution. The important part is showing the interviewer how I think through a problem rather than simply saying that I fixed it."
    },

    {
        question: "What is Active Directory and how have you used it?",
        answer: "Active Directory is Microsoft's directory service used to manage users, computers, groups, and resources in a Windows domain environment. I have used it for managing user accounts, resetting passwords, managing groups, joining computers to the domain, and troubleshooting authentication and permissions."
    },

    {
        question: "How do you reset a user's password in a domain environment?",
        answer: "I first verify the user's identity according to security procedures. Then I locate the account in Active Directory Users and Computers, reset the password, and apply the appropriate password requirements. Depending on the situation, I may require the user to change the password at next logon."
    },

    {
        question: "What would you do if you suspect a virus or malware infection?",
        answer: "I would isolate the affected computer from the network if there is a reasonable risk of the infection spreading or data being compromised. Then I would follow the organization's incident-response procedures, run appropriate security tools, review alerts and logs, and determine the scope of the infection."
    },

    {
        question: "How do you handle situations where you don't know the solution immediately?",
        answer: "I don't guess or make changes that could make the situation worse. I break the problem down into smaller parts, research reliable technical documentation, check logs and error messages, and use available resources. If necessary, I escalate the issue to another technician or vendor while keeping the user informed."
    },

    {
        question: "What is the difference between LAN and WAN?",
        answer: "LAN stands for Local Area Network and generally refers to a network within a limited area such as an office or building. WAN stands for Wide Area Network and connects networks across larger geographic areas. A company might have multiple LANs connected through a WAN."
    },

    {
        question: "How do you ensure excellent customer service in IT support?",
        answer: "I focus on communication, patience, and follow-through. I listen carefully, explain technical issues in language the user understands, set realistic expectations, and keep them informed. I make sure the problem is actually resolved before closing the ticket."
    },

    {
        question: "What tools or ticketing systems have you used?",
        answer: "I have worked with various IT management, support, remote-management, security, monitoring, and Microsoft 365 administration tools. I am comfortable learning new ticketing systems because the core concepts remain the same: document the issue, prioritize it, track progress, communicate with the user, and record the resolution."
    },

    {
        question: "Why do you want to work as an IT Support Specialist?",
        answer: "I enjoy solving technical problems and helping people. I like taking a problem that prevents someone from working, identifying the cause, fixing it, and getting them back up and running. IT also gives me the opportunity to continuously learn because technology is always changing."
    }

];


// --------------------------------------------------
// Variables
// --------------------------------------------------

let currentIndex = 0;

let currentCards = [...flashcards];

let knownCards = JSON.parse(
    localStorage.getItem("knownCards") || "[]"
);

let studyCards = JSON.parse(
    localStorage.getItem("studyCards") || "[]"
);

let darkMode =
    localStorage.getItem("darkMode") === "true";


// --------------------------------------------------
// Elements
// --------------------------------------------------

const flashcard = document.getElementById("flashcard");

const questionElement =
    document.getElementById("question");

const answerElement =
    document.getElementById("answer");

const cardNumber =
    document.getElementById("cardNumber");

const progressText =
    document.getElementById("progressText");

const progressPercent =
    document.getElementById("progressPercent");

const progressFill =
    document.getElementById("progressFill");

const knownCount =
    document.getElementById("knownCount");

const studyCount =
    document.getElementById("studyCount");

const totalQuestions =
    document.getElementById("totalQuestions");


// --------------------------------------------------
// Initialize
// --------------------------------------------------

function initialize() {

    totalQuestions.textContent =
        flashcards.length;

    updateTheme();

    showCard();

    updateStats();

}


// --------------------------------------------------
// Show Card
// --------------------------------------------------

function showCard() {

    if (currentCards.length === 0) {

        questionElement.textContent =
            "No cards found.";

        answerElement.textContent =
            "Try another study mode.";

        return;

    }

    if (currentIndex < 0) {
        currentIndex =
            currentCards.length - 1;
    }

    if (currentIndex >= currentCards.length) {
        currentIndex = 0;
    }

    const card =
        currentCards[currentIndex];

    questionElement.textContent =
        card.question;

    answerElement.textContent =
        card.answer;

    cardNumber.textContent =
        `Question ${currentIndex + 1}`;

    progressText.textContent =
        `Question ${currentIndex + 1} of ${currentCards.length}`;

    const percentage =
        Math.round(
            ((currentIndex + 1) /
            currentCards.length) * 100
        );

    progressPercent.textContent =
        `${percentage}%`;

    progressFill.style.width =
        `${percentage}%`;

    flashcard.classList.remove("flipped");

}


// --------------------------------------------------
// Flip
// --------------------------------------------------

function flipCard() {

    flashcard.classList.toggle("flipped");

}

flashcard.addEventListener(
    "click",
    flipCard
);


// --------------------------------------------------
// Navigation
// --------------------------------------------------

function nextCard() {

    currentIndex++;

    if (currentIndex >= currentCards.length) {
        currentIndex = 0;
    }

    showCard();

}

function previousCard() {

    currentIndex--;

    if (currentIndex < 0) {
        currentIndex =
            currentCards.length - 1;
    }

    showCard();

}

function shuffleCards() {

    currentCards =
        [...currentCards].sort(
            () => Math.random() - 0.5
        );

    currentIndex = 0;

    showCard();

}


// --------------------------------------------------
// Mark Card
// --------------------------------------------------

function getCardId(card) {

    return flashcards.indexOf(card);

}


function markKnown() {

    const card =
        currentCards[currentIndex];

    const id =
        getCardId(card);

    if (!knownCards.includes(id)) {
        knownCards.push(id);
    }

    studyCards =
        studyCards.filter(
            item => item !== id
        );

    saveProgress();

    updateStats();

    nextCard();

}


function markStudy() {

    const card =
        currentCards[currentIndex];

    const id =
        getCardId(card);

    if (!studyCards.includes(id)) {
        studyCards.push(id);
    }

    knownCards =
        knownCards.filter(
            item => item !== id
        );

    saveProgress();

    updateStats();

    nextCard();

}


// --------------------------------------------------
// Save Progress
// --------------------------------------------------

function saveProgress() {

    localStorage.setItem(
        "knownCards",
        JSON.stringify(knownCards)
    );

    localStorage.setItem(
        "studyCards",
        JSON.stringify(studyCards)
    );

}


// --------------------------------------------------
// Stats
// --------------------------------------------------

function updateStats() {

    knownCount.textContent =
        knownCards.length;

    studyCount.textContent =
        studyCards.length;

}


// --------------------------------------------------
// Study Modes
// --------------------------------------------------

function allQuestions() {

    currentCards =
        [...flashcards];

    currentIndex = 0;

    setActiveMode("allButton");

    showCard();

}


function studyMissed() {

    currentCards =
        studyCards
            .map(id => flashcards[id])
            .filter(Boolean);

    currentIndex = 0;

    setActiveMode("wrongButton");

    if (currentCards.length === 0) {

        alert(
            "You don't have any cards marked 'Need to Study' yet."
        );

        allQuestions();

        return;

    }

    showCard();

}


function randomQuiz() {

    currentCards =
        [...flashcards]
            .sort(
                () => Math.random() - 0.5
            );

    currentIndex = 0;

    setActiveMode("randomButton");

    showCard();

}


function setActiveMode(buttonId) {

    document
        .querySelectorAll(".mode-button")
        .forEach(button => {

            button.classList.remove("active");

        });

    document
        .getElementById(buttonId)
        .classList.add("active");

}


// --------------------------------------------------
// Search
// --------------------------------------------------

document
    .getElementById("searchInput")
    .addEventListener(
        "input",
        function () {

            const searchTerm =
                this.value
                    .toLowerCase()
                    .trim();

            if (!searchTerm) {

                currentCards =
                    [...flashcards];

            } else {

                currentCards =
                    flashcards.filter(card =>

                        card.question
                            .toLowerCase()
                            .includes(searchTerm)

                    );

            }

            currentIndex = 0;

            showCard();

        }
    );


// --------------------------------------------------
// Theme
// --------------------------------------------------

function updateTheme() {

    if (darkMode) {

        document.body.classList.add("dark");

        document.getElementById(
            "themeButton"
        ).textContent = "☀️";

    } else {

        document.body.classList.remove("dark");

        document.getElementById(
            "themeButton"
        ).textContent = "🌙";

    }

}


document
    .getElementById("themeButton")
    .addEventListener(
        "click",
        function () {

            darkMode = !darkMode;

            localStorage.setItem(
                "darkMode",
                darkMode
            );

            updateTheme();

        }
    );


// --------------------------------------------------
// Reset
// --------------------------------------------------

document
    .getElementById("resetButton")
    .addEventListener(
        "click",
        function () {

            const confirmReset =
                confirm(
                    "Are you sure you want to reset all study progress?"
                );

            if (!confirmReset) {
                return;
            }

            knownCards = [];

            studyCards = [];

            saveProgress();

            updateStats();

            allQuestions();

        }
    );


// --------------------------------------------------
// Buttons
// --------------------------------------------------

document
    .getElementById("nextButton")
    .addEventListener(
        "click",
        nextCard
    );

document
    .getElementById("previousButton")
    .addEventListener(
        "click",
        previousCard
    );

document
    .getElementById("shuffleButton")
    .addEventListener(
        "click",
        shuffleCards
    );

document
    .getElementById("knownButton")
    .addEventListener(
        "click",
        markKnown
    );

document
    .getElementById("studyButton")
    .addEventListener(
        "click",
        markStudy
    );

document
    .getElementById("allButton")
    .addEventListener(
        "click",
        allQuestions
    );

document
    .getElementById("wrongButton")
    .addEventListener(
        "click",
        studyMissed
    );

document
    .getElementById("randomButton")
    .addEventListener(
        "click",
        randomQuiz
    );


// --------------------------------------------------
// Keyboard Shortcuts
// --------------------------------------------------

document.addEventListener(
    "keydown",
    function (event) {

        // Don't trigger shortcuts while typing
        if (
            event.target.tagName === "INPUT" ||
            event.target.tagName === "TEXTAREA"
        ) {
            return;
        }


        if (event.code === "Space") {

            event.preventDefault();

            flipCard();

        }


        if (event.key === "ArrowRight") {

            nextCard();

        }


        if (event.key === "ArrowLeft") {

            previousCard();

        }


        if (event.key === "1") {

            markStudy();

        }


        if (event.key === "2") {

            markKnown();

        }

    }
);


// --------------------------------------------------
// Start
// --------------------------------------------------

initialize();
