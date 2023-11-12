describe('Times', () => {
    
    beforeEach(() => {
        cy.visit('https://wcaquino.me/cypress/componentes.html')
        cy.reload
    })

    it('Goin back to the past', () => {

        // cy.get('#buttonNow').click()
        // cy.get('#resultado > span').should('contain', '09/11/2023')
        
        // cy.clock()
        // cy.get('#buttonNow').click()
        // cy.get('#resultado > span').should('contain', '31/12/1969')

        const dt = new Date(2012, 3, 10, 15, 23, 50)

        cy.clock(dt.getTime())
        cy.clock()
        cy.get('#buttonNow').click()
        cy.get('#resultado > span').should('contain', '10/04/2012')
    })

    it('Goes to the future', () => {

        // cy.get('#buttonTimePassed').click()
        // cy.get('#resultado > span').should('contain', '16995')
        // cy.get('#resultado > span').invoke('text').should('gt', 1699504968807)

        // cy.clock()
        // cy.get('#buttonTimePassed').click()
        // cy.get('#resultado > span').invoke('text').should('lte', 0)
        // cy.wait(1000)
        // cy.get('#buttonTimePassed').click()
        // cy.get('#resultado > span').invoke('text').should('lte', 1000)   
        
        // cy.tick(5000)
        // cy.get('#resultado > span').should('contain', '16995')
        // cy.get('#resultado > span').invoke('text').should('gte', 5000)

        // cy.tick(10000)
        // cy.get('#resultado > span').should('contain', '16995')
        // cy.get('#resultado > span').invoke('text').should('gte', 15000)
    })

})