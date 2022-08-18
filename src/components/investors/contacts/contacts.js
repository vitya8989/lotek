const contactsSlider = new Swiper('.contacts__slider', {
    speed: 700,
    slidesPerView: 1,
    autoHeight: true,
    spaceBetween: 40,
    pagination: {
        el: '.contacts__slider_pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.contacts__slider_btn_next',
        prevEl: '.contacts__slider_btn_prev'
    },
    breakpoints: {
        768: {
            slidesPerView: 2,
            spaceBetween: 40,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 40,
        },
        1500: {
            slidesPerView: 4,
            spaceBetween: 0,
        }
    }
});
window.addEventListener('load', () => {
    contactsSlider.update();
});