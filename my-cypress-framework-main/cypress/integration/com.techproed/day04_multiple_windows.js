describe('multiple windows', () => {
    it('removing target', ()=>{

        cy.visit('https://the-internet.herokuapp.com/windows')

        cy.wait(3000)

        cy.get('.example > a').invoke('removeAttr','target').click()
        //invoke('removeAttr', 'Atribute Name')
        // attribute siliyor.
        //yeni sekme acmiyor. tiklandiginda ayni sekmede aciyor

        cy.get('h3').should('have.text', 'New Window')
    })

    it('yeni urlde acma',()=>{
        cy.visit('https://the-internet.herokuapp.com/windows')

        cy.wait(3000)

        // prop() ile 'href' degerini aldik
        // prop()-> jquery, attribute degerini alan bir method

        cy
        .get('.example > a')
        .then((element) =>{
        const newURL = element.prop('href')
        
        cy.visit(newURL)
        })
        cy.get('h3').should('have.text', 'New Window')
    })
})