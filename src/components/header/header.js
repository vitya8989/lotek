const headerSearchForm = document.querySelector('.header__search-form');
const headerSearchBtn = document.querySelector('.header__search');

headerSearchBtn.onclick = () => {
    headerSearchForm.classList.toggle('show-search');
    headerSearchBtn.classList.toggle('active');
}

const mobMenu = document.querySelector('.header__bottom');
const burger = document.querySelector('.header__burger');
const headerCross = document.querySelector('.header__cross');

burger.onclick = () => {
    mobMenu.classList.add('open');
}
headerCross.onclick = () => {
    mobMenu.classList.remove('open');
}
