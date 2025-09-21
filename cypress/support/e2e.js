// Importa custom commands.
import './commands'

afterEach(function() {
  // Atribui no título o nome do teste em execução.
  const testName = this.currentTest.title
  const timestamp = new Date().toISOString()
  // Cria a pasta abaixo para organizar os screenshots de êxito
  cy.screenshot(`resultado/${testName}_${timestamp}`)
})