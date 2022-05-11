describe('file upload', () => {

    it.skip('tek dosya yukleme', () => {
        cy.visit('https://davidwalsh.name/demo/multiple-file-upload.php')
        cy.wait(4000)
        //cy.get('#filesToUpload').attachFile('image01.jpeg')
        //veya

        const path1 = 'image01.jpeg'
        cy.get('#filesToUpload').attachFile(path1)
        cy.get('#fileList > li').should('include.text','image01.jpeg')
        cy.contains("image01.jpeg").should('be.visible')
    })

    it.skip('coklu dosya yukleme', () => {
        cy.visit('https://davidwalsh.name/demo/multiple-file-upload.php')

        const path1 = 'image01.jpeg'
        const path2 = 'image02.jpeg'
        const path3 = 'image03.jpeg'

        cy.get('#filesToUpload')
        .attachFile(path1).wait(3000)
        .attachFile(path2).wait(3000)
        .attachFile(path3).wait(3000)   
    })

    it.skip('coklu dosya yukleme', () => {
        cy.visit('https://davidwalsh.name/demo/multiple-file-upload.php')
        
        //cy.get('#filesToUpload')
        //.attachFile(['image01.jpeg', 'image02.jpeg', 'image03.jpeg'])

        const path1 = 'image01.jpeg'
        const path2 = 'image02.jpeg'
        const path3 = 'image03.jpeg'

        cy.get("#filesToUpload").
        attachFile([path1, path2, path3])
    })

    it('override file name', () => {
        cy.visit('https://davidwalsh.name/demo/multiple-file-upload.php')
        const path1 = 'image01.jpeg'
        
        cy.get('#filesToUpload')
        .attachFile({filePath: path1, fileName: 'image.jpeg'})

        cy.contains("image.jpeg").should("be.visible")

        cy.get('#fileList > li').contains('image.jpeg').should('be.visible')
    })
})