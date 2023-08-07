const dropBigArr = document.querySelectorAll('.drop.-big');
const dropMediumArr = document.querySelectorAll('.drop.-medium');
const dropSmallArr = document.querySelectorAll('.drop.-small');

if (dropBigArr && dropBigArr.length > 0) {
    dropBigArr.forEach((item, index) => {
        item.style.left = -20 + 38 * (++index) + 'px';
        item.style.animationDuration = (0.7 + (Math.floor(Math.random() * 2 + 1)) / 10) + 's';
        item.style.animationDelay = ((Math.floor(Math.random() * 50 + 1)) / 25) + 's';
    })
}

if (dropMediumArr && dropMediumArr.length > 0) {
    dropMediumArr.forEach((item, index) => {
        item.style.left = -20 + 38 * (++index) + 'px';
        item.style.animationDuration = (1.3 + (Math.floor(Math.random() * 2 + 1)) / 10) + 's';
        item.style.animationDelay = ((Math.floor(Math.random() * 50 + 1)) / 25) + 's';
    })
}
if (dropSmallArr && dropSmallArr.length > 0) {
    dropSmallArr.forEach((item, index) => {
        item.style.left = -20 + 38 * (++index) + 'px';
        item.style.animationDuration = (1.9 + (Math.floor(Math.random() * 2 + 1)) / 10) + 's';
        item.style.animationDelay = ((Math.floor(Math.random() * 50 + 1)) / 25) + 's';
    })
}