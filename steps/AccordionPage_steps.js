import { AccordionPage } from "../e2e/pages/AccordionPage";
import { GeneralStep } from "./general_step.";

export class AccordionPageSteps extends GeneralStep{
    visit(){
        cy.visit('https://www.webdriveruniversity.com/Accordion/index.html');
        cy.url().should('include', "Accordion")
}

verifyClickOnOneOfTheAccordianItemsBelowTitle(){
    AccordionPage.clickOnOneOfTheAccordianItemsBelowTitle.should('exist');
}
verifyAccordianFirstTitle(){
    AccordionPage.getAccordianFirstTitle.should('exist');
}

verifyGetNoActiveManualTestingAccordion(){
    AccordionPage.getNoActiveManualTestingAccordion.should('be.visible');
}

// verifyCheckThatManualTestingAccordionIsClosed(){
//     AccordionPage.checkThatManualTestingAccordionIsClosed.should('be.visible');
// }

verifyGetClickOnTheManualTestingAccordion(){
    AccordionPage.getClickOnTheManualTestingAccordion.should('be.visible');
}

verifyGetCheckThatTheManualTestingAccordionAfterClickIsOpen() {
    AccordionPage.getCheckThatTheManualTestingAccordionAfterClickIsOpen.should('be.visible');
  }

verifyCheckTextInTheManualTestingAccordion(){
    AccordionPage.checkTextInTheManualTestingAccordion.should('be.visible');
}

verifyGetAccordianSecondTitle(){
    AccordionPage.getAccordianSecondTitle.should('exist');
}

verifyGetNoActiveCucumberAccordion(){
    AccordionPage.getNoActiveCucumberAccordion.should('be.visible');
}
  verifyGetClickOnTheCucumberAccordion(){
    AccordionPage.getClickOnTheCucumberAccordion.should('be.visible');

  }

  verifyGetCheckThatTheCucumberAccordionAfterClickIsOpen(){
    AccordionPage.getCheckThatTheCucumberAccordionAfterClickIsOpen.should('be.visible');
  }

  verifyCheckTextInTheCucumberAccordion(){
    AccordionPage.checkTextInTheCucumberAccordion.should('be.visible');
  }

  verifyGetAccordianThirdTitle(){
    AccordionPage.getAccordianThirdTitle.should('exist');
  }
  verifyGetNoActiveAutomationTestingAccordion(){
    AccordionPage.getNoActiveAutomationTestingAccordion.should('be.visible');
  }

  verifyGetClickOnTheAutomationTestingAccordion(){
    AccordionPage.getClickOnTheAutomationTestingAccordion.should('be.visible');
  }
  verifyGetCheckThatTheAutomationTestingAccordionAfterClickIsOpen(){
    AccordionPage.getCheckThatTheAutomationTestingAccordionAfterClickIsOpen.should('be.visible');
  }
  verifyCheckTextInTheAutomationTestingAccordion(){
    AccordionPage.checkTextInTheAutomationTestingAccordion.should('be.visible');
  }

  verifyGetAccordianFourthTitle(){
    AccordionPage.getAccordianFourthTitle.should('exist');
  }

  verifyGetNoActiveKeepClickingAccordion(){
    AccordionPage.getNoActiveKeepClickingAccordion.should('be.visible');
  }
  verifyGetClickOnTheKeepClickingAccordion(){
    AccordionPage.getClickOnTheKeepClickingAccordion.should('be.visible');
  }
  verifyGetCheckThatTheKeepClickingAccordionAfterClickIsOpen(){
    AccordionPage.getCheckThatTheKeepClickingAccordionAfterClickIsOpen.should('be.visible');
  }
//   verifyCheckTextInTheKeepClickingAccordionAccordion(){
//     AccordionPage.checkTextInTheKeepClickingAccordionAccordion.should('not.be.visible');
//   }
  verifyCheckTextInTheKeepClickingAccordionAccordion(){
    AccordionPage.checkTextInTheKeepClickingAccordionAccordion.should('be.visible');
  }

}
export const accordionPageSteps = new AccordionPageSteps();