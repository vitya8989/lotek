const registrationFormIp = document.querySelector('.registration__form_ip');

if (registrationFormIp) {
    registrationFormIp.onsubmit = (e) => {
        e.preventDefault();
        if (validate_form(registrationFormIp)) {
            alert('Форма отправлена');
        }
    }
}