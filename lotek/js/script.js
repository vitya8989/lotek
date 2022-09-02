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
            center: [59.880193, 30.428826],
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

        const MyBalloonLayout = ymaps.templateLayoutFactory.createClass(
            '<div class="contacts_map__balloon-wrap">'+
            '<a class="contacts_map__close" href="#"><svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
            '<path d="M1 1L7.5 7.5" stroke="white"/>\n' +
            '<path d="M1 7.5L7.5 1" stroke="white"/>\n' +
            '</svg></a>' +
            '<div class="contacts_map__content_balloon">' +
            '$[[options.contentLayout observeSize]]' +
            '</div>' +
            '</div>', {
                build: function() {
                    this.constructor.superclass.build.call(this);

                    this._$element = $('.contacts_map__balloon-wrap', this.getParentElement());

                    this.applyElementOffset();

                    this._$element.find('.contacts_map__close')
                        .on('click', $.proxy(this.onCloseClick, this));
                },

                /**
                 * Удаляет содержимое макета из DOM.
                 * @see http://api.yandex.ru/maps/doc/jsapi/2.x/ref/reference/layout.templateBased.Base.xml#clear
                 * @function
                 * @name clear
                 */
                clear: function() {
                    this._$element.find('.contacts_map__close')
                        .off('click');

                    this.constructor.superclass.clear.call(this);
                },

                /**
                 * Метод будет вызван системой шаблонов АПИ при изменении размеров вложенного макета.
                 * @see http://api.yandex.ru/maps/doc/jsapi/2.x/ref/reference/IBalloonLayout.xml#event-userclose
                 * @function
                 * @name onSublayoutSizeChange
                 */
                onSublayoutSizeChange: function() {
                    MyBalloonLayout.superclass.onSublayoutSizeChange.apply(this, arguments);

                    if (!this._isElement(this._$element)) {
                        return;
                    }

                    this.applyElementOffset();

                    this.events.fire('shapechange');
                },

                /**
                 * Сдвигаем балун чтобы "хвостик" указывал на точку привязки.
                 * @see http://api.yandex.ru/maps/doc/jsapi/2.x/ref/reference/IBalloonLayout.xml#event-userclose
                 * @function
                 * @name applyElementOffset
                 */
                applyElementOffset: function() {
                    this._$element.css({
                        left: 25,
                        top: -75
                    });
                },

                /**
                 * Закрывает баллун при клике на крестик, кидая событие "userclose" на макете.
                 * @see http://api.yandex.ru/maps/doc/jsapi/2.x/ref/reference/IBalloonLayout.xml#event-userclose
                 * @function
                 * @name onCloseClick
                 */
                onCloseClick: function(e) {
                    e.preventDefault();

                    this.events.fire('userclose');
                },

                /**
                 * Используется для автопозиционирования (balloonAutoPan).
                 * @see http://api.yandex.ru/maps/doc/jsapi/2.x/ref/reference/ILayout.xml#getClientBounds
                 * @function
                 * @name getClientBounds
                 * @returns {Number[][]} Координаты левого верхнего и правого нижнего углов
                 * шаблона относительно точки привязки.
                 */
                getShape: function() {
                    if (!this._isElement(this._$element)) {
                        return MyBalloonLayout.superclass.getShape.call(this);
                    }

                    const position = this._$element.position();

                    return new ymaps.shape.Rectangle(new ymaps.geometry.pixel.Rectangle([
                        [position.left, position.top], [
                            position.left + this._$element[0].offsetWidth,
                            // eslint-disable-next-line max-len
                            position.top + this._$element[0].offsetHeight + this._$element.find('.contacts_map__arrow')[0].offsetHeight
                        ]
                    ]));
                },

                /**
                 * Проверяем наличие элемента (в ИЕ и Опере его еще может не быть).
                 * @function
                 * @private
                 * @name _isElement
                 * @param {jQuery} [element] Элемент.
                 * @returns {Boolean} Флаг наличия.
                 */
                _isElement: function(element) {
                    return element && element[0] && element.find('.b_contacts_map__arrow')[0];
                }
            });
        const MyBalloonContentLayout = ymaps.templateLayoutFactory.createClass(
            '<div class="contacts_map__title_balloon">Головной офис АО «ЛОТЭК»</div>'+
            '<div class="contacts_map__balloon-body">192171, Санкт-Петербург, ул. Седова, д.57</div>'
        );

        var myPlacemark = new ymaps.Placemark([59.880216, 30.426208], {
            balloonHeader: $(this).data('name'),
            balloonContent: $(this).data('address')},
        {
            iconLayout: 'default#image',
            iconImageHref: './img/contacts/icon.png',
            iconImageSize: [32, 44],
            iconImageOffset: [-20, -40],
            balloonLayout: MyBalloonLayout,
            balloonContentLayout: MyBalloonContentLayout,
            balloonPanelMaxMapArea: 0,
            hideIconOnBalloonOpen: false
        });
        myMap.geoObjects.add(myPlacemark);
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

