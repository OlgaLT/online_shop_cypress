import SearchPageElements from "../pages/SearchPageElements";
import ProductPageElements from "../pages/ProductPageElements";
import CartPageElements from "../pages/CartPageElements";

const Chance = require('chance');
const chance = new Chance();

const testEmailValue: string = chance.email({domain: 'test.com'});
const testFirstName: string = chance.first();
const testLastName: string = chance.last();
const testPassword: string = chance.string({ length: 5 });

describe('Shopping Process', () => {
  before(() => {

    cy.register(testEmailValue, testFirstName, testLastName, testPassword)

  })
  beforeEach(() => {

    cy.login(testEmailValue, testPassword)

  });
  it('opens available product page description', () => {
    // Search for a product (e.g., "dress")
    cy.visit('/',
      {
        qs: {
          controller: 'search',
          search_query: 'dress'
        }
      }
    )

    // Choose available product. Click More button and navigate to the product page
    cy.get(SearchPageElements.availableItems)
      .first()
      .parent()
      .siblings('.button-container')
      .invoke('show')
      .contains('More')
      .click()

    cy.url().should('include', 'controller=product')

  })
  it.only('add item to the cart', () => {

    cy.visit({
      url: '?id_product=2&controller=product#/1-size-s/8-color-white'
    })

    cy.get(ProductPageElements.cartIcon).should('include.text', 'empty')

    // Add the product to the cart by clicking on "Add to Cart" button
    cy.get(ProductPageElements.addToCartButton).should('be.visible').click()
    cy.get(ProductPageElements.successfulAddModal).should('be.visible')
    cy.get(ProductPageElements.modalCloseButton).click()
    cy.get(ProductPageElements.successfulAddModal).should('be.not.visible')

    // Verify the cart icon in the navigation bar
    cy.get(ProductPageElements.cartIcon).should('include.text', 'Product')

    // Navigate to the cart page
    cy.get(ProductPageElements.cartIcon).contains('Cart').click()
    cy.url().should('contain', 'controller=order')

    // Verify the product details and total price in the cart
    cy.get(CartPageElements.cartContent).should('be.visible')
    cy.get(CartPageElements.cartItems).should('have.length', 1)
    cy.get(CartPageElements.totalPrice).should('not.be.empty')
  })

})