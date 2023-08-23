const marker = document.querySelector('.marker');
const card = document.querySelector(".card");

if (marker) {
    marker.addEventListener('click', () => {
        card.classList.add('active');
        marker.classList.add('inactive');
    })
}

if (card) {
    card.addEventListener('click', () => {
        card.classList.remove('active');
        marker.classList.remove('inactive');
    })
}