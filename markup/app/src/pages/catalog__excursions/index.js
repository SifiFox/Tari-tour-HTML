import {initCalendar} from "../../scripts/modules/calendar/calendar.js";
import {initBurger} from "../../scripts/modules/burger/burger.js";


function initAllData() {
    initBurger()
    initCalendar('#tour-dates')
}
initAllData()
const sortPrice = document.querySelector('.tours-sort__price')
const sortPopular = document.querySelector('.tours-sort__popular')

sortPrice.addEventListener('click', (e) => toggleSortType(e))
sortPopular.addEventListener('click', (e) => toggleSortType(e))
const toggleSortType = (el) => {
    if(el.currentTarget.classList.contains('sort__ASC')){
        el.currentTarget.classList.remove('sort__ASC')
        el.currentTarget.classList.add('sort__DESC')
    }else{
        el.currentTarget.classList.remove('sort__DESC')
        el.currentTarget.classList.add('sort__ASC')
    }
}

const cards = document.querySelectorAll('.tour-card')
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