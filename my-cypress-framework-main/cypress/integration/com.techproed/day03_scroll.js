describe('scroll', () => {

    it('scroll into view', () => {
        cy.visit(('https://qa-environment.koalaresorthotels.com'))

        cy.get('.col-md-7 > .mb-4').scrollIntoView()
        cy.wait(3000)
        // scrollIntoView()-> locate edilen yere gider

        cy.get(':nth-child(9) > .container > .justify-content-center > .col-md-7 > h2').scrollIntoView()
        cy.wait(3000)

        cy.get('.col-md-7 > h2 > span').scrollIntoView()

        cy.scrollTo('bottom')
        //en asagiya git
        cy.wait(3000)

        cy.scrollTo('top')
        // en yukariya git
        cy.wait(3000)

        cy.scrollTo(0, 1000)    //1000px down
        cy.wait(3000)

        cy.scrollTo(0, -500)    //500px up
    })
})