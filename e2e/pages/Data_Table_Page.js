

// import { tableData2 } from "../../test-data/data_table_values";
import { firstTableRowsData } from "../../test-data/data_table_values";
import { users } from "../../test-data/data_table_values";
import { tableData2 } from "../../test-data/data_table_values";

export class DataTablePage {
  visit() {
    cy.visit('https://www.webdriveruniversity.com/Data-Table/index.html')
  }

  static get getMainHeader() {
    return cy.get('#main-header');
  }

  static get getMainHeaderText() {
    return cy.contains('Data, Tables & Button States');
  }

  static checkFirstTableContent(dataArray) {
    cy.get('table#t01').each(($row, index) => {
      const expectedRow = firstTableRowsData[index];
      const rowText = $row.text().trim().split('\n');

      rowText.forEach((cellText, cellIndex) => {
        const expectedCellText = expectedRow.row[cellIndex];

        cy.wrap(cellText).should('match', new RegExp(expectedCellText, 'i'));
      });
    });
  }

  static checkSecondTableContent(dataArray) {
    cy.get('table#t02').each(($row, index) => {
      const expectedRow = firstTableRowsData[index];
      const rowText = $row.text().trim().split('\n');

      rowText.forEach((cellText, cellIndex) => {
        const expectedCellText = expectedRow.row[cellIndex];

        cy.wrap(cellText).should('match', new RegExp(expectedCellText, 'i'));
      });
    });
  }
  static get getTextFirstName() {
    return cy.xpath("//form[@id = 'form-textfield'][contains(text(), 'First name: ')]")
  }

  static get getFirstName() {
    return cy.get('input[name="firstname"]');
  }
  static get checkInputFirstName() {
    cy.xpath('//input[@type = "text"][@name = "firstname"]');
  }
  static get getTextLastName() {
    return cy.contains("Last name");
  }
  static get checkInputLastName() {
    return cy.xpath('//input[@type = "text"][@name = "lastname"]');
  }
  static get getLastName() {
    return cy.get('input[name="lastname"]');
  }
  static get checkInputTextBelowDisplay() {
    return cy.xpath("//p[contains(text(), 'Input Text Below:')]")
      .contains('Input Text Below:')
  }
  static checkTextArea() {
    const textareaText = 'Hello, 2023'
    cy.get('textarea').type(textareaText)
      .then(($textarea) => {
        const actualValue = $textarea.val().trim();
        expect(actualValue).to.equal(textareaText);
      });
  }


  //Breadcrumb

  static get getHeaderBreadcrumb() {
    return cy.xpath('//h2[. = "Breadcrumb"]')
  }
  static checkBreadcrumbHave3Elements() {
    cy.get(".breadcrumb li").should("have.length", 3);
  }
  //проверяем последовательность эл-тов 

  static get checkSequenceOfElementsInBreadcrumb() {
    cy.get(".breadcrumb li").eq(0).should("contain", "Home");
    cy.get(".breadcrumb li").eq(1).should("contain", "About Us");
    cy.get(".breadcrumb li").eq(2).should("contain", "Contact Us");
    // Проверяем, что Contact Us элемент активный
    cy.get(".breadcrumb li").eq(2).should("have.class", "active");
  }

  static getHomeMenuInBreadcrumb() {
    return cy.xpath('//li[@class = "breadcrumb-item"]//a[contains(text(), "Home")]');
  }
  static get clickHomeMenuInBreadcrumb() {
    return cy.get(".breadcrumb").contains("Home").click();
  }
  static getAboutUsMenuInBreadcrumb() {
    return cy.xpath('//li[@class = "breadcrumb-item"]//a[contains(text(), "About Us")]');
  }
  static clickAboutUsMenuInBreadcrumb() {
    return cy.get(".breadcrumb").contains("About Us").click();
  }
  static getContactUsMenuInBreadcrumb() {
    return cy.xpath("//li[@class = 'breadcrumb-item active']");
  }

  //Badges

  static getHeaderBadges() {
    return cy.xpath('//h2[. = "Badges"]');

  }
  static get checkTodayDealsElement() {
    cy.xpath('//li[@class= "list-group-item badge-text"]').eq(0).should("contain", "Today's Deals");
  }
  static get checkQuantityTodayDealsElement() {
    cy.xpath('//span[@class = "badge badge-light"]').should("contain", 5);
  }

  static get checkAllProductsElements() {
    cy.xpath('//li[@class = "list-group-item badge-text"]').eq(1).should("contain", "All Products");
  }
  static get checkQuantityAllProductsElements() {
    cy.xpath('//span[@class = "badge traversal-badge"]').should("contain", 20);
  }

