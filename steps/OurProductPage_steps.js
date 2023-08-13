import {OurProductPage} from "../e2e/pages/Our_Product_Page";
import { GeneralStep } from "./general_step.";

class OurProductPageStep extends GeneralStep{
    visit(){
        cy.visit('http://www.webdriveruniversity.com/Page-Object-Model/products.html')
        cy.url().should("include", "products");
    }

    verifyGetContainerFluid(){
        OurProductPage.getContainerFluid.should('exist');
    }

    verifyGetHomeLink(){
        OurProductPage.getHomeLink.should('exist');
    }

    verifyClickHomeLink(){
        OurProductPage.clickHomeLink;
    }

    verifyGetOurProductsLink(){
        OurProductPage.getOurProductsLink.should('be.visible');
    }

    verifyGetContactUsLink(){
        OurProductPage.getContactUsLink.should('be.visible');
    }
    verifyClickContactUsLink(){
        OurProductPage.clickContactUsLink();
    }
    verifyGetOurProductsLink(){
        OurProductPage.getOurProductsLink.should('be.visible');
    }
   verifyClickContactUsLink(){
    OurProductPage.clickContactUsLink;
   }
   verifyGetSpecialOffersTitle(){
    OurProductPage.getSpecialOffersTitle;
   }
   verifyGetSpecialOffersLink(){
    OurProductPage.getSpecialOffersLink.click();
   }
   verifyGetTitleProductModalText(){
    OurProductPage.getTitleProductModalText.should('exist');
   }
   verifyGetBodyProductModalText(){
    OurProductPage.getBodyProductModalText.should('exist');
   }
   verifyGetImgInSpecialOffersProduct(){
    OurProductPage.getImgInSpecialOffersProduct.should('exist');
   }
   verifyGetCamerasTitle(){
    OurProductPage.getCamerasTitle.should('be.visible');
   }
   verifyGetCamerasLink(){
    OurProductPage.getCamerasLink.click();
   }
   verifyGetTitleProductModalText(){
    OurProductPage.getTitleProductModalText.should('exist');
   }
   verifyGetBodyProductModalText(){
    OurProductPage.getBodyProductModalText.should('exist');
   }
   verifyGetImgInCamerasProduct(){
    OurProductPage.getImgInCamerasProduct.should('be.visible');
   }
   verifyGetNewLaptopsTitle(){
    OurProductPage.getNewLaptopsTitle.should('be.visible');
   }
   verifyGetNewLaptopsLink(){
    OurProductPage.getNewLaptopsLink.click();
   }
   verifyGetTitleProductModalText(){
    OurProductPage.getTitleProductModalText.should('exist');
   }
   verifyGetTitleProductModalText(){
    OurProductPage.getBodyProductModalText.should('exist');
   }
   verifyGetImgInNewLaptops(){
    OurProductPage.getImgInNewLaptops.should('exist');
   }
   verifyGetUsedLaptopsTitle(){
    OurProductPage.getUsedLaptopsTitle.should('be.visible');
   }
   verifyGetUsedLaptopsLink(){
    OurProductPage.getUsedLaptopsLink.click();
   }
   verifyGetTitleProductModalText(){
    OurProductPage.getTitleProductModalText.should('exist');
   }
   verifyGetBodyProductModalText(){
    OurProductPage.getBodyProductModalText.should('exist');
   }
   verifyGetImgInUsedLaptops(){
    OurProductPage.getImgInUsedLaptops.should('exist');
   }
   verifyGetGameConsolesTitle(){
    OurProductPage.getGameConsolesTitle.should('be.visible');
   }
   verifyGetGameConsolesLink(){
    OurProductPage.getGameConsolesLink.click();
   }
   verifyGetTitleProductModalText(){
    OurProductPage.getTitleProductModalText.should('exist');
   }
   verifyGetBodyProductModalText(){
    OurProductPage.getBodyProductModalText.should('exist');
   }
   verifyGetImgInGameConsoles(){
    OurProductPage.getImgInGameConsoles.should('exist');
   }
   verifyGetComponentsTitle(){
    OurProductPage.getGameConsolesTitle.should('be.visible');
   }
   verifyGetComponentsLink(){
    OurProductPage.getComponentsLink.click();
   }
   verifyGetTitleProductModalText(){
    OurProductPage.getTitleProductModalText.should('exist');
   }
   verifyGetBodyProductModalText(){
    OurProductPage.getBodyProductModalText.should('exist');
   }
   verifyGetImgInComponents(){
    OurProductPage.getImgInComponents.should('exist');
   }
   verifyGetComponentsTitle(){
    OurProductPage.getGameConsolesTitle.should('be.visible');
   }
   verifyGetDesktopSystemsTitle(){
    OurProductPage.getDesktopSystemsTitle.should('be.visible');
   }
   verifyGetDesktopSystemsLink(){
    OurProductPage.getDesktopSystemsLink.click();
   }
   verifyGetTitleProductModalText(){
    OurProductPage.getTitleProductModalText.should('exist');
   }
   verifyGetBodyProductModalText(){
    OurProductPage.getBodyProductModalText.should('exist');
   }
   verifyGetImgInDesktopSystems(){
    OurProductPage.getImgInDesktopSystems.should('exist');
   }
   verifyGetAudioTitle(){
    OurProductPage.getAudioTitle.should('be.visible');
   }
   verifyGetAudioLink(){
    OurProductPage.getAudioLink.click();
   }
   verifyGetTitleProductModalText(){
    OurProductPage.getTitleProductModalText.should('exist');
   }
   verifyGetBodyProductModalText(){
    OurProductPage.getBodyProductModalText.should('exist');
   }
   verifyGetImgAudio(){
    OurProductPage.getImgAudio.should('exist');
   }


}

export const ourProductPageStep = new OurProductPageStep();