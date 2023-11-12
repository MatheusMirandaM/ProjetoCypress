describe('Work with locators', () => {
    
    beforeEach(() => {
        cy.visit('https://wcaquino.me/cypress/componentes.html')        
    })

    beforeEach(() => {
        cy.reload()
    })

    it('usin jquery selector', () => {

        cy.get(':nth-child(1) > :nth-child(3) > [type="button"]') // sugerido
        cy.get('table') // navegando para a tabela
        cy.get('table#tabelaUsuarios') // navegando para a tabela usuarios
        cy.get('table#tabelaUsuarios tbody') // navegando para o corpo da tabela usuarios
        cy.get('table#tabelaUsuarios tbody > tr') // navegando para dentro do cormo da tabela usuarios
        cy.get('table#tabelaUsuarios tbody > tr td:nth-child(3)') // navegando para uma coluna da tabela usuarios
        cy.get('table#tabelaUsuarios tbody > tr td:nth-child(3) > input') // navegando para os dados da coluna da tabela usuarios
        cy.get('table#tabelaUsuarios tbody > tr:eq(0) td:nth-child(3) > input') // navegando para um dos dados da coluna da tabela usuarios
        
        // OBS: ">" filho, e o espaço " ", para descendente, "~" para irmão

        cy.get('table#tabelaUsuarios tbody > tr:eq(0) td:nth-child(3) > input').click()

        // Outras formas de navegar

        cy.get("[value='Clique aqui']")
        cy.get('[value=\'Clique aqui\']')

        cy.get("[onclick*='Francisco']") // onclick*: o "*" significa contain ou Contem
        cy.get('[onclick*=\'Francisco\']')

        cy.get("td:contains('Doutorado')")
        cy.get('td:contains(\'Doutorado\')')

        cy.get("table#tabelaUsuarios td:contains('Doutorado'):eq(0) ~ td:eq(3) > input")
        cy.get('table#tabelaUsuarios td:contains(\'Doutorado\'):eq(0) ~ td:eq(3) > input')

        // ou
        
        cy.get("table#tabelaUsuarios tr:contains('Doutorado'):eq(0) td:eq(6) input")
        cy.get('table#tabelaUsuarios tr:contains(\'Doutorado\'):eq(0) td:eq(6) input')

    })

    it.only('using xpath', () => {

        cy.xpath('/html/body/center/form/input[3]') // navegando por nivel
        cy.xpath('//input') // navegando diretamente para o primeito input

        cy.xpath("//input[@type='button']")
        cy.xpath("//input[@type='button'][@value='Clique aqui']")
        cy.xpath("(//input[@type='button'][@value='Clique aqui'])[1]")

        // ou

        cy.xpath('//input[contains(@onclick, \'Francisco\')]')
        cy.xpath("//table[@id='tabelaUsuarios']//td[contains(., 'Francisco')]/following-sibling::td/input") // following-sibling:: quando é irmão
        cy.xpath("//table[@id='tabelaUsuarios']//td[contains(., 'Francisco')]/..//input")
        cy.xpath("//table[@id='tabelaUsuarios']//td[contains(., 'Francisco')]/..//input[@type='text']")
        cy.xpath("(//table[@id='tabelaUsuarios']//td[contains(., 'Doutorado')])[2]/..//input[@type='text']")
        cy.xpath("(//table[@id='tabelaUsuarios']//td[contains(., 'Doutorado')])[2]/..//input[@type='radio']")
        cy.xpath("(//table[@id='tabelaUsuarios']//td[contains(., 'Doutorado')])[2]/..//input[@type='checkbox']")
        cy.xpath("//*[@data-test='data2']")
        cy.xpath("//td[contains(., 'Usuario A')]/following-sibling::td[contains(., 'Mestrado')]/..//input[@type='text']")
            .type('funciona')
        
    })

})