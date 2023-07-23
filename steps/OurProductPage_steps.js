import {OurProductPage} from "../e2e/pages/Our_Product_Page";
import { GeneralStep } from "./general_step.";

class OurProductPageStep{
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
    OurProductPage.clickContactUsLink
   }

}

export const ourProductPageStep = new OurProductPageStep();