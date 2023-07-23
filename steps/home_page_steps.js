import {HomePage} from "../e2e/pages/Home_Page";
import { GeneralStep } from "./general_step.";

export class HomePageSteps extends GeneralStep {
        visit() {
            cy.visit('http://www.webdriveruniversity.com/Page-Object-Model/index.html')
            cy.url().should('include', 'Page-Object-Model');
        }

        verifyWhoAreWeTitle(){
            HomePage.getWhoAreWeTitle.should('exist');

        }
        verifyGetWhoAreWeText(){
            HomePage.getWhoAreWeText.should('exist');
        }

        verifyGetOutMoreButton(){
            HomePage.getOutMoreButton.click();
        }
        verifyGetCarouselInner1(){
            HomePage.getCarouselInner1.should('exist');
        }

        verifyGetCarouselInner2(){
            HomePage.getCarouselInner2.should('exist');
        }

        verifyGetCarouselInner3(){
            HomePage.getCarouselInner3.should('exist');
        }

        verifyGetScrollLeftButton(){
            HomePage.getScrollLeftButton.click();
        }

        verifyGetScrollRightButton(){
            HomePage.getScrollRightButton.click();
        }

        verifyGetCarouselIndicatorsButtonSlideZero(){
            HomePage.getCarouselIndicatorsButtonSlideZero.click();
        }

        verifyGetCarouselIndicatorsButtonSlideOne(){
            HomePage.getCarouselIndicatorsButtonSlideOne.click();
        }

        verifyGetCarouselIndicatorsButtonSlideTwo(){
            HomePage.getCarouselIndicatorsButtonSlideTwo.click();
        }

        verifyGetContainerFluid(){
            HomePage.getContainerFluid.should('exist')
        }

        verifyDisplayHomeLink(){
            HomePage.displayHomeLink.should('be.visible');
        }

        verifyDisplayOurProductsLink(){
            HomePage.displayOurProductsLink.should('be.visible');
        }

        verifyClickOurProductsLink(){
            HomePage.clickOurProductsLink;
        }

        verifyDisplayContactUsLink(){
            HomePage.displayContactUsLink.should('be.visible');
        }

        verifyClickContactUsLink(){
            HomePage.clickContactUsLink;
        }

        verifyDisplayWhyChooseUsTitle(){
            HomePage.displayWhyChooseUsTitle.should('be.visible');
        }

        verifyCheckDisplayFourTextLorem(){
            HomePage.checkDisplayFourTextLorem.should('be.visible');
        }

        verifyDisplayGreatServiceTitle(){
            HomePage.displayGreatServiceTitle.should('be.visible');
        }

        verifyDisplayGreatServiceTitle(){
            HomePage.displayGreatServiceTitle.should('be.visible');
        }

        verifyDisplayExcellentCustomerServiceTitle(){
            HomePage.displayExcellentCustomerServiceTitle.should('be.visible');
        }

        verifyGetBlockWithStars(){
            HomePage.getBlockWithStars.should('be.visible');
        }
            
        }

    

export const homePageSteps = new HomePageSteps();