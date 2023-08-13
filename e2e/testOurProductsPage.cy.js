
/// <reference types="Cypress" />

import OurProductPage from "./pages/Our_Product_Page";
import { productModalTexts } from "../test-data/products-modal-text";
import { ourProductPageStep } from "../steps/OurProductPage_steps";
const ourProductPage = new OurProductPage;

const titleProductModalText = productModalTexts[0].text;
const bodyProductModalText = productModalTexts[1].text;

describe('Test Our Product page', () => {
  beforeEach(() => {
    cy.visit('http://www.webdriveruniversity.com/Page-Object-Model/products.html');
  });

  it('Check links in the container fluid', () =>{
    // ourProductPageStep.visit();
    ourProductPageStep.verifyGetContainerFluid();
    ourProductPageStep.verifyGetHomeLink;
    // cy.contains('Home').should('be.visible');
    ourProductPageStep.verifyGetOurProductsLink;
    ourProductPageStep.verifyClickHomeLink();
    // cy.url().should('include', 'index.html');
    ourProductPageStep.verifyGetOurProductsLink;
    ourProductPageStep.visit();
    ourProductPageStep.openOurProductPage();
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
  ourProductPageStep.verifyGetSpecialOffersTitle();
  ourProductPageStep.verifyGetSpecialOffersLink();
  ourProductPageStep.verifyGetTitleProductModalText();
  ourProductPageStep.verifyGetBodyProductModalText()
  cy.contains('button', 'Proceed');
  cy.contains('button', 'Close');
  cy.get('button.close');
  ourProductPageStep.verifyGetImgInSpecialOffersProduct();
  ourProductPageStep.openOurProductPage();
})


it('Check Cameras Item in the Product row', () =>{
  ourProductPageStep.verifyGetCamerasTitle();
  ourProductPageStep.verifyGetCamerasLink();
  ourProductPageStep.verifyGetTitleProductModalText();
  ourProductPageStep.verifyGetBodyProductModalText();
  cy.contains('button', 'Proceed');
  cy.contains('button', 'Close');
  cy.get('button.close');
  ourProductPageStep.verifyGetImgInCamerasProduct();
  ourProductPageStep.openOurProductPage();
})

it('Check Laptop Item in the Product row', () =>{
  ourProductPageStep.verifyGetNewLaptopsTitle();
  ourProductPageStep.verifyGetNewLaptopsLink();
  ourProductPageStep.verifyGetTitleProductModalText();
  ourProductPageStep.verifyGetBodyProductModalText();
  cy.contains('button', 'Proceed');
  cy.contains('button', 'Close');
  cy.get('button.close');
  ourProductPageStep.verifyGetImgInNewLaptops();
  ourProductPageStep.openOurProductPage();
})


it('Check Used Laptop Item in the Product row', () =>{
  ourProductPageStep.verifyGetUsedLaptopsTitle();
  ourProductPageStep.verifyGetUsedLaptopsLink();
  ourProductPageStep.verifyGetTitleProductModalText();
  ourProductPageStep.verifyGetBodyProductModalText();
  cy.contains('button', 'Proceed');
  cy.contains('button', 'Close');
  cy.get('button.close');
  ourProductPageStep.verifyGetImgInUsedLaptops();
  ourProductPageStep.openOurProductPage();
})

it('Check Game Consoles Item in the Product row', () =>{
  ourProductPageStep.verifyGetGameConsolesTitle();
  ourProductPageStep.verifyGetGameConsolesLink();
  ourProductPageStep.verifyGetTitleProductModalText();
  ourProductPageStep.verifyGetBodyProductModalText();
  cy.contains('button', 'Proceed');
  cy.contains('button', 'Close');
  cy.get('button.close');
  ourProductPageStep.verifyGetImgInGameConsoles();
  ourProductPageStep.openOurProductPage();
})


it('Check Components Item in the Product row', () =>{
  ourProductPageStep.verifyGetComponentsTitle();
  ourProductPageStep.verifyGetComponentsLink();
  ourProductPageStep.verifyGetTitleProductModalText();
  ourProductPageStep.verifyGetBodyProductModalText();
  cy.contains('button', 'Proceed');
  cy.contains('button', 'Close');
  cy.get('button.close');
  ourProductPageStep.verifyGetImgInComponents();
  ourProductPageStep.openOurProductPage();
})

it('Check Desktop Systems Item in the Product row', () =>{
  ourProductPageStep.verifyGetDesktopSystemsTitle();
  ourProductPageStep.verifyGetDesktopSystemsLink();
  ourProductPageStep.verifyGetTitleProductModalText();
  ourProductPageStep.verifyGetBodyProductModalText();
  cy.contains('button', 'Proceed');
  cy.contains('button', 'Close');
  cy.get('button.close');
  ourProductPageStep.verifyGetImgInDesktopSystems();
  ourProductPageStep.openOurProductPage();
})

it('Check Audio Item in the Product row', () =>{
  ourProductPageStep.verifyGetAudioTitle();
  ourProductPageStep.verifyGetAudioLink();
  ourProductPageStep.verifyGetTitleProductModalText();
  ourProductPageStep.verifyGetBodyProductModalText();
  cy.contains('button', 'Proceed');
  cy.contains('button', 'Close');
  cy.get('button.close');
  ourProductPageStep.verifyGetImgAudio();
  ourProductPageStep.openOurProductPage();
})

})