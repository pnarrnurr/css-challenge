const street = document.querySelector('.street');
const sky = document.querySelector('.sky');

if (street) {
    for (let i = 1; i <= 9; i++) {
        const stripe = document.createElement("div");
        stripe.classList.add(`stripe`);
        stripe.style.width = (2 + i * 2) + 'px';
        stripe.style.animationDuration = (0.8 + (Math.floor(Math.random() * 2 + 1)) / 10) + 's';
        stripe.style.animationDelay = ((Math.floor(Math.random() * 10 + 1)) / 10) + 's';
        street.appendChild(stripe);
    }
}

if (sky) {
    for (let i = 1; i <= 9; i++) {
        const cloud = document.createElement("div");
        cloud.classList.add(`cloud`);
        cloud.style.top = (20 + i * 14) + 'px';
        cloud.style.width = (10 + (Math.floor(Math.random() * 150 + 1) / 10)) + 'px';
        cloud.style.animationDuration = (0.6 + (Math.floor(Math.random() * 2 + 1)) / 10) + 's';
        cloud.style.animationDelay = ((Math.floor(Math.random() * 10 + 1)) / 10) + 's';
        sky.appendChild(cloud);
    }
}