// Importa a função buildMockUser do arquivo userModel.js.
const { buildMockUser } = require('./utils/userModel')
// Recupera senha do usuário a partir da variável de ambiente definida
let clientPassword = Cypress.env('pass')

// Padrao de projeto para encapsular comportamentos repetitivos
Cypress.Commands.add('logInInvalido', (userType) => {
  if (userType == 'inexistente') {
    // Carrega arquivo da pasta fixtures (contendo massa de teste).
    cy.fixture('users.json').then((clients) => {
      const client = clients[userType]
      // Recupera do fixture o usuário correspondente ao tipo fornecido e valida seu conteúdo
      if (!client) {
        throw new Error(`Usuário do tipo "${userType}" não foi inserido em user.json`)
      }
      // Se conteúdo ok, preenche campos da página e submete o log in
      cy.fillLogIn(client.email, clientPassword)
    })
    cy.contains('button', 'Acessar').click()
  }
  else {
    // Exibe mensagem no log se for passado um status de conta inválido.
    console.log('Situação de cliente não esperada para este teste!')
  }
})

Cypress.Commands.add('logInValido', () => {
  cy.createClientData('existente').then((mockedUser) => {
    // Recupera do fixture o cliente correspondente ao tipo fornecido e valida seu conteúdo para preencher campos
    if (!mockedUser) {
      throw new Error('Usuário do tipo "existente" não foi inserido em user.json')
    }
    cy.fillLogIn(mockedUser.email, clientPassword)
  })
  // Submete log in
  cy.contains('button', 'Acessar').click()
})

Cypress.Commands.add('fillLogIn', (mail, pass) => {
  cy.contains('div', 'E-mail').find('input[name="email"]').type(mail)
  cy.contains('div', 'Senha').find('input[name="password"]').type(pass)
})

Cypress.Commands.add('createClientData', (userType) => {
  // Carrega arquivo da pasta fixtures (contendo massa de teste).
  return cy.fixture('users.json').then((clients) => {
    const client = clients[userType]
    // Recupera do fixture o usuário correspondente ao tipo fornecido e valida seu conteúdo, além do status informado
    if (userType == 'existente' && client) {
      const mockUser = buildMockUser(client, clientPassword)
      // Converte o objeto criado em String e salva no localStorage para persisti-lo
      const mockUserString = JSON.stringify(mockUser)

      cy.window().its('localStorage').invoke('setItem', mockUser.email, mockUserString)

      // Retorna objeto mockado e encapsulado para ser usado no fluxo assíncrono do Cypress.
      return cy.wrap(mockUser)
    }
    else {
      return cy.wrap(null)
    }
  })
})