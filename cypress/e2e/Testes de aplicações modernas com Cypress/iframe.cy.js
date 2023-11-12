describe('Work with iFrames', () => {
    
    // beforeEach(() => {
    //     cy.visit('https://wcaquino.me/cypress/componentes.html')        
    // })


    it('Deve preencher campo de texto', () => {

        cy.visit('https://wcaquino.me/cypress/componentes.html')
        
        cy.get('#frame1').then((iframe) => {
            const body = iframe.contents().find('body')
            
            cy.wrap(body).find('#tfield')
                .type('funciona?')
                .should('have.value', 'funciona?')

            // --> Chama o alert
            // cy.on('window:alert', (msg) => {  // cy.on() - captura eventos na tela
            //     expect(msg).to.be.eq('Alert Simples')
            // }) 
            
            // --> Precisa clocar no OK do alert para passar
            // cy.wrap(body).find('#otherButton').click()
        })

    })

    it('Deve testar frame diretamente', () => {
        
        cy.visit('https://wcaquino.me/cypress/frame.html')
        
        cy.get('#otherButton').click()
        cy.on('window:alert', (msg) => {  // cy.on() - captura eventos na tela
            expect(msg).to.be.eq('Click OK!')
        })

    })
    
})