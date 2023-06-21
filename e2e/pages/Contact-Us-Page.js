class HomePage{
    openHomePage(){
        cy.visit('http://www.webdriveruniversity.com/Page-Object-Model/index.html')
    }
    //мы проверяем что у нас есть такой тайтл Who Are We?
    getWhoAreWeTitle(){
        return cy.contains('Who Are We?').should('have.text','Who Are We?');
    }
    getFindOutMoreButton(){
        return cy.get('#button-find-out-more').contains('Find Out More!');

    }
    getFoundCarouselInner() {
        return cy.get('img[src="../img/amp.svg"]');
  
    }

    getFoundCarouselInner() {
        return cy.get('img[src="../img/boombox.svg"]');
  
    }

    getFoundCarouselInner() {
        return cy.get('img[src="../img/nintendo.svg"]');
  
    }

    getScrollLeftButton(){ 
        return cy.get('a[data-slide="prev"]');
   
    }

    getScrollRightButton(){ 
        return cy.get('a[data-slide="next"]');
   
    } 

    getCarouselIndicatorsButtonSlideZero(){

    //   return cy.get('ol[class="carousel-indicators"]');
         return cy.get('li[data-slide-to="0"]');
    
    }

    getCarouselIndicatorsButtonSlideOne(){

             return cy.get('li[data-slide-to="1"]');
        
        }
    getCarouselIndicatorsButtonSlideTwo(){

            return cy.get('li[data-slide-to="2"]');
       
       }

       getContainerFluid(){
        return cy.get('div.container-fluid');
       }
     
       getHomeLink(){
        return cy.get('ul.nav.navbar-nav').contains('Home');
       }

       getOurProductsLink(){
        return cy.get('ul.nav.navbar-nav').should('Our Products');

       }

       getContactUsLink(){
        return cy.get('ul.nav.navbar-nav').contains('Contact Us');

       }

    
    getOurProductsLink(){

    }
    getContactUsLink(){

    }
    getWhyChooseUsTitle(){
      
   }
    getGreatServiceTitle(){

   }
    getExcellentCustomerServiceTitle(){

    }
}
    export default HomePage;