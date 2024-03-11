// @todo: Темплейт карточки

// @todo: DOM узлы

// @todo: Функция создания карточки

// @todo: Функция удаления карточки

// @todo: Вывести карточки на страницу



initialCards.forEach(function(item){
    console.log(item);
});


const placesList = document.querySelector('.places__list');
// console.log(placesList);

const placesListTemplate = document.querySelector('#card-template').content;

// console.log(placesListTemplate);

initialCards.forEach(function(element){
    const initialCardsElement = placesListTemplate.cloneNode(true);
    initialCardsElement.querySelector('.card__title').textContent = element.name;
    initialCardsElement.querySelector('.card__image').href = element.link;

    placesList.append(initialCardsElement)
});