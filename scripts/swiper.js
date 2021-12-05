window.addEventListener('DOMContentLoaded', function() {
    const swiper = new Swiper('.swiper', {
        // Optional parameters
        slidesPerView: 1,
        loop: true,
        grabCursor: true,
        breakpointsBase: 'container',

        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },

        mousewheel: {
            invert: true,
        },

        a11y: {
            paginationBulletMessage: 'Переход к слайду {{index}}',
        },
    });
})
