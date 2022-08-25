new Swiper('.partners__slider', {
    speed: 700,
    slidesPerView: 'auto',
    spaceBetween: 20,
    pagination: {
        el: '.partners__slider_pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.partners__slider_btn_next',
        prevEl: '.partners__slider_btn_prev'
    },
    breakpoints: {
        1024: {
            spaceBetween: 78,
        }
    }
});