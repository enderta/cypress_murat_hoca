import 'cypress-iframe'
//cypress runner'in iframe ile iletisime gecmesi icin
//gerekli olan kodlari tanimlar

describe('iframes',()=>{
    it('iframe',()=>{
        cy.visit('https://the-internet.herokuapp.com/iframe')
        cy.get('h3').should('contain', 'Editor')

        cy.frameLoaded('#mce_0_ifr')
        //diver.switchto.frame('.mce_0_ifr') ->Selenium
        //frameLoaded('locator') iframe'in yerini tanimliyoruz
        //iframe'i yukle

        cy.iframe().find('p').clear()
        //iframe git
        //find('p') p tag'ini bul
        //clear

        cy.iframe().find('p').type('Hello World')

        cy.get('.large-4 > div > a').should('contain.text', 'Elemental Selenium')

        cy.get('.large-4 > div > a').should('contain.text', 'Elemental Selenium').click()
    })
})