const lkMenu = document.querySelector('.lk__menu');
const lkMobMenuBtn = document.querySelector('.lk__mob_menu_btn');
const lkMenuCross = document.querySelector('.lk__menu_cross');

lkMobMenuBtn.onclick = () => {
    lkMenu.classList.add('open');
}

lkMenuCross.onclick = () => {
    lkMenu.classList.remove('open');
}