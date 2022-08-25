const investorsForm = document.querySelector('.investors_form__form');

if (investorsForm) {
    investorsForm.onsubmit = (e) => {
        e.preventDefault();
        if (validate_form(investorsForm)) {
            alert('Форма отправлена');
        }
    }
}