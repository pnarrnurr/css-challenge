const searchField = document.querySelector('.searchfield');
const suggestions = document.querySelector('.suggestions');

if (searchField) {
    searchField.addEventListener('keyup', () => {
        let text = searchField.value;
        if (text.length > 0) {
            suggestions.innerHTML = '';
            suggestions.classList.add('active');
            const li1 = document.createElement("li");
            li1.innerHTML = `<b>${text}</b>`;
            const li2 = document.createElement("li");
            li2.innerHTML = `<b>Veritatis et</b>`;
            const li3 = document.createElement("li");
            li3.innerHTML = `<b>ut aliquid ex</b> vero eos`;
            suggestions.append(li1);
            suggestions.append(li2);
            suggestions.append(li3);
        }
        else {
            suggestions.innerHTML = "";
            suggestions.classList.remove('active')
        }
    })
}