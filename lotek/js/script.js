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
;

const callbackOpen = document.querySelector('.callback_open');
const callbackPopup = document.querySelector('.callback_popup');
const callbackPopupBody = document.querySelector('.callback_popup__body');
const callbackPopupCross = document.querySelector('.callback_popup__cross');
const callbackPopupContent = document.querySelectorAll('.callback_popup__content');
const callbackSendBtn = document.querySelector('.callback_send__btn');
if (callbackOpen) {
    callbackOpen.onclick = () => {
        callbackPopup.classList.add('open');
    }

    callbackPopup.onclick = (e) => {
        if (!e.target.closest('.callback_popup__body')) {
            callbackPopup.classList.remove('open');
            if (callbackPopupBody.classList.contains('this--send')) {
                callbackPopupBody.classList.remove('this--send');
            }
            for (let i = 0; i < callbackPopupContent.length; i++) {
                callbackPopupContent[i].classList.remove('active');
                if (callbackPopupContent[i].dataset.name === 'callback') {
                    callbackPopupContent[i].classList.add('active');
                }
            }
        }
    }

    callbackPopupCross.onclick = () => {
        callbackPopup.classList.remove('open');
        if (callbackPopupBody.classList.contains('this--send')) {
            callbackPopupBody.classList.remove('this--send');
        }
        for (let i = 0; i < callbackPopupContent.length; i++) {
            callbackPopupContent[i].classList.remove('active');
            if (callbackPopupContent[i].dataset.name === 'callback') {
                callbackPopupContent[i].classList.add('active');
            }
        }
    }

    callbackSendBtn.onclick = () => {
        callbackPopup.classList.remove('open');
        if (callbackPopupBody.classList.contains('this--send')) {
            callbackPopupBody.classList.remove('this--send');
        }
        for (let i = 0; i < callbackPopupContent.length; i++) {
            callbackPopupContent[i].classList.remove('active');
            if (callbackPopupContent[i].dataset.name === 'callback') {
                callbackPopupContent[i].classList.add('active');
            }
        }
    }

    const callbackForm = document.querySelector('.callback__form');

    if (callbackForm) {
        callbackForm.onsubmit = (e) => {
            e.preventDefault();
            if (validate_form(callbackForm)) {
                callbackForm.reset();
                callbackPopupBody.classList.add('this--send');
                for (let i = 0; i < callbackPopupContent.length; i++) {
                    if (callbackPopupContent[i].dataset.name === 'callback_send') {
                        callbackPopupContent[i].classList.add('active');
                    }
                    if (callbackPopupContent[i].dataset.name === 'callback') {
                        callbackPopupContent[i].classList.remove('active');
                    }
                }
            }
        }
    }
}
;
const mapPoints = document.querySelectorAll('.main_map__point');
const mapContacts = document.querySelectorAll('.main_map__contacts');
if (mapPoints.length > 0 && mapContacts.length > 0) {
    for (let i = 0; i < mapPoints.length; i++) {
        mapPoints[i].onclick = function () {
            if (!mapPoints[i].classList.contains('active')) {
                for (let j = 0; j < mapPoints.length; j++) {
                    mapPoints[j].classList.remove('active');
                    mapContacts[j].classList.remove('active');

                    if (this.dataset.index === mapContacts[j].dataset.index) {
                        mapContacts[j].classList.add('active');
                    }
                }
                this.classList.add('active');
            }
        }
    }
}
;
new Swiper('.main_about__slider', {
    speed: 700,
    slidesPerView: 1,
    pagination: {
        el: '.main_about__slider_pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.main_about__slider_btn_next',
        prevEl: '.main_about__slider_btn_prev'
    },
});

;

;
const investorsForm = document.querySelector('.investors_form__form');

if (investorsForm) {
    investorsForm.onsubmit = (e) => {
        e.preventDefault();
        if (validate_form(investorsForm)) {
            alert('Форма отправлена');
        }
    }
};
const contactsSliderBlock = document.querySelector('.contacts__slider');
const contactsSlider = new Swiper('.contacts__slider', {
    speed: 700,
    slidesPerView: 1,
    autoHeight: true,
    spaceBetween: 40,
    pagination: {
        el: '.contacts__slider_pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.contacts__slider_btn_next',
        prevEl: '.contacts__slider_btn_prev'
    },
    breakpoints: {
        768: {
            slidesPerView: 2,
            spaceBetween: 40,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 40,
        },
        1500: {
            slidesPerView: 4,
            spaceBetween: 0,
        }
    }
});

if (contactsSliderBlock) {
    window.addEventListener('load', () => {
        contactsSlider.update();
    });
}



;

