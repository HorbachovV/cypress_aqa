class HomePage {

    getNameInput () {

        return cy.get(':nth-child(1) > .form-control')
    }
    getEmailInput () {

        return cy.get(':nth-child(2) > .form-control')
    }
    getSelectGender () {

        return cy.get('#exampleFormControlSelect1')
    }
    getNameValue () {

        return cy.get('.ng-untouched')
    }
    getAttrMinLength () {

        return cy.get(':nth-child(1) > .form-control')
    }
    getRadioButtonsStatus () {

        return cy.get('#inlineRadio3')
    }
    
}

export default HomePage