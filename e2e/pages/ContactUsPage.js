import { errors } from "../../test-data/errors";

export class ContactUsPage {
    visit(){
        cy.visit('http://www.webdriveruniversity.com/Contact-Us/contactus.html')
    }

    
static get getFirstName(){
    return cy.get('input[name="first_name"]');
}

static get getLastName(){
    return cy.get('input[name="last_name"]');
}

static get getLastNameByXpath(){
  return cy.xpath('//input[@name="last_name"]')
}

static get getEmail(){
    return cy.get('input[name="email"]');
}

static get getComment(){
    return cy.get('textarea[name="message"]');
}

static get getSubmitButton(){
    return cy.get('#form_buttons').contains('SUBMIT');
}

static get getResetButton(){
     return cy.get('#form_buttons').contains('RESET');
    // return cy.get('input.contact_button').contains('RESET');
    //('button.reset-button')
}
 
static get getClickResetButton(){
  return cy.get('div[value="RESET"]');
}

static get getContactUsHeader(){
    return cy.get('name="contactme"');
}

static get getSuccessSubmitMessage(){
    return cy.get('div#contact_reply > h1').contains('Thank You for your Message!');
}


 static fillContactUsForm(user){
    if(user.first_name){
    this.getFirstName().type(user.first_name);
    }
    if(user.last_name){
      this.getLastNameByXpath().type(user.last_name);
    }
    if(user.email){
      this.getEmail().type(user.email);
    }
    if(user.comment){
      this.getComment().type(user.comment);
    }
    this.getSubmitButton().click();
  }

  static get getInvalidEmailError(){
    return cy.contains(errors.invalidEmail);
  }

  static get getAllFieldsAreRequiredError(){
    return cy.contains(errors.allFieldsAreRequired);
  }
  
}

export default ContactUsPage