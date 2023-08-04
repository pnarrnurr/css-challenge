const ball = document.querySelector('.ball');

if (ball) {
    for (let i = 1; i <= 8; i++) {
        const blubbDiv = document.createElement("div");
        blubbDiv.classList.add(`blubb`);
        blubbDiv.classList.add(`animation-${i}`);
        ball.appendChild(blubbDiv);
    }

    for (let i = 1; i <= 10; i++) {
        const sparkleDiv = document.createElement("div");
        sparkleDiv.classList.add(`sparkle-${i}`);
        ball.appendChild(sparkleDiv);
    }
}