import DataTablePage from "./pages/Data_Table_Page";

const dataTablePage = new DataTablePage();

describe('Data Table Page', () => {
    it('Check Main Header', () =>{
      dataTablePage.visit();
      dataTablePage.getMainHeader();
      dataTablePage.getMainHeaderText();

  })

  it('Check table t01', () =>{
    dataTablePage.visit();
    dataTablePage.getTablet01().should('be.visible');
    dataTablePage.getCellValue(0, 'Firstname').should('eq', 'John');
    
    // Access the cell value in the second row and "Last Name" column
    dataTablePage.getCellValue(1, 'Lastname').should('eq', 'Smith');

    // Access the cell value in the third row and "Age" column
    dataTablePage.getCellValue(2, 'Age').should('eq', '45');
  });

  it('should get table headers', () => {
    dataTablePage.getTableHeaders().should('have.length', 3); // Проверяем, что таблица содержит три заголовка столбцов
  });

  it('should get cell value', () => {
    expect(dataTablePage.getCellValue(0, 'Firstname')).to.equal('John');
    expect(dataTablePage.getCellValue(1, 'Lastname')).to.equal('Smith');
    expect(dataTablePage.getCellValue(2, 'Age')).to.equal('45');
  });

  it('should validate cells in the table', () => {
    const tablesData = [table1, table2];

    for (let tableIndex = 0; tableIndex < tablesData.length; tableIndex++) {
      const tableData = tablesData[tableIndex];

      for (const [rowIndex, row] of tableData.entries()) {
        for (const [columnIndex, cellValue] of row.entries()) {
          dataTablePage.getTableCell(tableIndex + 1, rowIndex, columnIndex, cellValue).should('exist');
        }
      }
    }
    it('should access and validate table data', () => {
      // Access and validate the first cell value (row 1, column 1)
      dataTablePage.getCellValue(0, 0).should('eq', 'John');
  
      // Access and validate the second cell value (row 2, column 2)
      dataTablePage.getCellValue(1, 1).should('eq', 'Smith');
  
      // Access and validate the third cell value (row 3, column 3)
      dataTablePage.getCellValue(2, 2).should('eq', '28');
    });

  })

  it('Check Breadcrumb block', () => {
    dataTablePage.visit();
    dataTablePage.getHeaderBreadcrumb().should('be.visible');
    dataTablePage.checkBreadcrumbHave3Elements("have.length", 3);
    dataTablePage.checkSequenceOfElementsInBreadcrumb();
    dataTablePage.getHomeMenuInBreadcrumb().should('exist');
    dataTablePage.clickHomeMenuInBreadcrumb();
    dataTablePage.getAboutUsMenuInBreadcrumb().should('exist');
    dataTablePage.clickAboutUsMenuInBreadcrumb();
    dataTablePage.getContactUsMenuInBreadcrumb().should('exist');
    
  });

  it('Check Badges block', () => {
    dataTablePage.visit();
    dataTablePage.getHeaderBadges().should('be.visible');
    dataTablePage.checkTodayDealsElement();
    dataTablePage.checkQuantityTodayDealsElement();
    dataTablePage.checkAllProductsElements();
    dataTablePage.checkQuantityAllProductsElements();
  })

  it.only('Check Paginator block', () => {
    dataTablePage.visit();
    dataTablePage.getHeaderPaginator().should('be.visible');
    dataTablePage.getPageNavigator().should('be.visible');
    dataTablePage.checkPageSwitchingButtons();
    dataTablePage.checkFirstPageIsActive();
    dataTablePage.checkClickSecondPage();
    dataTablePage.checkSecondPageIsActive();
    dataTablePage.checkPreviousButton();
    dataTablePage.checkNextButton();
    dataTablePage.checkPageSwitching();
    dataTablePage.checkPage6IsMissing();

  })
})
