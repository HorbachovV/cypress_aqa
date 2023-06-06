const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "ann135",
  defaultCommandTimeout: 4000,
  viewportHeight: 720,
  viewportWidth: 1280,
  env: {
    url: 'https://rahulshettyacademy.com/',
    userNmae: 'Volodymyr',
    userEmail: 'example@gmail.com',
    userPassword: 'somepassword'
  },
  e2e: {
    specPattern: 'cypress/integration/ui/*.js' // шлях до тестів,щоб було видно ранеру
    // specPattern: 'cypress/integration/api/*.js' // шлях до тестів,щоб було видно ранеру
  },
});
