const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    chromeWebSecurity: false, // ✅ add this line
    setupNodeEvents(on, config) {
      // node event listeners
    },
  },
});