;
new Swiper('.services_card_slider__slider', {
    speed: 700,
    slidesPerView: 1,
    pagination: {
        el: '.services_card_slider__slider_pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.services_card_slider__slider_btn_next',
        prevEl: '.services_card_slider__slider_btn_prev'
    },
});;
new Swiper('.projects__slider', {
    speed: 700,
    slidesPerView: 'auto',
    spaceBetween: 10,
    pagination: {
        el: '.projects__slider_pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.projects__slider_btn_next',
        prevEl: '.projects__slider_btn_prev'
    },
    breakpoints: {
        768: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        960: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
        1200: {
            slidesPerView: 4,
            spaceBetween: 30,
        }
    }
});;
const servicesCardForm = document.querySelector('.services_card_form__form');

if (servicesCardForm) {
    servicesCardForm.onsubmit = (e) => {
        e.preventDefault();
        if (validate_form(servicesCardForm)) {
            alert('Форма отправлена');
        }
    }
};
new Swiper('.partners__slider', {
    speed: 700,
    slidesPerView: 'auto',
    spaceBetween: 20,
    pagination: {
        el: '.partners__slider_pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.partners__slider_btn_next',
        prevEl: '.partners__slider_btn_prev'
    },
    breakpoints: {
        1024: {
            spaceBetween: 78,
        }
    }
});;

const header = document.querySelector('.header');
let scrollBarWidth = window.innerWidth - header.offsetWidth + "px";
if (typeof Fancybox !== 'undefined') {
    Fancybox.bind("[data-fancybox]", {
        on: {
            load: (fancybox) => {
                header.style.paddingRight = scrollBarWidth;
            },
            destroy: (fancybox) => {
                header.style.paddingRight = '0';
            }
        },
    });
}


const licensesGroupSlider = new Swiper('.licenses__group_slider', {
    speed: 700,
    slidesPerView: 'auto',
    spaceBetween: 10,
    breakpoints: {
        1024: {
            spaceBetween: 0,
        }
    }
});

if (window.innerWidth < 1024) {
    licensesGroupSlider.enable();
} else {
    licensesGroupSlider.disable();
}

window.addEventListener('resize', () => {
    if (window.innerWidth < 1024) {
        licensesGroupSlider.enable();
    } else {
        licensesGroupSlider.disable();
    }
});

const licensesGroupSlider2 = new Swiper('.licenses__group_slider2', {
    speed: 700,
    slidesPerView: 'auto',
    spaceBetween: 10,
    breakpoints: {
        1024: {
            spaceBetween: 0,
        }
    }
});

if (window.innerWidth < 1024) {
    licensesGroupSlider2.enable();
} else {
    licensesGroupSlider2.disable();
}

window.addEventListener('resize', () => {
    if (window.innerWidth < 1024) {
        licensesGroupSlider2.enable();
    } else {
        licensesGroupSlider2.disable();
    }
});

;

const scheduleSearchFormInput = document.querySelector('.schedule__search-form_input');
const scheduleSearchFormCross = document.querySelector('.schedule__search-form_cross');

if (scheduleSearchFormInput) {
    scheduleSearchFormInput.addEventListener('input', () => {
       if (scheduleSearchFormInput.value === '') {
           scheduleSearchFormCross.classList.remove('show');
       } else {
           scheduleSearchFormCross.classList.add('show');
       }
    });
    scheduleSearchFormCross.addEventListener('click', () => {
        scheduleSearchFormInput.value = '';
        scheduleSearchFormCross.classList.remove('show');
    });
};

const map = document.getElementById('map');

if (map) {
    let scriptMap = document.createElement('script');
    scriptMap.src = 'https://api-maps.yandex.ru/2.1/?apikey=dd0f5e76-e8bb-42be-b558-f7af3b491cd2&lang=ru_RU';
    setTimeout(() => document.head.append(scriptMap), 0);
    scriptMap.onload = function () {
        ymaps.ready(init);
    };

    function init() {
        var myMap = new ymaps.Map("map", {
            center: [59.880216, 30.426208],
            zoom: 16,
            controls: []
        });
        myMap.controls.add('zoomControl', {
            float: 'none',
            position: {
                top: '40px',
                right: '20px'
            }
        });
        var myPlacemark = new ymaps.Placemark([59.880216, 30.426208], {}, {
            iconLayout: 'default#image',
            iconImageHref: './img/contacts/icon.png',
            iconImageSize: [32, 44],
            iconImageOffset: [-20, -40]
        });
        myMap.geoObjects.add(myPlacemark);

        const mapLink = document.querySelector('.contacts_page__map_link');

        mapLink.addEventListener('click', (e) => {
            e.preventDefault();
            myMap.setCenter([59.880216, 30.426208], 16, { checkZoomRange: true });
        });
    }
}
;

new Swiper('.default_page__slider1', {
    speed: 700,
    slidesPerView: 1,
    pagination: {
        el: '.default_page__slider_pagination1',
        clickable: true,
    },
    navigation: {
        nextEl: '.default_page__slider_btn_next1',
        prevEl: '.default_page__slider_btn_prev1'
    },
});

new Swiper('.default_page__slider2', {
    speed: 700,
    slidesPerView: 1,
    pagination: {
        el: '.default_page__slider_pagination2',
        clickable: true,
    },
    navigation: {
        nextEl: '.default_page__slider_btn_next2',
        prevEl: '.default_page__slider_btn_prev2'
    },
});
;

