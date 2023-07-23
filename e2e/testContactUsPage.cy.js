/// <reference types="Cypress" />
import { users } from "../test-data/users_test_data";
import ContactUsPage from "./pages/ContactUsPage";
import { ContactUsStep, contactUsStep } from "../steps/contact_us_steps";

//чтобы работать с классом ContactUsPage нужно создать объект этого класса
const contactUsPage = new ContactUsPage();

const userWithValidData = users[0];
const userEmptyEmail = users[1];
const userEmptyFirstName = users[2];
const userEmptyAllFields = users[3];
const userEmptyLastName = users[4];
// const homePage = HomePage();

// homePage.getButtonByButtonName('Find Out');


describe('Test Contact Us form', () => {

    it(`Open and fill in the Contact Us form - with test case name ${userWithValidData.testName}`, () => {
        // contactUsPage.visit();
        contactUsStep.visit(); // поменяли contactUsPage на contactUsStep
        // contactUsPage.fillContactUsForm(userWithValidData);
        contactUsStep.fillContactUsForm(userWithValidData); // поменяли contactUsPage на contactUsStep
        contactUsStep.verifyContactUsForm(userWithValidData);
        contactUsStep.submitContactUsForm();
        contactUsStep.verifyThatSuccessMessageIsDisplayed();
        contactUsStep.openContactUsPage();
        //убираем () когда объявдяем static get  в степах
        // ContactUsPage.getSuccessSubmitMessage.should('exist');
        // ContactUsPage.getAllFieldsAreRequiredError.should('not.exist');
        // ContactUsPage.getInvalidEmailError.should('not.exist');
        //add assertion - что это сообщение существует
        // contactUsPage.getSuccessSubmitMessage().should('exist');
        // contactUsPage.getAllFieldsAreRequiredError().should('not.exist');
        // contactUsPage.getInvalidEmailError().should('not.exist');
    })
    
    it(`Open and fill in the Contact Us form - with test case name ${userEmptyEmail.testName}`, () => {
      contactUsStep.visit();
      contactUsStep.fillContactUsForm(userEmptyEmail); 
      contactUsStep.submitContactUsForm();
      contactUsStep.verifyThatAllFieldsAreRequiredErrorIsDisplayed();
      contactUsStep.verifyThatInvalidMessageIsDisplayed();
      contactUsStep.openContactUsPage();
        // contactUsPage.getInvalidEmailError().should('exist');
        // contactUsPage.visit();
        // contactUsPage.fillContactUsForm(userEmptyEmail);
        // //add assertion
        // contactUsPage.getAllFieldsAreRequiredError().should('exist');
        // contactUsPage.getInvalidEmailError().should('exist');
  })
  
   it(`Open and fill in the Contact Us form - with test case name ${userEmptyFirstName.testName}`, () => {
    contactUsStep.visit();
    contactUsStep.fillContactUsForm(userEmptyFirstName); 
    contactUsStep.submitContactUsForm();
    contactUsStep.verifyThatAllFieldsAreRequiredErrorIsDisplayed();
    contactUsStep.openContactUsPage();
    // contactUsStep.verifyThatSuccessMessageIsDisplayed();
  //      contactUsPage.visit();
  //      contactUsPage.fillContactUsForm(userEmptyFirstName);
  //      //add assertion
  //      contactUsPage.getAllFieldsAreRequiredError().should('exist');
  //      contactUsPage.getInvalidEmailError().should('not.exist');
  
  })

  it(`Open and fill in the Contact Us form - with test case name ${userEmptyAllFields.testName}`, () => {
    contactUsStep.visit();
    contactUsStep.fillContactUsForm(userEmptyAllFields);
    contactUsStep.submitContactUsForm();
    contactUsStep.verifyThatAllFieldsAreRequiredErrorIsDisplayed();
    contactUsStep.verifyThatInvalidMessageIsDisplayed();
    contactUsStep.openContactUsPage();
    // contactUsPage.visit();
    // contactUsPage.fillContactUsForm(userEmptyAllFields);
    // //add assertion
    // contactUsPage.getAllFieldsAreRequiredError().should('exist');
    // contactUsPage.getInvalidEmailError().should('exist');
  })
  it(`Open and fill in the Contact Us form - with test case name ${userEmptyLastName.testName}`, () => {
    contactUsStep.visit();
    contactUsStep.fillContactUsForm(userEmptyLastName);
    contactUsStep.submitContactUsForm();
    contactUsStep.verifyThatAllFieldsAreRequiredErrorIsDisplayed();
    contactUsStep.openContactUsPage();
    // contactUsPage.visit();
    // contactUsPage.fillContactUsForm(userEmptyLastName);
    // //add assertion
    // contactUsPage.getAllFieldsAreRequiredError().should('exist');
    // contactUsPage.getInvalidEmailError().should('not.exist');

})

})