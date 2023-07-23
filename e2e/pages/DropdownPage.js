import { title } from "../../test-data/dropdown-values";
import { dropdownTestData } from "../../test-data/dropdown-values";
import { dropdown1 } from "../../test-data/dropdown-values";


export class DropdownPage{
    visitDropdownPage(){
        return cy.visit('http://www.webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html');
    }

   static getDivByTitle(title){
        return cy.xpath(`//div[@class="thumbnail"]/h2[contains(text(), "${title}")]`);
    }

    // static getDropdownById(id){
    //     return cy.xpath(`//div[@class="thumbnail"]/h2[contains(text(), "Dropdown Menu(s)")]/..//select[@id = "dropdown-menu-${id}"]`);
    // }
    ////div[@class="thumbnail"]/h2[contains(text(), "Dropdown Menu(s)")]/..//select[@id = "dropdowm-menu-1"]

    static getDropdownByIdFirst(){
        return cy.xpath('//div[@class="thumbnail"]/h2[contains(text(), "Dropdown Menu(s)")]/..//select[@id = "dropdowm-menu-1"]');
    }

    static getDropdownByIdSecond(){
        return cy.xpath('//div[@class="thumbnail"]/h2[contains(text(), "Dropdown Menu(s)")]/..//select[@id = "dropdowm-menu-2"]');
    }

    static getDropdownByIdThird(){
        return cy.xpath('//div[@class="thumbnail"]/h2[contains(text(), "Dropdown Menu(s)")]/..//select[@id = "dropdowm-menu-3"]');
    }

    // static allDropdownsOptionsFirst(){
    //     cy.get('[java', 'c#', 'python', 'sql]')

    // }



    static getAllDropdownOptions(arrayOfValues,dropdownId){
        arrayOfValues.forEach(value=>{
    let el=value.toLowerCase().trim(); //приведение значения к нижнему регистру и удаление возможных пробелов
          this.getDropdownById(dropdownId).should('exist').select(el).invoke('val').should("eq",el); //select(el)- выор значения в выпадающем списке, 
          //.invoke('val').should("eq",el) значение, которое было выбрано в выпадающем списке, соответствует значению el
        })
    }
//    static verifyAllDropdownsOptions(arrayOfValues,dropdownId){
//         return cy.get('id1');
//     }


static get get1Option(){
        return cy.get("input[value='option-1']")

}
static get get2Option(){
        return cy.get("input[value='option-2']")

}
static get get3Option(){
        return cy.get("input[value='option-3']")

}

static get get4Option(){
         return cy.get("input[value='option-4']")

}
static get getAllCheckboxes(){
        return cy.get('input[type="checkbox"]')
}

static get radioButtonsForm(){
        return cy.get('form[id="radio-buttons"]')
    }

static get getGreenRadioButtons(){
        return cy.xpath('//form[@id="radio-buttons"]//input[@type="radio"]')
    }

static get getBlueRadioButtons(){
        return cy.xpath('//form[@id="radio-buttons"]//input[@value="blue"]')
    }

static get getYellowRadioButtons(){
        return cy.xpath('//form[@id="radio-buttons"]//input[@value="yellow"]')
    }

static get getAllRadioButtons(){
        return cy.xpath('//form[@action and contains(@class, "radio-buttons")][@id = "radio-buttons"]')
}

}

export default DropdownPage;