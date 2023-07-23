import { productModalTexts } from "../../test-data/products-modal-text";


export class OurProductPage{
    visit(){
        cy.visit('http://www.webdriveruniversity.com/Page-Object-Model/products.html');
    }

    static get getContainerFluid(){
        return cy.get('div.container-fluid');
       
       }
    static get getHomeLink(){

       cy.contains('Home').should('be.visible');
       
    }

    static get clickHomeLink() {
        cy.get('a[href="index.html"]').click();
      }

    static get getOurProductsLink() {
        
        cy.contains('Our Products').should('be.visible');
      }


    static get getContactUsLink(){
        cy.contains('Contact Us').should('be.visible');

    }
    static get clickContactUsLink() {
        cy.get('a[href="../Contact-Us/contactus.html"]').click();
      }

    static get getProductRow(){
        return cy.get('div.row');
       
       }

    static get getSpecialOffersTitle(){
        return cy.get('.sub-heading').contains("Special Offers");
    }

    static get getImgInSpecialOffersProduct(){
        return cy.get('img[src="../img/amp.svg"]');

    } 

    static get getSpecialOffersLink(){
        return cy.contains('Special Offers');
    }

    //

    static get getCamerasTitle(){
        return cy.get('.sub-heading').contains("Cameras");
    }


    static get getImgInCamerasProduct(){
        return cy.get('img[src="../img/camera.svg"]');

    } 

    static get getCamerasLink(){
        return cy.contains("Cameras");
    }
    //

    static get getNewLaptopsTitle(){
        return cy.get('.sub-heading').contains("New Laptop");
    }

    static get getImgInNewLaptops(){
        return cy.get('img[src="../img/laptop1.svg"]');

    } 

    static get getNewLaptopsLink(){
        return cy.contains("New Laptops");
    }
//
    static get getUsedLaptopsTitle(){
        return cy.get('.sub-heading').contains("Used Laptop");
    }

    static get etImgInUsedLaptops(){
        return cy.get('img[src="../img/laptop2.svg"]');

    } 

    static get getUsedLaptopsLink(){
        return cy.contains("Used Laptops");
    }
    //
    static get getGameConsolesTitle(){
        return cy.get('.sub-heading').contains("Game Consoles");
    }

    static get getImgInGameConsoles(){
        return cy.get('img[src="../img/nintendo.svg"]');

    } 

    static get getGameConsolesLink(){
        return cy.contains("Used Laptops");
    }
    //
    static get getComponentsTitle(){
        return cy.get('.sub-heading').contains("Components");
    }

    static get getImgInComponents(){
        return cy.get('img[src="../img/cards.svg"]');

    } 

    static get getComponentsLink(){
        return cy.contains("Components");
    }
    //
    static get getDesktopSystemsTitle(){
        return cy.get('.sub-heading').contains("Desktop Systems");
    }

    static get getImgInDesktopSystems(){
        return cy.get('img[src="../img/computer.svg"]');

    } 

    static get getDesktopSystemsLink(){
        return cy.contains("Desktop Systems");
    }
    //
    static get getAudioTitle(){
        return cy.get('.sub-heading').contains("Audio");
    }

    static get getImgAudio(){
        return cy.get('img[src="../img/boombox.svg"]');

    } 

    static get getAudioLink(){
        return cy.contains("Audio");
    }
    // verifyModalText () {
    //     // getModalDialogTitle().should('eq', productModalTexts[0].text);
    //     // getModalDialogBody().should('eq', productModalTexts[1].text);
    //     this.getModalDialogTitle().should('eq', productModalTexts[0].text);
    //     this.getModalDialogBody().should('eq', productModalTexts[1].text);

    static get getTitleProductModalText(){
        return cy.contains(productModalTexts[0].titleProductModal);
      }

      static get getBodyProductModalText(){
        return cy.contains(productModalTexts[1].bodyProductModal);
    } 

}


export default OurProductPage;