// Seleciona TODOS os cards de serviço
const serviceCards = document.querySelectorAll('.services-box .services-content');

// Para cada card encontrado...
serviceCards.forEach(clickedCard => {
    // Adiciona o "ouvinte de clique" ao card inteiro
    clickedCard.addEventListener('click', () => {
        // Primeiro, simplesmente expande ou recolhe o card que foi clicado
        clickedCard.classList.toggle('expanded');

        // AGORA VEM A NOVA LÓGICA:
        // Itera sobre todos os cards novamente para decidir se devem ser escondidos ou mostrados
        serviceCards.forEach(otherCard => {
            // A lógica só se aplica aos cards que NÃO são o que acabamos de clicar
            if (otherCard !== clickedCard) {
                // Se o card clicado AGORA ESTÁ expandido, esconda os outros
                if (clickedCard.classList.contains('expanded')) {
                    otherCard.classList.add('hidden');
                } 
                // Se o card clicado NÃO ESTÁ expandido (foi recolhido), mostre os outros
                else {
                    otherCard.classList.remove('hidden');
                }
            }
        });

        // Encontra o botão DENTRO do card que acabamos de clicar para mudar o texto
        const button = clickedCard.querySelector('.btn');

        // Muda o texto do botão baseado na presença da classe 'expanded'
        if (clickedCard.classList.contains('expanded')) {
            button.textContent = 'Show Less';
        } else {
            button.textContent = 'Read More';
        }
    });
});
//turn pages when click next or prev button
const pageTurnBtn = document.querySelectorAll('.nextprev-btn');

pageTurnBtn.forEach((el, index) =>{
    el.onclick = () =>{
        const pageTurnId = el.getAttribute('data-page');
        const pageTurn = document.getElementById(pageTurnId);

        if(pageTurn.classList.contains('turn')){
            pageTurn.classList.remove('turn')
            setTimeout(() => {
                pageTurn.style.zIndex = 20 - index;
            }, 500);
        }else{
            pageTurn.classList.add('turn');
            setTimeout(() => {
                pageTurn.style.zIndex = 20 + index
            }, 500);
        }
    }
})

//contac me button when click
const pages = document.querySelectorAll('.book-page.page-right'); 
const contactMeBtn = document.querySelector('.btn.contact-me');

contactMeBtn.onclick = () =>{
    pages.forEach((page, index) =>{
        setTimeout(() => {
            page.classList.add('turn');

            setTimeout(() =>{
                page.style.zIndex = 20 + index;
            }, 500)
        }, (index + 1) * 200 + 100)
    });
};

//create  reversed index function
let totalPages = pages.length;
let pageNumber = 0;

function reversedIndex(){
    pageNumber--;
    if(pageNumber < 0){
        pageNumber = totalPages - 1;
    }
}

//back profile button when click
const backProfileBtn = document.querySelector('.back-profile');

backProfileBtn.onclick = () => {
    pages.forEach((_, index) => {
        setTimeout(() => {
            reversedIndex();
            pages[pageNumber].classList.remove('turn')

            setTimeout(() => {
                reversedIndex();
                pages[pageNumber].style.zIndex = 10 + index;
            }, 500);
        }, (index + 1) * 200 + 100);
    });
};

//opening animation
const coverRight = document.querySelector('.cover.cover-right');
const pageLeft = document.querySelector('.book-page.page-left');


//opening animation (cover right animation)
setTimeout(() => {
    coverRight.classList.add('turn');
}, 2100);

setTimeout(() => {
    coverRight.style.zIndex = -1;
}, 2800);

//opening animation (page left or profile animation)
setTimeout(() => {
    pageLeft.style.zIndex = 20;
}, 3200);

//opening animation (all page right animation)
pages.forEach((_, index) => {
        setTimeout(() => {
            reversedIndex();
            pages[pageNumber].classList.remove('turn')

            setTimeout(() => {
                reversedIndex();
                pages[pageNumber].style.zIndex = 10 + index;
            }, 500);
        }, (index + 1) * 200 + 2100);
    });