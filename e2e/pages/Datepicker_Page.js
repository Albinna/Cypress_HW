import dayjs from "dayjs";

export class DatepickerPage {
    visit() {
        cy.visit('https://www.webdriveruniversity.com/Datepicker/index.html')
    }

    static get getDatepickerTitle() {
        return cy.xpath("//h1[. = 'Datepicker']");
    }

    static get getSelectDateLabel() {
        return cy.xpath("//label[contains(text(), 'Select Date: ')]").should('be.visible');
    }

    static get checkDatepickerInputDateField() {
        return cy.get('div#datepicker').should('be.visible');
    }

    static get datepickerDropdown() {
        return cy.get("#datepicker")
    }

    static get datepickerInput() {
        return cy.get("input.form-control");
    }

    static get selectNextDay() {
        this.datepickerInput.should("be.visible");
        const today = dayjs();

        const nextDayDate = today.add(1, 'day').format('MM-DD-YYYY');
        const nextDay = today.add(1, 'day').date().toString();

        this.datepickerInput.click();

        cy.contains(".day", nextDay).click();

        this.datepickerInput.should("have.value", nextDayDate);
    }

    static selectNextMonth(dayOfMonth) {
        this.datepickerInput.should("be.visible");
        const today = dayjs();

        const nextMonthDate = today.add(1, 'month').set('date', dayOfMonth).format('MM-DD-YYYY');

        this.datepickerInput.click();
        // Нажимаем кнопку переключения на следующий месяц
        cy.get('.datepicker-days .next').click();
        cy.xpath("//th[@class = 'next'][@style = 'visibility: visible;']").should('be.visible')
        cy.get('tr td.day').contains('13').click()

        // Проверяем, что значение в поле ввода обновилось 
        this.datepickerInput.should("have.value", nextMonthDate);
    }

    static get selectNextYear() {
        this.datepickerInput.should("be.visible");
        const today = dayjs();

        // const nextYearDate = today.add(1, 'year').set('dayOfYear', dayOfYear).format('MM-DD-YYYY');

        this.datepickerInput.click();

        cy.xpath("//th[@colspan= '5'][@class = 'datepicker-switch'][contains(text(), '2023')]").click({ multiple: true })
        cy.xpath("//span[@class = 'year'][contains(text(), '2024')]").click();
        cy.xpath("//span[@class = 'month'][contains(text(), 'Sep')]").click();
        cy.xpath("//td[@class = 'day'][contains(text(), '13')]").click();
        cy.get('input.form-control').should(($input) => {
            expect($input.val()).to.eq("09-13-2024");
        });
    }

    static get selectRandomDate() {
        this.datepickerInput.should("be.visible");
        const today = dayjs();

        this.datepickerInput.click();

        cy.xpath("//th[@colspan= '5'][@class = 'datepicker-switch'][contains(text(), '2023')]").click({ multiple: true })
        cy.xpath("//span[@class = 'year'][contains(text(), '2027')]").click();
        cy.xpath("//span[@class = 'month'][contains(text(), 'Apr')]").click();
        cy.xpath("//td[@class = 'day'][contains(text(), '27')]").should('be.visible');
        cy.xpath("//td[@class = 'day'][contains(text(), '27')]").click();
        cy.get('input.form-control').should(($input) => {
            expect($input.val()).to.eq("04-27-2027");
        });
    }
}

export default DatepickerPage;