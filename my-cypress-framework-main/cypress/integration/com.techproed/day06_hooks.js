describe('hooks', () => {

    before(()=>{
        console.log('BEFORE METHOD')
    })

    beforeEach(()=>{
        console.log('BEFORE EACH METHOD')
        cy.visit('https://qa-environment.koalaresorthotels.com/')
    })

    after(()=>{
        console.log('AFTER METHOD')
    })

    afterEach(()=>{
        console.log('AFTER EACH METHOD')
        cy.url().should('include', '/Account/Logon')
    })

    it('test 1', () => {
        cy.contains('Log in').click()
    })
})