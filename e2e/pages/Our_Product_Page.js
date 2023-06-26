class OurProductPage{
    openOurProductPage(){
        cy.visit('http://www.webdriveruniversity.com/Page-Object-Model/products.html')
    }

    getContainerFluid(){
        return cy.get('div.container-fluid');
       
       }
    getHomeLink(){

       cy.contains('Home').should('be.visible');
       
    }

    clickHomeLink() {
        cy.get('a[href="index.html"]').click();
      }

    getOurProductsLink() {
        
        cy.contains('Our Products').should('be.visible');
      }

      getContactUsLink(){
        cy.contains('Contact Us').should('be.visible');

    }
    clickContactUsLink() {
        cy.get('a[href="../Contact-Us/contactus.html"]').click();
      }

    getProductRow(){
        return cy.get('div.row');
       
       }

       getSpecialOffersTitle(){
        return cy.get('.sub-heading').contains("Special Offers");
    }

    getImginSpecialOffersProduct(){
        return cy.get('img[src="../img/amp.svg"]');

    } 

    getSpecialOffersLink(){
        return cy.contains('Special Offers');
    }

    //

    getCamerasTitle(){
        return cy.get('.sub-heading').contains("Cameras");
    }


    getImgInCamerasProduct(){
        return cy.get('img[src="../img/camera.svg"]');

    } 

    getCamerasLink(){
        return cy.contains("Cameras");
    }
    //

    getNewLaptopsTitle(){
        return cy.get('.sub-heading').contains("New Laptop");
    }

    getImgInNewLaptops(){
        return cy.get('img[src="../img/laptop1.svg"]');

    } 

    getNewLaptopsLink(){
        return cy.contains("New Laptops");
    }
//
    getUsedLaptopsTitle(){
        return cy.get('.sub-heading').contains("Used Laptop");
    }

    getImgInUsedLaptops(){
        return cy.get('img[src="../img/laptop2.svg"]');

    } 

    getUsedLaptopsLink(){
        return cy.contains("Used Laptops");
    }
    //
    getGameConsolesTitle(){
        return cy.get('.sub-heading').contains("Game Consoles");
    }

    getImgInGameConsoles(){
        return cy.get('img[src="../img/nintendo.svg"]');

    } 

    getGameConsolesLink(){
        return cy.contains("Used Laptops");
    }
    //
    getComponentsTitle(){
        return cy.get('.sub-heading').contains("Components");
    }

    getImgInComponents(){
        return cy.get('img[src="../img/cards.svg"]');

    } 

    getComponentsLink(){
        return cy.contains("Components");
    }
    //
    getDesktopSystemsTitle(){
        return cy.get('.sub-heading').contains("Desktop Systems");
    }

    getImgInDesktopSystems(){
        return cy.get('img[src="../img/computer.svg"]');

    } 

    getDesktopSystemsLink(){
        return cy.contains("Desktop Systems");
    }
    //
    getAudioTitle(){
        return cy.get('.sub-heading').contains("Audio");
    }

    getImgAudio(){
        return cy.get('img[src="../img/boombox.svg"]');

    } 

    getAudioLink(){
        return cy.contains("Audio");
    }


    
}

export default OurProductPage;