const header = document.querySelector('.header');
let scrollBarWidth = window.innerWidth - header.offsetWidth + "px";
if (typeof Fancybox !== 'undefined') {
    Fancybox.bind("[data-fancybox]", {
        on: {
            load: (fancybox) => {
                header.style.paddingRight = scrollBarWidth;
            },
            destroy: (fancybox) => {
                header.style.paddingRight = '0';
            }
        },
    });
}


const licensesGroupSlider = new Swiper('.licenses__group_slider', {
    speed: 700,
    slidesPerView: 'auto',
    spaceBetween: 10,
    breakpoints: {
        1024: {
            spaceBetween: 0,
        }
    }
});

if (window.innerWidth < 1024) {
    licensesGroupSlider.enable();
} else {
    licensesGroupSlider.disable();
}

window.addEventListener('resize', () => {
    if (window.innerWidth < 1024) {
        licensesGroupSlider.enable();
    } else {
        licensesGroupSlider.disable();
    }
});

const licensesGroupSlider2 = new Swiper('.licenses__group_slider2', {
    speed: 700,
    slidesPerView: 'auto',
    spaceBetween: 10,
    breakpoints: {
        1024: {
            spaceBetween: 0,
        }
    }
});

if (window.innerWidth < 1024) {
    licensesGroupSlider2.enable();
} else {
    licensesGroupSlider2.disable();
}

window.addEventListener('resize', () => {
    if (window.innerWidth < 1024) {
        licensesGroupSlider2.enable();
    } else {
        licensesGroupSlider2.disable();
    }
});

