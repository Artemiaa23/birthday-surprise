/* =====================================================
   PASSWORD
===================================================== */

const PASSWORD = "122322";

let enteredPassword = "";
let candlesBlown = 0;
let currentPhoto = 0;


const memories = [
    {
        image: "photo1.jpg",
        caption: "My favorite day with you 💗"
    },
    {
        image: "photo2.jpg",
        caption: "Always smiling with you 😊"
    },
    {
        image: "photo3.jpg",
        caption: "Adventures together ✨"
    },
    {
        image: "photo4.jpg",
        caption: "Forever grateful for you 💖"
    },
    {
        image: "photo5.jpg",
        caption: "Beautiful moments 🌸"
    },
    {
        image: "photo6.jpg",
        caption: "Just us 💕"
    }
];


/* =====================================================
   BACKGROUND EFFECTS
===================================================== */

function createStars() {

    const container =
        document.getElementById("stars");

    for (let i = 0; i < 80; i++) {

        const star =
            document.createElement("span");

        star.className = "star";

        star.textContent =
            Math.random() > .5
                ? "✦"
                : "·";

        star.style.left =
            Math.random() * 100 + "%";

        star.style.top =
            Math.random() * 100 + "%";

        star.style.fontSize =
            Math.random() * 9 + 4 + "px";

        star.style.animationDelay =
            Math.random() * 4 + "s";

        container.appendChild(star);
    }
}


function createPetals() {

    const container =
        document.getElementById("petals");

    setInterval(() => {

        const petal =
            document.createElement("span");

        petal.className = "petal";

        petal.textContent =
            Math.random() > .5
                ? "🌸"
                : "✿";

        petal.style.left =
            Math.random() * 100 + "%";

        petal.style.fontSize =
            Math.random() * 10 + 12 + "px";

        petal.style.animationDuration =
            Math.random() * 5 + 7 + "s";

        container.appendChild(petal);

        setTimeout(() => {
            petal.remove();
        }, 13000);

    }, 900);
}


function createFloatingHearts() {

    const container =
        document.getElementById(
            "floating-hearts"
        );

    const symbols = [
        "♡",
        "♥",
        "💕",
        "💗",
        "✦"
    ];

    setInterval(() => {

        const heart =
            document.createElement("span");

        heart.className =
            "floating-heart";

        heart.textContent =
            symbols[
                Math.floor(
                    Math.random() *
                    symbols.length
                )
            ];

        heart.style.left =
            Math.random() * 100 + "%";

        heart.style.fontSize =
            Math.random() * 15 + 12 + "px";

        heart.style.animationDuration =
            Math.random() * 4 + 7 + "s";

        container.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 12000);

    }, 700);
}


createStars();
createPetals();
createFloatingHearts();


/* =====================================================
   CLICK SPARKLES
===================================================== */

document.addEventListener(
    "click",
    function(event) {

        const container =
            document.getElementById(
                "click-effects"
            );

        for (let i = 0; i < 7; i++) {

            const spark =
                document.createElement("span");

            spark.className =
                "click-spark";

            spark.style.left =
                event.clientX + "px";

            spark.style.top =
                event.clientY + "px";

            const angle =
                Math.random() *
                Math.PI *
                2;

            const distance =
                Math.random() * 60 + 25;

            spark.style.setProperty(
                "--x",
                Math.cos(angle) *
                distance +
                "px"
            );

            spark.style.setProperty(
                "--y",
                Math.sin(angle) *
                distance +
                "px"
            );

            container.appendChild(spark);

            setTimeout(() => {
                spark.remove();
            }, 800);
        }
    }
);


/* =====================================================
   PASSWORD
===================================================== */

function addDigit(number) {

    if (enteredPassword.length >= 6) {
        return;
    }

    enteredPassword += number;

    updatePasswordDots();

    document.getElementById(
        "error-message"
    ).textContent = "";

    if (enteredPassword.length === 6) {

        setTimeout(
            checkPassword,
            250
        );
    }
}


function deleteDigit() {

    enteredPassword =
        enteredPassword.slice(0, -1);

    updatePasswordDots();

    document.getElementById(
        "error-message"
    ).textContent = "";
}


