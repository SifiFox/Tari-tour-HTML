import {initBurger} from "../../scripts/modules/burger/burger.js";
import {initCalendar} from "../../scripts/modules/calendar/calendar.js";

initBurger()

const calendars = document.querySelectorAll("input[value][type='date']")
calendars.forEach(item => {
    initCalendar(item)
})


const controlsTop = document.querySelectorAll('.control-top')
const controlsDown = document.querySelectorAll('.control-down')


controlsTop.forEach(item => item.addEventListener('click' , () => {
    const input = item.closest('.booking-form__item').querySelector('input')
    input.setAttribute('value', Number(input.value) + 1)
}))

controlsDown.forEach(item => item.addEventListener('click' , () => {
    const input = item.closest('.booking-form__item').querySelector('input')
    Number(input.value) > 1 ? input.setAttribute('value', Number(input.value) - 1) : input.setAttribute('value', '1')
}))


const programTitles = document.querySelectorAll('.order-program__body__title')
programTitles.forEach(title => title.addEventListener('click', (e) => toggleData(e)))
function toggleData(item){
    item.currentTarget.closest('.order-program__body__item').classList.toggle('order-program__item__active')
}
