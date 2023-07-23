import { accordions } from "../../test-data/accordions";

export class AccordionPage{
    static visit(){
        cy.visit('https://www.webdriveruniversity.com/Accordion/index.html');
        cy.url('include', "Accordion")
    }

    static get getCheckClickOnOneOfTheAccordianItemsBelowTitle(){
        return cy.xpath("//h1[contains(text(), 'Click on One of the Accordian Items Below!')]")
    }
//1
    static get getAccordianFirstTitle(){
        return cy.contains(accordions[0].title1);
    }

    // 2 Проверка начального состояния аккордеона
    static get getNoActiveManualTestingAccordion(){
        return cy.xpath('//button[@class = "accordion"][@id = "manual-testing-accordion"]');
     }
//3
     static get getClickOnTheManualTestingAccordion(){
        return cy.xpath('//button[@class="accordion"][@id ="manual-testing-accordion"]').click();
     }
//4
     static get getCheckThatTheManualTestingAccordionAfterClickIsOpen(){
        return cy.xpath('//button[@class="accordion active"][@id = "manual-testing-accordion"]');
     }
 //5    
     static get checkTextInTheManualTestingAccordion(){
      return cy.contains(accordions[0].description1);
   }
//1
static get getAccordianSecondTitle(){
      return cy.contains(accordions[1].title2);
     }

     //2
     static get getNoActiveCucumberAccordion(){
      return cy.xpath('//button[@class="accordion"][@id ="cucumber-accordion"]');
     }
//3
     static get getClickOnTheCucumberAccordion(){
      return cy.xpath('//button[@class="accordion"][@id ="cucumber-accordion"]').click();
     }
//4
     static get getCheckThatTheCucumberAccordionAfterClickIsOpen(){
      return cy.xpath('//button[@class="accordion active"][@id ="cucumber-accordion"]');
   }
//5
   static get checkTextInTheCucumberAccordion(){
      return cy.contains(accordions[1].description2);
     }
     //1
     static get getAccordianThirdTitle(){
      return cy.contains(accordions[2].title3);
     }
//2
     static get getNoActiveAutomationTestingAccordion(){
   return cy.xpath('//button[@class="accordion"][@id ="automation-accordion"]');

}
//3
     static get getClickOnTheAutomationTestingAccordion(){
      return cy.xpath('//button[@class="accordion"][@id ="automation-accordion"]').click();
     }
//4
     static get getCheckThatTheAutomationTestingAccordionAfterClickIsOpen(){
      return cy.xpath('//button[@class="accordion active"][@id ="automation-accordion"]');
   }
//5
   static get checkTextInTheAutomationTestingAccordion(){
      return cy.contains(accordions[2].description3);
     }
     //1
     static get getAccordianFourthTitle(){
      return cy.contains(accordions[3].title4);
     }
//2

static get getNoActiveKeepClickingAccordion(){
   return cy.xpath('//button[@class="accordion"][@id ="click-accordion"]', {timeout:10000})
}
//3
   static get getClickOnTheKeepClickingAccordion(){
      return cy.xpath('//button[@class="accordion"][@id ="click-accordion"]').click();
     }

     //4
   static get getCheckThatTheKeepClickingAccordionAfterClickIsOpen(){
      return cy.xpath('//button[@class="accordion active"][@id ="click-accordion"]');
   
     }

 //5

//  static get checkTextInTheKeepClickingAccordionAccordion(){
//    return cy.contains(accordions[3].description4);
//  }

 static get checkTextInTheKeepClickingAccordionAccordion(){
   return cy.xpath('//div[@class = "panel"][@id = "timeout"]', { timeout: 5000 }).should('be.visible');
  }
     

   //   getNoVisibleText(){
   //    return cy.contains('This text has appeared after 5 seconds!').invoke('css', 'display', 'block')
   //   }
     getNoDisplayedText(){
      return cy.contains('This text has appeared after 5 seconds!');
     }

     accordionsDescription() {
      return cy.contains(accordions[3].description4);
    }
    

     getCheckThatTheKeepClickingAccordionAfterClickIsOpen(){
      return cy.contains(accordions[3].description4, { timeout: 5000 }).should('be.visible');
     }
   // checkTextInTheAutomationTestingAccordion(){
   //    return cy.contains(accordions[3].description4);
   //   }
   // checkTimeOutKeepClickingAccordion(){
   //    return cy.xpath('//button[@class="accordion active"][@id ="click-accordion"]').should('be.visible').each(($accordion) => {
   //        AccordionPage.getClickOnTheKeepClickingAccordion();
   //       });
   //       }

   //   checkTextInTheKeepClickingAccordion(){
   //    // return cy.xpath('//button[@class="accordion active" and @id="click-accordion" and contains(text(), "Keep Clicking! - Text will Appear After 5 Seconds!")]');
   //    // return cy.contains(accordions[3].description4);
   //    return cy.xpath('//div[@class = "panel"][@id = "timeout"]')
   //   }
   //   //
   // //   getVisibleTextInTheKeepClickingAccordion() {
   // //    AccordionPage.invoke('attr', 'style', 'visibility: visible !important').click();
   // //  }

   // // getClickOnTheKeepClickingAccordion() {
   // //    cy.get('#click-accordion').invoke('attr', 'style', 'visibility: visible !important').should('have.text', 'This text has appeared after 5 seconds!')
   // //  }

   //  getNoDisplayedDescriptionInTheKeepClickingAccordion(){
   //    return cy.get('#timeout')
   //  }
    
    

     checkTimeOut(){
      return cy.xpath('//button[@class="accordion"][@id ="manual-testing-accordion"]').should('be.visible').each(($accordion) => {
          AccordionPage.getClickOnTheManualTestingAccordion();
         });
     }

     

   //   changeDisabledTextInTheKeepClickingAccordionByHTML() {
   //    AccordionPage.accordions[3].title4().should('not.be.disabled'); // Проверяем, что кнопка не отключена
   //    AccordionPage.accordions[3].content4().invoke('attr', 'style', 'display: block !important'); // Изменяем стиль элемента, чтобы он стал видимым
   //    AccordionPage.accordions[3].content4().should('be.visible', { force: true }); // Проверяем, что текст становится видимым
   //  }
    
    
}
export default AccordionPage;