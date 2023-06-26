class HomePage{
    openHomePage(){
        cy.visit('http://www.webdriveruniversity.com/Page-Object-Model/index.html')
    }
    //мы проверяем что у нас есть такой тайтл Who Are We?
        getWhoAreWeTitle(){
        return cy.contains('Who Are We?');
    }

        getWhoAreWeText(){
          return cy.contains('Lorem ipsum dolor sit amet, consectetur adipiscing elit');
    }

        getOutMoreButton(){
           return cy.get('#button-find-out-more').contains('Find Out More!');

    }
    getOutMoreButton(){
        return cy.contains('button', 'Find Out More!');
    }
        getCarouselInner() {
        return cy.get('img[src="../img/amp.svg"]');
  
    }

        getCarouselInner() {
        return cy.get('img[src="../img/boombox.svg"]');
  
    }

        getCarouselInner() {
        return cy.get('img[src="../img/nintendo.svg"]');
  
    }

        getScrollLeftButton(){ 
        return cy.get('a[data-slide="prev"]');
   
    }

        getScrollRightButton(){ 
        return cy.get('a[data-slide="next"]');
   
    } 

        getCarouselIndicatorsButtonSlideZero(){

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

        cy.contains('Home').should('be.visible');
       }

       getOurProductsLink() {
        
        cy.contains('Our Products').should('be.visible');
      }
      
      clickOurProductLink() {
        cy.get('a[href="products.html"]').click();
      }

       getContactUsLink(){
        cy.contains('Contact Us').should('be.visible');

    }
    
       clickContactUsLink() {
        cy.get('a[href="../Contact-Us/contactus.html"]').click();
      }

    getWhyChooseUsTitle(){
        return cy.contains('Why Choose Us?');  
    }
   
    getWhyChooseUsText(){
        return cy.contains('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi elit sapien, tempus sit amet hendrerit volutpat, euismod vitae risus. Etiam consequat, sem et vulputate dapibus, diam enim tristique est, vitae porta eros mauris ut orci. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi elit sapien, tempus sit amet hendrerit volutpat, euismod vitae risus. Etiam consequat, sem et vulputate dapibus, diam enim tristique est, vitae porta eros mauris ut orci.');
    }

    getGreatServiceTitle(){
        return cy.contains('GREAT SERVICE!');  
    }

    getExcellentCustomerServiceTitle(){
        return cy.contains('Excellent Customer Service!');
    }

    getGreatServiceText() {
        return cy.contains('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi elit sapien, tempus sit amet hendrerit volutpat, euismod vitae risus. Etiam consequat, sem et vulputate dapibus, diam enim tristique est, vitae porta eros mauris ut orci.');
    }
 
    getBlockWithStars(){
        return cy.get('div.div-star');
    }


}

    export default HomePage;