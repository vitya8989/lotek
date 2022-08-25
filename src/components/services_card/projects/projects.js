new Swiper('.projects__slider', {
    speed: 700,
    slidesPerView: 'auto',
    spaceBetween: 10,
    pagination: {
        el: '.projects__slider_pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.projects__slider_btn_next',
        prevEl: '.projects__slider_btn_prev'
    },
    breakpoints: {
        768: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        960: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
        1200: {
            slidesPerView: 4,
            spaceBetween: 30,
        }
    }
});