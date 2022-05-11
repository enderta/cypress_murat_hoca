describe('hover over', () => {

    it.skip('move over', () => {
        cy.visit('https://www.amazon.com/')
        cy.get('.icp-nav-link-inner > .nav-line-2 > .nav-icon').trigger('mouseover')
        //triggeer() -> mouse'u hareket ettirir

        // change country/region
        cy.contains('Change country/region').click()

        //select Canada

        //cy.get('.a-dropdown-prompt').select('Canada')
        /*
        <span class="a-dropdown-prompt">United States</span>
        yukaridaki locater bu tag icerinde geciyor.
        Ancak cy.select() kodu kullanirken locaterlarin <span></span>
        icerinde olmamasi lazim.
        */

        cy.get('#icp-selected-country').select('Canada', {force: true})
        // dropdown ellemetleri acmak ici kullaniyoruz.
    })
})