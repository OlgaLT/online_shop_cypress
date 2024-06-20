import RegistrationAuthorisationElements from "../pages/RegistrationAuthorisationElements";

const Chance = require('chance');
const chance = new Chance();

describe('Registration and authorisation', () => {

  let testEmailValue : string = chance.email({domain: 'test.com'});
  let testFirstName : string = chance.first();
  let testLastName : string = chance.last();

  beforeEach(() => {
    // Open main page
    cy.visit('/');

  })
  it('new user registration', () => {
    // find sign in button, it should be visible
    // click on the sign in button

    cy.get(RegistrationAuthorisationElements.signInButton)
        .should('contain.text', 'Sign in')
        .click();
    // authorisation page should open, check URL

    cy.url().should('include', 'controller=authentication&back=my-account');
    // find Create an account form, it should be visible

    cy.get(RegistrationAuthorisationElements.createAccountForm).should('be.visible');
    // find the email field, it should be empty
    // input a new email (email generation method)
    cy.get(RegistrationAuthorisationElements.newAccountEmailInput)
        .should('be.empty')
        .type(testEmailValue);

    // find “Create an account” button
    // Click on the button
    cy.get(RegistrationAuthorisationElements.createAccountButton).click()

    // Check that registration page opens
    cy.url()
        .should('include', 'controller=authentication&back=my-account#account-creation')

    // Input valid mandatory data
    cy.get(RegistrationAuthorisationElements.firstNameInput)
        .should('be.empty')
        .type(testFirstName);
    cy.get(RegistrationAuthorisationElements.lastNameInput)
        .should('be.empty')
        .type(testLastName)
    cy.get(RegistrationAuthorisationElements.emailInput)
        .should('have.value', testEmailValue)
    cy.get(RegistrationAuthorisationElements.passwordInput)
        .should('be.empty')
        .type(chance.string({ length: 5 }));

    // Intercept the request
    cy.intercept(
        {
          method: 'POST',
          query: {controller: 'authentication'}
        }
    ).as('createAccount')

    // Find button Register
    // Click on the button
    cy.get(RegistrationAuthorisationElements.registerButton).click();

    // check the payload data
    cy.wait('@createAccount')
        .its('request.body')
        .should('include', 'email')
        .and('include', 'customer_firstname')
        .and('include', 'customer_lastname')
        .and('include', 'passwd')

    // check the new created account page is opened
    cy.url().should('include', 'controller=my-account');

    // check the navigation menu, sign out should be present, account button should be visible
    cy.get(RegistrationAuthorisationElements.accountHeader).should('be.visible')
        .and('contain.text', testFirstName + ' ' + testLastName);
    cy.get(RegistrationAuthorisationElements.signOutButtoon).should('be.visible');

  })
})