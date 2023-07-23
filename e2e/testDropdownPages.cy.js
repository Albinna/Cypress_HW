import { DropdownPage } from "./pages/DropdownPage";
import { dropdown1, dropdown2, dropdown3 } from "../test-data/dropdown-values";
import { title } from "../test-data/dropdown-values";
import {DropdownPageSteps, dropdownPageSteps} from "../steps/dropdown_page_steps";
import { dropdownTestData } from "../test-data/dropdown-values";

const dropdownPage = new DropdownPage();
// dropdownPageSteps.openDropdownPage();
// const dropdownFirst = dropdownTestData[0];
// const dropdownSecond = dropdownTestData[1];
// const dropdownThird = dropdownTestData[2];


describe ('Dropdown', () => {

    it.only('Select dropdown', () => {
        dropdownPageSteps.visit();
        dropdownPageSteps.verifyGetDivByTitle();
        dropdownPageSteps.verifyGetDropdownById();
        dropdownPageSteps.openDropdownPage();
        // dropdownPageSteps.verifyGetDropdownById();
        // dropdownPageSteps.openDropdownPage();
         //Изменения до введения патерна Steps
        // dropdown.visit();
        // dropdown.getDivByTitle("Dropdown Menu(s)").should("exist");
        // dropdown.getDivByTitle("Checkboxe(s)").should("exist");
        // dropdown.getDivByTitle("Radio Button(s)").should("exist");
        // dropdown.getDivByTitle("Selected & Disabled").should("exist");

        // dropdown1.forEach(value => {
        //     dropdown.getDropdownById(1).should('exist').select(value).invoke('val').should('eq', value)
        // })

        // dropdown2.forEach(value => {
        //     dropdown.getDropdownById(2).should('exist').select(value).invoke('val').should('eq', value)
        // })

        // dropdown3.forEach(value => {
        //     dropdown.getDropdownById(3).should('exist').select(value).invoke('val').should('eq', value)
        // })
        // dropdown.verifyAllDropdownsOptions(dropdown1, 1);
        // dropdown.verifyAllDropdownsOptions(dropdown2, 2);
        // dropdown.verifyAllDropdownsOptions(dropdown3, 3);


        // Эта строчка использовалась без метода ForEach - dropdown.getDropdownById(1).should('exist').select('python').invoke('val').should('eq', 'python');
        // dropdown.getDropdownById(2).should("exist").click();
        // dropdown.getDropdownById(3).should("exist").click();
    })
    
        
            it.only('Verify all dropdowns options', () => {
                dropdownPageSteps.visit();
                dropdownTestData.forEach(data => {
                    dropdownPageSteps.verifyAllDropdownsOptions;
                })
                dropdownPageSteps.openDropdownPage();
            })

    it.only('Checkboxes', () =>{
        dropdownPageSteps.visit();
        dropdownPageSteps.verifyGet1Option();
        dropdownPageSteps.verifyGet2Option();
        dropdownPageSteps.verifyGet3Option();
        dropdownPageSteps.verifyGet4Option();
        dropdownPageSteps.verifyGetAllCheckboxes('have.length', 4);
        dropdownPageSteps.openDropdownPage();
        // dropdown.visit();
        // dropdown.get1Option().click().should('be.checked');
        // dropdown.get2Option().check().should('be.checked');
        // dropdown.get3Option().uncheck().should('not.be.checked');
        // dropdown.get4Option().click().should('be.checked');
        // dropdown.getAllCheckboxes().should('have.length', 4);
        // dropdown.getAllCheckboxes().should('have.length', 4).first().check().should('be.checked');//кликаем только по первому чекбоксу
    })
    it.only('Radio Buttons', () =>{
        dropdownPageSteps.visit();
        dropdownPageSteps.verifyGetGreenRadioButtons('have.element', 'green'); // , 'orange', 'purple'
        dropdownPageSteps.verifyGetBlueRadioButtons('have.element', 'blue');
        dropdownPageSteps.verifyGetYellowRadioButtons('have.element', 'yellow');
        dropdownPageSteps.verifyGetAllRadioButtons('have.length', 1);
        dropdownPageSteps.openDropdownPage();

        // cy.get('input[value="yellow"]').should('not.be.checked');
        // cy.get('body').document (doc =>{
        //    const test = doc.querySelector('button2')
        // dropdown.visit();
        // dropdown.getAllRadioButtons().check('green').should('be.visible');
        // cy.get('input[value="yellow"]').should('not.be.checked');
        // cy.get('body').document (doc =>{
        //    const test = doc.querySelector('button2')
        })
    })

