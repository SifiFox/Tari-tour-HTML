import {initBurger} from "./src/scripts/modules/burger/burger.js";
import {initCalendar} from "./src/scripts/modules/calendar/calendar.js";
import {initSliders} from "./src/scripts/modules/card-slider/card-slider.js";


export function initAllData() {
    initBurger()
    initCalendar('#tour-dates')
    initSliders()
}