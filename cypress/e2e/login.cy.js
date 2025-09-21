/// <reference types="cypress"/>

describe('Testes de UI', () => {
  beforeEach(() => {
    // Acessa página a ser testada.
    cy.visit('/#')
  })

  // Caso de teste da reproducao correta do log in
  it('CT-01 - Deve realizar log in com cadastro válido', () => {
    cy.logInValido()

    cy.contains('bem vindo ao BugBank :)').should('be.visible');
  })
  // Caso de teste da reproducao incorreta do log in
  it('CT-02 - Deve tentar realizar log in inválido', () => {
    cy.logInInvalido('inexistente')

    cy.contains('Usuário ou senha inválido.').should('be.visible');
  })
})