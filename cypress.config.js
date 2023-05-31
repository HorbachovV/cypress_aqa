const { defineConfig } = require("cypress");

module.exports = defineConfig({
  defaultCommandTimeout: 4000,
  viewportHeight: 720,
  viewportWidth: 1280,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: 'cypress/integration/ui/*.js' // шлях до тестів,щоб було видно ранеру
  },
});