  //Paginator
  static get getHeaderPaginator() {
    return cy.xpath('//h2[. = "Pagination"]');
  }
  static get getPageNavigator() {
    return cy.xpath('//ul[@class = "pagination traversal-pagination"]');
  }
  //проверяем что есть кнопки переключения страниц
  static get checkPageSwitchingButtons() {
    return cy.get(".page-link").should("exist");
  }
  static get checkFirstPageIsActive() {
    return cy.get(".page-item").contains("1");
  }
  static get checkClickSecondPage() {
    return cy.contains(".page-link", "2").click();
  }
  //проверяем что вторая страница активна после клика
  static get checkSecondPageIsActive() {
    return cy.xpath('//a[@class = "page-link"]').contains("2");
  }
  //кнопка "Previous" переключает на предыдущую страницу
  static get checkPreviousButton() {
    cy.contains(".page-link", "Previous").click();
    cy.get(".page-item").contains("1");
  }
  //кнопка "Next" переключает на следующую страницу
  static get checkNextButton() {
    cy.contains(".page-link", "Next").click();
    cy.get(".page-item").contains("2");
  }
  //проверяем что при клике на кнопку 3 переключается на 3-ю стр
  static get checkPageSwitching() {
    cy.xpath('//a[@class = "page-link"]').contains("5").click().should("contain", 5);
    cy.xpath('//a[@class = "page-link"]').contains("3").click().should("contain", 3);
  }
 

  //Table
  static get getTableHeader() {
    return cy.xpath('//h2[. = "Table"]').should('be.visible');
  }
  static get getTable() {
    return cy.xpath('//table[@class = "table table-light traversal-table"]').should('be.visible');

  }
  static get checkTableHeaders() {
    return cy.xpath('//th[@scope = "col"]')
      .should('have.length', 3)
      .and('contain', '#')
      .and('contain', 'First')
      .and('contain', 'Last')
  }

  static checkDataInTable(dataArray) {
    cy.xpath('//table[@class = "table table-light traversal-table"]').each(($row, index) => {
      const expectedRow = tableData2[index];
      const rowText = $row.text().trim().split('\n');


      rowText.forEach((cellText, cellIndex) => {
        const expectedCellText = expectedRow.row[cellIndex];

        cy.wrap(cellText).should('match', new RegExp(expectedCellText, 'i'));
      });
    });
  }

  //Buttons & States
  static get getButtonsAndStates() {
    return cy.xpath('//h2[. = "Buttons & States"]')
      .should('have.length', 1)
      // .should('be.focused');

  }

  static get getClickLinkButton() {
    return cy.xpath('//a[@class = "btn btn-primary"][@role = "button"]').contains('Link').click();
  }
  // clickLinkButton(){
  //   // cy.get('https://www.webdriveruniversity.com/Data-Table/index.html#')
  //   return cy.xpath('//a[@href = "#"][@role = "button"]').click()
  //   // .and ('contain', 'index.html');
  // }
  static get getClickButtonbutton() {
    return cy.xpath('//button[@type="submit" and contains(text(), "Button")]')
      .should('have.css', 'font-weight', '400')
      .should('have.css', 'font-size', '14px')
      .click();
  }


  static get getClickInputButton() {
    return cy.xpath('//input[@type = "button"][@value = "Input"]').click()
      .and('have.value', 'Input');

  }
  static get getClickSubmitButton() {
    return cy.xpath('//input[@type = "submit"][@value = "Submit"]').click()
      .and('have.value', 'Submit');

  }
  static get getClickResetButton() {
    return cy.xpath('//input[@type = "reset"][@value = "Reset"]').click()
      .and('have.value', 'Reset');
  }

  static get getClickDangerButton() {
    return cy.xpath('//button[@type = "button"]')
      .contains('Danger')
      .click()

  }
  static get getClickWarningButton() {
    return cy.xpath('//button[@type = "button"][@class = "btn btn-outline-warning disabled"]')
      .contains('Warning')

  }
  static get getClickInfoButton() {
    return cy.xpath('//button[@type = "button"][@class = "btn btn-outline-info"]')
      .contains('Info')
      .click();

  }

  static get getClickAlertButton() {
    return cy.xpath('//button[@type = "button"][@class = "btn btn-outline-info"]')
      .contains('Alert')
      .click();

  }

