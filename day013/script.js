const items = document.querySelectorAll('.item');
const detailWrapper = document.querySelector('.detail');
const detailClose = document.querySelector('.detail-close');

if (items && items.length > 0) {
    items.forEach(item => {
        item.addEventListener('click', () => {
            detailWrapper.classList.add('active');
            const imageWrapper = item.querySelector('img');
            const imageLink = imageWrapper.getAttribute('src');
            const imageName = imageWrapper.getAttribute('alt');
            const image = detailWrapper.querySelector('.detail-image');
            image.setAttribute('src', imageLink);
            const name = detailWrapper.querySelector('.detail-name');
            name.innerHTML = imageName;
        })
    })
}

if (detailClose) {
    detailClose.addEventListener('click', () => {
        detailWrapper.classList.remove('active')
    })
}