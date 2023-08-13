export class HiddenElementsPage{
    openHiddenElementsPage(){
        cy.visit('https://www.webdriveruniversity.com/Hidden-Elements/index.html')
        cy.url().should('include', 'Hidden-Elements')
    }
    static get getNoDisplayedButton(){
        return cy.get('#button1')
    }

    static get getVisibilityButton(){
        return cy.get('#button2')
    }

    static get getZeroOpacityButton(){
        return cy.get('#button3')
    }

    static get getModalClick(){
        return cy.get('#myModalClick')
    }

    static get getModalJSlClick(){
        return cy.get('#myModalJSClick')
    }
    static get getModalMoveClick(){
        return cy.get('#myModalMoveClick')
    }

    static get getNavTitleInHiddenElementsPage(){
        return cy.xpath('//a[@class = "navbar-brand"][@href = "..\index.html"]')
    }

}