const buttonFilter = document.querySelector('.button-filter')
const themesWrapper = document.querySelector('.themes-wrapper')
const closeBtn = document.querySelector('.picture-full__close')
const body = document.querySelector('body')


buttonFilter.addEventListener('click', toggleActiveFilters)
closeBtn.addEventListener('click', toggleActiveFilters)
function toggleActiveFilters(){
    themesWrapper.classList.toggle('themes__active__wrapper')
    body.classList.toggle('hide')
}