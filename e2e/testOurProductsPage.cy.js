
/// <reference types="Cypress" />

import OurProductPage from "./pages/Our_Product_Page";
import { productModalTexts } from "../test-data/products-modal-text";
import { ourProductPageStep } from "../steps/OurProductPage_steps";
const ourProductPage = new OurProductPage;

const titleProductModalText = productModalTexts[0].text;
const bodyProductModalText = productModalTexts[1].text;

describe('Test Our Product page', () => {

  it.only('Check links in the container fluid', () =>{
    ourProductPageStep.visit();
    ourProductPageStep.verifyGetContainerFluid();
    ourProductPage.verifyGetHomeLink;
    // cy.contains('Home').should('be.visible');
    ourProductPageStep.verifyGetOurProductsLink;
    ourProductPageStep.verifyClickHomeLink();
    // cy.url().should('include', 'index.html');
    ourProductPageStep.verifyGetOurProductsLink;
    ourProductPageStep.visit();
    // cy.contains('Contact Us').should('be.visible');

    // ourProductPage.openOurProductPage();
    // ourProductPage.getContainerFluid();
    // cy.contains('Home').should('be.visible');
    // ourProductPage.clickHomeLink();
    // cy.url().should('include', 'index.html');
    // cy.contains('Our Products').should('be.visible');
    // cy.contains('Contact Us').should('be.visible');
    // ourProductPage.clickContactUsLink();
    // cy.url().should('include', 'contactus.html');
    // ourProductPage.getProductRow();
});

it('Check Special Offers Item in the Product row', () =>{
  ourProductPageStep.visit();

  // ourProductPage.openOurProductPage();
  // ourProductPage.getSpecialOffersTitle().should('be.visible');
  // ourProductPage.getSpecialOffersLink().click();
  // ourProductPage.getTitleProductModalText().should('exist');
  // ourProductPage.getBodyProductModalText().should('exist');
  // cy.contains('button', 'Proceed');
  // cy.contains('button', 'Close');
  // cy.get('button.close');
  // ourProductPage.getImgInSpecialOffersProduct().should('exist');

})


it('Check Cameras Item in the Product row', () =>{
  ourProductPage.openOurProductPage();
  ourProductPage.getCamerasTitle().should('be.visible');
  ourProductPage.getCamerasLink().click();
  ourProductPage.getTitleProductModalText().should('exist');
  ourProductPage.getBodyProductModalText().should('exist');
  cy.contains('button', 'Proceed');
  cy.contains('button', 'Close');
  cy.get('button.close');
  ourProductPage.getImgInCamerasProduct().should('exist');

})

it('Check Laptop Item in the Product row', () =>{
  ourProductPage.openOurProductPage();
  ourProductPage.getNewLaptopsTitle().should('be.visible');
  ourProductPage.getNewLaptopsLink().click();
  ourProductPage.getTitleProductModalText().should('exist');
  ourProductPage.getBodyProductModalText().should('exist');
  cy.contains('button', 'Proceed');
  cy.contains('button', 'Close');
  cy.get('button.close');
  ourProductPage.getImgInNewLaptops().should('exist');
})


it('Check Used Laptop Item in the Product row', () =>{
  ourProductPage.openOurProductPage();
  ourProductPage.getUsedLaptopsTitle().should('be.visible');
  ourProductPage.getUsedLaptopsLink().click();
  ourProductPage.getTitleProductModalText().should('exist');
  ourProductPage.getBodyProductModalText().should('exist');
  cy.contains('button', 'Proceed');
  cy.contains('button', 'Close');
  cy.get('button.close');
  ourProductPage.getImgInUsedLaptops().should('exist');
})

it('Check Game Consoles Item in the Product row', () =>{
  ourProductPage.openOurProductPage();
  ourProductPage.getGameConsolesTitle().should('be.visible');
  ourProductPage.getGameConsolesLink().click();
  ourProductPage.getTitleProductModalText().should('exist');
  ourProductPage.getBodyProductModalText().should('exist');
  cy.contains('button', 'Proceed');
  cy.contains('button', 'Close');
  cy.get('button.close');
  ourProductPage.getImgInGameConsoles().should('exist');
})


it('Check Components Item in the Product row', () =>{
  ourProductPage.openOurProductPage();
  ourProductPage.getComponentsTitle().should('be.visible');
  ourProductPage.getComponentsLink().click();
  ourProductPage.getTitleProductModalText().should('exist');
  ourProductPage.getBodyProductModalText().should('exist');
  cy.contains('button', 'Proceed');
  cy.contains('button', 'Close');
  cy.get('button.close');
  ourProductPage.getImgInComponents().should('exist');
})

it('Check Desktop Systems Item in the Product row', () =>{
  ourProductPage.openOurProductPage();
  ourProductPage.getDesktopSystemsTitle().should('be.visible');
  ourProductPage.getDesktopSystemsLink().click();
  ourProductPage.getTitleProductModalText().should('exist');
  ourProductPage.getBodyProductModalText().should('exist');
  cy.contains('button', 'Proceed');
  cy.contains('button', 'Close');
  cy.get('button.close');
  ourProductPage.getImgInDesktopSystems().should('exist');
})

it('Check Audio Item in the Product row', () =>{
  ourProductPage.openOurProductPage();
  ourProductPage.getAudioTitle().should('be.visible');
  ourProductPage.getAudioLink().click();
  ourProductPage.getTitleProductModalText().should('exist');
  ourProductPage.getBodyProductModalText().should('exist');
  cy.contains('button', 'Proceed');
  cy.contains('button', 'Close');
  cy.get('button.close');
  ourProductPage.getImgAudio().should('exist');
})

})