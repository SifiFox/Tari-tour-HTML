// import VanillaCalendar from "../../libs/vanilla-calendar-pro";
export function initCalendar(container){
    const options = {
        input: true,
        actions: {
            changeToInput(e, self) {
                console.log(self)
                if (!self.HTMLInputElement) return;
                if (self.selectedDates[0]) {
                    self.HTMLInputElement.value = self.selectedDates[0];
                    self.hide();
                } else {
                    self.HTMLInputElement.value = '';
                }
            },
        },
        settings: {
            lang: 'ru-RU',
            visibility: {
                positionToInput: 'center',
                theme: 'light'
            },
        },
    };

    const calendarInput = new VanillaCalendar(container, options);
    calendarInput.init();
}