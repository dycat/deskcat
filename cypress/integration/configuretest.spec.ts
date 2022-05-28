describe('test for configure funtions', () => {
    it('test for setup background', () => {
        cy.visit('http://localhost:3000')
        cy.get('@configure_id').should('be.visible')
    })
})