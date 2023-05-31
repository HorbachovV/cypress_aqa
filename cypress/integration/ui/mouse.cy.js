/// <reference types="cypress" />

describe('My test suite', () => {

    it('Tables testing', () => {

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('div.mouse-hover-content').invoke('show')
        cy.contains('Top').click()

        cy.url().should('include', 'top')

    })
})