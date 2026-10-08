/* =========================================================
   JARVIS WEBSITE
   INTERACTION ENGINE — V3
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* =====================================================
       JARVIS IDENTITY
    ====================================================== */

    const CREATOR_NAME = "RAJVEER RAI";
    const CREATOR_CLASS = "CLASS 10 STUDENT";
    const CREATOR_AGE = "16 YEARS OLD";
    const CREATOR_ROLE = "INDEPENDENT DEVELOPER";


    /* =====================================================
       ELEMENTS
    ====================================================== */

    const creatorName =
        document.getElementById("creatorName");

    const navbar =
        document.getElementById("navbar");

    const menuButton =
        document.getElementById("menuButton");

    const navLinks =
        document.querySelector(".nav-links");

    const downloadButton =
        document.getElementById("downloadButton");

    const heroClock =
        document.getElementById("heroClock");

    const bigClock =
        document.getElementById("bigClock");

    const year =
        document.getElementById("year");


    /* =====================================================
       CREATOR IDENTITY
    ====================================================== */

    if (creatorName) {
        creatorName.textContent = CREATOR_NAME;
    }


    /* =====================================================
       JARVIS INSTALLER
       LOCAL WEBSITE DOWNLOAD
       
       Website structure:
       
       JARVIS_Website/
       ├── index.html
       ├── style.css
       ├── script.js
       └── downloads/
           └── JARVIS_Setup.exe
    ====================================================== */

    const JARVIS_DOWNLOAD_URL =
        "./downloads/JARVIS_Setup.exe";


    /* =====================================================
       YEAR
    ====================================================== */

    if (year) {
        year.textContent =
            new Date().getFullYear();
    }


    /* =====================================================
       INDIA TIME — IST
    ====================================================== */

    function getIndiaTime() {

        const now =
            new Date();

        return new Intl.DateTimeFormat(
            "en-IN",
            {
                timeZone: "Asia/Kolkata",
                hour: "2-digit",
                minute: "2-digit",
                second: "2-digit",
                hour12: false
            }
        ).format(now);

    }


    function updateClocks() {

        const time =
            getIndiaTime();

        if (heroClock) {
            heroClock.textContent =
                time.slice(0, 5);
        }

        if (bigClock) {
            bigClock.textContent =
                time.slice(0, 5);
        }

    }


    updateClocks();

    setInterval(
        updateClocks,
        1000
    );


    /* =====================================================
       NAVBAR SCROLL EFFECT
    ====================================================== */

    function updateNavbar() {

        if (!navbar) return;

        if (window.scrollY > 25) {

            navbar.classList.add(
                "scrolled"
            );

        } else {

            navbar.classList.remove(
                "scrolled"
            );

        }

    }


    window.addEventListener(
        "scroll",
        updateNavbar,
        { passive: true }
    );

    updateNavbar();


    /* =====================================================
       MOBILE MENU
    ====================================================== */

    if (
        menuButton &&
        navLinks
    ) {

        menuButton.addEventListener(
            "click",
            () => {

                const isOpen =
                    navLinks.classList.toggle(
                        "open"
                    );

                menuButton.classList.toggle(
                    "active"
                );

                menuButton.setAttribute(
                    "aria-expanded",
                    String(isOpen)
                );

            }
        );


        document
            .querySelectorAll(".nav-links a")
            .forEach(link => {

                link.addEventListener(
                    "click",
                    () => {

                        navLinks.classList.remove(
                            "open"
                        );

                        menuButton.classList.remove(
                            "active"
                        );

                        menuButton.setAttribute(
                            "aria-expanded",
                            "false"
                        );

                    }
                );

            });

    }


    /* =====================================================
       DOWNLOAD SYSTEM
    ====================================================== */

    if (downloadButton) {

        downloadButton.addEventListener(
            "click",
            () => {

                const original =
                    downloadButton.innerHTML;


                /* -----------------------------------------
                   CONNECTION ANIMATION
                ----------------------------------------- */

                downloadButton.innerHTML = `
                    <span>◈</span>
                    CONNECTING TO JARVIS...
                `;


                downloadButton.style.pointerEvents =
                    "none";

                downloadButton.style.opacity =
                    "0.8";


                /* -----------------------------------------
                   START DOWNLOAD
                ----------------------------------------- */

                setTimeout(() => {

                    const downloadLink =
                        document.createElement("a");

                    downloadLink.href =
                        JARVIS_DOWNLOAD_URL;

                    downloadLink.download =
                        "JARVIS_Setup.exe";

                    document.body.appendChild(
                        downloadLink
                    );

                    downloadLink.click();

                    document.body.removeChild(
                        downloadLink
                    );

                }, 450);


                /* -----------------------------------------
                   RESTORE BUTTON
                ----------------------------------------- */

                setTimeout(() => {

                    downloadButton.innerHTML =
                        original;

                    downloadButton.style.pointerEvents =
                        "auto";

                    downloadButton.style.opacity =
                        "1";

                }, 4000);

            }
        );

    }


    /* =====================================================
       SCROLL REVEAL
    ====================================================== */

    const revealElements =
        document.querySelectorAll(
            `
            .feature,
            .flow-step,
            .terminal,
            .about-content,
            .about-visual,
            .install-warning,
            .install-step,
            .install-explanation
            `
        );


    if (
        "IntersectionObserver" in window
    ) {

        const observer =
            new IntersectionObserver(
                entries => {

                    entries.forEach(
                        entry => {

                            if (
                                entry.isIntersecting
                            ) {

                                entry.target.classList.add(
                                    "visible"
                                );

                                observer.unobserve(
                                    entry.target
                                );

                            }

                        }
                    );

                },
                {
                    threshold: 0.12
                }
            );


        revealElements.forEach(
            element => {

                element.style.opacity =
                    "0";

                element.style.transform =
                    "translateY(25px)";

                element.style.transition =
                    "opacity 0.7s ease, transform 0.7s ease";

                observer.observe(
                    element
                );

            }
        );


        /* =================================================
           VISIBLE STATE
        ================================================== */

        const revealStyle =
            document.createElement(
                "style"
            );

        revealStyle.textContent = `

            .feature.visible,
            .flow-step.visible,
            .terminal.visible,
            .about-content.visible,
            .about-visual.visible,
            .install-warning.visible,
            .install-step.visible,
            .install-explanation.visible {

                opacity: 1 !important;

                transform:
                    translateY(0) !important;

            }

        `;

        document.head.appendChild(
            revealStyle
        );

    }


    /* =====================================================
       FUTURISTIC BUTTON HOVER
    ====================================================== */

    const interactiveElements =
        document.querySelectorAll(
            `
            .main-button,
            .outline-button,
            .download-button,
            .nav-button
            `
        );


    interactiveElements.forEach(
        element => {

            element.addEventListener(
                "mouseenter",
                () => {

                    element.style.setProperty(
                        "--mouse-x",
                        "50%"
                    );

                    element.style.setProperty(
                        "--mouse-y",
                        "50%"
                    );

                }
            );

        }
    );


    /* =====================================================
       SMOOTH ANCHOR NAVIGATION
    ====================================================== */

    document
        .querySelectorAll('a[href^="#"]')
        .forEach(anchor => {

            anchor.addEventListener(
                "click",
                event => {

                    const targetId =
                        anchor.getAttribute(
                            "href"
                        );

                    if (
                        !targetId ||
                        targetId === "#"
                    ) {
                        return;
                    }

                    const target =
                        document.querySelector(
                            targetId
                        );

                    if (!target) {
                        return;
                    }

                    event.preventDefault();

                    target.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    });

                }
            );

        });


    /* =====================================================
       KEYBOARD ACCESSIBILITY
    ====================================================== */

    if (menuButton) {

        menuButton.setAttribute(
            "aria-expanded",
            "false"
        );

    }


    /* =====================================================
       REDUCED MOTION SUPPORT
    ====================================================== */

    const prefersReducedMotion =
        window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches;


    if (prefersReducedMotion) {

        revealElements.forEach(
            element => {

                element.style.opacity =
                    "1";

                element.style.transform =
                    "none";

                element.style.transition =
                    "none";

            }
        );

    }


    /* =====================================================
       SYSTEM STATUS
    ====================================================== */

    console.log(
        "%c╔══════════════════════════════════════╗",
        "color:#00dcff"
    );

    console.log(
        "%c║        J.A.R.V.I.S ONLINE           ║",
        "color:#00dcff;font-size:16px;font-weight:bold"
    );

    console.log(
        "%c╚══════════════════════════════════════╝",
        "color:#00dcff"
    );

    console.log(
        "%cSYSTEM: ONLINE",
        "color:#00ffcc;font-weight:bold"
    );

    console.log(
        "%cTIMEZONE: ASIA/KOLKATA",
        "color:#8cefff"
    );

    console.log(
        "%cCREATOR: " + CREATOR_NAME,
        "color:#8cefff"
    );

    console.log(
        "%cROLE: " + CREATOR_ROLE,
        "color:#8cefff"
    );

    console.log(
        "%cEDUCATION: " + CREATOR_CLASS,
        "color:#8cefff"
    );

    console.log(
        "%cAGE: " + CREATOR_AGE,
        "color:#8cefff"
    );

    console.log(
        "%c> Local installer path initialized.",
        "color:#00ffcc"
    );

    console.log(
        "%c> Download interface initialized.",
        "color:#00ffcc"
    );

    console.log(
        "%c> JARVIS website systems ready.",
        "color:#00dcff"
    );

});