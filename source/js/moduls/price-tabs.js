const tabButtons = document.querySelectorAll('.price__tabs-button');
const cards = document.querySelectorAll('.price__cards');

tabButtons.forEach((element) => {
  element.addEventListener('click', () => {
    tabButtons.forEach((btn) => {
      btn.classList.remove('price__tabs-button--active');
    });

    element.classList.add('price__tabs-button--active');

    const content = document.querySelector(`#${element.dataset.tabs}`);

    cards.forEach((card) => {
      card.classList.add('visually-hidden');
    });

    content.classList.remove('visually-hidden');
  });
});
