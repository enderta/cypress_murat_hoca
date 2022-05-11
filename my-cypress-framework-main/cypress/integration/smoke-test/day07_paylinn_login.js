/// <reference types="Cypress" />


describe('Paylinn Bank', () => {

    it('paylinn login test', () => {
        //URL'e git
        cy.visit('https://www.paylinn.com/')

        //Sign In'e click
        cy.contains('Sign In').click()
        
        //username gir
        cy.get(':nth-child(1) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').type('User')

        //password gir
        cy.get(':nth-child(2) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').type('user')

        //sign In butonuna tikla
        cy.get('.MuiButton-label').click()

        //giris yapildigini onayla
        cy.get('.header__nav > :nth-child(1) > .header__lineOne').should('contain.text', 'Welcoem')

    })
})