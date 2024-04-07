
document.addEventListener('DOMContentLoaded', () => {
    console.log('test')
})

import {initBurger} from "./src/scripts/modules/burger/burger.js";
import {initCalendar} from "./src/scripts/modules/calendar/calendar.js";
import {initSliders} from "./src/scripts/modules/card-slider/card-slider.js";

const inputsHidden = document.querySelectorAll('.form__item__hidden')
const calendars = document.querySelectorAll("input[value][type='date']")
const controlsTop = document.querySelectorAll('.control-top')
const controlsDown = document.querySelectorAll('.control-down')
const programTitles = document.querySelectorAll('.order-program__body__title')

// PICTURE FULL SLIDER
const bannerWrapper = document.querySelector('.details-banner__wrapper')
const pictureFull = document.querySelector('.picture-full ')
const pictureFullClose = document.querySelector('.picture-full__close')
const pictureFullSwiper = document.querySelector('.picture-full__swiper')
// PICTURE FULL SLIDER END


const tourProgramItems = document.querySelectorAll('.tour-program__title')
const tourContentItems = document.querySelectorAll('.tour-content__title')

const questionTitles = document.querySelectorAll('.question-title')
const employeeSwiper = document.querySelector('.employee-swiper')


const sortPrice = document.querySelector('.tours-sort__price')
const sortPopular = document.querySelector('.tours-sort__popular')
const filterTitles = document.querySelectorAll('.filters-group__title')
const showFilter = document.querySelector('.tours-button__filter')
const filters = document.querySelector('.tours-filters')
const body = document.querySelector('body')
const filterClose = document.querySelector('.filter-close')


const buttonFilter = document.querySelector('.button-filter')
const themesWrapper = document.querySelector('.themes-wrapper')
const closeBtn = document.querySelector('.picture-full__close')

const formTabs = document.querySelectorAll('.form-tab')


formTabs.forEach(tab => {tab.addEventListener('click', (e) => changeFormTabActive(e))})


function changeFormTabActive(e){
    const activeTab = document.querySelector('.form-tab__active')
    activeTab.classList.remove('form-tab__active')
    e.target.classList.toggle('form-tab__active')
}

let windowWidth = window.innerWidth
window.addEventListener('resize', () => {
    windowWidth = window.innerWidth
})

export function initAllData() {
    initBurger()
    initSliders()
    if(calendars.length > 0){
        calendars.forEach(item => {
            initCalendar(item)
        })
    }
    if(inputsHidden) {
        inputsHidden.forEach(item => {
            const iconsShow = item.querySelectorAll('.icon-hide')
            iconsShow.forEach(item => item.addEventListener('click', (e) => showHiddenValue(e)))
        })
    }

    controlsTop.forEach(item => item.addEventListener('click' , () => {
        const input = item.closest('.booking-form__item').querySelector('input')
        input.setAttribute('value', Number(input.value) + 1)
    }))

    controlsDown.forEach(item => item.addEventListener('click' , () => {
        const input = item.closest('.booking-form__item').querySelector('input')
        Number(input.value) > 1 ? input.setAttribute('value', Number(input.value) - 1) : input.setAttribute('value', '1')
    }))

    if(programTitles.length > 0){
        programTitles.forEach(title => title.addEventListener('click', (e) => toggleData(e, 'order-program__item__active')))
    }

    if(bannerWrapper){
        const bannerImages = bannerWrapper.querySelectorAll('img')
        if(bannerImages.length > 0){
            pictureFullClose.addEventListener('click', togglePictureFull)
            bannerImages.forEach(image => image.addEventListener('click', togglePictureFull))
        }
    }

    if(pictureFullSwiper){
        new Swiper(pictureFullSwiper, {
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
    }

    if(tourProgramItems && tourContentItems){
        tourProgramItems.forEach(item => {
            item.addEventListener('click', (e) => toggleData(e, 'tour-program__item__active'))
        })
        tourContentItems.forEach(item => {
            item.addEventListener('click', (e) => toggleData(e, 'tour-content__active'))
        })
    }

    questionTitles.forEach(title => title.addEventListener('click', (e) => toggleActiveQuestion(e)))

    if(employeeSwiper){
        new Swiper(employeeSwiper,{
            pagination: {
                el: ".employee-pagination" ,
                clickable: true,
            } ,
            breakpoints: {
                700: {
                    slidesPerView: 4,
                    spaceBetween: 21,
                    centeredSlides: false
                },
                300: {
                    slidesPerView: 'auto',
                    spaceBetween: 20,
                    centeredSlides: true
                }

            }
        })
    }

    if(sortPrice){
        sortPrice.addEventListener('click', (e) => toggleSortType(e))
        sortPopular.addEventListener('click', (e) => toggleSortType(e))
    }

    if(filterTitles.length > 0){
        filterTitles.forEach(item => item.addEventListener('click', (e) => showInnerFilterData(e)))
    }

    if(showFilter){
        showFilter.addEventListener('click', showFilters)
    }
    if(filterClose){
        filterClose.addEventListener('click', showFilters)
    }

    if(buttonFilter){
        buttonFilter.addEventListener('click', toggleActiveFilters)
        closeBtn.addEventListener('click', toggleActiveFilters)
    }
}

initAllData()

function toggleActiveFilters(){
    themesWrapper.classList.toggle('themes__active__wrapper')
    body.classList.toggle('hide')
}

function toggleActiveQuestion(item){
    item.currentTarget.closest('.question').classList.toggle('question-active')
}

function toggleData(item, parentActiveClass) {
    item.currentTarget.parentNode.classList.toggle(parentActiveClass)
}

function togglePictureFull(){
    pictureFull.classList.toggle('picture-full__active')
    document.querySelector('body').classList.toggle('hide')
}

function showHiddenValue(item){
    const iconsWrapper = item.currentTarget.closest('.icon-hide')
    const icons = iconsWrapper.querySelectorAll('.icon-hide__image')
    icons.forEach(icon => icon.classList.toggle('icon-active'))
    const hiddenInput = item.currentTarget.closest('.form__item').querySelector('.form-item__input')
    if(hiddenInput.getAttribute('type') === 'password'){
        hiddenInput.setAttribute('type', 'text')
    }else{
        hiddenInput.setAttribute('type', 'password')
    }
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

