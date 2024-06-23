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

import ProductPageElements from "../pages/ProductPageElements";

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
  // cy.intercept(
  //   {
  //     method: 'POST',
  //     query: {controller: 'authentication'}
  //   }
  // ).as('login')

  cy.request({
    method: 'POST',
    url: '/',
    qs: {controller: 'authentication'},
    form: true,
    body: {
      email: email,
      passwd: password,
      back: 'my-account',
      SubmitLogin: ''
    }
  })
  // cy.wait('@login')
})

Cypress.Commands.add('addAddress', (firstName, lastName, address, city) => {
  cy.visit('/',
    {
      qs: {controller: 'address'}
    }
  );
  cy.window().then((win) => {
    // @ts-ignore
    cy.wrap(win.token).as('token');
  });
  cy.get('@token').then((token) => {

    cy.request({
      method: 'POST',
      url: '/',
      qs: {controller: 'address'},
      form: true,
      body: {
        firstname: firstName,
        lastname: lastName,
        company: '',
        address1: address,
        address2: '',
        city: city,
        id_state: '1',
        postcode: '12345',
        id_country: '21',
        phone: '123456',
        phone_mobile: '123456',
        dni: '',
        other: '',
        alias: 'My address',
        id_address: '0',
        select_address: '0',
        token: token,
        submitAddress: ''
      }
    });
  })
})

Cypress.Commands.add('addItemToCart', () => {
  cy.intercept({
    method: 'POST'
  }).as('addToCart');

  cy.visit({
    url: '?id_product=2&controller=product#/1-size-s/8-color-white'
  });

  cy.get(ProductPageElements.addToCartButton).click();
  cy.wait('@addToCart');
})