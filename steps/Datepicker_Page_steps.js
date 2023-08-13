import DatepickerPage from "../e2e/pages/Datepicker_Page";
import { GeneralStep } from "./general_step.";

export class DatepickerStep extends GeneralStep {
    openDatePickerPage() {
        cy.visit('https://www.webdriveruniversity.com/Datepicker/index.html');
        cy.url().should('include', 'Datepicker');
    }

    verifyGetDatepickerTitle(){
        DatepickerPage.getDatepickerTitle.should('be.visible');
    }

    verifyGetSelectDateLabel(){
        DatepickerPage.getSelectDateLabel.should('be.visible');
        
    }
    verifyCheckDatepickerInputDateField(){
        DatepickerPage.checkDatepickerInputDateField.should('be.visible');
    }
    verifySelectNextDay(){
        DatepickerPage.selectNextDay;
    }
    verifySelectNextMonth(){
        DatepickerPage.selectNextMonth(13);
    }

    verifySelectNextYear(){
        DatepickerPage.selectNextYear;
    }
    verifySelectRandomDate(){
        DatepickerPage.selectRandomDate;
    }

}

export const datepickerStep = new DatepickerStep();