import {initBurger} from "../../scripts/modules/burger/burger.js";
import {initCalendar} from "../../scripts/modules/calendar/calendar.js";


const sortPrice = document.querySelector('.tours-sort__price')
const sortPopular = document.querySelector('.tours-sort__popular')

sortPrice.addEventListener('click', (e) => toggleSortType(e))
sortPopular.addEventListener('click', (e) => toggleSortType(e))

const filterTitles = document.querySelectorAll('.filters-group__title')
filterTitles.forEach(item => item.addEventListener('click', (e) => showInnerFilterData(e)))

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


function initAllData() {
    initBurger()
    initCalendar('#tour-dates')
}

const toggleSortType = (el) => {
    if(el.currentTarget.classList.contains('sort__ASC')){
        el.currentTarget.classList.remove('sort__ASC')
        el.currentTarget.classList.add('sort__DESC')
    }else{
            el.currentTarget.classList.remove('sort__DESC')
            el.currentTarget.classList.add('sort__ASC')
    }
}



let windowWidth = window.innerWidth
window.addEventListener('resize', () => {
    windowWidth = window.innerWidth
})

const showFilter = document.querySelector('.tours-button__filter')
showFilter.addEventListener('click', showFilters)
const filters = document.querySelector('.tours-filters')
const body = document.querySelector('body')

const filterClose = document.querySelector('.filter-close')
filterClose.addEventListener('click', showFilters)
function showFilters() {
    filters.classList.toggle('tours-filters__active')
    body.classList.toggle('hide')
}
function showInnerFilterData(item) {
    const filterIcon = item.currentTarget.querySelector('.filter-icon__wrapper')
    const data = item.currentTarget.nextSibling.nextSibling
    if(item.currentTarget.classList.contains('filters-group__title__active')){
        item.currentTarget.classList.remove('filters-group__title__active')
        filterIcon.classList.remove('filter-icon__active')
        if(data){
            data.classList.add('removed')
        }
    }else{
        item.currentTarget.classList.add('filters-group__title__active')
        filterIcon.classList.add('filter-icon__active')
        if(data && data.classList.contains('removed')){
            data.classList.remove('removed')
        }
    }
}



initAllData()