if (lkMenu) {
    lkMobMenuBtn.onclick = () => {
        lkMenu.classList.add('open');
    }

    lkMenuCross.onclick = () => {
        lkMenu.classList.remove('open');
    }
}

const givingPopup = document.querySelector('.giving__popup');
const waterInOpen = document.querySelectorAll('.water_in_open');
const waterInNewOpen = document.querySelector('.water_in_new_open');
const waterOutOpen = document.querySelectorAll('.water_out_open');
const waterOutNewOpen = document.querySelector('.water_out_new_open');
const warmOpen = document.querySelectorAll('.warm_open');
const warmNewOpen = document.querySelector('.warm_new_open');


if (givingPopup) {
    const givingWaterIn = givingPopup.querySelector('.giving__water_in');
    const givingPopupCross = givingPopup.querySelector('.giving__popup_cross');
    const givingWaterInNew = givingPopup.querySelector('.giving__water_in_new');
    const givingWaterOut = givingPopup.querySelector('.giving__water_out');
    const givingWaterOutNew = givingPopup.querySelector('.giving__water_out_new');
    const givingWarm = givingPopup.querySelector('.giving__warm');
    const givingWarmNew = givingPopup.querySelector('.giving__warm_new');

    for (let i = 0; i < waterInOpen.length; i++) {
        waterInOpen[i].onclick = () => {
            givingPopup.classList.add('open');
            givingWaterIn.classList.add('active');
        }
    }

    waterInNewOpen.onclick = () => {
        givingPopup.classList.add('open');
        givingWaterInNew.classList.add('active');
    }

    for (let i = 0; i < waterOutOpen.length; i++) {
        waterOutOpen[i].onclick = () => {
            givingPopup.classList.add('open');
            givingWaterOut.classList.add('active');
        }
    }

    waterOutNewOpen.onclick = () => {
        givingPopup.classList.add('open');
        givingWaterOutNew.classList.add('active');
    }

    for (let i = 0; i < warmOpen.length; i++) {
        warmOpen[i].onclick = () => {
            givingPopup.classList.add('open');
            givingWarm.classList.add('active');
        }
    }

    warmNewOpen.onclick = () => {
        givingPopup.classList.add('open');
        givingWarmNew.classList.add('active');
    }

    givingPopupCross.onclick = () => {
        givingPopup.classList.remove('open');
        givingWaterIn.classList.remove('active');
        givingWaterInNew.classList.remove('active');
        givingWaterOut.classList.remove('active');
        givingWaterOutNew.classList.remove('active');
        givingWarm.classList.remove('active');
        givingWarmNew.classList.remove('active');
    }

    givingPopup.onclick = (e) => {
        if (!e.target.closest('.giving__popup_body')) {
            givingPopup.classList.remove('open');
            givingWaterIn.classList.remove('active');
            givingWaterInNew.classList.remove('active');
            givingWaterOut.classList.remove('active');
            givingWaterOutNew.classList.remove('active');
            givingWarm.classList.remove('active');
            givingWarmNew.classList.remove('active');
        }
    }
}


const givingWaterInForm = document.querySelector('.giving__water_in_form');

if (givingWaterInForm) {
    const givingWaterInFormSubmit = givingWaterInForm.querySelector('.giving__water_in_form_submit');
    const givingWaterInFormInputs = givingWaterInForm.querySelectorAll('.input__input');

    for (let i = 0; i < givingWaterInFormInputs.length; i++) {
        givingWaterInFormInputs[i].oninput = () => {
            if (validateBtnSubmitLk(givingWaterInForm)) {
                givingWaterInFormSubmit.classList.remove('this--disabled');
            } else {
                givingWaterInFormSubmit.classList.add('this--disabled');
            }
        }
    }
}
const givingWaterInNewForm = document.querySelector('.giving__water_in_new_form');

