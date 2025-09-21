const { defineConfig } = require("cypress");

// Lê o .env e o carrega no 'process.env' do Node.js.
require('dotenv').config();

module.exports = defineConfig({
  e2e: {
    screenshotOnRunFailure: false, 
    // Define URI base de acesso
    baseUrl: 'https://bugbank.netlify.app',
    viewportWidth: 1920,
    viewportHeight: 1080,

    setupNodeEvents(on, config) {
      // Para node event listeners
    },
    env: {
      // Define variável de ambiente
      pass: process.env.PASSWORD_REGISTERED,
    },
  },
});
