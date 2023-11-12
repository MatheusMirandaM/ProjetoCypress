describe('Work with Popup', () => {

    it('Deve testar popup diretamente', () => {
        
        cy.visit('https://wcaquino.me/cypress/frame.html')
        
        cy.get('#otherButton').click()
        cy.on('window:alert', (msg) => {  // cy.on() - captura eventos na tela
            expect(msg).to.be.eq('Click OK!')
        })

    })
    
    it('Deve verificar se o popup foi invocado', () => {

        cy.visit('https://wcaquino.me/cypress/componentes.html')
        
        cy.window().then((win) => { // mockando o popup (o stub faz com que a tela de popup não seja exibida)
            cy.stub(win, 'open').as('winOpen') // metodo "open": trabalha com popup
        })
        cy.get('#buttonPopUp').click() // invoca o popup
        cy.get('@winOpen').should('be.called') // verificar se o popup foi chamado

    })

    describe('With links...', () => {

        beforeEach(() => {
            cy.visit('https://wcaquino.me/cypress/componentes.html')
        })

        it('Check popup url', () => {

            cy.contains('Popup2')
                .should('have.prop', 'href') // "have.prop" retorna a propria propriedade
                .end('eq', 'https://wcaquino.me/cypress/frame.html')
        })

        it('Shold access popup dinamically', () => {
            
            cy.contains('Popup2').then(($a) => {
                const href = $a.prop('href') // prop() propriedade 

                cy.visit(href)
                cy.get('#tfield').type('funciona')
            })  

        })

        it('Shold force link on same page', () => {

            cy.contains('Popup2')
                .invoke('removeAttr', 'target')
                .click()
            
            cy.get('#tfield').type('funciona')
        })
        
    })
})