if (givingWaterInNewForm) {
    const givingWaterInFormSubmit = givingWaterInNewForm.querySelector('.giving__water_in_form_submit');
    const givingWaterInFormInputs = givingWaterInNewForm.querySelectorAll('.input__input');

    for (let i = 0; i < givingWaterInFormInputs.length; i++) {
        givingWaterInFormInputs[i].oninput = () => {
            if (validateBtnSubmitLk(givingWaterInNewForm)) {
                givingWaterInFormSubmit.classList.remove('this--disabled');
            } else {
                givingWaterInFormSubmit.classList.add('this--disabled');
            }
        }
    }
}

const givingWaterOutForm = document.querySelector('.giving__water_out_form');

if (givingWaterOutForm) {
    const givingWaterInFormSubmit = givingWaterOutForm.querySelector('.giving__water_in_form_submit');
    const givingWaterInFormInputs = givingWaterOutForm.querySelectorAll('.input__input');

    for (let i = 0; i < givingWaterInFormInputs.length; i++) {
        givingWaterInFormInputs[i].oninput = () => {
            if (validateBtnSubmitLk(givingWaterOutForm)) {
                givingWaterInFormSubmit.classList.remove('this--disabled');
            } else {
                givingWaterInFormSubmit.classList.add('this--disabled');
            }
        }
    }
}

const givingWaterOutNewForm = document.querySelector('.giving__water_out_new_form');

if (givingWaterOutNewForm) {
    const givingWaterInFormSubmit = givingWaterOutNewForm.querySelector('.giving__water_in_form_submit');
    const givingWaterInFormInputs = givingWaterOutNewForm.querySelectorAll('.input__input');

    for (let i = 0; i < givingWaterInFormInputs.length; i++) {
        givingWaterInFormInputs[i].oninput = () => {
            if (validateBtnSubmitLk(givingWaterOutNewForm)) {
                givingWaterInFormSubmit.classList.remove('this--disabled');
            } else {
                givingWaterInFormSubmit.classList.add('this--disabled');
            }
        }
    }
}

const givingWarmForm = document.querySelector('.giving__warm_form');

if (givingWarmForm) {
    const givingWaterInFormSubmit = givingWarmForm.querySelector('.giving__water_in_form_submit');
    const givingWaterInFormInputs = givingWarmForm.querySelectorAll('.input__input');

    for (let i = 0; i < givingWaterInFormInputs.length; i++) {
        givingWaterInFormInputs[i].oninput = () => {
            if (validateBtnSubmitLk(givingWarmForm)) {
                givingWaterInFormSubmit.classList.remove('this--disabled');
            } else {
                givingWaterInFormSubmit.classList.add('this--disabled');
            }
        }
    }
}

const givingWarmNewForm = document.querySelector('.giving__warm_new_form');

if (givingWarmNewForm) {
    const givingWaterInFormSubmit = givingWarmNewForm.querySelector('.giving__water_in_form_submit');
    const givingWaterInFormInputs = givingWarmNewForm.querySelectorAll('.input__input');

    for (let i = 0; i < givingWaterInFormInputs.length; i++) {
        givingWaterInFormInputs[i].oninput = () => {
            if (validateBtnSubmitLk(givingWarmNewForm)) {
                givingWaterInFormSubmit.classList.remove('this--disabled');
            } else {
                givingWaterInFormSubmit.classList.add('this--disabled');
            }
        }
    }
}


const validateBtnSubmitLk = (form) => {
    let valid = false;
    const formInputs = form.querySelectorAll('.input__input');
    let count = 0;
    for (let i = 0; i < formInputs.length; i++) {
        if (formInputs[i].value !== '') {
            count++;
        }
    }
    if (count === formInputs.length) {
        valid = true;
    }
    return valid;
};

const historyWaterIn = document.querySelectorAll('.history__water_in');
const historyWaterOut = document.querySelectorAll('.history__water_out');
const historyWarm = document.querySelectorAll('.history__warm');
const historyPopup = document.querySelector('.history__popup');

