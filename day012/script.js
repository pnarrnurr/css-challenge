const tooltip = document.querySelector('.tooltip');
const infoBox = document.querySelector('.info');

if (tooltip) {
    tooltip.addEventListener('mouseover', () => {
        infoBox.classList.add('visible');
    })
    tooltip.addEventListener('mouseout', () => {
        infoBox.classList.remove('visible');
    })
}