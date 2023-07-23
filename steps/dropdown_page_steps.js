import { DropdownPage } from "../e2e/pages/DropdownPage";
import { title } from "../test-data/dropdown-values";
import { GeneralStep } from "./general_step.";

export class DropdownPageSteps extends GeneralStep{
    visit(){
        cy.visit('http://www.webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html');
        cy.url().should('include', 'Dropdown-Checkboxes-RadioButtons');
    }

    verifyGetDivByTitle(title){
        DropdownPage.getDivByTitle('Dropdown Menu(s)').should('exist');
        DropdownPage.getDivByTitle('Checkboxe(s)').should('exist');
        DropdownPage.getDivByTitle('Radio Button(s)').should('exist');
        DropdownPage.getDivByTitle('Selected & Disabled').should('exist');  
}
// verifyAllDropdownsOptions(array, id){
//     DropdownPage.getAllDropdownOptions('dropdown1, 1').should('exist');

verifyGetDropdownById(){
    DropdownPage.getDropdownByIdFirst('dropdown1').should('exist');
    DropdownPage.getDropdownByIdSecond('dropdown2').should('exist');
    DropdownPage.getDropdownByIdThird('dropdown3').should('exist');

}
// verifyAllDropdownsOptions(){
//     DropdownPage.allDropdownsOptionsFirst('dropdown1').should('exist');
//     DropdownPage.allDropdownsOptionsSecond('dropdown2').should('exist');
//     DropdownPage.allDropdownsOptionsThird('dropdown3').should('exist');
// }
    

verifyGetAllDropdownOptions(array, id){
    DropdownPage.getAllDropdownsOptions('dropdown1, 1').should('exist');
    DropdownPage.allDropdownsOptions('dropdown2, 2').should('exist');
    DropdownPage.allDropdownsOptions('dropdown3, 3').should('exist');
}




    verifyGet1Option(){
        DropdownPage.get1Option.click();
    }
    verifyGet2Option(){
        DropdownPage.get2Option.click();
    }
    verifyGet3Option(){
        DropdownPage.get3Option.click();
    }
    verifyGet4Option(){
        DropdownPage.get4Option.click();
    }
    verifyGetAllCheckboxes(){
        DropdownPage.getAllCheckboxes.should('have.length', 4);
    }
    verifyGetGreenRadioButtons(){
        DropdownPage.getGreenRadioButtons.check('green');
    }

    verifyGetBlueRadioButtons(){
        DropdownPage.getBlueRadioButtons.check('blue');
    }

    verifyGetYellowRadioButtons(){
        DropdownPage.getYellowRadioButtons.check('yellow');
    }

    verifyGetAllRadioButtons(){
        DropdownPage.getAllRadioButtons.should('have.length', 1);
    }

}

export const dropdownPageSteps = new DropdownPageSteps();