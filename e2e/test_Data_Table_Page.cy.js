import { tableData2 } from "../test-data/data_table_values";
import DataTablePage from "./pages/Data_Table_Page";
import { firstTableRowsData } from "../test-data/data_table_values";
import { users } from "../test-data/data_table_values";
import { dataTableStep } from "../steps/Data_Table_Page_steps";

const dataTablePage = new DataTablePage();

describe('Data Table Page', () => {
  beforeEach(() => {
    cy.visit('https://www.webdriveruniversity.com/Data-Table/index.html');
  });

  it('Check Main Header', () => {
    dataTableStep.verifyGetMainHeader();
    dataTableStep.verifyGetMainHeaderText();
    // до введения степов  - dataTablePage.getMainHeaderText();
    dataTableStep.openDataTablePage();
  })

  it('Check table t01/t02', () => {
    dataTableStep.verifyCheckFirstTableContent();
    dataTableStep.verifyCheckSecondTableContent();
    dataTableStep.openDataTablePage();
  });

  it('Check form text field', () => {
    dataTableStep.verifyGetTextFirstName();
    dataTableStep.verifyCheckInputFirstName();
    dataTableStep.verifyGetFirstName('firstname');
    dataTableStep.verifyGetTextLastName();
    dataTableStep.verifyCheckInputLastName();
    dataTableStep.verifyGetLastName('lastname');
    dataTableStep.openDataTablePage();
  });

  it('Check Input Text Below:', () => {
    dataTableStep.verifyCheckInputTextBelowDisplay();
    dataTableStep.verifyCheckTextArea();
    dataTableStep.openDataTablePage();
  });

  it('Check Breadcrumb block', () => {
    dataTableStep.verifyGetHeaderBreadcrumb();
    dataTableStep.verifyCheckBreadcrumbHave3Elements();
    dataTableStep.verifyCheckSequenceOfElementsInBreadcrumb();
    dataTableStep.verifyGetHomeMenuInBreadcrumb();
    dataTableStep.verifyClickHomeMenuInBreadcrumb();
    dataTableStep.verifyGetAboutUsMenuInBreadcrumb()
    dataTableStep.verifyClickAboutUsMenuInBreadcrumb();
    dataTableStep.verifyGetContactUsMenuInBreadcrumb();
    dataTableStep.openDataTablePage();
  });

  it('Check Badges block', () => {
    dataTableStep.verifyGetHeaderBadges();
    dataTableStep.verifyCheckTodayDealsElement();
    dataTableStep.verifyCheckQuantityTodayDealsElement();
    dataTableStep.verifyCheckAllProductsElements();
    dataTableStep.verifyCheckQuantityAllProductsElements();
    dataTableStep.openDataTablePage();
  })

  it('Check Paginator block', () => {
    dataTableStep.verifyGetHeaderPaginator();
    dataTableStep.verifyGetPageNavigator();
    dataTableStep.verifyCheckPageSwitchingButtons();
    dataTableStep.verifyCheckFirstPageIsActive();
    dataTableStep.verifyCheckClickSecondPage();
    dataTableStep.verifyCheckSecondPageIsActive();
    dataTableStep.verifyCheckPreviousButton();
    dataTableStep.verifyCheckNextButton();
    dataTableStep.verifyCheckPageSwitching();
    dataTableStep.openDataTablePage();
  })

  it('Check Table block', () => {
    dataTableStep.verifyGetTableHeader();
    dataTableStep.verifyGetTable();
    dataTableStep.verifyCheckTableHeaders();
    dataTableStep.verifyCheckDataInTable();
    dataTableStep.openDataTablePage();
  });

  it('Check Buttons And StatesTable block', () => {
    dataTableStep.verifyGetButtonsAndStates();
    dataTableStep.verifyGetClickLinkButton();
    cy.url().should('contain', 'index.html');
    dataTableStep.verifyGetClickButtonbutton();
    dataTableStep.verifyGetClickInputButton();
    dataTableStep.verifyGetClickSubmitButton();
    dataTableStep.verifyGetClickResetButton();
    dataTableStep.verifyGetClickDangerButton();
    dataTableStep.verifyGetClickWarningButton();
    dataTableStep.verifyGetClickInfoButton();
    dataTableStep.verifyGetClickAlertButton();
    dataTableStep.verifyGetClickButton1();
    dataTableStep.openDataTablePage();
  });

  it('Check Random Text block', () => {
    dataTableStep.verifyGetRandomTextHeader();
    dataTableStep.verifyGetRandomTextContent();
    dataTableStep.verifyGetMarkText();
    dataTableStep.verifyGetBlockquote();
    dataTableStep.verifyGetCheckFooter();
    dataTableStep.openDataTablePage();
  });

  it('Check Header Lists', () => {
    dataTableStep.verifyGetListsHeader();
    dataTableStep.openDataTablePage();
  });

  it('Check traversal drinks list', () => {
    dataTableStep.verifyGetListsHave5Elements()
    dataTableStep.verifyGetCoffeeElement('be.visible');
    dataTableStep.verifyGetMilkElement('be.visible');
    dataTableStep.verifyGetTeaElement('be.visible');
    dataTableStep.verifyGetEspressoElement('be.visible');
    dataTableStep.verifyGetSugarElement('be.visible');
    dataTableStep.openDataTablePage();
  });

  it('Check traversal food list', () => {
    dataTableStep.verifyCheckTraversaFoodListHave5Elements('have.length', 11);
    dataTableStep.verifyGetListHeaderFruits();
    dataTableStep.verifyGetAppleElement();
    dataTableStep.verifyGetBananaElement();
    dataTableStep.verifyGetBlackberriesElement();
    dataTableStep.verifyGetCherriesElement();
    dataTableStep.verifyGetFigsElement();
    dataTableStep.verifyGetListHeaderVegetables();
    dataTableStep.verifyGetAsparagusElement();
    dataTableStep.verifyGetBroccoliElement();
    dataTableStep.verifyGetKidneyBeansElement();
    dataTableStep.verifyGetLentilsElement();
    dataTableStep.openDataTablePage();
  });

  it('Check Types of Jobs list', () => {
    dataTableStep.verifyGetListHeaderTypesOfJobs();
    dataTableStep.verifyCheckTypesOfJobsHave3Elements('have.length', 3);
    dataTableStep.verifyGetFinanceElement();
    dataTableStep.verifyGetTechnologyElement();
    dataTableStep.verifyGetSalesElement();
    dataTableStep.openDataTablePage();
  });

  it('Check Footer ', () => {
    dataTableStep.verifyCheckFooter('be.visible');
    dataTableStep.openDataTablePage();
  });
});