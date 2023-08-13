export class PageObjectTest{

    getFindOutMoreButton(){
        return cy.xpath('//button[@data-target = "#myModal"]//b[contains(text(), "Find Out More!")]');
    }

    getIframeDocument(){
        return cy.get('Iframe')
        .its('0.contentDocument')// Добавляем индекс, чтобы получить первый элемент из коллекции iframe
        .should('exist');
    }

    getIframeBody(){
        return this.getIframeDocument()//мы берем наш Iframe документ
        .its('body')//находим в док-те body
        .should('not.be.undefined')// мы проверяем что body не undefined'
        .then(cy.wrap);//then подождет пока выполнятся все команды и вернется body, потом выполнится cy.wrap
    }
    getIframeFindOutMoreButton(){
        return this.getIframeBody()
        .find('button')
        .contains('Find Out More');
    }
}

export default PageObjectTest;