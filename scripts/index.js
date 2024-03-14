// @todo: Темплейт карточки

// @todo: DOM узлы

// @todo: Функция создания карточки

// @todo: Функция удаления карточки

// @todo: Вывести карточки на страницу


const placesList = document.querySelector('.places__list');

const cardTemplate = document.querySelector('#card-template').content;

function createCard(element, {deleteCard}) {
const cards = cardTemplate.cloneNode(true);
cards.querySelector('.card__title').textContent = element.name;
cards.querySelector('.card__image').src = element.link;
cards.querySelector('.card__image').alt = element.name;

const cardDeleteButton = cards.querySelector('.card__delete-button');

cardDeleteButton.addEventListener('click', function(evt){
    deleteCard(evt) ;
});
return cards;
};

initialCards.forEach(function (element) {
    const cards = createCard(element, { deleteCard });
    placesList.append(cards);
    });

function deleteCard(evt) {
evt.target.closest('.places__item').remove();
}












// const placesList = document.querySelector('.places__list');

// const cardTemplate = document.querySelector('#card-template').content;

// initialCards.forEach(function(element){
// const cards = cardTemplate.cloneNode(true);
// cards.querySelector('.card__title').textContent = element.name;
// cards.querySelector('.card__image').src = element.link;

// const cardDeleteButton = cards.querySelector('.card__delete-button');

// cardDeleteButton.addEventListener('click', function(evt){
//     deleteCard(evt) ;
// });

// placesList.append(cards);
// });

// function deleteCard(evt) {
// evt.target.closest('.places__item').remove();
// }
