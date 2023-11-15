import loc from '../../support/locators'
import '../../support/commandsContas'
describe('Should teste at a functional level', () => {

    beforeEach(() => {

        cy.visit('http://barrigareact.wcaquino.me')
        cy.login('matheusbatista0494@gmail.com', 'Crvg1002')
        cy.resetApp()
   
        // cy.get(loc.LOGIN.USER).type('matheusbatista0494@gmail.com')
        // cy.get(loc.LOGIN.PASSWORD).type('Crvg1002')
        // cy.get(loc.LOGIN.BTN_LOGIN).click()
        // cy.get(loc.MESSAGE).should('contain', 'Bem vindo')

    })

    beforeEach(() => {

        cy.get(loc.MENU.HOME).click() 

    })

    it('Should creat an account', () => {

        cy.acessarMenuConta()
        cy.inserirConta('Conta de teste')
        cy.get(loc.MESSAGE).should('contain', 'Conta inserida com sucesso!')
    
        // // Por ser beforeEach, ocorre um erro caso deixar o teste abaixo dentro de um novo it
        // cy.acessarMenuConta()
        // cy.xpath(loc.CONTAS.FN_XP_BTN_ALTERAR('Conta para alterar')).click()
        // cy.get(loc.CONTAS.NOME)
        //     .clear()
        //     .type('Conta alterada')
        // cy.get(loc.CONTAS.BTN_SALVAR).click()
        // cy.get(loc.MESSAGE).should('contain', 'Conta atualizada com sucesso!')

        // // Por ser beforeEach, ocorre um erro caso deixar o teste abaixo dentro de um novo it
        // cy.acessarMenuConta()
        // cy.get(loc.CONTAS.NOME).type('Conta mesmo nome')
        // cy.get(loc.CONTAS.BTN_SALVAR).click()
        // cy.get(loc.MESSAGE).should('contain', '400')

        // // Por ser beforeEach, ocorre um erro caso deixar o teste abaixo dentro de um novo it
        // cy.get(loc.MENU.MOVIMENTACAO).click()
        // cy.get(loc.MOVIMENTACAO.DESCRICAO).type('Desc')
        // cy.get(loc.MOVIMENTACAO.VALOR).type('123')
        // cy.get(loc.MOVIMENTACAO.INTERESSADO).type('Inter')
        // cy.get(loc.MOVIMENTACAO.CONTA).select('Conta para movimentacao')
        // cy.get(loc.MOVIMENTACAO.STATUS).click()
        // cy.get(loc.MOVIMENTACAO.BTN_SALVAR).click()
        // cy.get(loc.MESSAGE).should('contain', 'sucesso')

        // cy.get(loc.EXTRATO.LINHAS).should('have.length', 7)
        // cy.xpath(loc.EXTRATO.FN_XP_BUSCA_ELEMENTO('Desc', '123')).should('exist')

        // // Por ser beforeEach, ocorre um erro caso deixar o teste abaixo dentro de um novo it
        // cy.get(loc.MENU.HOME).click()
        // cy.xpath(loc.SALDO.FN_XP_SALDO_CONTA('Conta para saldo')).should('contain', '123,00')

        // // Por ser beforeEach, ocorre um erro caso deixar o teste abaixo dentro de um novo it
        // cy.get(loc.MENU.EXTRATO).click()
        // cy.xpath(loc.EXTRATO.FN_XP_REMOVER_ELEMENTO('Movimentacao para exclusao')).click()
        // cy.get(loc.MESSAGE).should('contain', 'sucesso')
    })

    it('Should update an account', () => {

        cy.get(loc.MENU.SETTINGS).click()
        cy.get(loc.MENU.CONTAS).click()
        cy.xpath(loc.CONTAS.XP_BTN_ALTERAR).click()
        cy.get(loc.CONTAS.NOME)
            .clear()
            .type('Conta alterada')
        cy.get(loc.CONTAS.BTN_SALVAR).click()
        cy.get(loc.MESSAGE).should('contain', 'Conta atualizada com sucesso!')

    })
    
    it('Should not create an acconut with same name', () => {

        cy.acessarMenuConta()
        cy.get(loc.CONTAS.NOME).type('Conta alterada')
        cy.get(loc.CONTAS.BTN_SALVAR).click()
        cy.get(loc.MESSAGE).should('contain', '400')
    })

    it('Should create a transaction', () => {
        
        cy.get(loc.MENU.MOVIMENTACAO).click()
        cy.get(loc.MOVIMENTACAO.DESCRICAO).type('Desc')
        cy.get(loc.MOVIMENTACAO.VALOR).type('123')
        cy.get(loc.MOVIMENTACAO.INTERESSADO).type('Inter')
        cy.get(loc.MOVIMENTACAO.STATUS).click()
        cy.get(loc.MOVIMENTACAO.BTN_SALVAR).click()
        cy.get(loc.MESSAGE).should('contain', 'sucesso')
        
        cy.get('.list-group').should('have.length', 7)
        cy.xpath("//span[contains(.,'Desc')]/following-sibling::small[contains(., '123')]").should('exist')

        cy.get(loc.EXTRATO.LINHAS).should('have.length', 7)
        cy.xpath(loc.EXTRATO.XP_BUSCA_ELEMENTO).should('exist')
        
    })

    it('Should get balance', () => {

        cy.get(loc.MENU.HOME).click()
        cy.xpath(loc.SALDO.FN_XP_SALDO_CONTA('Conta para saldo')).should('contain', '534,00')
        
        cy.get(loc.MENU.EXTRATO).click()
        cy.xpath(loc.EXTRATO.FN_XP_ALTERAR_ELEMENTO('Movimentacao 1, calculo saldo'))
        // cy.wait(1000)
        cy.get(loc.MOVIMENTACAO.DESCRICAO).should('have.value', 'Movimentacao 1, calculo saldo')
        cy.get(loc.MOVIMENTACAO.STATUS).click()
        cy.get(loc.MOVIMENTACAO.BTN_SALVAR).click()
        cy.get(loc.MESSAGE).should('contain', 'sucesso')

        cy.get(loc.MENU.HOME).click()
        cy.xpath(loc.SALDO.FN_XP_SALDO_CONTA('Conta para saldo')).should('contain', '4000,00')
        
    })

    it('Should remove a transaction', () => {

        cy.get(loc.MENU.EXTRATO).click()
        cy.xpath(loc.EXTRATO.FN_XP_REMOVER_ELEMENTO('Desc')).click()
        cy.get(loc.MESSAGE).should('contain', 'sucesso')
        
    })

})