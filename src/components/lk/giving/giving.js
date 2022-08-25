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
}