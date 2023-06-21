/// <reference types="Cypress" />

import HomePage from "./pages/Contact-Us-Page";
const homePage = new HomePage();

describe('Check the Who Are We? text', () => {
    it('text should contain Who Are We?', () =>{

      homePage.openHomePage();
      homePage.getWhoAreWeTitle().should('have.text', 'Who Are We?');
      
    }) 

    it('found button "Find Out More!" and click', () =>{
    
      homePage.openHomePage();
      homePage.getFindOutMoreButton().click();

  })

  it('Get an element 1 in Carousel Inner', () => {

    homePage.openHomePage();
    homePage.getFoundCarouselInner().should('exist');

    })

    it('Get an element 2 in Carousel Inner', () => {

      homePage.openHomePage();
      homePage.getFoundCarouselInner().should('exist');
  
      })

      it('Get an element 3 in Carousel Inner', () => {

        homePage.openHomePage();
        homePage.getFoundCarouselInner().should('exist');
    
        })

       it('Click on the left carousel batton', () => {
        
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

   it('Found container fluid', () =>{

    homePage.openHomePage();
    homePage.getContainerFluid();
    
  })
   it.only('Found Home Link',  () => {

   homePage.openHomePage();
   homePage.getHomeLink().contains('Home');
        
   })

   it.only('Found Our Products Link',  () => {

    homePage.openHomePage();
    homePage.getOurProductsLink().should('Our Products');
    
         
    })

    it.only('Found Contact Us Link',  () => {

      homePage.openHomePage();
      homePage.getContactUsLink().contains('Contact Us');
           
      })

})


//     it('Click on button Find Out More! in the Block "Who Are We?"', () => {
//       homePage.openHomePage();
//       homePage.clickFindOutMoreButton();


//      // Получаем кнопку "Find Out More!" и кликаем по ней
//      homePage.getFindOutMoreButton().click();

//      // Проверяем, что модальное окно отображается
//      homePage.isMyModalVisible();
 
//      // Получаем текст из модального окна и проверяем его содержимое
//      homePage.getMyModalText().then((text) => {
//        expect(text).to.contain('Ожидаемый текст модального окна');

//   //   getSuccessSubmitMessage(){
//   //     return cy.get('div#modal-title > h4').contains('Welcome to webdriveruniversity.com');
//   // }
    
//     })
// })
// })