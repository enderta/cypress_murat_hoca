describe('Login', ()=>{

    //negatif test icin fake email ve password
    //const eMail = "qwert@gmail.com"
    //const pass = "qwert"

    const eMail = "cypress_test_1@gmail.com"
    const pass = "admin_123"

    it.skip('login negatif', ()=>{
        cy.visit("https://test.iyikisordun.com/login.php")
        cy.get('[type="email"]').type(eMail)
        cy.get('[type="password"]').type(pass)
        cy.get('.btn').click()
        cy.get("#fail").should('include.text', 'Girdiğiniz bilgiler hatalıdır.')
        //#fail -> fail bekledigimiz durumlarda kullanabiliriz
    })
    
    it('login pozitif', ()=>{
        cy.visit("https://test.iyikisordun.com/login.php")
        cy.get('[type="email"]').type(eMail)
        cy.get('[type="password"]').type(pass)
        cy.get('.btn').click()

        cy.get('.m-0').should('have.text', 'Dashboard')
        cy.url().should('include', 'index.php')
    })
})