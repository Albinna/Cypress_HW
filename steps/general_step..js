export class GeneralStep{

    openContactUsPage(){
        cy.visit('http://www.webdriveruniversity.com/Contact-Us/contactus.html')
        cy.url().should('include', 'contactus')
    }

    openDropdownPage(){
        cy.visit('http://www.webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html');
        cy.url().should('include', 'Dropdown-Checkboxes-RadioButtons');
    }

    openHomePage(){
        cy.visit('http://www.webdriveruniversity.com/Page-Object-Model/index.html')
        cy.url().should('include', 'Page-Object-Model');
    }

    openOurProductPage(){
        cy.visit('http://www.webdriveruniversity.com/Page-Object-Model/products.html')
        cy.url().should('include', 'products.html');
    }

    openAccordionPage(){
        cy.visit('https://www.webdriveruniversity.com/Accordion/index.html');
        cy.url().should('include', "Accordion");
    
    }
    openHiddenElementsPage(){
        cy.visit('https://www.webdriveruniversity.com/Hidden-Elements/index.html');
        cy.url().should('include', 'Hidden-Elements');
    }
   
    openDataTablePage(){
        cy.visit('https://www.webdriveruniversity.com/Data-Table/index.html')
        cy.url().should('include', 'Data-Table')
    }

    openDatepickerPage(){
        cy.visit('https://www.webdriveruniversity.com/Datepicker/index.html')
        cy.url().should('include', 'Datepicker')
    }

}