function updatePasswordDots() {

    for (let i = 1; i <= 6; i++) {

        const dot =
            document.getElementById(
                "dot" + i
            );

        if (i <= enteredPassword.length) {

            dot.classList.add("active");

        } else {

            dot.classList.remove("active");
        }
    }
}


function checkPassword() {

    const screen =
        document.getElementById(
            "password-screen"
        );

    const error =
        document.getElementById(
            "error-message"
        );

    if (enteredPassword === PASSWORD) {

        screen.style.opacity = "0";

        screen.style.transform =
            "scale(1.05)";

        setTimeout(() => {

            screen.classList.add("hidden");

            document
                .getElementById(
                    "discovery-screen"
                )
                .classList.remove(
                    "hidden"
                );

            window.scrollTo({
                top: 0,
                behavior: "instant"
            });

        }, 700);

    } else {

        error.textContent =
            "Oops! Try again, love ❤️";

        const card =
            document.querySelector(
                ".password-card"
            );

        card.classList.add(
            "password-shake"
        );

        setTimeout(() => {

            card.classList.remove(
                "password-shake"
            );

        }, 450);

        enteredPassword = "";

        setTimeout(
            updatePasswordDots,
            150
        );
    }
}


/* Keyboard password */

document.addEventListener(
    "keydown",
    function(event) {

        const screen =
            document.getElementById(
                "password-screen"
            );

        if (
            screen.classList.contains(
                "hidden"
            )
        ) {
            return;
        }

        if (
            event.key >= "0" &&
            event.key <= "9"
        ) {

            addDigit(event.key);

        } else if (
            event.key === "Backspace"
        ) {

            deleteDigit();
        }
    }
);


/* =====================================================
   DISCOVERY → BIRTHDAY
===================================================== */

function goToBirthday() {

    const discovery =
        document.getElementById(
            "discovery-screen"
        );

    const birthday =
        document.getElementById(
            "main-page"
        );

    discovery.style.opacity = "0";

    setTimeout(() => {

        discovery.classList.add(
            "hidden"
        );

        birthday.classList.remove(
            "hidden"
        );

        birthday.style.animation =
            "fadeBirthday 1s ease";

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }, 500);
}


/* =====================================================
   CANDLES
===================================================== */

function blowCandles() {

    if (candlesBlown >= 3) {
        return;
    }

    for (let i = 1; i <= 3; i++) {

        const flame =
            document.getElementById(
                "flame" + i
            );

        const smoke =
            document.getElementById(
                "smoke" + i
            );

        if (
            flame &&
            !flame.classList.contains(
                "out"
            )
        ) {

            flame.classList.add("out");

            setTimeout(() => {

                if (smoke) {
                    smoke.classList.add(
                        "show"
                    );
                }

            }, 250 + i * 100);

            candlesBlown++;
        }
    }

    document.getElementById(
        "blow-btn"
    ).textContent =
        "✨ Candles Blown! ✨";

    document.getElementById(
        "blow-btn"
    ).disabled = true;

    const wish =
        document.getElementById(
            "wish-label"
        );

    wish.style.transform =
        "scale(0)";

    wish.style.opacity = "0";

    createConfetti();

    createExplosion();

    setTimeout(() => {

        document
            .getElementById(
                "letter-btn"
            )
            .classList.remove(
                "hidden"
            );

    }, 900);
}


/* =====================================================
   CONFETTI
===================================================== */

