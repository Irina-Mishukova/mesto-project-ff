// @todo: Темплейт карточки

// @todo: DOM узлы

// @todo: Функция создания карточки

// @todo: Функция удаления карточки

// @todo: Вывести карточки на страницу

const placesList = document.querySelector(".places__list");

const cardTemplate = document.querySelector("#card-template").content;

function createCard(element, { deleteCard }) {
  const cards = cardTemplate.cloneNode(true);
  const cardImage = cards.querySelector(".card__image");
  const cardTitle = cards.querySelector(".card__title");

  cardTitle.textContent = element.name;
  cardImage.src = element.link;
  cardImage.alt = element.name;

  const cardDeleteButton = cards.querySelector(".card__delete-button");

  cardDeleteButton.addEventListener("click", function (evt) {
    deleteCard(evt);
  });

  return cards;
}

initialCards.forEach(function (element) {
  const cards = createCard(element, { deleteCard });
  placesList.append(cards);
});

function deleteCard(evt) {
  evt.target.closest(".places__item").remove();
}
