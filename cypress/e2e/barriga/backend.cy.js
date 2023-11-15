describe('Should teste at a functional level', () => {

    let token

    before(() => {

        cy.getToken('matheusbatista0494@gmail.com', 'Crvg1002')
            .then((tkn) => {
                token = tkn
            })
   
    })

    it.only('Should creat an account', () => {

        cy.request({
            url: 'http://barrigarest.wcaquino.me/contas',
            method: 'POST',
            headers: { Authorization: `JWT ${token}` },
            body: {
                nome: 'Conta via rest',
            }
        }).as('response')

        cy.get('@response').then((res) => {
            expect(res.status).to.be.eq(201)
            expect(res.body).to.have.property('id')
            expect(res.body).to.have.property('nome', 'Conta via rest')
        })

    })

    it('Should update an account', () => {


    })
    
    it('Should not create an acconut with same name', () => {

    })

    it('Should create a transaction', () => {
        
        
    })

    it('Should get balance', () => {

        
    })

    it('Should remove a transaction', () => {

        
    })

})