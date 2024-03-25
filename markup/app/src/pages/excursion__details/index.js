import {initCalendar} from "../../scripts/modules/calendar/calendar.js";
import {initBurger} from "../../scripts/modules/burger/burger.js";


function initAllData() {
    initBurger()
}
initAllData()


const tourProgramItems = document.querySelectorAll('.tour-program__title')
tourProgramItems.forEach(item => {
    item.addEventListener('click', (e) => toggleData(e, 'tour-program__item__active'))
})

const tourContentItems = document.querySelectorAll('.tour-content__title')
tourContentItems.forEach(item => {
    item.addEventListener('click', (e) => toggleData(e, 'tour-content__active'))
})

function toggleData(item, parentActiveClass) {
    item.currentTarget.parentNode.classList.toggle(parentActiveClass)
}

new Swiper('.picture-full__swiper', {
    slidesPerView: 1,
    pagination: {
        el: ".swiper-pagination" ,
        clickable: true,
    } ,
    spaceBetween: 40 ,
    navigation: {
        nextEl: ".picture-full__prev" ,
        prevEl: ".picture-full__next" ,
    } ,
})


initCalendar('#tour-dates')

// PICTURE FULL SLIDER
const bannerWrapper = document.querySelector('.details-banner__wrapper')
const bannerImages = bannerWrapper.querySelectorAll('img')
const pictureFull = document.querySelector('.picture-full ')
const pictureFullClose = document.querySelector('.picture-full__close')

pictureFullClose.addEventListener('click', togglePictureFull)
bannerImages.forEach(image => image.addEventListener('click', togglePictureFull))

function togglePictureFull(){
    pictureFull.classList.toggle('picture-full__active')
    document.querySelector('body').classList.toggle('hide')
}
