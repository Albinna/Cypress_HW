import { AccordionPage } from "./pages/AccordionPage";
import { accordions } from "../test-data/accordions";
import { accordionPageSteps } from "../steps/AccordionPage_steps";

const accordionPage = new AccordionPage;


describe('Accordion Page', () => {
  it('Check Title in the Accordion Page', () =>{
    accordionPageSteps.visit();
    cy.contains('Click on One of the Accordian Items Below!').should('be.visible');
  })
    
  
      it.only('Check Manual Testing Accordion', () =>{
      accordionPageSteps.visit();
      cy.contains('Manual Testing');
      // // проверить что аккордион закрыт
      accordionPageSteps.verifyGetNoActiveManualTestingAccordion();
      accordionPageSteps.verifyGetClickOnTheManualTestingAccordion();
      accordionPageSteps.verifyGetCheckThatTheManualTestingAccordionAfterClickIsOpen();
      accordionPageSteps.verifyCheckTextInTheManualTestingAccordion();
      accordionPageSteps.openAccordionPage();
    
    })

    it('Check Cucumber Accordion', () =>{
      accordionPageSteps.visit();
      cy.contains('Cucumber BDD').should('be.visible');
      accordionPageSteps.verifyGetNoActiveCucumberAccordion();
      accordionPageSteps.verifyGetClickOnTheCucumberAccordion();
      accordionPageSteps.verifyGetCheckThatTheCucumberAccordionAfterClickIsOpen();
      accordionPageSteps.verifyCheckTextInTheCucumberAccordion();
      accordionPageSteps.openAccordionPage();
    })

    it('Check Automation Testing Accordion', () =>{
      accordionPageSteps.visit();
      cy.contains('Automation Testing').should('be.visible');
      accordionPageSteps.verifyGetNoActiveAutomationTestingAccordion();
      accordionPageSteps.verifyGetClickOnTheAutomationTestingAccordion();
      accordionPageSteps.verifyGetCheckThatTheAutomationTestingAccordionAfterClickIsOpen();
      accordionPageSteps.verifyCheckTextInTheAutomationTestingAccordion();
      accordionPageSteps.openAccordionPage();
    })

    it('Check Keep Clicking Accordion', () =>{
      accordionPageSteps.visit();
      cy.contains('Keep Clicking! - Text will Appear After 5 Seconds!').should('be.visible');
      accordionPageSteps.verifyGetNoActiveKeepClickingAccordion();
      accordionPageSteps.verifyGetClickOnTheKeepClickingAccordion();
      accordionPageSteps.verifyGetCheckThatTheKeepClickingAccordionAfterClickIsOpen();
      accordionPageSteps.verifyCheckTextInTheKeepClickingAccordionAccordion();
      accordionPageSteps.openAccordionPage();
    })


      it('Should have a delay before opening accordions', () => {
        AccordionPage.visit();
        AccordionPage.checkTimeOut;
        cy.xpath('//button[@class="accordion"][@id ="manual-testing-accordion"]').each(($accordion) => {
              // Проверяем, что аккордион закрыт
              cy.wrap($accordion).should('not.have.class', 'active');
        
              // Задержка перед открытием аккордиона
              cy.wait(5000); 
              // Кликаем на аккордион для открытия
              cy.wrap($accordion).click();
        
              // Проверяем, что аккордион открыт
              cy.wrap($accordion).should('have.class', 'active');
        
      });
    });
  });
     
     