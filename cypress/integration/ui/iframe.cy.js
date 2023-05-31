/// <reference types="cypress" />
/// <reference types="cypress-iframe" /
// import 'cypress-iframe'

describe('Iframes test', () => {

    it('Demo examples', () => {

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.frameLoaded('#courses-iframe')
        cy.iframe().find("a[href*='mentorship']").eq(0).click()
    })
})