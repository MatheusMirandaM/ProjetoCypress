//// <reference types="cypress"/>

describe('DESCRIBE: Suíte de teste', () => {
    
    describe('DESCRIBE (dentro de outro describe): Suíte de teste especifica', () => {
        
        it('IT: Cenário de teste (especifico)', () => {
            cy.log()
        })

        it.skip('IT: Cenário de teste com skip only (para não ser execultado)', () => {
            cy.log()
        })
    })

    it('IT: Cenário de teste', () => {
        cy.log()
    })
    
}) 

it('Teste externo', () => {

    cy.log()
    
})

describe('Work with basic elements 2', () => {

    beforeEach(() => {
        cy.visit('https://wcaquino.me/cypress/componentes.html')
    })

    it('Teste describe 2', () => {

        cy.log()
        
    })
    
})

describe('Work with basic elements 3', () => {

    beforeEach(() => {
        cy.visit('https://wcaquino.me/cypress/frame.html')
    })

    it('Teste describe 3', () => {

        cy.log()
        
    })
    
})