declare namespace Cypress {
  interface Chainable<Subject = any> {
    register(email: any, fistName: any, lastName: any, password: any): void

    login(email: any, password: any): void
  }
}