describe('Cypress basics', () => {

    it('Should visit a page and assert title', () => {
        
        cy.visit('https://wcaquino.me/cypress/componentes.html')
        
        // const title = cy.title()
        // console.log(title)

        // ferramenta de pausa ".pause()"

        // cy.pause()

        // cy.title().should('be.eq', 'Crtturu') // causar um erro para pegar o dado correto
        cy.title().should('be.eq', 'Campo de Treinamento')
        cy.title().should('contain', 'Campo').debug()
        cy.title().debug().should('contain', 'Campo')

        // ferramenta de debug ".debug()"

        cy.title()
            .should('be.eq', 'Campo de Treinamento')
            .should('contain', 'Campo')
        
        cy.title()
            .should('be.eq', 'Campo de Treinamento')
            .end('contain', 'Campo')
    })

    it('Should find and interact with an element', () => {
        
        cy.visit('https://wcaquino.me/cypress/componentes.html')

        cy.get('#buttonSimple').click()

        cy.get('#buttonSimple')
            .click()
            .should('have.value', 'Obrigado!')
    })

    it('Achando o title', () => {

        cy.visit('https://wcaquino.me/cypress/componentes.html')

        cy.title().should('be.eq', 'Campo de Treinamento')
        cy.title().should('contain', 'Campo')

        cy.title()
            .should('be.eq', 'Campo de Treinamento')
            .should('contain', 'Campo')

        cy.title().then(title => {
            console.log(title)
        })

        cy.title().should(title => {
            console.log(title)
        })

        let syncTitle

        cy.title().then(title => {
            console.log(title)

            cy.get('#formNome').type(title)

            syncTitle = title
        })

        cy.get('[data-cy="dataSobrenome"]').then($el => {
            $el.val(syncTitle)
        })

        cy.get('[data-cy="dataSobrenome"]').then($el => {
            $el.val(syncTitle)
        })

        cy.get('#elementosForm\\:sugestoes').then($el => {
            cy.wrap($el).type(syncTitle)
        })
        
    })
    
})