Cypress.on('uncaught:exception', (err) => {
    if (err.message.includes('Minified React error #418')) {
        return false
    }
})


describe('Cenários de teste na tela de cadastro', () => {
    beforeEach(() => {
        cy.visit('/loja/register')
    });

    it('Cadastro realizado com sucesso', () => {
        const email = `pedro${Date.now()}@teste.com.br`

        cy.get('input[type="text"]').type('Pedro Teste')
            .get('input[type="email"]').type(email)
            .get('input[type="password"]').type('Teste12345')
            .get('button[type="submit"]').click()

    });        

     it('Cadastro com campo de email vazio', () => {

        cy.get('input[type="text"]').type('Pedro Teste')
            .get('input[type="password"]').type('Teste12345')
            .get('button[type="submit"]').click()

    });

    it('Cadastro com campo de senha vazio', () => {
            
        cy.get('input[type="text"]').type('Pedro Teste')
            .get('input[type="email"]').type('pedro@teste.com.br')
            .get('button[type="submit"]').should('be.disabled')


    });  

    it('Cadastro com todos os campos vazios', () => {

        cy.get('button[type="submit"]').should('be.disabled')

    });  

    it('Cadastro com email sem @', () => {

        cy.get('input[type="text"]').type('Pedro Teste')
            .get('input[type="email"]').type('pedroteste.com.br')
            .get('input[type="password"]').type('Teste12345')
            .get('button[type="submit"]').click()

    });        

    it('Cadastro com senha menor que 8 caracteres', () => {

        cy.get('input[type="text"]').type('Pedro Teste')
            .get('input[type="email"]').type('pedro@teste.com.br')
            .get('input[type="password"]').type('Teste12')
            .get('button[type="submit"]').should('be.disabled')

    });


    
});