let select = document.querySelectorAll('.select');
if (select.length > 0) {
    $('.select').SumoSelect();
}

const registrationFormCompany = document.querySelector('.registration__form_company');

if (registrationFormCompany) {
    registrationFormCompany.onsubmit = (e) => {
        e.preventDefault();
        if (validate_form(registrationFormCompany)) {
            alert('Форма отправлена');
        }
    }
};

const registrationFormIp = document.querySelector('.registration__form_ip');

if (registrationFormIp) {
    registrationFormIp.onsubmit = (e) => {
        e.preventDefault();
        if (validate_form(registrationFormIp)) {
            alert('Форма отправлена');
        }
    }
};

const registrationFormFiz = document.querySelector('.registration__form_fiz');

if (registrationFormFiz) {
    registrationFormFiz.onsubmit = (e) => {
        e.preventDefault();
        if (validate_form(registrationFormFiz)) {
            alert('Форма отправлена');
        }
    }
};

const lkMenu = document.querySelector('.lk__menu');
const lkMobMenuBtn = document.querySelector('.lk__mob_menu_btn');
const lkMenuCross = document.querySelector('.lk__menu_cross');

lkMobMenuBtn.onclick = () => {
    lkMenu.classList.add('open');
}

lkMenuCross.onclick = () => {
    lkMenu.classList.remove('open');
};

const onlyRus = document.querySelectorAll('.only-rus');
const maskPhone = document.querySelectorAll('.phone-mask');
const onlyEng = document.querySelectorAll('.only-eng');
const onlyNumber = document.querySelectorAll('.only-number');

if (maskPhone.length > 0) {
    for (let i = 0; i < maskPhone.length; i++) {
        maskPhone[i].style.color = '#CDCDCD';
        maskPhone[i].addEventListener('focus', function () {
            maskPhone[i].style.color = '#26160C';
        });
        maskPhone[i].addEventListener('input', function () {
            maskPhone[i].style.color = '#26160C';
        });
        maskPhone[i].addEventListener('blur', function () {
            if (maskPhone[i].value === '+_(___)___-__-__') {
                maskPhone[i].style.color = '#CDCDCD';
            }
        });
    }

    function setCursorPosition(pos, elem) {
        elem.focus();
        if (elem.setSelectionRange) elem.setSelectionRange(pos, pos);
        else if (elem.createTextRange) {
            var range = elem.createTextRange();
            range.collapse(true);
            range.moveEnd("character", pos);
            range.moveStart("character", pos);
            range.select()
        }
    }

    function mask(event) {
        var matrix = this.defaultValue,
            i = 0,
            def = matrix.replace(/\D/g, ""),
            val = this.value.replace(/\D/g, "");
        def.length >= val.length && (val = def);
        matrix = matrix.replace(/[_\d]/g, function (a) {
            return val.charAt(i++) || "_"
        });
        this.value = matrix;
        i = matrix.lastIndexOf(val.substr(-1));
        i < matrix.length && matrix != this.defaultValue ? i++ : i = matrix.indexOf("_");
        setCursorPosition(i, this)
    }

    for (let i = 0; i < maskPhone.length; i++) {
        maskPhone[i].addEventListener("input", mask, false);
    }
}

if (onlyRus.length > 0) {
    for (let i = 0; i < onlyRus.length; i++) {
        onlyRus[i].addEventListener('keyup', function () {
            this.value = this.value.replace(/[^а-яёА-ЯЁ ]/g, "");
        });
    }
}
if (onlyEng.length > 0) {
    for (let i = 0; i < onlyEng.length; i++) {
        onlyEng[i].addEventListener('keyup', function () {
            this.value = this.value.replace(/[а-яёА-ЯЁ]/g, "");
        });
    }
}
if (onlyNumber.length > 0) {
    for (let i = 0; i < onlyNumber.length; i++) {
        onlyNumber[i].addEventListener('keyup', function () {
            this.value = this.value.replace(/[^\d]/g, "");
        });
    }
}

function validate_form(form) {
    let valid = true;
    let reqInputs = form.querySelectorAll('.req_input');
    for (let i = 0; i < reqInputs.length; i++) {
        if (reqInputs[i].classList.contains('phone-mask') && reqInputs[i].value.indexOf('_') !== -1) {
            valid = false;
            reqInputs[i].classList.add('error');
        } else if (reqInputs[i].value === "") {
            valid = false;
            reqInputs[i].classList.add('error');
        }
    }

    return valid;
}

const reqInputs = document.querySelectorAll('.req_input');

if (reqInputs.length > 0) {
    for (let i = 0; i < reqInputs.length; i++) {
        reqInputs[i].addEventListener('focus', () => {
            if (reqInputs[i].classList.contains('error')) {
                reqInputs[i].classList.remove('error');
            }
        });
    }
}