import '@4tw/cypress-drag-drop'

///<reference types = 'Cypress'/>

describe('drag and drop', ()=>{
    it.skip('double click', ()=>{
        cy.visit('https://www.testandquiz.com/selenium/testing.html')
        cy.get('#dblClkBtn').dblclick()//cift tiklama
        //sag tiklama rightclick()

        cy.on('window:alert', (str)=>{
            //Assert
            //1)
            expect(str).to.equal('hi, JavaTpoint Testing')
            //2)
            expect(str).to.eq('hi, JavaTpoint Testing')
            //3)
            expect(str).to.contains('hi, JavaTpoint Testing')
        })
    })

    it('drag and drop', ()=>{
        // 1) Terminalden: npm install --save-dev @4tw/cypress-drag-drop
        // 2) import '@4tw/cypress-drag-drop'
        cy.visit('https://www.testandquiz.com/selenium/testing.html')

        cy.get('#sourceImage')//suruklenecek element
        .drag('#targetDiv')//suruklenecegi yer
    })
})