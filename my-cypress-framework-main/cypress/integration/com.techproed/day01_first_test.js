describe('My First Test', () =>{
//describe ('isim', 'test icin olusturulacak fonksiyonlar')

    it('URL Testi', ()=> {
    //test'i tanimliyoruz. @Test gibi
    //it('Testin ismi', 'olusturulacak fonksiyonlar')

    //URL adtresinde google var mi?
    
    cy.visit('https://www.google.com/')
    //visit('site adresi') siteye gider

    cy.url().should('include', 'www.google.com')
    //url() url testi ici kullanilir.
    //should('iceriyormu', 'xxxxxx')
    })

    //2. Test olusturma

    it('Title Test', () =>{
    //Title da Google Var mi?
    cy.visit('https://www.google.com/')
    cy.title().should('eq', 'Google')
    })
})