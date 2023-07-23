/// <reference types="Cypress" />
import { hiddenElementsSteps } from "../steps/HiddenElementsPages_steps";
import { HiddenElementsPage } from "./pages/HiddenElementsPage";

describe("Hidden elements", () =>{

it("Click on the Not Displayed button" , () =>{
       cy.visit('https://www.webdriveruniversity.com/Hidden-Elements/index.html');
       cy.once('uncaught:exception', ()=> false);
       hiddenElementsSteps.clickNotDisplayedButtonByHTML();
    //    hiddenElementsSteps.openHiddenElementsPage();
    //    hiddenElementsSteps.getNavTitleInHiddenElementsPage()
})

it("Click on the Visibility button" , () =>{
    cy.visit('https://www.webdriveruniversity.com/Hidden-Elements/index.html');
    cy.once('uncaught:exception', ()=> false);
    hiddenElementsSteps.clickVisibilityButton();
    // hiddenElementsSteps.openHiddenElementsPage();
})

it("Click on the Zero Opacity button" , () =>{
    cy.visit('https://www.webdriveruniversity.com/Hidden-Elements/index.html');
    cy.once('uncaught:exception', ()=> false);
    hiddenElementsSteps.clickZeroOpacityButton();
})





})