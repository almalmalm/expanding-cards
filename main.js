const cards = document.querySelectorAll('.card-item');
const p = document.createElement('p');
p.classList.add('text');

const handleClick = (event) => {
    if (event.target.parentElement.classList.contains('opened')) {
        event.target.parentElement.classList.remove('opened');
        event.target.parentElement.removeChild(p);
    } else {
        cards.forEach( card => {
            card.classList.remove('opened');
        })
        event.target.parentElement.classList.toggle('opened');
        event.target.parentElement.appendChild(p);

        const data = event.target.parentElement.dataset.text;
        switch (data) {
            case 'river' :
                p.innerHTML = 'River';
                break;
            case 'bridge' :
                p.innerHTML = 'Bridge';
                break;
            case 'lake' :
                p.innerHTML = 'Lake';
                break;
            case 'forest' :
                p.innerHTML = 'Forest';
                break;
            case 'mountain' :
                p.innerHTML = 'Mountain';
                break;
        }
    }
}

cards.forEach(card => {
    card.addEventListener('click', handleClick);
})
