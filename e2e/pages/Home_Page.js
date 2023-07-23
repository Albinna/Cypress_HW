
export class HomePage {
    visit() {
        cy.visit('http://www.webdriveruniversity.com/Page-Object-Model/index.html')
    }
    //мы проверяем что у нас есть такой тайтл Who Are We?
    static get getWhoAreWeTitle() {
        return cy.contains('Who Are We?');
    }

    static get getWhoAreWeText() {
        return cy.xpath('//div[@class="caption"]/p[starts-with(text(), "Lorem")]');
    }

    static get getOutMoreButton() {
        return cy.get('#button-find-out-more').contains('Find Out More!');

    }
    static get getOutMoreButton() {
        return cy.contains('button', 'Find Out More!');
    }
    static get getCarouselInner1() {
        return cy.get('img[src="../img/amp.svg"]');

    }

    static get getCarouselInner2() {
        return cy.get('img[src="../img/boombox.svg"]');

    }

    static get getCarouselInner3() {
        return cy.get('img[src="../img/nintendo.svg"]');

    }

    static get getScrollLeftButton() {
        return cy.get('a[data-slide="prev"]');

    }

    static get getScrollRightButton() {
        return cy.get('a[data-slide="next"]');

    }

    static get getCarouselIndicatorsButtonSlideZero() {

        return cy.get('li[data-slide-to="0"]');

    }

    static get getCarouselIndicatorsButtonSlideOne() {

        return cy.get('li[data-slide-to="1"]');

    }
    static get getCarouselIndicatorsButtonSlideTwo() {

        return cy.get('li[data-slide-to="2"]');

    }

    static get getContainerFluid() {
        return cy.xpath('//div[@class = "container-fluid"]');
    }

    static get displayHomeLink() {
        return cy.xpath('//a[@href = "index.html"]');
    }

    static get displayOurProductsLink() {
        return cy.xpath('//a[@href = "products.html"]');
    }

    static get clickOurProductsLink() {
        return cy.xpath('//a[@href = "products.html"]').click();
    }

    static get displayContactUsLink() {
       return cy.xpath('//a[@href="../Contact-Us/contactus.html"]');

    }

    static get clickContactUsLink() {
        cy.xpath('//a[@href="../Contact-Us/contactus.html"]').click();
    }

    static get displayWhyChooseUsTitle() {
        return cy.contains('Why Choose Us?');
    }

    static get checkDisplayFourTextLorem() {
        return cy.xpath('//div[@class="thumbnail"]//div[@class="caption"]//p[contains(text(), "Lorem")]');
    }

    static get displayGreatServiceTitle() {
        return cy.contains('GREAT SERVICE!');
    }


    static get displayExcellentCustomerServiceTitle() {
        return cy.contains('Excellent Customer Service!');
    }

    static get getBlockWithStars() {
        return cy.get('div.div-star');
    }

}


export default HomePage;