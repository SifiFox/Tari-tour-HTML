const gallerySwiper = document.querySelector('.gallery-swiper__container')
new Swiper(gallerySwiper , {
    pagination: {
        el: ".swiper-gallery__pagination" ,
        clickable: true ,
        dynamicBullets: false
    } ,
    breakpoints: {
        900: {
            slidesPerView: 5,
            grid: {
                rows: 2 ,
                fill: 'row'
            },
            centeredSlides: false,
            dynamicBullets: true,
            spaceBetween: 12,
        },
        350: {
            slidesPerView: 2 ,
            centeredSlides: true,
            spaceBetween: 8,
            pagination: {
                dynamicBullets: true,
            }
        } ,
    }
});