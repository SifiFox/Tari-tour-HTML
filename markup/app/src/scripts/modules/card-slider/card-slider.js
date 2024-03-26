const cards = document.querySelectorAll('.tour-card')
export const initSliders = () => {
    cards.forEach(card => {
        const swiperContainer = card.querySelector('.card-image__image')
        const pagination = card.querySelector('.swiper-pagination')
        new Swiper(swiperContainer , {
            spaceBetween: 30 ,
            pagination: {
                el: pagination ,
                clickable: true ,
            } ,

        });
    })

    const popularToursSwiper = document.querySelector('.popular-tours-swiper')
    const popularToursPagination = document.querySelector('.swiper-popular__pagination')

    new Swiper(popularToursSwiper , {
        spaceBetween: 30 ,
        pagination: {
            el: popularToursPagination ,
            clickable: true ,
        } ,
        navigation: {
            nextEl: ".popular-nav__right" ,
            prevEl: ".popular-nav__left" ,
        } ,
        breakpoints: {
            1500: {
                slidesPerView: 4 ,
                grid: {
                    rows: 2 ,
                } ,
            } ,
            1100: {
                slidesPerView: 3 ,
                grid: {
                    rows: 2 ,
                } ,
            } ,
            980: {
                slidesPerView: 2 ,
                grid: {
                    rows: 2 ,
                } ,
            } ,
            750: {
                slidesPerView: 4 ,
                grid: {
                    rows: 2 ,
                } ,
            } ,
            360: {
                slidesPerView: 1 ,
                grid: {
                    rows: 4 ,
                } ,
            }
        }

    });

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

    const testimonialsSwiper = document.querySelector(".testimonials-swiper")
    new Swiper(testimonialsSwiper , {
        pagination: {
            el: ".swiper-testimonials__pagination" ,
            clickable: true ,
            dynamicBullets: false
        } ,
        breakpoints: {
            900: {
                slidesPerView: "auto",
                initialSlide: 1,
                centeredSlides: true,
                pagination: {
                    dynamicBullets: false,
                }
            },
            300: {
                slidesPerView: 1,
                initialSlide: 0,
                centeredSlides: true,
                pagination: {
                    dynamicBullets: true,
                }
            }
        }
    })
}
