import { PageObjectTest } from "./pages/Page-Object-Iframe";


const pageObjectTest = new PageObjectTest();

describe('Page Object', () => {
    it.only('Click on the Find Out More! button', () =>{
        cy.visit('https://www.webdriveruniversity.com/IFrame/index.html');
        pageObjectTest.getFindOutMoreButton().click();
        cy.get('IFrame').should('exist');
        //pageObjectTest.getIframeDocument()//.find('button').contains('Find Out More!').click();
        // pageObjectTest.getIframeBody();
        // pageObjectTest.getIframeFindOutMoreButton().click();
        // cy.getIframeBody('Iframe').find('button').contains('Find Out More').click();
        // // pageObjectTest.logMessage('Test message');
        // cy.task('hello', {name: "Test", age: 25});
    })
})