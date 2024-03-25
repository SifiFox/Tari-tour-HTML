


const questionTitles = document.querySelectorAll('.question-title')
questionTitles.forEach(title => title.addEventListener('click', (e) => toggleActiveQuestion(e)))
function toggleActiveQuestion(item){
    item.currentTarget.closest('.question').classList.toggle('question-active')
}


const employeeSwiper = document.querySelector('.employee-swiper')

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

