describe('Koala Resort Hotel', ()=>{

    it('Test Case1', ()=>{
        cy.visit('https://qa-environment.koalaresorthotels.com/')

        cy.contains('Log in').click()

        //ASSERT

        //1) cy.url().should('include'
        cy.url().should('include', 'Account/Logon')
        //url 'Account/Logon' iceriyor mu

        //2) have.text
        cy.get('#navLogon > .nav-link').should('have.text', 'Log in')
        //locate edilen yerdeki metinde 'Log in' yaziyor mu
        
        //3) be.visible
        cy.get('.row > .mb-4').should('be.visible')
        //locate edilen yerde metin var mi veya gorunur mu

        //4) should('eq'
        cy.title().should('eq', 'KoalaResortHotels - Log in')
        // title buna esit mi ->'KoalaResortHotels - Log in'

        // 5) should('include.text' 
        cy.get('.row > .mb-4').should('include.text', 'Log in')
        // locate edilen yerde 'Log in' text olarak var mi
        //burada include ve have ayni sonucu verir.
    })
})