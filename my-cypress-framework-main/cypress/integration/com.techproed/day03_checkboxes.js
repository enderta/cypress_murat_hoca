describe('checkboxes', () => {

    it.skip('checking single box', () => {
        //it.skip --> testi run etmez
        //it.only --> sadece o testi calistirir


        cy.visit('http://automationpractice.com/index.php')
        cy.get('.sf-with-ul').first().click()

        //tikli olmadigini test et
        cy.get('#layered_category_4').should('not.be.checked')
        //should('not.be.checked') -> element tikli degilse true return
        //isaretlenmedigini test eder

        //tikla
        cy.get('#layered_category_4').check()

        ////tikli oldugunu test et
        cy.get('#layered_category_4').should('be.checked')
        //should('be.checked') -> tikli ise true return eder

        //tiklamayi kaldirir
        cy.get('#layered_category_4').uncheck().should('not.be.checked')
        //uncheck() -> tiklamyi kaldirir.
        })

    it.skip('check all checkboxes', () => {
        cy.visit('http://automationpractice.com/index.php')
        cy.get('.sf-with-ul').first().click()

        //butun kutulara tikla
        cy.get("input[type='checkbox']").check()
        cy.wait(3000)

        //tiklamalari kaldir
        cy.get("input[type='checkbox']").uncheck()
    })

    it('click', () => {
        cy.visit('http://automationpractice.com/index.php')
        cy.get('.sf-with-ul').first().click()

        cy.get("input[type='checkbox']").click({ multiple: true })

        //click({ multiple: true }) -> click() tek elemente uygulanır.
        //birden fazla elemente uygulmak icin { multiple: true } kullanilir.

        //Assert
        //1)
        cy.get("input[type='checkbox']").first().should('be.checked')

        //2) 

        cy.get("input[type='checkbox']").first().parent().should('have.class', 'checked')

        //3)should('have.id', 'username')
        //4)should('have.type', 'text')
        //should('have.class', 'container')
    })
})