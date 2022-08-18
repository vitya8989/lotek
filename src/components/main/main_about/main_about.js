new Swiper('.main_about__slider', {
    speed: 700,
    slidesPerView: 1,
    pagination: {
        el: '.main_about__slider_pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.main_about__slider_btn_next',
        prevEl: '.main_about__slider_btn_prev'
    },
});

