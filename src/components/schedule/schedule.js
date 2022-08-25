const scheduleSearchFormInput = document.querySelector('.schedule__search-form_input');
const scheduleSearchFormCross = document.querySelector('.schedule__search-form_cross');

if (scheduleSearchFormInput) {
    scheduleSearchFormInput.addEventListener('input', () => {
       if (scheduleSearchFormInput.value === '') {
           scheduleSearchFormCross.classList.remove('show');
       } else {
           scheduleSearchFormCross.classList.add('show');
       }
    });
    scheduleSearchFormCross.addEventListener('click', () => {
        scheduleSearchFormInput.value = '';
        scheduleSearchFormCross.classList.remove('show');
    });
}