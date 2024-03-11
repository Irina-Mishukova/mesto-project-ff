// @todo: Темплейт карточки

// @todo: DOM узлы

// @todo: Функция создания карточки

// @todo: Функция удаления карточки

// @todo: Вывести карточки на страницу



// initialCards.forEach(function(item){
//     console.log(item);
// });


const placesList = document.querySelector('.places__list');
// console.log(placesList);

const cardTemplate = document.querySelector('#card-template').content;

// console.log(placesListTemplate);



initialCards.forEach(function(element){
    const initialCardsElement = cardTemplate.cloneNode(true);
    initialCardsElement.querySelector('.card__title').textContent = element.name;
    initialCardsElement.querySelector('.card__image').src = element.link;

    placesList.append(initialCardsElement)
});


// function renderDeleteCard() {

// };

// cardDeleteButton.addEventListener('click', function() {
//     const card = document.querySelector('.places__item card');
//     card.remove();
// });



    
const cardDeleteButton = document.querySelector('.card__delete-button');

const listItem = document.querySelector('.places__item')

function deleteCard() {
    console.log('push the button');
    listItem.remove();
}

// deleteCard();

cardDeleteButton.addEventListener('click', deleteCard);

