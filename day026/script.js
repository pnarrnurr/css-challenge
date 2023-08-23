const buttonList = document.querySelectorAll('.button');

let active = 1;

if (buttonList && buttonList.length > 0) {
    buttonList.forEach(button => {
        button.addEventListener('click', () => {
            let card = document.querySelector(`.card:nth-child(${active})`);
            if (card) {
                card.classList.remove('active');
                card.classList.add('inactive');
                if (active == 3) active = 0;
                active++;

                let cardNew = document.querySelector(`.card:nth-child(${active})`);
                cardNew.classList.remove('inactive');
                cardNew.classList.add('active');
            }
        })
    })
}

// $('.button').bind('click', function () {
//     $('.card:nth-child(' + active + ')').removeClass('active').addClass('inactive');
//     if (active == 3) {
//         active = 0;
//     }
//     active++;
//     $('.card:nth-child(' + active + ')').removeClass('inactive').addClass('active');
// });