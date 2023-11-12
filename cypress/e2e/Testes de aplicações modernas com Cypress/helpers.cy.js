describe('helpers...', () => {

    beforeEach(() => {
        cy.visit('https://wcaquino.me/cypress/componentes.html')        
    })

    beforeEach(() => {
        cy.reload()
    })

    it('Wrap', () => {
        const obj = { nome: 'User', idede: 20 }

        expect(obj).to.have.property('nome')
        cy.wrap(obj).should('have.property', 'nome')

        cy.get('#formNome').type('funciona')

        cy.get('#formNome').then($el => {
            $el.val('funciona via jquery')
        })
        
        cy.get('#formNome').then($el => {
            cy.wrap($el).type('funciona via wrap')
        })

        // const promise = Promise((resolve, reject) => {
        //     setTimeout(() => {
        //         resolve(10)
        //     }, 500)
        // })

        // cy.get('#buttonSimple').then(() => console.log('Encontrei o primeiro botão'))
        // promise.then(num => console.log(num))
        // cy.wrap(promise).then(ret => console.log(ret))
        // cy.get('#buttonList').then(() => console.log('Encontrei o segundo botão'))

        cy.wrap(1).then(num => {
            return 2
        }).should('be.eq', 2)

        cy.wrap(1).should(num => {
            // return 2
        }).should('be.eq', 1)
    })

    it('Its...', () => {
        
        const obj = { nome: 'User', idede: 20 }

        cy.wrap(obj).should('have.property', 'nome', 'User')

        cy.wrap(obj).its('nome').should('be.eq', 'User')

        const obj2 = { nome: 'User', idede: 20, endereco: { rua: 'rua dos bobos' } }
        
        cy.wrap(obj2).its('endereco').should('have.property', 'rua')

        cy.wrap(obj2).its('endereco').its('rua').should('contain', 'bobos')

        cy.wrap(obj2).its('endereco.rua').should('contain', 'bobos')

        cy.visit('https://wcaquino.me/cypress/componentes.html') 
        cy.title().its('length').should('be.equal', 20)

    })

    it('Invoke...', () => {
        
        const getValue = () => 1
        const soma = (a, b) => a + b

        cy.wrap({ fn: getValue }).invoke('fn').should('be.eq', 1)
        cy.wrap({ fn: soma }).invoke('fn', 2, 5).should('be.eq', 7)

        cy.visit('https://wcaquino.me/cypress/componentes.html')

        cy.get('#formNome').invoke('val', 'Texto via invoke')

        cy.window().invoke('alert', 'Da pra ver?')

    })
    
})