  static get getClickButton1() {
    return cy.xpath('//button[@type = "button"][contains(text(), "Button-1")]')
      .click()
      .should('have.focus');
  }
  static get getClickButton2() {
    return cy.xpath('//button[@class = "btn btn-primary"][contains(text(), "Button-2")]')
      .click()
      .should('have.focus');
     
  }
  static get getClickButton3() {
    return cy.xpath('//button[@class = "btn btn-primary"]')
      .contains('Button-3')
      .click()
      
  }
  static get getClickButton4() {
    return cy.xpath('//button[@class = "btn btn-primary"]')
      .contains('Button-4')
      .click()
      .should('have.focus')

  }
  static get checkFocusAfterClickButton() {
    cy.xpath('//button[@type = "button"]').contains('Button-1').click();
    cy.focused().should('contain', 'Button-1');
    cy.xpath('//button[@type = "button"]')
      .contains('Button-2').should('not.have.focus')
    // .contains('Button-3').should('not.have.focus')
    // .contains('Button-4').should('not.have.focus');
  }
  //Random Text
  static get getRandomTextHeader() {
    return cy.xpath('//h2[. = "Random Text"]').should('be.visible');
  }

  static get getRandomTextContent() {
    return cy.xpath('//div[@class="traversal-marked-text"]').should('be.visible');

  }

  static get getMarkText() {
    return cy.xpath('//mark[@class = "traversal-mark"][contains(text(), "sed do eiusmod tempor incididunt ut labore")]').should('be.visible');
  }

  static get getBlockquote() {
    return cy.xpath('//blockquote//p[contains(text(), "Lorem ipsum dolor sit amet, consectetur adipiscing elit")] ').should('be.visible');
  }

  static get getCheckFooter() {
    return cy.xpath("//footer[contains(text(), 'Platea dictumst quisque sagittis purus sit amet')]").should('be.visible')
      .contains('Platea dictumst quisque sagittis purus sit amet volutpat consequat.')
      .xpath('//footer//cite[@class = "traversal-cite"][contains(text(), "volutpat consequat.")]');
  }

  //List
  static get getListsHeader() {
    return cy.xpath('//h2[. = "Lists"]').should('be.visible')
  }
  static get getListsHave5Elements() {
    return cy.get('.traversal-drinks-list li')
      .should('have.length', 5);
  }
  static get getCoffeeElement() {
    return cy.get('li#coffee')
      .contains('Coffee');
  }
  static get getMilkElement() {
    return cy.get('li#milk')
      .contains('Milk');
  }
  static get getTeaElement() {
    return cy.get('li#tea')
      .contains('Tea');
  }
  static get getEspressoElement() {
    return cy.get('li#espresso')
      .contains('Espresso');
  }
  static get getSugarElement() {
    return cy.get('li#sugar')
      .contains('Sugar');
  }

  static get checkTraversaFoodListHave5Elements() {
    return cy.get('.traversal-food-list li')
      .should('have.length', 11);
  }
  static get getListHeaderFruits() {
    return cy.get('li#fruits').should('be.visible');

  }

  static get getAppleElement() {
    return cy.xpath('//li[contains(text(), "Apple")]').should('be.visible');
  }
  static get getBananaElement() {
    return cy.xpath('//li[contains(text(), "Banana")]').should('be.visible');
  }
  static get getBlackberriesElement() {
    return cy.xpath('//li[contains(text(), "Blackberries")]').should('be.visible');
  }
  static get getCherriesElement() {
    return cy.xpath('//li[contains(text(), "Cherries")]').should('be.visible');
  }
  static get getFigsElement() {
    return cy.xpath('//li[contains(text(), "Figs")]').should('be.visible');
  }
  static get getListHeaderVegetables() {
    return cy.xpath('//li[@id = "veggie"][contains(text(), "Vegetables")]').should('be.visible');
  }
  static get getAsparagusElement() {
    return cy.xpath('//li[contains(text(), "Asparagus")]').should('be.visible');
  }
  static get getBroccoliElement() {
    return cy.xpath('//li[contains(text(), "Broccoli")]').should('be.visible');
  }
  static get getKidneyBeansElement() {
    return cy.xpath('//li[contains(text(), "Kidney beans")]').should('be.visible');
  }
  static get getLentilsElement() {
    return cy.xpath('//li[contains(text(), "Lentils")]').should('be.visible');
  }
  static get getListHeaderTypesOfJobs() {
    return cy.xpath('//li[@id = "types-of-jobs"][contains(text(), "Types of Jobs")]');

  }
  static get checkTypesOfJobsHave3Elements() {
    return cy.get('.menu li')
      .should('have.length', 3);
  }
  static get getFinanceElement() {
    return cy.xpath('//li[contains(text(), "Finance")]').should('be.visible');
  }
  static get getTechnologyElement() {
    return cy.xpath('//li[contains(text(), "Technology")]').should('be.visible');
  }
  static get getSalesElement() {
    return cy.xpath('//li[contains(text(), "Sales")]').should('be.visible');
  }

  static get checkFooter() {
    return cy.xpath('//p[contains(text(), "Copyright © www.GianniBruno.com")]')
      .contains('Copyright © www.GianniBruno.com').should('be.visible');
  }

}


export default DataTablePage;