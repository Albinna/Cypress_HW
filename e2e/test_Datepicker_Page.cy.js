/// <reference types="Cypress" />

import DatepickerPage from "./pages/Datepicker_Page";
import { DatepickerStep, datepickerStep } from "../steps/Datepicker_Page_steps";
import dayjs from "dayjs";


const datepickerPage = new DatepickerPage();

describe('Test Our Product page', () => {
  beforeEach(() => {
    cy.visit('https://www.webdriveruniversity.com/Datepicker/index.html');
  });

  it('Check Datepicker Page', () => {
    datepickerStep.verifyGetDatepickerTitle();
    datepickerStep.verifyGetSelectDateLabel();
    datepickerStep.verifyCheckDatepickerInputDateField();
    datepickerStep.openDatePickerPage;
  })

  it("Select the Next Day Date", () => {
    datepickerStep.verifySelectNextDay();
    datepickerStep.openDatePickerPage;
  });
  it("Select the Next Month", () => {
    datepickerStep.verifySelectNextMonth();
    datepickerStep.openDatePickerPage;
  });
  it("Select the Next Year", () => {
    datepickerStep.verifySelectNextYear();
    datepickerStep.openDatePickerPage;
  });
  it("Select Random Date", () => {
    datepickerStep.verifySelectRandomDate();
    datepickerStep.openDatePickerPage;
  });

});