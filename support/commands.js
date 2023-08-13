// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('getIframeBody', (locator) => {
    return cy.get(locator).its('0.contentDocument').should('exist')
    .its('body')//находим в док-те body
    .should('not.be.undefined')// мы проверяем что body не undefined'
    .then(cy.wrap);//then подождет пока выполнятся все команды и вернется body, потом выполнится cy.wrap
})

import dayjs from 'dayjs';

Cypress.Commands.add('getCurrentDate', () => {
    return dayjs().format('MM-DD-YYYY');
  });

