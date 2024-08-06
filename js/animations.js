const cardContainer = document.querySelectorAll('.cards-container');
const sections = document.querySelectorAll('.section');

if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches){
    addAnimation();
}

function addAnimation(){
    cardContainer.forEach(container => {
        container.setAttribute("data-animated", true);

        const carousel = container.querySelector('.caroussel');
        const carousselCards = Array.from(carousel.children);
        carousselCards.forEach(card => {
            const duplicatedCard = card.cloneNode(true);
            duplicatedCard.setAttribute('aria-hidden', true);
            carousel.appendChild(duplicatedCard);
        });
    });

    
    sections.forEach(section => {
        if(!section.classList.contains("introduction")){
            section.classList.add("animate-scroll");
        }
    });
}

