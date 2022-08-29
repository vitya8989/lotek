@@include('../components/header/header.js');

@@include('../components/main/main_top/main_top.js');
@@include('../components/main/main_map/main_map.js');
@@include('../components/main/main_about/main_about.js');

@@include('../components/investors/investors_top/investors_top.js');
@@include('../components/investors/investors_form/investors_form.js');
@@include('../components/investors/contacts/contacts.js');

@@include('../components/services_card/services_card_top/services_card_top.js');
@@include('../components/services_card/services_card_slider/services_card_slider.js');
@@include('../components/services_card/projects/projects.js');
@@include('../components/services_card/services_card_form/services_card_form.js');
@@include('../components/services_card/partners/partners.js');

@@include('../components/licenses/licenses.js');

@@include('../components/schedule/schedule.js');

@@include('../components/contacts/contacts.js');

@@include('../components/default/default.js');

@@include('../components/registration_company/registration_company.js');

@@include('../components/registration_ip/registration_ip.js');

@@include('../components/registration_fiz/registration_fiz.js');

@@include('../components/lk/giving/giving.js');

@@include('../components/lk/history/history.js');

@@include('../components/lk/help/help.js');

@@include('../components/lk/applications_client/application.js');

@@include('../components/lk/applications_forms/applications_forms.js');

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