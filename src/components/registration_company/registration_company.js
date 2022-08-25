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
}