// @todo: Темплейт карточки

// @todo: DOM узлы

// @todo: Функция создания карточки

// @todo: Функция удаления карточки

// @todo: Вывести карточки на страницу


const placesList = document.querySelector('.places__list');

const cardTemplate = document.querySelector('#card-template').content;

initialCards.forEach(function(element){
    const cards = cardTemplate.cloneNode(true);
    cards.querySelector('.card__title').textContent = element.name;
    cards.querySelector('.card__image').src = element.link;
    
    const cardDeleteButton = cards.querySelector('.card__delete-button');

    cardDeleteButton.addEventListener('click', function(evt){
        deleteCard(evt) ;
    });

    placesList.append(cards);
    
});

function deleteCard(evt) {
   evt.target.closest('.places__item').remove();
}
