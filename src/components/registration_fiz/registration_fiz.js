const registrationFormFiz = document.querySelector('.registration__form_fiz');

if (registrationFormFiz) {
    registrationFormFiz.onsubmit = (e) => {
        e.preventDefault();
        if (validate_form(registrationFormFiz)) {
            alert('Форма отправлена');
        }
    }
}