if (historyPopup) {
    const historyPopupCross = historyPopup.querySelector('.history__popup_cross');

    const historyWaterInContent = historyPopup.querySelector('.history__water_in_content');
    const historyPopupStatusProcessWaterIn = historyWaterInContent.querySelector('.history__popup_status_process');
    const historyPopupStatusDoneWaterIn = historyWaterInContent.querySelector('.history__popup_status_done');

    const historyWaterOutContent = historyPopup.querySelector('.history__water_out_content');
    const historyPopupStatusProcessWaterOut = historyWaterOutContent.querySelector('.history__popup_status_process');
    const historyPopupStatusDoneWaterOut = historyWaterOutContent.querySelector('.history__popup_status_done');

    const historyWarmContent = historyPopup.querySelector('.history__warm_content');
    const historyPopupStatusProcessWarm = historyWarmContent.querySelector('.history__popup_status_process');
    const historyPopupStatusDoneWarm = historyWarmContent.querySelector('.history__popup_status_done');

    for (let i = 0; i < historyWaterIn.length; i++) {
        historyWaterIn[i].onclick = () => {
            historyPopup.classList.add('open');
            historyWaterInContent.classList.add('active');
            if (historyWaterIn[i].classList.contains('this--process')) {
                historyPopupStatusProcessWaterIn.classList.add('active');
            } else {
                historyPopupStatusDoneWaterIn.classList.add('active');
            }
        }
    }

    for (let i = 0; i < historyWaterOut.length; i++) {
        historyWaterOut[i].onclick = () => {
            historyPopup.classList.add('open');
            historyWaterOutContent.classList.add('active');
            if (historyWaterOut[i].classList.contains('this--process')) {
                historyPopupStatusProcessWaterOut.classList.add('active');
            } else {
                historyPopupStatusDoneWaterOut.classList.add('active');
            }
        }
    }

    for (let i = 0; i < historyWarm.length; i++) {
        historyWarm[i].onclick = () => {
            historyPopup.classList.add('open');
            historyWarmContent.classList.add('active');
            if (historyWarm[i].classList.contains('this--process')) {
                historyPopupStatusProcessWarm.classList.add('active');
            } else {
                historyPopupStatusDoneWarm.classList.add('active');
            }
        }
    }



    historyPopupCross.onclick = () => {
        historyPopup.classList.remove('open');

        historyWaterInContent.classList.remove('active');
        historyPopupStatusProcessWaterIn.classList.remove('active');
        historyPopupStatusDoneWaterIn.classList.remove('active');

        historyWaterOutContent.classList.remove('active');
        historyPopupStatusProcessWaterOut.classList.remove('active');
        historyPopupStatusDoneWaterOut.classList.remove('active');

        historyWarmContent.classList.remove('active');
        historyPopupStatusProcessWarm.classList.remove('active');
        historyPopupStatusDoneWarm.classList.remove('active');
    }

    historyPopup.onclick = (e) => {
        if (!e.target.closest('.history__popup_body')) {
            historyPopup.classList.remove('open');

            historyWaterInContent.classList.remove('active');
            historyPopupStatusProcessWaterIn.classList.remove('active');
            historyPopupStatusDoneWaterIn.classList.remove('active');

            historyWaterOutContent.classList.remove('active');
            historyPopupStatusProcessWaterOut.classList.remove('active');
            historyPopupStatusDoneWaterOut.classList.remove('active');

            historyWarmContent.classList.remove('active');
            historyPopupStatusProcessWarm.classList.remove('active');
            historyPopupStatusDoneWarm.classList.remove('active');
        }
    }
};

const helpForm = document.querySelector('.help__form');

if (helpForm) {
    helpForm.onsubmit = (e) => {
        e.preventDefault();
        if (validate_form(helpForm)) {
            alert('Форма отправлена');
        }
    }
};

const accordionsHead = document.querySelectorAll('.application__accordion_head');
const accordionsBody = document.querySelectorAll('.application__accordion_body');

