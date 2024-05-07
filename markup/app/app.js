import {initBurger} from "./src/scripts/modules/burger/burger.js";
import {initCalendar} from "./src/scripts/modules/calendar/calendar.js";
import {initSliders} from "./src/scripts/modules/card-slider/card-slider.js";
import {bannerTitles} from './src/scripts/data/main-page/banner-title.js'

const inputsHidden = document.querySelectorAll('.form__item__hidden')
// const calendars = document.querySelectorAll(".form-item__calendar")
const calendars = document.querySelectorAll(".booking-form__dates")
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
const footerTitles = document.querySelectorAll('.footer-body__title')

const mobileNavTitles = document.querySelectorAll('.nav-item__title')
const desktopNavTitles = document.querySelectorAll('.header-menu-item')


formTabs.forEach(tab => {tab.addEventListener('click', (e) => changeFormTabActive(e))})

const popularWrapper = document.querySelector('.popular-wrapper')




function showThreeMore(wrapper, elementClass, hiddenClass, count){
    const elements = wrapper.querySelectorAll(`.${elementClass}`)
    let counter = 0
    elements.forEach(el => {
        if(el.classList.contains(hiddenClass) && counter < count){
            el.classList.remove(hiddenClass)
            counter++;
        }
    })
}

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

    desktopNavTitles.forEach(item => {
        item.addEventListener('click', (e) => {
            const activeItem = document.querySelector('.header-menu-item__active')
            if(activeItem){
                activeItem.classList.remove('header-menu-item__active')
                e.currentTarget.classList.add('header-menu-item__active')
            }else{
                e.currentTarget.classList.add('header-menu-item__active')
            }
            if(activeItem === e.currentTarget){
                e.currentTarget.classList.toggle('header-menu-item__active')
            }
        })
    })

    mobileNavTitles.forEach(item => {
        item.addEventListener('click', (e) => {
            e.currentTarget.closest('.nav-mobile__item').classList.toggle('nav-mobile__item__active')
        })
    })

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

    footerTitles.forEach(item => {
        item.addEventListener('click', (e) => {
            e.currentTarget.classList.toggle('footer-body__title__opened')
        })
    })

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


    const popularShowmore = popularWrapper.querySelector('.button-showmore')
    if(popularShowmore){
        popularShowmore.addEventListener('click', () => showThreeMore(popularWrapper, 'tour-card', 'removed', 3))
    }

    const bannerSelectTitle = document.querySelector('.banner-title__option')
    bannerSelectTitle.addEventListener('click', (e) => toggleBannerTitleSelect(e))
}

initAllData()

function toggleBannerTitleSelect(e) {
    const bannerTitle = e.currentTarget
    const options = e.currentTarget.parentNode.querySelector('.banner-title__select')
    options.classList.toggle('banner-title__select__active')
    options.innerHTML = ''
    bannerTitles.forEach(item => {
        const option = document.createElement('p')
        option.classList.add('banner-title__select__option')
        option.innerText = item.name
        options.append(option)
        option.addEventListener('click', () => {
            const titleValue = bannerTitle.querySelector('.h1-b')
            titleValue.innerHTML = item.value
            options.classList.toggle('banner-title__select__active')
        })
    })
}

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




// Date mask
calendars.forEach(calendar => {
    dateInputMask(calendar);
})
function dateInputMask(elm) {
    elm.addEventListener('keypress', function(e) {
        if(e.keyCode < 47 || e.keyCode > 57) {
            e.preventDefault();
        }
        var len = elm.value.length;
        if(len !== 1 || len !== 3) {
            if(e.keyCode == 47) {
                e.preventDefault();
            }
        }
        if(len === 2) {
            elm.value += '-';
        }
        if(len === 5) {
            elm.value += '-';
        }
    });
}