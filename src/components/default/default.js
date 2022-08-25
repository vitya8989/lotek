new Swiper('.default_page__slider1', {
    speed: 700,
    slidesPerView: 1,
    pagination: {
        el: '.default_page__slider_pagination1',
        clickable: true,
    },
    navigation: {
        nextEl: '.default_page__slider_btn_next1',
        prevEl: '.default_page__slider_btn_prev1'
    },
});

new Swiper('.default_page__slider2', {
    speed: 700,
    slidesPerView: 1,
    pagination: {
        el: '.default_page__slider_pagination2',
        clickable: true,
    },
    navigation: {
        nextEl: '.default_page__slider_btn_next2',
        prevEl: '.default_page__slider_btn_prev2'
    },
});
