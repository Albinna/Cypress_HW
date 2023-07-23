import {ContactUsPage} from "../e2e/pages/ContactUsPage";
import { GeneralStep } from "./general_step.";

export class ContactUsStep extends GeneralStep{
  visit(){
    cy.visit('http://www.webdriveruniversity.com/Contact-Us/contactus.html');
    cy.url().should('include', 'contactus');

  }
fillContactUsForm(user){
    if(user.first_name){
    ContactUsPage.getFirstName.type(user.first_name);
    }
    if(user.last_name){
      ContactUsPage.getLastNameByXpath.type(user.last_name);
    }
    if(user.email){
      ContactUsPage.getEmail.type(user.email);
    }
    if(user.comment){
      ContactUsPage.getComment.type(user.comment);
    }
    // ContactUsPage.getSubmitButton.click(); // когда используем степы  - вырезаем
  }
  verifyContactUsForm(user){
    if(user.first_name){
      ContactUsPage.getFirstName.should('have.value', user.first_name);
      }
      if(user.last_name){
        ContactUsPage.getLastNameByXpath.should('have.value',user.last_name);
      }
      if(user.email){
        ContactUsPage.getEmail.should('have.value',user.email);
      }
      if(user.comment){
        ContactUsPage.getComment.should('have.value',user.comment);
      }

  }

  submitContactUsForm(){
    ContactUsPage.getSubmitButton.click();
  }  
  
  verifyThatSuccessMessageIsDisplayed(){
    ContactUsPage.getSuccessSubmitMessage.should('exist');
    ContactUsPage.getAllFieldsAreRequiredError.should('not.exist');
    ContactUsPage.getInvalidEmailError.should('not.exist');
}

verifyThatInvalidMessageIsDisplayed(){
  ContactUsPage.getAllFieldsAreRequiredError.should('exist');
  ContactUsPage.getInvalidEmailError.should('exist');
}

verifyThatAllFieldsAreRequiredErrorIsDisplayed(){
  ContactUsPage.getAllFieldsAreRequiredError.should('exist');
}

}

export const contactUsStep = new ContactUsStep();




  