function launchConfetti() {

    const colors = [
        "#ff4f9a",
        "#ff8cbd",
        "#ffd166",
        "#ffffff",
        "#d92872",
        "#f7b4cb"
    ];

    for (let i = 0; i < 180; i++) {

        const confetti =
            document.createElement(
                "div"
            );

        confetti.className =
            "confetti-piece";

        const size =
            Math.random() * 8 + 5;

        confetti.style.position =
            "fixed";

        confetti.style.top =
            "-15px";

        confetti.style.left =
            Math.random() * 100 + "vw";

        confetti.style.width =
            size + "px";

        confetti.style.height =
            size * 1.6 + "px";

        confetti.style.background =
            colors[
                Math.floor(
                    Math.random() *
                    colors.length
                )
            ];

        confetti.style.zIndex =
            "2500";

        confetti.style.borderRadius =
            Math.random() > .5
                ? "50%"
                : "3px";

        confetti.style.pointerEvents =
            "none";

        const drift =
            Math.random() * 220 - 110;

        const duration =
            Math.random() * 2 + 2.5;

        confetti.animate(
            [
                {
                    transform:
                        "translateY(0) rotate(0deg)",
                    opacity: 1
                },
                {
                    transform:
                        `translate(${drift}px, 110vh) rotate(720deg)`,
                    opacity: .85
                }
            ],
            {
                duration:
                    duration * 1000,

                delay:
                    Math.random() * 350,

                easing:
                    "cubic-bezier(.25,.46,.45,.94)"
            }
        );

        document.body.appendChild(
            confetti
        );

        setTimeout(() => {
            confetti.remove();
        }, 6000);
    }
}


function createSmallSparkBurst() {

    const centerX =
        window.innerWidth / 2;

    const centerY =
        window.innerHeight * .45;

    for (let i = 0; i < 35; i++) {

        const sparkle =
            document.createElement(
                "div"
            );

        sparkle.textContent =
            Math.random() > .5
                ? "✦"
                : "♡";

        sparkle.style.position =
            "fixed";

        sparkle.style.left =
            centerX + "px";

        sparkle.style.top =
            centerY + "px";

        sparkle.style.zIndex =
            "500";

        sparkle.style.color =
            "#ff5d9e";

        sparkle.style.fontSize =
            Math.random() * 15 + 10 + "px";

        const angle =
            Math.random() *
            Math.PI *
            2;

        const distance =
            Math.random() * 170 + 50;

        const x =
            Math.cos(angle) *
            distance;

        const y =
            Math.sin(angle) *
            distance;

        sparkle.animate(
            [
                {
                    transform:
                        "translate(-50%,-50%) scale(.2)",
                    opacity: 1
                },
                {
                    transform:
                        `translate(calc(-50% + ${x}px), calc(-50% + ${y}px)) scale(1.2)`,
                    opacity: 0
                }
            ],
            {
                duration: 900 +
                    Math.random() * 500,

                easing:
                    "cubic-bezier(.2,.8,.2,1)"
            }
        );

        document.body.appendChild(
            sparkle
        );

        setTimeout(() => {
            sparkle.remove();
        }, 1500);
    }
}

function createHeartExplosion() {

    const symbols = [
        "💗",
        "💕",
        "💖",
        "♡",
        "✨"
    ];

    for (let i = 0; i < 30; i++) {

        const heart =
            document.createElement(
                "div"
            );

        heart.textContent =
            symbols[
                Math.floor(
                    Math.random() *
                    symbols.length
                )
            ];

        heart.style.position =
            "fixed";

        heart.style.left =
            "50%";

        heart.style.top =
            "48%";

        heart.style.zIndex =
            "600";

        heart.style.fontSize =
            Math.random() * 18 + 12 + "px";

        const angle =
            Math.random() *
            Math.PI *
            2;

        const distance =
            Math.random() * 220 + 70;

        const x =
            Math.cos(angle) *
            distance;

        const y =
            Math.sin(angle) *
            distance;

        heart.animate(
            [
                {
                    transform:
                        "translate(-50%,-50%) scale(.3)",
                    opacity: 1
                },
                {
                    transform:
                        `translate(calc(-50% + ${x}px), calc(-50% + ${y}px)) scale(1.1)`,
                    opacity: 0
                }
            ],
            {
                duration:
                    1200 +
                    Math.random() * 600,

                easing:
                    "cubic-bezier(.2,.8,.2,1)"
            }
        );

        document.body.appendChild(
            heart
        );

        setTimeout(() => {
            heart.remove();
        }, 2000);
    }
}

