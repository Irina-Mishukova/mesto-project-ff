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

    // placesList.append(cards);

    
    const cardDeleteButton = cards.querySelector('.card__delete-button');
    console.log(cardDeleteButton);

    cardDeleteButton.addEventListener('click', function(evt){
        deleteCard(evt) ;
    });

    placesList.append(cards);
    

});

// const listItem = document.querySelector('.places__item')

function deleteCard(evt) {
   console.log('push the button');
   evt.target.closest('.places__item').remove();
}








// cardDeleteButton.addEventListener('click', deleteCard);



// cardDeleteButton.addEventListener('click',function (evt) {
//     console.log('push the button');

//     evt.target.listItem.remove();
// });































































// const placesList = document.querySelector('.places__list');

// const cardTemplate = document.querySelector('#card-template').content;

// initialCards.forEach(function(element){
//     const initialCardsElement = cardTemplate.cloneNode(true);
//     initialCardsElement.querySelector('.card__title').textContent = element.name;
//     initialCardsElement.querySelector('.card__image').src = element.link;

//     placesList.append(initialCardsElement)
// });
    
// const cardDeleteButton = document.querySelector('.card__delete-button');

// const listItem = document.querySelector('.places__item')

// function deleteCard() {
//     console.log('push the button');
//     listItem.remove();
// }

// cardDeleteButton.addEventListener('click', deleteCard);























// const placesList = document.querySelector('.places__list');
// const cardTemplate = document.querySelector('#card-template').content;
// const listItem = document.querySelector('.places__item');

// initialCards.forEach(function(element){
//     const initialCardsElement = cardTemplate.cloneNode(true);
//     initialCardsElement.querySelector('.card__title').textContent = element.name;
//     initialCardsElement.querySelector('.card__image').src = element.link;

//     placesList.append(initialCardsElement);
    
//     cardDeleteButton.addEventListener('click', deleteCard);
//     const cardDeleteButton = document.querySelector('.card__delete-button');
    
 
// });

// function deleteCard() {
//     console.log('push the button');
    
//     listItem.remove();
//     // return listItem;
// };

// // cardDeleteButton.addEventListener('click', deleteCard);








// // function renderDeleteCard() {

// // };

// // cardDeleteButton.addEventListener('click', function() {
// //     const card = document.querySelector('.places__item card');
// //     card.remove();
// // });



// // const cardDeleteButton = document.querySelector('.card__delete-button');

// // function deleteCard() {
// //     const listItem = cardDeleteButton.closest('.places__item');
// //     listItem.remove();
// // }

// // cardDeleteButton.addEventListener('click', deleteCard);


// // const cardDeleteButton = document.querySelector('.card__delete-button');



// // function deleteCard() {
// //     // const listItem = document.querySelector('.places__item');
// //     for (let i = 0; i < initialCards.length; i++) {
// //         initialCards[i].remove(); 
// //     }
// // };

// // // deleteCard();

// // cardDeleteButton.addEventListener('click', deleteCard);
