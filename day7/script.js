const searchIcon = document.querySelector('.search-icon');
const searchInput = document.querySelector('.search-input');
const menuIcon = document.querySelector('.menu-icon');
const panel = document.querySelector('.panel');
const menu = document.querySelector('.menu');

if (searchIcon) {
    searchIcon.addEventListener('click', () => {
        searchInput.classList.toggle('active');
    })
}

if (menuIcon) {
    menuIcon.addEventListener('click', () => {
        menu.classList.toggle('active');
        panel.classList.toggle('show-menu');
    })
}