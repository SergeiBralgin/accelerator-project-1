const tabs = document.querySelectorAll('.faq__tabs-btn');
const list = document.querySelectorAll('.faq__accordion-list');

tabs.forEach((element) => {
  element.addEventListener('click', () => {
    tabs.forEach((item) => {
      item.classList.remove('faq__tabs-btn--active');
    });
    element.classList.add('faq__tabs-btn--active');

    const listCurrent = document.querySelector(`#${element.dataset.list}`);

    list.forEach((i) => {
      i.classList.add('visually-hidden');
    });

    listCurrent.classList.remove('visually-hidden');
  });
});
