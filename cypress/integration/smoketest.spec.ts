// smoketest.spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test


describe('Smoke Test', () => {
    it('test site is up', () => {
        cy.visit('http://localhost:3000')
    })
})