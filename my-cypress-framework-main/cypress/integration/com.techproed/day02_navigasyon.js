describe('Navigasyon', ()=>{
    it.skip('back,forward,refresh', ()=>{
        //skip -->testi test blogunda calistirmaz.

        cy.visit('https://qa-environment.koalaresorthotels.com/')

        cy.wait(2000)           //hard wait of cypress
        cy.contains('Log in').click()

        //cy.go('back')
        //onceki sayfaya git

        cy.go(-1)
        //onceki sayfaya git
        cy.wait(2000)

        cy.go('forward')
        cy.wait(2000)

        cy.go(1)    //ileri git
        cy.wait(2000)

        cy.reload()
        //sayfayi tekrar yokle
    })

    it('zincirleme navigasyon', ()=>{
        cy.visit('https://qa-environment.koalaresorthotels.com/')
        cy
        .contains('Log in')
        .click()
        .go('back')
        .go('forward')
        .go('back')

        cy.pause()
        cy
        .reload(true)
        .contains('Log in')
        .should('be.visible')
    })
})