describe('My First Test', function() {
    it('Visits my site', function() {
        cy.visit('http://localhost:3000')
        cy.contains('New movie')
        cy.get('ul > li:nth-child(2').constains('Zoolander')
    })
})