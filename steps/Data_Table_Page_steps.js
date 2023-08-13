import DataTablePage from "../e2e/pages/Data_Table_Page";
import { GeneralStep } from "./general_step.";

export class DataTableStep extends GeneralStep {
    openDataTablePage() {
        cy.visit('https://www.webdriveruniversity.com/Data-Table/index.html');
        cy.url().should('include', 'Data-Table');
    }
    verifyGetMainHeader() {
        DataTablePage.getMainHeader.should('be.visible');
    }
    verifyGetMainHeaderText() {
        DataTablePage.getMainHeaderText.should('be.visible');
    }
    verifyCheckFirstTableContent() {
        DataTablePage.checkFirstTableContent()
    }
    verifyCheckSecondTableContent() {
        DataTablePage.checkSecondTableContent()
    }
    verifyGetTextFirstName() {
        DataTablePage.getTextFirstName.should('be.visible');
    }
    verifyCheckInputFirstName() {
        DataTablePage.checkInputFirstName;
    }
    verifyGetFirstName() {
        DataTablePage.getFirstName.should('be.visible');
    }
    verifyGetTextLastName() {
        DataTablePage.getTextLastName.should('be.visible');
    }
    verifyCheckInputLastName() {
        DataTablePage.checkInputLastName.should('be.visible');
    }
    verifyGetLastName() {
        DataTablePage.getLastName.should('be.visible');
    }
    verifyCheckInputTextBelowDisplay() {
        DataTablePage.checkInputTextBelowDisplay.should('be.visible');
    }
    verifyCheckTextArea() {
        DataTablePage.checkTextArea()
    }
    verifyGetHeaderBreadcrumb() {
        DataTablePage.getHeaderBreadcrumb.should('be.visible');
    }
    verifyCheckBreadcrumbHave3Elements() {
        DataTablePage.checkBreadcrumbHave3Elements();
    }
    verifyCheckSequenceOfElementsInBreadcrumb() {
        DataTablePage.checkSequenceOfElementsInBreadcrumb
    }
    verifyGetHomeMenuInBreadcrumb() {
        DataTablePage.getHomeMenuInBreadcrumb().should('exist');
    }
    verifyClickHomeMenuInBreadcrumb() {
        DataTablePage.clickHomeMenuInBreadcrumb;
    }
    verifyGetAboutUsMenuInBreadcrumb() {
        DataTablePage.getAboutUsMenuInBreadcrumb().should('exist');
    }

