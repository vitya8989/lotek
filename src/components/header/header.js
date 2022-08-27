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
    if (headerSearchForm.classList.contains('show-search')) {
        headerSearchForm.classList.remove('show-search');
        headerSearchBtn.classList.remove('active');
    }
}

const headerPersonal = document.querySelector('.header__personal');
const personalPopup = document.querySelector('.personal_popup');
const personalPopupBody = document.querySelector('.personal_popup__body');
const personalPopupCross = document.querySelector('.personal_popup__cross');
const autorizationForgot = document.querySelector('.autorization__forgot');
const personalPopupContent = document.querySelectorAll('.personal_popup__content');
const forgotLink = document.querySelector('.forgot__link');
const forgotSendBtn = document.querySelector('.forgot_send__btn');

headerPersonal.onclick = () => {
    personalPopup.classList.add('open');
    if (mobMenu.classList.contains('open')) {
        mobMenu.classList.remove('open');
    }
}

personalPopup.onclick = (e) => {
    if (!e.target.closest('.personal_popup__body')) {
        personalPopup.classList.remove('open');
        if (personalPopupBody.classList.contains('this--send')) {
            personalPopupBody.classList.remove('this--send');
        }
        for (let i = 0; i < personalPopupContent.length; i++) {
            personalPopupContent[i].classList.remove('active');
            if (personalPopupContent[i].dataset.name === 'autorization') {
                personalPopupContent[i].classList.add('active');
            }
        }
    }
}

personalPopupCross.onclick = () => {
    personalPopup.classList.remove('open');
    if (personalPopupBody.classList.contains('this--send')) {
        personalPopupBody.classList.remove('this--send');
    }
    for (let i = 0; i < personalPopupContent.length; i++) {
        personalPopupContent[i].classList.remove('active');
        if (personalPopupContent[i].dataset.name === 'autorization') {
            personalPopupContent[i].classList.add('active');
        }
    }
}

autorizationForgot.onclick = () => {
    for (let i = 0; i < personalPopupContent.length; i++) {
        if (personalPopupContent[i].dataset.name === 'autorization') {
            personalPopupContent[i].classList.remove('active');
        }
        if (personalPopupContent[i].dataset.name === 'forgot') {
            personalPopupContent[i].classList.add('active');
        }
    }
}

forgotLink.onclick = () => {
    for (let i = 0; i < personalPopupContent.length; i++) {
        if (personalPopupContent[i].dataset.name === 'autorization') {
            personalPopupContent[i].classList.add('active');
        }
        if (personalPopupContent[i].dataset.name === 'forgot') {
            personalPopupContent[i].classList.remove('active');
        }
    }
}

forgotSendBtn.onclick = () => {
    personalPopup.classList.remove('open');
    if (personalPopupBody.classList.contains('this--send')) {
        personalPopupBody.classList.remove('this--send');
    }
    for (let i = 0; i < personalPopupContent.length; i++) {
        personalPopupContent[i].classList.remove('active');
        if (personalPopupContent[i].dataset.name === 'autorization') {
            personalPopupContent[i].classList.add('active');
        }
    }
}

const autorizationForm = document.querySelector('.autorization__form');

autorizationForm.onsubmit = (e) => {
    e.preventDefault();
    if (validate_form(autorizationForm)) {
        alert('Форма отправлена');
    }
}

const forgotForm = document.querySelector('.forgot__form');

forgotForm.onsubmit = (e) => {
    e.preventDefault();
    if (validate_form(forgotForm)) {
        for (let i = 0; i < personalPopupContent.length; i++) {
            if (personalPopupContent[i].dataset.name === 'forgot_send') {
                personalPopupContent[i].classList.add('active');
                personalPopupBody.classList.add('this--send');
            }
            if (personalPopupContent[i].dataset.name === 'forgot') {
                personalPopupContent[i].classList.remove('active');
            }
        }
    }
}
