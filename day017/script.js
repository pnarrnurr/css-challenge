const stripes = document.querySelector('.stripes');

if (stripes) {
    for (let i = 1; i <= 29; i++) {
        const stripe = document.createElement("div");
        stripe.classList.add(`stripe`);
        stripes.appendChild(stripe);
    }
}