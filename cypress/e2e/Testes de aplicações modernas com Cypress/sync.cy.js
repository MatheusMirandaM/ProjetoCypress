describe('Sincronismo', () => {
    
    beforeEach(() => {
        cy.visit('https://wcaquino.me/cypress/componentes.html')
    })

    beforeEach(() => {
        cy.reload()
    })

    it('Deve aguaradar o elemento estar disponivel', () => {

        cy.get('#novoCampo').should('not.exist')
        cy.get('#buttonDelay').click()
        cy.get('#novoCampo').should('not.exist')
        cy.get('#novoCampo').should('exist')
        cy.get('#novoCampo').type('funciona')
        
    })

    it('Deve fazer retrys', () => {

        cy.get('#novoCampo').should('not.exist')
        cy.get('#buttonDelay').click()
        cy.get('#novoCampo').should('not.exist')
        cy.get('#novoCampo')
            .should('exist')
            .type('funciona')
        
    })

    it('Uso do find', () => {
        
        cy.get('#buttonList').click()
        cy.get('#lista li') // cy.get('#lista li span')
            .find('span')
        
        cy.get('#buttonList').click()
        cy.get('#lista li') // cy.get('#lista li span')
            .find('span')
            .should('contain', 'Item 1')
        cy.get('#lista li')
            .find('span')
            .should('contain', 'Item 2')

        cy.get('#lista li span')
            .should('contain', 'Item 2')
    })

    it('Uso do find (Listar DOM)', () => {

        cy.get('#buttonListDOM').click()
        cy.get('#lista li') // cy.get('#lista li span')
            .find('span')
            .should('contain', 'Item 1')
        cy.get('#lista li')
            .find('span')
            .should('contain', 'Item 2')

        cy.get('#lista li span')
            .should('contain', 'Item 2')
        
    })

    it('Uso do timeout', () => {

        cy.get('#buttonDelay').click()
        cy.get('#novoCampo', { tomeout: 1000 }).should('not.exist')
        cy.get('#novoCampo', { tomeout: 1000 }).should('exist')

        cy.get('#buttonListDOM').click()
        cy.wait(5000) // evitar o uso do wait()
        cy.get('#lista li span', { tomeout: 5000})
            .should('contain', 'Item 2')

        cy.get('#buttonListDOM').click()
        cy.get('#lista li span', { tomeout: 5000})
            .should('have.length', 1)

        cy.get('#buttonListDOM').click()
        cy.get('#lista li span', { tomeout: 10000})
            .should('have.length', 2)

        cy.get('#buttonListDOM').click()
        cy.get('#lista li span')
            .should('have.length', 1)
        cy.get('#lista li span')
            .should('have.length', 2)

    })

    it('Click retry', () => {
        
        cy.get('#buttonCount')
            .click()
            .should('have.value', '1')
        
        cy.get('#buttonCount')
            .click()
            .should('have.value', 1)

        cy.get('#buttonCount')
            .click()
            .should('have.value', '11')

        // cy.get('#buttonCount')
        //     .click()
        //     .click()
        //     .should('have.value', '111')
    })

    it('Should vs Then', () => {

        cy.get('#buttonListDOM').click()
        
        // cy.get('#lista li span').debug()

        cy.get('#buttonListDOM').click()
        cy.get('#lista li span').then($el => {
            expect($el).to.have.length(1)
        })

        cy.get('#buttonListDOM').click()
        cy.get('#lista li span').should($el => {
            expect($el).to.have.length(1)
        })

        cy.get('#buttonListDOM').click()
        cy.get('#lista li span').then($el => {
            console.log($el)
            expect($el).to.have.length(1)
        })

        cy.get('#buttonListDOM').click()
        cy.get('#lista li span').should($el => {
            console.log($el)
            expect($el).to.have.length(1)
        })

        cy.get('#buttonListDOM').then($el => {
            expect($el).to.have.length(1)
        }).end('have.id', 'buttonListDOM')

        cy.get('#buttonListDOM').should($el => {
            expect($el).to.have.length(1)
        }).end('have.id', 'buttonListDOM')

        cy.get('#buttonListDOM').should($el => {
            expect($el).to.have.length(1)
            return 2 // .should() ignora return e o .then() sempre retorna o elemento que ele recebeu
        }).end('have.id', 'buttonListDOM')

        cy.get('#buttonListDOM').then($el => {
            expect($el).to.have.length(1)
            // return 2
        }).end('eq', 2)
            .end('have.id', 'buttonListDOM')

        cy.get('#buttonListDOM').should($el => {
            expect($el).to.have.length(1)
            return 2
        }).end('eq', 2)
            .end('have.id', 'buttonListDOM')
            
        cy.get('#buttonListDOM').then($el => {
            expect($el).to.have.length(1)
            cy.get('#buttonList')
        })  

    })
})