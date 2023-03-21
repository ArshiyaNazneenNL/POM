const { defineConfig } = require("cypress");

async function setupNodeEvents(on, config){
  return config;
}

module.exports = defineConfig({
  e2e: {
    setupNodeEvents,
    specPattern:"cypress/automation/pom.js",
    env:{
      orangehrm_homepage: "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    }
    },
  
});
