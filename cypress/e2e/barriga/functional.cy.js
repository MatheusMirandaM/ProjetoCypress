import loc from '../../support/locators'
import '../../support/commandsContas'
describe('Should teste at a functional level', () => {

    beforeEach(() => {

        cy.visit('/')
        cy.login('matheusbatista0494@gmail.com', 'Crvg1002')
        cy.resetApp()

        // cy.get(loc.LOGIN.USER).type('matheusbatista0494@gmail.com')
        // cy.get(loc.LOGIN.PASSWORD).type('Crvg1002')
        // cy.get(loc.LOGIN.BTN_LOGIN).click()
        // cy.get(loc.MESSAGE).should('contain', 'Bem vindo')

    })

    it('Should creat an account', () => {

        cy.acessarMenuConta()
        cy.inserirConta('Conta teste')
        cy.get(loc.MESSAGE).should('contain', 'Conta inserida com sucesso!')
    
        // Por ser beforeEach, ocorre um erro caso deixar o teste abaixo dentro de um novo it
        cy.acessarMenuConta()
        cy.xpath(loc.CONTAS.XP_BTN_ALTERAR).click()
        cy.get(loc.CONTAS.NOME)
            .clear()
            .type('Conta alterada')
        cy.get(loc.CONTAS.BTN_SALVAR).click()
        cy.get(loc.MESSAGE).should('contain', 'Conta atualizada com sucesso!')

        // Por ser beforeEach, ocorre um erro caso deixar o teste abaixo dentro de um novo it
        cy.acessarMenuConta()
        cy.get(loc.CONTAS.NOME).type('Conta alterada')
        cy.get(loc.CONTAS.BTN_SALVAR).click()
        cy.get(loc.MESSAGE).should('contain', '400')

    })

    // it('Should update an account', () => {

    //     cy.get(loc.MENU.SETTINGS).click()
    //     cy.get(loc.MENU.CONTAS).click()
    //     cy.xpath(loc.CONTAS.XP_BTN_ALTERAR).click()
    //     cy.get(loc.CONTAS.NOME)
    //         .clear()
    //         .type('Conta alterada')
    //     cy.get(loc.CONTAS.BTN_SALVAR).click()
    //     cy.get(loc.MESSAGE).should('contain', 'Conta atualizada com sucesso!')

    // })
    
    // it('Should not create an acconut with same name', () => {

    //     cy.acessarMenuConta()
    //     cy.get(loc.CONTAS.NOME).type('Conta alterada')
    //     cy.get(loc.CONTAS.BTN_SALVAR).click()
    //     cy.get(loc.MESSAGE).should('contain', '400')
    // })
})