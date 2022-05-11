import HomePage from '../pageObjectRespository/HomePage'
import LoginPage from '../pageObjectRespository/LoginPage'

describe('Paylinn Bank', () => {

    before(function(){
        cy.fixture('creds').then(function(data){
            this.data = data
        })
    })

    it('paylinn login test', function(){

        //page object olusturma
        const homePage = new HomePage()

        //loginPage object olusturma
        const loginPage = new LoginPage()

        //URL'e git
        cy.visit('https://www.paylinn.com/')

        //Sign In'e click
        homePage.getSigninLink().click()
        
        //username gir
        loginPage.getUserNameBox().type(this.data.username)

        //username girildigini dogrula
        loginPage.getUserNameBox()
        .should('have.attr', 'value', this.data.username)

        //password gir
        loginPage.getPasswordBox().type(this.data.password)

        //password girildigini dogrula
        loginPage.getPasswordBox().should('have.attr', 'value', this.data.password)

        //sign In butonuna tikla
        loginPage.getLoginButton().click()

        //giris yapildigini onayla
        loginPage.getWelcomeText().should('contain.text', 'Welcome')

        //giris yapildigini assert etme
        loginPage.getNavbarHeader()
        .should('contain.text', 'Welcome')
        .and('contain.text', 'React')
        .and('contain.text', 'Logout')
        .and('contain.text', this.data.username)
    })
})