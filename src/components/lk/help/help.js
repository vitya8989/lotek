const helpForm = document.querySelector('.help__form');

if (helpForm) {
    helpForm.onsubmit = (e) => {
        e.preventDefault();
        if (validate_form(helpForm)) {
            alert('Форма отправлена');
        }
    }
}