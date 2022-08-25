new Swiper('.services_card_slider__slider', {
    speed: 700,
    slidesPerView: 1,
    pagination: {
        el: '.services_card_slider__slider_pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.services_card_slider__slider_btn_next',
        prevEl: '.services_card_slider__slider_btn_prev'
    },
});