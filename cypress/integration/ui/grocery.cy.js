/// <reference types="cypress" />

describe('My test suite', () => {
    it('My first test case', () => {

        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
        cy.get('.search-keyword').type('ca')
        cy.wait(2000)
        cy.get('.product:visible').should('have.length', 4)
        cy.get('.products').find('.product').should('have.length', 4)

        cy.get('.products').find('.product').eq(2).contains('ADD TO CART').click()

        cy.get('.products').find('.product').each(($el, index, $list) => {

            const cashews = $el.find('h4.product-name').text()

            if (cashews.includes('Cashews')) {

                cy.wrap($el.find('button')).click()
            }
        })
        cy.get('.brand').then((logoElement) => {
            cy.log(logoElement.text())
        })
    })

    it('My first test case (modified)', () => {

        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
        cy.get('.search-keyword').type('ca')
        cy.wait(2000)

        cy.get('.product').should('have.length', 5)
        cy.get('.product:visible').should('have.length', 4)

        cy.get('.products').as('productLocator')
        cy.get('@productLocator').find('.product').should('have.length', 4)
        cy.get('@productLocator').find('.product').eq(2).contains('ADD TO CART').click()

        cy.get('@productLocator').find('.product').each(($el, index, $list) => {

            const cashews = $el.find('h4.product-name').text()

            if (cashews.includes('Cashews')) {

                cy.wrap($el.find('button')).click()
            }
        })
        cy.get('.brand').then((logoElement) => {
            cy.log(logoElement.text())
        })
        cy.get('.brand').should('have.text', 'GREENKART')
    })

    it('Check cart after add products', () => {

        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
        cy.get('.search-keyword').type('ca')
        cy.wait(2000)

        cy.get('.products').as('productLocator')
        cy.get('@productLocator').find('.product').each(($el, index, $list) => {

            const cashews = $el.find('h4.product-name').text()

            if (cashews.includes('Cashews')) {

                cy.wrap($el.find('button')).click()
            }
        })
        cy.get('.cart-icon > img').click()
        cy.contains('PROCEED TO CHECKOUT').click()
        cy.contains('Place Order').click()
    })
})