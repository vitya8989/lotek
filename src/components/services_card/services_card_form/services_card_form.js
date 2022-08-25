const servicesCardForm = document.querySelector('.services_card_form__form');

if (servicesCardForm) {
    servicesCardForm.onsubmit = (e) => {
        e.preventDefault();
        if (validate_form(servicesCardForm)) {
            alert('Форма отправлена');
        }
    }
}