    verifyClickAboutUsMenuInBreadcrumb() {
        DataTablePage.clickAboutUsMenuInBreadcrumb();
    }
    verifyGetContactUsMenuInBreadcrumb() {
        DataTablePage.getContactUsMenuInBreadcrumb().should('be.visible');
    }
    verifyGetHeaderBadges() {
        DataTablePage.getHeaderBadges().should('be.visible');
    }
    verifyCheckTodayDealsElement() {
        DataTablePage.checkTodayDealsElement;
    }
    verifyCheckQuantityTodayDealsElement() {
        DataTablePage.checkQuantityTodayDealsElement;
    }
    verifyCheckAllProductsElements() {
        DataTablePage.checkAllProductsElements;
    }
    verifyCheckQuantityAllProductsElements() {
        DataTablePage.checkQuantityAllProductsElements;
    }
    verifyGetHeaderPaginator() {
        DataTablePage.getHeaderPaginator.should('be.visible');

    }
    verifyGetPageNavigator() {
        DataTablePage.getPageNavigator.should('be.visible');
    }
    verifyCheckPageSwitchingButtons() {
        DataTablePage.checkPageSwitchingButtons;
    }
    verifyCheckFirstPageIsActive() {
        DataTablePage.checkFirstPageIsActive;
    }
    verifyCheckClickSecondPage() {
        DataTablePage.checkClickSecondPage;
    }
    verifyCheckSecondPageIsActive() {
        DataTablePage.checkSecondPageIsActive;
    }
    verifyCheckPreviousButton() {
        DataTablePage.checkPreviousButton;
    }
    verifyCheckNextButton() {
        DataTablePage.checkNextButton;
    }
    verifyCheckPageSwitching() {
        DataTablePage.checkPageSwitching;
    }
    verifyGetTableHeader() {
        DataTablePage.getTableHeader;
    }
    verifyGetTable() {
        DataTablePage.getTable;
    }
    verifyCheckTableHeaders() {
        DataTablePage.checkTableHeaders;
    }
    verifyCheckDataInTable() {
        DataTablePage.checkDataInTable();
    }
    verifyGetButtonsAndStates() {
        DataTablePage.getButtonsAndStates;
    }
    verifyGetClickLinkButton() {
        DataTablePage.getClickLinkButton;
    }
    verifyGetClickButtonbutton() {
        DataTablePage.getClickButtonbutton;
    }
    verifyGetClickInputButton() {
        DataTablePage.getClickInputButton;
    }
    verifyGetClickSubmitButton() {
        DataTablePage.getClickSubmitButton;
    }
    verifyGetClickResetButton() {
        DataTablePage.getClickResetButton;
    }
    verifyGetClickDangerButton() {
        DataTablePage.getClickDangerButton;
    }
    verifyGetClickWarningButton() {
        DataTablePage.getClickWarningButton;
    }
    verifyGetClickInfoButton() {
        DataTablePage.getClickInfoButton;
    }
    verifyGetClickAlertButton() {
        DataTablePage.getClickAlertButton;
    }
    verifyGetClickButton1() {
        DataTablePage.getClickButton1.should('be.visible');
    }
    verifyGetClickButton1() {
        DataTablePage.getClickButton2;
    }
    verifyGetClickButton1() {
        DataTablePage.getClickButton3;
    }
    verifyGetClickButton1() {
        DataTablePage.getClickButton4;
    }
    verifyCheckFocusAfterClickButton() {
        DataTablePage.checkFocusAfterClickButton;
    }
    verifyGetRandomTextHeader() {
        DataTablePage.getRandomTextHeader;
    }
    verifyGetRandomTextContent() {
        DataTablePage.getRandomTextContent;
    }
    verifyGetMarkText() {
        DataTablePage.getMarkText;
    }
    verifyGetBlockquote() {
        DataTablePage.getBlockquote
    }
    verifyGetCheckFooter() {
        DataTablePage.getCheckFooter;
    }
    verifyGetListsHeader() {
        DataTablePage.getListsHeader;
    }
    verifyGetListsHave5Elements() {
        DataTablePage.getListsHave5Elements;
    }
    verifyGetCoffeeElement() {
        DataTablePage.getCoffeeElement;
    }
    verifyGetMilkElement() {
        DataTablePage.getMilkElement;
    }
    verifyGetTeaElement() {
        DataTablePage.getTeaElement;
    }
    verifyGetEspressoElement() {
        DataTablePage.getEspressoElement;
    }
    verifyGetSugarElement() {
        DataTablePage.getSugarElement;
    }
    verifyCheckTraversaFoodListHave5Elements() {
        DataTablePage.checkTraversaFoodListHave5Elements;
    }
    verifyGetListHeaderFruits() {
        DataTablePage.getListHeaderFruits;
    }
    verifyGetAppleElement() {
        DataTablePage.getAppleElement;
    }
    verifyGetBananaElement() {
        DataTablePage.getBananaElement;
    }
    verifyGetBlackberriesElement() {
        DataTablePage.getBlackberriesElement;
    }
    verifyGetCherriesElement() {
        DataTablePage.getCherriesElement;
    }
    verifyGetFigsElement() {
        DataTablePage.getFigsElement;
    }
    verifyGetListHeaderVegetables() {
        DataTablePage.getListHeaderVegetables;
    }
    verifyGetAsparagusElement() {
        DataTablePage.getAsparagusElement;
    }
    verifyGetBroccoliElement() {
        DataTablePage.getBroccoliElement;
    }
    verifyGetKidneyBeansElement() {
        DataTablePage.getKidneyBeansElement;
    }
    verifyGetLentilsElement() {
        DataTablePage.getLentilsElement;
    }
    verifyGetListHeaderTypesOfJobs() {
        DataTablePage.getListHeaderTypesOfJobs;
    }
    verifyCheckTypesOfJobsHave3Elements() {
        DataTablePage.checkTypesOfJobsHave3Elements;
    }
    verifyGetFinanceElement() {
        DataTablePage.getFinanceElement;
    }
    verifyGetTechnologyElement() {
        DataTablePage.getTechnologyElement;
    }
    verifyGetSalesElement() {
        DataTablePage.getSalesElement;
    }
    verifyCheckFooter() {
        DataTablePage.checkFooter;
    }
}

export const dataTableStep = new DataTableStep();