if (accordionsHead) {
    for (let i = 0; i < accordionsBody.length; i++) {
        if (accordionsBody[i].classList.contains('open')) {
            accordionsBody[i].style.maxHeight = `${accordionsBody[i].scrollHeight + 10000}px`;
        }
    }
    for (let i = 0; i < accordionsHead.length; i++) {
        accordionsHead[i].onclick = () => {
            if (accordionsHead[i].nextElementSibling.classList.contains('open')) {
                accordionsHead[i].classList.remove('active');
                accordionsHead[i].nextElementSibling.classList.remove('open');
                accordionsHead[i].nextElementSibling.style.maxHeight = '0';
            } else {
                accordionsHead[i].classList.add('active');
                accordionsHead[i].nextElementSibling.classList.add('open');
                accordionsHead[i].nextElementSibling.style.maxHeight = `${accordionsHead[i].nextElementSibling.scrollHeight + 10000}px`;
            }
        }
    }
}



const applicationAdminBtnsBtn = document.querySelectorAll('.application__admin_btns_btn');
const applicationAdminPopup = document.querySelector('.application__admin_popup');

if (applicationAdminPopup) {
    const applicationAdminPopupContents = applicationAdminPopup.querySelectorAll('.application__admin_popup_content');
    const applicationAdminPopupCross = applicationAdminPopup.querySelector('.application__admin_popup_cross');

    for (let i = 0; i < applicationAdminBtnsBtn.length; i++) {
        applicationAdminBtnsBtn[i].onclick = () => {
            applicationAdminPopup.classList.add('open');
            for (let j = 0; j < applicationAdminPopupContents.length; j++) {
                if (applicationAdminBtnsBtn[i].dataset.value === applicationAdminPopupContents[j].dataset.value) {
                    applicationAdminPopupContents[j].classList.add('active');
                }
            }
        }
    }

    applicationAdminPopup.onclick = (e) => {
        if (!e.target.closest('.application__admin_popup_body')) {
            applicationAdminPopup.classList.remove('open');
            for (let i = 0; i < applicationAdminPopupContents.length; i++) {
                applicationAdminPopupContents[i].classList.remove('active');
            }
        }
    }
    applicationAdminPopupCross.onclick = () => {
        applicationAdminPopup.classList.remove('open');
        for (let i = 0; i < applicationAdminPopupContents.length; i++) {
            applicationAdminPopupContents[i].classList.remove('active');
        }
    }
}

const applicationAbortBtn = document.querySelector('.application__abort_btn');

if (applicationAbortBtn) {
    const applicationDelPopup = document.querySelector('.application__del_popup');
    const applicationDelPopupCross = applicationDelPopup.querySelector('.application__del_popup_cross');
    applicationAbortBtn.onclick = () => {
        applicationDelPopup.classList.add('open');
    }

    applicationDelPopup.onclick = (e) => {
        if (!e.target.closest('.application__del_popup_body')) {
            applicationDelPopup.classList.remove('open');
        }
    }

    applicationDelPopupCross.onclick = () => {
        applicationDelPopup.classList.remove('open');
    }
};

const applicationFormObjectInfoBtn = document.querySelector('.application_form__object_info_btn');
const applicationFormObjectInfo = document.querySelector('.application_form__object_info');
const jsApplicationFormBlock = document.querySelector('.js_application_form_block');
if (applicationFormObjectInfo) {
    const applicationFormObjectInfoEmpty = applicationFormObjectInfo.cloneNode(true);

    applicationFormObjectInfoBtn.onclick = (e) => {
        e.preventDefault();
        let newObjectInfo = applicationFormObjectInfoEmpty.cloneNode(true);
        jsApplicationFormBlock.insertBefore(newObjectInfo, applicationFormObjectInfoBtn);
    }
};

const onlyRus = document.querySelectorAll('.only-rus');
const maskPhone = document.querySelectorAll('.phone-mask');
const onlyEng = document.querySelectorAll('.only-eng');
const onlyNumber = document.querySelectorAll('.only-number');

if (maskPhone.length > 0) {
    for (let i = 0; i < maskPhone.length; i++) {
        maskPhone[i].style.color = '#CDCDCD';
        let defaultValue = maskPhone[i].value;
        maskPhone[i].addEventListener('focus', function () {
            maskPhone[i].style.color = '#26160C';
        });
        maskPhone[i].addEventListener('input', function () {
            maskPhone[i].style.color = '#26160C';
        });
        maskPhone[i].addEventListener('blur', function () {
            if (maskPhone[i].value === defaultValue) {
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
            this.value = this.value.replace(/[^\d.,]/g, "");
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