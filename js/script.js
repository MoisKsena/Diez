// Переключение классов на кнопке-бургере и на меню
var toggler = document.getElementById('toggler');
toggler.addEventListener('click', mainNavVisibleToggle);
function mainNavVisibleToggle(e) {
  e.preventDefault();
  toggler.classList.toggle('toggler--close');
  document.getElementById('main-nav').classList.toggle('main-nav--visible');
}
