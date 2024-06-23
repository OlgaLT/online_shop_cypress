import CheckOutElements from "../pages/checkOutElements";
import checkOutElements from "../pages/checkOutElements";
import HistoryPageElements from "../pages/historyPageElements";

const Chance = require('chance');
const chance = new Chance();

const testEmailValue: string = chance.email({domain: 'test.com'});
const testFirstName: string = chance.first();
const testLastName: string = chance.last();
const testPassword: string = chance.string({ length: 5 });
const testAddress: string = chance.address()
const testCity: string = chance.city()


describe('Check out', () => {
  before(() => {

    cy.register(testEmailValue, testFirstName, testLastName, testPassword);
    cy.addAddress(testFirstName, testLastName, testAddress, testCity);

  })

  beforeEach(() => {
    // 3. The user is logged into the website
    cy.login(testEmailValue, testPassword);
  })

  it('payment by cheque for user with filled address', () => {

    // 4. Add item to the Cart
    cy.addItemToCart()

    cy.visit('/',
      {
        qs: {
          controller: 'order'
        }
      }
    )
    cy.get('.cart_navigation .standard-checkout').click()

    cy.url().should('include', 'controller=order');
    // cy.url().should('include', 'step=3');
    cy.get(CheckOutElements.stepAddress).then($el => {
      expect($el).to.have.class('step_current');
    });

    // Check addresses fields. Delivery and Bulling addresses should be filled with register address.
    // Update buttons are available for both addresses.
    cy.get(CheckOutElements.deliveryAddressBox)
      .should('include.text', testAddress)
    cy.get(CheckOutElements.deliveryAddressBox)
      .should('include.text', testAddress)
    cy.get(CheckOutElements.deliveryAddressBox).contains('Update').should('be.visible')

    cy.get(CheckOutElements.billingAddress)
      .should('include.text', testAddress)
    cy.get(CheckOutElements.billingAddress)
      .should('include.text', testAddress)
    cy.get(CheckOutElements.billingAddress).contains('Update').should('be.visible')

    cy.get(CheckOutElements.proceedButton).click()

    // Shipping step should open. In oder steps bar Shipping step should be highlighted.
    // URL should contain controller=order&step=4
    cy.url().should('include', 'controller=order');
    // cy.url().should('include', 'step=4');

    cy.get(CheckOutElements.stepShipping).then($el => {
      expect($el).to.have.class('step_current');
    });

    // Check shipping options
    cy.get(CheckOutElements.deliveryOptions).should('have.length.at.least', 1)
    cy.get(checkOutElements.optionsRadioButton).first()
      .should('be.checked')

  //   Review Terms of service checkbox
    cy.get(CheckOutElements.termsCheckBox).should('not.be.checked').check()

    cy.get(CheckOutElements.proceedButton).click()

    // Payment step should open. In oder steps bar Payment step should be highlighted.
    //   URL should contain controller=order&step=5
    cy.url().should('include', 'controller=order');
    // cy.url().should('include', 'step=5');

    cy.get(CheckOutElements.stepPayment).then($el => {
      expect($el).to.have.class('step_current');
    });

    // Choose Payment by check option and click
    cy.get(CheckOutElements.chequePayment).click()
    // Check payment confirmation should display. URL should contain controller=payment
    cy.url().should('contain', 'controller=payment')
    cy.get('#center_column').contains('Check payment').should('be.visible')
    cy.get(CheckOutElements.proceedButton).click()

    // Oder confirmation page should open. Your order on My Shop is complete. notification should be displayed.
    // URL should contain controller=order-confirmation
    cy.url().should('contain', 'controller=order-confirmation');
    cy.get(CheckOutElements.successAlert).should('contain.text', CheckOutElements.successAlertText)

    // The last order should be displayed in the history
    cy.visit('/',
      {
        qs: {
          controller: 'history'
        }
      }
    )

    cy.get(HistoryPageElements.firstOrder).should('be.visible')

  })
})