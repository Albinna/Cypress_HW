/// <reference types="Cypress" />

import HomePage from "./pages/Home_Page";
const homePage = new HomePage();

describe('Test Home Page', () => {
    it('text should contain Who Are We?', () =>{

      homePage.openHomePage();
      homePage.getWhoAreWeTitle().should('have.text', 'Who Are We?');
      
    }) 

    it('should have some text in the "Who Are We?" block', () =>{
      homePage.openHomePage();
      homePage.getWhoAreWeText().should('have.text', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi elit sapien, tempus sit amet hendrerit volutpat, euismod vitae risus. Etiam consequat, sem et vulputate dapibus, diam enim tristique est, vitae porta eros mauris ut orci. Praesent sed velit odio. Ut massa arcu, suscipit viverra molestie at, aliquet a metus. Nullam sit amet tellus dui, ut tincidunt justo. Lorem ipsum dolor sit amet, consectetur adipiscing elit.');
  })

    it('find button "Find Out More!" and click', () =>{
    
      homePage.openHomePage();
      homePage.getOutMoreButton().click();

  })
  it.only('should display the text after clicking on Find Out More button', () =>{
    homePage.openHomePage();
    homePage.getOutMoreButton().click();
    cy.contains('Welcome to webdriveruniversity.com we sell a wide range of electrical goods such as laptops, game consoles, cameras...').should('be.visible');
})

  it('Get an element 1 in Carousel Inner', () => {

    homePage.openHomePage();
    homePage.getCarouselInner().should('exist');

    })

    it('Get an element 2 in Carousel Inner', () => {

      homePage.openHomePage();
      homePage.getCarouselInner().should('exist');
  
      })

      it('Get an element 3 in Carousel Inner', () => {

        homePage.openHomePage();
        homePage.getCarouselInner().should('exist');
    
        })

       it('Click on the left carousel button', () => {
        
         homePage.openHomePage();
         homePage.getScrollLeftButton().click();

       })

       it('Click on the right carousel button', () => {
        
        homePage.openHomePage();
        homePage.getScrollRightButton().click();

      })


       it('Click carousel slide 0',  () => {
        
          homePage.openHomePage();
          homePage.getCarouselIndicatorsButtonSlideZero().click();
          
          
       })
      
       it('Click carousel slide 1',  () => {
        
        homePage.openHomePage();
        homePage.getCarouselIndicatorsButtonSlideOne().click();
        
        
     })

     it('Click carousel slide 2',  () => {
        
      homePage.openHomePage();
      homePage.getCarouselIndicatorsButtonSlideTwo().click();
      
      
   })

   it('Find container fluid', () =>{

    homePage.openHomePage();
    homePage.getContainerFluid();
    
  })
  it('Find Home Link', () => {
  homePage.openHomePage();
  cy.contains('Home').should('be.visible');
});

it('Find Our Products link', () => {
  homePage.openHomePage();
  cy.contains('Our Products').should('be.visible');

})

it('should navigate to products page when clicking on Our Product link', () => {
  homePage.openHomePage();
  homePage.clickOurProductLink();
  cy.url().should('include', 'products.html');
});

    it('Find Contact Us Link',  () => {
      homePage.openHomePage();
      cy.contains('Contact Us').should('be.visible');
           
      })

      it('should navigate to Contact Us form when clicking on Contact Us link', () => {
        homePage.openHomePage();
        homePage.clickContactUsLink();
        cy.url().should('include', 'contactus.html');
      });
      it('text should contain Why Choose Us?', () =>{

        homePage.openHomePage();
        homePage.getWhyChooseUsTitle().should('have.text', 'Why Choose Us?');
        
      }) 

      it ('have some text in block Why Choose Us?', () =>{
        homePage.openHomePage();
        homePage.getWhyChooseUsText().should('be.visible');
      })

      it('text should contain GREAT SERVICE!? Title', () =>{

        homePage.openHomePage();
        homePage.getGreatServiceTitle().should('have.text', 'GREAT SERVICE!');
        
      })
      it('text should contain Excellent Customer Service Title', () =>{

        homePage.openHomePage();
        homePage.getExcellentCustomerServiceTitle().should('have.text', 'Excellent Customer Service!');
        
      })
      it('Find container fluid in GREAT SERVICE!? block and Excellent Customer Service block ', () =>{

        homePage.openHomePage();
        homePage.getBlockWithStars();

      })

      // it.only('text should contain GREAT SERVICE!?', () =>{

      //   homePage.openHomePage();
      //   homePage.getGreatServiceText().should('be.visible');
        
      }) 