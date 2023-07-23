
import ContactUsPage from "./pages/ContactUsPage";
import HomePage from "./pages/Home_Page";
import { homePageSteps } from "../steps/home_page_steps";

const homePage = new HomePage();
// const homePageSteps = new HomePageSteps();

describe('Check Home Page', () => {
    it('Check block Who Are We?', () =>{
      homePageSteps.visit();
      homePageSteps.verifyWhoAreWeTitle();
      homePageSteps.verifyGetWhoAreWeText('//div[@class="caption"]/p[starts-with(text(), "Lorem")]');
      homePageSteps.verifyGetOutMoreButton();
      homePageSteps.openHomePage();
      // homePageSteps.verifyGetOutMoreButton('//div[@class="modal-body"]/p[starts-with(text(), "Welcome")]');
  })


  it('Check row carousel-holder', () => {
    homePageSteps.visit();
    homePageSteps.verifyGetCarouselInner1();
    homePageSteps.verifyGetCarouselInner2();
    homePageSteps.verifyGetCarouselInner3();
    homePageSteps.openHomePage();
   })

   it('Check Scroll Buttons', () => {
    homePageSteps.visit();
    homePageSteps.verifyGetScrollLeftButton();
    homePageSteps.verifyGetScrollRightButton();
    homePageSteps.openHomePage();
   })

   it('Check Carousel Indicators Buttons', () => {
    homePageSteps.visit();
    homePageSteps.verifyGetCarouselIndicatorsButtonSlideZero('li[data-slide-to="0"]');
    homePageSteps.verifyGetCarouselIndicatorsButtonSlideOne('li[data-slide-to="1"]');
    homePageSteps.verifyGetCarouselIndicatorsButtonSlideTwo('li[data-slide-to="1"]');
    homePageSteps.openHomePage();
   })

   it('Check elements in the container fluid', () =>{
    homePageSteps.visit();
    homePageSteps.verifyGetContainerFluid();  ('//div[@class = "container-fluid"]');
    homePageSteps.verifyDisplayHomeLink();  //('include', 'index.html');
    homePageSteps.verifyDisplayOurProductsLink(); //('//a[@href = "products.html"]');
    homePageSteps.verifyClickOurProductsLink();
    homePageSteps.verifyDisplayContactUsLink();   
    homePageSteps.verifyClickContactUsLink();
    homePageSteps.openHomePage();
    // homePageSteps.verifyDisplayHomeLink;
    // homePageSteps.verifyDisplayOurProductsLink;
    // homePageSteps.verifyDisplayContactUsLink;
    // homePageSteps.contains('Home').should('be.visible');
    // homePageSteps.verifyGetContainerFluid();
    // homePageSteps.url().should('include', 'index.html');
    // homePageSteps.contains('Our Products').should('be.visible');
    // homePageSteps.clickOurProductLink();
    // homePageSteps.url().should('include', 'products.html');
    // homePageSteps.contains('Contact Us').should('be.visible');
    // homePageSteps.clickContactUsLink();
    // homePageSteps.url().should('include', 'contactus.html');
    
    // homePage.visit();
    // homePage.getContainerFluid();
    // cy.contains('Home').should('be.visible');
    // cy.url().should('include', 'index.html');
    // cy.contains('Our Products').should('be.visible');
    // homePage.clickOurProductLink();
    // cy.url().should('include', 'products.html');
    // cy.contains('Contact Us').should('be.visible');
    // homePage.clickContactUsLink();
    // cy.url().should('include', 'contactus.html');

  })
      it('Check Why Choose Us? block', () =>{
        homePageSteps.visit();
        homePageSteps.verifyDisplayWhyChooseUsTitle();
        homePageSteps.verifyCheckDisplayFourTextLorem();
        homePageSteps.openHomePage();
         // homePage.visit();
        // homePage.DisplayWhyChooseUsTitle('have.text', 'Why Choose Us?');
        // homePage.getWhyChooseUsText().should('be.visible');
        // cy.xpath('//div[@class="thumbnail"]//div[@class="caption"]//p[contains(text(), "Lorem")]');
  })     


      it('Check GREAT SERVICE!? and Excellent Customer Service! blocks', () =>{
        homePageSteps.visit();
        homePageSteps.verifyDisplayGreatServiceTitle();
        homePageSteps.verifyDisplayExcellentCustomerServiceTitle();
        homePageSteps.verifyGetBlockWithStars();
        homePageSteps.openHomePage();

        // homePage.visit();
        // homePage.displayGreatServiceTitle().should('have.text', 'GREAT SERVICE!');
        // homePage.displayExcellentCustomerServiceTitle().should('have.text', 'Excellent Customer Service!');
        // homePage.getBlockWithStars();
        
      })
        
    })