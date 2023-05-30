/// <reference types="cypress" />

describe('My test suite', () => {

    it('Alert, confirm testing', () => {

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

        cy.get('#alertbtn').click()
        cy.get('#confirmbtn').click()

        cy.on('window:alert', (message) =>{

            expect(message).to.equal('Hello , share this practice page and share your knowledge?')
            
        })

        cy.on('window:confirm', (message) =>{

            expect(message).to.equal('Hello , Are you sure you want to confirm?')
            
        })
    })
    it('Tab testing', () => {

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

        cy.get('#opentab').invoke('removeAttr', 'target').click()

    })

    it.only('Navigation testing', () => {

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('#opentab').invoke('removeAttr', 'target').click()

        cy.url().should('include', 'qaclickacademy')
        cy.go('back')
    })
})