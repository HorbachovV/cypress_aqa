//npx cypress open
//it.skip()
//it.only()
/// <reference types="cypress" />

describe('My test suite', () => {

    it('Checkbox testing ', () => {

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('#checkBoxOption1').check().should('be.checked').and('have.value', 'option1')
        cy.get('#checkBoxOption2').should('not.be.checked').and('have.value', 'option2')
        cy.get('#checkBoxOption3').should('not.be.checked').and('have.value', 'option3')

        cy.get('#checkBoxOption1').uncheck().should('not.be.checked').and('have.value', 'option1')

        cy.get('input[type="checkbox"]').check()
        cy.get('input[type="checkbox"]').uncheck()

        cy.get('input[type="checkbox"]').check(['option1', 'option3'])
    })

    it('Dropdowns testing', () => {

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('select').select('Option2').should('have.value', 'option2')

        cy.get('#autocomplete').type('ukr')
        cy.get('.ui-menu-item div').each(($el, index, $list) => {

            if ($el.text() === 'Ukraine') {
                
                $el.click()
            }
        })
        cy.get('#autocomplete').should('have.value', 'Ukraine')
    })

    it('Visible/invisible elements testing', () => {

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

        cy.get('#displayed-text').should('be.visible')
        cy.get('#hide-textbox').click()
        cy.get('#displayed-text').should('not.be.visible')
        cy.get('#show-textbox').click()
        cy.get('#displayed-text').should('be.visible')
    })

    it.only('Radiobuttons elements testing', () => {

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

        cy.get('[for="radio1"] > .radioButton').check()
        cy.get('[for="radio1"] > .radioButton').should('be.checked')
    })
})



// 'ui-menu-item-wrapper'
// describe('Dynamic Dropdown', () => {
//     it('should select a country from the dropdown', () => {
//         cy.get('[data-cy=country-input]').type('Unite');
//         cy.get('[data-cy=country-dropdown]').should('be.visible');
//         cy.contains('[data-cy=country-option]', 'United States').click();
//         cy.get('[data-cy=country-input]').should('have.value', 'United States');
//     });
// });