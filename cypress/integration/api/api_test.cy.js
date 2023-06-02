/// <reference types="cypress" />

describe('Test suite for API testing', () => {

    it('First Test Case', () => {

        cy.visit('https://rahulshettyacademy.com/angularAppdemo/')

        cy.intercept({
            method: 'GET',
            url: 'https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty'
        }, {
            statusCode: 200,
            body: [
                {
                    "book_name": "RestAssured with Java",
                    "isbn": "RSU",
                    "aisle": 2301
            }]
        }).as('bookretrievels')
        cy.get("button[class='btn btn-primary']").click()
        cy.wait('@bookretrievels').then(({request, response}) => {

            cy.get('tr').should('have.length', response.body.length + 1)

        })
        cy.get('p').should('have.text', 'Oops only 1 Book available')
    })

    it.only('Second Test case', () => {

        cy.request('POST', 'https://reqres.in/api/users', {

            "name": "morpheus",
            "job": "leader"
        }
        ).then((response) => {
            expect(response.status).to.eq(201)
        })
    })
})