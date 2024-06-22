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

Cypress.Commands.add('register', (email, firstName, lastName, password) => {
  cy.request({
    method: 'POST',
    url: '/',
    qs: {controller: 'authentication'},
    form: true,
    body: {
      customer_firstname: firstName,
      customer_lastname: lastName,
      email: email,
      passwd: password,
      days: '',
      months: '',
      years: '',
      email_create: 1,
      is_new_customer: 1,
      back: 'my-account',
      submitAccount: ''
    }
  })
});

Cypress.Commands.add('login', (email, password) => {
  cy.request({
    method: 'POST',
    url: '/',
    qs: {controller: 'authentication'},
    form: true,
    body: {
      email: email,
      passwd: password,
      back: 'my-account',
      submitAccount: ''
    }
  })
})