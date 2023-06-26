
/// <reference types="Cypress" />

import OurProductPage from "./pages/Our_Product_Page";
const ourProductPage = new OurProductPage;

describe('Test Our Product page', () => {
  it('Visit Our Product page', () => {
    cy.visit('http://www.webdriveruniversity.com/Page-Object-Model/products.html')
  })

  it('Find container fluid', () =>{

    ourProductPage.openOurProductPage();
    ourProductPage.getContainerFluid();
});

it('Find Home Link', () => {
  ourProductPage.openOurProductPage();
  cy.contains('Home').should('be.visible');
});

it('Should navigate to Home page when clicking on Home link', () => {
  ourProductPage.openOurProductPage();
  ourProductPage.clickHomeLink();
  cy.url().should('include', 'index.html');

})

it('Find Our Products link', () => {
  ourProductPage.openOurProductPage();
  cy.contains('Our Products').should('be.visible');

})


it('Find Contact Us Link',  () => {
  ourProductPage.openOurProductPage();
  cy.contains('Contact Us').should('be.visible');
       
  })

  it('Should navigate to Contact Us form when clicking on Contact Us link', () => {
    ourProductPage.openOurProductPage();
    ourProductPage.clickContactUsLink();
    cy.url().should('include', 'contactus.html');

})

it('Find Product row', () =>{

  ourProductPage.openOurProductPage();
  ourProductPage.getProductRow();
});

it.only('Get Special Offers Title in the Product row', () =>{

  ourProductPage.openOurProductPage();
  ourProductPage.getSpecialOffersTitle().should('be.visible');
})

it.only('Get img in Special Offers product in Product row', () => {

  ourProductPage.openOurProductPage();
  ourProductPage.getImginSpecialOffersProduct().should('exist');
})

it.only('should display the text after clicking on Special Offers link', () =>{
  ourProductPage.openOurProductPage();
  ourProductPage.getSpecialOffersLink().click();
  cy.contains('SPECIAL OFFER! - GET 30% OFF YOUR FIRST ORDER AT WEBDRIVERUNIVERSITY.COM')
  cy.contains('Please Note: All orders must be over the value of £50, adding additional coupon codes to the basket are excluded from this offer. To receive 30% off please add the following code to the basket:').should('be.visible');
  cy.contains('button', 'Proceed');
  cy.contains('button', 'Close');
  cy.get('button.close');
})

it.only('should get Cameras Title in the Product row', () =>{
  ourProductPage.openOurProductPage();
  ourProductPage.getCamerasTitle().should('be.visible');
})


it.only('Get a Cameras product in Product row', () => {

  ourProductPage.openOurProductPage();
  ourProductPage.getImgInCamerasProduct().should('exist');
})

it('should display the text after clicking on Cameras link', () =>{
  ourProductPage.openOurProductPage();
  ourProductPage.getCamerasLink().click();
  cy.contains('SPECIAL OFFER! - GET 30% OFF YOUR FIRST ORDER AT WEBDRIVERUNIVERSITY.COM')
  cy.contains('Please Note: All orders must be over the value of £50, adding additional coupon codes to the basket are excluded from this offer. To receive 30% off please add the following code to the basket:').should('be.visible');
  cy.contains('button', 'Proceed');
  cy.contains('button', 'Close');
  cy.get('button.close');
})

it('Get New Laptop Title in the Product row', () =>{
  ourProductPage.openOurProductPage();
  ourProductPage.getNewLaptopsTitle().should('be.visible');
})

it('Get a New Laptops product in Product row', () => {

  ourProductPage.openOurProductPage();
  ourProductPage.getImgInNewLaptops().should('exist');
})


it('should display the text after clicking on New Laptops link', () =>{
  ourProductPage.openOurProductPage();
  ourProductPage.getNewLaptopsLink().click();
  cy.contains('SPECIAL OFFER! - GET 30% OFF YOUR FIRST ORDER AT WEBDRIVERUNIVERSITY.COM')
  cy.contains('Please Note: All orders must be over the value of £50, adding additional coupon codes to the basket are excluded from this offer. To receive 30% off please add the following code to the basket:').should('be.visible');
  cy.contains('button', 'Proceed');
  cy.contains('button', 'Close');
  cy.get('button.close');
})
//

it.only('Get Used Laptop Title in the Product row', () =>{
  ourProductPage.openOurProductPage();
  ourProductPage.getUsedLaptopsTitle().should('be.visible');
})

it.only('Get a Used Laptops product in Product row', () => {

  ourProductPage.openOurProductPage();
  ourProductPage.getImgInUsedLaptops().should('exist');
})


it.only('should display the text after clicking on Used Laptops link', () =>{
  ourProductPage.openOurProductPage();
  ourProductPage.getNewLaptopsLink().click();
  cy.contains('SPECIAL OFFER! - GET 30% OFF YOUR FIRST ORDER AT WEBDRIVERUNIVERSITY.COM')
  cy.contains('Please Note: All orders must be over the value of £50, adding additional coupon codes to the basket are excluded from this offer. To receive 30% off please add the following code to the basket:').should('be.visible');
  cy.contains('button', 'Proceed');
  cy.contains('button', 'Close');
  cy.get('button.close');
})
//

it.only('Get Game Consoles Title in the Product row', () =>{
  ourProductPage.openOurProductPage();
  ourProductPage.getGameConsolesTitle().should('be.visible');
})

it.only('Get a Game Consoles product in Product row', () => {

  ourProductPage.openOurProductPage();
  ourProductPage.getImgInGameConsoles().should('exist');
})


it.only('should display the text after clicking on Game Consoles link', () =>{
  ourProductPage.openOurProductPage();
  ourProductPage.getGameConsolesLink().click();
  cy.contains('SPECIAL OFFER! - GET 30% OFF YOUR FIRST ORDER AT WEBDRIVERUNIVERSITY.COM')
  cy.contains('Please Note: All orders must be over the value of £50, adding additional coupon codes to the basket are excluded from this offer. To receive 30% off please add the following code to the basket:').should('be.visible');
  cy.contains('button', 'Proceed');
  cy.contains('button', 'Close');
  cy.get('button.close');
})
//
it.only('Get Components Title in the Product row', () =>{
  ourProductPage.openOurProductPage();
  ourProductPage.getComponentsTitle().should('be.visible');
})

it.only('Get a Components product in Product row', () => {

  ourProductPage.openOurProductPage();
  ourProductPage.getImgInComponents().should('exist');
})


it.only('should display the text after clicking on Components link', () =>{
  ourProductPage.openOurProductPage();
  ourProductPage.getComponentsLink().click();
  cy.contains('SPECIAL OFFER! - GET 30% OFF YOUR FIRST ORDER AT WEBDRIVERUNIVERSITY.COM')
  cy.contains('Please Note: All orders must be over the value of £50, adding additional coupon codes to the basket are excluded from this offer. To receive 30% off please add the following code to the basket:').should('be.visible');
  cy.contains('button', 'Proceed');
  cy.contains('button', 'Close');
  cy.get('button.close');
})
//

it.only('Get Desktop Systems Title in the Product row', () =>{
  ourProductPage.openOurProductPage();
  ourProductPage.getDesktopSystemsTitle().should('be.visible');
})

it.only('Get a Desktop Systems product in Product row', () => {

  ourProductPage.openOurProductPage();
  ourProductPage.getImgInDesktopSystems().should('exist');
})


it.only('should display the text after clicking on Desktop Systems link', () =>{
  ourProductPage.openOurProductPage();
  ourProductPage.getDesktopSystemsLink().click();
  cy.contains('SPECIAL OFFER! - GET 30% OFF YOUR FIRST ORDER AT WEBDRIVERUNIVERSITY.COM')
  cy.contains('Please Note: All orders must be over the value of £50, adding additional coupon codes to the basket are excluded from this offer. To receive 30% off please add the following code to the basket:').should('be.visible');
  cy.contains('button', 'Proceed');
  cy.contains('button', 'Close');
  cy.get('button.close');
})
//
it.only('Get Audio Title in the Product row', () =>{
  ourProductPage.openOurProductPage();
  ourProductPage.getAudioTitle().should('be.visible');
})

it.only('Get a Audio product in Product row', () => {

  ourProductPage.openOurProductPage();
  ourProductPage.getImgAudio().should('exist');
})


it.only('should display the text after clicking on Audio link', () =>{
  ourProductPage.openOurProductPage();
  ourProductPage.getAudioLink().click();
  cy.contains('SPECIAL OFFER! - GET 30% OFF YOUR FIRST ORDER AT WEBDRIVERUNIVERSITY.COM')
  cy.contains('Please Note: All orders must be over the value of £50, adding additional coupon codes to the basket are excluded from this offer. To receive 30% off please add the following code to the basket:').should('be.visible');
  cy.contains('button', 'Proceed');
  cy.contains('button', 'Close');
  cy.get('button.close');
})

})