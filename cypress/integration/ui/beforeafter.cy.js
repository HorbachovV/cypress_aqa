// cy.pause to pause test
//cy.debug to debuging

/// <reference types="cypress" />
import signUpData from '../../fixtures/example.json'   
import HomePage from '../page_objects/home_page'

const homePage = new HomePage()

describe('BeforeEach', () => {

    beforeEach(() => {

        cy.visit('https://rahulshettyacademy.com/angularpractice')
    })

    it('My first test case', () => {

        homePage.getNameInput().type(signUpData.name)
        homePage.getEmailInput().type(signUpData.email)
        homePage.getSelectGender().select(signUpData.gender)
    })

    it('My second test case', () => {

        homePage.getNameInput().type('Romana')
        homePage.getEmailInput().type('notmymail@dot.com')
        homePage.getSelectGender().select('Female')
        homePage.getNameValue().should('have.value', 'Romana')
        homePage.getAttrMinLength().should('have.attr', 'minlength', 2)
        homePage.getRadioButtonsStatus().should('be.disabled')
    })

    it.only('My third test case', () => {
        cy.visit('https://rahulshettyacademy.com/angularpractice/shop')
        signUpData.productName.forEach((element) => {
            cy.log(element)
            cy.selectProduct(element)
        })
        cy.get('#navbarResponsive > .navbar-nav > .nav-item > .nav-link').click()
        cy.contains('Checkout').click()
        cy.get('#country').type('ukraine')
        // Cypress.config('defaultCommandTimeout', 8000)
        cy.wait(8000)
        cy.get('.suggestions > ul > li > a').contains('Ukraine').click()
    })
})    