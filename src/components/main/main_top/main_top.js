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
