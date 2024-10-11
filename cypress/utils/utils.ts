export const clickTo = (
  element: string,
  options?: Partial<Cypress.ClickOptions>
) => {
  cy.get(element).click(options);
};
