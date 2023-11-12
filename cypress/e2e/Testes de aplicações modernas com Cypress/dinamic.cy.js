describe('Dinamic tests', () => {

    beforeEach(() => {
        
        cy.visit('https://wcaquino.me/cypress/componentes.html')
        cy.reload()
    })


    const foods = ['Carne', 'Frango', 'Pizza', 'Vegetariano']

    foods.forEach((food) => {

        it(`Cadastro com ${food} variada`, () => {

            cy.get('#formNome').type('Usuario')
            cy.get('#formSobrenome').type('Qualquer')
            cy.get('[name=formSexo][value=F]').click()
            cy.xpath(`//label[contains(., '${food}')]/preceding-sibling::input`).click()
            cy.get('#formEscolaridade').select('Doutorado')
            cy.get('#formEsportes').select('Corrida')
            cy.get('#formCadastrar').click()
            cy.get('#resultado > :nth-child(1)').should('contain', 'Cadastrado!')
            
        })    

    })

    it('Deve selecionar todos usando o each', () => {

        cy.get('#formNome').type('Usuario')
        cy.get('#formSobrenome').type('Qualquer')
        cy.get('[name=formSexo][value=F]').click()

        cy.get('[name=formComidaFavorita]').click({ multiple: true })

        cy.get('#formEscolaridade').select('Doutorado')
        cy.get('#formEsportes').select('Corrida')

        // cy.get('#formCadastrar').click()
        // cy.get('#resultado > :nth-child(1)').should('contain', 'Cadastrado!')

        cy.clickAlert('#formCadastrar', 'Tem certeza que voce eh vegetariano?')

        // ou

        cy.reload()

        cy.get('#formNome').type('Usuario')
        cy.get('#formSobrenome').type('Qualquer')
        cy.get('[name=formSexo][value=F]').click()

        // cy.get('[name=formComidaFavorita]').click({ multiple: true })
        cy.get('[name=formComidaFavorita]').each(($el) => {
            // $el.click()
            cy.wrap($el).click()
        })

        cy.get('#formEscolaridade').select('Doutorado')
        cy.get('#formEsportes').select('Corrida')

        // cy.get('#formCadastrar').click()
        // cy.get('#resultado > :nth-child(1)').should('contain', 'Cadastrado!')

        cy.clickAlert('#formCadastrar', 'Tem certeza que voce eh vegetariano?')
        
        // outro ex

        cy.reload()

        cy.get('#formNome').type('Usuario')
        cy.get('#formSobrenome').type('Qualquer')
        cy.get('[name=formSexo][value=F]').click()

        // cy.get('[name=formComidaFavorita]').click({ multiple: true })
        cy.get('[name=formComidaFavorita]').each(($el) => {
            // $el.click()
            if ($el.val() != 'vegetariano')
                cy.wrap($el).click()
        })

        cy.get('#formEscolaridade').select('Doutorado')
        cy.get('#formEsportes').select('Corrida')
        cy.get('#formCadastrar').click()
        cy.get('#resultado > :nth-child(1)').should('contain', 'Cadastrado!')

        // cy.clickAlert('#formCadastrar', 'Tem certeza que voce eh vegetariano?')

    })

})