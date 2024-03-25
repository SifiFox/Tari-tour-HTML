export const initBurger = () => {
    const body = document.querySelector('body')
    const burgerButton = document.querySelector('.burger-mobile')
    const mobileNav = document.querySelector('.nav-mobile')
    const mobileNavClose = document.querySelector('.nav-mobile__close')

    burgerButton.addEventListener('click', (e) => {
        mobileNav.classList.add('nav-mobile__active')
        body.classList.add('hide')
    })

    mobileNavClose.addEventListener('click', (e) => {
        mobileNav.classList.remove('nav-mobile__active')
        body.classList.remove('hide')
    })

}