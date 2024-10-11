declare namespace Cypress {
  interface Chainable<Subject = any> {
    register(email: any, fistName: any, lastName: any, password: any): void

    login(email: any, password: any): void

    addAddress(firstName: any, lastName: any, address: any, city: any): void

    addItemToCart(): void
  }
}