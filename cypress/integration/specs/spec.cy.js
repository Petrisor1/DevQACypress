/// <reference types="Cypress" />

describe('My First Test', () => {
  it('finds the content "type"', () => {
    cy.visit('https://example.cypress.io')

    cy.contains('type')
    cy.get('.main').should('be.visible')
  })
})