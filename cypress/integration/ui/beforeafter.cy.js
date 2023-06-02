/// <reference types="cypress" />
import signUpData from '../../fixtures/example.json'   
import HomePage from '../page_objects/home_page'

const homePage = new HomePage()

describe('BeforeEach', () => {

    beforeEach(() => {

        cy.visit('https://rahulshettyacademy.com/angularpractice')
    })

    after(() => {
        cy.visit('https://rahulshettyacademy.com/')
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

    it('My third test case', () => {
        cy.visit('https://rahulshettyacademy.com/angularpractice/shop')
        signUpData.productName.forEach((element) => {
            cy.log(element)
            cy.selectProduct(element)
        })
        cy.get('#navbarResponsive > .navbar-nav > .nav-item > .nav-link').click()
        cy.contains('Checkout').click()
        cy.get('#country').type('ukraine')
        // Cypress.config('defaultCommandTimeout', 8000)
        cy.wait(6000)
        cy.get('.suggestions > ul > li > a').contains('Ukraine').click()
        cy.get('#checkbox2').click({force: true})
        cy.get('.ng-untouched > .btn').click()

        //cheking the same string
        cy.get('.alert').contains('Success! Thank you! Your order will be delivered in next few weeks :-).')
        // cy.get('.alert').should('have.text', 'Success! Thank you! Your order will be delivered in next few weeks :-).') // failed
        cy.get('.alert').then((element) => {
            const success = element.text()
            expect(success.includes('Succes')).to.be.true
        })
    })

    it('Testing sum of products in cart', () => {
        let sum = 0

        // cy.visit('https://rahulshettyacademy.com/angularpractice/shop')
        cy.visit(Cypress.env('url') + 'angularpractice/shop')
        signUpData.productName.forEach((element) => {
            cy.selectProduct(element)
        })
        cy.get('#navbarResponsive > .navbar-nav > .nav-item > .nav-link').click()
        cy.get('tr td:nth-child(4) strong').each(($el, index, $list) => {

            let price = $el.text().split(' ')
            price = price[1].trim()
            sum += Number(price) 
            
        })
        cy.get('h3 strong').then((element) => {

            let price = element.text().split(' ')
            price = price[1].trim()
            expect(Number(sum)).to.equal(Number(price))
        })
    })
})    