describe('XHR - XML, HTTP, Request', () => {
    //XHR, JavaScript ile sunulmus bir API
    //Web sitesini es zamanli olarak arka planda calisan olaylari takip eder.

    const requestUrl = "https://jsonplaceholder.cypress.io/comments"

    it('XHR Example 2', () => {
        cy.request('POST', requestUrl, {
            userId:501,
            title: "Cypres cok kolay",
            body: "JavaScript daha da kolay"
        }).then((response) =>{
            console.log(response)
            expect(response.status).to.eq(201)
            expect(response).property('body').to.contain({title: "Cypres cok kolay"})
            expect(response.body).property('userId').to.be.a('number')
        })        
    })
})