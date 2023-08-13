import { HiddenElementsPage } from "../e2e/pages/HiddenElementsPage";
import { GeneralStep } from "./general_step.";

export class HiddenElementSteps extends GeneralStep{
    openHiddenElementsPage(){
        cy.visit('https://www.webdriveruniversity.com/Hidden-Elements/index.html');
        cy.url().should('include', "Hidden-Elements");
    }
    //добавляем наши функции
    clickNotDisplayedButton(){
        HiddenElementsPage.getNoDisplayedButton.should('not.be.disabled');
        HiddenElementsPage.getNoDisplayedButton.click({force: true}).should('not.be.disabled');
    }

    clickNotDisplayedButtonByHTML(){
        HiddenElementsPage.getNoDisplayedButton.should('not.be.disabled');
        cy.get('div#not-displayed.section-title').invoke('css', 'display', 'block');//мы display NaN изменили на display block - 
        HiddenElementsPage.getNoDisplayedButton.invoke('html', '<p> CLICK ME Again!</p>')//мы изменили текст кнопки Click ME!на Click Me Again!
        HiddenElementsPage.getNoDisplayedButton.find('p').should('have.text', ' CLICK ME Again!').click(); //обращаемся к нашнму тексту по тегу <p>

    }

    changeDisabledStatusByHTML(){
        HiddenElementsPage.getDisabledButton.should('not.be.disabled'); //проверяем что у нас кнопка не отображается
        HiddenElementsPage.getDisabledButton.invoke('attr', 'style', 'display: block !important');
        HiddenElementsPage.getDisabledButton.click({force: true});

    }

    clickVisibilityButton(){
        HiddenElementsPage.getVisibilityButton.should('not.be.disabled');
        HiddenElementsPage.getVisibilityButton.invoke('css', 'visibility','visible').click().should('be.visible');
    }    
    
        clickZeroOpacityButton(){
        HiddenElementsPage.getZeroOpacityButton.should('exist');
        cy.get('div#zero-opacity.section-title').invoke('css', 'opacity', '1').should('be.visible');
        HiddenElementsPage.getZeroOpacityButton.invoke('css', 'opacity', '1').should('be.visible');
        HiddenElementsPage.getZeroOpacityButton.click();
    }    
    }




export const hiddenElementsSteps = new HiddenElementSteps();