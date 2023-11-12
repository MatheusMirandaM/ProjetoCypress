describe('Fixtures testes', () => {

    beforeEach(() => {

        cy.visit('https://wcaquino.me/cypress/componentes.html') 
        
    })

    it('Get data from fixtures file', function () {
        
        cy.fixture('userData').as('usuario').then(() => {
            cy.get('#formNome').type(this.usuario.nome)
            cy.get('#formSobrenome').type(this.usuario.sobrenome)
            cy.get(`[name=formSexo][value=${this.usuario.sexo}]`).click()
            cy.get(`[name=formComidaFavorita][value=${this.usuario.comida}]`).click()
            cy.get('#formEscolaridade').select(this.usuario.escolaridade)
            cy.get('#formEsportes').select(this.usuario.esportes)
        }) // por serem todos métodos cy, o cypress faz o sincronismo, caso ouvesse outro metodo, os comandos abaixos deveriam entrar na promise
        cy.get('#formCadastrar').click()
        cy.get('#resultado > :nth-child(1)').should('contain', 'Cadastrado!')

    })    
    
})