export function initCalendar(container){
    const options = {
        input: true,
        actions: {
            changeToInput(e, self) {
                if (!self.HTMLInputElement) return;
                if (self.selectedDates[0]) {
                    self.HTMLInputElement.querySelector('.form-item__calendar').value = self.selectedDates[0];
                    self.hide();
                } else {
                    self.HTMLInputElement.querySelector('.form-item__calendar').value = '';
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