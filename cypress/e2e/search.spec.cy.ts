import ProductSearchElements from "../pages/ProductSearchElements";

describe('Product Search', () => {
    const searchTerm = 'dress';

    beforeEach(() => {
        // Open main page
        cy.visit('/');
    });

    it('should display relevant products for the search term', () => {

        // 1. Locate the search bar
        cy.get(ProductSearchElements.searchBar)
            .should('be.visible');

        // 2. Enter a product name (e.g., "dress")
        cy.get(ProductSearchElements.searchBar)
            .type(searchTerm)
            .should('have.value', searchTerm);

        // 3. Click the search button
        cy.get(ProductSearchElements.searchButton)
            .click();

        // 4. Verify the search results
        cy.url().should('include', 'search_query=' + searchTerm);
        cy.get(ProductSearchElements.productList)
            .should('be.visible')
            .children()
            .should('have.length.greaterThan', 0);

        // 6. Verify the product titles
        cy.get(ProductSearchElements.productTitle)
            .each($title => {
                expect($title.attr('title').toLowerCase()).to.contain(searchTerm)
            });

    });
});
