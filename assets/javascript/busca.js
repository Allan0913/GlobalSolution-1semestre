function buscar() {
    const input = document.getElementById('buscaInput');
    const filter = input.value.toUpperCase();
    const cards = document.querySelectorAll('#lista article');

    cards.forEach(card => {
        const title = card.querySelector('h6').innerText;
        if (title.toUpperCase().indexOf(filter) > -1) {
            card.style.display = '';
        } else {
            card.style.display = 'none';
        }
    });
}

document.getElementById('buscaInput').addEventListener('keyup', buscar);