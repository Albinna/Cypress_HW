/// <reference types="Cypress" />

import { users } from "../test-data/users_test_data";
import ContactUsPage from "./pages/ContactUsPage";

//чтобы работать с классом ContactUsPage нужно создать объект этого класса
const contactUsPage = new ContactUsPage();

const userWithValidData = users[0];
const userEmptyEmail = users[1];
const userEmptyFirstName = users[2];
const userEmptyAllFields = users[3];
const userEmptyLastName = users[4];



describe('Test Contact Us form', () => {

    it(`Open and fill in the Contact Us form - with test case name ${userWithValidData.testName}`, () => {
        contactUsPage.visit();
        contactUsPage.fillContactUsForm(userWithValidData);
        //add assertion - что это сообщение существует
        contactUsPage.getSuccessSubmitMessage().should('exist');
        contactUsPage.getAllFieldsAreRequiredError().should('not.exist');
        contactUsPage.getInvalidEmailError().should('not.exist');
    })
    
    it(`Open and fill in the Contact Us form - with test case name ${userEmptyEmail.testName}`, () => {
        contactUsPage.visit();
        contactUsPage.fillContactUsForm(userEmptyEmail);
        //add assertion
        contactUsPage.getAllFieldsAreRequiredError().should('exist');
        contactUsPage.getInvalidEmailError().should('exist');
  })
  
   it.only(`Open and fill in the Contact Us form - with test case name ${userEmptyFirstName.testName}`, () => {
       contactUsPage.visit();
       contactUsPage.fillContactUsForm(userEmptyFirstName);
       //add assertion
       contactUsPage.getAllFieldsAreRequiredError().should('exist');
       contactUsPage.getInvalidEmailError().should('not.exist');
  
  })

  it(`Open and fill in the Contact Us form - with test case name ${userEmptyAllFields.testName}`, () => {
    contactUsPage.visit();
    contactUsPage.fillContactUsForm(userEmptyAllFields);
    //add assertion
    contactUsPage.getAllFieldsAreRequiredError().should('exist');
    contactUsPage.getInvalidEmailError().should('exist');
  })
  it.only(`Open and fill in the Contact Us form - with test case name ${userEmptyLastName.testName}`, () => {
    contactUsPage.visit();
    contactUsPage.fillContactUsForm(userEmptyLastName);
    //add assertion
    contactUsPage.getAllFieldsAreRequiredError().should('exist');
    contactUsPage.getInvalidEmailError().should('not.exist');

})

})