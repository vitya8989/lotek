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
;

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

investorsForm.onsubmit = (e) => {
    e.preventDefault();
    if (validate_form(investorsForm)) {
        alert('Форма отправлена');
    }
};
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
window.addEventListener('load', () => {
    contactsSlider.update();
});;

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