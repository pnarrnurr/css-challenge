const menu = document.querySelector('.menu');
if (menu) {
    menu.addEventListener('click', () => {
        menu.classList.toggle('active');
        const divList = menu.querySelectorAll('div');
        if (divList && divList.length > 0) {
            divList.forEach(div => {
                div.classList.add('animation');
            })
        }
    })
}