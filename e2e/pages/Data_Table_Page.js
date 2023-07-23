
// Находим индекс заголовка с текстом, указанным в headerText



export class DataTablePage{
    visit(){
        cy.visit('https://www.webdriveruniversity.com/Data-Table/index.html')
    }

    getMainHeader(){
        return cy.get('#main-header');
    }

    getMainHeaderText(){
        return cy.contains('Data, Tables & Button States');
    }

    getTableCell(rowIndex, columnIndex) {
        return this.getTable().find('tr').eq(rowIndex).find('td').eq(columnIndex);
      }
    
      getCellValue(rowIndex, columnIndex) {
        return this.getTableCell(rowIndex, columnIndex).invoke('text');
      }
    

     
      getTable(tableIndex){
        let tableData;
        if(tableIndex ==1){
            tableData = table1;
        } else if (tableIndex ==2){
            tableData = table2;
        }
        for(const [rowIndex,row] of tableData.entries()){
            for (const [columnIndex, cellValue] of row.entries()){
                DataTablePage.getTableCell(tableIndex, rowIndex, collumnIndex, cellValue).should('exist')
            }
        }
        
//Breadcrumb
      }
      getHeaderBreadcrumb(){
        return cy.xpath('//h2[. = "Breadcrumb"]')
      }
      checkBreadcrumbHave3Elements(){
        cy.get(".breadcrumb li").should("have.length", 3);
      }
    //проверяем последовательность эл-тов 
    
       checkSequenceOfElementsInBreadcrumb(){
        cy.get(".breadcrumb li").eq(0).should("contain", "Home");
        cy.get(".breadcrumb li").eq(1).should("contain", "About Us");
        cy.get(".breadcrumb li").eq(2).should("contain", "Contact Us");
        // Проверяем, что Contact Us элемент активный
        cy.get(".breadcrumb li").eq(2).should("have.class", "active");
       }

      getHomeMenuInBreadcrumb(){
        return cy.get(".breadcrumb").contains("Home");
      }
      clickHomeMenuInBreadcrumb(){
        return cy.get(".breadcrumb").contains("Home").click();
      }
      getAboutUsMenuInBreadcrumb(){
        return cy.get(".breadcrumb").contains("About Us");
      }
      clickAboutUsMenuInBreadcrumb(){
        return cy.get(".breadcrumb").contains("About Us").click();
      }
      getContactUsMenuInBreadcrumb(){
        return cy.xpath("//li[@class = 'breadcrumb-item active']");
      }

      //Badges

      getHeaderBadges(){
        return cy.xpath('//h2[. = "Badges"]');

      }
      checkTodayDealsElement(){
        cy.xpath('//li[@class= "list-group-item badge-text"]').eq(0).should("contain", "Today's Deals");
      }
      checkQuantityTodayDealsElement(){
        cy.xpath('//span[@class = "badge badge-light"]').should("contain", 5);
      }

      checkAllProductsElements(){
        cy.xpath('//li[@class = "list-group-item badge-text"]').eq(1).should("contain", "All Products");
      }
      checkQuantityAllProductsElements(){
        cy.xpath('//span[@class = "badge traversal-badge"]').should("contain", 20);
      }

      //Paginator
      getHeaderPaginator(){
        return cy.xpath('//h2[. = "Pagination"]');
      }
      getPageNavigator(){
        return cy.xpath('//ul[@class = "pagination traversal-pagination"]');
      }
      //проверяем что есть кнопки переключения страниц
      checkPageSwitchingButtons(){
        cy.get(".page-link").should("exist");
      }
      checkFirstPageIsActive(){
        cy.get(".page-item").contains("1");
      }
      checkClickSecondPage(){
        cy.contains(".page-link", "2").click();
      }
      //проверяем что вторая страница активна после клика
      checkSecondPageIsActive(){
        cy.xpath('//a[@class = "page-link"]').contains("2").should('be.focused')
      }
      //кнопка "Previous" переключает на предыдущую страницу
      checkPreviousButton(){
        cy.contains(".page-link", "Previous").click();
        cy.get(".page-item").contains("1");
      }
      //кнопка "Next" переключает на следующую страницу
      checkNextButton(){
        cy.contains(".page-link", "Next").click();
        cy.get(".page-item").contains("2");
      }
      //проверяем что при клике на кнопку 3 переключается на 3-ю стр
      checkPageSwitching(){
        cy.xpath('//a[@class = "page-link"]').contains("5").click().should("contain", 5);
        cy.xpath('//a[@class = "page-link"]').contains("3").click().should("contain", 3);
      }
      //проверить что страницы 6 не существует
      checkPage6IsMissing(){
      cy.contains(".page-link", "6").should('not.exist');
      }

      }

export default DataTablePage;