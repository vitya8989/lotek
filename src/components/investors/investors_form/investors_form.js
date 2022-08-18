const investorsForm = document.querySelector('.investors_form__form');

investorsForm.onsubmit = (e) => {
    e.preventDefault();
    if (validate_form(investorsForm)) {
        alert('Форма отправлена');
    }
}