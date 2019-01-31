describe('My First Test', function() {
  it('Visits my site', function() {
    cy.visit('http://localhost:3000')
    cy.get('ul > li:first-child').should('have.value', 'Zoolander')
  })
})