function createExplosion() {
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight * 0.45;
    const symbols = ["✦", "♡", "✨", "💫", "•"];

    for (let i = 0; i < 40; i++) {
        const burst = document.createElement("div");
        burst.textContent = symbols[Math.floor(Math.random() * symbols.length)];
        burst.style.position = "fixed";
        burst.style.left = centerX + "px";
        burst.style.top = centerY + "px";
        burst.style.zIndex = "600";
        burst.style.color = "#ff5d9e";
        burst.style.fontSize = Math.random() * 15 + 10 + "px";

        const angle = Math.random() * Math.PI * 2;
        const distance = Math.random() * 180 + 50;
        const x = Math.cos(angle) * distance;
        const y = Math.sin(angle) * distance;

        burst.animate(
            [
                { transform: "translate(-50%,-50%) scale(.2)", opacity: 1 },
                { transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px)) scale(1.2)`, opacity: 0 }
            ],
            {
                duration: 900 + Math.random() * 500,
                easing: "cubic-bezier(.2,.8,.2,1)"
            }
        );

        document.body.appendChild(burst);
        setTimeout(() => burst.remove(), 1500);
    }
}


/* =====================================================
   LETTER
===================================================== */

function openLetterIntro() {

    document
        .getElementById(
            "main-page"
        )
        .classList.add(
            "hidden"
        );

    document
        .getElementById(
            "letter-intro"
        )
        .classList.remove(
            "hidden"
        );

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

function openLetter() {

    document
        .getElementById(
            "letter-intro"
        )
        .classList.add(
            "hidden"
        );

    document
        .getElementById(
            "letter-page"
        )
        .classList.remove(
            "hidden"
        );

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


function backToBirthday() {

    document
        .getElementById(
            "letter-page"
        )
        .classList.add(
            "hidden"
        );

    document
        .getElementById(
            "main-page"
        )
        .classList.remove(
            "hidden"
        );

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


/* =====================================================
   MEMORIES FLOW
===================================================== */

function openMemories() {

    const letter =
        document.getElementById(
            "main-page"
        );

    const birthday =
        document.getElementById(
            "main-page"
        );

    const intro =
        document.getElementById(
            "memory-intro"
        );

    letter.classList.add("hidden");

    birthday.classList.add("hidden");

    intro.classList.remove("hidden");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


function backToLetter() {

    document
        .getElementById(
            "main-page"
        )
        .classList.add(
            "hidden"
        );

    document
        .getElementById(
            "memory-intro"
        )
        .classList.add(
            "hidden"
        );

    document
        .getElementById(
            "main-page"
        )
        .classList.remove(
            "hidden"
        );

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


function showMemories() {

    document
        .getElementById(
            "memory-intro"
        )
        .classList.add(
            "hidden"
        );

    document
        .getElementById(
            "memories-page"
        )
        .classList.remove(
            "hidden"
        );

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

    revealMemoryCards();
}


function revealMemoryCards() {

    const cards =
        document.querySelectorAll(
            ".memory-card"
        );

    cards.forEach(
        (card, index) => {

            card.style.opacity = "0";

            card.style.transform =
                "translateY(35px)";

            setTimeout(() => {

                card.style.opacity = "1";

                card.style.transform =
                    index % 2 === 0
                        ? "rotate(-1.5deg)"
                        : "rotate(1.5deg)";

            }, index * 130);
        }
    );
}


/* =====================================================
   PHOTO VIEWER
===================================================== */

function openPhoto(index) {

    currentPhoto = index;

    updatePhoto();

    document
        .getElementById(
            "photo-modal"
        )
        .classList.add(
            "active"
        );

    document.body.style.overflow =
        "hidden";
}


function updatePhoto() {

    const image =
        document.getElementById(
            "modal-image"
        );

    const caption =
        document.getElementById(
            "modal-caption"
        );

    const counter =
        document.getElementById(
            "modal-counter"
        );

    image.src =
        memories[
            currentPhoto
        ].image;

    image.alt =
        memories[
            currentPhoto
        ].caption;

    caption.textContent =
        memories[
            currentPhoto
        ].caption;

    counter.textContent =
        `${currentPhoto + 1} / ${memories.length}`;

}


function closePhoto() {

    document
        .getElementById(
            "photo-modal"
        )
        .classList.remove(
            "active"
        );

    document.body.style.overflow =
        "";
}


function nextPhoto() {

    currentPhoto++;

    if (
        currentPhoto >=
        memories.length
    ) {
        currentPhoto = 0;
    }

    updatePhoto();
}


function previousPhoto() {

    currentPhoto--;

    if (currentPhoto < 0) {
        currentPhoto =
            memories.length - 1;
    }

    updatePhoto();
}


/* Click outside image */

document
    .getElementById(
        "photo-modal"
    )
    .addEventListener(
        "click",
        function(event) {

            if (
                event.target === this
            ) {
                closePhoto();
            }
        }
    );


/* Keyboard */

document.addEventListener(
    "keydown",
    function(event) {

        const modal =
            document.getElementById(
                "photo-modal"
            );

        if (
            !modal.classList.contains(
                "active"
            )
        ) {
            return;
        }

        if (
            event.key === "Escape"
        ) {
            closePhoto();
        }

        if (
            event.key === "ArrowRight"
        ) {
            nextPhoto();
        }

        if (
            event.key === "ArrowLeft"
        ) {
            previousPhoto();
        }
    }
);


/* =====================================================
   FINAL CELEBRATION
===================================================== */

function finalCelebration() {

    document
        .getElementById(
            "final-screen"
        )
        .classList.add(
            "active"
        );

    createConfetti();

    createExplosion();

    createFireworks();
}


function createFireworks() {

    const container =
        document.getElementById(
            "fireworks"
        );

    for (let f = 0; f < 6; f++) {

        setTimeout(() => {

            const x =
                Math.random() * 90 + 5;

            const y =
                Math.random() * 55 + 10;

            for (let i = 0; i < 25; i++) {

                const spark =
                    document.createElement(
                        "span"
                    );

                spark.style.position =
                    "fixed";

                spark.style.left =
                    x + "vw";

                spark.style.top =
                    y + "vh";

                spark.style.width =
                    "5px";

                spark.style.height =
                    "5px";

                spark.style.borderRadius =
                    "50%";

                spark.style.background =
                    "white";

                spark.style.boxShadow =
                    "0 0 12px #ff75ad";

                const angle =
                    Math.random() *
                    Math.PI *
                    2;

                const distance =
                    Math.random() * 120 + 40;

                const dx =
                    Math.cos(angle) *
                    distance;

                const dy =
                    Math.sin(angle) *
                    distance;

                spark.animate(
                    [
                        {
                            transform:
                                "translate(-50%,-50%) scale(1)",
                            opacity: 1
                        },
                        {
                            transform:
                                `translate(${dx}px, ${dy}px) scale(0)`,
                            opacity: 0
                        }
                    ],
                    {
                        duration:
                            900 +
                            Math.random() * 500,

                        easing:
                            "ease-out"
                    }
                );

                container.appendChild(
                    spark
                );

                setTimeout(() => {
                    spark.remove();
                }, 1600);
            }

        }, f * 450);
    }
}


function closeFinal() {

    document
        .getElementById(
            "final-screen"
        )
        .classList.remove(
            "active"
        );
}


/* =====================================================
   PREVENT IMAGE DRAGGING
===================================================== */

document.addEventListener(
    "dragstart",
    function(event) {

        if (
            event.target.tagName ===
            "IMG"
        ) {
            event.preventDefault();
        }
    }
);


// 🎉 CONFETTI — triggers when candles blown
function createConfetti() {
  const confettiCount = 150;
  const colors = ["#ff4b6b", "#ffd93d", "#6bcbff", "#ff75c3", "#81f179", "#ffffff"];
  for (let i = 0; i < confettiCount; i++) {
    const confetti = document.createElement("div");
    confetti.classList.add("confetti");
    confetti.style.left = `${Math.random() * 100}vw`;
    confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    confetti.style.animationDelay = `${Math.random() * 2}s`;
    confetti.style.transform = `rotate(${Math.random() * 360}deg)`;
    document.body.appendChild(confetti);
    setTimeout(() => confetti.remove(), 5000);
  }
}